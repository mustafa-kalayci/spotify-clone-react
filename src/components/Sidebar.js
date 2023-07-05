import React from "react";
import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "../Icons";
import PlayLists from "./Sidebar/PlayLists";
import DownloadApp from "./Sidebar/DownloadApp";
function SideBar() {
  return (
    <aside className="w-60 pt-6 flex flex-col  flex-shrink-0 bg-black scrollbar-hide ">
      <a href="/" className="mb-5 px-6">
        <img src={logo} className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex text-link items-center text-sm font-semibold hover:text-white "
            >
              <span className="w-6 h-6 flex items-center justify-center bg-white mr-4 rounded-sm text-black ">
                <Icon name="plusIcon" size={12} />
              </span>
              Çalma listesi oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex text-link items-center text-sm font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center text-white rounded-sm mr-4 bg-gradient-to-br  from-purple-700 to-blue-300">
                <Icon name="heartFilledIcon" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <PlayLists />
      <DownloadApp />
    </aside>
  );
}

export default SideBar;
