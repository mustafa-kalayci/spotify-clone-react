import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";
function Auth() {
  const user = {
    name: "Mustafa Kalaycı",
    avatar: "https://avatars.githubusercontent.com/u/87584628?v=4",
  };
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl hover:bg-active pr-2 ${
              open ? "bg-active" : "bg-black"
            }`}
          >
            <img
              src={user.avatar}
              className="rounded-full w-8 h-8 mr-2 p-px"
            ></img>
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <Icon name="downIcon" size={16} />
            </span>
          </Menu.Button>
          <Menu.Items className=" flex flex-col absolute top-full right-0 w-48 bg-active rounded translate-y-2 ">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-10"
                  } `}
                  href=""
                >
                  Account
                  <Icon name="external" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm ${
                    active && "bg-white bg-opacity-10"
                  } `}
                  href="/account-settings"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm ${
                    active && "bg-white bg-opacity-20"
                  } `}
                  href="/account-settings"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
