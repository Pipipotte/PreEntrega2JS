


class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const branding = new Producto ("Branding", 1000);
const frontend = new Producto ("Frontend", 2000);
const UXUI = new Producto ("UxUi", 3000);
const descuentoNum = 0.8;

/* let arrayProductos = ['branding', 'frontend', 'UXUI']; */

let arrayCarrito = [0];

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
                console.log("Usted está por comprar branding");
                arrayCarrito = [parseInt(arrayCarrito) + parseInt(branding.precio)];
                console.log("Total a pagar: $", arrayCarrito);
                descuentoPreg(arrayCarrito,compra);
                seguirComprando(arrayCarrito);
                return arrayCarrito;
            }
            break;
        case "frontend":
            if (compra == "frontend"){
                console.log("Usted está por comprar frontend");
                arrayCarrito = [parseInt(arrayCarrito) + parseInt(frontend.precio)];
                console.log("Total a pagar: $", arrayCarrito);
                descuentoPreg(arrayCarrito,compra);
                seguirComprando(arrayCarrito);
                return arrayCarrito;
            }
            break;
        case "ux/ui":
            if (compra == "ux/ui"){
                console.log("Usted está por comprar ux/ui");
                arrayCarrito = [parseInt(arrayCarrito) + parseInt(UXUI.precio)];
                console.log("Total a pagar: $", arrayCarrito);
                descuentoPreg(arrayCarrito,compra);
                seguirComprando(arrayCarrito);
                return arrayCarrito;
            }
            break
        case "uxui":
            if (compra == "uxui"){
                console.log("Usted está por comprar uxui");
                arrayCarrito = [parseInt(arrayCarrito) + parseInt(UXUI.precio)];
                console.log("Total a pagar: $", arrayCarrito);
                descuentoPreg(arrayCarrito,compra);
                seguirComprando(arrayCarrito);
                return arrayCarrito;
            }
            break;
        default:
            alert(`No ingresó un servicio del listado, intente de nuevo`);
            compraItem();
    } 
}

function seguirComprando(arrayCarrito){
    if (prompt(`Desea adquirir otro servicio? (s/n)`) == "s"){
        compraItem();
    } else {
        alert(`Ni nos vimos`);
    }
}

function descuentoPreg(arrayCarrito,compra){
    if (prompt(`Está por adquirir el servicio ${compra}, ingrese código de descuento, de no disponer de uno deje en blanco (cod: 1234)`) == 1234){
        arrayCarrito = [parseInt(descuento(arrayCarrito, descuentoNum))];
        alert(`Descuento aplicado, total a pagar: $`+ arrayCarrito);
        console.log("`Descuento aplicado, total a pagar: $", arrayCarrito);
        return arrayCarrito;
    } else {
        alert(`Total a pagar: $${arrayCarrito}`);
        console.log(`No se aplicó el descuento, total a pagar: $${arrayCarrito}`);
    }
}

compraItem();









/* 
function brandingItem(carrito){
    carrito = carrito + branding;
    return carrito;
}
function frontendItem(carrito){
    carrito = carrito + frontend;
    return carrito;
} 
function uxuiItem(carrito){
    carrito = carrito + UXUI;
    return carrito;
} 

function descuento(carrito, descuentoNum,){
    carrito = carrito * descuentoNum;
    return carrito;
}

function compraItem(){
    let compra = prompt("¿Qué servicio desea adquirir? ☛ Branding, frontend, UX/UI, ");
    switch (compra) {
        case "branding":
            if (compra == "branding"){
                console.log("Usted está por comprar branding");
                carrito = brandingItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra);
                seguirComprando(carrito);
                return carrito;
            }
            break;
        case "frontend":
            if (compra == "frontend"){
                console.log("Usted está por comprar frontend");
                carrito = frontendItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra);
                seguirComprando(carrito);
                return carrito;
            }
            break;
        case "ux/ui":
            if (compra == "ux/ui"){
                console.log("Usted está por comprar ux/ui");
                carrito = uxuiItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra)
                seguirComprando(carrito);
                return carrito
            }
            break
        case "uxui":
            if (compra == "uxui"){
                console.log("Usted compró uxui");
                carrito = uxuiItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra)
                seguirComprando(carrito);
                return carrito
            }
            break;
        default:
            alert(`No ingresó un servicio del listado, intente de nuevo`);
            compraItem();
    } 
}

function seguirComprando(carrito){
    if (prompt(`Desea adquirir otro servicio? (s/n)`) == "s"){
        compraItem();
    } else {
        alert(`Ni nos vimos`);
    }
}


function descuentoPreg(carrito,compra){
    if (prompt(`Está por adquirir el servicio ${compra}, ingrese código de descuento, de no disponer de uno deje en blanco (cod: 1234)`) == 1234){
        carrito = descuento(carrito,descuentoNum);
        alert(`Descuento aplicado, total a pagar: $${carrito}`);
        console.log(`Descuento aplicado, total a pagar: $${carrito}`);
    } else {
        alert(`Total a pagar: $${carrito}`);
        console.log(`No se aplicó el descuento, total a pagar: $${carrito}`);
    }
}

compraItem(carrito);
 */



