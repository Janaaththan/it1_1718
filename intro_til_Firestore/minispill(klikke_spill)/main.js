firebase.initializeApp({
    apiKey: "AIzaSyCOx4eqU63mZ-Lvr2bR2AMQ11UULK2QN44",
    authDomain: "klikkespill1.firebaseapp.com",
    projectId: "klikkespill1"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnE   = document.querySelector(".navn");
var startE  = document.querySelector(".start");
var klikkE  = document.querySelector(".klikk");
var klikkverdiE = document.querySelector(".klikkverdi");
var listeE = document.querySelector(".poengliste");

var antKlikk    = 0;

klikkE.addEventListener("click", function () {
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk;
});

startE.addEventListener("click", function () {
    antKlikk = 0;
    klikkverdiE.innerHTML = antKlikk;
    setTimeout(function () {
        db.collection("spill").add({
            navn: navnE.value,
            poeng: antKlikk
        });
        alert(klikkverdiE.innerHTML);
    }, 3000);
});

var mappe = db.collection("spill");
var ordermappe = mappe.orderBy("poeng", "desc").limit(20);

ordermappe.onSnapshot(function(data){
    listeE.innerHTML = "";
    var documenter = data.docs;
    for(var x in documenter){
        listeE.innerHTML += "<li>" + documenter[x].data().navn + ":  " +  documenter[x].data().poeng + "</li>";}
});