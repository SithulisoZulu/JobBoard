import { a as app } from './_id__9qeDQx3Z.mjs';
import { getFirestore } from 'firebase-admin/firestore';

const db = getFirestore(app);
const JobRef = db.collection("Posts");
const JobSnapshot = await JobRef.get();
const AllJobs = JobSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data()
}));

export { AllJobs };
