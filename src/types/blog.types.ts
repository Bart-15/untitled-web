export type Avatar = {
  url: string;
};

export type Author = {
  name: string;
  role: string;
  avatar: Avatar;
};

export type FeaturedImage = {
  url: string;
};

export type Image = {
  type: 'img';
  url: string;
  width: number;
  height: number;
  caption: string;
};

export type Quote = {
  type: 'quote';
  content: string;
  author: string;
};

export type Paragraph = {
  type: 'p';
  content: string;
};

export type Header = {
  type: 'h2' | 'h3';
  content: string;
};

export type Divider = {
  type: 'divider';
};

export type ContentBlock = Paragraph | Image | Quote | Header | Divider;

export type Blog = {
  slug: string;
  title: string;
  subtitle: string;
  author: Author;
  featuredImage: FeaturedImage;
  body: ContentBlock[];
  conclusion: string;
};
