import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Result from './index';

let wrapper;

const dataResult = {
  items: [
    {
      id: 1,
      name: 'nome1',
      images: [{ url: 'teste1.jpg' }],
      artists: [{ name: 'nome 1' }, { name: 'nome 2' }],
    },
    {
      id: 2,
      name: 'nome 2',
      images: [{ url: 'teste2.jpg' }],
      artists: [{ name: 'nome 3' }, { name: 'nome 4' }],
    },
  ],
};

it('Thumb should be a function', () => {
  expect(typeof Result).toBe('function');
});

it('Should Search to match snapshot', () => {
  const tree = renderer
    .create(<Result value="texto" data={{ items: [] }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should render title with value', () => {
  wrapper = shallow(<Result value="texto procurado" />);

  expect(wrapper.find('h1').text()).toEqual(
    'Resultados encontrados para "texto procurado"'
  );
});

it('Should render result without items', () => {
  wrapper = shallow(<Result />);

  expect(wrapper.find('li')).toHaveLength(0);
});

it('Should render result with items', () => {
  wrapper = shallow(<Result data={dataResult} />);

  expect(wrapper.find('li')).toHaveLength(2);
});

it('Should render Media when return with items', () => {
  wrapper = shallow(<Result data={dataResult} />);
  const CpMedia = wrapper.find('Media');

  expect(CpMedia).toHaveLength(2);
  expect(CpMedia.at(0).props().title).toEqual('nome1');
  expect(CpMedia.at(0).props().mediaUrl).toEqual('teste1.jpg');
  expect(CpMedia.at(0).props().description).toEqual('nome 1, nome 2');
});

it('Tag li event click should call handleClick with item', () => {
  const mockClick = jest.fn();
  wrapper = shallow(<Result data={dataResult} handleClick={mockClick} />);
  wrapper
    .find('li')
    .at(0)
    .simulate('click');

  expect(mockClick).toHaveBeenCalledWith(dataResult.items[0]);
});

it('Tag li event click should call handleClick without item', () => {
  const mockClick = jest.fn();
  wrapper = shallow(<Result data={dataResult} />);
  wrapper
    .find('li')
    .at(0)
    .simulate('click');

  expect(mockClick).not.toHaveBeenCalled();
});
