import { VFC } from 'react';
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix';
import useBlogPost from '../../hooks/useBlogPost';

export const loader: LoaderFunction = (data) => {
  return data.params.slug;
}

const Slug: VFC = () => {
  const slug = useLoaderData<string>()
  const [post] = useBlogPost(slug)

  if (!post) {
    return null;
  }

  const { title, subtitle, content, imageSource } = post;

  return (
    <section className="py-9">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="text-gradient text-primary mb-0 mt-2">{title}</h3>
            {subtitle &&
              <h3>{subtitle}</h3>
            }
            <p>{content}</p>
            <a href="javascript:;" className="text-primary icon-move-right">More about us
              <i className="fas fa-arrow-right text-sm ms-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const meta: MetaFunction = () => ({
  title: 'Post',
});

export default Slug;
