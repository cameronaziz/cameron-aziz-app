import { useAtom } from 'jotai';
import blog from '../atoms/blog';

const useBlogPosts: Hooks.UseBlogPosts = () => {
  const [blogState, setBlogState] = useAtom(blog);

  const setPosts = (posts: Blog.Post[]) => {
    setBlogState((previous) => {
      return {
        ...previous,
        posts,
      }
    });
  };

  return [
    blogState.posts,
    setPosts,
  ];
};

export default useBlogPosts;
