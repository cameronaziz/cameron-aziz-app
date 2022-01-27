export type PostFull = {
  imageSource: string;
  slug: string;
  subtitle?: string;
  content: string;
  title: string;
}

export type PostSummary = {
  imageSource: string;
  isHighlighted?: boolean;
  slug: string;
  summary: string;
  title: string;
}

export type Post = PostFull | PostSummary | (PostFull & PostSummary);

export as namespace Blog;
