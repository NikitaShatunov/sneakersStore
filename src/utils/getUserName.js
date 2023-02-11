import { getDoc, getFirestore } from "firebase/firestore";

import { doc } from "firebase/firestore";

import firebase from "../fireBase";

export const getUserName = async (email) => {
    const db = getFirestore(firebase);
    const userRef = doc(db, "users", email);
    const name = getDoc(userRef);
    try {
        const docSnap = await getDoc(userRef);
        // console.log(docSnap.data().name);
        const NAME = docSnap.data().name
        return NAME
    } catch(error) {
        console.log(error)
    }
    
}