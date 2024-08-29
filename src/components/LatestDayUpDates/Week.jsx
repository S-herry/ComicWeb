import { Link } from "react-router-dom";
import WeekCard from "./WeekCard";
const Week = ({ Weeks = [] }) => {
  return (
    <div className="text-center flex flex-wrap justify-center items-center">
      {Weeks.length > 0
        ? Weeks.map((item, index) => (
            <WeekCard
              key={"weekCard" + index}
              title={item.title}
              description={item.description}
              isOngoing={item.isOngoing}
              category={item.category}
              image={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default Week;
