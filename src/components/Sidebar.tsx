import {
  AppsOutline,
  GridOutline,
  HomeOutline,
  LogOutOutline,
  // NewspaperOutline,
  // NotificationsOutline,
  // PeopleOutline,
  // PieChartOutline,
} from "react-ionicons";

const Sidebar = () => {
  const navLinks = [
    {
      title: "Home",
      icon: <HomeOutline color="white" width={"22px"} height={"22px"} />,
      active: true,
    },
    {
      title: "Boards",
      icon: <AppsOutline color="white" width={"22px"} height={"22px"} />,
      active: false,
    },
    {
      title: "Projects",
      icon: <GridOutline color="white" width={"22px"} height={"22px"} />,
      active: false,
    },
    // {
    //   title: "Analytics",
    //   icon: <PieChartOutline color="#555" width={"22px"} height={"22px"} />,
    //   active: false,
    // },
    // {
    //   title: "Workflows",
    //   icon: <PeopleOutline color="#555" width={"22px"} height={"22px"} />,
    //   active: false,
    // },
    // {
    //   title: "Notifications",
    //   icon: (
    //     <NotificationsOutline color="#555" width={"22px"} height={"22px"} />
    //   ),
    //   active: false,
    // },
    // {
    //   title: "NewsLetter",
    //   icon: <NewspaperOutline color="#555" width={"22px"} height={"22px"} />,
    //   active: false,
    // },
  ];
  return (
    <div className=" z-10 fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center  md:pl-5 h-[70px] bg-black">
        <span className="text-white mr-2 font-semibold text-2xl md:block hidden">
          Task App{" "}
        </span>
        <AppsOutline color={"white"} width={"30px"} height={"30px"} />
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-black py-5 px-3 relative">
        {navLinks.map((link) => {
          return (
            <div
              key={link.title}
              className={`flex items-center gap-2 w-full rounded-lg hover:border hover:border-white px-2 py-3 cursor-pointer ${
                link.active ? "border border-white" : " bg-transparent"
              }`}
            >
              {link.icon}
              <span className="font-meduim text-[15px] text-white md:block hidden">
                {link.title}
              </span>
            </div>
          );
        })}
        <div className="flex absolute bottom-4 items-center md:justify-start gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-gray-200">
          <LogOutOutline />
          <span className="font-meduim text-[15px] md:block hidden">
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
