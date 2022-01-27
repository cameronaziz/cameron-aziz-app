import {
  button_default
} from "/build/_shared/chunk-K4YGBZVE.js";
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
  }, "Hi, I'm Cameron"), /* @__PURE__ */ React.createElement("p", {
    className: "lead text-white mt-3"
  }, "I am a web engineer living in California. I love what I do."))))));
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
//# sourceMappingURL=/build/routes/index-P2V4OWQL.js.map
