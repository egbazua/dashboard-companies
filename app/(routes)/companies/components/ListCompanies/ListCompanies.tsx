import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { columns } from './columns'
import { DataTable } from './DataTable'

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
    <DataTable columns={columns} data={companies} />
  )
}

export default ListCompanies
