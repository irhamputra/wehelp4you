import firebase from "firebase";

const firebaseConfig = {
		apiKey: "AIzaSyC1bsr1cmCH6g75jVhRBD1jxtA6vpFhw0Q",
		authDomain: "wehelp4you-dev.firebaseapp.com",
		databaseURL: "https://wehelp4you-dev.firebaseio.com",
		projectId: "wehelp4you-dev",
		storageBucket: "wehelp4you-dev.appspot.com",
		messagingSenderId: "73883485167",
		appId: "1:73883485167:web:ff5f126b6f8ae575aa2c1a"
};

const init = !firebase.apps.length
		? firebase.initializeApp(firebaseConfig)
		: firebase.app();

const db = () => firebase.firestore();
const storage = () => firebase.storage();
const auth = () => firebase.auth();

export { init as default, db, storage, auth };
