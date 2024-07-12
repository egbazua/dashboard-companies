import SidebarItem from "../SidebarItem/SidebarItem"
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "./SidebarRoutes.data"

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p>GENERAL</p>
          {
            dataGeneralSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SidebarRoutes
