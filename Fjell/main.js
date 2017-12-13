firebase.initializeApp({
    apiKey: "AIzaSyAcsjUL51j03Bot82DhFyXLNDlVJTUxxWw",
    authDomain: "firestore-daeb3.firebaseapp.com",
    projectId: "firestore-daeb3",
    storageBucket: "firestore-daeb3.appspot.com"
});



var db = firebase.firestore();
var fjellnavnInput  =   document.querySelector(".fjellnavn");
var mohInput        =   document.querySelector(".moh");
var bildeInput      =   document.querySelector(".fjellbilde");
var sendKnapp       =   document.querySelector(".send");

sendKnapp.addEventListener("click", function () {

    var     storageRe   =   firebase.storage().ref("it-1/fjell");
    var     bilde       =   bildeInput.files[0];
    var     uploadTask  =   storageRe.child(bilde.name).put(bilde);

    uploadTask.on("state_changed",
        function () {},
        function () {},
        function () {
            db.collection("Fjell").add({
                fjellnavn   :   fjellnavnInput.value,
                moh         :   mohInput.value*1,
                fjellbilde  :   uploadTask.snapshot.downloadURL
        });
    }
    );

});


