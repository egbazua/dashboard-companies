import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth()
    const { companyId } = params
    const values = await req.json()

    if (!userId) return new NextResponse("Unauthorized", { status: 401 })

    const company = await db.company.update({
      where: {
        id: companyId,
        userId,
      },
      data: {
        ...values,
      }
    })

    return NextResponse.json(company)
  } catch (error) {
    console.error(error)

    return new NextResponse("Internal error", { status: 500 })
  }
}
