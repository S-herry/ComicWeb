const Tab = ({ label, className = "border-orange-300 text-orange-300" }) => {
  return (
    <span
      className={`font-bold border-2 rounded-md text-xs px-1 py-0.5 ${className}`}
    >
      {label}
    </span>
  );
};

export default Tab;
