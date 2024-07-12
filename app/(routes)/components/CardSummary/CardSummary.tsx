import CustomIcon from "@/components/CustomIcon/CustomIcon"
import { CardSummaryProps } from "./CardSummary.types"
import CustomTooltip from "@/components/CustomTooltip/CustomTooltip"

const CardSummary = ({ average, icon: Icon, title, tooltipText, total }: CardSummaryProps) => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={Icon} />
          {title}
        </div>
        <CustomTooltip content={tooltipText} />
      </div>
    </div>
  )
}

export default CardSummary
