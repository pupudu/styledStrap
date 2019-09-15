import React from 'react';
import { FormGroup, Feedback, HelpText, Input, Label } from './FormComponents';
import { makeComponent } from '../../core';

const FormInputBase = props => {
  const { error, touched, label, id, helpText, className, children, ...rest } = props;

  const type = (props.type || '').toLowerCase();
  const readOnly = props.readOnly || type === 'plaintext';
  const as = type !== 'textarea' ? 'input' : 'textarea';

  return (
    <FormGroup className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} readOnly={readOnly} invalid={touched && error} id={id} as={as} />
      {error && <Feedback invalid={error}>{error}</Feedback>}
      {helpText && <HelpText>{helpText}</HelpText>}
      {children}
    </FormGroup>
  );
};

type FormInput = {
  error: string;
  touched: boolean;
  label: string;
  helpText: string;
  id: string | number;
};

const FormInput: React.FC<FormInput> = makeComponent('FormInput').create(FormInputBase);

export { FormInput };
