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

      const damages = $("[data-damage]");
      $.each(damages, function(i, el) {
        const _el = $(el);
        let color = "";

        const damage = _el.data("damage");
        switch (damage) {
          case 1:
            color = "green";
            break;
          case 2:
            color = "orange";
            break;
          default:
            break;
        }
        _el.css("fill", color);
      });
    }
  };
})();
Damages.init();
