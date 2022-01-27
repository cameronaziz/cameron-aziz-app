import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { isFullPost } from '~/guards';
import blog from '../atoms/blog';

const useBlogPost: Hooks.UseBlogPost = (slug) => {
  const [blogState, setBlogState] = useAtom(blog);
  const [post, setPost] = useState<Blog.PostFull | null>(null)

  useEffect(() => {
    const post = blogState.posts.find((post) => typeof slug !== undefined && post.slug === slug);
    if (!post) {
      return;
    }
    if (isFullPost(post)) {
      setPost(post);
      return;
    }
    const nextPost: Blog.PostFull = {
      ...post,
      content: 'My Content',
    };
    setPost(nextPost);
  }, [blogState.posts, slug]);


  const setPosts = (post: Blog.Post) => {
    if (typeof slug === undefined) {
      return;
    }

    setBlogState((previous) => {
      const posts = previous.posts.map((p) => {
        if (p.slug === post.slug) {
          return post;
        }
        return p
      });

      return {
        ...previous,
        posts,
      }
    });
  };

  return [
    post,
    setPosts,
  ];
};

export default useBlogPost;
