chrome.devtools.network.getHAR(function(result) {
    var entries = result.entries; 
    Console.warn("entries : " + entries.length);          
  });