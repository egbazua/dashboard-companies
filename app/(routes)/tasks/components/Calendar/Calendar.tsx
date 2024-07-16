'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import FullCalendar from '@fullcalendar/react'
import multiMonthPlugin from '@fullcalendar/multimonth'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js'
import { CalendarProps } from "./Calendar.types"
import { formatDate } from '@/lib/formatDate'
import { Toast } from '@/components/ui/toast'

const Calendar = ({ companies, events }: CalendarProps) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [onSaveNewEvent, setOnSaveNewEvent] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>()
  const [newEevent, setNewEvent] = useState({
    eventName: "",
    companySelected: {
      name: "",
      id: "",
    }
  })

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true)
    setSelectedItem(selected)
  }

  const handleEventClick = () => {

  }

  return (
    <div>
      <div className='md:flex gap-x-3'>
        <div className='w-[200px] relative'>
          <div className='overflow-auto absolute left-0 top-0 h-full w-0'>
            {
              events.map((currentEvent) => (
                <div className='p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark:bg-background' key={currentEvent.id}>
                  <p className='font-bold'>
                    {currentEvent.title}
                  </p>
                  <p>{formatDate(currentEvent.start)}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex-1 calendar-cotainer'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, multiMonthPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth"
              }}
              height="80vh"
              initialView='dayGridMonth'
              weekends={false}
              events={events}
              eventContent={renderEventContent}
              editable={true}
              selectable={true}
              selectMirror={true}
              select={handleDateClick}
              eventClick={handleEventClick}
            />
        </div>
      </div>
    </div>
  )
}

const renderEventContent = (eventInfo: EventContentArg) => {
  return (
    <div className='bg-slate-200 dark:bg-background w-full p-1'>
      <i>{eventInfo.event.title}</i>
    </div>
  )
}

export default Calendar
