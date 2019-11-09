import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Thumb from './index';

let wrapper;
const thumbData = {
  name: 'nome',
  images: [{ url: 'teste.jpg' }],
  artists: [{ name: 'nome 1' }, { name: 'nome 2' }],
};

it('Thumb should be a function', () => {
  expect(typeof Thumb).toBe('function');
});

it('Should Search to match snapshot', () => {
  const tree = renderer.create(<Thumb data={thumbData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Component Input', () => {
  let mediaProps;

  beforeEach(() => {
    wrapper = shallow(<Thumb data={thumbData} />);

    mediaProps = wrapper.find('Media').props();
  });

  it('Should contain component Media', () => {
    expect(wrapper.find('Media')).toHaveLength(1);
  });

  it('Should contain param title equal "nome"', () => {
    expect(mediaProps.title).toEqual('nome');
  });

  it('Should contain param imageUrl equal "teste.jpg"', () => {
    expect(mediaProps.imageUrl).toEqual('teste.jpg');
  });

  it('Should contain param description equal "nome 1, nome 2"', () => {
    expect(mediaProps.description).toEqual('nome 1, nome 2');
  });

  it('Should not contain images', () => {
    delete thumbData.images;
    wrapper = shallow(<Thumb data={thumbData} />);

    expect(wrapper.find('Media').props().imageUrl).toBeNull();
  });

  it('Should not contain description', () => {
    delete thumbData.artists;
    wrapper = shallow(<Thumb data={thumbData} />);

    expect(wrapper.find('Media').props().description).toBeNull();
  });

  it('Should not contain data', () => {
    wrapper = shallow(<Thumb />);

    expect(wrapper.find('Media').props().description).toBeNull();
    expect(wrapper.find('Media').props().imageUrl).toBeNull();
    expect(wrapper.find('Media').props().title).toEqual();
  });
});
