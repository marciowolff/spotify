import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import List from './index';

const dataList = {
  tracks: {
    items: [
      { id: 0, track_number: 1, name: 'name track 1', duration_ms: 10000 },
      { id: 1, track_number: 2, name: 'name track 2', duration_ms: 20000 },
    ],
  },
};

it('List should be a function', () => {
  expect(typeof List).toBe('function');
});

it('Should List to match snapshot', () => {
  const tree = renderer.create(<List data={dataList} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should List with parameter data', () => {
  const wrapper = shallow(<List data={dataList} />);

  expect(wrapper.find('ul').hasClass('list')).toBeTruthy();
  expect(wrapper.find('li')).toHaveLength(2);
});

it('Should List without parameter data', () => {
  const wrapper = shallow(<List />);

  expect(wrapper.find('ul').hasClass('list')).toBeTruthy();
  expect(wrapper.find('li')).toHaveLength(0);
});

it('Should List with parameer data equal null', () => {
  const wrapper = shallow(<List data={null} />);

  expect(wrapper.find('ul').hasClass('list')).toBeTruthy();
  expect(wrapper.find('li')).toHaveLength(0);
});

it('Should List with parameer data equal undefined', () => {
  const wrapper = shallow(<List data={undefined} />);

  expect(wrapper.find('ul').hasClass('list')).toBeTruthy();
  expect(wrapper.find('li')).toHaveLength(0);
});
