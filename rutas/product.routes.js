const express = require( 'express' );
const ProductRouter = express.Router();
const Productcontroller = require( './../controladores/product.controller');

ProductRouter.post ('/new', Productcontroller.crearProducto);
ProductRouter.get( '', Productcontroller.getAllProductos);
ProductRouter.get( '/:id', Productcontroller.getOneProducto);
ProductRouter.put( '/:id/edit', Productcontroller.updateProducto);
ProductRouter.delete ('/delete/:id', Productcontroller.deleteProducto);

module.exports = ProductRouter;