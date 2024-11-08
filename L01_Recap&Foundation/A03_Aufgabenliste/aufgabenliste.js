"use strict";
var Shoppinglist;
(function (Shoppinglist) {
    document.addEventListener("DOMContentLoaded", () => {
        const taskInput = document.getElementById("task");
        const timeInput = document.getElementById("time");
        const dateInput = document.getElementById("date");
        const commentsInput = document.getElementById("comments");
        const checkInput = document.getElementById("check");
        if (taskInput) {
            taskInput.addEventListener("check", () => {
                console.log("Aufgabe wurde hinzugefügt");
            });
        }
        if (timeInput) {
            timeInput.addEventListener("change", () => {
                console.log("Uhrzeit wurde verändert");
            });
        }
        if (dateInput) {
            dateInput.addEventListener("change", () => {
                console.log("Datum wurde verändert");
            });
        }
        if (commentsInput) {
            commentsInput.addEventListener("input", () => {
                console.log("Kommentar wurde hinzugefügt");
            });
        }
        if (checkInput) {
            checkInput.addEventListener("change", () => {
                console.log("Die Aufgabe soll erfüllt werden");
            });
        }
    });
})(Shoppinglist || (Shoppinglist = {}));
//# sourceMappingURL=aufgabenliste.js.map