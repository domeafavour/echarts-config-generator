import classNames from 'classnames';

export type ButtonProps = React.ComponentProps<'button'>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'px-3 py-2 rounded bg-blue-400 hover:bg-blue-500 text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
