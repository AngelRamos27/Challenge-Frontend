import { type ReactNode } from "react";
import TitleLabel from "../../../../components/ui/title-label";

const LabelInputItem = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-2 h-auto">
      <TitleLabel text={text} size="md:text-lg text-md font-semibold" />
      {children}
    </div>
  );
};

export default LabelInputItem;
