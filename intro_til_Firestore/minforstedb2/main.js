firebase.initializeApp({
    apiKey: "AIzaSyBt4sDbNkQnRMqrd4qEYwmLAIXkAQDUu_w",
    authDomain: "minforstedb2-e4c28.firebaseapp.com",
    projectId: "minforstedb2-e4c28"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector(".tittel")
var textE = document.querySelector(".tekst")
var knappE = document.querySelector(".knapp")
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function () {
    db.collection("mappe").add({
    tittel: tittelE.value,
    tekst:  textE.value
    });
    tittel.value = "";
    tekst.value = "";
});

var ref = db.collection("mappe");

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var document = data.docs;
    for(var x in document){
        listeE.innerHTML += "<li>" + document[x].data().tittel + " " + document[x].data().tekst + "</li>";
    }
});