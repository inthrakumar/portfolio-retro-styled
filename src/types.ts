type UserProfile = {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
  reputation: number;
  github: string;
  twitter?: string;
  linkedIn?: string;
  website?: string[];
  country: string;
  company?: string | null;
  school: string;
  skillTags: string[];
  about: string;
};

interface Submission {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
}

type SubmissionsData = {
  count: number;
  submission: Submission[];
};

export type { UserProfile, SubmissionsData };
