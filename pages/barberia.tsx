import Head from 'next/head'
import Header from '../components/Header'
import { useState } from 'react'
import services from '../data/services'

export default function Barberia(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', serviceId: services[0].id, start: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setMessage('Reservando...')
    const res = await fetch('/api/bookings/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    if (res.ok) {
      setMessage('Reserva creada correctamente')
    } else {
      setMessage(data.error || 'Error creando reserva')
    }
  }

  return (
    <> 
      <Head>
        <title>Barbería - NavajasVIP</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Servicios de Barbería</h1>
        <p className="text-gray-700 mb-6">Reservá tu turno</p>

        <form onSubmit={handleSubmit} className="max-w-md bg-white p-6 rounded shadow">
          <label className="block mb-2">Servicio</label>
          <select name="serviceId" value={form.serviceId} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.name} — {s.duration} min — {s.price} {s.currency}</option>
            ))}
          </select>

          <label className="block mb-2">Fecha y hora (ISO)</label>
          <input name="start" value={form.start} onChange={handleChange} placeholder="YYYY-MM-DDTHH:MM:SS" className="w-full mb-4 p-2 border rounded" />

          <label className="block mb-2">Nombre</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

          <label className="block mb-2">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

          <label className="block mb-2">Teléfono</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />

          <button type="submit" className="px-4 py-2 bg-black text-white rounded">Reservar</button>
        </form>

        {message && <p className="mt-4">{message}</p>}
      </main>
    </>
  )
}