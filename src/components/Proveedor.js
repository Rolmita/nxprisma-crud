

function Proveedor({ children, proveedor }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{proveedor.nombre}</strong></p>
            <p>{proveedor.nacional ? 'Nacional' : ''}</p>
            {children}
        </div>
    )
}

export default Proveedor