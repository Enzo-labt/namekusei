import Head from 'next/head'
import Header from '../components/Header'

export default function Tienda(){
  return (
    <>
      <Head>
        <title>Tienda - NavajasVIP</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Tienda</h1>
        <p className="text-gray-700">Catálogo de productos para hombres y mujeres.</p>

        <div className="mt-8">
          <button id="checkout-button" className="px-4 py-2 bg-black text-white rounded">Pagar con Stripe (demo)</button>
        </div>
      </main>
    </>
  )
}