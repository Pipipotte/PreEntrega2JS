

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const branding = new Producto ("Branding", 1000);
const frontend = new Producto ("Frontend", 1500);
const UXUI = new Producto ("UxUi", 2200);
const descuentoNum = 0.8;

let arrayCarrito = [0];
let arrayServicios = [];
console.log("El carrito tiene: $"+ arrayCarrito)

function descuento(arrayCarrito, descuentoNum,){
    arrayCarrito = arrayCarrito * descuentoNum;
    return arrayCarrito;
}

function compraItem(){
    let compra = prompt("¿Qué servicio desea adquirir? ☛ Branding, Frontend, UX/UI, ");
    switch (compra) {
        case "branding":
            if (compra == "branding"){
                arrayServicios.push(branding);

                console.log( "Usted está por adquirir el siguiente servicio: " + branding.nombre + ", por el valor de: $" + branding.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + branding.nombre + ", por el valor de: $" + branding.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        case "frontend":
            if (compra == "frontend"){
                arrayServicios.push(frontend);

                console.log( "Usted está por adquirir el siguiente servicio: " + frontend.nombre + ", por el valor de: $" + frontend.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + frontend.nombre + ", por el valor de: $" + frontend.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);
                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        case "ux/ui":
            if (compra == "ux/ui"){
                arrayServicios.push(UXUI);

                console.log( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break
        case "uxui":
            if (compra == "uxui"){
                arrayServicios.push(UXUI);

                console.log( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        default:
            alert(`No ingresó un servicio del listado, intente de nuevo`);
            compraItem();
    } 
};

function descuentoPreg(arrayCarrito,arrayServiciosString){
    if (prompt(`Está por adquirir el/los servicio/s de: `+ arrayServiciosString + ` por un total de $${arrayCarrito}` +`, ingrese código de descuento, de no disponer de uno deje en blanco (cod: 1234)`) == 1234){
        arrayCarrito = [parseInt(descuento(arrayCarrito, descuentoNum))];
        alert(`Descuento aplicado, total a pagar: $`+ arrayCarrito);
        console.log("Descuento aplicado, total a pagar: $", arrayCarrito);
        return arrayCarrito;
    } else {
        alert(`Total a pagar: $${arrayCarrito}`);
        console.log(`No se aplicó el descuento, total a pagar: $${arrayCarrito}`);
    }
};

function seguirComprando(){

    console.log("■ ■ Método map ■ ■");
    const arrayServiciosMap = arrayServicios.map((producto)=>{
        return producto.nombre;
    });
    console.log(arrayServiciosMap);

    console.log("■ ■ Método join ■ ■");
    let arrayServiciosString = arrayServiciosMap.join(" | ");
    console.log(arrayServiciosString);


    if (prompt(`Se añadió el servicio al carrito, desea adquirir algún otro? (s/n)`) == "s"){
        compraItem();
    } else {
        descuentoPreg(arrayCarrito,arrayServiciosString);
    }
};

compraItem();