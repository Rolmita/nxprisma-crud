import Button from '@/components/Button'
import { getProveedores, getArticulo } from '@/lib/actions'

async function ArticulosForm({ action, title, articulo, disabled }) {

    const proveedores = await getProveedores()

    let proveeArticulo = [];
    if (articulo?.id) {
        articulo = await getArticulo(articulo?.id)
        proveeArticulo = articulo.proveedores.map(p => p.id);
    }

    return (
        <form action={action} >
            <input type='hidden' name='id' defaultValue={articulo?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={articulo?.nombre} autoFocus ></input>
                <label htmlFor='descripcion'>Descripción</label>
                <input type='text' id='descripcion' name='descripcion'
                    placeholder='Descripción'
                    defaultValue={articulo?.descripcion} />
                <label htmlFor='precio'>Precio</label>
                <input type='number' id='precio' name='precio' min='0' step={0.01}
                    placeholder='precio'
                    defaultValue={articulo?.precio} />
            </fieldset>
            <fieldset className='checkProveedor'>
                <h3>Proveedores</h3>
                {
                    proveedores?.map((proveedor) => (
                        <div className='checkboxOpt' key={proveedor.id}>
                            {proveeArticulo.includes(proveedor.id)
                                ? <input type='checkbox' name={proveedor.id} value={proveedor.id} style={{ marginRight: '5px' }} defaultChecked />
                                : <input type='checkbox' name={proveedor.id} value={proveedor.id} style={{ marginRight: '5px' }} />
                            }
                            <label htmlFor={proveedor.id}>{proveedor.nombre}</label>
                        </div>
                    ))
                }
            </fieldset>
            <Button title={title} />
        </form>
    )
}

export default ArticulosForm