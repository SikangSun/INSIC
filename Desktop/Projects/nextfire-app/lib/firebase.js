import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC7mVIvGMvxIsVjiHj2FSZz9aUtXUjNn1I",
    authDomain: "nextfire-d1711.firebaseapp.com",
    projectId: "nextfire-d1711",
    storageBucket: "nextfire-d1711.appspot.com",
    messagingSenderId: "958990176242",
    appId: "1:958990176242:web:edfd007b3eaac4e084256b",
    measurementId: "G-LDFS9VCH08"
  };

  if (!firebase.apps.length) {
    // firebase.initializeApp({});
    firebase.initializeApp(firebaseConfig)    
} 

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const firestore = firebase.firestore();
export const storage = firebase. storage()
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
/*
 * Gets a users/{uid} document with username
 * @param {string} username
 * */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users')
  const query = usersRef.where('username', '==', username).limit(1)
  const userDoc = (await query.get()).docs[0]
  return userDoc
}

/*
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data()
  return{
    ...data, 
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis()
  }
}
