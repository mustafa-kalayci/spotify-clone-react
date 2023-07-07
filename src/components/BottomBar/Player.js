import React, { useState } from "react";
import { Icon } from "../../Icons";
import { Range, getTrackBackground } from "react-range";

function Player() {
  const [values, setValues] = useState([50]);
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  return (
    <div className="flex px-4 justify-between items-center h-full ">
      <div className="min-w-[11.25rem] w-[30%] ">div sol</div>
      <div className="flex flex-col items-center max-w-[45.125rem] w-[40%]">
        <div className="flex items-center ga-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]">
            <Icon size={16} name="playIcon" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playNext" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16} />
          </button>
        </div>
        <div className="w-full">
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="w-full h-7 flex group"
                style={{
                  ...props.style,
                }}
              >
                <div
                  ref={props.ref}
                  className="h-1 w-full rounded-md self-center"
                  style={{
                    height: "4px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: values,
                      colors: ["#1db954", "#535353"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className="h-3 w-3 rounded-full  bg-white opacity-0 group-hover:opacity-100"
                style={{
                  ...props.style,

                  boxShadow: "0px 2px 6px #AAA",
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%]  flex justify-end">div sağ</div>
    </div>
  );
}

export default Player;
