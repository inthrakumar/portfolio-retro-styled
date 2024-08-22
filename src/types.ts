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

interface SubmissionStats {
  difficulty: string;
  count: number;
  submissions: number;
}

type NoofQns = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissionNum: SubmissionStats[];
  acSubmissionNum: SubmissionStats[];
};
export type { UserProfile, SubmissionsData, NoofQns };
