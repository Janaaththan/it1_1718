firebase.initializeApp({
    apiKey: "AIzaSyBt4sDbNkQnRMqrd4qEYwmLAIXkAQDUu_w",
    authDomain: "minforstedb2-e4c28.firebaseapp.com",
    projectId: "minforstedb2-e4c28",
    storageBucket: "minforstedb2-e4c28.appspot.com"
});

var db          =   firebase.firestore();
var fornavnE    =   document.querySelector(".fornavn");
var etternavnE  =   document.querySelector(".etternavn");
var telefonE    =   document.querySelector(".telefon");
var epostE      =   document.querySelector(".epost");
var s_textE     =   document.querySelector(".s_text");
var klikkE      =   document.querySelector(".klikk");

klikkE.addEventListener("click", function () {
    db.collection("Skjema").add({
        fornavn     :   fornavnE.value,
        etternavn   :   etternavnE.value,
        telefon      :   telefonE.value,
        epost       :   epostE.value,
        s_text      :   s_textE.value
    });

});

