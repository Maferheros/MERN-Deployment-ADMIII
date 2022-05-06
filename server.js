const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require( './config/config');
const ProductRouter = require ('./rutas/product.routes');
app.use(express.json() );
app.use( '/api/product', ProductRouter);
app.listen(8080, () => {
    console.log("Listening at Port 8080")
});
