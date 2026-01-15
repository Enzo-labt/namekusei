import Head from 'next/head'
import Header from '../components/Header'

export default function Barberia(){
  return (
    <>
      <Head>
        <title>Barbería - NavajasVIP</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Servicios de Barbería</h1>
        <p className="text-gray-700">Aquí listaremos cortes, tratamientos y precios.</p>
      </main>
    </>
  )
}