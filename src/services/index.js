import React from 'react';
import createClient from 'spotify-service';

import { API_URL } from '../constants';

export const services = createClient(API_URL[process.env.ENV]);
export { default as auth } from 'spotify-service';

export function withServices(Component) {
  const ComponentWithServices = props => (
    <Component service={services} {...props} />
  );

  return ComponentWithServices;
}
