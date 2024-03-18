import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const CustomLink = ({ data: sub }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive
          ? {
              backgroundColor: "var(--primary-color)",
              color: "var(--white)",
            }
          : {
              color: "var(--default)",
            };
      }}
      to={sub.title.toLowerCase()==="dashboard" ? "/" :"/"+sub.title.toLowerCase().split(" ").join("-")}
      className="flex items-center px-2 py-4 gap-2 mb-2 rounded-xl"
    >
      <Icon icon={sub.icon} className="text-2xl text-gray icon" />
      <span>{sub.title}</span>
    </NavLink>
  );
};

export default CustomLink;
