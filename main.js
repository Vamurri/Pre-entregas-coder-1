let nombre = prompt("Ingrese su nombre");
alert("¡Bienvenido a vintagedecosoporte, " + nombre + "!")

alert("¿Qué necesita?");
alert("Ingrese 1 si está en busca de mantas, 2 si busca fundas, 3 si busca una restauración, 4 si busca cortinas");
let necesidad = prompt("Ingrese lo que necesita");
let cliente = {
    nombre: nombre,
    necesidad: necesidad,
    detalles: {}
};
function darMedidas(necesidad) {
    switch (necesidad) {
        case "1":
            alert("Ahora ingrese si quiere una manta hecha o a medida:");
            let maneraManta = prompt("Ingrese 'hecha' o 'a medida': ");
            if (maneraManta === 'hecha') {
                alert("Quedan mantas de 60x80, 80x120 y mantas de 100x200. Si usted quiere alguna de estas medidas, ingrese 1.");
                let quiereManta = Number(prompt("Ingrese 1 si quiere alguna o 0 para terminar"));
                if (quiereManta === 1) {
                    let tamañoManta = prompt("Ingrese el tamaño requerido, 60x80, 80x120, 100x200");
                    alert(`Su manta de ${tamañoManta} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                    cliente.detalles.tipo = "Mantas";
                    cliente.detalles.medidas = tamañoManta;
                }
            } else {
                let tamañoManta = prompt("Ingrese el tamaño requerido");
                alert("Ingrese estilo: rayado, waffle, lisa");
                let estiloManta = prompt("Ingrese estilo");
                alert(`Su manta de ${tamañoManta} y de ${estiloManta} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                cliente.detalles.tipo = "Mantas";
                cliente.detalles.medidas = tamañoManta;
                cliente.detalles.estilo = estiloManta;
            }
            return "Usted ha ingresado mantas.";
        case "2":
            alert("Ahora ingrese si quiere una funda hecha o a medida:");
            let maneraFunda = prompt("Ingrese 'hecha' o 'a medida': ");
            if (maneraFunda === 'hecha') {
                alert("Quedan fundas de 60x80, 80x120 y fundas de 100x200. Si usted quiere alguna de estas medidas, ingrese 1.");
                let quiereFunda = Number(prompt("Ingrese 1 si quiere alguna o 0 para terminar"));
                if (quiereFunda === 1) {
                    let tamañoFunda = prompt("Ingrese el tamaño requerido, 60x80, 80x120, 100x200");
                    alert(`Su funda de ${tamañoFunda} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                }
                let tipoFunda = prompt("Ingrese tipo de funda: sillon, somier, silla");
                alert(`Su funda de ${tipoFunda} de ${tamañoFunda} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                cliente.detalles.tipo = "Fundas";
                cliente.detalles.medidas = tamañoFunda;
                cliente.detalles.tipoFunda = tipoFunda;
            } else {
                let tamañoFunda = prompt("Ingrese el tamaño requerido");
                alert("Ingrese tipo: sillon, somier, silla");
                let tipoFunda = prompt("Ingrese tipo");
                alert(`Su funda de ${tamañoFunda} y de ${tipoFunda} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                cliente.detalles.tipo = "Fundas";
                cliente.detalles.medidas = tamañoFunda;
                cliente.detalles.tipoFunda = tipoFunda;
            }
            return "Usted ha ingresado fundas.";
        case "3":
            let cosaRestaurar = prompt("Ingrese cosa a restaurar: sillas, mesas, fundas, cortinas, etc.");
            alert(`Comuníquese con este número +54 11 5566-8998 para organizar cómo se va a realizar la restauración.`);
            return "Usted ha ingresado restauración.";
        case "4":
            alert("Ahora ingrese si quiere una cortina hecha o a medida:");
            let maneraCortina = prompt("Ingrese 'hecha' o 'a medida': ");
            if (maneraCortina === 'hecha') {
                alert("Quedan cortinas de 60x80, 80x120 y cortinas de 100x200. Si usted quiere alguna de estas medidas, ingrese 1.");
                let quiereCortina = Number(prompt("Ingrese 1 si quiere alguna o 0 para terminar"));
                if (quiereCortina === 1) {
                    let tamañoCortina = prompt("Ingrese el tamaño requerido, 60x80, 80x120, 100x200");
                    alert(`Su cortina de ${tamañoCortina} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                    cliente.detalles.tipo = "Cortinas";
                    cliente.detalles.medidas = tamañoCortina;
                    cliente.detalles.estiloCortina = null;
                }
            } else {
                let tamañoCortina = prompt("Ingrese el tamaño requerido");
                alert("Ingrese estilo: con volados, sin volados, con arandelas");
                let estiloCortina = prompt("Ingrese estilo");
                alert(`Su cortina de ${tamañoCortina} y de ${estiloCortina} está lista para usted, comuníquese con este número +54 11 5566-8998 para organizar la entrega.`);
                cliente.detalles.tipo = "Cortinas";
                cliente.detalles.medidas = tamañoCortina;
                cliente.detalles.estiloCortina = estiloCortina;
            }
            return "Usted ha ingresado cortinas.";
        default:
            return "Instrucción no válida.";
    }
}
function saludar(){
    alert("Gracias "+ nombre +" por elegirnos, ett:@VINTAGEDECOSOPORTE.");
}
let resultado = darMedidas(necesidad);
saludar();
console.log(cliente);
