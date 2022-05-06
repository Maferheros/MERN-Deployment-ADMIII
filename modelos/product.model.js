const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        titulo: String,
        precio: Number,
        descripcion: String
    });

const Producto = mongoose.model ( 'productos', ProductSchema);
module.exports = Producto;