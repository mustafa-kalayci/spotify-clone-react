import React from "react";
import { Icon } from "../../Icons";
function DownloadApp() {
  return (
    <div className="h-10 flex text-sm text-link gap-x-4 hover:text-white flex-shrink-0 items-center justify-center">
      <Icon name="downloadIcon" size={20} />
      Uygulamayı Yükle
    </div>
  );
}

export default DownloadApp;
