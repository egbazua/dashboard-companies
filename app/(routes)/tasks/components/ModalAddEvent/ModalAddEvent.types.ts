import { Company } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"

export type ModalAddEventprops = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>
  companies: Company[]
  setNewEvent: Dispatch<SetStateAction<{
    eventName: string
    companySelected: { name: string, id: string }
  }>>
}
