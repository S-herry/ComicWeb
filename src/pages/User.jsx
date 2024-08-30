import { useEffect } from "react";
import GetUrl from "../URL/Get.json";
import useGetFetch from "../hook/useGetFetch";
const User = () => {
  const [userDate, setUserDate, error] = useGetFetch(null);
  useEffect(() => {
    setUserDate({ url: GetUrl.user });
  }, []);

  return (
    <div className=" bg-white h-52 ">
      {userDate != null ? userDate.email : "null"}
    </div>
  );
};

export default User;
