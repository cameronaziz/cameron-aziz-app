export type UseBlogPosts = () => [Blog.PostSummary[], (posts: Blog.PostSummary[]) => void];

export type UseBlogPost = (slug?: string) => [Blog.PostFull | null, (post: Blog.PostFull) => void];

export as namespace Hooks
