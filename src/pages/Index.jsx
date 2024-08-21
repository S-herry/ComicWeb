import Carousel from "../components/Carousel/Carousel";
import Typewriter from "../components/Marquee/Typewriter";
import HolidayBookList from "../components/Recommended/BookList";
const Index = () => {
  return (
    <>
      <div className="w-full  bg-stone-900 px-5 py-10 mb-8">
        <Carousel />
      </div>
      <div className=" flex justify-center items-center mt-8 ">
        <Typewriter />
      </div>
      <div className=" flex justify-center items-center mt-8 ">
        <HolidayBookList />
      </div>
    </>
  );
};

export default Index;

/* <li className="inline-block w-3/5">
          <Link href="#">
            <img
              src={image.data.鬼滅之刃}
              alt=""
              draggable="false"
              className="object-fill h-96 w-full"
            />
          </Link>
        </li>
        <li className="inline-block w-1/5 relative">
          <div className="bg-black absolute w-full h-full opacity-30"></div>
          <Link href="#">
            <img
              src={image.data.初戀}
              alt=""
              draggable="false"
              className="object-fill h-72"
            />
          </Link>
        </li> */
