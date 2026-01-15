import Head from 'next/head'
import Header from '../components/Header'

export default function Home(){
  return (
    <>
      <Head>
        <title>NavajasVIP - Barbería & Indumentaria</title>
        <meta name="description" content="Barbería e indumentaria para hombres y mujeres - NavajasVIP" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">NavajasVIP</h1>
          <p className="text-lg text-gray-600 mb-8">Barbería profesional y moda para hombres y mujeres.</p>
          <div className="flex justify-center gap-4">
            <a href="/barberia" className="px-6 py-3 bg-black text-white rounded">Servicios de barbería</a>
            <a href="/tienda" className="px-6 py-3 border border-black rounded">Ir a la tienda</a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Lo más reciente</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">Producto / Promo 1</div>
            <div className="bg-white p-4 rounded shadow">Producto / Promo 2</div>
            <div className="bg-white p-4 rounded shadow">Producto / Promo 3</div>
          </div>
        </section>
      </main>
    </>
  )
}