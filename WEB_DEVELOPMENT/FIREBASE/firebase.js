<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjhpGZUY7OMXsFYiUtTROIYulCtMysCj4",
    authDomain: "ctutorial-3bb0a.firebaseapp.com",
    projectId: "ctutorial-3bb0a",
    storageBucket: "ctutorial-3bb0a.appspot.com",
    messagingSenderId: "469483294295",
    appId: "1:469483294295:web:67ee5d1f9026d454271d12"

    };

// Initialize Firebase
    const app = initializeApp(firebaseConfig);

//get ref to database services
    const db=getDatabase(app);
    document.getElementById("submit").addEventListener('click, function(e'){
        e.preventDefault();

        set(ref(db, 'user/' + document.getElementById("username").value),{
            username:document.getElementById("username").value,
            email:document.getElementById("email").value,
            PhoneNumber:document.getElementById("phone").value
    
        });

        alert("Login Successful !");
    })
</script>