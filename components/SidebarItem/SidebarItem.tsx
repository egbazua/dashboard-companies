import Link from "next/link"
import { SidebarItemProps } from "./SidebarItem.types"
import { cn } from "@/lib/utils"

const SidebarItem = ({ item: { href, icon: Icon, label } }: SidebarItemProps) => {
  return (
    <Link href={href} className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`)}>
      <Icon className="h-5 w-5" strokeWidth={1} />
      {label}
    </Link>
  )
}

export default SidebarItem
