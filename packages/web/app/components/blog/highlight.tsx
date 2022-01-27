import { VFC } from 'react';
import { Link } from 'remix';

export type BlogSummaryProps = {
  imageSource: string;
  title: string;
  summary: string;
  slug: string;
}

const BlogSummary: VFC<BlogSummaryProps> = (props) => {
  const { imageSource, title, summary } = props;

  return (
    <div className="col-lg-3 col-md-12 col-12 mt-4">
      <div className="card card-blog card-background">
        <div className="full-background" style={{ backgroundImage: `url('${imageSource}')` }} />
        <div className="card-body">
          <div className="content-left text-start my-auto py-4">
            <a href="javascript:;">
              <h2 className="card-title text-white">{title}</h2>
              <p className="card-description text-white">
                {summary}
              </p>
              <Link to="#" className="text-white icon-move-right">
                Read More <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSummary;
