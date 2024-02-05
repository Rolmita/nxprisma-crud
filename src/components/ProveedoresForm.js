
function ProveedoresForm({ action, title, proveedor, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={proveedor?.nombre} autoFocus ></input>
                <div className="radioOpt" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {proveedor?.nacional
                        ? <input type='checkbox' id='nacional' name='nacional' defaultChecked />
                        : <input type='checkbox' id='nacional' name='nacional' />
                    }
                    <label htmlFor='nacional' style={{ marginLeft: '5px' }}>Nacional</label>
                </div>
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default ProveedoresForm