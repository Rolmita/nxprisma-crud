import Link from 'next/link'

export default async function Home() {

  return (
    <section>
      <h1>Página de inicio</h1>
      <hr />
      <ul>
      <li style={{listStyle: 'none'}}><Link href={"/articulos"}>Listado de artículos</Link></li>
      <li style={{listStyle: 'none'}}><Link href={"/proveedores"}>Listado de proveedores</Link></li>
      </ul>      
    </section>
  )
}
