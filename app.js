function numbers(num) {
    var input = document.getElementById("input");
    input.value += num;

}
function erase() {
    var input = document.getElementById("input");
    input.value = " ";
}
function result() {
    var input = document.getElementById("input");
    input.value = eval(input.value);
}
let calculator = document.querySelector("container")


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}

function showNotification() {
    Notification.requestPermission((result) => {
        if (result === "granted") {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification("Saylani Notification", {
                    body: "Notification from Calculator",
                    icon: "./images/calculator-logo.png",
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: "vibration-sample",
                });
            });
        }
    });
}

showNotification();

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
        let list = document.getElementById("list");
        for (var i = 0; i < json.length; i++) {
        }
    });
