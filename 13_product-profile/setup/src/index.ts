let objProducto: any = {
  name: "manzana",
  precio: 3,
  IGV: 0.18,
  getTotal: function () {
    return this.precio + this.precio * this.IGV;
  },
};

console.log("Producto");
console.log("========");
console.log("Nombre :", objProducto.name);
console.log("precio :", objProducto.precio);
console.log("IGV    :", objProducto.IGV);
console.log("Total  :", objProducto.getTotal());
