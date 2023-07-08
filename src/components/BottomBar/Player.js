import React, { useEffect, useMemo, useState } from "react";
import { Icon } from "../../Icons";
import { useAudio } from "react-use";
import { utils } from "../../utils";
import CustomRange from "../CustomRange";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "../../stores/player";
function Player() {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state?.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });
  useEffect(() => {
    controls.play();
  }, [current]);
  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state?.volume === 0 || state?.muted) return "volumeMuted";
    if (state?.volume > 0 && state?.volume < 0.33) return "volumeLow";
    if (state?.volume >= 0.33 && state?.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state?.volume, state?.muted]);
  return (
    <div className="flex px-4 justify-between items-center h-full ">
      <div className="min-w-[11.25rem] w-[30%] ">Left Side</div>
      <div className="flex flex-col items-center max-w-[45.125rem] w-[40%]">
        <div className="flex items-center pt-2  gap-x-2">
          {audio}
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16} />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={16} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-[1.06]"
          >
            <Icon size={16} name={state?.playing ? "pause" : "playIcon"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playNext" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16} />
          </button>
        </div>
        <div className="w-full mt-2 flex items-center gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {utils(state?.duration)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {utils(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%]  items-center flex justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="lyrics" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="queue" size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="device" size={16} />
        </button>
        <button
          onClick={controls[state?.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon name={volumeIcon} size={16} />
        </button>

        <div className="w-[5.813rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon name="fullScreen" size={16} />
        </button>
      </div>
    </div>
  );
}

export default Player;
