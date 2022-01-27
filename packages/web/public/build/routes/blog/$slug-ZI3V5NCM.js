import {
  blog_default,
  useAtom
} from "/build/_shared/chunk-A45GMQI6.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LMHHOOG6.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();

// app/hooks/useBlogPost.ts
init_react();
var useBlogPost = (slug) => {
  const [blogState, setBlogState] = useAtom(blog_default);
  const post = blogState.posts.find((post2) => typeof slug !== void 0 && post2.slug === slug);
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
      return {
        ...previous,
        posts
      };
    });
  };
  return [
    post,
    setPosts
  ];
};
var useBlogPost_default = useBlogPost;

// app/routes/blog/$slug.tsx
var Slug = () => {
  const slug = useLoaderData();
  const [post] = useBlogPost_default(slug);
  if (!post) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", {
    class: "position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "container border-bottom"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "row justify-space-between py-2"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "col-lg-3 me-auto"
  }, /* @__PURE__ */ React.createElement("p", {
    class: "lead text-dark pt-1 mb-0"
  }, "Features 1")), /* @__PURE__ */ React.createElement("div", {
    class: "col-lg-3"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "nav-wrapper position-relative end-0"
  }, /* @__PURE__ */ React.createElement("ul", {
    class: "nav nav-pills nav-fill flex-row p-1",
    role: "tablist"
  }, /* @__PURE__ */ React.createElement("li", {
    class: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    class: "nav-link mb-0 px-0 py-1 active",
    "data-bs-toggle": "tab",
    href: "#preview-features-1",
    role: "tab",
    "aria-selected": "true"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fas fa-desktop text-sm me-2"
  }), " Preview")), /* @__PURE__ */ React.createElement("li", {
    class: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    class: "nav-link mb-0 px-0 py-1",
    "data-bs-toggle": "tab",
    href: "#code-features-1",
    role: "tab",
    "aria-selected": "false"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fas fa-code text-sm me-2"
  }), " Code"))))))), /* @__PURE__ */ React.createElement("div", {
    class: "tab-content tab-space"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "tab-pane active",
    id: "preview-features-1"
  }, /* @__PURE__ */ React.createElement("iframe", {
    class: "w-100 height-600",
    srcdoc: '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />\n  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"><\/script>\n  <!-- Nucleo Icons -->\n  <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />\n  <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" /><link href="https://unpkg.com/soft-ui-design-system@1.0.4/assets/css/soft-design-system.min.css" rel="stylesheet" /><!-- -------- START Features w/ icons and text on left & gradient title and text on right -------- -->\n<section class="py-9">\n<div class="container">\n<div class="row">\n<div class="col-lg-6">\n  <h3 class="text-gradient text-primary mb-0 mt-2">Read More About Us</h3>\n  <h3>The most important</h3>\n  <p>Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>\n  <a href="javascript:;" class="text-primary icon-move-right">More about us\n    <i class="fas fa-arrow-right text-sm ms-1"></i>\n  </a>\n</div>\n<div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">\n  <div class="p-3 info-horizontal">\n    <div class="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">\n      <i class="fas fa-ship opacity-10"></i>\n    </div>\n    <div class="description ps-3">\n      <p class="mb-0">It becomes harder for us to give others a hand. <br> We get our heart broken by people we love.</p>\n    </div>\n  </div>\n\n  <div class="p-3 info-horizontal">\n    <div class="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">\n      <i class="fas fa-handshake opacity-10"></i>\n    </div>\n    <div class="description ps-3">\n      <p class="mb-0">As we live, our hearts turn colder. <br>Cause pain is what we go through as we become older.</p>\n    </div>\n  </div>\n  <div class="p-3 info-horizontal">\n    <div class="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">\n      <i class="fas fa-hourglass opacity-10"></i>\n    </div>\n    <div class="description ps-3">\n      <p class="mb-0">When we lose family over time. <br> What else could rust the heart more over time? Blackgold.</p>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n</section>\n<!-- -------- END Features w/ icons and text on left & gradient title and text on right -------- -->\n\n  '
  })), /* @__PURE__ */ React.createElement("div", {
    class: "tab-pane",
    id: "code-features-1"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "position-relative p-4 pb-2"
  }, /* @__PURE__ */ React.createElement("a", {
    class: "btn btn-sm bg-gradient-dark position-absolute end-4 mt-3",
    onclick: "copyCode(this);",
    href: "javascript:;"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fas fa-copy text-sm me-1"
  }), " Copy"), /* @__PURE__ */ React.createElement("figure", {
    class: "highlight"
  }, /* @__PURE__ */ React.createElement("pre", null, /* @__PURE__ */ React.createElement("code", {
    class: "language-html",
    "data-lang": "html"
  }, /* @__PURE__ */ React.createElement("span", {
    class: "c"
  }, "<!-- -------- START Features w/ icons and text on left & gradient title and text on right -------- -->"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<section"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"py-9"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"container"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"row"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"col-lg-6"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<h3"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"text-gradient text-primary mb-0 mt-2"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), "Read More About Us", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</h3>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<h3>"), "The most important", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</h3>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<p>"), "Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</p>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<a"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "href="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"javascript:;"'), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"text-primary icon-move-right"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), "More about us", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<i"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"fas fa-arrow-right text-sm ms-1"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "></i>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</a>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"p-3 info-horizontal"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"icon icon-shape rounded-circle bg-gradient-primary shadow text-center"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<i"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"fas fa-ship opacity-10"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "></i>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"description ps-3"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<p"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"mb-0"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), "It becomes harder for us to give others a hand. ", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<br>"), " We get our heart broken by people we love.", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</p>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"p-3 info-horizontal"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"icon icon-shape rounded-circle bg-gradient-primary shadow text-center"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<i"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"fas fa-handshake opacity-10"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "></i>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"description ps-3"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<p"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"mb-0"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), "As we live, our hearts turn colder. ", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<br>"), "Cause pain is what we go through as we become older.", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</p>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"p-3 info-horizontal"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"icon icon-shape rounded-circle bg-gradient-primary shadow text-center"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<i"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"fas fa-hourglass opacity-10"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "></i>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<div"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"description ps-3"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<p"), " ", /* @__PURE__ */ React.createElement("span", {
    class: "na"
  }, "class="), /* @__PURE__ */ React.createElement("span", {
    class: "s"
  }, '"mb-0"'), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, ">"), "When we lose family over time. ", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "<br>"), " What else could rust the heart more over time? Blackgold.", /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</p>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</div>"), /* @__PURE__ */ React.createElement("span", {
    class: "nt"
  }, "</section>"), /* @__PURE__ */ React.createElement("span", {
    class: "c"
  }, "<!-- -------- END Features w/ icons and text on left & gradient title and text on right -------- -->"))))))));
};
var meta = () => ({
  title: "Post"
});
var slug_default = Slug;
export {
  slug_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/$slug-ZI3V5NCM.js.map
