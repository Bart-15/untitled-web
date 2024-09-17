import Image from 'next/image';

type AvatarProps = {
  srcImg: string;
};

const Avatar = ({ srcImg }: AvatarProps) => {
  return (
    <Image
      className="h-14 w-14 rounded-full"
      src={srcImg} // Use the prop value here
      height="56"
      width="56"
      alt="Rounded avatar"
    />
  );
};

export default Avatar;
