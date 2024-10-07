import { useEffect, useState } from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Icon from "../components/common/Icon";
import UserDataEdit from "../components/User/UserData";
import Keep from "../components/User/Keep";
import Message from "../components/User/Message";
import Browse from "../components/User/Browse";
import { useSelector } from "react-redux";
const tabList = ["帳戶", "作品收藏", "瀏覽紀錄", "我的留言"];

const User = () => {
  const user = useSelector((state) => state.user.user);
  const isLogin = useSelector((state) => state.user.isLogin);
  const [activeTab, setActiveTab] = useState("帳戶");

  return (
    <>
      {user && user.user ? (
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
                {activeTab === "帳戶" && <UserDataEdit userDate={user} />}
                {activeTab === "作品收藏" && <Keep />}
                {activeTab === "瀏覽紀錄" && <Message />}
                {activeTab === "我的留言" && <Browse />}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className=" bg-white p-5 text-center h-full">
          <p>請登入會員</p>
        </div>
      )}
    </>
  );
};

export default User;
