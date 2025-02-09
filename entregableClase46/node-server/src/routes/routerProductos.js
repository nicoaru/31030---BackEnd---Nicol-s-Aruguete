const { ProductosDAO} = require("../model/daos/daos.js")
const {isLogged} = require('../utils/middlewares.js')
const {getProducts, getProductById, saveProducts, updateProductById, deleteProducts, deleteProductById} = require('../service/cotrollers/controllerProductos.js')
const Router = require('koa-router')
const routerProductos = new Router({
    prefix: '/api/productos'
})



// devuelve todos los productos, con opcion de filtro por query
routerProductos.get("/", isLogged, getProducts)

// devuelve el producto con el id indicado
routerProductos.get("/:id", isLogged, getProductById)

// carga uno o varios nuevos productos
routerProductos.post("/", isLogged, saveProducts)

// actualiza el producto con el id indicado
routerProductos.put("/:id", isLogged, updateProductById)

// elimina todos los productos, con opción de filtro por query
routerProductos.delete("/", isLogged, deleteProducts)

// elimina el producto con el id indicado
routerProductos.delete("/:id", isLogged, deleteProductById)



module.exports = {routerProductos}
