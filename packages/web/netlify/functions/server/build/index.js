var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/caziz/code/personal/cameron-aziz/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/navigation/index.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_react_router_dom = __toModule(require("react-router-dom"));
var import_remix2 = __toModule(require_remix());

// app/components/button/index.tsx
init_react();
var import_react = __toModule(require("react"));

// app/components/icon/index.tsx
init_react();

// app/components/icon/name/index.ts
init_react();

// app/components/icon/name/fa/index.ts
init_react();
var faIconNames = [
  "address-book",
  "address-book-o",
  "address-card",
  "address-card-o",
  "bandcamp",
  "bath",
  "bathtub",
  "drivers-license",
  "drivers-license-o",
  "eercast",
  "envelope-open",
  "envelope-open-o",
  "etsy",
  "free-code-camp",
  "grav",
  "handshake-o",
  "id-badge",
  "id-card",
  "id-card-o",
  "imdb",
  "linode",
  "meetup",
  "microchip",
  "podcast",
  "quora",
  "ravelry",
  "s15",
  "shower",
  "snowflake-o",
  "superpowers",
  "telegram",
  "thermometer",
  "thermometer-0",
  "thermometer-1",
  "thermometer-2",
  "thermometer-3",
  "thermometer-4",
  "thermometer-empty",
  "thermometer-full",
  "thermometer-half",
  "thermometer-quarter",
  "thermometer-three-quarters",
  "times-rectangle",
  "times-rectangle-o",
  "user-circle",
  "user-circle-o",
  "user-o",
  "vcard",
  "vcard-o",
  "window-close",
  "window-close-o",
  "window-maximize",
  "window-minimize",
  "window-restore",
  "wpexplorer",
  "address-book",
  "address-book-o",
  "address-card",
  "address-card-o",
  "adjust",
  "american-sign-language-interpreting",
  "anchor",
  "archive",
  "area-chart",
  "arrows",
  "arrows-h",
  "arrows-v",
  "asl-interpreting",
  "assistive-listening-systems",
  "asterisk",
  "at",
  "audio-description",
  "automobile",
  "balance-scale",
  "ban",
  "bank",
  "bar-chart",
  "bar-chart-o",
  "barcode",
  "bars",
  "bath",
  "bathtub",
  "battery",
  "battery-0",
  "battery-1",
  "battery-2",
  "battery-3",
  "battery-4",
  "battery-empty",
  "battery-full",
  "battery-half",
  "battery-quarter",
  "battery-three-quarters",
  "bed",
  "beer",
  "bell",
  "bell-o",
  "bell-slash",
  "bell-slash-o",
  "bicycle",
  "binoculars",
  "birthday-cake",
  "blind",
  "bluetooth",
  "bluetooth-b",
  "bolt",
  "bomb",
  "book",
  "bookmark",
  "bookmark-o",
  "braille",
  "briefcase",
  "bug",
  "building",
  "building-o",
  "bullhorn",
  "bullseye",
  "bus",
  "cab",
  "calculator",
  "calendar",
  "calendar-check-o",
  "calendar-minus-o",
  "calendar-o",
  "calendar-plus-o",
  "calendar-times-o",
  "camera",
  "camera-retro",
  "car",
  "caret-square-o-down",
  "caret-square-o-left",
  "caret-square-o-right",
  "caret-square-o-up",
  "cart-arrow-down",
  "cart-plus",
  "cc",
  "certificate",
  "check",
  "check-circle",
  "check-circle-o",
  "check-square",
  "check-square-o",
  "child",
  "circle",
  "circle-o",
  "circle-o-notch",
  "circle-thin",
  "clock-o",
  "clone",
  "close",
  "cloud",
  "cloud-download",
  "cloud-upload",
  "code",
  "code-fork",
  "coffee",
  "cog",
  "cogs",
  "comment",
  "comment-o",
  "commenting",
  "commenting-o",
  "comments",
  "comments-o",
  "compass",
  "copyright",
  "creative-commons",
  "credit-card",
  "credit-card-alt",
  "crop",
  "crosshairs",
  "cube",
  "cubes",
  "cutlery",
  "dashboard",
  "database",
  "deaf",
  "deafness",
  "desktop",
  "diamond",
  "dot-circle-o",
  "download",
  "drivers-license",
  "drivers-license-o",
  "edit",
  "ellipsis-h",
  "ellipsis-v",
  "envelope",
  "envelope-o",
  "envelope-open",
  "envelope-open-o",
  "envelope-square",
  "eraser",
  "exchange",
  "exclamation",
  "exclamation-circle",
  "exclamation-triangle",
  "external-link",
  "external-link-square",
  "eye",
  "eye-slash",
  "eyedropper",
  "fax",
  "feed",
  "female",
  "fighter-jet",
  "file-archive-o",
  "file-audio-o",
  "file-code-o",
  "file-excel-o",
  "file-image-o",
  "file-movie-o",
  "file-pdf-o",
  "file-photo-o",
  "file-picture-o",
  "file-powerpoint-o",
  "file-sound-o",
  "file-video-o",
  "file-word-o",
  "file-zip-o",
  "film",
  "filter",
  "fire",
  "fire-extinguisher",
  "flag",
  "flag-checkered",
  "flag-o",
  "flash",
  "flask",
  "folder",
  "folder-o",
  "folder-open",
  "folder-open-o",
  "frown-o",
  "futbol-o",
  "gamepad",
  "gavel",
  "gear",
  "gears",
  "gift",
  "glass",
  "globe",
  "graduation-cap",
  "group",
  "hand-grab-o",
  "hand-lizard-o",
  "hand-paper-o",
  "hand-peace-o",
  "hand-pointer-o",
  "hand-rock-o",
  "hand-scissors-o",
  "hand-spock-o",
  "hand-stop-o",
  "handshake-o",
  "hard-of-hearing",
  "hashtag",
  "hdd-o",
  "headphones",
  "heart",
  "heart-o",
  "heartbeat",
  "history",
  "home",
  "hotel",
  "hourglass",
  "hourglass-1",
  "hourglass-2",
  "hourglass-3",
  "hourglass-end",
  "hourglass-half",
  "hourglass-o",
  "hourglass-start",
  "i-cursor",
  "id-badge",
  "id-card",
  "id-card-o",
  "image",
  "inbox",
  "industry",
  "info",
  "info-circle",
  "institution",
  "key",
  "keyboard-o",
  "language",
  "laptop",
  "leaf",
  "legal",
  "lemon-o",
  "level-down",
  "level-up",
  "life-bouy",
  "life-buoy",
  "life-ring",
  "life-saver",
  "lightbulb-o",
  "line-chart",
  "location-arrow",
  "lock",
  "low-vision",
  "magic",
  "magnet",
  "mail-forward",
  "mail-reply",
  "mail-reply-all",
  "male",
  "map",
  "map-marker",
  "map-o",
  "map-pin",
  "map-signs",
  "meh-o",
  "microchip",
  "microphone",
  "microphone-slash",
  "minus",
  "minus-circle",
  "minus-square",
  "minus-square-o",
  "mobile",
  "mobile-phone",
  "money",
  "moon-o",
  "mortar-board",
  "motorcycle",
  "mouse-pointer",
  "music",
  "navicon",
  "newspaper-o",
  "object-group",
  "object-ungroup",
  "paint-brush",
  "paper-plane",
  "paper-plane-o",
  "paw",
  "pencil",
  "pencil-square",
  "pencil-square-o",
  "percent",
  "phone",
  "phone-square",
  "photo",
  "picture-o",
  "pie-chart",
  "plane",
  "plug",
  "plus",
  "plus-circle",
  "plus-square",
  "plus-square-o",
  "podcast",
  "power-off",
  "print",
  "puzzle-piece",
  "qrcode",
  "question",
  "question-circle",
  "question-circle-o",
  "quote-left",
  "quote-right",
  "random",
  "recycle",
  "refresh",
  "registered",
  "remove",
  "reorder",
  "reply",
  "reply-all",
  "retweet",
  "road",
  "rocket",
  "rss",
  "rss-square",
  "s15",
  "search",
  "search-minus",
  "search-plus",
  "send",
  "send-o",
  "server",
  "share",
  "share-alt",
  "share-alt-square",
  "share-square",
  "share-square-o",
  "shield",
  "ship",
  "shopping-bag",
  "shopping-basket",
  "shopping-cart",
  "shower",
  "sign-in",
  "sign-language",
  "sign-out",
  "signal",
  "signing",
  "sitemap",
  "sliders",
  "smile-o",
  "snowflake-o",
  "soccer-ball-o",
  "sort",
  "sort-alpha-asc",
  "sort-alpha-desc",
  "sort-amount-asc",
  "sort-amount-desc",
  "sort-asc",
  "sort-desc",
  "sort-down",
  "sort-numeric-asc",
  "sort-numeric-desc",
  "sort-up",
  "space-shuttle",
  "spinner",
  "spoon",
  "square",
  "square-o",
  "star",
  "star-half",
  "star-half-empty",
  "star-half-full",
  "star-half-o",
  "star-o",
  "sticky-note",
  "sticky-note-o",
  "street-view",
  "suitcase",
  "sun-o",
  "support",
  "tablet",
  "tachometer",
  "tag",
  "tags",
  "tasks",
  "taxi",
  "television",
  "terminal",
  "thermometer",
  "thermometer-0",
  "thermometer-1",
  "thermometer-2",
  "thermometer-3",
  "thermometer-4",
  "thermometer-empty",
  "thermometer-full",
  "thermometer-half",
  "thermometer-quarter",
  "thermometer-three-quarters",
  "thumb-tack",
  "thumbs-down",
  "thumbs-o-down",
  "thumbs-o-up",
  "thumbs-up",
  "ticket",
  "times",
  "times-circle",
  "times-circle-o",
  "times-rectangle",
  "times-rectangle-o",
  "tint",
  "toggle-down",
  "toggle-left",
  "toggle-off",
  "toggle-on",
  "toggle-right",
  "toggle-up",
  "trademark",
  "trash",
  "trash-o",
  "tree",
  "trophy",
  "truck",
  "tty",
  "tv",
  "umbrella",
  "universal-access",
  "university",
  "unlock",
  "unlock-alt",
  "unsorted",
  "upload",
  "user",
  "user-circle",
  "user-circle-o",
  "user-o",
  "user-plus",
  "user-secret",
  "user-times",
  "users",
  "vcard",
  "vcard-o",
  "video-camera",
  "volume-control-phone",
  "volume-down",
  "volume-off",
  "volume-up",
  "warning",
  "wheelchair",
  "wheelchair-alt",
  "wifi",
  "window-close",
  "window-close-o",
  "window-maximize",
  "window-minimize",
  "window-restore",
  "wrench",
  "american-sign-language-interpreting",
  "asl-interpreting",
  "assistive-listening-systems",
  "audio-description",
  "blind",
  "braille",
  "cc",
  "deaf",
  "deafness",
  "hard-of-hearing",
  "low-vision",
  "question-circle-o",
  "sign-language",
  "signing",
  "tty",
  "universal-access",
  "volume-control-phone",
  "wheelchair",
  "wheelchair-alt",
  "hand-grab-o",
  "hand-lizard-o",
  "hand-o-down",
  "hand-o-left",
  "hand-o-right",
  "hand-o-up",
  "hand-paper-o",
  "hand-peace-o",
  "hand-pointer-o",
  "hand-rock-o",
  "hand-scissors-o",
  "hand-spock-o",
  "hand-stop-o",
  "thumbs-down",
  "thumbs-o-down",
  "thumbs-o-up",
  "thumbs-up",
  "ambulance",
  "automobile",
  "bicycle",
  "bus",
  "cab",
  "car",
  "fighter-jet",
  "motorcycle",
  "plane",
  "rocket",
  "ship",
  "space-shuttle",
  "subway",
  "taxi",
  "train",
  "truck",
  "wheelchair",
  "wheelchair-alt",
  "genderless",
  "intersex",
  "mars",
  "mars-double",
  "mars-stroke",
  "mars-stroke-h",
  "mars-stroke-v",
  "mercury",
  "neuter",
  "transgender",
  "transgender-alt",
  "venus",
  "venus-double",
  "venus-mars",
  "file",
  "file-archive-o",
  "file-audio-o",
  "file-code-o",
  "file-excel-o",
  "file-image-o",
  "file-movie-o",
  "file-o",
  "file-pdf-o",
  "file-photo-o",
  "file-picture-o",
  "file-powerpoint-o",
  "file-sound-o",
  "file-text",
  "file-text-o",
  "file-video-o",
  "file-word-o",
  "file-zip-o",
  "circle-o-notch",
  "cog",
  "gear",
  "refresh",
  "spinner",
  "check-square",
  "check-square-o",
  "circle",
  "circle-o",
  "dot-circle-o",
  "minus-square",
  "minus-square-o",
  "plus-square",
  "plus-square-o",
  "square",
  "square-o",
  "cc-amex",
  "cc-diners-club",
  "cc-discover",
  "cc-jcb",
  "cc-mastercard",
  "cc-paypal",
  "cc-stripe",
  "cc-visa",
  "credit-card",
  "credit-card-alt",
  "google-wallet",
  "paypal",
  "area-chart",
  "bar-chart",
  "bar-chart-o",
  "line-chart",
  "pie-chart",
  "bitcoin",
  "btc",
  "cny",
  "dollar",
  "eur",
  "euro",
  "gbp",
  "gg",
  "gg-circle",
  "ils",
  "inr",
  "jpy",
  "krw",
  "money",
  "rmb",
  "rouble",
  "rub",
  "ruble",
  "rupee",
  "shekel",
  "sheqel",
  "try",
  "turkish-lira",
  "usd",
  "viacoin",
  "won",
  "yen",
  "align-center",
  "align-justify",
  "align-left",
  "align-right",
  "bold",
  "chain",
  "chain-broken",
  "clipboard",
  "columns",
  "copy",
  "cut",
  "dedent",
  "eraser",
  "file",
  "file-o",
  "file-text",
  "file-text-o",
  "files-o",
  "floppy-o",
  "font",
  "header",
  "indent",
  "italic",
  "link",
  "list",
  "list-alt",
  "list-ol",
  "list-ul",
  "outdent",
  "paperclip",
  "paragraph",
  "paste",
  "repeat",
  "rotate-left",
  "rotate-right",
  "save",
  "scissors",
  "strikethrough",
  "subscript",
  "superscript",
  "table",
  "text-height",
  "text-width",
  "th",
  "th-large",
  "th-list",
  "underline",
  "undo",
  "unlink",
  "angle-double-down",
  "angle-double-left",
  "angle-double-right",
  "angle-double-up",
  "angle-down",
  "angle-left",
  "angle-right",
  "angle-up",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-o-down",
  "arrow-circle-o-left",
  "arrow-circle-o-right",
  "arrow-circle-o-up",
  "arrow-circle-right",
  "arrow-circle-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrows",
  "arrows-alt",
  "arrows-h",
  "arrows-v",
  "caret-down",
  "caret-left",
  "caret-right",
  "caret-square-o-down",
  "caret-square-o-left",
  "caret-square-o-right",
  "caret-square-o-up",
  "caret-up",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "exchange",
  "hand-o-down",
  "hand-o-left",
  "hand-o-right",
  "hand-o-up",
  "long-arrow-down",
  "long-arrow-left",
  "long-arrow-right",
  "long-arrow-up",
  "toggle-down",
  "toggle-left",
  "toggle-right",
  "toggle-up",
  "arrows-alt",
  "backward",
  "compress",
  "eject",
  "expand",
  "fast-backward",
  "fast-forward",
  "forward",
  "pause",
  "pause-circle",
  "pause-circle-o",
  "play",
  "play-circle",
  "play-circle-o",
  "random",
  "step-backward",
  "step-forward",
  "stop",
  "stop-circle",
  "stop-circle-o",
  "youtube-play",
  "500px",
  "adn",
  "amazon",
  "android",
  "angellist",
  "apple",
  "bandcamp",
  "behance",
  "behance-square",
  "bitbucket",
  "bitbucket-square",
  "bitcoin",
  "black-tie",
  "bluetooth",
  "bluetooth-b",
  "btc",
  "buysellads",
  "cc-amex",
  "cc-diners-club",
  "cc-discover",
  "cc-jcb",
  "cc-mastercard",
  "cc-paypal",
  "cc-stripe",
  "cc-visa",
  "chrome",
  "codepen",
  "codiepie",
  "connectdevelop",
  "contao",
  "css3",
  "dashcube",
  "delicious",
  "deviantart",
  "digg",
  "dribbble",
  "dropbox",
  "drupal",
  "edge",
  "eercast",
  "empire",
  "envira",
  "etsy",
  "expeditedssl",
  "fa",
  "facebook",
  "facebook-f",
  "facebook-official",
  "facebook-square",
  "firefox",
  "first-order",
  "flickr",
  "font-awesome",
  "fonticons",
  "fort-awesome",
  "forumbee",
  "foursquare",
  "free-code-camp",
  "ge",
  "get-pocket",
  "gg",
  "gg-circle",
  "git",
  "git-square",
  "github",
  "github-alt",
  "github-square",
  "gitlab",
  "gittip",
  "glide",
  "glide-g",
  "google",
  "google-plus",
  "google-plus-circle",
  "google-plus-official",
  "google-plus-square",
  "google-wallet",
  "gratipay",
  "grav",
  "hacker-news",
  "houzz",
  "html5",
  "imdb",
  "instagram",
  "internet-explorer",
  "ioxhost",
  "joomla",
  "jsfiddle",
  "lastfm",
  "lastfm-square",
  "leanpub",
  "linkedin",
  "linkedin-square",
  "linode",
  "linux",
  "maxcdn",
  "meanpath",
  "medium",
  "meetup",
  "mixcloud",
  "modx",
  "odnoklassniki",
  "odnoklassniki-square",
  "opencart",
  "openid",
  "opera",
  "optin-monster",
  "pagelines",
  "paypal",
  "pied-piper",
  "pied-piper-alt",
  "pied-piper-pp",
  "pinterest",
  "pinterest-p",
  "pinterest-square",
  "product-hunt",
  "qq",
  "quora",
  "ra",
  "ravelry",
  "rebel",
  "reddit",
  "reddit-alien",
  "reddit-square",
  "renren",
  "resistance",
  "safari",
  "scribd",
  "sellsy",
  "share-alt",
  "share-alt-square",
  "shirtsinbulk",
  "simplybuilt",
  "skyatlas",
  "skype",
  "slack",
  "slideshare",
  "snapchat",
  "snapchat-ghost",
  "snapchat-square",
  "soundcloud",
  "spotify",
  "stack-exchange",
  "stack-overflow",
  "steam",
  "steam-square",
  "stumbleupon",
  "stumbleupon-circle",
  "superpowers",
  "telegram",
  "tencent-weibo",
  "themeisle",
  "trello",
  "tripadvisor",
  "tumblr",
  "tumblr-square",
  "twitch",
  "twitter",
  "twitter-square",
  "usb",
  "viacoin",
  "viadeo",
  "viadeo-square",
  "vimeo",
  "vimeo-square",
  "vine",
  "vk",
  "wechat",
  "weibo",
  "weixin",
  "whatsapp",
  "wikipedia-w",
  "windows",
  "wordpress",
  "wpbeginner",
  "wpexplorer",
  "wpforms",
  "xing",
  "xing-square",
  "y-combinator",
  "y-combinator-square",
  "yahoo",
  "yc",
  "yc-square",
  "yelp",
  "yoast",
  "youtube",
  "youtube-play",
  "youtube-square",
  "ambulance",
  "h-square",
  "heart",
  "heart-o",
  "heartbeat",
  "hospital-o",
  "medkit",
  "plus-square",
  "stethoscope",
  "user-md",
  "wheelchair"
];
var fa_default = faIconNames;

// app/components/icon/name/nucleo/index.ts
init_react();
var nucleoIconNames = [
  "active-40",
  "air-baloon",
  "album-2",
  "align-center",
  "align-left-2",
  "ambulance",
  "app",
  "archive-2",
  "atom",
  "badge",
  "bag-17",
  "basket",
  "bell-55",
  "bold-down",
  "bold-left",
  "bold-right",
  "bold-up",
  "bold",
  "book-bookmark",
  "books",
  "box-2",
  "briefcase-24",
  "building",
  "bulb-61",
  "bullet-list-67",
  "bus-front-12",
  "button-pause",
  "button-play",
  "button-power",
  "calendar-grid-58",
  "camera-compact",
  "caps-small",
  "cart",
  "chart-bar-32",
  "chart-pie-35",
  "chat-round",
  "check-bold",
  "circle-08",
  "cloud-download-95",
  "cloud-upload-96",
  "compass-04",
  "controller",
  "credit-card",
  "curved-next",
  "delivery-fast",
  "diamond",
  "email-83",
  "fat-add",
  "fat-delete",
  "fat-remove",
  "favourite-28",
  "folder-17",
  "glasses-2",
  "hat-3",
  "headphones",
  "html5",
  "istanbul",
  "key-25",
  "laptop",
  "like-2",
  "lock-circle-open",
  "map-big",
  "mobile-button",
  "money-coins",
  "note-03",
  "notification-70",
  "palette",
  "paper-diploma",
  "pin-3",
  "planet",
  "ruler-pencil",
  "satisfied",
  "scissors",
  "send",
  "settings-gear-65",
  "settings",
  "single-02",
  "single-copy-04",
  "sound-wave",
  "spaceship",
  "square-pin",
  "support-16",
  "tablet-button",
  "tag",
  "tie-bow",
  "time-alarm",
  "trophy",
  "tv-2",
  "umbrella-13",
  "user-run",
  "vector",
  "watch-time",
  "world",
  "zoom-split-in",
  "collection",
  "image",
  "shop",
  "ungroup",
  "world-2",
  "ui-0"
];
var nucleo_default = nucleoIconNames;

// app/components/icon/name/index.ts
var iconNames = [
  ...nucleo_default,
  ...fa_default
];
var isNucleoIcon = (iconName) => nucleo_default.includes(iconName);

// app/components/icon/index.tsx
var Icon = (props) => {
  const _a = props, { name } = _a, rest = __objRest(_a, ["name"]);
  if (isNucleoIcon(name)) {
    return /* @__PURE__ */ React.createElement("i", __spreadValues({
      className: `ni ni-${name}`
    }, rest));
  }
  return /* @__PURE__ */ React.createElement("i", __spreadValues({
    className: `fa fa-${name}`
  }, rest));
};
var icon_default = Icon;

// app/components/button/utils.ts
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
var getPadding = (props) => {
  if (!props.label && !props.children) {
    return "px-3 ";
  }
  return "";
};
var getClassName = (props) => {
  var _a;
  const backgroundColor = getBackgroundColor(props);
  const size = getSize(props);
  const padding = getPadding(props);
  const icon = props.icon ? "btn-icon " : "";
  const round = props.isRound ? "btn-round " : "";
  const endMargin = ((_a = props.className) == null ? void 0 : _a.includes("me-")) ? "" : "mr-1 ";
  const className = props.className ? `${props.className} ` : "";
  return `btn ${backgroundColor}${padding}${size}${round}${icon}${className}${endMargin}`;
};
var getComponentToRender = (renderAs) => {
  if (!renderAs) {
    return "button";
  }
  return renderAs;
};

// app/components/button/index.tsx
var isLabelProp = (props) => typeof props === "object" && "label" in props;
var Button = (props) => {
  const { icon, onClick, renderAs } = props;
  const className = getClassName(props);
  const child = isLabelProp(props) ? props.label : props.children;
  const ComponentToRender = getComponentToRender(renderAs);
  return /* @__PURE__ */ React.createElement(ComponentToRender, {
    onClick,
    type: "button",
    className: `${className}w-auto mb-0`
  }, icon ? /* @__PURE__ */ React.createElement("div", {
    className: "d-flex align-items-center"
  }, /* @__PURE__ */ React.createElement(icon_default, {
    name: icon
  }), child) : /* @__PURE__ */ React.createElement(import_react.Fragment, null, child));
};
var button_default = Button;

// app/components/navigation/list.tsx
init_react();
var import_react2 = __toModule(require("react"));
var List = (props) => {
  const _a = props, { defaultExpanded, children, target, className } = _a, rest = __objRest(_a, ["defaultExpanded", "children", "target", "className"]);
  const defaultExpandedRef = (0, import_react2.useRef)(defaultExpanded);
  const kids = import_react2.Children.map(children, (child) => /* @__PURE__ */ React.createElement("li", {
    className: `nav-item flex-grow-0 my-1 mx-1`
  }, child));
  const classTarget = target.startsWith(".") ? `${target.slice(1)} ` : "";
  const idTarget = target.startsWith("#") ? `${target.slice(1)} ` : "";
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    id: idTarget,
    className: `${className ? `${className} ` : ""}${classTarget}${defaultExpandedRef.current ? "collapse-show" : "collapse"} navbar-collapse flex-grow-0 collapsible-nav`
  }, rest), /* @__PURE__ */ React.createElement("ul", {
    className: "ms-auto me-auto me-md-0 navbar-nav navbar-nav-hovers ms-md-2 flex-row"
  }, kids));
};
var list_default = List;

// app/components/navigation/toggle.tsx
init_react();
var import_react3 = __toModule(require("react"));
var Toggle = (props) => {
  const { onClick, target, defaultExpanded } = props;
  const defaultExpandedRef = (0, import_react3.useRef)(defaultExpanded);
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    className: `navbar-toggler shadow-none ms-auto`,
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": target,
    "aria-controls": "navigation",
    "aria-expanded": defaultExpandedRef.current ? "true" : "false",
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
  const [isOpen, setIsOpen] = (0, import_react4.useState)(false);
  const location = (0, import_react_router_dom.useLocation)();
  console.log();
  const clickGithub = () => {
    window.open("https://github.com/cameronaziz", "_blank");
  };
  const clickLinkedIn = () => {
    window.open("https://linkedin.com/in/cameronaziz", "_blank");
  };
  const clickTwitter = () => {
    window.open("https://twitter.com/cameronaziz", "_blank");
  };
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  const isHome = location.pathname === "/";
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
  }, isHome ? /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/#contact"
  }, /* @__PURE__ */ React.createElement(button_default, {
    label: "Contact",
    color: "info"
  })) : /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(button_default, {
    label: "Home",
    color: "info"
  })), /* @__PURE__ */ React.createElement(toggle_default, {
    target: ".collapsible-nav",
    onClick: toggleNavigation
  }), /* @__PURE__ */ React.createElement(list_default, {
    target: ".collapsible-nav"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/blog"
  }, /* @__PURE__ */ React.createElement(button_default, {
    label: "Blog",
    color: "secondary",
    renderAs: "span"
  })), /* @__PURE__ */ React.createElement(button_default, {
    label: "Experience",
    color: "secondary"
  })), /* @__PURE__ */ React.createElement(list_default, {
    target: ".collapsible-nav",
    className: "ms-md-auto"
  }, /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "github",
    onClick: clickGithub
  }), /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "linkedin",
    onClick: clickLinkedIn
  }), /* @__PURE__ */ React.createElement(button_default, {
    color: "secondary",
    icon: "twitter",
    onClick: clickTwitter
  })))))));
};
var navigation_default = Navigation;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/root.tsx
var Root = () => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "/js/popper.min.js",
    type: "text/javascript"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "/js/bootstrap.min.js",
    type: "text/javascript"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "/css/nucleo-icons.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "/css/nucleo-svg.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/42d5adcbca.js",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "/css/nucleo-svg.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("link", {
    id: "pagestyle",
    href: "/css/soft-design-system.css?v=1.0.5",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(navigation_default, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
};
var meta = () => ({
  title: "Cameron Aziz - Web Engineer"
});
var root_default = Root;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
init_react();
var import_react5 = __toModule(require("react"));

// app/components/contact/index.tsx
init_react();

// app/components/contact/info.tsx
init_react();
var Info = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-5 position-relative bg-cover px-0",
    style: { backgroundImage: "url('../img/curved-images/curved5.jpg')" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "position-absolute z-index-2 w-100 h-100 top-0 start-0 d-lg-block d-none"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "../img/wave-2.svg",
    className: "h-100 ms-n2",
    alt: "vertical-wave"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mask bg-gradient-info opacity-9"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-5 ps-sm-8 position-relative text-start my-auto z-index-2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-white"
  }, "Contact Information"), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex mt-6 p-2 text-white"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-phone text-sm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ps-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm opacity-8"
  }, "(310) 469 1802"))), /* @__PURE__ */ React.createElement("div", {
    className: "d-flex p-2 text-white"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-envelope text-sm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ps-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm opacity-8"
  }, "cameronaziz@me.com"))))));
};
var info_default = Info;

// app/components/contact/index.tsx
var Contact = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container pt-6",
    id: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card overflow-hidden mb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-7"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "p-3",
    id: "contact-form",
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-header px-4 py-sm-5 py-3"
  }, /* @__PURE__ */ React.createElement("h2", null, "Say Hi!"), /* @__PURE__ */ React.createElement("p", {
    className: "lead"
  }, "I am always looking for new exciting projects.")), /* @__PURE__ */ React.createElement("div", {
    className: "card-body pt-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12 pe-2 mb-3"
  }, /* @__PURE__ */ React.createElement("label", null, "My name is"), /* @__PURE__ */ React.createElement("input", {
    className: "form-control",
    placeholder: "Full Name",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12 pe-2 mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-group mb-0"
  }, /* @__PURE__ */ React.createElement("label", null, "Your message"), /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    className: "form-control",
    id: "message",
    rows: 6,
    placeholder: "I want to say that..."
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6 text-end ms-auto"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-round bg-gradient-info mb-0"
  }, "Send Message")))))), /* @__PURE__ */ React.createElement(info_default, null))))));
};
var contact_default = Contact;

// app/components/hero/index.tsx
init_react();

// app/components/hero/header.tsx
init_react();
var Header = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
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
    className: "page-header min-vh-100",
    style: { backgroundImage: "url('./img/curved-images/curved.jpg')" }
  }, /* @__PURE__ */ React.createElement(header_default, null), /* @__PURE__ */ React.createElement(wave_default, null)));
};
var hero_default = Hero;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/index.tsx
var Index = () => {
  return /* @__PURE__ */ React.createElement(import_react5.Fragment, null, /* @__PURE__ */ React.createElement(hero_default, null), /* @__PURE__ */ React.createElement(contact_default, null));
};
var routes_default = Index;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  meta: () => meta2
});
init_react();
var import_react6 = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());

// app/components/blog/highlight.tsx
init_react();
var import_remix4 = __toModule(require_remix());
var BlogSummary = (props) => {
  const { imageSource, title, summary } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-3 col-md-12 col-12 mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-blog card-background"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "full-background",
    style: { backgroundImage: `url('${imageSource}')` }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content-left text-start my-auto py-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title text-white"
  }, title), /* @__PURE__ */ React.createElement("p", {
    className: "card-description text-white"
  }, summary), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "#",
    className: "text-white icon-move-right"
  }, "Read More ", /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-arrow-right text-sm"
  })))))));
};
var highlight_default = BlogSummary;

// app/components/blog/summary.tsx
init_react();
var import_remix5 = __toModule(require_remix());
var BlogSummary2 = (props) => {
  const { imageSource, title, summary } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-3 col-sm-6 mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card card-plain card-blog"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-image border-radius-lg position-relative"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-100 border-radius-lg move-on-hover shadow",
    src: imageSource
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "card-body px-0"
  }, /* @__PURE__ */ React.createElement("h5", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "#",
    className: "text-dark font-weight-bold"
  }, title)), /* @__PURE__ */ React.createElement("p", null, summary), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "#",
    className: "text-info icon-move-right"
  }, "Read More ", /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-arrow-right text-sm"
  })))));
};
var summary_default = BlogSummary2;

// app/hooks/useBlogPosts.ts
init_react();
var import_jotai2 = __toModule(require("jotai"));

// app/atoms/blog.ts
init_react();
var import_jotai = __toModule(require("jotai"));
var initialState = {
  posts: []
};
var blog = (0, import_jotai.atom)(initialState);
var blog_default = blog;

// app/hooks/useBlogPosts.ts
var useBlogPosts = () => {
  const [blogState, setBlogState] = (0, import_jotai2.useAtom)(blog_default);
  const setPosts = (posts) => {
    setBlogState((previous) => {
      return __spreadProps(__spreadValues({}, previous), {
        posts
      });
    });
  };
  return [
    blogState.posts,
    setPosts
  ];
};
var useBlogPosts_default = useBlogPosts;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog.tsx
var defaultPosts = [
  {
    title: "Remix JS",
    summary: "Remix JS is a JavaScript library for building user interfaces that has some real promise.",
    imageSource: "https://remix.run/img/og.1.jpg",
    slug: "remix-js"
  },
  {
    title: "Building Tools",
    summary: "When building tools, for yourself or your team, key principles should be followed.",
    imageSource: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tools-hanging-on-wall-royalty-free-image-760251967-1563391812.jpg?crop=1.00xw:0.502xh;0,0.0561xh&resize=1200:*",
    slug: "building-tools"
  },
  {
    title: "Flexible work hours",
    isHighlighted: true,
    summary: "Rather than worrying about switching offices every couple years, you stay in the same place.",
    imageSource: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg",
    slug: "flexible-work-hours"
  },
  {
    title: "OMG: Git Bisect",
    summary: "This just saved my life. Git bisect can easily find the commit that introduced a bug.",
    imageSource: "https://alexey-anufriev.com/wp-content/uploads/posts/git-debug/git-debug.png",
    slug: "git-bisect"
  },
  {
    title: "Rover raised $65 million",
    summary: "Rover raised $65 million in a round of funding from the National Science Foundation, the National Aeronautics and Space Administration, and the National Science Foundation.",
    imageSource: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    slug: "rover-raised-65-million"
  },
  {
    title: "Flexible work hours",
    isHighlighted: true,
    imageSource: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg",
    summary: "Rather than worrying about switching offices every couple years, you stay in the same place.",
    slug: "flexible-work-hours"
  },
  {
    title: "MateLabs machine learning",
    summary: "If you\u2019ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with",
    imageSource: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    slug: "matelabs-machine-learning"
  },
  {
    title: "US venture investment ticks",
    summary: "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings",
    imageSource: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    slug: "us-venture-investment-ticks"
  }
];
var Blog = () => {
  const [posts, setPosts] = useBlogPosts_default();
  (0, import_react6.useEffect)(() => {
    setPosts(defaultPosts);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container py-md-7 py-6 position-relative"
  }, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null), /* @__PURE__ */ React.createElement("div", {
    className: "row mb-1"
  }, posts.map((post) => {
    if (post.isHighlighted) {
      return /* @__PURE__ */ React.createElement(highlight_default, {
        key: post.title,
        title: post.title,
        summary: post.summary,
        imageSource: post.imageSource,
        slug: post.slug
      });
    }
    return /* @__PURE__ */ React.createElement(summary_default, {
      key: post.title,
      title: post.title,
      summary: post.summary,
      imageSource: post.imageSource,
      slug: post.slug
    });
  })));
};
var meta2 = () => ({
  title: "Blog"
});
var blog_default2 = Blog;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader,
  meta: () => meta3
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/hooks/useBlogPost.ts
init_react();
var import_jotai3 = __toModule(require("jotai"));
var import_react7 = __toModule(require("react"));

// app/guards/index.ts
init_react();
var isFullPost = (post) => !!post && post.content !== void 0;

// app/hooks/useBlogPost.ts
var useBlogPost = (slug) => {
  const [blogState, setBlogState] = (0, import_jotai3.useAtom)(blog_default);
  const [post, setPost] = (0, import_react7.useState)(null);
  (0, import_react7.useEffect)(() => {
    const post2 = blogState.posts.find((post3) => typeof slug !== void 0 && post3.slug === slug);
    if (!post2) {
      return;
    }
    if (isFullPost(post2)) {
      setPost(post2);
      return;
    }
    const nextPost = __spreadProps(__spreadValues({}, post2), {
      content: "My Content"
    });
    setPost(nextPost);
  }, [blogState.posts, slug]);
  const setPosts = (post2) => {
    if (typeof slug === void 0) {
      return;
    }
    setBlogState((previous) => {
      const posts = previous.posts.map((p) => {
        if (p.slug === post2.slug) {
          return post2;
        }
        return p;
      });
      return __spreadProps(__spreadValues({}, previous), {
        posts
      });
    });
  };
  return [
    post,
    setPosts
  ];
};
var useBlogPost_default = useBlogPost;

// route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog/$slug.tsx
var loader = (data) => {
  return data.params.slug;
};
var Slug = () => {
  const slug = (0, import_remix7.useLoaderData)();
  const [post] = useBlogPost_default(slug);
  if (!post) {
    return null;
  }
  const { title, subtitle, content, imageSource } = post;
  return /* @__PURE__ */ React.createElement("section", {
    className: "py-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-gradient text-primary mb-0 mt-2"
  }, title), subtitle && /* @__PURE__ */ React.createElement("h3", null, subtitle), /* @__PURE__ */ React.createElement("p", null, content), /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    className: "text-primary icon-move-right"
  }, "More about us", /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-arrow-right text-sm ms-1"
  }))))));
};
var meta3 = () => ({
  title: "Post"
});
var slug_default = Slug;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "routes/blog",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9jYXppei9jb2RlL3BlcnNvbmFsL2NhbWVyb24tYXppei9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9pY29uL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9pY29uL25hbWUvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvaWNvbi9uYW1lL2ZhL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2ljb24vbmFtZS9udWNsZW8vaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvYnV0dG9uL3V0aWxzLnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbGlzdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi90b2dnbGUudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvY2F6aXovY29kZS9wZXJzb25hbC9jYW1lcm9uLWF6aXovYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGFjdC9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGFjdC9pbmZvLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9oZXJvL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9oZXJvL2hlYWRlci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvaGVyby93YXZlLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2Nheml6L2NvZGUvcGVyc29uYWwvY2FtZXJvbi1heml6L2FwcC9yb3V0ZXMvYmxvZy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvYmxvZy9oaWdobGlnaHQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Jsb2cvc3VtbWFyeS50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUJsb2dQb3N0cy50cyIsICIuLi8uLi8uLi8uLi9hcHAvYXRvbXMvYmxvZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2Nheml6L2NvZGUvcGVyc29uYWwvY2FtZXJvbi1heml6L2FwcC9yb3V0ZXMvYmxvZy8kc2x1Zy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUJsb2dQb3N0LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9ndWFyZHMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9jYXppei9jb2RlL3BlcnNvbmFsL2NhbWVyb24tYXppei9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvY2F6aXovY29kZS9wZXJzb25hbC9jYW1lcm9uLWF6aXovYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9jYXppei9jb2RlL3BlcnNvbmFsL2NhbWVyb24tYXppei9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvY2F6aXovY29kZS9wZXJzb25hbC9jYW1lcm9uLWF6aXovYXBwL3JvdXRlcy9ibG9nLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvY2F6aXovY29kZS9wZXJzb25hbC9jYW1lcm9uLWF6aXovYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2Jsb2cvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcblxuY29uc3QgUm9vdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL3BvcHBlci5taW4uanNcIiB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvYm9vdHN0cmFwLm1pbi5qc1wiIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNDAwLDYwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvbnVjbGVvLWljb25zLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9udWNsZW8tc3ZnLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS80MmQ1YWRjYmNhLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9udWNsZW8tc3ZnLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayBpZD1cInBhZ2VzdHlsZVwiIGhyZWY9XCIvY3NzL3NvZnQtZGVzaWduLXN5c3RlbS5jc3M/dj0xLjAuNVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICB0aXRsZTogJ0NhbWVyb24gQXppeiAtIFdlYiBFbmdpbmVlcicsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vdDtcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgVkZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL3RvZ2dsZSc7XG5cbmNvbnN0IE5hdmlnYXRpb246IFZGQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zb2xlLmxvZygpXG5cbiAgY29uc3QgY2xpY2tHaXRodWIgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYW1lcm9uYXppeicsICdfYmxhbmsnKTtcbiAgfTtcblxuICBjb25zdCBjbGlja0xpbmtlZEluID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2xpbmtlZGluLmNvbS9pbi9jYW1lcm9uYXppeicsICdfYmxhbmsnKTtcbiAgfTtcblxuICBjb25zdCBjbGlja1R3aXR0ZXIgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vdHdpdHRlci5jb20vY2FtZXJvbmF6aXonLCAnX2JsYW5rJyk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gIH07XG5cbiAgY29uc3QgaXNIb21lID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBvc2l0aW9uLXN0aWNreSB6LWluZGV4LXN0aWNreSB0b3AtMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIGJsdXIgYm9yZGVyLXJhZGl1cy1tZCB0b3AtMCB6LWluZGV4LWZpeGVkIHNoYWRvdyBwb3NpdGlvbi1hYnNvbHV0ZSBteS0zIHB5LTIgc3RhcnQtMCBlbmQtMCBteC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweC0wXCI+XG4gICAgICAgICAgICAgIHtpc0hvbWUgP1xuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiLyNjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSG9tZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8VG9nZ2xlXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiLmNvbGxhcHNpYmxlLW5hdlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2aWdhdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExpc3QgdGFyZ2V0PVwiLmNvbGxhcHNpYmxlLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCbG9nXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJBcz1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFeHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgIDxMaXN0IHRhcmdldD1cIi5jb2xsYXBzaWJsZS1uYXZcIiBjbGFzc05hbWU9XCJtcy1tZC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImdpdGh1YlwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja0dpdGh1Yn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJsaW5rZWRpblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja0xpbmtlZElufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cInR3aXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tUd2l0dGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsICJpbXBvcnQgeyBGQywgRnJhZ21lbnQsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvblByb3BzLCBCdXR0b25XaXRoTGFiZWxQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q2xhc3NOYW1lLCBnZXRDb21wb25lbnRUb1JlbmRlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBpc0xhYmVsUHJvcCA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48QnV0dG9uUHJvcHM+IHwgQnV0dG9uV2l0aExhYmVsUHJvcHMpOiBwcm9wcyBpcyBCdXR0b25XaXRoTGFiZWxQcm9wcyA9PlxuICB0eXBlb2YgcHJvcHMgPT09ICdvYmplY3QnICYmICdsYWJlbCcgaW4gcHJvcHM7XG5cbmNvbnN0IEJ1dHRvbjogRkM8QnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWNvbiwgb25DbGljaywgcmVuZGVyQXMgfSA9IHByb3BzO1xuICBjb25zdCBjbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHMpO1xuICBjb25zdCBjaGlsZCA9IGlzTGFiZWxQcm9wKHByb3BzKSA/IHByb3BzLmxhYmVsIDogcHJvcHMuY2hpbGRyZW47XG5cbiAgY29uc3QgQ29tcG9uZW50VG9SZW5kZXIgPSBnZXRDb21wb25lbnRUb1JlbmRlcihyZW5kZXJBcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50VG9SZW5kZXJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfXctYXV0byBtYi0wYH1cbiAgICA+XG4gICAgICB7aWNvbiA/XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBuYW1lPXtpY29ufVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2NoaWxkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAge2NoaWxkfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgfVxuICAgIDwvQ29tcG9uZW50VG9SZW5kZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCAiaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMsIFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzTnVjbGVvSWNvbiB9IGZyb20gJy4vbmFtZSc7XG5pbXBvcnQgdHlwZSBJY29uTmFtZSBmcm9tICcuL25hbWUvdHlwZSc7XG5cbnR5cGUgSWNvblByb3BzID0gSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+ICYge1xuICBuYW1lOiBJY29uTmFtZTtcbn1cblxuY29uc3QgSWNvbjogVkZDPEljb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcblxuICBpZiAoaXNOdWNsZW9JY29uKG5hbWUpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpIGNsYXNzTmFtZT17YG5pIG5pLSR7bmFtZX1gfSB7Li4ucmVzdH0gLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxpIGNsYXNzTmFtZT17YGZhIGZhLSR7bmFtZX1gfSB7Li4ucmVzdH0gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEljb25OYW1lIH07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCAiaW1wb3J0IGZhSWNvbk5hbWVzIGZyb20gJy4vZmEnO1xuaW1wb3J0IG51Y2xlb0ljb25OYW1lcyBmcm9tICcuL251Y2xlbyc7XG5pbXBvcnQgdHlwZSBJY29uTmFtZSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHR5cGUgeyBGQUljb25OYW1lLCBOdWNsZW9JY29uTmFtZSB9IGZyb20gJy4vdHlwZSc7XG5cbmNvbnN0IGljb25OYW1lcyA9IFtcbiAgLi4ubnVjbGVvSWNvbk5hbWVzLFxuICAuLi5mYUljb25OYW1lcyxcbl07XG5cbmV4cG9ydCBjb25zdCBpc0ZBSWNvbiA9IChpY29uTmFtZTogSWNvbk5hbWUpOiBpY29uTmFtZSBpcyBGQUljb25OYW1lID0+XG4gIGZhSWNvbk5hbWVzLmluY2x1ZGVzKGljb25OYW1lKTtcblxuZXhwb3J0IGNvbnN0IGlzTnVjbGVvSWNvbiA9IChpY29uTmFtZTogSWNvbk5hbWUpOiBpY29uTmFtZSBpcyBOdWNsZW9JY29uTmFtZSA9PlxuICBudWNsZW9JY29uTmFtZXMuaW5jbHVkZXMoaWNvbk5hbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBpY29uTmFtZXM7XG4iLCAiY29uc3QgZmFJY29uTmFtZXMgPSBbXG4gICdhZGRyZXNzLWJvb2snLFxuICAnYWRkcmVzcy1ib29rLW8nLFxuICAnYWRkcmVzcy1jYXJkJyxcbiAgJ2FkZHJlc3MtY2FyZC1vJyxcbiAgJ2JhbmRjYW1wJyxcbiAgJ2JhdGgnLFxuICAnYmF0aHR1YicsXG4gICdkcml2ZXJzLWxpY2Vuc2UnLFxuICAnZHJpdmVycy1saWNlbnNlLW8nLFxuICAnZWVyY2FzdCcsXG4gICdlbnZlbG9wZS1vcGVuJyxcbiAgJ2VudmVsb3BlLW9wZW4tbycsXG4gICdldHN5JyxcbiAgJ2ZyZWUtY29kZS1jYW1wJyxcbiAgJ2dyYXYnLFxuICAnaGFuZHNoYWtlLW8nLFxuICAnaWQtYmFkZ2UnLFxuICAnaWQtY2FyZCcsXG4gICdpZC1jYXJkLW8nLFxuICAnaW1kYicsXG4gICdsaW5vZGUnLFxuICAnbWVldHVwJyxcbiAgJ21pY3JvY2hpcCcsXG4gICdwb2RjYXN0JyxcbiAgJ3F1b3JhJyxcbiAgJ3JhdmVscnknLFxuICAnczE1JyxcbiAgJ3Nob3dlcicsXG4gICdzbm93Zmxha2UtbycsXG4gICdzdXBlcnBvd2VycycsXG4gICd0ZWxlZ3JhbScsXG4gICd0aGVybW9tZXRlcicsXG4gICd0aGVybW9tZXRlci0wJyxcbiAgJ3RoZXJtb21ldGVyLTEnLFxuICAndGhlcm1vbWV0ZXItMicsXG4gICd0aGVybW9tZXRlci0zJyxcbiAgJ3RoZXJtb21ldGVyLTQnLFxuICAndGhlcm1vbWV0ZXItZW1wdHknLFxuICAndGhlcm1vbWV0ZXItZnVsbCcsXG4gICd0aGVybW9tZXRlci1oYWxmJyxcbiAgJ3RoZXJtb21ldGVyLXF1YXJ0ZXInLFxuICAndGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnMnLFxuICAndGltZXMtcmVjdGFuZ2xlJyxcbiAgJ3RpbWVzLXJlY3RhbmdsZS1vJyxcbiAgJ3VzZXItY2lyY2xlJyxcbiAgJ3VzZXItY2lyY2xlLW8nLFxuICAndXNlci1vJyxcbiAgJ3ZjYXJkJyxcbiAgJ3ZjYXJkLW8nLFxuICAnd2luZG93LWNsb3NlJyxcbiAgJ3dpbmRvdy1jbG9zZS1vJyxcbiAgJ3dpbmRvdy1tYXhpbWl6ZScsXG4gICd3aW5kb3ctbWluaW1pemUnLFxuICAnd2luZG93LXJlc3RvcmUnLFxuICAnd3BleHBsb3JlcicsXG4gICdhZGRyZXNzLWJvb2snLFxuICAnYWRkcmVzcy1ib29rLW8nLFxuICAnYWRkcmVzcy1jYXJkJyxcbiAgJ2FkZHJlc3MtY2FyZC1vJyxcbiAgJ2FkanVzdCcsXG4gICdhbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZycsXG4gICdhbmNob3InLFxuICAnYXJjaGl2ZScsXG4gICdhcmVhLWNoYXJ0JyxcbiAgJ2Fycm93cycsXG4gICdhcnJvd3MtaCcsXG4gICdhcnJvd3MtdicsXG4gICdhc2wtaW50ZXJwcmV0aW5nJyxcbiAgJ2Fzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtcycsXG4gICdhc3RlcmlzaycsXG4gICdhdCcsXG4gICdhdWRpby1kZXNjcmlwdGlvbicsXG4gICdhdXRvbW9iaWxlJyxcbiAgJ2JhbGFuY2Utc2NhbGUnLFxuICAnYmFuJyxcbiAgJ2JhbmsnLFxuICAnYmFyLWNoYXJ0JyxcbiAgJ2Jhci1jaGFydC1vJyxcbiAgJ2JhcmNvZGUnLFxuICAnYmFycycsXG4gICdiYXRoJyxcbiAgJ2JhdGh0dWInLFxuICAnYmF0dGVyeScsXG4gICdiYXR0ZXJ5LTAnLFxuICAnYmF0dGVyeS0xJyxcbiAgJ2JhdHRlcnktMicsXG4gICdiYXR0ZXJ5LTMnLFxuICAnYmF0dGVyeS00JyxcbiAgJ2JhdHRlcnktZW1wdHknLFxuICAnYmF0dGVyeS1mdWxsJyxcbiAgJ2JhdHRlcnktaGFsZicsXG4gICdiYXR0ZXJ5LXF1YXJ0ZXInLFxuICAnYmF0dGVyeS10aHJlZS1xdWFydGVycycsXG4gICdiZWQnLFxuICAnYmVlcicsXG4gICdiZWxsJyxcbiAgJ2JlbGwtbycsXG4gICdiZWxsLXNsYXNoJyxcbiAgJ2JlbGwtc2xhc2gtbycsXG4gICdiaWN5Y2xlJyxcbiAgJ2Jpbm9jdWxhcnMnLFxuICAnYmlydGhkYXktY2FrZScsXG4gICdibGluZCcsXG4gICdibHVldG9vdGgnLFxuICAnYmx1ZXRvb3RoLWInLFxuICAnYm9sdCcsXG4gICdib21iJyxcbiAgJ2Jvb2snLFxuICAnYm9va21hcmsnLFxuICAnYm9va21hcmstbycsXG4gICdicmFpbGxlJyxcbiAgJ2JyaWVmY2FzZScsXG4gICdidWcnLFxuICAnYnVpbGRpbmcnLFxuICAnYnVpbGRpbmctbycsXG4gICdidWxsaG9ybicsXG4gICdidWxsc2V5ZScsXG4gICdidXMnLFxuICAnY2FiJyxcbiAgJ2NhbGN1bGF0b3InLFxuICAnY2FsZW5kYXInLFxuICAnY2FsZW5kYXItY2hlY2stbycsXG4gICdjYWxlbmRhci1taW51cy1vJyxcbiAgJ2NhbGVuZGFyLW8nLFxuICAnY2FsZW5kYXItcGx1cy1vJyxcbiAgJ2NhbGVuZGFyLXRpbWVzLW8nLFxuICAnY2FtZXJhJyxcbiAgJ2NhbWVyYS1yZXRybycsXG4gICdjYXInLFxuICAnY2FyZXQtc3F1YXJlLW8tZG93bicsXG4gICdjYXJldC1zcXVhcmUtby1sZWZ0JyxcbiAgJ2NhcmV0LXNxdWFyZS1vLXJpZ2h0JyxcbiAgJ2NhcmV0LXNxdWFyZS1vLXVwJyxcbiAgJ2NhcnQtYXJyb3ctZG93bicsXG4gICdjYXJ0LXBsdXMnLFxuICAnY2MnLFxuICAnY2VydGlmaWNhdGUnLFxuICAnY2hlY2snLFxuICAnY2hlY2stY2lyY2xlJyxcbiAgJ2NoZWNrLWNpcmNsZS1vJyxcbiAgJ2NoZWNrLXNxdWFyZScsXG4gICdjaGVjay1zcXVhcmUtbycsXG4gICdjaGlsZCcsXG4gICdjaXJjbGUnLFxuICAnY2lyY2xlLW8nLFxuICAnY2lyY2xlLW8tbm90Y2gnLFxuICAnY2lyY2xlLXRoaW4nLFxuICAnY2xvY2stbycsXG4gICdjbG9uZScsXG4gICdjbG9zZScsXG4gICdjbG91ZCcsXG4gICdjbG91ZC1kb3dubG9hZCcsXG4gICdjbG91ZC11cGxvYWQnLFxuICAnY29kZScsXG4gICdjb2RlLWZvcmsnLFxuICAnY29mZmVlJyxcbiAgJ2NvZycsXG4gICdjb2dzJyxcbiAgJ2NvbW1lbnQnLFxuICAnY29tbWVudC1vJyxcbiAgJ2NvbW1lbnRpbmcnLFxuICAnY29tbWVudGluZy1vJyxcbiAgJ2NvbW1lbnRzJyxcbiAgJ2NvbW1lbnRzLW8nLFxuICAnY29tcGFzcycsXG4gICdjb3B5cmlnaHQnLFxuICAnY3JlYXRpdmUtY29tbW9ucycsXG4gICdjcmVkaXQtY2FyZCcsXG4gICdjcmVkaXQtY2FyZC1hbHQnLFxuICAnY3JvcCcsXG4gICdjcm9zc2hhaXJzJyxcbiAgJ2N1YmUnLFxuICAnY3ViZXMnLFxuICAnY3V0bGVyeScsXG4gICdkYXNoYm9hcmQnLFxuICAnZGF0YWJhc2UnLFxuICAnZGVhZicsXG4gICdkZWFmbmVzcycsXG4gICdkZXNrdG9wJyxcbiAgJ2RpYW1vbmQnLFxuICAnZG90LWNpcmNsZS1vJyxcbiAgJ2Rvd25sb2FkJyxcbiAgJ2RyaXZlcnMtbGljZW5zZScsXG4gICdkcml2ZXJzLWxpY2Vuc2UtbycsXG4gICdlZGl0JyxcbiAgJ2VsbGlwc2lzLWgnLFxuICAnZWxsaXBzaXMtdicsXG4gICdlbnZlbG9wZScsXG4gICdlbnZlbG9wZS1vJyxcbiAgJ2VudmVsb3BlLW9wZW4nLFxuICAnZW52ZWxvcGUtb3Blbi1vJyxcbiAgJ2VudmVsb3BlLXNxdWFyZScsXG4gICdlcmFzZXInLFxuICAnZXhjaGFuZ2UnLFxuICAnZXhjbGFtYXRpb24nLFxuICAnZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJyxcbiAgJ2V4dGVybmFsLWxpbmsnLFxuICAnZXh0ZXJuYWwtbGluay1zcXVhcmUnLFxuICAnZXllJyxcbiAgJ2V5ZS1zbGFzaCcsXG4gICdleWVkcm9wcGVyJyxcbiAgJ2ZheCcsXG4gICdmZWVkJyxcbiAgJ2ZlbWFsZScsXG4gICdmaWdodGVyLWpldCcsXG4gICdmaWxlLWFyY2hpdmUtbycsXG4gICdmaWxlLWF1ZGlvLW8nLFxuICAnZmlsZS1jb2RlLW8nLFxuICAnZmlsZS1leGNlbC1vJyxcbiAgJ2ZpbGUtaW1hZ2UtbycsXG4gICdmaWxlLW1vdmllLW8nLFxuICAnZmlsZS1wZGYtbycsXG4gICdmaWxlLXBob3RvLW8nLFxuICAnZmlsZS1waWN0dXJlLW8nLFxuICAnZmlsZS1wb3dlcnBvaW50LW8nLFxuICAnZmlsZS1zb3VuZC1vJyxcbiAgJ2ZpbGUtdmlkZW8tbycsXG4gICdmaWxlLXdvcmQtbycsXG4gICdmaWxlLXppcC1vJyxcbiAgJ2ZpbG0nLFxuICAnZmlsdGVyJyxcbiAgJ2ZpcmUnLFxuICAnZmlyZS1leHRpbmd1aXNoZXInLFxuICAnZmxhZycsXG4gICdmbGFnLWNoZWNrZXJlZCcsXG4gICdmbGFnLW8nLFxuICAnZmxhc2gnLFxuICAnZmxhc2snLFxuICAnZm9sZGVyJyxcbiAgJ2ZvbGRlci1vJyxcbiAgJ2ZvbGRlci1vcGVuJyxcbiAgJ2ZvbGRlci1vcGVuLW8nLFxuICAnZnJvd24tbycsXG4gICdmdXRib2wtbycsXG4gICdnYW1lcGFkJyxcbiAgJ2dhdmVsJyxcbiAgJ2dlYXInLFxuICAnZ2VhcnMnLFxuICAnZ2lmdCcsXG4gICdnbGFzcycsXG4gICdnbG9iZScsXG4gICdncmFkdWF0aW9uLWNhcCcsXG4gICdncm91cCcsXG4gICdoYW5kLWdyYWItbycsXG4gICdoYW5kLWxpemFyZC1vJyxcbiAgJ2hhbmQtcGFwZXItbycsXG4gICdoYW5kLXBlYWNlLW8nLFxuICAnaGFuZC1wb2ludGVyLW8nLFxuICAnaGFuZC1yb2NrLW8nLFxuICAnaGFuZC1zY2lzc29ycy1vJyxcbiAgJ2hhbmQtc3BvY2stbycsXG4gICdoYW5kLXN0b3AtbycsXG4gICdoYW5kc2hha2UtbycsXG4gICdoYXJkLW9mLWhlYXJpbmcnLFxuICAnaGFzaHRhZycsXG4gICdoZGQtbycsXG4gICdoZWFkcGhvbmVzJyxcbiAgJ2hlYXJ0JyxcbiAgJ2hlYXJ0LW8nLFxuICAnaGVhcnRiZWF0JyxcbiAgJ2hpc3RvcnknLFxuICAnaG9tZScsXG4gICdob3RlbCcsXG4gICdob3VyZ2xhc3MnLFxuICAnaG91cmdsYXNzLTEnLFxuICAnaG91cmdsYXNzLTInLFxuICAnaG91cmdsYXNzLTMnLFxuICAnaG91cmdsYXNzLWVuZCcsXG4gICdob3VyZ2xhc3MtaGFsZicsXG4gICdob3VyZ2xhc3MtbycsXG4gICdob3VyZ2xhc3Mtc3RhcnQnLFxuICAnaS1jdXJzb3InLFxuICAnaWQtYmFkZ2UnLFxuICAnaWQtY2FyZCcsXG4gICdpZC1jYXJkLW8nLFxuICAnaW1hZ2UnLFxuICAnaW5ib3gnLFxuICAnaW5kdXN0cnknLFxuICAnaW5mbycsXG4gICdpbmZvLWNpcmNsZScsXG4gICdpbnN0aXR1dGlvbicsXG4gICdrZXknLFxuICAna2V5Ym9hcmQtbycsXG4gICdsYW5ndWFnZScsXG4gICdsYXB0b3AnLFxuICAnbGVhZicsXG4gICdsZWdhbCcsXG4gICdsZW1vbi1vJyxcbiAgJ2xldmVsLWRvd24nLFxuICAnbGV2ZWwtdXAnLFxuICAnbGlmZS1ib3V5JyxcbiAgJ2xpZmUtYnVveScsXG4gICdsaWZlLXJpbmcnLFxuICAnbGlmZS1zYXZlcicsXG4gICdsaWdodGJ1bGItbycsXG4gICdsaW5lLWNoYXJ0JyxcbiAgJ2xvY2F0aW9uLWFycm93JyxcbiAgJ2xvY2snLFxuICAnbG93LXZpc2lvbicsXG4gICdtYWdpYycsXG4gICdtYWduZXQnLFxuICAnbWFpbC1mb3J3YXJkJyxcbiAgJ21haWwtcmVwbHknLFxuICAnbWFpbC1yZXBseS1hbGwnLFxuICAnbWFsZScsXG4gICdtYXAnLFxuICAnbWFwLW1hcmtlcicsXG4gICdtYXAtbycsXG4gICdtYXAtcGluJyxcbiAgJ21hcC1zaWducycsXG4gICdtZWgtbycsXG4gICdtaWNyb2NoaXAnLFxuICAnbWljcm9waG9uZScsXG4gICdtaWNyb3Bob25lLXNsYXNoJyxcbiAgJ21pbnVzJyxcbiAgJ21pbnVzLWNpcmNsZScsXG4gICdtaW51cy1zcXVhcmUnLFxuICAnbWludXMtc3F1YXJlLW8nLFxuICAnbW9iaWxlJyxcbiAgJ21vYmlsZS1waG9uZScsXG4gICdtb25leScsXG4gICdtb29uLW8nLFxuICAnbW9ydGFyLWJvYXJkJyxcbiAgJ21vdG9yY3ljbGUnLFxuICAnbW91c2UtcG9pbnRlcicsXG4gICdtdXNpYycsXG4gICduYXZpY29uJyxcbiAgJ25ld3NwYXBlci1vJyxcbiAgJ29iamVjdC1ncm91cCcsXG4gICdvYmplY3QtdW5ncm91cCcsXG4gICdwYWludC1icnVzaCcsXG4gICdwYXBlci1wbGFuZScsXG4gICdwYXBlci1wbGFuZS1vJyxcbiAgJ3BhdycsXG4gICdwZW5jaWwnLFxuICAncGVuY2lsLXNxdWFyZScsXG4gICdwZW5jaWwtc3F1YXJlLW8nLFxuICAncGVyY2VudCcsXG4gICdwaG9uZScsXG4gICdwaG9uZS1zcXVhcmUnLFxuICAncGhvdG8nLFxuICAncGljdHVyZS1vJyxcbiAgJ3BpZS1jaGFydCcsXG4gICdwbGFuZScsXG4gICdwbHVnJyxcbiAgJ3BsdXMnLFxuICAncGx1cy1jaXJjbGUnLFxuICAncGx1cy1zcXVhcmUnLFxuICAncGx1cy1zcXVhcmUtbycsXG4gICdwb2RjYXN0JyxcbiAgJ3Bvd2VyLW9mZicsXG4gICdwcmludCcsXG4gICdwdXp6bGUtcGllY2UnLFxuICAncXJjb2RlJyxcbiAgJ3F1ZXN0aW9uJyxcbiAgJ3F1ZXN0aW9uLWNpcmNsZScsXG4gICdxdWVzdGlvbi1jaXJjbGUtbycsXG4gICdxdW90ZS1sZWZ0JyxcbiAgJ3F1b3RlLXJpZ2h0JyxcbiAgJ3JhbmRvbScsXG4gICdyZWN5Y2xlJyxcbiAgJ3JlZnJlc2gnLFxuICAncmVnaXN0ZXJlZCcsXG4gICdyZW1vdmUnLFxuICAncmVvcmRlcicsXG4gICdyZXBseScsXG4gICdyZXBseS1hbGwnLFxuICAncmV0d2VldCcsXG4gICdyb2FkJyxcbiAgJ3JvY2tldCcsXG4gICdyc3MnLFxuICAncnNzLXNxdWFyZScsXG4gICdzMTUnLFxuICAnc2VhcmNoJyxcbiAgJ3NlYXJjaC1taW51cycsXG4gICdzZWFyY2gtcGx1cycsXG4gICdzZW5kJyxcbiAgJ3NlbmQtbycsXG4gICdzZXJ2ZXInLFxuICAnc2hhcmUnLFxuICAnc2hhcmUtYWx0JyxcbiAgJ3NoYXJlLWFsdC1zcXVhcmUnLFxuICAnc2hhcmUtc3F1YXJlJyxcbiAgJ3NoYXJlLXNxdWFyZS1vJyxcbiAgJ3NoaWVsZCcsXG4gICdzaGlwJyxcbiAgJ3Nob3BwaW5nLWJhZycsXG4gICdzaG9wcGluZy1iYXNrZXQnLFxuICAnc2hvcHBpbmctY2FydCcsXG4gICdzaG93ZXInLFxuICAnc2lnbi1pbicsXG4gICdzaWduLWxhbmd1YWdlJyxcbiAgJ3NpZ24tb3V0JyxcbiAgJ3NpZ25hbCcsXG4gICdzaWduaW5nJyxcbiAgJ3NpdGVtYXAnLFxuICAnc2xpZGVycycsXG4gICdzbWlsZS1vJyxcbiAgJ3Nub3dmbGFrZS1vJyxcbiAgJ3NvY2Nlci1iYWxsLW8nLFxuICAnc29ydCcsXG4gICdzb3J0LWFscGhhLWFzYycsXG4gICdzb3J0LWFscGhhLWRlc2MnLFxuICAnc29ydC1hbW91bnQtYXNjJyxcbiAgJ3NvcnQtYW1vdW50LWRlc2MnLFxuICAnc29ydC1hc2MnLFxuICAnc29ydC1kZXNjJyxcbiAgJ3NvcnQtZG93bicsXG4gICdzb3J0LW51bWVyaWMtYXNjJyxcbiAgJ3NvcnQtbnVtZXJpYy1kZXNjJyxcbiAgJ3NvcnQtdXAnLFxuICAnc3BhY2Utc2h1dHRsZScsXG4gICdzcGlubmVyJyxcbiAgJ3Nwb29uJyxcbiAgJ3NxdWFyZScsXG4gICdzcXVhcmUtbycsXG4gICdzdGFyJyxcbiAgJ3N0YXItaGFsZicsXG4gICdzdGFyLWhhbGYtZW1wdHknLFxuICAnc3Rhci1oYWxmLWZ1bGwnLFxuICAnc3Rhci1oYWxmLW8nLFxuICAnc3Rhci1vJyxcbiAgJ3N0aWNreS1ub3RlJyxcbiAgJ3N0aWNreS1ub3RlLW8nLFxuICAnc3RyZWV0LXZpZXcnLFxuICAnc3VpdGNhc2UnLFxuICAnc3VuLW8nLFxuICAnc3VwcG9ydCcsXG4gICd0YWJsZXQnLFxuICAndGFjaG9tZXRlcicsXG4gICd0YWcnLFxuICAndGFncycsXG4gICd0YXNrcycsXG4gICd0YXhpJyxcbiAgJ3RlbGV2aXNpb24nLFxuICAndGVybWluYWwnLFxuICAndGhlcm1vbWV0ZXInLFxuICAndGhlcm1vbWV0ZXItMCcsXG4gICd0aGVybW9tZXRlci0xJyxcbiAgJ3RoZXJtb21ldGVyLTInLFxuICAndGhlcm1vbWV0ZXItMycsXG4gICd0aGVybW9tZXRlci00JyxcbiAgJ3RoZXJtb21ldGVyLWVtcHR5JyxcbiAgJ3RoZXJtb21ldGVyLWZ1bGwnLFxuICAndGhlcm1vbWV0ZXItaGFsZicsXG4gICd0aGVybW9tZXRlci1xdWFydGVyJyxcbiAgJ3RoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzJyxcbiAgJ3RodW1iLXRhY2snLFxuICAndGh1bWJzLWRvd24nLFxuICAndGh1bWJzLW8tZG93bicsXG4gICd0aHVtYnMtby11cCcsXG4gICd0aHVtYnMtdXAnLFxuICAndGlja2V0JyxcbiAgJ3RpbWVzJyxcbiAgJ3RpbWVzLWNpcmNsZScsXG4gICd0aW1lcy1jaXJjbGUtbycsXG4gICd0aW1lcy1yZWN0YW5nbGUnLFxuICAndGltZXMtcmVjdGFuZ2xlLW8nLFxuICAndGludCcsXG4gICd0b2dnbGUtZG93bicsXG4gICd0b2dnbGUtbGVmdCcsXG4gICd0b2dnbGUtb2ZmJyxcbiAgJ3RvZ2dsZS1vbicsXG4gICd0b2dnbGUtcmlnaHQnLFxuICAndG9nZ2xlLXVwJyxcbiAgJ3RyYWRlbWFyaycsXG4gICd0cmFzaCcsXG4gICd0cmFzaC1vJyxcbiAgJ3RyZWUnLFxuICAndHJvcGh5JyxcbiAgJ3RydWNrJyxcbiAgJ3R0eScsXG4gICd0dicsXG4gICd1bWJyZWxsYScsXG4gICd1bml2ZXJzYWwtYWNjZXNzJyxcbiAgJ3VuaXZlcnNpdHknLFxuICAndW5sb2NrJyxcbiAgJ3VubG9jay1hbHQnLFxuICAndW5zb3J0ZWQnLFxuICAndXBsb2FkJyxcbiAgJ3VzZXInLFxuICAndXNlci1jaXJjbGUnLFxuICAndXNlci1jaXJjbGUtbycsXG4gICd1c2VyLW8nLFxuICAndXNlci1wbHVzJyxcbiAgJ3VzZXItc2VjcmV0JyxcbiAgJ3VzZXItdGltZXMnLFxuICAndXNlcnMnLFxuICAndmNhcmQnLFxuICAndmNhcmQtbycsXG4gICd2aWRlby1jYW1lcmEnLFxuICAndm9sdW1lLWNvbnRyb2wtcGhvbmUnLFxuICAndm9sdW1lLWRvd24nLFxuICAndm9sdW1lLW9mZicsXG4gICd2b2x1bWUtdXAnLFxuICAnd2FybmluZycsXG4gICd3aGVlbGNoYWlyJyxcbiAgJ3doZWVsY2hhaXItYWx0JyxcbiAgJ3dpZmknLFxuICAnd2luZG93LWNsb3NlJyxcbiAgJ3dpbmRvdy1jbG9zZS1vJyxcbiAgJ3dpbmRvdy1tYXhpbWl6ZScsXG4gICd3aW5kb3ctbWluaW1pemUnLFxuICAnd2luZG93LXJlc3RvcmUnLFxuICAnd3JlbmNoJyxcbiAgJ2FtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nJyxcbiAgJ2FzbC1pbnRlcnByZXRpbmcnLFxuICAnYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zJyxcbiAgJ2F1ZGlvLWRlc2NyaXB0aW9uJyxcbiAgJ2JsaW5kJyxcbiAgJ2JyYWlsbGUnLFxuICAnY2MnLFxuICAnZGVhZicsXG4gICdkZWFmbmVzcycsXG4gICdoYXJkLW9mLWhlYXJpbmcnLFxuICAnbG93LXZpc2lvbicsXG4gICdxdWVzdGlvbi1jaXJjbGUtbycsXG4gICdzaWduLWxhbmd1YWdlJyxcbiAgJ3NpZ25pbmcnLFxuICAndHR5JyxcbiAgJ3VuaXZlcnNhbC1hY2Nlc3MnLFxuICAndm9sdW1lLWNvbnRyb2wtcGhvbmUnLFxuICAnd2hlZWxjaGFpcicsXG4gICd3aGVlbGNoYWlyLWFsdCcsXG4gICdoYW5kLWdyYWItbycsXG4gICdoYW5kLWxpemFyZC1vJyxcbiAgJ2hhbmQtby1kb3duJyxcbiAgJ2hhbmQtby1sZWZ0JyxcbiAgJ2hhbmQtby1yaWdodCcsXG4gICdoYW5kLW8tdXAnLFxuICAnaGFuZC1wYXBlci1vJyxcbiAgJ2hhbmQtcGVhY2UtbycsXG4gICdoYW5kLXBvaW50ZXItbycsXG4gICdoYW5kLXJvY2stbycsXG4gICdoYW5kLXNjaXNzb3JzLW8nLFxuICAnaGFuZC1zcG9jay1vJyxcbiAgJ2hhbmQtc3RvcC1vJyxcbiAgJ3RodW1icy1kb3duJyxcbiAgJ3RodW1icy1vLWRvd24nLFxuICAndGh1bWJzLW8tdXAnLFxuICAndGh1bWJzLXVwJyxcbiAgJ2FtYnVsYW5jZScsXG4gICdhdXRvbW9iaWxlJyxcbiAgJ2JpY3ljbGUnLFxuICAnYnVzJyxcbiAgJ2NhYicsXG4gICdjYXInLFxuICAnZmlnaHRlci1qZXQnLFxuICAnbW90b3JjeWNsZScsXG4gICdwbGFuZScsXG4gICdyb2NrZXQnLFxuICAnc2hpcCcsXG4gICdzcGFjZS1zaHV0dGxlJyxcbiAgJ3N1YndheScsXG4gICd0YXhpJyxcbiAgJ3RyYWluJyxcbiAgJ3RydWNrJyxcbiAgJ3doZWVsY2hhaXInLFxuICAnd2hlZWxjaGFpci1hbHQnLFxuICAnZ2VuZGVybGVzcycsXG4gICdpbnRlcnNleCcsXG4gICdtYXJzJyxcbiAgJ21hcnMtZG91YmxlJyxcbiAgJ21hcnMtc3Ryb2tlJyxcbiAgJ21hcnMtc3Ryb2tlLWgnLFxuICAnbWFycy1zdHJva2UtdicsXG4gICdtZXJjdXJ5JyxcbiAgJ25ldXRlcicsXG4gICd0cmFuc2dlbmRlcicsXG4gICd0cmFuc2dlbmRlci1hbHQnLFxuICAndmVudXMnLFxuICAndmVudXMtZG91YmxlJyxcbiAgJ3ZlbnVzLW1hcnMnLFxuICAnZmlsZScsXG4gICdmaWxlLWFyY2hpdmUtbycsXG4gICdmaWxlLWF1ZGlvLW8nLFxuICAnZmlsZS1jb2RlLW8nLFxuICAnZmlsZS1leGNlbC1vJyxcbiAgJ2ZpbGUtaW1hZ2UtbycsXG4gICdmaWxlLW1vdmllLW8nLFxuICAnZmlsZS1vJyxcbiAgJ2ZpbGUtcGRmLW8nLFxuICAnZmlsZS1waG90by1vJyxcbiAgJ2ZpbGUtcGljdHVyZS1vJyxcbiAgJ2ZpbGUtcG93ZXJwb2ludC1vJyxcbiAgJ2ZpbGUtc291bmQtbycsXG4gICdmaWxlLXRleHQnLFxuICAnZmlsZS10ZXh0LW8nLFxuICAnZmlsZS12aWRlby1vJyxcbiAgJ2ZpbGUtd29yZC1vJyxcbiAgJ2ZpbGUtemlwLW8nLFxuICAnY2lyY2xlLW8tbm90Y2gnLFxuICAnY29nJyxcbiAgJ2dlYXInLFxuICAncmVmcmVzaCcsXG4gICdzcGlubmVyJyxcbiAgJ2NoZWNrLXNxdWFyZScsXG4gICdjaGVjay1zcXVhcmUtbycsXG4gICdjaXJjbGUnLFxuICAnY2lyY2xlLW8nLFxuICAnZG90LWNpcmNsZS1vJyxcbiAgJ21pbnVzLXNxdWFyZScsXG4gICdtaW51cy1zcXVhcmUtbycsXG4gICdwbHVzLXNxdWFyZScsXG4gICdwbHVzLXNxdWFyZS1vJyxcbiAgJ3NxdWFyZScsXG4gICdzcXVhcmUtbycsXG4gICdjYy1hbWV4JyxcbiAgJ2NjLWRpbmVycy1jbHViJyxcbiAgJ2NjLWRpc2NvdmVyJyxcbiAgJ2NjLWpjYicsXG4gICdjYy1tYXN0ZXJjYXJkJyxcbiAgJ2NjLXBheXBhbCcsXG4gICdjYy1zdHJpcGUnLFxuICAnY2MtdmlzYScsXG4gICdjcmVkaXQtY2FyZCcsXG4gICdjcmVkaXQtY2FyZC1hbHQnLFxuICAnZ29vZ2xlLXdhbGxldCcsXG4gICdwYXlwYWwnLFxuICAnYXJlYS1jaGFydCcsXG4gICdiYXItY2hhcnQnLFxuICAnYmFyLWNoYXJ0LW8nLFxuICAnbGluZS1jaGFydCcsXG4gICdwaWUtY2hhcnQnLFxuICAnYml0Y29pbicsXG4gICdidGMnLFxuICAnY255JyxcbiAgJ2RvbGxhcicsXG4gICdldXInLFxuICAnZXVybycsXG4gICdnYnAnLFxuICAnZ2cnLFxuICAnZ2ctY2lyY2xlJyxcbiAgJ2lscycsXG4gICdpbnInLFxuICAnanB5JyxcbiAgJ2tydycsXG4gICdtb25leScsXG4gICdybWInLFxuICAncm91YmxlJyxcbiAgJ3J1YicsXG4gICdydWJsZScsXG4gICdydXBlZScsXG4gICdzaGVrZWwnLFxuICAnc2hlcWVsJyxcbiAgJ3RyeScsXG4gICd0dXJraXNoLWxpcmEnLFxuICAndXNkJyxcbiAgJ3ZpYWNvaW4nLFxuICAnd29uJyxcbiAgJ3llbicsXG4gICdhbGlnbi1jZW50ZXInLFxuICAnYWxpZ24tanVzdGlmeScsXG4gICdhbGlnbi1sZWZ0JyxcbiAgJ2FsaWduLXJpZ2h0JyxcbiAgJ2JvbGQnLFxuICAnY2hhaW4nLFxuICAnY2hhaW4tYnJva2VuJyxcbiAgJ2NsaXBib2FyZCcsXG4gICdjb2x1bW5zJyxcbiAgJ2NvcHknLFxuICAnY3V0JyxcbiAgJ2RlZGVudCcsXG4gICdlcmFzZXInLFxuICAnZmlsZScsXG4gICdmaWxlLW8nLFxuICAnZmlsZS10ZXh0JyxcbiAgJ2ZpbGUtdGV4dC1vJyxcbiAgJ2ZpbGVzLW8nLFxuICAnZmxvcHB5LW8nLFxuICAnZm9udCcsXG4gICdoZWFkZXInLFxuICAnaW5kZW50JyxcbiAgJ2l0YWxpYycsXG4gICdsaW5rJyxcbiAgJ2xpc3QnLFxuICAnbGlzdC1hbHQnLFxuICAnbGlzdC1vbCcsXG4gICdsaXN0LXVsJyxcbiAgJ291dGRlbnQnLFxuICAncGFwZXJjbGlwJyxcbiAgJ3BhcmFncmFwaCcsXG4gICdwYXN0ZScsXG4gICdyZXBlYXQnLFxuICAncm90YXRlLWxlZnQnLFxuICAncm90YXRlLXJpZ2h0JyxcbiAgJ3NhdmUnLFxuICAnc2Npc3NvcnMnLFxuICAnc3RyaWtldGhyb3VnaCcsXG4gICdzdWJzY3JpcHQnLFxuICAnc3VwZXJzY3JpcHQnLFxuICAndGFibGUnLFxuICAndGV4dC1oZWlnaHQnLFxuICAndGV4dC13aWR0aCcsXG4gICd0aCcsXG4gICd0aC1sYXJnZScsXG4gICd0aC1saXN0JyxcbiAgJ3VuZGVybGluZScsXG4gICd1bmRvJyxcbiAgJ3VubGluaycsXG4gICdhbmdsZS1kb3VibGUtZG93bicsXG4gICdhbmdsZS1kb3VibGUtbGVmdCcsXG4gICdhbmdsZS1kb3VibGUtcmlnaHQnLFxuICAnYW5nbGUtZG91YmxlLXVwJyxcbiAgJ2FuZ2xlLWRvd24nLFxuICAnYW5nbGUtbGVmdCcsXG4gICdhbmdsZS1yaWdodCcsXG4gICdhbmdsZS11cCcsXG4gICdhcnJvdy1jaXJjbGUtZG93bicsXG4gICdhcnJvdy1jaXJjbGUtbGVmdCcsXG4gICdhcnJvdy1jaXJjbGUtby1kb3duJyxcbiAgJ2Fycm93LWNpcmNsZS1vLWxlZnQnLFxuICAnYXJyb3ctY2lyY2xlLW8tcmlnaHQnLFxuICAnYXJyb3ctY2lyY2xlLW8tdXAnLFxuICAnYXJyb3ctY2lyY2xlLXJpZ2h0JyxcbiAgJ2Fycm93LWNpcmNsZS11cCcsXG4gICdhcnJvdy1kb3duJyxcbiAgJ2Fycm93LWxlZnQnLFxuICAnYXJyb3ctcmlnaHQnLFxuICAnYXJyb3ctdXAnLFxuICAnYXJyb3dzJyxcbiAgJ2Fycm93cy1hbHQnLFxuICAnYXJyb3dzLWgnLFxuICAnYXJyb3dzLXYnLFxuICAnY2FyZXQtZG93bicsXG4gICdjYXJldC1sZWZ0JyxcbiAgJ2NhcmV0LXJpZ2h0JyxcbiAgJ2NhcmV0LXNxdWFyZS1vLWRvd24nLFxuICAnY2FyZXQtc3F1YXJlLW8tbGVmdCcsXG4gICdjYXJldC1zcXVhcmUtby1yaWdodCcsXG4gICdjYXJldC1zcXVhcmUtby11cCcsXG4gICdjYXJldC11cCcsXG4gICdjaGV2cm9uLWNpcmNsZS1kb3duJyxcbiAgJ2NoZXZyb24tY2lyY2xlLWxlZnQnLFxuICAnY2hldnJvbi1jaXJjbGUtcmlnaHQnLFxuICAnY2hldnJvbi1jaXJjbGUtdXAnLFxuICAnY2hldnJvbi1kb3duJyxcbiAgJ2NoZXZyb24tbGVmdCcsXG4gICdjaGV2cm9uLXJpZ2h0JyxcbiAgJ2NoZXZyb24tdXAnLFxuICAnZXhjaGFuZ2UnLFxuICAnaGFuZC1vLWRvd24nLFxuICAnaGFuZC1vLWxlZnQnLFxuICAnaGFuZC1vLXJpZ2h0JyxcbiAgJ2hhbmQtby11cCcsXG4gICdsb25nLWFycm93LWRvd24nLFxuICAnbG9uZy1hcnJvdy1sZWZ0JyxcbiAgJ2xvbmctYXJyb3ctcmlnaHQnLFxuICAnbG9uZy1hcnJvdy11cCcsXG4gICd0b2dnbGUtZG93bicsXG4gICd0b2dnbGUtbGVmdCcsXG4gICd0b2dnbGUtcmlnaHQnLFxuICAndG9nZ2xlLXVwJyxcbiAgJ2Fycm93cy1hbHQnLFxuICAnYmFja3dhcmQnLFxuICAnY29tcHJlc3MnLFxuICAnZWplY3QnLFxuICAnZXhwYW5kJyxcbiAgJ2Zhc3QtYmFja3dhcmQnLFxuICAnZmFzdC1mb3J3YXJkJyxcbiAgJ2ZvcndhcmQnLFxuICAncGF1c2UnLFxuICAncGF1c2UtY2lyY2xlJyxcbiAgJ3BhdXNlLWNpcmNsZS1vJyxcbiAgJ3BsYXknLFxuICAncGxheS1jaXJjbGUnLFxuICAncGxheS1jaXJjbGUtbycsXG4gICdyYW5kb20nLFxuICAnc3RlcC1iYWNrd2FyZCcsXG4gICdzdGVwLWZvcndhcmQnLFxuICAnc3RvcCcsXG4gICdzdG9wLWNpcmNsZScsXG4gICdzdG9wLWNpcmNsZS1vJyxcbiAgJ3lvdXR1YmUtcGxheScsXG4gICc1MDBweCcsXG4gICdhZG4nLFxuICAnYW1hem9uJyxcbiAgJ2FuZHJvaWQnLFxuICAnYW5nZWxsaXN0JyxcbiAgJ2FwcGxlJyxcbiAgJ2JhbmRjYW1wJyxcbiAgJ2JlaGFuY2UnLFxuICAnYmVoYW5jZS1zcXVhcmUnLFxuICAnYml0YnVja2V0JyxcbiAgJ2JpdGJ1Y2tldC1zcXVhcmUnLFxuICAnYml0Y29pbicsXG4gICdibGFjay10aWUnLFxuICAnYmx1ZXRvb3RoJyxcbiAgJ2JsdWV0b290aC1iJyxcbiAgJ2J0YycsXG4gICdidXlzZWxsYWRzJyxcbiAgJ2NjLWFtZXgnLFxuICAnY2MtZGluZXJzLWNsdWInLFxuICAnY2MtZGlzY292ZXInLFxuICAnY2MtamNiJyxcbiAgJ2NjLW1hc3RlcmNhcmQnLFxuICAnY2MtcGF5cGFsJyxcbiAgJ2NjLXN0cmlwZScsXG4gICdjYy12aXNhJyxcbiAgJ2Nocm9tZScsXG4gICdjb2RlcGVuJyxcbiAgJ2NvZGllcGllJyxcbiAgJ2Nvbm5lY3RkZXZlbG9wJyxcbiAgJ2NvbnRhbycsXG4gICdjc3MzJyxcbiAgJ2Rhc2hjdWJlJyxcbiAgJ2RlbGljaW91cycsXG4gICdkZXZpYW50YXJ0JyxcbiAgJ2RpZ2cnLFxuICAnZHJpYmJibGUnLFxuICAnZHJvcGJveCcsXG4gICdkcnVwYWwnLFxuICAnZWRnZScsXG4gICdlZXJjYXN0JyxcbiAgJ2VtcGlyZScsXG4gICdlbnZpcmEnLFxuICAnZXRzeScsXG4gICdleHBlZGl0ZWRzc2wnLFxuICAnZmEnLFxuICAnZmFjZWJvb2snLFxuICAnZmFjZWJvb2stZicsXG4gICdmYWNlYm9vay1vZmZpY2lhbCcsXG4gICdmYWNlYm9vay1zcXVhcmUnLFxuICAnZmlyZWZveCcsXG4gICdmaXJzdC1vcmRlcicsXG4gICdmbGlja3InLFxuICAnZm9udC1hd2Vzb21lJyxcbiAgJ2ZvbnRpY29ucycsXG4gICdmb3J0LWF3ZXNvbWUnLFxuICAnZm9ydW1iZWUnLFxuICAnZm91cnNxdWFyZScsXG4gICdmcmVlLWNvZGUtY2FtcCcsXG4gICdnZScsXG4gICdnZXQtcG9ja2V0JyxcbiAgJ2dnJyxcbiAgJ2dnLWNpcmNsZScsXG4gICdnaXQnLFxuICAnZ2l0LXNxdWFyZScsXG4gICdnaXRodWInLFxuICAnZ2l0aHViLWFsdCcsXG4gICdnaXRodWItc3F1YXJlJyxcbiAgJ2dpdGxhYicsXG4gICdnaXR0aXAnLFxuICAnZ2xpZGUnLFxuICAnZ2xpZGUtZycsXG4gICdnb29nbGUnLFxuICAnZ29vZ2xlLXBsdXMnLFxuICAnZ29vZ2xlLXBsdXMtY2lyY2xlJyxcbiAgJ2dvb2dsZS1wbHVzLW9mZmljaWFsJyxcbiAgJ2dvb2dsZS1wbHVzLXNxdWFyZScsXG4gICdnb29nbGUtd2FsbGV0JyxcbiAgJ2dyYXRpcGF5JyxcbiAgJ2dyYXYnLFxuICAnaGFja2VyLW5ld3MnLFxuICAnaG91enonLFxuICAnaHRtbDUnLFxuICAnaW1kYicsXG4gICdpbnN0YWdyYW0nLFxuICAnaW50ZXJuZXQtZXhwbG9yZXInLFxuICAnaW94aG9zdCcsXG4gICdqb29tbGEnLFxuICAnanNmaWRkbGUnLFxuICAnbGFzdGZtJyxcbiAgJ2xhc3RmbS1zcXVhcmUnLFxuICAnbGVhbnB1YicsXG4gICdsaW5rZWRpbicsXG4gICdsaW5rZWRpbi1zcXVhcmUnLFxuICAnbGlub2RlJyxcbiAgJ2xpbnV4JyxcbiAgJ21heGNkbicsXG4gICdtZWFucGF0aCcsXG4gICdtZWRpdW0nLFxuICAnbWVldHVwJyxcbiAgJ21peGNsb3VkJyxcbiAgJ21vZHgnLFxuICAnb2Rub2tsYXNzbmlraScsXG4gICdvZG5va2xhc3NuaWtpLXNxdWFyZScsXG4gICdvcGVuY2FydCcsXG4gICdvcGVuaWQnLFxuICAnb3BlcmEnLFxuICAnb3B0aW4tbW9uc3RlcicsXG4gICdwYWdlbGluZXMnLFxuICAncGF5cGFsJyxcbiAgJ3BpZWQtcGlwZXInLFxuICAncGllZC1waXBlci1hbHQnLFxuICAncGllZC1waXBlci1wcCcsXG4gICdwaW50ZXJlc3QnLFxuICAncGludGVyZXN0LXAnLFxuICAncGludGVyZXN0LXNxdWFyZScsXG4gICdwcm9kdWN0LWh1bnQnLFxuICAncXEnLFxuICAncXVvcmEnLFxuICAncmEnLFxuICAncmF2ZWxyeScsXG4gICdyZWJlbCcsXG4gICdyZWRkaXQnLFxuICAncmVkZGl0LWFsaWVuJyxcbiAgJ3JlZGRpdC1zcXVhcmUnLFxuICAncmVucmVuJyxcbiAgJ3Jlc2lzdGFuY2UnLFxuICAnc2FmYXJpJyxcbiAgJ3NjcmliZCcsXG4gICdzZWxsc3knLFxuICAnc2hhcmUtYWx0JyxcbiAgJ3NoYXJlLWFsdC1zcXVhcmUnLFxuICAnc2hpcnRzaW5idWxrJyxcbiAgJ3NpbXBseWJ1aWx0JyxcbiAgJ3NreWF0bGFzJyxcbiAgJ3NreXBlJyxcbiAgJ3NsYWNrJyxcbiAgJ3NsaWRlc2hhcmUnLFxuICAnc25hcGNoYXQnLFxuICAnc25hcGNoYXQtZ2hvc3QnLFxuICAnc25hcGNoYXQtc3F1YXJlJyxcbiAgJ3NvdW5kY2xvdWQnLFxuICAnc3BvdGlmeScsXG4gICdzdGFjay1leGNoYW5nZScsXG4gICdzdGFjay1vdmVyZmxvdycsXG4gICdzdGVhbScsXG4gICdzdGVhbS1zcXVhcmUnLFxuICAnc3R1bWJsZXVwb24nLFxuICAnc3R1bWJsZXVwb24tY2lyY2xlJyxcbiAgJ3N1cGVycG93ZXJzJyxcbiAgJ3RlbGVncmFtJyxcbiAgJ3RlbmNlbnQtd2VpYm8nLFxuICAndGhlbWVpc2xlJyxcbiAgJ3RyZWxsbycsXG4gICd0cmlwYWR2aXNvcicsXG4gICd0dW1ibHInLFxuICAndHVtYmxyLXNxdWFyZScsXG4gICd0d2l0Y2gnLFxuICAndHdpdHRlcicsXG4gICd0d2l0dGVyLXNxdWFyZScsXG4gICd1c2InLFxuICAndmlhY29pbicsXG4gICd2aWFkZW8nLFxuICAndmlhZGVvLXNxdWFyZScsXG4gICd2aW1lbycsXG4gICd2aW1lby1zcXVhcmUnLFxuICAndmluZScsXG4gICd2aycsXG4gICd3ZWNoYXQnLFxuICAnd2VpYm8nLFxuICAnd2VpeGluJyxcbiAgJ3doYXRzYXBwJyxcbiAgJ3dpa2lwZWRpYS13JyxcbiAgJ3dpbmRvd3MnLFxuICAnd29yZHByZXNzJyxcbiAgJ3dwYmVnaW5uZXInLFxuICAnd3BleHBsb3JlcicsXG4gICd3cGZvcm1zJyxcbiAgJ3hpbmcnLFxuICAneGluZy1zcXVhcmUnLFxuICAneS1jb21iaW5hdG9yJyxcbiAgJ3ktY29tYmluYXRvci1zcXVhcmUnLFxuICAneWFob28nLFxuICAneWMnLFxuICAneWMtc3F1YXJlJyxcbiAgJ3llbHAnLFxuICAneW9hc3QnLFxuICAneW91dHViZScsXG4gICd5b3V0dWJlLXBsYXknLFxuICAneW91dHViZS1zcXVhcmUnLFxuICAnYW1idWxhbmNlJyxcbiAgJ2gtc3F1YXJlJyxcbiAgJ2hlYXJ0JyxcbiAgJ2hlYXJ0LW8nLFxuICAnaGVhcnRiZWF0JyxcbiAgJ2hvc3BpdGFsLW8nLFxuICAnbWVka2l0JyxcbiAgJ3BsdXMtc3F1YXJlJyxcbiAgJ3N0ZXRob3Njb3BlJyxcbiAgJ3VzZXItbWQnLFxuICAnd2hlZWxjaGFpcicsXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZhSWNvbk5hbWVzO1xuIiwgImNvbnN0IG51Y2xlb0ljb25OYW1lcyA9IFtcbiAgJ2FjdGl2ZS00MCcsXG4gICdhaXItYmFsb29uJyxcbiAgJ2FsYnVtLTInLFxuICAnYWxpZ24tY2VudGVyJyxcbiAgJ2FsaWduLWxlZnQtMicsXG4gICdhbWJ1bGFuY2UnLFxuICAnYXBwJyxcbiAgJ2FyY2hpdmUtMicsXG4gICdhdG9tJyxcbiAgJ2JhZGdlJyxcbiAgJ2JhZy0xNycsXG4gICdiYXNrZXQnLFxuICAnYmVsbC01NScsXG4gICdib2xkLWRvd24nLFxuICAnYm9sZC1sZWZ0JyxcbiAgJ2JvbGQtcmlnaHQnLFxuICAnYm9sZC11cCcsXG4gICdib2xkJyxcbiAgJ2Jvb2stYm9va21hcmsnLFxuICAnYm9va3MnLFxuICAnYm94LTInLFxuICAnYnJpZWZjYXNlLTI0JyxcbiAgJ2J1aWxkaW5nJyxcbiAgJ2J1bGItNjEnLFxuICAnYnVsbGV0LWxpc3QtNjcnLFxuICAnYnVzLWZyb250LTEyJyxcbiAgJ2J1dHRvbi1wYXVzZScsXG4gICdidXR0b24tcGxheScsXG4gICdidXR0b24tcG93ZXInLFxuICAnY2FsZW5kYXItZ3JpZC01OCcsXG4gICdjYW1lcmEtY29tcGFjdCcsXG4gICdjYXBzLXNtYWxsJyxcbiAgJ2NhcnQnLFxuICAnY2hhcnQtYmFyLTMyJyxcbiAgJ2NoYXJ0LXBpZS0zNScsXG4gICdjaGF0LXJvdW5kJyxcbiAgJ2NoZWNrLWJvbGQnLFxuICAnY2lyY2xlLTA4JyxcbiAgJ2Nsb3VkLWRvd25sb2FkLTk1JyxcbiAgJ2Nsb3VkLXVwbG9hZC05NicsXG4gICdjb21wYXNzLTA0JyxcbiAgJ2NvbnRyb2xsZXInLFxuICAnY3JlZGl0LWNhcmQnLFxuICAnY3VydmVkLW5leHQnLFxuICAnZGVsaXZlcnktZmFzdCcsXG4gICdkaWFtb25kJyxcbiAgJ2VtYWlsLTgzJyxcbiAgJ2ZhdC1hZGQnLFxuICAnZmF0LWRlbGV0ZScsXG4gICdmYXQtcmVtb3ZlJyxcbiAgJ2Zhdm91cml0ZS0yOCcsXG4gICdmb2xkZXItMTcnLFxuICAnZ2xhc3Nlcy0yJyxcbiAgJ2hhdC0zJyxcbiAgJ2hlYWRwaG9uZXMnLFxuICAnaHRtbDUnLFxuICAnaXN0YW5idWwnLFxuICAna2V5LTI1JyxcbiAgJ2xhcHRvcCcsXG4gICdsaWtlLTInLFxuICAnbG9jay1jaXJjbGUtb3BlbicsXG4gICdtYXAtYmlnJyxcbiAgJ21vYmlsZS1idXR0b24nLFxuICAnbW9uZXktY29pbnMnLFxuICAnbm90ZS0wMycsXG4gICdub3RpZmljYXRpb24tNzAnLFxuICAncGFsZXR0ZScsXG4gICdwYXBlci1kaXBsb21hJyxcbiAgJ3Bpbi0zJyxcbiAgJ3BsYW5ldCcsXG4gICdydWxlci1wZW5jaWwnLFxuICAnc2F0aXNmaWVkJyxcbiAgJ3NjaXNzb3JzJyxcbiAgJ3NlbmQnLFxuICAnc2V0dGluZ3MtZ2Vhci02NScsXG4gICdzZXR0aW5ncycsXG4gICdzaW5nbGUtMDInLFxuICAnc2luZ2xlLWNvcHktMDQnLFxuICAnc291bmQtd2F2ZScsXG4gICdzcGFjZXNoaXAnLFxuICAnc3F1YXJlLXBpbicsXG4gICdzdXBwb3J0LTE2JyxcbiAgJ3RhYmxldC1idXR0b24nLFxuICAndGFnJyxcbiAgJ3RpZS1ib3cnLFxuICAndGltZS1hbGFybScsXG4gICd0cm9waHknLFxuICAndHYtMicsXG4gICd1bWJyZWxsYS0xMycsXG4gICd1c2VyLXJ1bicsXG4gICd2ZWN0b3InLFxuICAnd2F0Y2gtdGltZScsXG4gICd3b3JsZCcsXG4gICd6b29tLXNwbGl0LWluJyxcbiAgJ2NvbGxlY3Rpb24nLFxuICAnaW1hZ2UnLFxuICAnc2hvcCcsXG4gICd1bmdyb3VwJyxcbiAgJ3dvcmxkLTInLFxuICAndWktMCcsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBudWNsZW9JY29uTmFtZXM7XG4iLCAiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvblByb3BzLCBSZW5kZXJBcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBnZXRCYWNrZ3JvdW5kQ29sb3IgPSAocHJvcHM6IEJ1dHRvblByb3BzKTogc3RyaW5nID0+IHtcbiAgY29uc3QgeyBjb2xvciwgaXNHcmFkaWVudCwgaXNPdXRsaW5lIH0gPSBwcm9wcztcbiAgY29uc3QgYnV0dG9uQ29sb3IgPSBjb2xvciB8fCAncHJpbWFyeSc7XG5cbiAgaWYgKGlzT3V0bGluZSkge1xuICAgIHJldHVybiBgYnRuLW91dGxpbmUtJHtidXR0b25Db2xvcn0gYDtcbiAgfVxuXG4gIHJldHVybiBgJHtpc0dyYWRpZW50ID8gJ2JnLWdyYWRpZW50JyA6ICdidG4nfS0ke2J1dHRvbkNvbG9yfSBgO1xufTtcblxuY29uc3QgZ2V0U2l6ZSA9IChwcm9wczogQnV0dG9uUHJvcHMpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB7IHNpemUgfSA9IHByb3BzO1xuICBjb25zdCBidXR0b25TaXplID0gc2l6ZSB8fCAnbWQnO1xuICBzd2l0Y2ggKGJ1dHRvblNpemUpIHtcbiAgICBjYXNlICdzbSc6IHJldHVybiAnYnRuLXNtICc7XG4gICAgY2FzZSAnbGcnOiByZXR1cm4gJ2J0bi1sZyAnO1xuICAgIGRlZmF1bHQ6IHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2V0UGFkZGluZyA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48QnV0dG9uUHJvcHM+KTogc3RyaW5nID0+IHtcbiAgaWYgKCFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gJ3B4LTMgJztcbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRDbGFzc05hbWUgPSAocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPEJ1dHRvblByb3BzPik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGdldEJhY2tncm91bmRDb2xvcihwcm9wcyk7XG4gIGNvbnN0IHNpemUgPSBnZXRTaXplKHByb3BzKTtcbiAgY29uc3QgcGFkZGluZyA9IGdldFBhZGRpbmcocHJvcHMpO1xuICBjb25zdCBpY29uID0gcHJvcHMuaWNvbiA/ICdidG4taWNvbiAnIDogJyc7XG4gIGNvbnN0IHJvdW5kID0gcHJvcHMuaXNSb3VuZCA/ICdidG4tcm91bmQgJyA6ICcnO1xuICBjb25zdCBlbmRNYXJnaW4gPSBwcm9wcy5jbGFzc05hbWU/LmluY2x1ZGVzKCdtZS0nKSA/ICcnIDogJ21yLTEgJztcbiAgY29uc3QgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gYCR7cHJvcHMuY2xhc3NOYW1lfSBgIDogJyc7XG4gIHJldHVybiBgYnRuICR7YmFja2dyb3VuZENvbG9yfSR7cGFkZGluZ30ke3NpemV9JHtyb3VuZH0ke2ljb259JHtjbGFzc05hbWV9JHtlbmRNYXJnaW59YDtcbn07XG5cbmNvbnN0IGdldENvbXBvbmVudFRvUmVuZGVyID0gKHJlbmRlckFzPzogUmVuZGVyQXMpOiBSZW5kZXJBcyA9PiB7XG4gIGlmICghcmVuZGVyQXMpIHtcbiAgICByZXR1cm4gJ2J1dHRvbic7XG4gIH1cbiAgcmV0dXJuIHJlbmRlckFzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0Q2xhc3NOYW1lLFxuICBnZXRDb21wb25lbnRUb1JlbmRlcixcbn07XG5cbiIsICJpbXBvcnQgeyBDaGlsZHJlbiwgRkMsIEhUTUxBdHRyaWJ1dGVzLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgTGlzdFByb3BzID0gSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+ICYge1xuICBkZWZhdWx0RXhwYW5kZWQ/OiBib29sZWFuO1xuICB0YXJnZXQ6IHN0cmluZztcbn1cblxuY29uc3QgTGlzdDogRkM8TGlzdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRlZmF1bHRFeHBhbmRlZCwgY2hpbGRyZW4sIHRhcmdldCwgY2xhc3NOYW1lLCAuLi5yZXN0IH0gPSBwcm9wcztcbiAgY29uc3QgZGVmYXVsdEV4cGFuZGVkUmVmID0gdXNlUmVmKGRlZmF1bHRFeHBhbmRlZCk7XG5cbiAgY29uc3Qga2lkcyA9IENoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PlxuICAgIDxsaSBjbGFzc05hbWU9e2BuYXYtaXRlbSBmbGV4LWdyb3ctMCBteS0xIG14LTFgfT5cbiAgICAgIHtjaGlsZH1cbiAgICA8L2xpPlxuICApO1xuXG4gIGNvbnN0IGNsYXNzVGFyZ2V0ID0gdGFyZ2V0LnN0YXJ0c1dpdGgoJy4nKSA/IGAke3RhcmdldC5zbGljZSgxKX0gYCA6ICcnO1xuICBjb25zdCBpZFRhcmdldCA9IHRhcmdldC5zdGFydHNXaXRoKCcjJykgPyBgJHt0YXJnZXQuc2xpY2UoMSl9IGAgOiAnJztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPXtpZFRhcmdldH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfSBgIDogJyd9JHtjbGFzc1RhcmdldH0ke2RlZmF1bHRFeHBhbmRlZFJlZi5jdXJyZW50ID8gJ2NvbGxhcHNlLXNob3cnIDogJ2NvbGxhcHNlJ30gbmF2YmFyLWNvbGxhcHNlIGZsZXgtZ3Jvdy0wIGNvbGxhcHNpYmxlLW5hdmB9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibXMtYXV0byBtZS1hdXRvIG1lLW1kLTAgbmF2YmFyLW5hdiBuYXZiYXItbmF2LWhvdmVycyBtcy1tZC0yIGZsZXgtcm93XCI+XG4gICAgICAgIHtraWRzfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCAiaW1wb3J0IHsgdXNlUmVmLCBWRkMgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgVG9nZ2xlUHJvcHMgPSB7XG4gIGRlZmF1bHRFeHBhbmRlZD86IGJvb2xlYW47XG4gIHRhcmdldDogc3RyaW5nO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBUb2dnbGU6IFZGQzxUb2dnbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNsaWNrLCB0YXJnZXQsIGRlZmF1bHRFeHBhbmRlZCB9ID0gcHJvcHM7XG4gIGNvbnN0IGRlZmF1bHRFeHBhbmRlZFJlZiA9IHVzZVJlZihkZWZhdWx0RXhwYW5kZWQpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNsYXNzTmFtZT17YG5hdmJhci10b2dnbGVyIHNoYWRvdy1ub25lIG1zLWF1dG9gfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgIGRhdGEtYnMtdGFyZ2V0PXt0YXJnZXR9XG4gICAgICBhcmlhLWNvbnRyb2xzPVwibmF2aWdhdGlvblwiXG4gICAgICBhcmlhLWV4cGFuZGVkPXtkZWZhdWx0RXhwYW5kZWRSZWYuY3VycmVudCA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb24gbXQtMlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1iYXIgYmFyMVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItYmFyIGJhcjJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWJhciBiYXIzXCI+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIiwgImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwifi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBIZXJvIGZyb20gXCJ+L2NvbXBvbmVudHMvaGVyb1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVybyAvPlxuICAgICAgPENvbnRhY3QgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsICJpbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL2luZm8nO1xuXG5jb25zdCBDb250YWN0OiBWRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNlwiIGlkPVwiY29udGFjdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3ZlcmZsb3ctaGlkZGVuIG1iLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwLTNcIiBpZD1cImNvbnRhY3QtZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgcHgtNCBweS1zbS01IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNheSBIaSE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+SSBhbSBhbHdheXMgbG9va2luZyBmb3IgbmV3IGV4Y2l0aW5nIHByb2plY3RzLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHBlLTIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk15IG5hbWUgaXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHBlLTIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPllvdXIgbWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibWVzc2FnZVwiIHJvd3M9ezZ9IHBsYWNlaG9sZGVyPVwiSSB3YW50IHRvIHNheSB0aGF0Li4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtZW5kIG1zLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcm91bmQgYmctZ3JhZGllbnQtaW5mbyBtYi0wXCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEluZm8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiIsICJpbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZm86IFZGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IHBvc2l0aW9uLXJlbGF0aXZlIGJnLWNvdmVyIHB4LTBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXFwnLi4vaW1nL2N1cnZlZC1pbWFnZXMvY3VydmVkNS5qcGdcXCcpJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgei1pbmRleC0yIHctMTAwIGgtMTAwIHRvcC0wIHN0YXJ0LTAgZC1sZy1ibG9jayBkLW5vbmVcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvd2F2ZS0yLnN2Z1wiIGNsYXNzTmFtZT1cImgtMTAwIG1zLW4yXCIgYWx0PVwidmVydGljYWwtd2F2ZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei1pbmRleC0yIHRleHQtY2VudGVyIGQtZmxleCBoLTEwMCB3LTEwMCBkLWZsZXggbS1hdXRvIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNrIGJnLWdyYWRpZW50LWluZm8gb3BhY2l0eS05XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHBzLXNtLTggcG9zaXRpb24tcmVsYXRpdmUgdGV4dC1zdGFydCBteS1hdXRvIHotaW5kZXgtMlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Q29udGFjdCBJbmZvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXQtNiBwLTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lIHRleHQtc21cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtM1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG9wYWNpdHktOFwiPigzMTApIDQ2OSAxODAyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggcC0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZSB0ZXh0LXNtXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLTNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBvcGFjaXR5LThcIj5jYW1lcm9uYXppekBtZS5jb208L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm87XG4iLCAiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgV2F2ZSBmcm9tICcuL3dhdmUnO1xuXG5jb25zdCBIZXJvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXIgbWluLXZoLTEwMFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChcXCcuL2ltZy9jdXJ2ZWQtaW1hZ2VzL2N1cnZlZC5qcGdcXCcpJyB9fT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8V2F2ZSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCAiaW1wb3J0IHsgVkZDIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIZWFkZXI6IFZGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyB0ZXh0LWNlbnRlciBteC1hdXRvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHQtMyBtdC1uNVwiPkhpLCBJJ20gQ2FtZXJvbjwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LXdoaXRlIG10LTNcIj5JIGFtIGEgd2ViIGVuZ2luZWVyIGxpdmluZyBpbiBDYWxpZm9ybmlhLiBJIGxvdmUgd2hhdCBJIGRvLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsICJpbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdhdmU6IFZGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHctMTAwIHotaW5kZXgtMSBib3R0b20tMFwiPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3YXZlc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDI0IDE1MCA0MFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgc2hhcGVSZW5kZXJpbmc9XCJhdXRvXCI+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxwYXRoIGlkPVwiZ2VudGxlLXdhdmVcIiBkPVwiTS0xNjAgNDRjMzAgMCA1OC0xOCA4OC0xOHMgNTggMTggODggMTggNTgtMTggODgtMTggNTggMTggODggMTggdjQ0aC0zNTJ6XCIgLz5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJtb3Zpbmctd2F2ZXNcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNnZW50bGUtd2F2ZVwiIHg9XCI0OFwiIHk9XCItMVwiIGZpbGw9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNDBcIiAvPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI2dlbnRsZS13YXZlXCIgeD1cIjQ4XCIgeT1cIjNcIiBmaWxsPVwicmdiYSgyNTUsMjU1LDI1NSwwLjM1KVwiIC8+XG4gICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjZ2VudGxlLXdhdmVcIiB4PVwiNDhcIiB5PVwiNVwiIGZpbGw9XCJyZ2JhKDI1NSwyNTUsMjU1LDAuMjUpXCIgLz5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNnZW50bGUtd2F2ZVwiIHg9XCI0OFwiIHk9XCI4XCIgZmlsbD1cInJnYmEoMjU1LDI1NSwyNTUsMC4yMClcIiAvPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI2dlbnRsZS13YXZlXCIgeD1cIjQ4XCIgeT1cIjEzXCIgZmlsbD1cInJnYmEoMjU1LDI1NSwyNTUsMC4xNSlcIiAvPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI2dlbnRsZS13YXZlXCIgeD1cIjQ4XCIgeT1cIjE2XCIgZmlsbD1cInJnYmEoMjU1LDI1NSwyNTUsMC45NVwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F2ZTtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEJsb2dIaWdobGlnaHQgZnJvbSAnfi9jb21wb25lbnRzL2Jsb2cvaGlnaGxpZ2h0JztcbmltcG9ydCBCbG9nU3VtbWFyeSBmcm9tICd+L2NvbXBvbmVudHMvYmxvZy9zdW1tYXJ5JztcbmltcG9ydCB1c2VCbG9nUG9zdHMgZnJvbSAnfi9ob29rcy91c2VCbG9nUG9zdHMnO1xuXG5jb25zdCBkZWZhdWx0UG9zdHM6IEJsb2cuUG9zdFN1bW1hcnlbXSA9IFtcbiAge1xuICAgIHRpdGxlOiAnUmVtaXggSlMnLFxuICAgIHN1bW1hcnk6ICdSZW1peCBKUyBpcyBhIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzIHRoYXQgaGFzIHNvbWUgcmVhbCBwcm9taXNlLicsXG4gICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL3JlbWl4LnJ1bi9pbWcvb2cuMS5qcGcnLFxuICAgIHNsdWc6ICdyZW1peC1qcycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0J1aWxkaW5nIFRvb2xzJyxcbiAgICBzdW1tYXJ5OiAnV2hlbiBidWlsZGluZyB0b29scywgZm9yIHlvdXJzZWxmIG9yIHlvdXIgdGVhbSwga2V5IHByaW5jaXBsZXMgc2hvdWxkIGJlIGZvbGxvd2VkLicsXG4gICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL2hpcHMuaGVhcnN0YXBwcy5jb20vaG1nLXByb2QuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvY2xvc2UtdXAtb2YtdG9vbHMtaGFuZ2luZy1vbi13YWxsLXJveWFsdHktZnJlZS1pbWFnZS03NjAyNTE5NjctMTU2MzM5MTgxMi5qcGc/Y3JvcD0xLjAweHc6MC41MDJ4aDswLDAuMDU2MXhoJnJlc2l6ZT0xMjAwOionLFxuICAgIHNsdWc6ICdidWlsZGluZy10b29scycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ZsZXhpYmxlIHdvcmsgaG91cnMnLFxuICAgIGlzSGlnaGxpZ2h0ZWQ6IHRydWUsXG4gICAgc3VtbWFyeTogJ1JhdGhlciB0aGFuIHdvcnJ5aW5nIGFib3V0IHN3aXRjaGluZyBvZmZpY2VzIGV2ZXJ5IGNvdXBsZSB5ZWFycywgeW91IHN0YXkgaW4gdGhlIHNhbWUgcGxhY2UuJyxcbiAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL3B1YmxpYy1hc3NldHMvbWFzdGVyL3NvZnQtdWktZGVzaWduLXN5c3RlbS9hc3NldHMvaW1nL3NlYXNpZGUuanBnJyxcbiAgICBzbHVnOiAnZmxleGlibGUtd29yay1ob3VycycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ09NRzogR2l0IEJpc2VjdCcsXG4gICAgc3VtbWFyeTogJ1RoaXMganVzdCBzYXZlZCBteSBsaWZlLiBHaXQgYmlzZWN0IGNhbiBlYXNpbHkgZmluZCB0aGUgY29tbWl0IHRoYXQgaW50cm9kdWNlZCBhIGJ1Zy4nLFxuICAgIGltYWdlU291cmNlOiAnaHR0cHM6Ly9hbGV4ZXktYW51ZnJpZXYuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9wb3N0cy9naXQtZGVidWcvZ2l0LWRlYnVnLnBuZycsXG4gICAgc2x1ZzogJ2dpdC1iaXNlY3QnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSb3ZlciByYWlzZWQgJDY1IG1pbGxpb24nLFxuICAgIHN1bW1hcnk6ICdSb3ZlciByYWlzZWQgJDY1IG1pbGxpb24gaW4gYSByb3VuZCBvZiBmdW5kaW5nIGZyb20gdGhlIE5hdGlvbmFsIFNjaWVuY2UgRm91bmRhdGlvbiwgdGhlIE5hdGlvbmFsIEFlcm9uYXV0aWNzIGFuZCBTcGFjZSBBZG1pbmlzdHJhdGlvbiwgYW5kIHRoZSBOYXRpb25hbCBTY2llbmNlIEZvdW5kYXRpb24uJyxcbiAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4NzkxODQxMjE3LThmMTYyZjFlMTEzMT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjAnLFxuICAgIHNsdWc6ICdyb3Zlci1yYWlzZWQtNjUtbWlsbGlvbicsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ZsZXhpYmxlIHdvcmsgaG91cnMnLFxuICAgIGlzSGlnaGxpZ2h0ZWQ6IHRydWUsXG4gICAgaW1hZ2VTb3VyY2U6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9wdWJsaWMtYXNzZXRzL21hc3Rlci9zb2Z0LXVpLWRlc2lnbi1zeXN0ZW0vYXNzZXRzL2ltZy9zZWFzaWRlLmpwZycsXG4gICAgc3VtbWFyeTogJ1JhdGhlciB0aGFuIHdvcnJ5aW5nIGFib3V0IHN3aXRjaGluZyBvZmZpY2VzIGV2ZXJ5IGNvdXBsZSB5ZWFycywgeW91IHN0YXkgaW4gdGhlIHNhbWUgcGxhY2UuJyxcbiAgICBzbHVnOiAnZmxleGlibGUtd29yay1ob3VycycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ01hdGVMYWJzIG1hY2hpbmUgbGVhcm5pbmcnLFxuICAgIHN1bW1hcnk6ICdJZiB5b3VcdTIwMTl2ZSBldmVyIHdhbnRlZCB0byB0cmFpbiBhIG1hY2hpbmUgbGVhcm5pbmcgbW9kZWwgYW5kIGludGVncmF0ZSBpdCB3aXRoIElGVFRULCB5b3Ugbm93IGNhbiB3aXRoJyxcbiAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4NzkxODQxMjE3LThmMTYyZjFlMTEzMT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjAnLFxuICAgIHNsdWc6ICdtYXRlbGFicy1tYWNoaW5lLWxlYXJuaW5nJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVVMgdmVudHVyZSBpbnZlc3RtZW50IHRpY2tzJyxcbiAgICBzdW1tYXJ5OiAnVmVudHVyZSBpbnZlc3RtZW50IGluIFUuUy4gc3RhcnR1cHMgcm9zZSBzZXF1ZW50aWFsbHkgaW4gdGhlIHNlY29uZCBxdWFydGVyIG9mIDIwMTcsIGJvb3N0ZWQgYnkgbGFyZ2UsIGF0ZS1zdGFnZSBmaW5hbmNpbmdzJyxcbiAgICBpbWFnZVNvdXJjZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4NzkxODQxMjE3LThmMTYyZjFlMTEzMT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9NjAnLFxuICAgIHNsdWc6ICd1cy12ZW50dXJlLWludmVzdG1lbnQtdGlja3MnLFxuICB9LFxuXTtcblxuY29uc3QgQmxvZzogVkZDID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZUJsb2dQb3N0cygpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBzZXRQb3N0cyhkZWZhdWx0UG9zdHMpO1xuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS1tZC03IHB5LTYgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgIGlmIChwb3N0LmlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxCbG9nSGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAga2V5PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIHN1bW1hcnk9e3Bvc3Quc3VtbWFyeX1cbiAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZT17cG9zdC5pbWFnZVNvdXJjZX1cbiAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmxvZ1N1bW1hcnlcbiAgICAgICAgICAgICAga2V5PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgc3VtbWFyeT17cG9zdC5zdW1tYXJ5fVxuICAgICAgICAgICAgICBpbWFnZVNvdXJjZT17cG9zdC5pbWFnZVNvdXJjZX1cbiAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgdGl0bGU6ICdCbG9nJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIiwgImltcG9ydCB7IFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCB0eXBlIEJsb2dTdW1tYXJ5UHJvcHMgPSB7XG4gIGltYWdlU291cmNlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCBCbG9nU3VtbWFyeTogVkZDPEJsb2dTdW1tYXJ5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VTb3VyY2UsIHRpdGxlLCBzdW1tYXJ5IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTEyIGNvbC0xMiBtdC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ibG9nIGNhcmQtYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGwtYmFja2dyb3VuZFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtpbWFnZVNvdXJjZX0nKWAgfX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbGVmdCB0ZXh0LXN0YXJ0IG15LWF1dG8gcHktNFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LXdoaXRlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb24gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaWNvbi1tb3ZlLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgUmVhZCBNb3JlIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy1yaWdodCB0ZXh0LXNtXCI+PC9pPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nU3VtbWFyeTtcbiIsICJpbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG50eXBlIEJsb2dTdW1tYXJ5UHJvcHMgPSB7XG4gIGltYWdlU291cmNlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1bW1hcnk6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCBCbG9nU3VtbWFyeTogVkZDPEJsb2dTdW1tYXJ5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VTb3VyY2UsIHRpdGxlLCBzdW1tYXJ5IH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgbXQtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtcGxhaW4gY2FyZC1ibG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZSBib3JkZXItcmFkaXVzLWxnIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBib3JkZXItcmFkaXVzLWxnIG1vdmUtb24taG92ZXIgc2hhZG93XCJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNvdXJjZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcHgtMFwiPlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3N1bW1hcnl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtaW5mbyBpY29uLW1vdmUtcmlnaHRcIj5cbiAgICAgICAgICAgIFJlYWQgTW9yZSA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctcmlnaHQgdGV4dC1zbVwiPjwvaT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nU3VtbWFyeTtcbiIsICJpbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSAnam90YWknO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vYXRvbXMvYmxvZyc7XG5cbmNvbnN0IHVzZUJsb2dQb3N0czogSG9va3MuVXNlQmxvZ1Bvc3RzID0gKCkgPT4ge1xuICBjb25zdCBbYmxvZ1N0YXRlLCBzZXRCbG9nU3RhdGVdID0gdXNlQXRvbShibG9nKTtcblxuICBjb25zdCBzZXRQb3N0cyA9IChwb3N0czogQmxvZy5Qb3N0W10pID0+IHtcbiAgICBzZXRCbG9nU3RhdGUoKHByZXZpb3VzKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgcG9zdHMsXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFtcbiAgICBibG9nU3RhdGUucG9zdHMsXG4gICAgc2V0UG9zdHMsXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VCbG9nUG9zdHM7XG4iLCAiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ2pvdGFpJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBdG9tcy5CbG9nID0ge1xuICBwb3N0czogW10sXG59O1xuXG5jb25zdCBibG9nID0gYXRvbShpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgZGVmYXVsdCBibG9nO1xuIiwgImltcG9ydCB7IFZGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdXNlQmxvZ1Bvc3QgZnJvbSAnfi9ob29rcy91c2VCbG9nUG9zdCc7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIGRhdGEucGFyYW1zLnNsdWc7XG59XG5cbmNvbnN0IFNsdWc6IFZGQyA9ICgpID0+IHtcbiAgY29uc3Qgc2x1ZyA9IHVzZUxvYWRlckRhdGE8c3RyaW5nPigpXG4gIGNvbnN0IFtwb3N0XSA9IHVzZUJsb2dQb3N0KHNsdWcpXG5cbiAgaWYgKCFwb3N0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7IHRpdGxlLCBzdWJ0aXRsZSwgY29udGVudCwgaW1hZ2VTb3VyY2UgfSA9IHBvc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS05XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYWRpZW50IHRleHQtcHJpbWFyeSBtYi0wIG10LTJcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIHtzdWJ0aXRsZSAmJlxuICAgICAgICAgICAgICA8aDM+e3N1YnRpdGxlfTwvaDM+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8cD57Y29udGVudH08L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGljb24tbW92ZS1yaWdodFwiPk1vcmUgYWJvdXQgdXNcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0IHRleHQtc20gbXMtMVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIHRpdGxlOiAnUG9zdCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2x1ZztcbiIsICJpbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSAnam90YWknO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnVsbFBvc3QgfSBmcm9tICd+L2d1YXJkcyc7XG5pbXBvcnQgYmxvZyBmcm9tICcuLi9hdG9tcy9ibG9nJztcblxuY29uc3QgdXNlQmxvZ1Bvc3Q6IEhvb2tzLlVzZUJsb2dQb3N0ID0gKHNsdWcpID0+IHtcbiAgY29uc3QgW2Jsb2dTdGF0ZSwgc2V0QmxvZ1N0YXRlXSA9IHVzZUF0b20oYmxvZyk7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlPEJsb2cuUG9zdEZ1bGwgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcG9zdCA9IGJsb2dTdGF0ZS5wb3N0cy5maW5kKChwb3N0KSA9PiB0eXBlb2Ygc2x1ZyAhPT0gdW5kZWZpbmVkICYmIHBvc3Quc2x1ZyA9PT0gc2x1Zyk7XG4gICAgaWYgKCFwb3N0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc0Z1bGxQb3N0KHBvc3QpKSB7XG4gICAgICBzZXRQb3N0KHBvc3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXh0UG9zdDogQmxvZy5Qb3N0RnVsbCA9IHtcbiAgICAgIC4uLnBvc3QsXG4gICAgICBjb250ZW50OiAnTXkgQ29udGVudCcsXG4gICAgfTtcbiAgICBzZXRQb3N0KG5leHRQb3N0KTtcbiAgfSwgW2Jsb2dTdGF0ZS5wb3N0cywgc2x1Z10pO1xuXG5cbiAgY29uc3Qgc2V0UG9zdHMgPSAocG9zdDogQmxvZy5Qb3N0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzbHVnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRCbG9nU3RhdGUoKHByZXZpb3VzKSA9PiB7XG4gICAgICBjb25zdCBwb3N0cyA9IHByZXZpb3VzLnBvc3RzLm1hcCgocCkgPT4ge1xuICAgICAgICBpZiAocC5zbHVnID09PSBwb3N0LnNsdWcpIHtcbiAgICAgICAgICByZXR1cm4gcG9zdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICBwb3N0cyxcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gW1xuICAgIHBvc3QsXG4gICAgc2V0UG9zdHMsXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VCbG9nUG9zdDtcbiIsICJjb25zdCBpc0Z1bGxQb3N0ID0gKHBvc3Q/OiBCbG9nLlBvc3QpOiBwb3N0IGlzIEJsb2cuUG9zdEZ1bGwgPT5cbiAgISFwb3N0ICYmIChwb3N0IGFzIEJsb2cuUG9zdEZ1bGwpLmNvbnRlbnQgIT09IHVuZGVmaW5lZDtcblxuZXhwb3J0IHtcbiAgaXNGdWxsUG9zdCxcbn07XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMs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Q1IsU0FBUztBQUFBO0FBQUE7OztBQ2xCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFPTzs7O0FDUlA7QUFBQSxvQkFBOEI7QUFDOUIsOEJBQTRCO0FBQzVCLG9CQUFxQjs7O0FDRnJCO0FBQUEsbUJBQWdEOzs7QUNBaEQ7OztBQ0FBOzs7QUNBQTtBQUFBLElBQU0sY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUdGLElBQU8sYUFBUTs7O0FDbDlCZjtBQUFBLElBQU0sa0JBQWtCO0FBQUEsRUFDdEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFD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
