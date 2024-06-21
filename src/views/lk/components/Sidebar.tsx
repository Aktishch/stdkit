import { twMerge } from 'tailwind-merge'
import { UserName } from '@ui/UserName'
import { UserPost } from '@ui/UserPost'
import { Avatar, AvatarProps } from '@views/lk/components/Avatar'

interface SidebarProps extends AvatarProps {
  userName: string
  userPost: string
}

export const Sidebar = ({
  className,
  webp,
  src,
  userName,
  userPost,
  children,
}: SidebarProps) => {
  const style: string = twMerge('w-full xs:max-w-[250px]', className)

  return (
    <div className={style}>
      <div className="md:sticky md:left-0 md:right-0 md:top-28">
        <div className="flex items-center mb-6">
          <Avatar className="mr-4" webp={webp} src={src} />
          <div className="flex flex-col overflow-hidden">
            <UserName>{userName}</UserName>
            <UserPost>{userPost}</UserPost>
          </div>
        </div>
        <nav className="flex flex-col">{children}</nav>
      </div>
    </div>
  )
}
