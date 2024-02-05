import { getArticulo } from "@/lib/actions";

async function Articulo({ children, articulo }) {

    if (articulo.id) {
        articulo = await getArticulo(articulo.id)
    }

    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <h1><strong>{articulo.nombre.toUpperCase()}</strong></h1>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio.toString()} €</p>
            <h3>Proveedores:</h3>
                {articulo.proveedores.map((pro) =>
                    <p key={pro.nombre}>{pro.nombre}</p>
                )}
            {children}
        </div>
    )
}

export default Articulo