import { type ReactNode } from "react";
import TitleLabel from "../../../../components/ui/title-label";

const LabelInputItem = ({
  children,
  text,
  className,
}: {
  children: ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`w-full flex flex-col gap-2 h-auto ${className}`}>
      <div className="w-full flex items-start">
        <TitleLabel text={text} size="md:text-lg text-md font-semibold" />
      </div>
      {children}
    </div>
  );
};

export default LabelInputItem;
