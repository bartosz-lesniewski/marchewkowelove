import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyDswwK7lUsvZ8KNwPujw3GzcAOWeQFYtj8",
	authDomain: "marchewki-c5212.firebaseapp.com",
	projectId: "marchewki-c5212",
	storageBucket: "marchewki-c5212.appspot.com",
	messagingSenderId: "636795527464",
	appId: "1:636795527464:web:6ff4e58c18b20c5ddd701d",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
