import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/caziz/code/personal/cameron-aziz/app/routes/blog.tsx?browser
init_react();

// app/routes/blog.tsx
init_react();

// app/components/blog/highlight.tsx
init_react();
var BlogSummary = (props) => {
  const { imageSource, title, summary } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-3 col-md-12 col-12"
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
  }, summary), /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    className: "text-white icon-move-right"
  }, "Read More", /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-arrow-right text-sm"
  })))))));
};
var highlight_default = BlogSummary;

// app/components/blog/summary.tsx
init_react();
var BlogSummary2 = (props) => {
  const { imageSource, title, summary } = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "col-lg-3 col-sm-6"
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
  }, /* @__PURE__ */ React.createElement("h5", null, /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    className: "text-dark font-weight-bold"
  }, title)), /* @__PURE__ */ React.createElement("p", null, summary, "..."), /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    className: "text-info icon-move-right"
  }, "Read More", /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-arrow-right text-sm"
  })))));
};
var summary_default = BlogSummary2;

// app/routes/blog.tsx
var posts = [
  {
    title: "Remix JS",
    summary: "Remix JS is a JavaScript library for building user interfaces that has some real promise",
    imageSource: "https://remix.run/img/og.1.jpg"
  },
  {
    title: "Building Tools",
    summary: "When building tools, for yourself or your team, key principles should be followed",
    imageSource: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tools-hanging-on-wall-royalty-free-image-760251967-1563391812.jpg?crop=1.00xw:0.502xh;0,0.0561xh&resize=1200:*"
  },
  {
    title: "OMG: Git Bisect",
    summary: "This just saved my life. Git bisect can easily find the commit that introduced a bug",
    imageSource: "https://alexey-anufriev.com/wp-content/uploads/posts/git-debug/git-debug.png"
  },
  {
    title: "Flexible work hours",
    isHighlight: true,
    imageSource: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg",
    summary: "Rather than worrying about switching offices every couple years, you stay in the same place."
  },
  {
    title: "Rover raised $65 million",
    summary: "Rover raised $65 million in a round of funding from the National Science Foundation, the National Aeronautics and Space Administration, and the National Science Foundation.",
    imageSource: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Flexible work hours",
    isHighlight: true,
    imageSource: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg",
    summary: "Rather than worrying about switching offices every couple years, you stay in the same place."
  },
  {
    title: "MateLabs machine learning",
    summary: "If you\u2019ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with",
    imageSource: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "US venture investment ticks",
    summary: "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings",
    imageSource: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];
var Blog = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container py-sm-7 py-5 position-relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, posts.map((post) => {
    if (post.isHighlight) {
      return /* @__PURE__ */ React.createElement(highlight_default, {
        key: post.title,
        title: post.title,
        summary: post.summary,
        imageSource: post.imageSource
      });
    }
    return /* @__PURE__ */ React.createElement(summary_default, {
      key: post.title,
      title: post.title,
      summary: post.summary,
      imageSource: post.imageSource
    });
  })));
};
var blog_default = Blog;
export {
  blog_default as default
};
//# sourceMappingURL=/build/routes/blog-C6HZ2Q4W.js.map
