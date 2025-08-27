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


const firebaseConfig = {
    apiKey: "AIzaSyAxgD9GPxUb3UjWLPIiMIsmbdquvsnrX28",
    authDomain: "leads-tracker-app-42d38.firebaseapp.com",
    databaseURL: "https://leads-tracker-app-42d38-default-rtdb.firebaseio.com",
    projectId: "leads-tracker-app-42d38",
    storageBucket: "leads-tracker-app-42d38.firebasestorage.app",
    messagingSenderId: "831225733252",
    appId: "1:831225733252:web:6ad15e346540083a7ae2d1",
    measurementId: "G-TDMTME86HH"
  };


const app = initializeApp(firebaseConfig)
const database = getDatabase()
const referenceInDB = ref(database, "leads")


function render(leads) {
let listItem = ""
for (let i = 0; i < leads.length; i++) {
 listItem += `<li>
 <a href='${leads[i]}'>
 ${leads[i]}
 </a>
 </li>`;
}
ulEl.innerHTML = listItem
}

onValue (referenceInDB, function(snapshot) {
  const snapshotDoesExist = snapshot.exist
  if (snapshotDoesExist) {
    const snapshotValues = snapshot.val()
 const leads = Object.values(snapshotValues)
 render(leads)
  }
})
