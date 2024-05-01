const productos = [
        {id:"1", nombre:"Risotto a la carbonara", imagen: "https://knoweats.com/cdn/shop/files/risotto-carbonara-knoweats.jpg?v=1694076265&width=990" , categoria:"Principales", precio:6000, stock:10},
        {id:"2", nombre:"Lasaña de pollo",imagen: "https://knoweats.com/cdn/shop/files/lasanya-pollo-knoweats.jpg?v=1692567286&width=990" , categoria:"Principales", precio:7000, stock:5},
        {id:"3", nombre:"Brownie de chocolate",imagen: "https://knoweats.com/cdn/shop/files/brownie-chocolate-frutosrojos-knoweats.jpg?v=1691765656&width=990" ,categoria:"Postres", precio:3100, stock:3},
        {id:"4", nombre:"Arroz con leche",imagen: "https://knoweats.com/cdn/shop/files/arroz-leche-vegano-knoweats.jpg?v=1691765554&width=990", categoria:"Postres", precio:3000, stock:7},
        {id:"5", nombre:"Fideos con verduras y salsa de tomate" ,imagen: "https://knoweats.com/cdn/shop/files/macarrones-berenjena-setas-tomate-veganos-knoweats.jpg?v=1693166469&width=990" ,categoria:"Veganos", precio:6200, stock:8}, 
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductosPorId = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        },500)
    })
}

export const getProductosPorCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoria))
        }, 500)
    })
}