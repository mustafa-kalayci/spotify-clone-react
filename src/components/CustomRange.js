import React from "react";
import { getTrackBackground, Range } from "react-range";
function CustomRange({ value, step, min, max, onChange }) {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="w-full h-7 flex group"
          style={props.style}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-md self-center"
            style={{
              height: "4px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: [value],
                colors: ["#1db954", "#535353"],
                min,
                max,
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
          className={`h-3 w-3 rounded-full ${
            !isDragged ? "opacity-0" : ""
          }  bg-white group-hover:opacity-100`}
          style={{
            ...props.style,

            boxShadow: "0px 2px 6px #AAA",
          }}
        />
      )}
    />
  );
}

export default CustomRange;
