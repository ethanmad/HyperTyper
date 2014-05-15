// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL matches one of the following ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'http://play.typeracer.com/' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
	    pageUrl: { urlMatches: 'http://typingspeedcontest.com/' },
	  }),
	  new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'http://10fastfingers.com/*' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'http://app.typrx.com/' },
	  })
        ]
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "script.js" });
});
