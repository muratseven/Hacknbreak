import firebase from 'firebase'; // 4.8.1

let mekanConst;
class Fire {
  constructor() {
    this.init();
    this.observeAuth();

  }

  init = () => {
      firebase.initializeApp({
        apiKey: "AIzaSyDW5kKAaDskSrHa-IvfXTsxC12feW68YPI",
        authDomain: "hacknbreak-7.firebaseapp.com",
        databaseURL: "https://hacknbreak-7.firebaseio.com",
        projectId: "hacknbreak-7",
        storageBucket: "hacknbreak-7.appspot.com",
        messagingSenderId: "1001591225533",
        appId: "1:1001591225533:web:090432bbfd5e4186640bd4",
        measurementId: "G-6WQBVQDJW9"
    });
  }


  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  ref(mekan) {
    if(mekan !== '')
      mekanConst = mekan;

    return firebase.database().ref(mekanConst);
  }

  parse = (snapshot) => {
    console.log('gelen data');
    console.log(snapshot.val());
    const { messageTime, messageText, messageUser } = snapshot.val();
    const { key: _id } = snapshot;
    console.log(_id);

    const message = {
      _id,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      text: messageText,
      user: messageUser,
    };
    return message;

  };

  on = (callback, mekan) =>
    this.ref(mekan)
    .limitToLast(20)
    .on('child_added', snapshot => {
      callback(this.parse(snapshot))
    });


  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    console.log(messages);

    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        messageText: text,
        messageType: 'text',
        messageUser: "murat222",
        messageUserId: this.uid,
        messageTime: firebase.database.ServerValue.TIMESTAMP,
      };
      console.log(message);
      this.append(message);
    }
  };

  append = message => this.ref('').push(message);

  // close the connection to the Backend
  off() {
    this.ref('').off();
  }
}

export default new Fire();
