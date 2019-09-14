import React from 'react';
import { makeComponent } from '../../core/ruleEngine';

type Heading = {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading: React.FC<Heading> = makeComponent('Heading')
  .classNames('heading')
  .styles(({ size = 'h1' }, theme) => ({
    fontSize: theme.headingSizes[size],
  }))
  .props(({ size = 'h1', as: tag }) => ({
    as: tag || size,
  }))
  .create('h1');

export { Heading };