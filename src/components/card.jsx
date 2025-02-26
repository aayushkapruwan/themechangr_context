export default function Card() {
  return (
    <div className="relative  ease-in-out  h-[270px] group w-[200px] overflow-hidden rounded-3xl dark:bg-amber-100 bg-slate-400  hover:shadow-xl transition duration-300 hover:shadow-black/60">
      <div className="">
        <img
          src="https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg"
          className=""
          alt=""
        />
      </div>
      <div className="mt-2 ml-2 text-[13px] font-bold text-gray-700">
        <p>1 day ago</p>
      </div>
      <div className="mt-1 group-hover:text-blue-700 ml-2 text-[14px] font-bold text-black">
        <p>Most Popular Nature Photography</p>
      </div>
      <div className="absolute bottom-2 left-2">
        <div className="flex items-center justify-between">
          <p className="ml-1 text-[13px]">posted by ayush</p>
          <div className="flex">
            <i className="fa-brands fa-gratipay ml-3"></i>
            <i className="fa-solid fa-message ml-3"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
