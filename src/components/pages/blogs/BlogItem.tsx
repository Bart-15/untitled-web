import { Blog } from '@/types/blog.types';

import BlogPostBody from './BlogPostBody';
import Conclusion from './Conclusion';
import HeroBanner from './HeroBanner';

type BlogItemProps = {
  blog: Blog;
};

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <>
      <HeroBanner blog={blog} />
      {/* Body */}
      <div className="px-4 md:px-8">
        <div className="mx-auto mb-8 max-w-[720px] py-0 md:mb-0 md:py-24">
          <BlogPostBody contentArray={blog.body} />
          <Conclusion>
            <p className="text-md font-normal text-tertiary-600 md:text-lg">
              {blog?.conclusion}
            </p>
          </Conclusion>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
