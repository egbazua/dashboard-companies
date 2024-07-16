import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(req: Request, { params }: { params: { companyId: string } }) {
  try {
    const { userId } = auth()
    const data = await req.json()

    if (!userId) return new NextResponse("Unauthorized", { status: 401 })

    const company = await db.company.findUnique({
      where: {
        id: params.companyId,
      },
    })

    if (!company) return new NextResponse("Company not found", { status: 500 })
    
    const contact = await db.contact.create({
      data: {
        companyId: params.companyId,
        ...data,
      }
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.error(error)

    return new NextResponse("Internal error", { status: 500 })
  }
}
