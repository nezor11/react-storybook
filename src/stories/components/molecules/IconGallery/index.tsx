/**
 * IconGallery is a component that displays a gallery of icons. It dynamically loads and displays icons based on the provided icon data.
 *
 * Props:
 * - iconsData: An optional array of icon data objects. Each object should contain the following properties:
 *   - name: The name of the icon.
 *   - width: The width of the icon.
 *   - height: The height of the icon.
 *
 * Example usage:
 * <IconGallery
 *   iconsData={[
 *     { name: "icon1", width: "24", height: "24" },
 *     { name: "icon2", width: "32", height: "32" }
 *   ]}
 * />
 */

import type { IconProps } from "@/utils/types/icons";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

export interface IconGalleryProps {
  iconsData?: { name: string; width: string; height: string }[];
}

export const IconGallery: React.FC<IconGalleryProps> = ({ iconsData = [] }) => {
  const [icons, setIcons] = useState<React.FC<IconProps>[]>([]);

  useEffect(() => {
    const loadIcons = async () => {
      const iconModules = await import.meta.glob("./Icons/*.tsx", {
        eager: true,
      });
      const availableIconNames = Object.keys(iconModules).map((path) => {
        return path.split("/").pop()?.split(".")[0] || "";
      });

      let iconsToShow: { name: string; width: string; height: string }[] = [];
      if (iconsData.length > 0) {
        iconsToShow = iconsData.filter((iconData) =>
          availableIconNames.includes(iconData.name)
        );
      } else {
        iconsToShow = availableIconNames.map((name) => ({
          class: "",
          name,
          width: "1em",
          height: "1em",
        }));
      }

      const importedIcons = iconsToShow.map(({ name }) => {
        const Icon = React.lazy(() => import(`./Icons/${name}.tsx`));
        return Icon;
      });

      setIcons(importedIcons);
    };

    loadIcons();
  }, [iconsData]);

  return (
    <div className="flex items-center flex-wrap justify-center">
      {icons.map((Icon) => (
        <Icon
          className={iconsData[nanoid()]?.name}
          key={nanoid()}
          width={iconsData[nanoid()]?.width || "1em"}
          height={iconsData[nanoid()]?.height || "1em"}
        />
      ))}
    </div>
  );
};
