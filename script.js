document.getElementById("Convert").onclick = function () {
    let km = document.getElementById("km").value;

    if (km === "" || isNaN(km)) {
        document.getElementById("result").innerHTML = "Please enter a valid number!";
        document.getElementById("result").style.color = "red";
        return;
    }

    let miles = km * 0.621371;

    document.getElementById("result").innerHTML = 
        km + " km = " + miles.toFixed(2) + " miles";

    document.getElementById("result").style.color = "purple";
};

document.getElementById("clear").onclick = function () {
    document.getElementById("km").value = "";
    document.getElementById("result").innerHTML = "";
};