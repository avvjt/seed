import { cn } from '../lib/utils'


export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/images/seed.png"
        alt="Company Logo"
        className="h-8 w-auto"
      />
      <span className="font-bold text-lg">LeadSeeder</span>
    </div>
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <img
      src="/images/seed.png"
      alt="Icon"
      className={cn('size-5', className)}
    />
  )
}

