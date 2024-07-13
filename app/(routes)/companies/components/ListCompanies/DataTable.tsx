"use client"
 
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, ChevronUp, MoreHorizontal, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { formatPrice } from "@/lib/formatPrice"
import { Company } from "@prisma/client"
import Link from "next/link"

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "profileImage",
    header: "Profile Image",
    cell: ({ row }) => {
      const image = row.getValue("profileImage")

      return (
        <div className="px-3">
          <Image 
            src={typeof image === 'string' ? image: "/images/company-icon.png"}
            width={40}
            height={40}
            alt="Image"
            className="h-auto w-auto"
          />
        </div>
      )
    }
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Company name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "cif",
    header: "CIF",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "website",
    header: "Website",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { id } = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='ghost' className="w-8 h-4 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/company/${id}`}>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4 mr-2" />
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
