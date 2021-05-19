import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyD3Z5-BcCfZ33lD3e-naf8QxoxPc1fp3_I',
	authDomain: 'casper-chatbot-maxq.firebaseapp.com',
	projectId: 'casper-chatbot-maxq',
	storageBucket: 'casper-chatbot-maxq.appspot.com',
	messagingSenderId: '21559201649',
	appId: '1:21559201649:web:e90991adfa38d398d770d0',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase };
