import { LucideIcon } from "lucide-react";
import { type } from "os";
import { PortableTextBlock } from "sanity";

export type ProfileType = {
  SociaLinks: any;
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string| any;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type BlogType={
  publishedAt:string,
  _id:string,
  title:string,
  slug:string,
  content:PortableTextBlock[],
}

// export type JobType = {
//   _id: string;
//   name: string;
//   jobTitle: string;
//   logo: string;
//   url: string;
//   description: string;
//   startDate: Date;
//   endDate: Date;
// };

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string|any;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};