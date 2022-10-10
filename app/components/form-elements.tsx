import { forwardRef } from 'react'
import { classNames } from '~/utils/class-names'

export function Label({
  className,
  htmlFor,
  ...labelProps
}: JSX.IntrinsicElements['label']) {
  return (
    <label
      {...labelProps}
      className={classNames(
        'block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2',
        className
      )}
      htmlFor={htmlFor}
    />
  )
}

type InputProps = (
  | ({ type: 'textarea' } & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']
) & {
  type?: 'textarea' | 'datetime-local' | 'date' | 'time' | 'number' | 'select'
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const className = classNames(
    'block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
    props.className
  )

  if (props.type === 'textarea') {
    return (
      <textarea
        {...(props as JSX.IntrinsicElements['textarea'])}
        className={className}
      />
    )
  } else if (props.type === 'select') {
    return (
      <select
        {...(props as JSX.IntrinsicElements['select'])}
        className={className}
      />
    )
  }

  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        {...(props as JSX.IntrinsicElements['input'])}
        className={className}
        ref={ref}
        type={props.type ?? 'text'}
      />
    </div>
  )
})

export function Instruction({
  children,
  id,
}: {
  children?: string | null
  id?: string
}) {
  if (!children) {
    return null
  }

  return (
    <p className="mt-2 text-sm text-gray-600" id={id}>
      {children}
    </p>
  )
}
