import { FC, Fragment, PropsWithChildren } from 'react';
import Icon from '../icon';
import type { ButtonProps, ButtonWithLabelProps } from './types';
import { getClassName, getComponentToRender } from './utils';

const isLabelProp = (props: PropsWithChildren<ButtonProps> | ButtonWithLabelProps): props is ButtonWithLabelProps =>
  typeof props === 'object' && 'label' in props;

const Button: FC<ButtonProps> = (props) => {
  const { icon, onClick, renderAs } = props;
  const className = getClassName(props);
  const child = isLabelProp(props) ? props.label : props.children;

  const ComponentToRender = getComponentToRender(renderAs);

  return (
    <ComponentToRender
      onClick={onClick}
      type="button"
      className={`${className}w-auto mb-0`}
    >
      {icon ?
        <div className="d-flex align-items-center">
          <Icon
            name={icon}
          />
          {child}
        </div>
        :
        <Fragment>
          {child}
        </Fragment>
      }
    </ComponentToRender>
  );
};

export default Button;
