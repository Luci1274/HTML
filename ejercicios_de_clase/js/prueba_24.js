async function consultar_clima() {
    const ciudad = document.getElementById("selector_ciudad").value
    const tarjeta = document.getElementById("tarjeta")
    if(ciudad != "") {
        const api_key = "a49f2089297d7216a6e25354544789ce";
        const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}&units=metric&lang=es`;
    
        try {
            const response = await fetch(url_api);
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                tarjeta.innerHTML = 
                `<h3> ${data.name}</h3>
                <p>Temperatura: ${data.main.temp}°</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[1]}@2x.png" alt= clima>`
            }else {
                tarjeta.innerHTML ="Hubo un error"
            }

        }
        catch (err) {
            tarjeta.innerHTML = "Hubo en error. " + err
        }
    }else {
        tarjeta.innerHTML = "Seleccione una ciudad"
    }
}