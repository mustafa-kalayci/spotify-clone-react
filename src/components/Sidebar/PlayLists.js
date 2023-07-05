import React from "react";

function PlayLists() {
  return (
    <nav className="mx-6 mt-2 pt-2 flex-auto border-t border-white border-opacity-20 overflow-auto scrollbar-hide">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-[0.813rem] text-link hover:text-white flex h-8 items-center"
            >
              1.Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PlayLists;
