'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function proveedoresId() {
  const proId = await prisma.proveedor.findMany({
    select: { id: true }
  })
  console.log(proId);
  return proId.map(p => p.id)
}

export async function getArticulo(id) {  // obtener artículo con proveedores
  try {
    const articulo = await prisma.articulo.findUnique({
      where: { id },
      include: {
        proveedores: true
      }
    })
    console.log(articulo);
    return articulo;

  } catch (error) {
    console.log(error);
    return null;
  }
}

//TODO 
export async function getArticulos() {
  try {
    const articulos = await prisma.articulo.findMany()
    return articulos;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function newArticulo(formData) {
  try {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = Number(formData.get('precio'))

    const proId = await proveedoresId()

    // console.log(proveedoresId);
    // Array con IDs de proveedores marcados por el usuario
    const checks = proId.map(id => formData.get(id.toString()))
      .filter(id => id !== null)
      .map(id => Number(id))
    console.log('CHECKS ', checks);

    // Array de objetos con IDs de proveedores a conectar al artículo
    const connect = checks.map(id => { return { id: Number(id) } })
    console.log('CONNECT ', connect);

    const articulo = await prisma.articulo.create({
      data: {
        nombre,
        descripcion,
        precio,
        proveedores: { connect },
      },
      include: {
        proveedores: true,
      },
    })

    console.log(articulo);
    revalidatePath('/articulos')

  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}


export async function editArticulo(formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = Number(formData.get('precio'))

  try {
    const proId = await proveedoresId()

    const checks = proId.map(id => formData.get(id.toString()))
      .filter(id => id !== null)
      .map(id => Number(id))
    console.log('CHECKS ', checks);

    const connect = checks.map(id => { return { id: Number(id) } })
    console.log('CONNECT ', connect);

    // Array de objetos con IDs de proveedores a desconectar del artículo
    // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
    const difference = proId.filter(id => !checks.includes(id));
    const disconnect = difference.map(id => { return { id: Number(id) } })
    console.log('DISCONNECT ', disconnect);

    const articulo = await prisma.articulo.update({
      where: { id },
      data: { nombre, descripcion, precio, proveedores: { connect, disconnect } },
      include: { proveedores: true },
    })
    console.log(articulo);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  try {
    const id = Number(formData.get('id'))

    const articulo = await prisma.articulo.delete({
      where: {
        id: id,
      },
    })
    console.log(articulo);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }

  redirect('/articulos');
}

// PROVEEDORES

export async function getProveedores() {
  try {
    const proveedores = await prisma.proveedor.findMany()
    return proveedores;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function newProveedor(formData) {
  try {
    const nombre = formData.get('nombre')
    let nacional = formData.get('nacional')
    nacional = Boolean(nacional)

    const proveedor = await prisma.proveedor.create({
      data: { nombre, nacional },
    })

    console.log(proveedor);
    revalidatePath('/proveedores')
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}


export async function editProveedor(formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  let nacional = formData.get('nacional')
  nacional = Boolean(nacional)

  try {
    const proveedor = await prisma.proveedor.update({
      where: { id },
      data: { nombre, nacional },
    })
    console.log(proveedor);
    revalidatePath('/proveedores')
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function deleteProveedor(formData) {
  try {
    const id = Number(formData.get('id'))

    const proveedor = await prisma.proveedor.delete({
      where: {
        id: id,
      },
    })
    console.log(proveedor);
    revalidatePath('/proveedores')
  } catch (error) {
    console.log(error);
  }

  redirect('/proveedores');
}