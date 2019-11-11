import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { actionsSpotify } from '../../reducers/actions';

import Album from './index';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({ spotify: {} }),
}));

jest.mock('../@container', () => ({ children }) => (
  <div className="container">{children}</div>
));

const history = { push: jest.fn() };
const location = { pathname: '/teste' };
const match = { params: 'codParam' };
const mockAlbums = jest.fn();

const spysetAlbum = jest.spyOn(actionsSpotify, 'setAlbum');

let wrapper;

beforeEach(() => {
  mockAlbums.mockImplementation(() => Promise.resolve({ items: {} }));
  wrapper = mount(
    <Album
      location={location}
      history={history}
      match={match}
      service={{ spotify: { albums: mockAlbums } }}
    />
  );
});

afterEach(() => {
  spysetAlbum.mockClear();
});

it('Album should be a function', () => {
  expect(typeof Album).toBe('function');
});
it('Should Album to match snapshot', () => {
  const tree = renderer
    .create(<Album location={location} history={history} match={match} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('render page default', () => {
  it('Should render component Container', () => {
    const CpContainer = wrapper.find('.container');
    expect(CpContainer).toHaveLength(1);
  });

  it('Should render button callback', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('Should render component Thumb', () => {
    const CpThumb = wrapper.find('Thumb');
    expect(CpThumb).toHaveLength(1);
    expect(CpThumb.props().data).toEqual({ spotify: {} });
  });

  it('Should render component List', () => {
    const CpList = wrapper.find('List');
    expect(CpList).toHaveLength(1);
    expect(CpList.props().data).toEqual({ spotify: {} });
  });
});

describe('Events', () => {
  it('Should button callback', () => {
    wrapper.find('Button').simulate('click');

    expect(history.push).toHaveBeenCalledWith('/home');
  });
});
