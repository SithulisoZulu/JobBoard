import type { Timestamp } from "firebase-admin/firestore";

export interface Skills {
    id       : string;
    createdAt: string;
    skill    : string;
    years    : number
  }

export interface Experience {
  id       : string;
  title    : string;
  company  : string;
  startDate: Timestamp;
  endDate  : Timestamp;
}

//user Education interface
export interface Education {
  id       : string;
  title    : string;
  company  : string;
  startDate: Timestamp;
  endDate  : Timestamp;
}

//user Language interface
export interface Language {
  id       : string;
  title    : string;
  company  : string;
  startDate: Timestamp;
  endDate  : Timestamp;
}

//user licenses interface
export interface License {
  id       : string;
  license  : string;
  expiry   : string;
  month    : string;
  year     : string;
  createdAt: Timestamp;
}

//user certificates interface
export interface Certificate {
  id       : string;
  license  : string;
  expiry   : string;
  month    : string;
  year     : string;
  createdAt: Timestamp;
}

//User Remote interface
export interface Remote {
  id        : string;
  hybrid    : boolean;
  inPerson  : boolean;
  remote    : boolean;
  tempRemote: boolean;
  createdAt : Timestamp;
}

//User Remote interface
export interface Titles {
  id       : string;
  title    : string;
  createdAt: Timestamp;
}

//User Types interface
export interface Types {
  id         : string;
  fullTime   : boolean;
  graduate   : boolean;
  internship : boolean;
  learnership: boolean;
  partTime   : boolean;
  permanent  : boolean;
  tempPerm   : boolean;
  temporary  : boolean;
  createdAt  : Timestamp;
}

//User Types interface
export interface Salary {
  id       : string;
  period   : string;
  salary   : string;
  createdAt: Timestamp;
}

export interface Account {
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
  langues       : Language[];
  licenses      : License[];
  certificates  : Certificate[];
  remote        : Remote[];
  titles        : Titles[];
  types         : Types[];
  salary        : Salary[];
}