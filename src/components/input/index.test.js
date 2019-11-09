import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Input from './index';

const noop = jest.fn();

it('Input should be a function', () => {
  expect(typeof Input).toBe('function');
});

it('Should Input to match snapshot', () => {
  const tree = renderer
    .create(<Input id="teste" label="Texto" handleChange={noop} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input id="teste" />);
  });

  it('Should render default', () => {
    expect(wrapper.find('label')).toHaveLength(0);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('Should default className', () => {
    expect(wrapper.hasClass('input-container')).toBeTruthy();
    expect(wrapper.find('input').hasClass('input')).toBeTruthy();
  });

  it('Should default type equal text', () => {
    expect(wrapper.find('input').prop('type')).toBe('text');
  });
});

it('Should render without label', () => {
  const wrapper = shallow(<Input id="teste" />);

  expect(wrapper.find('label')).toHaveLength(0);
  expect(wrapper.find('input')).toHaveLength(1);
});

it('Should render with label', () => {
  const wrapper = mount(<Input id="teste" label="teste" />);

  expect(wrapper.find('label')).toHaveLength(1);
  expect(wrapper.find('input')).toHaveLength(1);
});

it('Should set className container', () => {
  const wrapper = shallow(
    <Input id="teste" label="teste" className="inputClass" />
  );

  expect(wrapper.hasClass('input-container inputClass')).toBeTruthy();
});

it('Should set value', () => {
  const wrapper = shallow(<Input id="teste" defaultValue="valor do input" />);

  expect(wrapper.find('input').prop('defaultValue')).toBe('valor do input');
});

it('Should Input change', () => {
  const wrapper = shallow(<Input id="teste" handleChange={noop} />);
  wrapper.find('input').simulate('change', { target: { value: 'banana' } });

  expect(noop).toHaveBeenCalledTimes(1);
});

it('Should render search', () => {
  const wrapper = shallow(<Input id="teste" type="search" />);
  expect(wrapper.find('input').prop('type')).toBe('search');
  expect(wrapper.props().children[0]).toEqual(undefined);
});
