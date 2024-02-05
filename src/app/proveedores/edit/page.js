import ProveedoresForm from "@/components/ProveedoresForm"
import { editProveedor } from "@/lib/actions"

async function page({ searchParams }) {
  const proveedor = await prisma.proveedor.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
      <h3>Editar proveedor {searchParams.id}</h3>
      <ProveedoresForm action={editProveedor} title='Editar proveedor' proveedor={proveedor} disabled={false} />
    </div>
  )
}


export default page