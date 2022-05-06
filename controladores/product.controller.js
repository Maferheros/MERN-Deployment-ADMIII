const Producto = require( './../modelos/product.model');

const crearProducto = (request, response) => {
    const { titulo , precio, descripcion } = request.body;
    if( !titulo || !precio || !descripcion ){
        response.statusMessage = "Para crear un nuevo producto es necesario enviar titulo , precio y descripcion" 
        return response.status(406).end();
    }
    else {
        const nuevoProducto = {
            titulo , precio, descripcion
        };
        Producto.create(nuevoProducto)
            .then( productoNuevo => {
                return response.status (201).json (productoNuevo);
            })
            .catch ( err => {
                response.statusMessage = "Hubo error al ejecturar el create" + err; 
                return response.status (400).end();
            });
    }
}

const getAllProductos = (request, response) => {
    Producto.find() 
        .then ( listaProductos => {
            return response.status(200).json(listaProductos);
        })
        .catch ( err => {
            response.statusMessage = "Error al ejecutar el find"
            return response.status(400).end();
        });
}

const getOneProducto = (request, response) => {
    Producto.findOne({_id:request.params.id})
        .then(( productoEncontrado ) =>{
            return response.status(200).json(productoEncontrado);
        })
        .catch ( err => {
            response.statusMessage = "Hubo error al ejecturar el findOne " + id + err; 
            return response.status(400).end();
        });
}

const updateProducto = (request, response) => {
    Producto.findOneAndUpdate ( {_id: request.params.id}, request.body, {new:true})
        .then ((datoProducto) => {
            return response.status(202).json(datoProducto);
        })
        .catch ( err => {
            response.statusMessage = "Hubo error al ejecturar el update" + err; 
            return response.status(400).end();
        }); 
}

const deleteProducto = (request, response) => {
    Producto.deleteOne ({_id: request.params.id})
        .then(() => {
            return response.status(204).end();
        })
        .catch ( err=> {
            response.statusMessage = "Hubo error al ejecturar el delete" + err; 
            return response.status(400).end();
        });
}

const Productcontroller = {
    crearProducto,
    getAllProductos,
    getOneProducto,
    updateProducto,
    deleteProducto
};

module.exports = Productcontroller;