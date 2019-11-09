import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Media from './index';

let wrapper;

it('List should be a function', () => {
  expect(typeof Media).toBe('function');
});

it('Should List to match snapshot', () => {
  const tree = renderer
    .create(
      <Media
        title="titulo media"
        imageUrl="test.jpg"
        description="descricao media"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('paramter imageUrl', () => {
  beforeEach(() => {
    wrapper = shallow(<Media imageUrl="teste.jpg" />);
  });

  it('Should contain tag figure with class "media"', () => {
    expect(wrapper.find('figure').hasClass('media')).toBeTruthy();
  });

  it('Should contain tag img with parameter src equal "teste.jpg"', () => {
    expect(wrapper.find('img').props().src).toEqual('teste.jpg');
  });

  it('Should contain tag img with parameter alt empty', () => {
    expect(wrapper.find('img').props().alt).toEqual(' - ');
  });

  it('Should media without imageUrl', () => {
    wrapper = shallow(<Media />);

    expect(wrapper.find('img').props().src).toEqual('mock-file');
  });
});

describe('paramter title', () => {
  beforeEach(() => {
    wrapper = shallow(<Media title="titulo" />);
  });

  it('Should contain tag figcaption with title', () => {
    expect(wrapper.find('figcaption').text()).toEqual('titulo ');
  });

  it('Should contain tag img with parameter alt=tittulo', () => {
    expect(wrapper.find('img').props().alt).toEqual('titulo - ');
  });

  it('Should media without title', () => {
    wrapper = shallow(<Media />);

    expect(wrapper.find('figcaption').text()).toEqual(' ');
    expect(wrapper.find('img').props().alt).toEqual(' - ');
  });
});

describe('paramter description', () => {
  beforeEach(() => {
    wrapper = shallow(<Media description="descricao" />);
  });

  it('Should contain tag figcaption with title', () => {
    expect(wrapper.find('figcaption').text()).toEqual(' descricao');
  });

  it('Should contain tag img with parameter alt=tittulo', () => {
    expect(wrapper.find('img').props().alt).toEqual(' - descricao');
  });

  it('Should media without description', () => {
    wrapper = shallow(<Media />);

    expect(wrapper.find('figcaption').text()).toEqual(' ');
    expect(wrapper.find('img').props().alt).toEqual(' - ');
  });
});
