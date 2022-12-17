import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./firebase"

const handleSubmit = (formName: string, rsvp: string, foodRestrictions: Array<string>) => {
    const ref = collection(firestore, "rsvp")

    let data = {
        formName: formName,
        rsvp: rsvp,
        foodRestrictions: foodRestrictions,
        timestamp: new Date()
    }

    try {
        addDoc(ref, data)
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmit