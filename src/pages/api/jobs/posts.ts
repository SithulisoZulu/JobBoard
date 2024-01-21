
import type { StringFormat } from "firebase/storage";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

interface Job {
  id           : string;
  application  : string;
  center       : string;
  closingDate  : string;
  comment      : string;
  date         : string;
  department   : string;
  duties       : string;
  enquiries    : string;
  note         : string;
  poster       : string
  qualification: string;
  refNo        : string;
  salary       : string;
  title        : string;
  isUrgent     : boolean
}

const db = getFirestore(app);
const JobRef = db.collection("Posts");
const JobSnapshot = await JobRef.get();
export const AllJobs = JobSnapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
})) as Job[];
