const boton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', function(e) {
    e.preventDefault();

    let a = parseInt(document.getElementById('numero').value);
    let b = parseInt(document.getElementById('numero2').value);

    if (isNaN(a) || isNaN(b)) {
        resultado.textContent = "Ingrese ambos números.";
        return;
    }

    // Saber cuál es mayor
    let mayor = "";
    if (a > b) {
        mayor = "El número mayor es A (" + a + ")";
    } else if (b > a) {
        mayor = "El número mayor es B (" + b + ")";
    } else {
        mayor = "Ambos números son iguales";
    }

    // Saber si es par o impar
    let parA = (a % 2 === 0) ? "Par" : "Impar";
    let parB = (b % 2 === 0) ? "Par" : "Impar";

    // Mostrar resultados
    resultado.innerHTML = mayor + "<br> " + a + " es " + parA + "<br>" + b + " es " + parB;
});