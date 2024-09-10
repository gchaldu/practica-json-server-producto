const urlBase = "http://localhost:3000/productos";

//GET
async function getProductos() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching productos:", error);
    throw error;
  }
}

async function getProductos2() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de red:", error);
    } else {
      console.error("Error al obtener productos:", error.message);
    }
    throw error;
  }
}

function getProductosPromise() {
  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}

//POST

function postProducto(producto) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  })
    .then((response) => response)
    .catch((error) => console.log(error));
}
