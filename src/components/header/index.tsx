import { cn } from '../../lib/utils'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'h-full w-screen bg-header-cover bg-cover bg-center bg-no-repeat',
        className,
      )}
    />
  )
}
