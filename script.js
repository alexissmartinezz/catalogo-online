document.getElementById("catalogoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const negocio = document.getElementById("negocio").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const producto = document.getElementById("producto").value;
  const precio = document.getElementById("precio").value;

  const catalogo = {
    negocio: negocio,
    whatsapp: whatsapp,
    producto: producto,
    precio: precio
  };

  localStorage.setItem("catalogo", JSON.stringify(catalogo));

  window.location.href = "catalogo.html";
});
