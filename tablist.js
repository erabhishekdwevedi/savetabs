console.log("hello");

chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        
        var mainlist = document.getElementById("tablist");
        var li = document.createElement('li');
        li.className ="listitem_title"
        mainlist.appendChild(li);
        li.innerHTML +=tab.title;

      
      // add URL under new list
        var urllist = document.createElement('ul');
        urllist.className = "urllist";
        var li2 = document.createElement('li');
        urllist.appendChild(li2);
       

        var link = document.createElement('a');
        link.href =tab.url;
        link.title=tab.title;

        li2.innerHTML =link;

        li2.className ="listitem_url"

        // add url list into mainlist

        li.appendChild(urllist);
      
 
      });
    });
  });