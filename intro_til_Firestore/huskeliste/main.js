firebase.initializeApp({
    apiKey: "AIzaSyCMQM6itp2iU9obT6ca5A9AqewjOiUJokI",
    authDomain: "huskeliste-810bb.firebaseapp.com",
    projectId: "huskeliste-810bb"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var todoE = document.querySelector(".todo");
var knappE = document.querySelector(".knapp");
var listeE = document.querySelector(".liste");

knappE.addEventListener("click", function () {
    db.collection("huskeliste").add({
        todo: todoE.value
    });
todoE.value = "";
});

var ref = db.collection("huskeliste");

ref.onSnapshot(function (data) {
  listeE.innerHTML = "";
  var document = data.docs;
  for(var x in document){
      listeE.innerHTML += "<li>" + document[x].data().todo + "</li>";
  }
});