function mostrarPrecio() {
    //Obtiene que tipo de curso es y en base a eso muestra el valor del mismo.
    var select = document.getElementById("curso");
    var selectedValue = select.options[select.selectedIndex].value;
    var precio = 0;
    document.getElementById("cotizacion").style.visibility = 'visible';
    switch (selectedValue) {
        case '0':
            document.getElementById("cotizacion").style.visibility = 'hidden';
            break;
        case '1':
            precio = 500;
            break;
        case '2':
            precio = 750;
            break;
        case '3':
            precio = 1000;
            break;
        default:
            break;
    }
    document.getElementById("precio").innerHTML = '$' + precio;

}