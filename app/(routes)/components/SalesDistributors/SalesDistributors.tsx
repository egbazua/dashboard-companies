import CustomIcon from "@/components/CustomIcon/CustomIcon"
import { BarChart } from "lucide-react"
import GraphicSubscribers from "../GraphicSubscribers/GraphicSubscribers"

const SalesDistributors = () => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart} />
        <p className="text-xl">Sales Distribution</p>
      </div>
      <GraphicSubscribers />
    </div>
  )
}

export default SalesDistributors
