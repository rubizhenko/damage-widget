const Damages = (function() {
  "use strict";
  const outPlace = $(".js_info-place");
  const dataInfo = {
    "120": {
      title: "Лобовое стекло"
    },
    "121": {
      title: "Дверь"
    },
    "122": {
      title: "Катоп"
    }
  };
  return {
    init: function() {
      $(".car__part").click(function(e) {
        e.preventDefault();
        const _this = $(this);

        const partID = _this.data("id");
        const info = dataInfo[partID];
        if (!info) {
          return;
        }
        outPlace.text(info.title);
        console.log(info.title);
      });
    }
  };
})();
Damages.init();
