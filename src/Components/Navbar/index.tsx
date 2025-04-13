import {
  IoPersonOutline,
  IoChevronDown,
  IoSearchOutline,
  IoShareSocialOutline,
  IoSettingsOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-white z-50">
      <div className="flex items-center gap-3 cursor-pointer">
        <IoPersonOutline className="text-orange-400 w-7 h-7" />
        <span className="text-red-400 font-semibold md:text-lg text-sm whitespace-nowrap">
          Khulyso Dev
        </span>
        <IoChevronDown className="text-orange-400 w-4 h-4" />
      </div>

      <div className="flex items-center gap-2 md:w-[800px] w-[180px] bg-gray-100 rounded-lg px-3 py-2">
        <IoSearchOutline className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="w-full bg-gray-100 outline-none text-[15px]"
        />
      </div>

      <div className="md:flex hidden items-center gap-4">
        {[IoShareSocialOutline, IoSettingsOutline, IoNotificationsOutline].map(
          (Icon, idx) => (
            <div
              key={idx}
              className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 transition"
            >
              <Icon className="text-gray-700" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;


