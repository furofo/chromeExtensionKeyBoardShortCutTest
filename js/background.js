// background.js
chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" triggered`);
    // alert('KEyboard short cut ctr-shift-y used');
    console.log("custom shortcut ctr + shit + y used")
  });