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
} from "/build/_shared/chunk-UGU4TJJX.js";
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

// app/components/navigation/index.tsx
init_react();
var import_react2 = __toModule(require_react());

// app/components/navigation/list.tsx
init_react();
var import_react = __toModule(require_react());
var List = (props) => {
  const { isOpen, children } = props;
  const kids = import_react.Children.map(children, (child) => /* @__PURE__ */ React.createElement("li", {
    className: `nav-item flex-grow-0 my-1 mx-1`
  }, child));
  return /* @__PURE__ */ React.createElement("div", {
    className: `${isOpen ? "collapse-show" : "collapse"} navbar-collapse py-lg-0`,
    id: "navigation"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "ms-auto me-auto me-md-0 w-md-100 navbar-nav navbar-nav-hovers ms-md-2 flex-row me-md-auto"
  }, kids));
};
var list_default = List;

// app/components/navigation/toggle.tsx
init_react();
var Toggle = (props) => {
  const { isOpen, onClick } = props;
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    className: `navbar-toggler shadow-none ms-auto ${isOpen ? "collapsed" : ""}`,
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navigation",
    "aria-controls": "navigation",
    "aria-expanded": isOpen ? "true" : "false",
    "aria-label": "Toggle navigation"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-icon mt-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-bar bar1"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-bar bar2"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "navbar-toggler-bar bar3"
  })));
};
var toggle_default = Toggle;

// app/components/navigation/index.tsx
var Navigation = () => {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const clickGithub = () => {
    window.open("https://github.com/cameronaziz", "_blank");
  };
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container position-sticky z-index-sticky top-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-expand-md blur border-radius-md top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container-fluid px-0"
  }, /* @__PURE__ */ React.createElement(button_default, {
    label: "Contact"
  }), /* @__PURE__ */ React.createElement(toggle_default, {
    isOpen,
    onClick: toggleNavigation
  }), /* @__PURE__ */ React.createElement(list_default, {
    isOpen
  }, /* @__PURE__ */ React.createElement(button_default, {
    label: "Blog",
    color: "secondary"
  }), /* @__PURE__ */ React.createElement(button_default, {
    label: "Experience",
    color: "secondary"
  })), /* @__PURE__ */ React.createElement("div", {
    className: `${isOpen ? "collapse-show" : "collapse"} navbar-collapse py-lg-0`,
    id: "navigation"
  }, /* @__PURE__ */ React.createElement(list_default, {
    isOpen
  }, /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "github",
    onClick: clickGithub
  }), /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "instagram",
    onClick: clickGithub
  }), /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "facebook",
    onClick: clickGithub
  }), /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "twitter",
    onClick: clickGithub
  }))))))));
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
//# sourceMappingURL=/build/root-RE6ZOHP7.js.map
