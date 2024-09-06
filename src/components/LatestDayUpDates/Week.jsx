import { Link } from "react-router-dom";
import WeekCard from "./WeekCard";
const Week = ({ Weeks = [] }) => {
  return (
    <div className="text-center flex flex-wrap justify-center items-center">
      {Weeks != null
        ? Weeks.map((item, index) => (
            <WeekCard
              key={"weekCard" + index}
              title={item.comicName}
              description={item.ComicLists[0].description}
              isOngoing={item.is_completed}
              category={item.category}
              image={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default Week;
