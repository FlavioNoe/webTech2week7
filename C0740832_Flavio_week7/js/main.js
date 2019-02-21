var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};

var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
};

var counties = [
    "Belknap",
    "Strafford",
    "Carolll",
    "Rick"
];

var cities = [
    "Toronto",
    "Missisauga",
    "New York",
    "Orlando",
    "Sao Paulo"
];



var string1 = "This is a small string.";
var string2 = "This is a greater string.";
var string3 = "Is this the thing called mont Everes?";
var string4 = "This is the Sherman on the Mont.";

var regex = /this/;

console.log("------START /this/--------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));
console.log("------end--------");

regex = /this/i;
console.log("------START /this/i;--------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));

regex = /^this/i;
console.log("------START /^this/i;-------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));

regex = /ever/i;
console.log("------START /ever/i;--------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));

regex = /ever.$/i;
console.log("------START /ever.$/i;--------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));

regex = /ever\.$/i;
console.log("------START /ever\.$/i;--------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));

regex = /Moun.$/i;
console.log("------START /Moun.$/i;--------");
console.log("String1: " + regex.test(string1));
console.log("String2: " + regex.test(string2));
console.log("String3: " + regex.test(string3));
console.log("String4: " + regex.test(string4));