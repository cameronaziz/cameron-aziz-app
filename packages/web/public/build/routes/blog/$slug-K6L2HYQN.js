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
    className: "position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container border-bottom"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row py-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 text-start"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "lead text-dark pt-1 mb-0"
  }, "Feature 9")), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-4 text-end my-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "../../presentation.html#pricing-soft-ui",
    className: "text-primary icon-move-right"
  }, "Get the Code", /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-arrow-right text-sm ms-1",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-100",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/sections/page-sections/features/features-9.jpg",
    alt: "features-9"
  })));
};
var meta = () => ({
  title: "Post"
});
var slug_default = Slug;
export {
  slug_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/$slug-K6L2HYQN.js.map
