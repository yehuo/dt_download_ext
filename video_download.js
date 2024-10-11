window.onload = function () {
  // download the video page
  setTimeout(function () {
    const videoElement = document.querySelector("video");
    if (videoElement && videoElement.lastChild.src) {
      const videoUrl = videoElement.lastChild.src;
      console.log(config.downloadPath);
      chrome.runtime.sendMessage({ action: "downloadLink", url: videoUrl , path: config.downloadPath});
    } else {
      console.error("MP4 video not found!");
    }
  }, config.timeout);
};
