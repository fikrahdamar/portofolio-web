export interface Skill {
  key: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface SkillsData {
  skills: Skill[];
}
