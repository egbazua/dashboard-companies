import CustomIcon from "@/components/CustomIcon/CustomIcon"
import { CardSummaryProps } from "./CardSummary.types"

const CardSummary = ({ average, icon: Icon, title, tooltipText, total }: CardSummaryProps) => {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
      <div className="flex justify-between">
        <CustomIcon icon={Icon} />
        {title}
      </div>
    </div>
  )
}

export default CardSummary
