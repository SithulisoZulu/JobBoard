import { app } from "../../../firebase/server";
import { Timestamp, getFirestore } from "firebase-admin/firestore";
import type { Education, Experience, Language, License, Skills, Certificate, Account, Remote, Titles, Types, Salary } from "@interfaces/account";

const db = getFirestore(app);
const accountRef = db.collection("UserAccount");
const accountSnapshot = await accountRef.get();

export const Accounts = accountSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
})) as Account[];

//#region Logic

//user Skills
for (const account of Accounts) {
  const qualificationRef = db.collection("UserAccount").doc(account.id).collection("Skills");
  const qualificationSnapshot = await qualificationRef.get();
  account.skills = qualificationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Skills[];
};

//User experience
for (const account of Accounts) {
  const experienceRef = db.collection("UserAccount").doc(account.id).collection("experience");
  const experienceSnapshot = await experienceRef.get();
  account.experience = experienceSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Experience[];
};

//User experience
for (const account of Accounts) {
  const educationRef = db.collection("UserAccount").doc(account.id).collection("education");
  const educationSnapshot = await educationRef.get();
  account.education = educationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Experience[];
};

//User languages
for (const account of Accounts) {
  const langueRef = db.collection("UserAccount").doc(account.id).collection("Languages");
  const languesSnapshot = await langueRef.get();
  account.langues = languesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Language[];
};

//User licenses
for (const account of Accounts) {
  const licenseRef = db.collection("UserAccount").doc(account.id).collection("Licenses");
  const licensesSnapshot = await licenseRef.get();
  account.licenses = licensesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as License[];
};

//User certificates
for (const account of Accounts) {
  const certificateRef = db.collection("UserAccount").doc(account.id).collection("Certificates");
  const certificatesSnapshot = await certificateRef.get();
  account.certificates = certificatesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Certificate[];
};

//User Remote
for (const account of Accounts) {
  const remoteRef = db.collection("UserAccount").doc(account.id).collection("Remote");
  const remotesSnapshot = await remoteRef.get();
  account.remote = remotesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Remote[];
}

//User Titles
for (const account of Accounts) {
  const titleRef = db.collection("UserAccount").doc(account.id).collection("Titles");
  const titlesSnapshot = await titleRef.get();
  account.titles = titlesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Titles[];
}

//User Types
for (const account of Accounts) {
  const typeRef = db.collection("UserAccount").doc(account.id).collection("Types");
  const typesSnapshot = await typeRef.get();
  account.types = typesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Types[];
}

//User Types
for (const account of Accounts) {
  const salaryRef = db.collection("UserAccount").doc(account.id).collection("Salary");
  const salariesSnapshot = await salaryRef.get();
  account.salary = salariesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Salary[];
}

//#endregion logic