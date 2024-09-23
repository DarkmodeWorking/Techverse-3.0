export interface Participant {
    _id: string; // Mongoose adds this automatically
    fullName: string;
    email: string;
    phone: number;
    event: string;
    screenShot: string;
    teamMembers: string[]; // Array of strings for team members
  }
  