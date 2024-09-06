import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Icon = ({ icon, size, className, style, ...props }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      className={className}
      style={style}
      {...props}
    />
  );
};

export default Icon;
