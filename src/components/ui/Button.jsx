const variants = {
  primary: 'bg-accent text-[#1b1208] hover:brightness-110',
  outline: 'border border-brand text-brand hover:bg-brand hover:text-on-brand',
}

// A link that looks like a button. "variant" picks the style.
export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
