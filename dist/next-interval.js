(function () {

    var global = global || window || self || this;
    var nx = global.nx || require('next-js-core2');

    nx.interval = function(inCallback, inInterval){
      var timer = global.setInterval(inCallback, inInterval || 0);
      return {
        destroy: function () {
          clearInterval(timer);
          timer = null;
        }
      };
    };

    if (typeof module !== 'undefined' && module.exports) {
      module.exports = nx.interval;
    }

  }());
