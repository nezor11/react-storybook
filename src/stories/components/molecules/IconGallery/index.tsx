import { IconProps } from "@/utils/types/icons";
import React from "react";

const importAll = (r: Record<string, any>) => {
  return Object.keys(r).reduce<{ [key: string]: React.FC<IconProps> }>(
    (acc, key) => {
      const iconName = key.replace(/^\.\/Icons\/(.*).tsx$/, "$1");
      const iconModule = r[key];
      acc[iconName] = iconModule.default;
      return acc;
    },
    {}
  );
};

const iconsContext = importAll(require.context("./Icons", false, /\.tsx$/));

interface IconGalleryProps {
  showAll?: boolean;
  customIcons?: { icon: React.FC<IconProps> }[];
}

interface IconItemProps {
  name: string;
  children: React.ReactNode;
}

const IconItem: React.FC<IconItemProps> = ({ name, children }) => (
  <div>
    <p>{name}</p>
    {children}
  </div>
);

export const IconGallery: React.FC<IconGalleryProps> = ({
  showAll = true,
  customIcons = [],
}) => {
  return (
    <div>
      {showAll &&
        Object.entries(icons).map(([name, Icon]) => (
          <IconItem key={name} name={name}>
            <Icon />
          </IconItem>
        ))}
      {!showAll &&
        customIcons.map(({ icon: Icon }, index) => (
          <IconItem key={index} name={`custom-${index}`}>
            <Icon />
          </IconItem>
        ))}
    </div>
  );
};
