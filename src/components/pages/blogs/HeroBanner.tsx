import Image from 'next/image';

import Avatar from '@/components/common/Avatar';
import type { Blog } from '@/types/blog.types';

type HeroBannerProps = {
  blog: Blog | undefined;
};

const HeroBanner = ({ blog }: HeroBannerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="order-2 px-4 py-16 md:order-1 md:flex md:h-screen md:items-center md:py-0 md:pl-20 md:pr-0">
        <div className="mx-0 md:mx-8 md:px-16">
          <p className="mb-3 text-sm font-semibold text-brand-secondary-700 md:text-md">
            20 Jan 2024 • 10 min read
          </p>
          <p className="mb-4 text-display-md font-semibold text-tertiary-900 md:text-display-lg">
            {blog?.title}
          </p>
          <p className="mb-6 text-lg font-light text-tertiary-600 md:mb-12 md:text-xl">
            {blog?.subtitle}
          </p>
          <div className="flex items-center gap-2">
            <Avatar srcImg={blog?.author.avatar.url!} />
            <div>
              <p className="text-md font-semibold text-tertiary-900">
                {blog?.author?.name}
              </p>
              <p className="text-md font-normal text-tertiary-600">
                {blog?.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src={blog?.featuredImage.url!}
          alt="hero-image"
          className="mx-h-[720px] h-full w-full object-cover"
          width="100"
          height="100"
          unoptimized
          priority
        ></Image>
      </div>
    </div>
  );
};

export default HeroBanner;
