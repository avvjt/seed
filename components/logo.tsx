import { cn } from '../lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Static seed image - always appears first */}
      <div className="relative h-8 w-8">
        <Image
          src="/images/seedd.png"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      
      {/* Text logo that adapts to dark mode */}
      <div className="relative w-[120px] h-10">
        <Image
          src="/images/leadsvg.svg"
          alt="Leadseeder"
          fill
          className="object-contain dark:brightness-0 dark:invert"
        />
      </div>
    </div>
  )
}
export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative size-5", className)}>
      <Image
        src="/images/seed.png"
        alt="Icon"
        fill
        className="object-contain"
      />
    </div>
  )
}