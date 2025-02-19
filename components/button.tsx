import cn from 'classnames';

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        'bg-black text-white rounded-lg py-2 px-4 capitalize',
        className
      )}
    >
      {children}
    </button>
  );
};
