'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import axios from "axios"
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { UploadButton } from "@/utils/uploadthing"
import { CompanyFormProps } from "./CompanyForm.types"
import { formSchema } from "./CompanyForm.form"
import { toast } from "@/components/ui/use-toast"

const CompanyForm = ({ company }: CompanyFormProps) => {
  const router = useRouter()
  const [photoUploaded, setPhotoUploaded] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: company.name,
      description: company.description,
      country: company.country,
      website: company.website,
      phone: company.phone,
      cif: company.cif,
      profileImage: company.profileImage,
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/company/${company.id}`, values)

      toast({
        title: "Company updated!",
      })

      router.refresh()
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Company name..." type="text" {...field} />
                </FormControl>
              </FormItem>
            )} 
          />
          <FormField 
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="spain">Spain</SelectItem>
                    <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                    <SelectItem value="portugal">Portugal</SelectItem>
                    <SelectItem value="greece">Greece</SelectItem>
                    <SelectItem value="Italy">Italy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} 
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="www.cahova.shop" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+34 665 55 55 55" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cif"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>CIF</FormLabel>
                <FormControl>
                  <Input placeholder="B-1234567" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <div>
                    {
                      photoUploaded ? (
                        <p className="text-sm">Image uploaded!</p>
                      ) : (
                        <UploadButton
                          className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                          {...field}
                          endpoint="profileImage"
                          onClientUploadComplete={(res) => {
                            form.setValue("profileImage", res?.[0].url)
                            toast({ title: "Image uploaded! 🚀" })
                            setPhotoUploaded(true)
                          }}
                          onUploadError={(error: Error) => {
                            toast({ title: "Error uploading image! 👾" })
                          }}
                        />
                      )
                    }
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Company description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description..." {...field} value={form.getValues().description ?? ''} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CompanyForm
