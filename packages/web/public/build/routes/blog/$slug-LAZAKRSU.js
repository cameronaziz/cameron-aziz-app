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
var Slug = (props) => {
  const slug = useLoaderData();
  const [post] = useBlogPost_default(slug);
  console.log(post);
  return /* @__PURE__ */ React.createElement("div", null, "post");
};
var meta = () => ({
  title: "Post"
});
var slug_default = Slug;
export {
  slug_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/$slug-LAZAKRSU.js.map
