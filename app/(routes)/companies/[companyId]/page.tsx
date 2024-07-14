import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Header from "./components/Header/Header"

const page = async ({ params }: { params: { companyId: string } }) => {
  const { userId } = auth()

  if (!userId) return redirect("/")

  const company = await db.company.findUnique({
    where: {
      id: params.companyId,
      userId
    },
  })

  if (!company) return redirect("/")

  return (
    <div>
      <Header />
      <p>Company information</p>
      <p>footer company</p>
    </div>
  )
}

export default page
