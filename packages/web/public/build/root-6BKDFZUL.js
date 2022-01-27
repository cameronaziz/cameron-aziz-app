import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom
} from "/build/_shared/chunk-LAE5MDMM.js";
import {
  button_default
} from "/build/_shared/chunk-FMM5HHNJ.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caziz/code/personal/cameron-aziz/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/components/navigation.tsx
init_react();
var import_react = __toModule(require_react());
var Navigation = () => {
  const clickGithub = () => {
    window.open("https://github.com/cameronaziz", "_blank");
  };
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container position-sticky z-index-sticky top-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "col-12"
  }, /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "navbar navbar-expand-lg  blur border-radius-md top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container-fluid"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    className: "navbar-toggler shadow-none ms-2",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navigation",
    "aria-controls": "navigation",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "navbar-toggler-icon mt-2"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "navbar-toggler-bar bar1"
  }), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "navbar-toggler-bar bar2"
  }), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "navbar-toggler-bar bar3"
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100",
    id: "navigation"
  }, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100"
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: "nav-item my-auto ms-3 ms-lg-0 ms-lg-auto"
  }, /* @__PURE__ */ import_react.default.createElement(button_default, {
    color: "secondary",
    icon: "github",
    onClick: clickGithub
  })), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "nav-item my-auto ms-3 ms-lg-0"
  }, /* @__PURE__ */ import_react.default.createElement(button_default, {
    label: "Blog",
    color: "secondary"
  })), /* @__PURE__ */ import_react.default.createElement("li", {
    className: "nav-item my-auto ms-3 ms-lg-0"
  }, /* @__PURE__ */ import_react.default.createElement(button_default, {
    label: "Contact Me"
  })))))))));
};
var navigation_default = Navigation;

// app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "./css/nucleo-icons.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "./css/nucleo-svg.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/42d5adcbca.js",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "./css/nucleo-svg.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    id: "pagestyle",
    href: "./css/soft-design-system.css?v=1.0.5",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(navigation_default, null), /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-6BKDFZUL.js.map
