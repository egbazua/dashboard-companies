'use client'

import { useRouter } from "next/navigation"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { FooterCompanyProps } from "./FooterCompany.types"
import { Trash } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const FooterCompany = ({ companyId }: FooterCompanyProps) => {
  const router = useRouter()

  const onDeleteCompay = async () => {
    try {
      axios.delete(`/api/company/${companyId}`)
      
      toast({
        title: "Company deleted"
      })

      router.push("/companies")
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="flex justify-end mt-5">
      <Button variant='destructive' onClick={onDeleteCompay}>
        <Trash className="h-4 w-4 mr-2" />
        Remove company
      </Button>
    </div>
  )
}

export default FooterCompany
