import type { ReactNode } from "react";
import TitleLabel from "./title-label";

const HeaderModules = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex items-center justify-between md:pb-4 pb-2 border-b-1 border-gray-300">
      <TitleLabel
        size="text-2xl lg:text-4xl text-left"
        text="Accounting Department"
      />
      {children}
    </div>
  );
};

export default HeaderModules;
