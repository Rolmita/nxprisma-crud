import Form from "@/components/ArticulosForm"
import prisma from '@/lib/prisma'
import { editArticulo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const articulo = await prisma.articulo.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3>Editar artículo {searchParams.id}</h3>
      <Form action={editArticulo} title='Editar artículo' articulo={articulo} disabled={false} />
    </div>
  )
}


export default page