/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["My", "The", "A"];
  let who = ["dog", "priest", "zombie", "pterodactyl", "cop"];
  let action = ["ate", "stole", "killed", "burned", "threw"];
  let what = [
    "my homework",
    "my food",
    "your sweater",
    "the document",
    "our feelings",
    "my wallet",
    "the shoes",
    "the laptop"
  ];
  let where = [
    "at the kitchen",
    "in the supermarket",
    "on my house",
    "on the street",
    "in front of your home",
    "in the garden",
    "in the office",
    "on the bus"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    where[whereIndx]
  );
};
