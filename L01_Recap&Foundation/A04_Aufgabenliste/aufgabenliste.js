"use strict";
var Shoppinglist;
(function (Shoppinglist) {
    document.addEventListener("DOMContentLoaded", () => {
        const taskInput = document.getElementById("task");
        const timeInput = document.getElementById("time");
        const dateInput = document.getElementById("date");
        const commentsInput = document.getElementById("comments");
        const checkInput = document.getElementById("check");
        const checkTask = document.getElementById("addTask");
        if (taskInput) {
            taskInput.addEventListener("check", () => {
                console.log("Aufgabe wurde abeschlossen");
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
        if (checkTask) {
            checkTask.addEventListener("addTask", () => {
                console.log("Neue Aufgabe wird erstellt");
            });
        }
    });
})(Shoppinglist || (Shoppinglist = {}));
//# sourceMappingURL=aufgabenliste.js.map