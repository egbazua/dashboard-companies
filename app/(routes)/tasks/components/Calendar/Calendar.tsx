'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import FullCalendar from '@fullcalendar/react'
import multiMonth from '@fullcalendar/multimonth'
import dayGridPlugon from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js'
import { CalendarProps } from "./Calendar.types"
import { formatDate } from '@/lib/formatDate'
import { Toast } from '@/components/ui/toast'

const Calendar = ({ companies, events }: CalendarProps) => {
  return (
    <div>Calendar</div>
  )
}

export default Calendar
