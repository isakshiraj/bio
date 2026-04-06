function calculate() {

    let gasAvailability = parseFloat(document.getElementById("gasAvailability").value);
    let hours = parseFloat(document.getElementById("hours").value);
    let ch4 = parseFloat(document.getElementById("ch4").value);
    let co2 = parseFloat(document.getElementById("co2").value);
    let temp = parseFloat(document.getElementById("temp").value);

    let ch4Frac = ch4 / 100;
    let co2Frac = co2 / 100;

    let molecularWeight = (ch4Frac * 16) + (co2Frac * 44);

    let T = temp + 273;

    let density = (1 * molecularWeight) / (0.0821 * T);

    let gasPerHour = gasAvailability / hours;

    let massFlow = gasPerHour * density;

    document.getElementById("molecularWeight").innerText = molecularWeight.toFixed(2);
    document.getElementById("density").innerText = density.toFixed(2);
    document.getElementById("massFlow").innerText = massFlow.toFixed(2);

}