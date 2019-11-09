import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Container from './index';

import { auth } from '../../services';

const history = { push: jest.fn() };
const location = { pathname: '/teste' };
const spyisAuthenticated = jest.spyOn(auth, 'isAuthenticated');

let wrapper;

it('Thumb should be a function', () => {
  expect(typeof Container).toBe('function');
});

it('Should Search to match snapshot', () => {
  const tree = renderer
    .create(
      <Container location={location} history={history}>
        conteudo
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('is authenticated', () => {
  it('Should call auth.isAuthenticated return true', () => {
    spyisAuthenticated.mockImplementation(() => true);

    wrapper = mount(
      <Container location={location} history={history}>
        conteudo
      </Container>
    );

    expect(spyisAuthenticated).toHaveBeenCalled();
    expect(history.push).not.toHaveBeenCalled();
    expect(wrapper.props().children).toEqual('conteudo');
  });

  it('Should call auth.isAuthenticated return false and location equal "/"', () => {
    spyisAuthenticated.mockImplementation(() => false);

    wrapper = mount(
      <Container location={{ pathname: '/' }} history={history}>
        conteudo
      </Container>
    );
    expect(spyisAuthenticated).toHaveBeenCalled();
    expect(history.push).not.toHaveBeenCalled();
    expect(wrapper.props().children).toEqual('conteudo');
  });

  it('Should call auth.isAuthenticated return false and location diferent "/"', () => {
    spyisAuthenticated.mockImplementation(() => false);

    wrapper = mount(
      <Container location={{ pathname: '/teste' }} history={history}>
        conteudo
      </Container>
    );
    expect(spyisAuthenticated).toHaveBeenCalled();
    expect(history.push).toHaveBeenCalledWith('/');
  });
});
