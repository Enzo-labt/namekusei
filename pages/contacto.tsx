import Head from 'next/head'
import Header from '../components/Header'

export default function Contacto(){
  return (
    <>
      <Head>
        <title>Contacto - NavajasVIP</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-700">Dirección, teléfono y formulario de contacto.</p>
      </main>
    </>
  )
}