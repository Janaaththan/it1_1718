firebase.initializeApp({
    apiKey: "AIzaSyAcsjUL51j03Bot82DhFyXLNDlVJTUxxWw",
    authDomain: "firestore-daeb3.firebaseapp.com",
    databaseURL: "https://firestore-daeb3.firebaseio.com",
    projectId: "firestore-daeb3",
    storageBucket: "firestore-daeb3.appspot.com",
    messagingSenderId: "435046273918"
});

var db =  firebase.firestore();


var pakkerE = document.querySelector(".pakker");
var ref = db.collection("Julekalender");
var query = ref.orderBy("luke", "asc");

query.onSnapshot(function (data) {
        var objekt = data.docs;

        for(var x in objekt){
            pakkerE.innerHTML += '<div class="luke">' + objekt[x].data().luke + '</div>';
        }
});