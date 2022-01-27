import { useEffect, VFC } from 'react';
import { MetaFunction, Outlet } from 'remix';
import BlogHighlight from '../components/blog/highlight';
import BlogSummary from '../components/blog/summary';
import useBlogPosts from '../hooks/useBlogPosts';

const defaultPosts: Blog.PostSummary[] = [
  {
    title: 'Remix JS',
    summary: 'Remix JS is a JavaScript library for building user interfaces that has some real promise.',
    imageSource: 'https://remix.run/img/og.1.jpg',
    slug: 'remix-js',
  },
  {
    title: 'Building Tools',
    summary: 'When building tools, for yourself or your team, key principles should be followed.',
    imageSource: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tools-hanging-on-wall-royalty-free-image-760251967-1563391812.jpg?crop=1.00xw:0.502xh;0,0.0561xh&resize=1200:*',
    slug: 'building-tools',
  },
  {
    title: 'Flexible work hours',
    isHighlighted: true,
    summary: 'Rather than worrying about switching offices every couple years, you stay in the same place.',
    imageSource: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg',
    slug: 'flexible-work-hours',
  },
  {
    title: 'OMG: Git Bisect',
    summary: 'This just saved my life. Git bisect can easily find the commit that introduced a bug.',
    imageSource: 'https://alexey-anufriev.com/wp-content/uploads/posts/git-debug/git-debug.png',
    slug: 'git-bisect',
  },
  {
    title: 'Rover raised $65 million',
    summary: 'Rover raised $65 million in a round of funding from the National Science Foundation, the National Aeronautics and Space Administration, and the National Science Foundation.',
    imageSource: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    slug: 'rover-raised-65-million',
  },
  {
    title: 'Flexible work hours',
    isHighlighted: true,
    imageSource: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg',
    summary: 'Rather than worrying about switching offices every couple years, you stay in the same place.',
    slug: 'flexible-work-hours',
  },
  {
    title: 'MateLabs machine learning',
    summary: 'If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with',
    imageSource: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    slug: 'matelabs-machine-learning',
  },
  {
    title: 'US venture investment ticks',
    summary: 'Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings',
    imageSource: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    slug: 'us-venture-investment-ticks',
  },
];

const Blog: VFC = () => {
  const [posts, setPosts] = useBlogPosts();

  useEffect(
    () => {
      setPosts(defaultPosts);
    },
    [],
  );

  return (
    <div className="container py-md-7 py-6 position-relative">
      <Outlet />
      <div className="row mb-1">
        {posts.map((post) => {
          if (post.isHighlighted) {
            return (
              <BlogHighlight
                key={post.title}
                title={post.title}
                summary={post.summary}
                imageSource={post.imageSource}
                slug={post.slug}
              />
            )
          }
          return (
            <BlogSummary
              key={post.title}
              title={post.title}
              summary={post.summary}
              imageSource={post.imageSource}
              slug={post.slug}
            />
          )
        })}
      </div>
    </div>
  );
};

export const meta: MetaFunction = () => ({
  title: 'Blog',
});

export default Blog;
