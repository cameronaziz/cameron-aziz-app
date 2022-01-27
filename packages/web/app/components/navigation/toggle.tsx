import { useRef, VFC } from 'react';

type ToggleProps = {
  defaultExpanded?: boolean;
  target: string;
  onClick: () => void;
}

const Toggle: VFC<ToggleProps> = (props) => {
  const { onClick, target, defaultExpanded } = props;
  const defaultExpandedRef = useRef(defaultExpanded);

  return (
    <button
      onClick={onClick}
      className={`navbar-toggler shadow-none ms-auto`}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={target}
      aria-controls="navigation"
      aria-expanded={defaultExpandedRef.current ? 'true' : 'false'}
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon mt-2">
        <span className="navbar-toggler-bar bar1"></span>
        <span className="navbar-toggler-bar bar2"></span>
        <span className="navbar-toggler-bar bar3"></span>
      </span>
    </button>
  );
};

export default Toggle;
