(function () {

    var global = global || window || self || this;
    var nx = global.nx || require('next-js-core2');

    nx.interval = function(){};

    if (typeof module !== 'undefined' && module.exports) {
      module.exports = nx.interval;
    }

  }());
