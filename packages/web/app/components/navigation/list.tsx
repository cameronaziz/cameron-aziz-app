import { Children, FC, HTMLAttributes, useRef } from 'react';

type ListProps = HTMLAttributes<HTMLDivElement> & {
  defaultExpanded?: boolean;
  target: string;
}

const List: FC<ListProps> = (props) => {
  const { defaultExpanded, children, target, className, ...rest } = props;
  const defaultExpandedRef = useRef(defaultExpanded);

  const kids = Children.map(children, (child) =>
    <li className={`nav-item flex-grow-0 my-1 mx-1`}>
      {child}
    </li>
  );

  const classTarget = target.startsWith('.') ? `${target.slice(1)} ` : '';
  const idTarget = target.startsWith('#') ? `${target.slice(1)} ` : '';

  return (
    <div
      id={idTarget}
      className={`${className ? `${className} ` : ''}${classTarget}${defaultExpandedRef.current ? 'collapse-show' : 'collapse'} navbar-collapse flex-grow-0 collapsible-nav`}
      {...rest}
    >
      <ul className="ms-auto me-auto me-md-0 navbar-nav navbar-nav-hovers ms-md-2 flex-row">
        {kids}
      </ul>
    </div>
  );
};

export default List;
