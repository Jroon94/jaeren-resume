export type Project = {
  name: string;
  url: string;
  client: string;
  description: string;
};

export type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  companyDescription: string;
  duration: string;
  description: string;
  projects?: Project[];
  highlights?: string[];
};

export type PersonalProject = {
  title: string;
  url: string;
  companyDescription: string;
  duration: string;
  description: string;
  highlights: string[];
};

export type Skill = {
  name: string;
  subtitle: string;
  icon: string;
};

export type PersonalData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  jobTitle: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: Experience[];
  personalProjects: PersonalProject[];
  skills: Skill[];
};