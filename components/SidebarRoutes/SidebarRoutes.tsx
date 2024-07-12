'use client'

import SidebarItem from "../SidebarItem/SidebarItem"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data"

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {
            dataGeneralSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {
            dataToolsSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>
        <Separator />
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {
            dataSupportSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>
      </div>
      <div>
          <div className="text-center p-6">
            <Button variant="outline" className='w-full'>
              Upgrade Plan
            </Button>
          </div>
          <Separator />
          <footer className="mt-3 p-3 text-center text-sm">
            2024. All rights reserved.
          </footer>
      </div>
    </div>
  )
}

export default SidebarRoutes
