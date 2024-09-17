import { Heading } from '@/components/framework/Typography';

type IntroTitleProps = {
  text: string;
};

const IntroTitle = ({ text }: IntroTitleProps) => {
  return (
    <div className="pb-4 pt-[30px]">
      <Heading
        as="h2"
        className="text-display-xs font-semibold text-tertiary-900 md:text-display-sm"
      >
        {text}
      </Heading>
    </div>
  );
};

export default IntroTitle;
