const salidaEL = document.getElementById("salida");
const agregar = document.getElementById("agregar");
const obtener = document.getElementById("obtener");
const eliminar = document.getElementById("eliminar");
const modificar = document.getElementById("modificar");

const idproducto = document.getElementById("idproducto")
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");


const salida = (mensaje) => {
    if (salidaEL ) {
        salidaEL.textContent = JSON.stringify(mensaje, null, 2);

    }
};

const db = await new Promise (
    (resolve, reject) => {
        const req = indexedDB.open("producto", 1);
        req.onupgradeneeded = () =>
            req.result.createObjectStore(
                "producto", {
                    keyPath:"id", autoIncrement:true,
                }
            );
            req.onsuccess = () => resolve (req.result);
            req.onerror = () => reject(req.error);
    }
);  

const store = (modo) => 
    db.transaction("producto", modo).objectStore("producto");

const pet = (producto) =>
    new Promise ((resolve, reject) => {
        const req = store("readwrite").put(producto);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });

const getAll = () => new Promise((resolve, reject) => {
        const req = store("readonly").getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });

const dell = (id) => new Promise((resolve,  reject) => {
    const req = store("readwrite").delete(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
})


agregar.onclick = async() =>
    await pet ({
        nombre: nombre.value,
        precio: +precio.value,
    });

obtener.onclick = async() =>
    salida(await getAll());

eliminar.onclick = async() =>
    await dell(+idproducto.value);