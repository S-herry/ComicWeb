import { useEffect, useContext, useState } from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UsersContent } from "../context/user/UserContent";
import GetUrl from "../URL/Get.json";
import useGetFetch from "../hook/useGetFetch";
import Icon from "../components/common/Icon";
import UserDataEdit from "../components/User/UserData";
import Keep from "../components/User/Keep";
import Message from "../components/User/Message";
import Browse from "../components/User/Browse";

const tabList = ["帳戶", "作品收藏", "瀏覽紀錄", "我的留言"];

const User = () => {
  const { userData, loggedIn } = useContext(UsersContent);
  const [userDate, setUserDate] = useGetFetch(null);
  useEffect(() => {
    setUserDate({ url: GetUrl.user });
  }, []);

  useEffect(() => {
    if (userData != null && !userData.user) {
      window.location.href = "http://localhost:9000/";
    }
  }, [userData, loggedIn]);

  const [activeTab, setActiveTab] = useState("我的留言");

  return (
    <section className="flex flex-col justify-center items-center">
      <div className=" bg-white/20 mt-10 rounded-lg w-2/3 p-6 ">
        <ul className="flex flex-wrap -mb-px text-md font-medium text-center text-gray-500 dark:text-gray-400">
          {tabList.map((tab, index) => (
            <li key={index} className="me-2">
              <Link
                to="#"
                className={`${
                  activeTab === tab ? "text-white" : "hover:text-white"
                } inline-flex items-center justify-center p-4 rounded-t-lg dark:hover:text-gray-300`}
                onClick={() => setActiveTab(tab)}
              >
                <Icon icon={faCircleUser} size="xl" className="me-2" />
                {tab}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-6 bg-gray-100  text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full  ">
          <div className=" flex flex-col justify-center bg-white/30 shadow-md rounded-lg  shadow-white  ">
            {activeTab === "帳戶" && <UserDataEdit userDate={userDate} />}
            {activeTab === "作品收藏" && <Keep />}
            {activeTab === "瀏覽紀錄" && <Message />}
            {activeTab === "我的留言" && <Browse />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
