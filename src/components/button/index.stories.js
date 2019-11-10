import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .add('Simples', () => (
    <Button handleClick={action('clicou')}>Botão</Button>
  ))
  .add('Desabilitado', () => (
    <Button disabled handleClick={action('clicou')}>Botão</Button>
  ))
  .add('Submit', () => (
    <Button type="submit" handleClick={action('clicou')}>Botão</Button>
  ))
