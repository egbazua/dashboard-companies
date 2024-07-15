'use client'

import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Toast } from '@/components/ui/toast'
import { FormContactProps } from "./FormContact.types"
import { formSchema } from "./FormContact.form"
import { toast } from "@/components/ui/use-toast"

const FormContact = () => {
  return (
    <div>FormContact</div>
  )
}

export default FormContact
