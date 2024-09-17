import BlogBodyImage from '@/components/common/BlogBodyImage';
import { Heading, Text } from '@/components/framework/Typography';
import type { ContentBlock } from '@/types/blog.types';

import IntroTitle from './IntroTitle';

type BlogPostBodyProps = {
  contentArray: ContentBlock[];
};

const BlogPostBody = ({ contentArray }: BlogPostBodyProps) => {
  const renderContent = () => {
    return contentArray.map((block, index) => {
      switch (block.type) {
        case 'p':
          return (
            <Text
              as="p"
              key={index}
              className="mb-8 text-md font-normal text-tertiary-600 md:text-lg"
            >
              {block.content}
            </Text>
          );
        case 'h2':
          return <IntroTitle key={index} text={block.content} />;
        case 'h3':
          return (
            <Heading
              as="h3"
              className="mb-3 text-xl font-semibold text-tertiary-900 md:text-display-xs"
              key={index}
            >
              {block.content}
            </Heading>
          );
        case 'quote':
          return (
            <Text
              as="quote"
              key={index}
              className="mb-10 text-xl font-medium text-tertiary-900"
            >
              <i>&quot;{block.content}&quot;</i>
              <footer className="md:mt-:8 mt-6 text-md text-tertiary-600">
                - {block.author}
              </footer>
            </Text>
          );
        case 'img':
          return <BlogBodyImage key={index} image={block} />;
        case 'divider':
          return <hr className="text-borderPrimary" key={index} />;
        default:
          return null;
      }
    });
  };

  return <>{renderContent()}</>;
};

export default BlogPostBody;
