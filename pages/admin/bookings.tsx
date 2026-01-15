import { useEffect, useState } from 'react'

export default function AdminBookings(){
  const [token, setToken] = useState('')
  const [bookings, setBookings] = useState<any[]>([])

  const fetchBookings = async () => {
    const res = await fetch('/api/bookings/list', { headers: { 'x-api-key': token } })
    const data = await res.json()
    if (res.ok) setBookings(data.bookings || [])
    else alert(data.error || 'Error')
  }

  useEffect(() => {
    if (token) fetchBookings()
  }, [token])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin - Reservas</h1>
      <p>Introduce tu token de administrador para cargar las reservas.</p>
      <input className="border p-2 my-4" placeholder="Token" value={token} onChange={e => setToken(e.target.value)} />
      <button onClick={fetchBookings} className="px-3 py-2 bg-black text-white rounded">Cargar</button>

      <div className="mt-6">
        {bookings.map(b => (
          <div key={b.id} className="p-3 bg-white rounded shadow mb-3">
            <div><strong>{b.service_name}</strong></div>
            <div>{new Date(b.start).toLocaleString()}</div>
            <div>{b.name} — {b.email} — {b.phone}</div>
          </div>
        ))}
      </div>
    </div>
  )
}