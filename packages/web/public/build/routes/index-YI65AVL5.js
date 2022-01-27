import {
  button_default
} from "/build/_shared/chunk-UGU4TJJX.js";
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

// app/components/hero/index.tsx
init_react();

// app/components/hero/header.tsx
init_react();
var Header = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mt-5 mt-md-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-7 text-center mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white pt-3 mt-n5"
  }, "Hi, I'm Cameron"), /* @__PURE__ */ React.createElement("p", {
    className: "lead text-white mt-3"
  }, "I am a web engineer living in California. I love what I do."))));
};
var header_default = Header;

// app/components/hero/wave.tsx
init_react();
var Wave = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "position-absolute w-100 z-index-1 bottom-0"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "waves",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 24 150 40",
    preserveAspectRatio: "none",
    shapeRendering: "auto"
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
  }))));
};
var wave_default = Wave;

// app/components/hero/index.tsx
var Hero = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "page-header min-vh-75",
    style: { backgroundImage: "url('./img/curved-images/curved.jpg')" }
  }, /* @__PURE__ */ React.createElement(header_default, null), /* @__PURE__ */ React.createElement(wave_default, null)));
};
var hero_default = Hero;

// app/routes/index.tsx
var Index = () => {
  return /* @__PURE__ */ React.createElement(import_react.Fragment, null, /* @__PURE__ */ React.createElement(hero_default, null), /* @__PURE__ */ React.createElement(button_default, {
    label: "Hello",
    color: "secondary",
    icon: "laptop"
  }));
};
var routes_default = Index;
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-YI65AVL5.js.map