import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const page = async ({ companyId }: { companyId: string }) => {
  const { userId } = auth()

  if (!userId) return redirect("/")

  const company = await db.company.findUnique({
    where: {
      id: companyId,
      userId
    },
  })

  if (!company) return redirect("/")

  return (
    <div>
      <p>Header</p>
      <p>Company information</p>
      <p>footer company</p>
    </div>
  )
}

export default page
