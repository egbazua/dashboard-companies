'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { ModalAddEventprops } from "./ModalAddEvent.types"
import { FormEvent } from '../FormEvent'

const ModalAddEvent = ({ open, companies, setNewEvent, setOnSaveNewEvent, setOpen }: ModalAddEventprops) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle> Add a new event</DialogTitle>
        </DialogHeader>
        <FormEvent
          setOnSaveNewEvent={setOnSaveNewEvent}
          companies={companies}
          setNewEvent={setNewEvent}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  )
}

export default ModalAddEvent
