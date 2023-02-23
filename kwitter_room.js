const firebaseConfig = { apiKey: "AIzaSyBbhikUP6b_bP0r-4ClykRoxQIIrGZ0bpU", authDomain: "deliverybd-1b122.firebaseapp.com", databaseURL: "https://deliverybd-1b122-default-rtdb.firebaseio.com", projectId: "deliverybd-1b122", storageBucket: "deliverybd-1b122.appspot.com", messagingSenderId: "425366124520", appId: "1:425366124520:web:71fe94d775ac6e82bed65d" };

firebase.initializeApp(firebaseConfig)

var niick = localStorage.getItem("Nicknames")
document.getElementById("kcin").innerHTML = "Welcome " + niick + "!"

function addRoom()
{
  var text = document.getElementById("addRoom").value
  localStorage.setItem("txt",text);
  firebase.database().ref("/").child(text).update({propose: "value"});

    
    window.location = "kwitterPage.html";
}

function redirectToRoomName(nameRoom) {
  localStorage.setItem("nameRom",nameRoom)
  window.location = "kwitterPage.html"
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function logout() {
  localStorage.removeItem("Nicknames")
  window.location = "index.html"
}