const productos = [
       {
      id:"1",
      nombre: "Mochile Hombre para notebook",
      precio: 109.95,
      categoria: "ACCESORIOS",
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      stock: 20
    },
    {
      id:"2",
      nombre: "Polera casual hombre",
      precio: 22.3,
      categoria: "HOMBRE",
      img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      stock:40
    },
    {
      id:"3",
      nombre: "Chaqueta de algodon hombre",
      precio: 55.99,
      categoria: "HOMBRE",
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      stock:100
    },
    {
      id:"4",
      nombre: "Polera casual slim fit hombre",
      precio: 15.99,
      categoria: "HOMBRE",
      img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      stock:60
    },
    {
      id:"5",
      nombre:"Bracelete mujer oro y plata",
      precio: 695,
      categoria: "ACCESORIOS",
      img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      stock:5
    },
    {
      id:"6",
      nombre: "Anillo de plata solido ",
      precio: 168,
      categoria: "ACCESORIOS",
      img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      stock:20
    },
    {
      id:"7",
      nombre: "Corona de oro blanco Mujer",
      precio: 9.99,
      categoria: "ACCESORIOS",
      img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      stock:10
    },
    {
      id:"8",
      nombre: "Anillos de mujer oro doble",
      precio: 10.99,
      categoria: "ACCESORIOS",
      img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      stock:15
    },
    {
      id: "9",
      nombre: "Chaqueta de lluvia y cortavientos Mujer",
      precio: 64,
      categoria: "MUJER",
      img: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      stock:2
    },
    {
      id: "10",
      nombre: "Chaqueta de cuero Mujer",
      precio: 109,
      categoria: "MUJER",
      img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      stock:5
    }
]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductoById = (IdProducto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === IdProducto));
    }, 2000);
  });
};

export const getProductoByCategoria = (IdCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === IdCategoria));
    }, 2000);
  });
};
