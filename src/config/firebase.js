import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYqtBYUYsNGrIzp1cYBQ6WFBDldUR30E4",
    authDomain: "fitness-website-74540.firebaseapp.com",
    projectId: "fitness-website-74540",
    storageBucket: "fitness-website-74540.appspot.com",
    messagingSenderId: "202320148224",
    appId: "1:202320148224:web:8c9a01d90f02badf38e5e5"
}

const fire = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


const firebaseDocList = async () => {

    var documents = await db.collection("Exercises").get()

    var exercisesName = documents.docs.map(doc => doc.data().Name);
    var exercisesTime = documents.docs.map(doc => doc.data().Time);

    return {exercisesName, exercisesTime};

}

export default fire

export {
    firebaseDocList,
    db,
}