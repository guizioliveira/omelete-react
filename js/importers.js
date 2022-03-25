export function doLoad(div, pages) {
    if( pages.length > 0) {
        $.get(pages.shift(), function(content) {
            $(`${div}`).append(content);
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