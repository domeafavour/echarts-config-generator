import classNames from 'classnames';

export type TextAreaProps = React.ComponentProps<'textarea'>;

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      placeholder="Input graph text here..."
      className={classNames(
        'w-full border border-slate-400 focus:border-slate-500 outline-none rounded p-2 h-full flex-1',
        className
      )}
      {...props}
    />
  );
}
