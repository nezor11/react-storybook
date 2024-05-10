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

interface InfoItem {
  company: string;
  infoUrl: string;
  startDate: string;
  finishDate: string | null;
  jobTitle: string;
  jobDesc: any;
  imageDetails: { url: string } | null;
}

interface InfoSlide {
  workDate: string;
  imageUrl?: string;
  name: string;
  slideSumary?: string;
  type?: string;
  slideTitle?: string;
  slideDesc?: any;
  workDone?: string;
  icons?: {
    name: string;
    width?: number;
    height?: number;
  } | null;
  company?: string;
  infoUrl?: string;
  imageAltText?: string | null;
  imageDetails: { url: string } | null;
  images?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  } | null;
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
  sliderDetails?: InfoSlide[];
}
