import ProveedoresForm from "@/components/ProveedoresForm"
import { newProveedor } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo proveedor</h3>
        <ProveedoresForm action={newProveedor} title='Crear proveedor' proveedor={null} disabled={false}  />
    </div>
  )
}

export default page