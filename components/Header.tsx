import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="font-bold text-xl">NavajasVIP</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/barberia"><a className="text-sm">Barbería</a></Link>
          <Link href="/tienda"><a className="text-sm">Tienda</a></Link>
          <Link href="/contacto"><a className="text-sm">Contacto</a></Link>
        </nav>
      </div>
    </header>
  )
}