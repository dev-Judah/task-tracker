import {
  BeerOutline,
  NotificationsOutline,
  PersonOutline,
  SearchOutline,
  SettingsOutline,
  ShareSocialOutline,
} from "react-ionicons";

const Navbar = () => {
  return (
    <div className="md:w-[calc(100%-230px)] z-40 bg-black w-[calc(100%-60px)] fixed flex  items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px]  left-[60px] border-b border-slate-300">
      <div className="flex items-center gap-3 cursor-pointer">
        <PersonOutline color={"white"} width={"28px"} height={"28px"} />

        <span className="text-orage-400 text-white font-semibold md:text-lg text-sm whitespace-nowrap">
          Task Bar
        </span>
        <BeerOutline color={"white"} />
      </div>
      <div className="flex items-center gap-2 md:w-[400px] bg-gray-100 rounded-lg px-3 py-[10px]">
        <SearchOutline color={"#999"} />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 outline-none text-[15px]"
        />
      </div>
      <div className="md:flex hidden items-center gap-4">
        <div className="grid place-items-center border border-white rounded-full p-2 cursor-pointer">
          <ShareSocialOutline color={"white"} />
        </div>
        <div className="grid place-items-center border border-white  rounded-full p-2 cursor-pointer">
          <SettingsOutline color={"white"} />
        </div>
        <div className="grid place-items-center border border-white  rounded-full p-2 cursor-pointer">
          <NotificationsOutline color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
