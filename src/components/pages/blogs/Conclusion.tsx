type ConclusionProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Conclusion = ({ children, ...rest }: ConclusionProps) => {
  return (
    <div className="rounded-2xl bg-secondary px-5 py-6 md:p-8" {...rest}>
      <h3 className="mb-4 text-display-xs font-semibold text-tertiary-900 md:text-display-sm">
        Conclusion
      </h3>
      {children}
    </div>
  );
};

export default Conclusion;
