//Este seria un programa diseñado para una casa de respuestos de automoviles , la idea del mismo es pregunta al usuario a que marca de vehiculo quiere acceder y luego preguntar en que categoria de repuestos quiere consultar , el programa le devolvera los distintos respuestos que se encuentren dentro de esa categoria , despues tiene una seccion donde son repuestos de marcas importadas , que al no estar divididas en arrays por marcas , solo esta en 1 array donde estan mescladas , se pueden acceder a ellas mediante el ID , la ultima opcion es para saber el precio que se le cobra al cliente con IVA , ya habiendo buscado el producto anteriormente , debemos ingresar el ID del producto y este nos devolvera sus datos con el precio actualizado.


//Arrays con objetos de las diferentes marcas y los repuestos importados
let repuestosFiat = [
    { id: 101, nombre: "Motor", marca: "fiat", stock: 2, precio: 150000, categoria: "mecanica" },
    { id: 102, nombre: "Rueda", marca: "fiat", stock: 10, precio: 50000, categoria: "rodado" },
    { id: 103, nombre: "Parrilla Suspencion", marca: "fiat", stock: 5, precio: 45000, categoria: "tren delantero" },
    { id: 104, nombre: "Amortiguador Delantero", marca: "fiat", stock: 15, precio: 35000, categoria: "tren Delantero" },
    { id: 105, nombre: "Bieleta Delantera", marca: "fiat", stock: 30, precio: 15000, categoria: "tren Delantero" },
    { id: 106, nombre: "LLanta", marca: "fiat", stock: 10, precio: 25000, categoria: "rodado" },
    { id: 107, nombre: "Alternador", marca: "fiat", stock: 2, precio: 55000, categoria: "mecanica" },
    { id: 108, nombre: "Mariposa Inyectora", marca: "fiat", stock: 4, precio: 102000, categoria: "mecanica" },
    { id: 109, nombre: "Extremo Ambos Lados", marca: "fiat", stock: 25, precio: 25000, categoria: "tren delantero" },
    { id: 110, nombre: "Bomba de Agua", marca: "fiat", stock: 20, precio: 40000, categoria: "mecanica" },
]

let repuestosPeugeot = [
    { id: 111, nombre: "Motor", marca: "peugeot", stock: 2, precio: 200000, categoria: "mecanica" },
    { id: 112, nombre: "Rueda", marca: "peugeot", stock: 10, precio: 80000, categoria: "rodado" },
    { id: 113, nombre: "Parrilla Suspencion", marca: "peugeot", stock: 5, precio: 55000, categoria: "tren delantero" },
    { id: 114, nombre: "Amortiguador Delantero", marca: "peugeot", stock: 15, precio: 75000, categoria: "tren Delantero" },
    { id: 115, nombre: "Bieleta Delantera", marca: "peugeot", stock: 30, precio: 35000, categoria: "tren Delantero" },
    { id: 116, nombre: "LLanta", marca: "peugeot", stock: 10, precio: 125000, categoria: "rodado" },
    { id: 117, nombre: "Alternador", marca: "peugeot", stock: 2, precio: 85000, categoria: "mecanica" },
    { id: 118, nombre: "Mariposa Inyectora", marca: "peugeot", stock: 4, precio: 122000, categoria: "mecanica" },
    { id: 119, nombre: "Extremo Ambos Lados", marca: "peugeot", stock: 25, precio: 45000, categoria: "tren delantero" },
    { id: 120, nombre: "Bomba de Agua", marca: "peugeot", stock: 20, precio: 55000, categoria: "mecanica" },
]

let repuestosRenault = [
    { id: 121, nombre: "Motor", marca: "renault", stock: 2, precio: 190000, categoria: "mecanica" },
    { id: 122, nombre: "Rueda", marca: "renault", stock: 10, precio: 60000, categoria: "rodado" },
    { id: 123, nombre: "Parrilla Suspencion", marca: "renault", stock: 5, precio: 45000, categoria: "tren delantero" },
    { id: 124, nombre: "Amortiguador Delantero", marca: "renault", stock: 15, precio: 95000, categoria: "tren Delantero" },
    { id: 125, nombre: "Bieleta Delantera", marca: "renault", stock: 30, precio: 35000, categoria: "tren Delantero" },
    { id: 126, nombre: "LLanta", marca: "renault", stock: 10, precio: 105000, categoria: "rodado" },
    { id: 127, nombre: "Alternador", marca: "renault", stock: 2, precio: 65000, categoria: "mecanica" },
    { id: 128, nombre: "Mariposa Inyectora", marca: "renault", stock: 4, precio: 102000, categoria: "mecanica" },
    { id: 129, nombre: "Extremo Ambos Lados", marca: "renault", stock: 25, precio: 15000, categoria: "tren delantero" },
    { id: 130, nombre: "Bomba de Agua", marca: "renault", stock: 20, precio: 65000, categoria: "mecanica" },
]
let repuestosVolskwagen = [
    { id: 131, nombre: "Motor", marca: "volskwagen", stock: 2, precio: 190000, categoria: "mecanica" },
    { id: 132, nombre: "Rueda", marca: "volskwagen", stock: 10, precio: 60000, categoria: "rodado" },
    { id: 133, nombre: "Parrilla Suspencion", marca: "volskwagen", stock: 5, precio: 45000, categoria: "tren delantero" },
    { id: 134, nombre: "Amortiguador Delantero", marca: "volskwagen", stock: 15, precio: 95000, categoria: "tren Delantero" },
    { id: 135, nombre: "Bieleta Delantera", marca: "volskwagen", stock: 30, precio: 35000, categoria: "tren Delantero" },
    { id: 136, nombre: "LLanta", marca: "volskwagen", stock: 10, precio: 105000, categoria: "rodado" },
    { id: 137, nombre: "Alternador", marca: "volskwagen", stock: 2, precio: 65000, categoria: "mecanica" },
    { id: 138, nombre: "Mariposa Inyectora", marca: "volskwagen", stock: 4, precio: 102000, categoria: "mecanica" },
    { id: 139, nombre: "Extremo Ambos Lados", marca: "volskwagen", stock: 25, precio: 15000, categoria: "tren delantero" },
    { id: 140, nombre: "Bomba de Agua", marca: "volskwagen", stock: 20, precio: 65000, categoria: "mecanica" },
]

let productosImportados = [
    { id: 141, nombre: "Amortiguador Trasero", marca: "BMW", stock: 5, precio: 300000, categoria: "tren delantero", seccion: "importados" },
    { id: 142, nombre: "Bomba de Nafta", marca: "Mercedes Benz", stock: 3, precio: 400000, categoria: "mecanica", seccion: "importados" },
    { id: 143, nombre: "inyector", marca: "Audi", stock: 20, precio: 155000, categoria: "mecanica", seccion: "Importados" },
    { id: 144, nombre: "Homocinetica", marca: "Honda", stock: 10, precio: 100000, categoria: "tren delantero", seccion: "importados" },
    { id: 145, nombre: "ECU", marca: "Porsche", stock: 1, precio: 800000, categoria: "mecanica", seccion: "importados" }
]

//Primer prompt , donde consultamos al usuario a que marca esta destinada la busqueda o si quiere sacar el precio con IVA

let consulta = Number(prompt("Bienvenido al programa de busqueda de repuestos registrados en sistema ,ingrese el numero por la marca que quiera consultar por su repuesto: \n1)Fiat \n2)Peugeot \n3)Renault \n4)Volskwagen \n5)Buscar por ID para Importados \n6)Consultar precio con IVA \n0)Para finalizar"))

//Bucles y condicionales

while (consulta != 0) {
    if (consulta === 1) {
        let respuestaFiat = Number(prompt("Usted a seleccionado la marca Fiat, seleccione la opcion correcta para la categoria de repuesto que esta buscando: \n1)Mecanica \n2)Rodado \n3)Tren delantero \n0)Salir"))
        if (respuestaFiat === 1) {
            let categoria = "mecanica"
            let productosFiltrados = categoriasProductosFiat(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaFiat === 2) {
            let categoria = "rodado"
            let productosFiltrados = categoriasProductosFiat(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaFiat === 3) {
            let categoria = "tren delantero"
            let productosFiltrados = categoriasProductosFiat(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaFiat === 0) {
            break
        } else {
            alert("Opcion incorrecta")
        }

    } if (consulta === 2) {
        let = respuestaPeugeot = Number(prompt("Usted a seleccionado la marca Peugeot, seleccione la opcion correcta para la categoria de repuesto que esta buscando:  \n1)Mecanica \n2)Rodado \n3)Tren delantero \n0)Salir"))
        if (respuestaPeugeot === 1) {
            let categoria = "mecanica"
            let productosFiltrados = categoriasProductosPeugeot(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaPeugeot === 2) {
            let categoria = "rodado"
            let productosFiltrados = categoriasProductosPeugeot(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaPeugeot === 3) {
            let categoria = "tren delantero"
            let productosFiltrados = categoriasProductosPeugeot(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaPeugeot === 0) {
            break
        } else {
            alert("Opcion incorrecta")
        }
    } if (consulta === 3) {
        let respuestaRenault = Number(prompt("Usted a seleccionado la marca Renault, seleccione la opcion correcta para la categoria de repuesto que esta buscando:   \n1)Mecanica \n2)Rodado \n3)Tren delantero \n0)Salir"))
        if (respuestaRenault === 1) {
            let categoria = "mecanica"
            let productosFiltrados = categoriasProductosRenault(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaRenault === 2) {
            let categoria = "rodado"
            let productosFiltrados = categoriasProductosRenault(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaRenault === 3) {
            let categoria = "tren delantero"
            let productosFiltrados = categoriasProductosRenault(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaRenault === 0) {
            break
        } else {
            alert("Opcion incorrecta")
        }
    } if (consulta === 4) {
        let respuestaVolskwagen = Number(prompt("Usted a seleccionado la marca Volskwagen, seleccione la opcion correcta para la categoria de repuesto que esta buscando:  \n1)Mecanica \n2)Rodado \n3)Tren delantero \n0)Salir"))
        if (respuestaVolskwagen === 1) {
            let categoria = "mecanica"
            let productosFiltrados = categoriasProductosVolskwagen(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaVolskwagen === 2) {
            let categoria = "rodado"
            let productosFiltrados = categoriasProductosVolskwagen(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaVolskwagen === 3) {
            let categoria = "tren delantero"
            let productosFiltrados = categoriasProductosVolskwagen(categoria)
            alert(mostrarFiltrados(productosFiltrados))
            volverAlInicio()
        } else if (respuestaVolskwagen === 0) {
            break
        } else {
            alert("Opcion incorrecta")
        }
    } if (consulta === 5) {
        let respuestaImportados = Number(prompt("Usted a seleccionado la opcion de importados, recuerde que aqui el metodo de busqueda es solo por ID del producto que van desde el ID 141 al 145. ingrese el numero de ID correspondiente para conocer el producto registrado."))
        let productoImportadoBuscado = productosImportados.find(producto => producto.id === respuestaImportados)
        if (productoImportadoBuscado) {
            let importado = "Marca: " + productoImportadoBuscado.marca + " ,Nombre: " + productoImportadoBuscado.nombre + " ,Precio sin IVA: " + productoImportadoBuscado.precio + " ,Stock: " + productoImportadoBuscado.stock
            alert(importado)
            volverAlInicio()
        } else{
            alert("No hay ningun producto en la seccion de Importados con ese ID")
        }
    } if (consulta === 6) {
        let respuestaConIva = alert("Usted ingreso a la seccion para concer el precio final del producto para el cliente con el IVA sumado.(Desde el 101 al 145 hasta ahora registrados)")
        let todasLasMarcas = [repuestosFiat, repuestosPeugeot, repuestosRenault, repuestosVolskwagen, productosImportados]
        let idDelProducto = Number(prompt("Por favor ingrese el ID del producto"))
        let productoEncontrado = buscarProductoPorId(idDelProducto, todasLasMarcas)
        if (productoEncontrado) {
            let precioFinalConIva = productoEncontrado.precio + (productoEncontrado.precio * 21 / 100);
            let respuestaFinal = {
                id: productoEncontrado.id,
                nombre: productoEncontrado.nombre,
                marca: productoEncontrado.marca,
                precio: precioFinalConIva
            };
            let mensaje = `ID: ${respuestaFinal.id}\nNombre: ${respuestaFinal.nombre}\nMarca: ${respuestaFinal.marca}\nPrecio con IVA: ${respuestaFinal.precio.toFixed(2)}`;
            alert(mensaje)
            volverAlInicio()
        }}
}


//Funciones: Estas devuelven los objetos tras un filtrado por la categoria pedida

    function categoriasProductosFiat(categoria) {
        return repuestosFiat.filter(producto => producto.categoria === categoria)
    }

    function categoriasProductosPeugeot(categoria) {
        return repuestosPeugeot.filter(producto => producto.categoria === categoria)
    }

    function categoriasProductosRenault(categoria) {
        return repuestosRenault.filter(producto => producto.categoria === categoria)
    }

    function categoriasProductosVolskwagen(categoria) {
        return repuestosVolskwagen.filter(producto => producto.categoria === categoria)
    }

//Esta funcion devuelve el mensaje final con el producto encontrado y mostrado en pantalla

    function mostrarFiltrados(productosFiltrados) {
        return productosFiltrados.map(producto => " ID: " + producto.id + " ,Nombre: " + producto.nombre + " ,Stock: " + producto.stock + " ,Precio Sin IVA: " + producto.precio).join("\n")
    }

//Esta Funcion esta hecha para buscar un producto por ID especifico 

    function buscarProductoPorId(id, arrays) {
        for (const array of arrays) {
            let productoBuscado = array.find(product => product.id === id);
            if (productoBuscado) {
                return productoBuscado;
            }
        }
        return null;
    }
//Y por ultimo , la funcion que nos devuelve al menu principal una vez hemos terminado una busqueda.
    function volverAlInicio() {
        consulta = Number(prompt("Bienvenido al programa de busqueda de repuestos registrados en sistema ,ingrese el numero por la marca que quiera consultar por su repuesto: \n1)Fiat \n2)Peugeot \n3)Renault \n4)Volskwagen \n5)Buscar por ID para Importados \n6)Consultar precio con IVA \n0)Para finalizar"))

    }