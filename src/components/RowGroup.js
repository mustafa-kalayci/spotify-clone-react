import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";
function RowGroup({ title, more = false, items }) {
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
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <NavLink to={more ?? "#"}>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline hover:underline-offset-2">
            {title}
          </h3>
        </NavLink>
        {more && (
          <NavLink
            className={
              "text-xs text-link uppercase hover:underline tracking-wider "
            }
            to={more}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <NavLink
            className={"bg-footer p-4 rounded relative"}
            key={item.id}
            to="/"
          >
            <div className="pt[100%] relative mb-4">
              <img
                src={item.image}
                className={`aspect-square object-cover ${imageStyle(item)}`}
              ></img>
              <button className="flex justify-center absolute w-10 h-10 rounded-full bg-primary bottom-2 right-2 items-center">
                <Icon name="playIcon" size={16} />
              </button>
            </div>
            <h6 className="line-clamp-1"> {item.title}</h6>
            <p className="line-clamp-2 text-link text-xs mt-1">
              {item.description}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default RowGroup;
