import { Link } from "react-router-dom";
const linkStyle = "no-underline text-white text-sm hover:text-green-400";
const ComicTags = ({ actionTab, hidden, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`bg-stone-800  py-8 absolute w-full z-20 ${
        hidden ? "" : "hidden"
      } `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className=" max-w-screen-xl mx-auto flex ">
        <div className="  h-80 pb-8 mr-8 ">
          <h5 className="text-stone-400 font-bold pb-2">全部作品</h5>
          <ul className="flex flex-col flex-wrap  h-full">
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                劇情
              </Link>
            </li>
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                幽默搞笑
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                愛情
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                奇幻
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
          </ul>
        </div>
        <div className="  h-80 pb-8 mr-8 ">
          <h5 className="text-stone-400 font-bold pb-2">排行榜</h5>
          <ul className="flex flex-col flex-wrap  h-full">
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                劇情
              </Link>
            </li>
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                幽默搞笑
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                愛情
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                奇幻
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
          </ul>
        </div>
        <div className="  h-80 pb-8 mr-8 ">
          <h5 className="text-stone-400 font-bold pb-2">最新消息</h5>
          <ul className="flex flex-col flex-wrap  h-full">
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                劇情
              </Link>
            </li>
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                幽默搞笑
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                愛情
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                奇幻
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2 pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
            <li className="pb-2  pr-16">
              <Link to="#" className={`${linkStyle}`}>
                恐怖
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComicTags;
