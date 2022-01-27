const isFullPost = (post?: Blog.Post): post is Blog.PostFull =>
  !!post && (post as Blog.PostFull).content !== undefined;

export {
  isFullPost,
};

