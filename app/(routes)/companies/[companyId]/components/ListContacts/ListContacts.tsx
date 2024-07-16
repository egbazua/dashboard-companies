import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone } from "lucide-react"
import { ListContactsProps } from "./ListContacts.types"

const ListContacts = async ({ company }: ListContactsProps) => {
  const { userId } = auth()

  if (!userId) return redirect("/")

  const contacts = await db.contact.findMany({
    where: {
      company: {
        id: company.id
      }
    }
  })

  if (contacts.length === 0) return <p>You currently do not have any contact</p>

  return (
    <div>
      <div className="mt-4 mb-2 grid grid-cols-3 p-2 gap-x-3 items-center justify-between px-4 bg-slate-400/20 rounded-lg">
        <p>Name</p>
        <p>Role</p>
        <p className="text-right">Contact</p>
      </div>
      {
        contacts.map((contact) => (
          <div key={contact.id}>
            <div className="grid grid-cols-3 gap-x-3 items-center justify-between px-4">
              <p>{contact.name}</p>
              <p>{contact.role}</p>
              <div className="flex items-center gap-x-6 justify-end">
                <a href={`callto: ${contact.phone}`} target="_blank">
                  <Phone className="w-4 h-4" />
                </a>
                <a href={`mailto: ${contact.email}`} target="_blank">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <Separator className="my-3" />
          </div>
        ))
      }
    </div>
  )
}

export default ListContacts
