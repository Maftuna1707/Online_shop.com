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
})({"js/main.js":[function(require,module,exports) {
function l_phones() {
  document.getElementById("menu_right1").className = "bi bi-chevron-down";
  document.getElementById("companies_p").style.display = "block";
}

function l_laptops() {
  document.getElementById("menu_right2").className = "bi bi-chevron-down";
  document.getElementById("companies_c").style.display = "block";
}

var left = document.getElementById("left");
var right = document.getElementById("right");
var main_right = document.getElementById("main");

function iPhone() {
  var checkBox = document.getElementById("myCheck_iphone");
  var m_iphone = document.getElementById("iphone");

  if (checkBox.checked == true) {
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "#0d6efd";
    right.style.borderLeftStyle = "solid";
    main_right.style.display = "none";
    m_iphone.style.display = "block";
  } else {
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "#0d6efd";
    left.style.borderRightStyle = "solid";
    main_right.style.display = "block";
    m_iphone.style.display = "none";
  }
}

var iphone8 = {
  memory: '64GB',
  version: 'iPhone 8',
  price: '$299.99',
  src: 'images/apple8.png'
};
document.getElementById("iP8_memory").innerHTML = iphone8.memory;
document.getElementById("iP8_version").innerHTML = iphone8.version;
document.getElementById("iP8_price").innerHTML = iphone8.price;
document.getElementById("img1").src = iphone8.src;
var iphone11pro = {
  memory: '64GB',
  version: 'iPhone 11 Pro',
  price: '$999.99',
  src: 'images/apple11pro.png'
};
document.getElementById("iP11pro_memory").innerHTML = iphone11pro.memory;
document.getElementById("iP11pro_version").innerHTML = iphone11pro.version;
document.getElementById("iP11pro_price").innerHTML = iphone11pro.price;
document.getElementById("img2").src = iphone11pro.src;
var iphoneXS = {
  memory: '64GB',
  version: 'iPhone 11 Pro',
  price: '$999.99',
  src: 'images/appleXS.png'
};
document.getElementById("iPXS_memory").innerHTML = iphoneXS.memory;
document.getElementById("iPXS_version").innerHTML = iphoneXS.version;
document.getElementById("iPXS_price").innerHTML = iphoneXS.price;
document.getElementById("img3").src = iphoneXS.src;

function sony() {
  var checkBox_sony = document.getElementById("myCheck_sony");
  var m_sony = document.getElementById("sony");

  if (checkBox_sony.checked == true) {
    main_right.style.display = "none";
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "#0d6efd";
    right.style.borderLeftStyle = "solid";
    m_sony.style.display = "block";
  } else {
    main_right.style.display = "block";
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "#0d6efd";
    left.style.borderRightStyle = "solid";
    m_sony.style.display = "none";
  }
}

var xperia5 = {
  memory: '72GB',
  version: 'Xperia 5 II',
  price: '$899.99',
  src: 'images/XPERIA5.png'
};
document.getElementById("img1_sony").src = xperia5.src;
document.getElementById("xperia5_version").innerHTML = xperia5.version;
document.getElementById("xperia5_memory").innerHTML = xperia5.memory;
document.getElementById("xperia5_price").innerHTML = xperia5.price;
var xperia10 = {
  memory: '65GB',
  version: 'Xperia 10',
  price: '$1222.99',
  src: 'images/xperia10.png'
};
document.getElementById("img2_sony").src = xperia10.src;
document.getElementById("xperia10_version").innerHTML = xperia10.version;
document.getElementById("xperia10_memory").innerHTML = xperia10.memory;
document.getElementById("xperia10_price").innerHTML = xperia10.price;
var xperiaL7 = {
  memory: '72GB',
  version: 'Xperia L7',
  price: '$827.77',
  src: 'images/xperiaL7.png'
};
document.getElementById("img3_sony").src = xperiaL7.src;
document.getElementById("xperia7_version").innerHTML = xperiaL7.version;
document.getElementById("xperia7_memory").innerHTML = xperiaL7.memory;
document.getElementById("xperia7_price").innerHTML = xperiaL7.price;
var aa = 56;

function huawei() {
  var checkBox_huawei = document.getElementById("myCheck_huawei");
  var m_huawei = document.getElementById("huawei");

  if (checkBox_huawei.checked == true) {
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "#0d6efd";
    right.style.borderLeftStyle = "solid";
    main_right.style.display = "none";
    m_huawei.style.display = "block";
  } else {
    main_right.style.display = "block";
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "##0d6efd";
    left.style.borderRightStyle = "solid";
    m_huawei.style.display = "none";
  }
}

var huawei1 = {
  memory: '74GB',
  version: 'Huawei P40',
  price: '$999.99',
  src: 'images/Huawei-P40.png'
};
document.getElementById("img1_huawei").src = huawei1.src;
document.getElementById("huawei_version").innerHTML = huawei1.version;
document.getElementById("huawei_memory").innerHTML = huawei1.memory;
document.getElementById("huawei_price").innerHTML = huawei1.price;
var huawei2 = {
  memory: '74GB',
  version: 'Huawei P40',
  price: '$999.99',
  src: 'images/huaweiP30.png'
};
document.getElementById("img2_huawei").src = huawei2.src;
document.getElementById("huawei2_version").innerHTML = huawei2.version;
document.getElementById("huawei2_memory").innerHTML = huawei2.memory;
document.getElementById("huawei2_price").innerHTML = huawei2.price;
var huawei3 = {
  memory: '74GB',
  version: 'Huawei P40',
  price: '$999.99',
  src: 'images/Huawei-Y7.png'
};
document.getElementById("img3_huawei").src = huawei3.src;
document.getElementById("huawei3_version").innerHTML = huawei3.version;
document.getElementById("huawei3_memory").innerHTML = huawei3.memory; // document.getElementById("huawei3_price").innerHTML = huawei3.price

function honor() {
  var checkBox_honor = document.getElementById("myCheck_honor");
  var m_honor = document.getElementById("honor");

  if (checkBox_honor.checked == true) {
    main_right.style.display = "none";
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "0d6efd";
    right.style.borderLeftStyle = "solid";
    m_honor.style.display = "block";
  } else {
    main_right.style.display = "block";
    m_honor.style.display = "none";
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "0d6efd";
    left.style.borderRightStyle = "solid";
  }
}

var honor1 = {
  memory: '64GB',
  version: 'Honor 30',
  price: '$799.99',
  src: 'images/honor30.png'
};
document.getElementById("img1_honor").src = honor1.src;
document.getElementById("honor1_version").innerHTML = honor1.version;
document.getElementById("honor1_memory").innerHTML = honor1.memory;
document.getElementById("honor1_price").innerHTML = honor1.price;
var honor2 = {
  memory: '74GB',
  version: 'Honor 20',
  price: '$999.99',
  src: 'images/honor20.png'
};
document.getElementById("img2_honor").src = honor2.src;
document.getElementById("honor2_version").innerHTML = honor2.version;
document.getElementById("honor2_memory").innerHTML = honor2.memory;
document.getElementById("honor2_price").innerHTML = honor2.price;
var honor3 = {
  memory: '74GB',
  version: 'Honor 9A',
  price: '$999.99',
  src: 'images/Honor9A.png'
};
document.getElementById("img3_honor").src = honor3.src;
document.getElementById("honor3_version").innerHTML = honor3.version;
document.getElementById("honor3_memory").innerHTML = honor3.memory;
document.getElementById("honor3_price").innerHTML = honor2.price;

function macBook() {
  var checkBox_macBook = document.getElementById("myCheck_macBook");
  var m_macBook = document.getElementById("macBook");

  if (checkBox_macBook.checked == true) {
    main_right.style.display = "none";
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "0d6efd";
    right.style.borderLeftStyle = "solid";
    main_right.style.display = "none";
    m_macBook.style.display = "block";
  } else {
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "0d6efd";
    left.style.borderRightStyle = "solid";
    main_right.style.display = "block";
    m_macBook.style.display = "none";
  }
}

var macBook1 = {
  memory: '74GB',
  version: 'MacBook',
  price: '$2000.99',
  src: 'images/2015-03.png'
};
document.getElementById("img1_macBook").src = honor3.src;
document.getElementById("macBook1_version").innerHTML = macBook1.version;
document.getElementById("macBook1_memory").innerHTML = macBook1.memory;
document.getElementById("macBook1_price").innerHTML = macBook1.price;
var macBook2 = {
  memory: '74GB',
  version: 'MacBook',
  price: '$2000.99',
  src: 'images/2020M1.png'
};
document.getElementById("img2_macBook").src = macBook2.src;
document.getElementById("macBook2_version").innerHTML = macBook2.version;
document.getElementById("macBook2_memory").innerHTML = macBook2.memory;
document.getElementById("macBook2_price").innerHTML = macBook2.price;
var macBook3 = {
  memory: '74GB',
  version: 'MacBook',
  price: '$2000.99',
  src: 'images/macbook2018.png'
};
document.getElementById("img3_macBook").src = macBook3.src;
document.getElementById("macBook3_version").innerHTML = macBook3.version;
document.getElementById("macBook3_memory").innerHTML = macBook3.memory;
document.getElementById("macBook3_price").innerHTML = macBook3.price;

function lenovo() {
  var checkBox_lenovo = document.getElementById("myCheck_lenovo");
  var m_lenovo = document.getElementById("lenovo");

  if (checkBox_lenovo.checked == true) {
    main_right.style.display = "none";
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "0d6efd";
    right.style.borderLeftStyle = "solid";
    main_right.style.display = "none";
    m_lenovo.style.display = "block";
  } else {
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "0d6efd";
    left.style.borderRightStyle = "solid";
    main_right.style.display = "block";
    m_lenovo.style.display = "none";
  }
}

var lenovo1 = {
  memory: '74GB',
  version: 'Lenovo',
  price: '$2000.99',
  src: 'images/2015-03.png'
};
document.getElementById("img1_lenovo").src = lenovo1.src;
document.getElementById("lenovo_version").innerHTML = lenovo1.version;
document.getElementById("lenovo_memory").innerHTML = lenovo1.memory;
document.getElementById("lenovo_price").innerHTML = lenovo1.price;
var lenovo2 = {
  memory: '74GB',
  version: 'Lenovo',
  price: '$2000.99',
  src: 'images/2020M1.png'
};
document.getElementById("img2_lenovo").src = lenovo2.src;
document.getElementById("lenovo2_version").innerHTML = lenovo2.version;
document.getElementById("lenovo2_memory").innerHTML = lenovo2.memory;
document.getElementById("lenovo2_price").innerHTML = lenovo2.price;
var lenovo3 = {
  memory: '74GB',
  version: 'Lenovo',
  price: '$2000.99',
  src: 'images/macbook2018.png'
};
document.getElementById("img3_lenovo").src = lenovo3.src;
document.getElementById("lenovo3_version").innerHTML = lenovo3.version;
document.getElementById("lenovo3_memory").innerHTML = lenovo3.memory;
document.getElementById("lenovo3_price").innerHTML = lenovo3.price;

function acer() {
  var checkBox_lenovo = document.getElementById("myCheck_acer");
  var m_lenovo = document.getElementById("acer");

  if (checkBox_lenovo.checked == true) {
    main_right.style.display = "none";
    left.style.borderRightStyle = "none";
    right.style.borderLeftColor = "0d6efd";
    right.style.borderLeftStyle = "solid";
    main_right.style.display = "none";
    m_lenovo.style.display = "block";
  } else {
    right.style.borderLeftStyle = "none";
    left.style.borderRightColor = "0d6efd";
    left.style.borderRightStyle = "solid";
    main_right.style.display = "block";
    m_lenovo.style.display = "none";
  }
}

var acer1 = {
  memory: '74GB',
  version: 'Lenovo',
  price: '$2000.99',
  src: 'images/2015-03.png'
};
document.getElementById("img1_acer").src = acer1.src;
document.getElementById("acer1_version").innerHTML = acer1.version;
document.getElementById("acer1_memory").innerHTML = acer1.memory;
document.getElementById("acer1_price").innerHTML = acer1.price;
var acer2 = {
  memory: '74GB',
  version: 'Lenovo',
  price: '$2000.99',
  src: 'images/2020M1.png'
};
document.getElementById("img2_acer").src = acer2.src;
document.getElementById("acer2_version").innerHTML = acer2.version;
document.getElementById("acer2_memory").innerHTML = acer2.memory;
document.getElementById("acer2_price").innerHTML = acer2.price;
var acer3 = {
  memory: '74GB',
  version: 'Lenovo',
  price: '$2000.99',
  src: 'images/macbook2018.png'
};
document.getElementById("img3_acer").src = acer3.src;
document.getElementById("acer3_version").innerHTML = acer3.version;
document.getElementById("acer3_memory").innerHTML = acer3.memory;
document.getElementById("acer3_price").innerHTML = acer3.price;
var counter = 0;

function count() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}
},{}],"C:/Users/Acer/scoop/persist/nodejs/bin/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55165" + '/');

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
},{}]},{},["C:/Users/Acer/scoop/persist/nodejs/bin/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map