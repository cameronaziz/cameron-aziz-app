import { PropsWithChildren } from 'react';
import type { ButtonProps, RenderAs } from './types';

const getBackgroundColor = (props: ButtonProps): string => {
  const { color, isGradient, isOutline } = props;
  const buttonColor = color || 'primary';

  if (isOutline) {
    return `btn-outline-${buttonColor} `;
  }

  return `${isGradient ? 'bg-gradient' : 'btn'}-${buttonColor} `;
};

const getSize = (props: ButtonProps): string => {
  const { size } = props;
  const buttonSize = size || 'md';
  switch (buttonSize) {
    case 'sm': return 'btn-sm ';
    case 'lg': return 'btn-lg ';
    default: return '';
  }
};

const getPadding = (props: PropsWithChildren<ButtonProps>): string => {
  if (!props.label && !props.children) {
    return 'px-3 ';
  }
  return '';
};

const getClassName = (props: PropsWithChildren<ButtonProps>): string => {
  const backgroundColor = getBackgroundColor(props);
  const size = getSize(props);
  const padding = getPadding(props);
  const icon = props.icon ? 'btn-icon ' : '';
  const round = props.isRound ? 'btn-round ' : '';
  const endMargin = props.className?.includes('me-') ? '' : 'mr-1 ';
  const className = props.className ? `${props.className} ` : '';
  return `btn ${backgroundColor}${padding}${size}${round}${icon}${className}${endMargin}`;
};

const getComponentToRender = (renderAs?: RenderAs): RenderAs => {
  if (!renderAs) {
    return 'button';
  }
  return renderAs;
};

export {
  getClassName,
  getComponentToRender,
};

