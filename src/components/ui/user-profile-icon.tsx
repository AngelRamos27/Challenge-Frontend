import { CAvatar } from "@coreui/react";
import PersonIcon from "../icons/person-icon";

export const UserCellIcon = (props: { value: string }) => {
  return (
    <div className="flex items-center h-full gap-2 w-full p-0.5">
      <CAvatar color="secondary" textColor="white">
        <PersonIcon className="w-5 h-5" />
      </CAvatar>
      {props.value ?? "No name provided"}
    </div>
  );
};

export default UserCellIcon;
