const fs = require("fs");
//const fs2 = require('fs').promises
//let timestamp = Date.now();

class Productos {
  constuctor() {
    this.productos = [
      {
        id : 1 ,
        name: 'tulio',
        subname: 'braulio'
      },
      {
        id : 2,
        name: 'tulio',
        subname: 'braulio'
      },
      {
        id : 2,
        name: 'tulio',
        subname: 'braulio'
      }
     
    ];
    this.idSecuenciado = 0;
  }

  
   traerProductos() {
     const productos = this.productos;
      console.log(productos)
      //anda la concha de tu madre
    return productos;
  }
  
//   async incorporarProducto() {
//     const productos = this.productos;
//     const productoNuevo = {
//       id: this.idSecuenciado++,
//       nombre: productos.nombre,
//       timestamp: timestamp,
//       descripcion: productos.descripcion,
//       codigo: productos.codigo,
//       url: productos.url,
//       precio: productos.precio,
//       stock: productos.stock,
//     };
//     const agregado = productos.push(productoNuevo);
//     const prodParse = JSON.stringify(productos)
//     await fs.promises.writeFile('productos.txt', prodParse)
//     return agregado;
//   }
//   //No se como hacer el PUT

//  async borrarProducto(id) {
//     const productos = this.productos;
//     const eliminar = productos.filter((producto) => producto.id !== id);
//     const prodParse = JSON.stringify(productos)
//     await fs.promises.writeFile('productos.txt', prodParse)
//     return eliminar;
//   }
//   async actualizarProducto(id) {
//     const productos = this.productos;
//     productos.forEach((prod) => {
//       if (prod.id == id) {
//         productoActualizado = {
//           id: id,
//           nombre: prod.nombre,
//           timestamp: timestamp,
//           descripcion: prod.descripcion,
//           codigo: prod.codigo,
//           url: prod.url,
//           precio: prod.precio,
//           stock: prod.stock,
//         };
//       }})
//       productos.push(productoActualizado);
//       const prodParse = JSON.stringify(productos);
//       await fs2.writeFile('productos.txt', prodParse)
//       return productos
//     ;
//   }

//  async CrearArchivoSiNoExiste() {
//      {
//         let file;

//         try {
//             file = await fs.promises.readFile('productos.txt', "utf-8");
//             return JSON.parse(file);
//         } catch (error) {
//             if (error.code === "ENOENT") {
//                 let emptyArray = [];
//                 await fs.promises.writeFile('productos.txt', JSON.stringify(emptyArray));
//                 return emptyArray;
//             } else {
//                 console.error(error);
//             }
//         }
//     }
//   }
  // traerProducto(id) {
  //   const productos = this.productos;
  //   const buscar = productos.find((producto) => producto.id == parseInt(id));
    
  //   return buscar;
  // }

   
}


module.exports = Productos;

