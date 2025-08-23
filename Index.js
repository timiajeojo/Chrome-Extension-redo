import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  
import { getDatabase,
ref,
push,
onValue,
remove } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
