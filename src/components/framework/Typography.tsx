import { cn } from '@/lib/utils';

type TextProps = {
  children: React.ReactNode;
  as: 'p' | 'pre' | 'quote';
  href?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Text = ({
  as: Element,
  children,
  className,
  ...rest
}: TextProps) => {
  switch (Element) {
    case 'p':
      return (
        <p
          className={cn(
            'mb-8 text-md font-normal text-tertiary-600 md:text-lg',
            className,
          )}
          {...rest}
        >
          {children}
        </p>
      );
    case 'quote':
      return (
        <blockquote
          className={cn(
            'mb-10 text-xl font-medium text-tertiary-900',
            className,
          )}
          {...rest}
        >
          {children}
        </blockquote>
      );
    default:
      return '';
  }
};

type HeadingProps = {
  children: React.ReactNode;
  as: 'h2' | 'h3';
} & React.HTMLAttributes<HTMLElement>;

export const Heading = ({
  as: Element,
  children,
  className,
  ...rest
}: HeadingProps) => {
  switch (Element) {
    case 'h2':
      return (
        <Element
          className={cn(
            `text-display-xs font-semibold text-tertiary-900 md:text-display-sm`,
            className,
          )}
          {...rest}
        >
          {children}
        </Element>
      );
    case 'h3':
      return (
        <Element
          className={cn(
            `mb-3 text-xl font-semibold text-tertiary-900 md:text-display-xs`,
            className,
          )}
          {...rest}
        >
          {children}
        </Element>
      );
    default:
      return '';
  }
};
