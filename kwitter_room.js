// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDsqMd8LLAw6T6fZTwlOPsKlC-BTHEseTc",
      authDomain: "class-test-53505.firebaseapp.com",
      projectId: "class-test-53505",
      storageBucket: "class-test-53505.appspot.com",
      messagingSenderId: "97379764214",
      appId: "1:97379764214:web:4f2deee6721da3d0b769d7"
    };
    
    // Initialize Firebase
  //  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}