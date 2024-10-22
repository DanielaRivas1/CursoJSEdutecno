class Producto{
    constructor(id, nombre, precio){
        this.idProducto = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [
    {id: 1, nombre: "HARINA", precio: 1150},
    {id: 2, nombre: "GALLETAS", precio: 700},
    {id: 3, nombre: "POLLO", precio: 4590},
    {id: 4, nombre: "LECHE", precio: 1200},
    {id: 5, nombre: "SOPA", precio: 1300}
]

const carrito = [];

    let mostrarProductos = document.getElementById('tarjetas');
    mostrarProductos.innerHTML = "";
    productos.forEach(producto => {
        mostrarProductos.innerHTML += 
        `<div class="col">
        <div class="card" style="width: 18rem;" id="card">
        <img src="https://cdn.pixabay.com/photo/2015/11/10/14/26/box-1036976_1280.png" class="card-img-top" alt="Producto">
        <div class="card-body"><p class="card-text text-center">${producto.nombre}</p>
        <br><div class="card-text text-center">$${producto.precio}</p>
        </div>
        </div>
        </div>`;
        });

    let solicitarProductos = document.getElementById('agregar');
        
    solicitarProductos.addEventListener('click', ()=>{
        mostrarProductos.innerHTML= '';
        let seleccion = prompt("Bienvenido!. ¿Desea agregar productos a su carrito?");
        
        while (seleccion != "Si" && seleccion != "No" && seleccion != "SI" && seleccion != "NO" && seleccion != "si" && seleccion != "no") {
            alert("Por favor ingrese una opción válida (Si o No)");
            seleccion = prompt("¿Desea agregar productos a su carrito?");
        }//fin while
        
                if (seleccion == "Si" || seleccion ==  "SI" || seleccion ==  "si") {
                let todosLosProductos = productos.map(
                    (producto) => producto.nombre + " " + "$" + producto.precio);
                    alert("Lista de productos\n\n" + todosLosProductos.join("\n"));
                } 
                else if (seleccion == "No" || seleccion ==  "NO" || seleccion ==  "no") {
                    alert("Gracias! Hasta luego!");
                    
                }//fin if
        
                while (seleccion == "Si" || seleccion ==  "SI" || seleccion ==  "si") {
                let producto = prompt("A continuación escribe el nombre del producto que deseas agregar");
                let precio = 0;
        
                    if (producto == "HARINA" || "Harina" || "harina" ||
                        producto == "GALLETAS" || "Galletas" || "galletas" ||
                        producto == "POLLO" || "Pollo" || "pollo" ||
                        producto == "LECHE" || "Leche" || "leche" ||
                        producto == "SOPA" || "Sopa" || "sopa"){
                        
                        switch (producto) {
                            case "HARINA":
                            precio = 1150;
                            break;
                            case "GALLETAS":
                            precio = 700;
                            break;
                            case "POLLO":
                            precio = 4590;
                            break;
                            case "LECHE":
                            precio = 1200;
                            break;
                            case "SOPA":
                            precio = 1300;
                            break;
                            default:
                            break;
                        }//fin del switch
                        let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"));
        
                        carrito.push({ producto, unidades, precio });
                        console.log(carrito);
        
                    } else {
                        alert("Lo siento, ese producto no está disponible");
                    }//fin del if de los productos
        
                seleccion = prompt("¿Desea adquirir otro producto?");
                    
                while (seleccion == "No" || seleccion ==  "NO") {
                    alert("Gracias por su compra");
                    break;
                    }
                }//cierra el while del producto a agregar


        // productos.forEach(producto => {
        //     mostrarProductos.innerHTML += `<li>${producto.nombre} - $${producto.precio} </li>`;
        // });


        carrito.forEach((carritoFinal) => {
            console.log(`"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, 
                "total a pagar por producto:" ${carritoFinal.unidades * carritoFinal.precio}`);
            });
            // break;
            if (seleccion == "Si" || seleccion ==  "SI" || seleccion ==  "si") {
                const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
                console.log(`el total a pagar por su compra es de:  ${total}`)    
            }
            

    })


    // let seleccion = prompt("Bienvenido!. ¿Desea agregar productos a su carrito?");
