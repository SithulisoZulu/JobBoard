import { app } from "../../../firebase/server";
import { Timestamp, getFirestore } from "firebase-admin/firestore";

interface Account {
  id            : string;
  userId        : string;
  name          : string;
  surname       : string;
  number        : string;
  country       : string;
  headline      : string;
  postalCode    : string;
  street        : string;
  city          : string;
  relocate      : boolean;
  relocate_Range: string;
  places        : string;
  skills        : Skills[];
  experience    : Experience[];
  education     : Education[];
}

//user Skills interface 
interface Skills {
  id       : string;
  createdAt: string;
  skill    : string;
  years    : number
}

//user experience interface
interface Experience {
  id       : string;
  title    : string;
  company  : string;
  startDate: Timestamp;
  endDate  : Timestamp;
}

//user Education interface
interface Education {
  id       : string;
  title    : string;
  company  : string;
  startDate: Timestamp;
  endDate  : Timestamp;
}

const db = getFirestore(app);
const accountRef = db.collection("UserAccount");
const accountSnapshot = await accountRef.get();

export const Accounts = accountSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
})) as unknown as Account[];

//user Skills
for (const account of Accounts) {
  const qualificationRef = db.collection("UserAccount").doc(account.id).collection("Skills");
  const qualificationSnapshot = await qualificationRef.get();
  account.skills = qualificationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Skills[];
}

//User experience
for (const account of Accounts) {
  const experienceRef = db.collection("UserAccount").doc(account.id).collection("experience");
  const experienceSnapshot = await experienceRef.get();
  account.experience = experienceSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Experience[];
}

//User experience
for (const account of Accounts) {
  const educationRef = db.collection("UserAccount").doc(account.id).collection("education");
  const educationSnapshot = await educationRef.get();
  account.education = educationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Experience[];
}