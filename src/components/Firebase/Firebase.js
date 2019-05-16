import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  
    this.db = app.firestore();
    this.storage = app.storage();
    this.auth = app.auth();
    this.auth.useDeviceLanguage();
  }

  incrementBy = increment => this.firestore.FieldValue.increment(increment);

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  }
}

export default Firebase;