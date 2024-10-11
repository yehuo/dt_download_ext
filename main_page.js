window.onload = function () {
  setTimeout(function () {
    const linkXPath = config.linkXPath;
    const linkElement = document.evaluate(
      linkXPath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (linkElement) {
      pageStatus = 1;
      chrome.storage.local.set({ pageStatus: pageStatus }, function () {
        console.log("video page is " + linkElement);
      });
      linkElement.click();
    } else {
      console.error("Button not found!");
    }
  }, config.timeout);
};
