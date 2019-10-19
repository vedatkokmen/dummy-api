import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAvBOppm2t1f_IlGqLFTEZzWn8amlt4nWY",
	authDomain: "dummy-api-8ab36.firebaseapp.com",
	databaseURL: "https://dummy-api-8ab36.firebaseio.com",
	projectId: "dummy-api-8ab36",
	storageBucket: "dummy-api-8ab36.appspot.com",
	messagingSenderId: "1079991566758",
	appId: "1:1079991566758:web:e8b7277ec2344d523d4f67"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
