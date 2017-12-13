firebase.initializeApp({
    apiKey: "AIzaSyAcsjUL51j03Bot82DhFyXLNDlVJTUxxWw",
    authDomain: "firestore-daeb3.firebaseapp.com",
    projectId: "firestore-daeb3",
    storageBucket: "firestore-daeb3.appspot.com"
});


var db          =   firebase.firestore();
var navnE       =   document.querySelector(".navn");
var bilnummerE  =   document.querySelector(".bilnummer");
var hastighetE  =   document.querySelector(".hastighet");
var klikkE      =   document.querySelector(".klikk");
var tabellE     =   document.querySelector(".tabell");

klikkE.addEventListener("click", function () {
    db.collection("Register").add({
        navn        :   navnE.value,
        bilnummer   :   bilnummerE.value,
        hastighet   :   hastighetE.value
    });

});

var ordnetmappe =   db.collection("Register").orderBy("hastighet").limit(10);
var tbodyE      =   document.querySelector(".Tdata");

ordnetmappe.onSnapshot(function (data) {
    tabellE.innerHTML   =   "";
    var documenter  =   data.docs;
    for(var x in documenter){
        tabellE.innerHTML += "<tr>" + documenter[x].data().navn + ":  " +  documenter[x].data().bilnummer + ": " +  documenter[x].data().hastighet + "</tr>";
    }
});

ordnetmappe.onSnapshot(function (data) {
    tbodyE.innerHTML   =   "";
    var documenter  =   data.docs;
    for(var x in documenter){
        tbodyE.innerHTML += "<td>" + documenter[x].data().navn + ":  " +  documenter[x].data().bilnummer + ": " +  documenter[x].data().hastighet + "</td>";
    }
});
