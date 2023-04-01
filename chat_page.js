const firebaseConfig = {
    apiKey: "AIzaSyAJbeIxBPv5LmxrkWvL_YIP6WRXCc000q8",
    authDomain: "kwitter-31e8f.firebaseapp.com",
    databaseURL: "https://kwitter-31e8f-default-rtdb.firebaseio.com",
    projectId: "kwitter-31e8f",
    storageBucket: "kwitter-31e8f.appspot.com",
    messagingSenderId: "972985446750",
    appId: "1:972985446750:web:2c74ff144a74c3fb535fcf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  
  //End code
        } });  }); }
  getData();