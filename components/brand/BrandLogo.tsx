type BrandLogoProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function BrandLogo({ variant = 'primary', className}: BrandLogoProps) {
  const variantClasses = {
    primary: 'bg-black text-primary',
    secondary: 'bg-background text-primary'
  }
  return (
    <div className={`h-12 w-12 flex items-center justify-center rounded-full shadow-primary${variantClasses[variant]} ${className}`}>
      <h1 className="text-primary text-2xl font-heading font-semibold">MG</h1>
    </div>
  )
}