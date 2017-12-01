firebase.initializeApp({
    apiKey: "AIzaSyBt4sDbNkQnRMqrd4qEYwmLAIXkAQDUu_w",
    authDomain: "minforstedb2-e4c28.firebaseapp.com",
    projectId: "minforstedb2-e4c28"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var navnE = document.querySelector(".navn");
var alderE = document.querySelector(".alder");
var epostE = document.querySelector(".epost");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function () {
    db.collection("users").add({
        navn: navnE.value,
        alder:  alderE.value,
        epost:  epostE.value
    });
    navnE.value="";
    alderE.value="";
    epostE.value="";
});

var ref = db.collection("users");

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var document = data.docs;
    for(var x in document){
        listeE.innerHTML += "<li>" + " " + document[x].data().navn + " " + document[x].data().alder + " " + document[x].data().epost + "</li>";
    }
});