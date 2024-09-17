import { Text } from '@/components/framework/Typography';

type ErrorComponentProps = {
  message: string;
  children?: React.ReactNode;
};

const ErrorComponent = ({ message, children }: ErrorComponentProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Text as="p" className="text-red-500">
        {message}
      </Text>
      {children}
    </div>
  );
};

export default ErrorComponent;
