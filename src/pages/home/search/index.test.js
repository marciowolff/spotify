import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Search from './index';

let wrapper;
const onSearchMock = jest.fn();
const changeMock = jest.fn();

it('Search should be a function', () => {
  expect(typeof Search).toBe('function');
});

it('Should Search to match snapshot', () => {
  const tree = renderer
    .create(
      <Search
        id={'1'}
        label="buscar"
        placeholder="digite"
        onChange={changeMock}
        onSearch={onSearchMock}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Component Input', () => {
  let inputProps;

  beforeEach(() => {
    wrapper = mount(
      <Search
        id={'1'}
        label="buscar"
        placeholder="digite"
        onChange={changeMock}
        onSearch={onSearchMock}
      />
    );

    inputProps = wrapper.find('Input').props();
  });

  it('Should contain component Input', () => {
    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('Should contain param id equal "1"', () => {
    expect(inputProps.id).toEqual('1');
  });

  it('Should contain param label equal "buscar"', () => {
    expect(inputProps.label).toEqual('buscar');
  });

  it('Should contain param placeholder equal "digite"', () => {
    expect(inputProps.placeholder).toEqual('digite');
  });

  describe('Events', () => {
    afterEach(() => {
      onSearchMock.mockClear();
      changeMock.mockClear();
    });

    it('Should event change call param onChange', () => {
      wrapper.find('input').simulate('change', { target: { value: 'texto' } });
      expect(changeMock).toHaveBeenCalledWith('texto');
    });

    it('Should event blur call param onSearch', () => {
      wrapper.find('input').simulate('blur', { target: { value: 'texto' } });
      expect(onSearchMock).toHaveBeenCalledWith('texto');
    });

    it('Should event keyup "Enter" call param onSearch', () => {
      wrapper
        .find('input')
        .simulate('keyup', { target: { value: 'texto 1' }, key: 'Enter' });
      expect(onSearchMock).toHaveBeenCalledWith('texto 1');
    });

    it('Should event keyup not call param onSearch', () => {
      wrapper
        .find('input')
        .simulate('keyup', { target: { value: 'texto 1' }, key: 'a' });
      expect(onSearchMock).toHaveBeenCalledTimes(0);
    });
  });
});
