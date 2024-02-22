import { IconProps } from "@/utils/types/icons";
import React, { useEffect, useState } from "react";

export interface IconGalleryProps {
  iconsData?: { name: string; width: string; height: string }[];
}

export const IconGallery: React.FC<IconGalleryProps> = ({ iconsData = [] }) => {
  const [icons, setIcons] = useState<React.FC<IconProps>[]>([]);

  useEffect(() => {
    const loadIcons = async () => {
      // @ts-ignore
      const iconModules = await import.meta.globEager("./Icons/*.tsx");
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
          name,
          width: "1em",
          height: "1em",
        }));
      }

      // Importar dinámicamente los íconos seleccionados
      const importedIcons = iconsToShow.map(({ name }) => {
        const Icon = React.lazy(() => import(`./Icons/${name}.tsx`));
        return Icon;
      });

      setIcons(importedIcons);
    };

    loadIcons();
  }, [iconsData]);

  return (
    <div className="flex">
      {icons.map((Icon, index) => (
        <div className={Icon.name} key={index}>
          <Icon
            width={iconsData[index]?.width || "1em"}
            height={iconsData[index]?.height || "1em"}
          />
        </div>
      ))}
    </div>
  );
};
