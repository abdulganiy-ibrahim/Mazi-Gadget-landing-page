type BrandNameProps = {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function BrandName({ variant = 'primary', className}: BrandNameProps) {
  const variantClasses = {
    primary: 'text-primary',
    secondary: 'text-foreground'
  }
  return (
    <div>
      <h1 className={`text-xl font-body font-semibold ${variantClasses[variant]} ${className}`}>Mazi Gadget</h1>
    </div>
  )
}