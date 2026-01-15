import type { NextApiRequest, NextApiResponse } from 'next'
import { supabaseServer } from '../../../lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-api-key'] || ''
  if (token !== process.env.SERVER_ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' })

  const { data, error } = await supabaseServer
    .from('bookings')
    .select('*')
    .order('start', { ascending: true })

  if (error) return res.status(500).json({ error: error.message })
  return res.status(200).json({ bookings: data })
}