
let continuar = true;
let nombre = prompt("Ingrese su nombre");
let direccion= prompt("ingrese su direccion");
alert("¡Bienvenido a vintagedecosoporte, " + nombre + "!")
do {
alert("¿Qué necesita?");
alert("Ingrese 1 si está en busca de mantas, 2 si busca fundas, 3 si busca una restauración, 4 si busca cortinas");
let necesidad = Number(prompt("Ingrese lo que necesita"));
let cliente = {
    nombre: nombre,
    necesidad: necesidad,
    carrito: [],
};
let stockMantas = {
    '60x80': { cantidad: 30, precio: 20000 },
    '80x120': { cantidad: 15, precio: 40000},
    '100x200': { cantidad: 40, precio: 45000 }
};
let stockFundas = {
    '60x80': { cantidad: 20, precio: 15000 },
    '80x120': { cantidad: 15, precio: 20000 },
    '100x200': { cantidad: 25, precio: 25000 }
};

let stockCortinas = {
    '60x80': { cantidad: 10, precio: 5000 },
    '80x120': { cantidad: 15, precio: 8000 },
    '100x200': { cantidad: 20, precio: 12000 }
};

function verificarStockMantas(tamaño, cantidad) {
    if (stockMantas[tamaño].cantidad >= cantidad) {
        stockMantas[tamaño].cantidad -= cantidad;
        return true; // Suficiente stock disponible
    } else {
        return false; // No hay suficiente stock
    }
};
function agregarAlCarrito(tipo, medidas, cantidad, precioTotal) {
    cliente.carrito.push({ tipo, medidas, cantidad, precioTotal });
};

function informarContactoEspecial() {
    alert("Lo sentimos, no hay suficiente stock disponible para su pedido.");
    alert("Por favor, comuníquese con nuestro equipo al siguiente número especial: +54 11 1234-5678 para obtener más información.");
}

function verificarStockFundas(tamaño, cantidad) {
    if (stockFundas[tamaño].cantidad >= cantidad) {
        stockFundas[tamaño].cantidad -= cantidad;
        return true; // Suficiente stock disponible
    } else {
        return false; // No hay suficiente stock
    }
}

function verificarStockCortinas(tamaño, cantidad) {
    if (stockCortinas[tamaño].cantidad >= cantidad) {
        stockCortinas[tamaño].cantidad -= cantidad;
        return true; // Suficiente stock disponible
    } else {
        return false; // No hay suficiente stock
    }
}

function calcularPrecioFinal(carrito) {
    let precioFinal = 0;

    carrito.forEach(producto => {
        precioFinal += producto.precioTotal;
    });

    return precioFinal;
}
function ingresarCantidad(mensaje) {
    let cantidad;
    do {
        cantidad = Number(prompt(mensaje));
        if (cantidad === 0) {
            return -1; // Indicar cancelación o terminación
        }
    } while (isNaN(cantidad) || cantidad <= 0);
    return cantidad;
}

function darMedidas(necesidad) {
    let adquirirMas = true;
    while (adquirirMas) {
        switch (necesidad) {
            case 1:
                alert("Ahora ingrese si quiere una manta hecha o a medida:");
                let maneraManta = prompt("Ingrese 'hecha' o 'a medida':");
                if (maneraManta === 'hecha') {
                    alert("Quedan mantas de 60x80, 80x120 y mantas de 100x200. Si usted quiere alguna de estas medidas, ingrese 1.");
                    let quiereManta = Number(prompt("Ingrese 1 si quiere alguna o 0 para terminar"));
                    if (quiereManta === 1) {
                        let tamañoManta = prompt("Ingrese el tamaño requerido, 60x80, 80x120, 100x200");
                        let cantidadMantas = ingresarCantidad(`Ingrese la cantidad de mantas de ${tamañoManta} que desea`);
                        if (verificarStockMantas(tamañoManta, cantidadMantas)) {
                            let precioTotal = stockMantas[tamañoManta].precio * cantidadMantas;
                            alert(`Su pedido de ${cantidadMantas} mantas de ${tamañoManta} está listo para usted. Costo total: $${precioTotal}. Será enviado a: ${direccion}. Comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                            cliente.carrito.push({ tipo: "Mantas", medidas: tamañoManta, cantidad: cantidadMantas, precioTotal: precioTotal });
                        } else {
                            informarContactoEspecial();
                            return "No hay suficiente stock de mantas disponibles.";
                        }
                    }else{
                        return "Usted ha cancelado la selección.";
                    }
                } else {
                    let tamañoManta = prompt("Ingrese el tamaño requerido");
                    alert("Ingrese estilo: rayado, waffle, lisa");
                    let estiloManta = prompt("Ingrese estilo");
                    alert(`Su manta de ${tamañoManta} y de ${estiloManta} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                    cliente.carrito.push({ tipo: "Mantas", medidas: tamañoManta, estilo: estiloManta });
                }
                return "Usted ha ingresado mantas.";
        case 2 :
            alert("Ahora ingrese si quiere una funda hecha o a medida:");
            let maneraFunda = prompt("Ingrese 'hecha' o 'a medida': ");
            if (maneraFunda === 'hecha') {
                alert("Quedan fundas de 60x80, 80x120 y fundas de 100x200. Si usted quiere alguna de estas medidas, ingrese 1.");
                let quiereFunda = Number(prompt("Ingrese 1 si quiere alguna o 0 para terminar"));
                if (quiereFunda === 1) {
                    let tamañoFunda = prompt("Ingrese el tamaño requerido, 60x80, 80x120, 100x200");
                    let cantidadFundas =  ingresarCantidad(`Ingrese la cantidad de funda de ${tamañoFunda} que desea`);
                    if (verificarStockFundas(tamañoFunda, cantidadFundas)) {
                        let precioTotal = stockFundas[tamañoFunda].precio * cantidadFundas;
                        alert(`Su pedido de ${cantidadFundas} fundas de ${tamañoFunda} está listo para usted. Costo total: $${precioTotal}. Será enviado a: ${direccion}. Comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                        cliente.detalles.tipo = "Fundas";
                        cliente.detalles.medidas = tamañoFunda;
                        cliente.detalles.cantidad = cantidadFundas;
                        cliente.detalles.precioTotal = precioTotal;
                        agregarAlCarrito("fundas", tamañoFunda, cantidadFundas, precioTotal);
                    } else {
                        alert("Lo sentimos, no hay suficiente stock disponible para su pedido de fundas.");
                    }
                }
            } else {
                let tamañoFunda = prompt("Ingrese el tamaño requerido");
                alert("Ingrese tipo: sillon, somier, silla");
                let tipoFunda = prompt("Ingrese tipo");
                alert(`Su funda de ${tamañoFunda} y de ${tipoFunda} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                cliente.detalles.tipo = "Fundas";
                cliente.detalles.medidas = tamañoFunda;
                cliente.detalles.tipoFunda = tipoFunda;
            }
            adquirirMas = adquirirOtroProducto();
    if (!adquirirMas) {
        return "Usted ha cancelado la selección.";
    }
            return "Usted ha ingresado fundas.";
        case 3:
            let cosaRestaurar = prompt("Ingrese cosa a restaurar: sillas, mesas, fundas, cortinas, etc.");
            alert(`Comuníquese con este número +54 11 5566-8998 para organizar cómo se va a realizar la restauración.`);
            return "Usted ha ingresado restauración.";
        case 4:
            alert("¿Está buscando cortinas hechas o a medida?");
    let tipoCortina = prompt("Ingrese 'hechas' o 'a medida': ").toLowerCase();
    
    if (tipoCortina === 'hechas') {
        alert("Disponemos de cortinas en los tamaños: 60x80, 80x120 y 100x200. Ingrese el número correspondiente al tamaño que necesita.");
        let tamañoCortina = prompt("Tamaño requerido (60x80, 80x120, 100x200): ");
        let cantidadCortina = ingresarCantidad(`Ingrese la cantidad de cortinas de ${tamañoCortina} que desea:`);
        
        if (verificarStockCortinas(tamañoCortina, cantidadCortina)) {
            let precioTotal = stockCortinas[tamañoCortina].precio * cantidadCortina;
            alert(`Pedido confirmado: ${cantidadCortina} cortinas de ${tamañoCortina}. Total: $${precioTotal}. Serán enviadas a: ${direccion}. Comuníquese con +54 11 5566-8998 para organizar la entrega.`);
            agregarAlCarrito("Cortinas", tamañoCortina, cantidadCortina, precioTotal);
        } else {
            informarContactoEspecial();
            return "No hay suficiente stock de cortinas disponibles.";
        }
    } else if (tipoCortina === 'a medida') {
        let medidaCortina = prompt("Por favor, ingrese las medidas deseadas para las cortinas:");
        let estiloCortina = prompt("Ingrese el estilo (opcional):");
        alert(`Sus cortinas a medida de ${medidaCortina} y estilo ${estiloCortina || 'sin especificar'} están en proceso. Comuníquese con +54 11 5566-8998 para más detalles.`);
        cliente.carrito.push({ tipo: "Cortinas", medidas: medidaCortina, estilo: estiloCortina || 'sin especificar' });
    } else {
        return "Selección no válida para el tipo de cortina.";
    }
    return "Ha ingresado cortinas a su carrito.";
        default:
            return "Instrucción no válida.";
        }
        adquirirMas = adquirirOtroProducto();
    }
}
function mostrarCarrito(carrito) {
    console.log("Carrito actual:");
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}. Producto: ${producto.tipo}, Tamaño: ${producto.medidas}, Cantidad: ${producto.cantidad}, Precio Total: $${producto.precioTotal}`);
    });

    // Preguntar al usuario si desea eliminar un producto
    let eliminar = prompt("Si desea eliminar un producto del carrito, ingrese el número correspondiente. De lo contrario, ingrese 0 para continuar sin cambios.");

    if (eliminar !== "0") {
        eliminar--;
        if (eliminar >= 0 && eliminar < carrito.length) {
            console.log(`Se ha eliminado el producto del carrito: ${carrito[eliminar].tipo}, ${carrito[eliminar].medidas}`);
            carrito.splice(eliminar, 1);
            let precioFinalCompra = calcularPrecioFinal(cliente.carrito);
            console.log("Precio final de la compra actualizado:", precioFinalCompra);
        } else {
            console.log("La opción ingresada no es válida.");
        }
    }
}

function saludar(){
    alert("Gracias "+ nombre +" por elegirnos, ett:@VINTAGEDECOSOPORTE.");
}
let resultado = darMedidas(necesidad);
mostrarCarrito(cliente.carrito);
let precioFinalCompra = calcularPrecioFinal(cliente.carrito);
saludar();


console.log("Precio final de la compra:", precioFinalCompra);
console.log(cliente);
console.log("Stock de mantas actualizado:", stockMantas);
console.log("Stock de fundas actualizado:", stockFundas);
console.log("Stock de cortinas actualizado:", stockCortinas);

function adquirirOtroProducto() {
        let opcion = prompt("¿Desea adquirir otro producto? Ingrese 'sí' o 'no': ").toLowerCase();
        return opcion === 'sí' || opcion === 'si';
    }
continuar=adquirirOtroProducto();
}while(continuar);


