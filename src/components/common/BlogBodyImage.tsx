/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { Image as ImageType } from '@/types/blog.types';

type BlogBodyImageProps = {
  image: ImageType;
} & React.HTMLAttributes<HTMLDivElement>;

const BlogBodyImage = ({ image, ...rest }: BlogBodyImageProps) => {
  return (
    <div className={cn('mb-12', rest.className)} {...rest}>
      <Image
        src={image.url}
        alt={image.caption}
        width={image.width}
        height={image.height}
        className="mx-h-[720px] mb-4 h-full w-full rounded-xl object-cover"
      />
      <p className="text-sm font-normal text-tertiary-600">{image?.caption}</p>
    </div>
  );
};

export default BlogBodyImage;
