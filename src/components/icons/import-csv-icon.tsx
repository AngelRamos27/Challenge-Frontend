import type { SVGProps } from "react";

const ImportCsvIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6 2a2 2 0 0 0-2 2v7h2V4h7V2H6zm9 0v5a1 1 0 0 0 1 1h5v12a2 2 0 0 1-2 2h-7v2h7a4 4 0 0 0 4-4V7.5a2 2 0 0 0-.59-1.41l-4.5-4.5A2 2 0 0 0 15.5 1H15a2 2 0 0 0-2 2z" />
      <path d="M11 12V8l-5 5 5 5v-4h7v-2h-7z" />
    </svg>
  );
};
export default ImportCsvIcon;
