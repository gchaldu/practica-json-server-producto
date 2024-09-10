export class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  get getNombre() {
    return this.nombre;
  }

  get getId() {
    return this.id;
  }

  get getPrecio() {
    return this.precio;
  }
}
