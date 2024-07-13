import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

const ListCompanies = async () => {
  const { userId } = auth()

  if (!userId) return redirect("/")

  const companies = await db.company.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div>ListCompanies</div>
  )
}

export default ListCompanies
