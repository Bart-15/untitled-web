type ProgressBarProps = {
  scrollProgress: number;
};

const ProgressBar = ({ scrollProgress }: ProgressBarProps) => {
  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 bg-blue-500 transition duration-75 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ProgressBar;
