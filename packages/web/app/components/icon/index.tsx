import { HTMLAttributes, VFC } from 'react';
import { isNucleoIcon } from './name';
import type IconName from './name/type';

type IconProps = HTMLAttributes<HTMLElement> & {
  name: IconName;
}

const Icon: VFC<IconProps> = (props) => {
  const { name, ...rest } = props;

  if (isNucleoIcon(name)) {
    return (
      <i className={`ni ni-${name}`} {...rest} />
    )
  }

  return (
    <i className={`fa fa-${name}`} {...rest} />
  );
};

export { IconName };

export default Icon;
