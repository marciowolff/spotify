import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { actionsSpotify } from '../../reducers/actions';

import Home from './index';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({ spotify: {} }),
}));

const mockSearch = jest.fn();
jest.mock('../../services', () => () => ({
  spotify: { search: mockSearch },
}));

const history = { push: jest.fn() };
const location = { pathname: '/teste' };
const spyactionsSpotify = jest.spyOn(actionsSpotify, 'setList');

let wrapper;

beforeEach(() => {
  mockSearch.mockImplementation(() =>
    Promise.resolve({ albums: { items: {} } })
  );
  wrapper = shallow(<Home location={location} history={history} />);
});

afterEach(() => {
  spyactionsSpotify.mockClear();
});

it('Thumb should be a function', () => {
  expect(typeof Home).toBe('function');
});

it('Should Search to match snapshot', () => {
  const tree = renderer
    .create(<Home location={location} history={history} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('render page default', () => {
  it('Should render component Container', () => {
    const CpContainer = wrapper.find('Container');
    expect(CpContainer).toHaveLength(1);
    expect(CpContainer.hasClass('page-home')).toBeTruthy();
  });

  it('Should render component Search', () => {
    const CpSearch = wrapper.find('Search');
    expect(CpSearch).toHaveLength(1);
    expect(CpSearch.props().id).toBe('search');
    expect(CpSearch.props().label).toBe(
      'Busque por artistas, álbuns ou músicas'
    );
    expect(CpSearch.props().onSearch).toBeTruthy();
  });

  it('Should render component Result', () => {
    const CpResult = wrapper.find('Result');
    expect(CpResult).toHaveLength(1);
    expect(CpResult.props().value).toBe('');
    expect(CpResult.props().data).toEqual({ spotify: {} });
    expect(CpResult.props().handleClick).toBeTruthy();
  });
});

describe('Events', () => {
  it('Should return onSearch', async () => {
    await wrapper
      .find('Search')
      .props()
      .onSearch('texto');

    expect(mockSearch).toHaveBeenCalledWith('texto');
    expect(spyactionsSpotify).toHaveBeenCalledWith({ items: {} });

    await wrapper
      .find('Search')
      .props()
      .onSearch('texto');

    expect(mockSearch.mock.calls.length).toBe(1);
    expect(spyactionsSpotify.mock.calls.length).toBe(1);
  });

  it('Should call handleClick Result redirect page albums', () => {
    wrapper
      .find('Result')
      .props()
      .handleClick({ id: 1 });

    expect(history.push).toHaveBeenCalledWith('album/1');
  });
});
