import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/button/index.tsx
init_react();
var import_react = __toModule(require_react());

// app/components/button/getClassName.ts
init_react();
var getBackgroundColor = (props) => {
  const { color, isGradient, isOutline } = props;
  const buttonColor = color || "primary";
  if (isOutline) {
    return `btn-outline-${buttonColor} `;
  }
  return `${isGradient ? "bg-gradient" : "btn"}-${buttonColor} `;
};
var getSize = (props) => {
  const { size } = props;
  const buttonSize = size || "md";
  switch (buttonSize) {
    case "sm":
      return "btn-sm ";
    case "lg":
      return "btn-lg ";
    default:
      return "";
  }
};
var getClassName = (props) => {
  const backgroundColor = getBackgroundColor(props);
  const size = getSize(props);
  const icon = props.icon ? "btn-icon " : "";
  const round = props.isRound ? "btn-round " : "";
  const className = `btn ${backgroundColor}${size}${round}${icon}`;
  return className;
};
var getClassName_default = getClassName;

// app/components/button/index.tsx
var isLabelProp = (props) => typeof props === "object" && "label" in props;
var Button = (props) => {
  const { icon, onClick } = props;
  const className = getClassName_default(props);
  const child = isLabelProp(props) ? props.label : props.children;
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    type: "button",
    className: `${className}w-auto me-1 mb-0`
  }, icon ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex align-items-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: `ni ni-${icon} me-2`,
    "aria-hidden": "true"
  }), child) : /* @__PURE__ */ React.createElement(import_react.Fragment, null, child));
};
var button_default = Button;

export {
  button_default
};
//# sourceMappingURL=/build/_shared/chunk-K4YGBZVE.js.map
