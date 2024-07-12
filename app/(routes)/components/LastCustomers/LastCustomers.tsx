import CustomIcon from "@/components/CustomIcon/CustomIcon"
import { Building } from "lucide-react"

const LastCustomers = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={Building} />
        <p className="text-xl">Last customers</p>
      </div>
      <div>
        <p>Customer table</p>
      </div>
    </div>
  )
}

export default LastCustomers
