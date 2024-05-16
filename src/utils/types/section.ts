// Section.ts
interface IconDetails {
  name: string;
  width?: number;
  height?: number;
}

export interface ContactDetails {
  title: string;
  phone: string;
  email: string;
  address: string;
}

export interface ImageDetails {
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
  };
}
export interface FrameImageProps {
  image?: string;
  metadata?: {
    dimensions: {
      width: number;
      height: number;
    };
  };
}

interface JobDescription {
  description: string;
}

interface InfoItem {
  company: string;
  infoUrl: string;
  startDate: string;
  finishDate: string | null;
  jobTitle: string;
  jobDesc: JobDescription;
  imageDetails: { url: string } | null;
}

export interface Section {
  _type: string;
  _key: string;
  icons?: { iconDetails: IconDetails }[];
  contactDetails?: ContactDetails;
  imageDetails?: ImageDetails;
  name?: string;
  jobDescHeader?: string;
  titleSection?: string;
  subtitleSection?: string;
  sections?: InfoItem[];
  iconTitleDetails?: {
    name: string;
    width?: number;
    height?: number;
  } | null;
}

export interface SlideDetails {
  slideImage?: {
    src: string;
    width: number;
    height: number;
    alt?: string | null;
  } | null;
  slideDesc?: any;
  workDone?: string[];
  name: string;
  company: string;
  type: string;
  workDate: string;
  slideTitle: string;
  _id: string;
  infoUrl: string;
  slideSummary?: string | null;
  icons?: {
    icon: {
      name: string;
      width?: number;
      height?: number;
    };
  }[];
  images?:
    | {
        src: string;
        width: number;
        height: number;
        alt?: string;
      }[]
    | null;
}

export interface InfoSlide {
  slideDetails: SlideDetails;
}

export interface Slide {
  _type: string;
  _key: string;
  icons?: { iconDetails: IconDetails }[];
  name?: string;
  titleSection?: string;
  iconTitleDetails?: {
    name: string;
    width?: number;
    height?: number;
  } | null;
  sliderDetails?: {
    name: string;
    slides: InfoSlide[];
  } | null;
  slides?: InfoSlide[];
}
