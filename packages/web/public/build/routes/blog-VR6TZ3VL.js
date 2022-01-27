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
    imageSource: "data:image/png;base64,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"
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
//# sourceMappingURL=/build/routes/blog-VR6TZ3VL.js.map
