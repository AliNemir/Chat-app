import * as firebase from "firebase";

const settings = { timestampsInSnapshots: true };

const config = {
  projectId: "reactchat-e7199",
  apiKey: "AIzaSyA7t32PAI0-zwCTd-_EnPWAvJygq_0M4ZE",
  databaseURL: "https://reactchat-e7199-default-rtdb.firebaseio.com",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
