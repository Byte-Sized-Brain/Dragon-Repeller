let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory=["stick"];
const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStats=document.querySelector("#monsterStats");
const monsterNameText=document.querySelector("#monsterName");
const monsterHealthText=document.querySelector("#monsterHealth");

// initialize buttons
button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

// functions
function goStore(){
  button1.innertext="Buy 10 health (10 gold)";
  button2.innertext="Buy weapon (30 gold)";
  button3.innertext="Go to town square";
  button1.onclick=buyHealth;
  button2.onclick=buyWeapon;
  button3.onclick=goTown;
  text.innertext="You enter the store";
}
function goCave(){
  
}
function fightDragon(){
  console.log("Fighting dragon.");
}
function buyHealth(){
  
}
function buyWeapon(){
  
}
function goTown(){
  
}