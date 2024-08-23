import { Link } from "react-router-dom";
import WeekCard from "./WeekCard";
const Week = () => {
  return (
    <div className="text-center flex flex-wrap justify-center items-center">
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
      <WeekCard />
    </div>
  );
};

export default Week;
