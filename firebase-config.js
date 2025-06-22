// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCS23KVrFtpJ3AGufGOfqASg3bhywy-Y74",
  authDomain: "new-project-e229e.firebaseapp.com",
  databaseURL: "https://new-project-e229e-default-rtdb.firebaseio.com",
  projectId: "new-project-e229e",
  storageBucket: "new-project-e229e.appspot.com",
  messagingSenderId: "174517118266",
  appId: "1:174517118266:web:cd55e2524739a299d95c03",
  measurementId: "G-Z56E4HVHLB"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const counterRef = database.ref('visits');

counterRef.transaction(function (currentValue) {
  return (currentValue || 0) + 1;
});

counterRef.on('value', (snapshot) => {
  document.getElementById('visitorCounter').textContent = snapshot.val();
});
