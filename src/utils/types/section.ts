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

export interface Section {
  _type: any;
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
