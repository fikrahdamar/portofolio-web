export interface Portfolio {
  title: string;
  desc: string;
  role: string[];
  image?: string[];
  publicationLink?: string;
  githubLink: string;
}

export interface PortfolioData {
  Portfolio: Portfolio[];
}
