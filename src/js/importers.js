export function doLoad(div, pages) {
    if( pages.length > 0) {
        // use shift to get the next page off the array
        $.get(pages.shift(), function(content) {
            // append content to .main
            $(`${div}`).append(content);
            // call do load to get the next entry
            doLoad(div, pages);
        });
    }
};

export function addCss(fileNames) {
    if (fileNames.length > 0) {
      var link = $("<link />",{
        rel: "stylesheet",
        type: "text/css",
        href: `/css/${fileNames.shift()}.css`
      })
      $('head').append(link);
      addCss(fileNames);
    }
   };