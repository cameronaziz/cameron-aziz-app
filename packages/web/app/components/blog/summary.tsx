import { VFC } from 'react';
import { Link } from 'remix';

type BlogSummaryProps = {
  imageSource: string;
  title: string;
  summary: string;
  slug: string;
}

const BlogSummary: VFC<BlogSummaryProps> = (props) => {
  const { imageSource, title, summary } = props;

  return (
    <div className="col-lg-3 col-sm-6 mt-4">
      <div className="card card-plain card-blog">
        <div className="card-image border-radius-lg position-relative">
          <a href="javascript:;">
            <img
              className="w-100 border-radius-lg move-on-hover shadow"
              src={imageSource}
            />
          </a>
        </div>
        <div className="card-body px-0">
          <h5>
            <Link to="#" className="text-dark font-weight-bold">
              {title}
            </Link>
          </h5>
          <p>
            {summary}
          </p>
          <Link to="#" className="text-info icon-move-right">
            Read More <i className="fas fa-arrow-right text-sm"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSummary;
