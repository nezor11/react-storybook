import type { IconProps } from "@/utils/types/icons";
import React, { forwardRef, memo } from "react";

const JQueryIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ name = "jQuery", desc, width, height, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1.193 0.5 25.193 24.582"
      width={width ? width : "1em"}
      height={height ? height : "1em"}
      ref={ref}
      aria-labelledby={name}
      aria-describedby={desc}
      {...props}
    >
      {desc ? <desc id={desc}>{desc}</desc> : null}
      <title id={name}>{name}</title>
      <path
        fill="#1266a9"
        d="M1.406 16.346c.023.052.049.1.077.148.013.028.031.057.047.083.026.052.054.102.081.152l.157.264c.029.049.057.097.09.145.055.094.12.186.177.28.026.039.05.078.079.117.11.171.21.313.317.451.076.103.152.204.234.305.027.038.057.076.085.114l.221.268c.027.031.054.067.083.099.098.118.202.232.306.348 0 .002.003.004.005.007.129.162.268.306.42.434l.004.004c.08.082.16.163.245.243l.101.097c.111.104.222.207.339.307.002 0 .003.002.005.003l.057.05c.102.089.205.177.31.259l.125.105c.085.068.173.132.26.199l.136.104c.093.07.192.138.287.206.035.025.07.05.106.073l.029.023.281.184.12.08c.147.094.293.182.439.27.042.021.084.044.123.068.108.062.22.125.329.182.06.034.122.063.184.094.075.042.153.083.233.125.022.007.04.014.058.024l.004-.004c.033.015.064.031.096.047.12.06.245.117.375.173.024.01.05.02.076.034.144.063.288.123.437.181.034.01.07.027.105.04.135.051.274.103.412.152l.05.018c.153.052.304.102.46.149.036.01.073.023.111.033.159.048.313.105.474.135 10.273 1.863 13.258-6.146 13.258-6.146-2.508 3.25-6.959 4.107-11.174 3.153-.156-.036-.312-.086-.47-.132a11.753 11.753 0 0 1-.663-.209l.095.029-.062-.024c-.136-.046-.267-.097-.4-.148a1.53 1.53 0 0 0-.099-.038l-.011-.003c-.147-.059-.29-.119-.432-.182-.031-.01-.057-.024-.088-.036a13.656 13.656 0 0 1-.5-.23l.138.061a1.483 1.483 0 0 1-.106-.052c-.094-.044-.188-.094-.28-.141a3.784 3.784 0 0 1-.207-.106l.02.01c-.113-.06-.226-.125-.34-.186-.034-.024-.073-.044-.112-.066a14.058 14.058 0 0 1-.502-.306l.063.038a2.042 2.042 0 0 1-.124-.083l.006.004a6.039 6.039 0 0 1-.316-.208c-.034-.022-.065-.046-.1-.07a8.47 8.47 0 0 1-.318-.228l.024.017c-.042-.034-.087-.066-.132-.099-.088-.069-.177-.135-.265-.207l-.118-.094a10.16 10.16 0 0 1-.37-.309l-.001-.001-.347-.315-.1-.094c-.082-.083-.166-.162-.25-.244l-.097-.1a9.008 9.008 0 0 1-.303-.315l-.006-.007-.017-.014a17.877 17.877 0 0 1-.313-.353c-.027-.031-.052-.064-.08-.097l-.227-.275a13.75 13.75 0 0 1-.3-.391l-.04-.056C2.152 11.79 1.306 7.407 3.177 3.811L1.525 5.9C-.6 8.939-.337 12.891 1.288 16.118c.037.079.078.153.118.228z"
      />
      <path d="m8.563 11.968-.011-.016-.009-.012z" />
      <path
        fill="#1266a9"
        d="m9.681 13.28.09.09c.114.11.231.217.35.324l.015.013c.12.106.255.217.394.325l.021.016c.034.023.063.05.096.073.14.108.281.211.428.314l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.131.317.196.017.007.032.016.048.023.09.055.188.108.282.156.033.02.065.035.099.054.067.033.133.068.197.102l.032.014c.135.066.273.128.408.189.034.013.063.024.092.038.111.048.224.094.335.136.05.017.097.037.144.052.102.038.209.073.31.108l.14.045c.146.045.294.104.449.128C22.164 17.181 24 11.104 24 11.104c-1.653 2.367-4.852 3.495-8.261 2.614a8.215 8.215 0 0 1-.506-.145l.057.016c-.048-.013-.09-.028-.136-.042-.104-.036-.211-.071-.312-.108l-.144-.054c-.112-.045-.226-.087-.335-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.191l-.206-.107-.119-.06c-.092-.048-.177-.098-.265-.149a.558.558 0 0 1-.065-.036l.003.001c-.106-.066-.216-.13-.318-.197-.034-.019-.065-.042-.097-.062l-.208-.135c-.144-.1-.285-.207-.428-.311-.032-.029-.063-.053-.094-.079-1.499-1.173-2.681-2.776-3.242-4.591-.591-1.887-.461-4.003.56-5.72L8.12 3.341c-1.541 2.201-1.454 5.143-.254 7.471.219.43.441.793.686 1.139.228.326.48.708.784.97.108.123.224.24.345.359z"
      />
      <path d="m2.436 17.992-.004-.006-.007-.009zm4.158-.744.01.007.002.003z" />
      <path
        fill="#1266a9"
        d="M13.666 1.427c-.909 1.327-.996 2.975-.37 4.438.665 1.554 2.024 2.774 3.608 3.352.065.025.128.046.195.07l.088.027c.092.029.185.063.28.084 4.381.841 5.567-2.238 5.886-2.691-1.043 1.49-2.792 1.848-4.938 1.329a4.753 4.753 0 0 1-.55-.17l.033.011a6.196 6.196 0 0 1-.656-.27l.038.017c-.41-.2-.762-.416-1.089-.664-1.918-1.45-3.104-4.211-1.852-6.46z"
      />
    </svg>
  )
);

const MemoizedJQueryIcon = memo(JQueryIcon);

export default MemoizedJQueryIcon;
