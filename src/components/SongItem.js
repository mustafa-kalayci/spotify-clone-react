import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../stores/player";
function SongItem({ item }) {
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
        break;
      case "podcast":
        return "rounded-lg";
      default:
        return "rounded";
    }
  };

  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);

  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };
  return (
    <NavLink className={"bg-footer p-4 rounded relative"} key={item.id} to="/">
      <div className="pt[100%] relative mb-4">
        <img
          src={item.image}
          className={`aspect-square object-cover ${imageStyle(item)}`}
        ></img>
        <button
          onClick={updateCurrent}
          className="flex justify-center absolute w-10 h-10 rounded-full bg-primary bottom-2 right-2 items-center"
        >
          <Icon
            name={current?.id === item.id ? "pause" : "playIcon"}
            size={16}
          />
        </button>
      </div>
      <h6 className="line-clamp-1"> {item.title}</h6>
      <p className="line-clamp-2 text-link text-xs mt-1">{item.description}</p>
    </NavLink>
  );
}

export default SongItem;
