"use strict";
var zufallsgedicht;
(function (zufallsgedicht) {
    let subject = ["Artemis", "Hades", "Zagreus", "Cerberus", "Persephone", "Poseidon"];
    let predicate = ["jagt", "hasst", "kuschelt", "füttert", "spielt mit", "sucht nach"];
    let object = ["zwei Wölfe", "Hunde", "Katzen", "Schneeleoparden", "große Elefanten", "Robben"];
    for (let i = subject.length; i >= 1; i--) {
        let wort = console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumber1 = Math.floor(Math.random() * subject.length);
        let randomNumber2 = Math.floor(Math.random() * predicate.length);
        let randomNumber3 = Math.floor(Math.random() * object.length);
        verse += subject.splice(randomNumber1, 1)[0] + " " + predicate.splice(randomNumber2, 1)[0] + " " + object.splice(randomNumber3, 1)[0];
        return verse;
        console.log(verse);
    }
})(zufallsgedicht || (zufallsgedicht = {}));
//# sourceMappingURL=poet.js.map