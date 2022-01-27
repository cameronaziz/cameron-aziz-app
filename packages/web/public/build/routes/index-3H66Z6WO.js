import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toModule(require_react());

// app/components/button.tsx
init_react();

// app/components/cvg/icon.tsx
init_react();
var Icon = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    height: "48",
    width: "48"
  }, /* @__PURE__ */ React.createElement("g", {
    className: "nc-icon-wrapper"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.366,8.219a6.988,6.988,0,0,1-.355-2A21.019,21.019,0,0,0,3,26a20.777,20.777,0,0,0,2.242,9.45l.45.894,1.787-.9-.452-.892A18.824,18.824,0,0,1,5,26,19.013,19.013,0,0,1,17.366,8.219Z",
    fill: "#d37ff0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M40.959,34.634l-.5.865a18.975,18.975,0,0,1-28.544,5.14,6.948,6.948,0,0,1-1.558,1.308A20.981,20.981,0,0,0,42.189,36.5l.5-.866Z",
    fill: "#d37ff0"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "6.679",
    cy: "36",
    r: "5",
    fill: "#645aed"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M43,26a19.122,19.122,0,0,1-.273,3.157,6.981,6.981,0,0,1,1.911.691A20.968,20.968,0,0,0,24,5H23V7h1A19.021,19.021,0,0,1,43,26Z",
    fill: "#d37ff0"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "41.321",
    cy: "36",
    r: "5",
    fill: "#645aed"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "24",
    cy: "6",
    r: "5",
    fill: "#645aed"
  })));
};
var icon_default = Icon;

// app/components/button.tsx
var getBackgroundColor = (props) => {
  const { color, isGradient, isOutline } = props;
  const buttonColor = color || "primary";
  if (isOutline) {
    return `btn-outline-${buttonColor}`;
  }
  return `btn${isGradient ? "-gradient" : ""}-${buttonColor}`;
};
var getSize = (props) => {
  const { size } = props;
  const buttonSize = size || "md";
  switch (buttonSize) {
    case "sm":
      return "btn-sm";
    case "lg":
      return "btn-lg";
    default:
      return "";
  }
};
var Button = (props) => {
  const { label } = props;
  const backgroundColor = getBackgroundColor(props);
  const size = getSize(props);
  const className = `btn ${backgroundColor} ${size}`;
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: `${className} w-auto me-1 mb-0`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "d-flex align-items-center"
  }, /* @__PURE__ */ React.createElement(icon_default, null), label));
};
var button_default = Button;

// app/components/hero.tsx
init_react();
var Hero = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "page-header min-vh-75",
    style: { backgroundImage: "url('./img/curved-images/curved.jpg')" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-7 text-center mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white pt-3 mt-n5"
  }, "Soft UI Design System"), /* @__PURE__ */ React.createElement("p", {
    className: "lead text-white mt-3"
  }, "Free & Open Source Web UI Kit built over Bootstrap 5. ", /* @__PURE__ */ React.createElement("br", null), " Join over 1.4 million developers around the world. ")))), /* @__PURE__ */ React.createElement("div", {
    className: "position-absolute w-100 z-index-1 bottom-0"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "waves",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 24 150 40",
    preserveAspectRatio: "none",
    "shape-rendering": "auto"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("path", {
    id: "gentle-wave",
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  })), /* @__PURE__ */ React.createElement("g", {
    className: "moving-waves"
  }, /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "-1",
    fill: "rgba(255,255,255,0.40"
  }), /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "3",
    fill: "rgba(255,255,255,0.35)"
  }), /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "5",
    fill: "rgba(255,255,255,0.25)"
  }), /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "8",
    fill: "rgba(255,255,255,0.20)"
  }), /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "13",
    fill: "rgba(255,255,255,0.15)"
  }), /* @__PURE__ */ React.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "16",
    fill: "rgba(255,255,255,0.95"
  }))))));
};
var hero_default = Hero;

// app/routes/index.tsx
var Index = () => {
  return /* @__PURE__ */ React.createElement(import_react.Fragment, null, /* @__PURE__ */ React.createElement(hero_default, null), /* @__PURE__ */ React.createElement(button_default, {
    label: "Hello",
    color: "secondary"
  }));
};
var routes_default = Index;
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-3H66Z6WO.js.map
