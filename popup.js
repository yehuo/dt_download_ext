const openButton = document.getElementById("downloadButton");
const videoIdInput = document.getElementById("videoId");

openButton.addEventListener("click", () => {
  const videoId = videoIdInput.value.trim();
  if (videoId == '' || videoId == undefined || videoId == null) {  // input is none or illegal
    console.log("error video id input");
    console.log("default video id is used");
    chrome.tabs.create({ url: config.targetUrl });
  } else {  //
    const targetUrl='www.addyoutube.com/watch?v='+videoId;
    chrome.tabs.create({ url: targetUrl });
  }
});
