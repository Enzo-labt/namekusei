import type { NextApiRequest, NextApiResponse } from 'next'
import services from '../../../data/services'
import { supabaseServer } from '../../../lib/supabaseClient'

const TZ = process.env.TZ || 'America/Argentina/Buenos_Aires'

function isoToDate(iso: string) {
  return new Date(iso)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const { name, email, phone, serviceId, start } = req.body
  if (!name || !email || !serviceId || !start) return res.status(400).json({ error: 'Missing fields' })

  const service = services.find(s => s.id === serviceId)
  if (!service) return res.status(400).json({ error: 'Invalid service' })

  const startDate = isoToDate(start)
  if (isNaN(startDate.getTime())) return res.status(400).json({ error: 'Invalid start date' })

  const endDate = new Date(startDate.getTime() + service.duration * 60 * 1000)

  try {
    // Check overlapping bookings in Supabase
    const { data: overlapping, error: overlapErr } = await supabaseServer
      .from('bookings')
      .select('*')
      .or(
        `start.lt.${endDate.toISOString()},end.gt.${startDate.toISOString()}`
      )

    if (overlapErr) throw overlapErr
    if (overlapping && overlapping.length > 0) {
      return res.status(409).json({ error: 'Time slot already booked' })
    }

    // Insert booking
    const { data, error } = await supabaseServer
      .from('bookings')
      .insert([
        {
          name,
          email,
          phone,
          service_id: service.id,
          service_name: service.name,
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        },
      ])
      .select()

    if (error) throw error

    // TODO: create Google Calendar event if credentials provided (deferred)

    return res.status(200).json({ booking: data?.[0] })
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ error: err.message || 'Server error' })
  }
}