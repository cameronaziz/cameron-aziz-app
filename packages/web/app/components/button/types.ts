import type { IconName } from '../icon';

export type ButtonProps = {
  color?: Color;
  isGradient?: boolean;
  isOutline?: boolean;
  isRound?: boolean;
  size?: Size;
  icon?: IconName;
  label?: string;
  onClick?: () => void;
  className?: string;
  renderAs?: RenderAs;
}

export type RenderAs = 'div' | 'a' | 'button' | 'span';

export type ButtonWithLabelProps = ButtonProps & {
  label: string;
}

export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'danger'
  | 'warning'
  | 'light'
  | 'dark'
  | 'white';

export type Size =
  | 'sm'
  | 'md'
  | 'lg';
