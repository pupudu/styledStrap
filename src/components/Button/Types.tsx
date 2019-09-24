import React from 'react';
import { StylestrapComponent, ThemeColors, StyledBase } from '../../core';

interface ButtonPropsBase {
  /**
   * One of "primary", "secondary", "success", "warning", "danger", "info", "dark" or "light"
   * unless different color names are used in the theme object
   */
  color?: ThemeColors;
  size?: 'xs' | 'sm' | 'lg';
  flavor?: 'outline' | 'ghost' | 'accent';
  /**
   * Make the button take full width of the container
   */
  block?: boolean;
  active?: boolean;
  disabled?: boolean;
}

export interface ButtonProps extends ButtonPropsBase, StylestrapComponent<HTMLButtonElement> {}

export const ButtonType: React.FC<ButtonPropsBase & StyledBase> = () => null;