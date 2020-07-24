// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
var animateActions = "restart complete resume none";
var startPt = "left 50%";
var endPt = "center 50%";
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#test-slides-1',
    horizontal: true,
    scroller: "#wheel",
    start: startPt,
    end: endPt,
    toggleActions: animateActions,
    markers: true,
    scrub: 1
  }
});
tl.fromTo('#test6', 0.4, {
  top: "50%",
  opacity: "1"
}, {
  top: "60%",
  opacity: "0",
  ease: Power2.easeInOut
}).fromTo('#test', 0.5, {
  top: "40%",
  opacity: "0"
}, {
  top: "50%",
  opacity: "1",
  ease: Power2.easeInOut
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test-slides-2',
    horizontal: true,
    scroller: "#wheel",
    start: startPt,
    end: endPt,
    toggleActions: animateActions,
    scrub: 1
  }
});
tl2.fromTo('#test', 1, {
  top: "50%",
  opacity: "1"
}, {
  top: "60%",
  opacity: "0",
  ease: Power2.easeInOut
}).fromTo('#test2', 1, {
  top: "40%",
  opacity: "0"
}, {
  top: "50%",
  opacity: "1",
  ease: Power2.easeInOut
}, "<");
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test-slides-3',
    horizontal: true,
    scroller: "#wheel",
    start: startPt,
    end: endPt,
    toggleActions: animateActions,
    scrub: 1
  }
});
tl3.fromTo('#test2', 1, {
  top: "50%",
  opacity: "1"
}, {
  top: "60%",
  opacity: "0",
  ease: Power2.easeInOut
}).fromTo('#test3', 1, {
  top: "40%",
  opacity: "0"
}, {
  top: "50%",
  opacity: "1",
  ease: Power2.easeInOut
}, "<");
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test-slides-4',
    horizontal: true,
    scroller: "#wheel",
    start: startPt,
    end: endPt,
    toggleActions: animateActions,
    scrub: 1
  }
});
tl4.fromTo('#test3', 1, {
  top: "50%",
  opacity: "1"
}, {
  top: "60%",
  opacity: "0",
  ease: Power2.easeInOut
}).fromTo('#test4', 1, {
  top: "40%",
  opacity: "0"
}, {
  top: "50%",
  opacity: "1",
  ease: Power2.easeInOut
}, "<");
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test-slides-5',
    horizontal: true,
    scroller: "#wheel",
    start: startPt,
    end: endPt,
    toggleActions: animateActions,
    scrub: 1
  }
});
tl5.fromTo('#test4', 1, {
  top: "50%",
  opacity: "1"
}, {
  top: "60%",
  opacity: "0",
  ease: Power2.easeInOut
}).fromTo('#test5', 1, {
  top: "40%",
  opacity: "0"
}, {
  top: "50%",
  opacity: "1",
  ease: Power2.easeInOut
}, "<");
var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test-slides-6',
    horizontal: true,
    scroller: "#wheel",
    start: startPt,
    end: endPt,
    toggleActions: animateActions,
    scrub: 1
  }
});
tl6.fromTo('#test5', 1, {
  top: "50%",
  opacity: "1"
}, {
  top: "60%",
  opacity: "0",
  ease: Power2.easeInOut
}).fromTo('#test6', 1, {
  top: "40%",
  opacity: "0"
}, {
  top: "50%",
  opacity: "1",
  ease: Power2.easeInOut
}, "<");
window.addEventListener('DOMContentLoaded', function (event) {
  var slidezz = document.getElementsByClassName('slideshow-title');

  for (var i = 0; i < slidezz.length; i++) {
    slidezz[i].style.opacity = '0';
  } //slidezz[5].style.opacity = '0';

}); //imgSlides will refer to the DOM element .mySlides--img
//it gets declared later on in the click initialization function

var imgSlides;
var numSlides = document.getElementsByClassName('mySlides--img').length; //

$('.mySlides--img').each(function (index) {
  var switchTL = new TimelineLite();
  index++;
  var slideIndex = '#slide--' + index;
  switchTL.to('.slideshow-wheel', 0.5, {
    y: 200,
    opacity: 0
  }).to('.slideshow-title', 0.5, {
    y: 200,
    opacity: 0
  }, "<").to('.slideshow-swipe', 0.5, {
    y: 200,
    opacity: 0
  }, "<").to(slideIndex, 0.5, {
    opacity: 1,
    y: 15,
    zIndex: 5,
    display: 'block'
  }).reversed(true);
  this.animation = switchTL;
});
$(".mySlides--img").click(function () {
  imgSlides = this;
  this.animation.reversed(!this.animation.reversed());
});
$(".slide__back").click(function () {
  imgSlides.animation.reversed(!imgSlides.animation.reversed());
}); //let tlSlideIn = gsap.to('#')

var containerz = document.getElementById("wheel");
var containerWidth;
var segment; //one slide in the slide carousel
//////////////////////////////////
/////Change words on title
//////////////

var body = document.querySelector('body');
var title = document.getElementsByClassName('slideshow-title'); //slides

var slidez = document.getElementsByClassName('mySlides');
var imgGap = 0; //set up functions

function setFinal() {
  segment = containerWidth / 6;
  console.log('segment is', segment); //debug

  console.log('scroll width:', containerz.scrollWidth);
}

function setWheelClone() {
  $('#wheel').ready(function () {
    containerWidth = containerz.scrollWidth;
    var clone = $("#wheel").contents().clone();
    console.log('before width: ', containerWidth);
    clone.appendTo("#wheel");
    imgGap = slidez[0].getBoundingClientRect().x;
    $('#wheel').scroll(function () {
      var scrollWindowPos = $('#wheel').scrollLeft();

      if (scrollWindowPos >= containerWidth + imgGap + 5) {
        $('#wheel').scrollLeft(1);
        ScrollTrigger.refresh();
      }

      if (scrollWindowPos <= 0) {
        $('#wheel').scrollLeft(containerWidth + imgGap);
      }
    });
  });
}

;
setWheelClone();
setTimeout(setFinal, 1500); //setTimeout(scrollSpy, 1505);
///////////////////////////////////
//Check for changes in device width
////

window.addEventListener('resize', setFinal);
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55276" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map