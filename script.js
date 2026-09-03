const formulario = document.getElementById("catalogoForm");

function agregarProducto() {
  const contenedor = document.getElementById("productos");

  const producto = document.createElement("div");

  producto.classList.add("producto");

  producto.innerHTML = `
    <hr>

    <label>Foto del producto</label>
    <input
      type="file"
      class="foto"
      accept="image/*"
    >

    <label>Nombre</label>
    <input
      type="text"
      class="nombreProducto"
      placeholder="Ej: Pantalón Cargo"
      required
    >

    <label>Precio</label>
    <input
      type="number"
      class="precioProducto"
      placeholder="30000"
      required
    >

    <label>Descripción</label>
    <textarea
      class="descripcionProducto"
      placeholder="Descripción del producto"
    ></textarea>
  `;

  contenedor.appendChild(producto);
}


formulario.addEventListener("submit", function(event) {

  event.preventDefault();

  const negocio =
    document.getElementById("negocio").value;

  const whatsapp =
    document.getElementById("whatsapp").value;

  const productos =
    document.querySelectorAll(".producto");

  const listaProductos = [];

  productos.forEach(function(producto) {

    const nombre =
      producto.querySelector(".nombreProducto").value;

    const precio =
      producto.querySelector(".precioProducto").value;

    const descripcion =
      producto.querySelector(".descripcionProducto").value;

    listaProductos.push({
      nombre: nombre,
      precio: precio,
      descripcion: descripcion
    });

  });


  const catalogo = {

    negocio: negocio,

    whatsapp: whatsapp,

    productos: listaProductos

  };


  localStorage.setItem(
    "catalogo",
    JSON.stringify(catalogo)
  );


  window.location.href = "catalogo.html";

});
