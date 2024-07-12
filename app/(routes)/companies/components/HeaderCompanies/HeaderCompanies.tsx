'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react"

const HeaderCompanies = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false)

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">List of companies</h2>
      <Dialog open={openCreateModal} onOpenChange={setOpenCreateModal}>
        <DialogTrigger asChild>
          <Button>Create Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>Create and configure your customer</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default HeaderCompanies
