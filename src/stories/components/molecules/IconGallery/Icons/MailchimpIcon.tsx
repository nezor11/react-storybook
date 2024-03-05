import { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const MailchimpIcon: React.FC<IconProps> = forwardRef<SVGSVGElement, IconProps>(
  ({ name, desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      fill="none"
      viewBox="0 0 32 32"
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc ? <desc id={desc}>{desc}</desc> : null}
      {name ? <title id={name}>{name}</title> : null}
      <path
        fill="#FDDD4C"
        d="M16 2C8.278 2 2 8.278 2 16s6.278 14 14 14 14-6.278 14-14S23.722 2 16 2Z"
      />
      <path
        fill="#000"
        d="M9.869 19.65c-.306-.463.464-1.165.15-1.754-.18-.34-.475-.551-.83-.595-.34-.043-.69.081-.913.325-.353.383-.408.906-.34 1.09.025.068.065.087.093.09.192.026.3-.467.366-.57a.66.66 0 0 1 .887-.182c.545.352.073.922.113 1.403.04.469.332.657.594.677.255.01.433-.132.478-.235.108-.247-.346.133-.598-.249ZM21.258 15.396c-.143-.02-.3-.02-.462 0-.123-.156-.234-.408-.296-.702-.111-.524-.1-.903.21-.953.31-.049.46.268.57.792.075.352.06.675-.022.863ZM17.865 15.707c.012.119.016.239.013.35.3.017.512.16.568.25.03.046.018.077.008.09-.03.049-.097.042-.236.026a2.468 2.468 0 0 0-.39-.02c-.073.228-.293.25-.448.081-.107.033-.32.168-.382.021 0-.073.075-.179.213-.272a2.03 2.03 0 0 1-.194-.572c-.196.035-.372.09-.51.133-.065.02-.322.136-.352.005-.02-.09.12-.239.269-.346.166-.118.35-.201.54-.25-.003-.284.069-.482.275-.515.256-.04.415.157.524.521.31.086.618.3.755.52.053.085.063.15.029.186-.086.088-.56-.17-.682-.208ZM19.898 16.984c.196.095.412.057.482-.084.07-.141-.032-.332-.228-.427-.196-.095-.412-.058-.482.083-.07.141.032.333.228.428ZM20.863 16.282c.004-.216.136-.388.295-.386.16.004.285.18.282.396-.004.216-.136.388-.295.385-.16-.002-.285-.179-.282-.395Z"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M25.178 18.928c.004.011 0-.004 0 0 .32 0 .822.363.822 1.239 0 .871-.366 1.859-.453 2.078-1.32 3.122-4.47 4.86-8.222 4.75-3.498-.102-6.482-1.925-7.787-4.895-.79.001-1.604-.342-2.222-.883-.653-.57-1.055-1.308-1.133-2.078-.061-.599.013-1.156.204-1.643l-.734-.613C2.298 14.086 12.793 2.572 16.15 5.462a636.16 636.16 0 0 1 1.145 1.106c1.619-.678 5.955-1.97 5.96 1.037.002.998-.643 2.162-1.676 3.219 1.194 1.092.879 2.645 1.07 4.069l.414.113c.79.219 1.352.51 1.627.796.275.284.412.56.461.884.046.26.04.721-.308 1.236.125.333.24.664.337 1.006Zm-15.7 2.362a1.84 1.84 0 0 0 .348-.024c1.226-.206 1.547-1.521 1.345-2.812-.228-1.458-1.227-1.972-1.905-2.008a2.095 2.095 0 0 0-.508.035c-1.21.241-1.894 1.257-1.759 2.577.122 1.195 1.346 2.202 2.48 2.232Zm-2.74-4.45c.406-.583 1.07-1.004 1.823-1.149.958-2.54 2.56-4.88 4.679-6.492 1.572-1.295 3.268-2.223 3.268-2.223s-.913-1.046-1.189-1.123c-1.697-.452-5.362 2.043-7.702 5.34-.947 1.333-2.302 3.695-1.654 4.91.08.15.532.537.774.736Zm13.758 3.867a.066.066 0 0 1-.04.065s-1.363.626-3.529-.035c.078.65.865.895 1.416.984 2.683.456 5.192-1.059 5.757-1.44.097-.066-.001.103-.019.127-.69.88-2.55 1.9-4.968 1.9-1.055 0-2.109-.367-2.496-.93-.6-.875-.03-2.151.971-2.019 1.692.189 3.426.047 4.992-.67 1.365-.626 1.88-1.314 1.803-1.872-.12-.864-1.4-.999-2.048-1.209-.282-.092-.421-.165-.453-.688-.014-.229-.054-1.025-.069-1.355-.025-.577-.096-1.366-.591-1.691a.837.837 0 0 0-.424-.134c-.12-.006-.192.01-.23.02a.374.374 0 0 1-.022.004c-.267.045-.431.18-.625.34-.01.01-.022.019-.034.028-.618.509-1.14.592-1.72.567-.182-.008-.368-.025-.565-.045-.18-.017-.37-.036-.572-.047l-.246-.014c-.973-.05-2.016.78-2.19 1.957-.193 1.314.542 2.119 1.02 2.642.117.13.22.242.288.34.045.06.096.143.096.223 0 .095-.063.17-.124.235-.992 1.007-1.31 2.607-.935 3.94.047.167.106.326.176.479.877 2.023 3.599 2.966 6.257 2.108 1.863-.6 3.51-2.052 3.845-4.055.08-.521-.038-.723-.197-.82-.17-.103-.372-.067-.372-.067s-.092-.623-.353-1.19c-.775.603-1.773 1.028-2.532 1.243-1.217.344-2.532.479-3.79.316-.51-.066-.852-.11-.999.36 1.677.607 3.453.348 3.453.348a.062.062 0 0 1 .069.055ZM15.655 8.94c-.917.463-1.942 1.288-2.774 2.237-.029.034.015.08.05.055.72-.517 1.704-.996 2.995-1.307 1.445-.348 2.837-.202 3.687-.01.043.01.07-.062.032-.084-.562-.31-1.424-.522-2.035-.526a.037.037 0 0 1-.03-.059c.106-.14.251-.279.384-.379.029-.023.011-.07-.026-.068-.761.046-2.499.839-2.492.81.044-.211.184-.49.257-.62.018-.031-.016-.065-.048-.05Z"
        clipRule="evenodd"
      />
    </svg>
  )
);

const MemoizedIcon: React.FC<IconProps> = memo(MailchimpIcon);

export default MemoizedIcon;
