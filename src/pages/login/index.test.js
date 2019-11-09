import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Login from './index';

import { auth } from '../../services';

const history = { push: jest.fn() };
const location = { pathname: '/teste' };
const spyisAuthenticated = jest.spyOn(auth, 'isAuthenticated');
const spysetToken = jest.spyOn(auth, 'setToken');

let wrapper, SpotifyLogin;

beforeEach(() => {
  wrapper = mount(<Login location={location} history={history} />);
  SpotifyLogin = wrapper.find('SpotifyLogin');
});

afterEach(() => {
  history.push.mockClear();
});

it('Thumb should be a function', () => {
  expect(typeof Login).toBe('function');
});

it('Should Search to match snapshot', () => {
  const tree = renderer
    .create(<Login location={location} history={history} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Should redirect page '/home' if return service auth.isAuthenticated equals true", () => {
  spyisAuthenticated.mockImplementation(() => true);
  wrapper = mount(<Login location={location} history={history} />);

  expect(history.push).toHaveBeenCalledWith('/home');
});

describe('render page default', () => {
  it('Should render component Container', () => {
    expect(wrapper.find('Container')).toHaveLength(1);
  });

  it('Should render component SpotifyLogin', () => {
    expect(SpotifyLogin).toHaveLength(1);
  });
});

describe('Events callback Spotify', () => {
  it("should return success spotify redirect '/home' and call auth.setToken", () => {
    SpotifyLogin.props().onSuccess({ access_token: 123 });

    expect(spysetToken).toHaveBeenCalledWith(123);
    expect(history.push).toHaveBeenCalledWith('/home');
  });
});
