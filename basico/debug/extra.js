let mensaje = "Debugeando gggggg!"

function saludar(){
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}