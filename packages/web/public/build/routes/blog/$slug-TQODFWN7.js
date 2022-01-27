import {
  blog_default,
  useAtom
} from "/build/_shared/chunk-A45GMQI6.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LMHHOOG6.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();

// app/hooks/useBlogPost.ts
init_react();
var import_react = __toModule(require_react());

// app/guards/index.ts
init_react();
var isFullPost = (post) => !!post && post.content !== void 0;

// app/hooks/useBlogPost.ts
var useBlogPost = (slug) => {
  const [blogState, setBlogState] = useAtom(blog_default);
  const [post, setPost] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const post2 = blogState.posts.find((post3) => typeof slug !== void 0 && post3.slug === slug);
    if (!post2) {
      return;
    }
    if (isFullPost(post2)) {
      setPost(post2);
      return;
    }
    const nextPost = {
      ...post2,
      content: "My Content"
    };
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
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-3 info-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon icon-shape rounded-circle bg-gradient-primary shadow text-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-ship opacity-10"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "description ps-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-0"
  }, "It becomes harder for us to give others a hand. ", /* @__PURE__ */ React.createElement("br", null), " We get our heart broken by people we love."))), /* @__PURE__ */ React.createElement("div", {
    className: "p-3 info-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon icon-shape rounded-circle bg-gradient-primary shadow text-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-handshake opacity-10"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "description ps-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-0"
  }, "As we live, our hearts turn colder. ", /* @__PURE__ */ React.createElement("br", null), "Cause pain is what we go through as we become older."))), /* @__PURE__ */ React.createElement("div", {
    className: "p-3 info-horizontal"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon icon-shape rounded-circle bg-gradient-primary shadow text-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-hourglass opacity-10"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "description ps-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-0"
  }, "When we lose family over time. ", /* @__PURE__ */ React.createElement("br", null), " What else could rust the heart more over time? Blackgold.")))))));
};
var meta = () => ({
  title: "Post"
});
var slug_default = Slug;
export {
  slug_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/$slug-TQODFWN7.js.map
