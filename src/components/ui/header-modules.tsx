import type { ReactNode } from "react";
import TitleLabel from "./title-label";

const HeaderModules = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex items-center justify-between pb-10">
      <TitleLabel
        size="text-xl md:text-2xl lg:text-4xl text-left"
        text="Accounting Department"
      />
      {children}
    </div>
  );
};

export default HeaderModules;
