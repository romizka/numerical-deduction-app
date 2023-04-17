// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _tasksListJs = require("./tasksList.js");
const introSection = document.querySelector(".introduction");
const tasksSection = document.querySelector(".tasks");
const scoreSection = document.querySelector(".score");
const startBtn = document.getElementById("startButton");
const submitBtn = document.getElementById("submitButton");
const tasksElements = document.querySelector(".tasks_elements");
const scoreElement = document.querySelector(".score__element");
const timerElement = document.getElementById("timer");
// TIMER
let timeRemaining = 600; // 10 minut w sekundach
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
function timer() {
    timeRemaining--;
    timerElement.textContent = formatTime(timeRemaining);
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
        onSubmit();
    }
}
const timerInterval = setInterval(timer, 1000);
tasksElements.insertAdjacentHTML("beforeEnd", (0, _tasksListJs.tasksList).map((item)=>`

<h3 class="mb-2 mt-8 font-semibold text-blue-600 font-bold text-center uppercase">Task ${(0, _tasksListJs.tasksList).indexOf(item) + 1}</h3>
<h4 class="mb-2 font-semibold text-gray-600 text-center tracking-widest">${item.question}</h4>
<form>
<ul class="items-center w-full text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg sm:flex">
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-license" type="radio" value="${item.answers[0].value}" name='task-${(0, _tasksListJs.tasksList).indexOf(item)}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>
      <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">A: ${item.answers[0].answer}</label>
  </div>
</li>
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-id" type="radio" value="${item.answers[1].value}" name='task-${(0, _tasksListJs.tasksList).indexOf(item)}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>
      <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">B: ${item.answers[1].answer}</label>
  </div>
</li>
<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-millitary" type="radio" value="${item.answers[2].value}" name='task-${(0, _tasksListJs.tasksList).indexOf(item)}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>
      <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">C: ${item.answers[2].answer}</label>
  </div>
</li>
<li class="w-full">
  <div class="flex items-center pl-3 bg-blue-100">
      <input id="horizontal-list-radio-passport" type="radio" value="${item.answers[3].value}" name='task-${(0, _tasksListJs.tasksList).indexOf(item)}' class="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2" required>
      <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-600 text-left">D: ${item.answers[3].answer}</label>
  </div>
</li>
<input class="hidden" type="submit">
</ul>
</form>

`).join(""));
const startQuiz = function() {
    tasksSection.classList.toggle("hide");
    introSection.classList.toggle("hide");
    submitBtn.classList.toggle("hide");
    timerElement.classList.toggle("hide");
};
let totalScore = 0;
function addPoints() {
    const element = document.getElementsByTagName("input");
    for(let i = 0; i < element.length; i++){
        console.log(element[i].value);
        if (element[i].type === "radio" && element[i].checked) {
            if (element[i].value == 1) totalScore += 1;
        }
    }
}
const showResult = function() {
    scoreElement.innerHTML = `Your total score: <br> ${totalScore} / 21`;
    tasksSection.classList.toggle("hide");
    scoreSection.classList.toggle("hide");
    submitBtn.classList.toggle("hide");
};
// const checkSelected = function () {
//   let selectedRadioButton = false;
//   const form = document.querySelector("form");
//   const element = form.querySelectorAll('input[type="radio"]');
//   for (let i = 0; i < element.length; i++) {
//     if (element[i].checked) {
//       selectedRadioButton = true;
//       break;
//     }
//   }
//   // If no radio button is selected, prevent form submission and show error message
//   if (!selectedRadioButton) {
//     const errorElement = document.createElement("p");
//     errorElement.textContent = "Please select an answer";
//     errorElement.style.color = "red";
//     form.appendChild(errorElement);
//     return;
//   }
//   // Otherwise, submit the form
//   form.submit();
// };
const onSubmit = (e)=>{
    addPoints();
    showResult();
    checkSelected();
};
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", onSubmit);

},{"./tasksList.js":"4yCjB"}],"4yCjB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tasksList", ()=>tasksList);
const tasksList = [
    {
        question: "0 5 10 15 20 ?",
        answers: [
            {
                answer: "20",
                value: 0
            },
            {
                answer: "25",
                value: 1
            },
            {
                answer: "30",
                value: 0
            },
            {
                answer: "21",
                value: 0
            }
        ]
    },
    {
        question: ".25 .5 1 2 4 ?",
        answers: [
            {
                answer: "12",
                value: 0
            },
            {
                answer: "16",
                value: 0
            },
            {
                answer: "8",
                value: 1
            },
            {
                answer: "10",
                value: 0
            }
        ]
    },
    {
        question: "98 50 26 14 8 ?",
        answers: [
            {
                answer: "4",
                value: 0
            },
            {
                answer: "2",
                value: 0
            },
            {
                answer: "6",
                value: 0
            },
            {
                answer: "5",
                value: 1
            }
        ]
    },
    {
        question: "1 2 3 5 8 ?",
        answers: [
            {
                answer: "5",
                value: 0
            },
            {
                answer: "11",
                value: 0
            },
            {
                answer: "8",
                value: 0
            },
            {
                answer: "13",
                value: 1
            }
        ]
    },
    {
        question: "4 8 12 16 20 ?",
        answers: [
            {
                answer: "25",
                value: 0
            },
            {
                answer: "22",
                value: 0
            },
            {
                answer: "24",
                value: 1
            },
            {
                answer: "28",
                value: 0
            }
        ]
    },
    {
        question: "160 120 100 90 85 ?",
        answers: [
            {
                answer: "78.5",
                value: 0
            },
            {
                answer: "80",
                value: 0
            },
            {
                answer: "82.5",
                value: 0
            },
            {
                answer: "84",
                value: 1
            }
        ]
    },
    {
        question: ".55 .65 .75 .85 .95 ?",
        answers: [
            {
                answer: "1.05",
                value: 0
            },
            {
                answer: "1.5",
                value: 0
            },
            {
                answer: "1.15",
                value: 0
            },
            {
                answer: "9.5",
                value: 1
            }
        ]
    },
    {
        question: "1 3 8 19 42 ?",
        answers: [
            {
                answer: "84",
                value: 0
            },
            {
                answer: "89",
                value: 0
            },
            {
                answer: "71",
                value: 0
            },
            {
                answer: "85",
                value: 1
            }
        ]
    },
    {
        question: "2 7 12 17 22 ?",
        answers: [
            {
                answer: "26",
                value: 0
            },
            {
                answer: "28",
                value: 0
            },
            {
                answer: "23",
                value: 0
            },
            {
                answer: "27",
                value: 1
            }
        ]
    },
    {
        question: "1 7 13 19 25 ?",
        answers: [
            {
                answer: "18",
                value: 0
            },
            {
                answer: "15",
                value: 0
            },
            {
                answer: "31",
                value: 0
            },
            {
                answer: "33",
                value: 1
            }
        ]
    },
    {
        question: "3 8 22 63 185 ?",
        answers: [
            {
                answer: "550",
                value: 1
            },
            {
                answer: "270",
                value: 0
            },
            {
                answer: "365",
                value: 0
            },
            {
                answer: "248",
                value: 0
            }
        ]
    },
    {
        question: "7 7 9 13 19 ?",
        answers: [
            {
                answer: "25",
                value: 0
            },
            {
                answer: "29",
                value: 0
            },
            {
                answer: "31",
                value: 0
            },
            {
                answer: "27",
                value: 1
            }
        ]
    },
    {
        question: "1 1 2 4 7 ?",
        answers: [
            {
                answer: "6",
                value: 0
            },
            {
                answer: "11",
                value: 1
            },
            {
                answer: "8",
                value: 0
            },
            {
                answer: "12",
                value: 0
            }
        ]
    },
    {
        question: "0 –1 0 3 8 ?",
        answers: [
            {
                answer: "15",
                value: 1
            },
            {
                answer: "11",
                value: 0
            },
            {
                answer: "12",
                value: 0
            },
            {
                answer: "24",
                value: 0
            }
        ]
    },
    {
        question: "0 3 3 6 9 ?",
        answers: [
            {
                answer: "12",
                value: 0
            },
            {
                answer: "15",
                value: 1
            },
            {
                answer: "18",
                value: 0
            },
            {
                answer: "9",
                value: 0
            }
        ]
    },
    {
        question: "6 9 3 8 3 ?",
        answers: [
            {
                answer: "7",
                value: 0
            },
            {
                answer: "6",
                value: 0
            },
            {
                answer: "8",
                value: 0
            },
            {
                answer: "10",
                value: 1
            }
        ]
    },
    {
        question: "7 12 9 19 13 ?",
        answers: [
            {
                answer: "22",
                value: 0
            },
            {
                answer: "30",
                value: 0
            },
            {
                answer: "32",
                value: 0
            },
            {
                answer: "28",
                value: 1
            }
        ]
    },
    {
        question: "75 50 90 65 105 ?",
        answers: [
            {
                answer: "185",
                value: 0
            },
            {
                answer: "130",
                value: 0
            },
            {
                answer: "80",
                value: 1
            },
            {
                answer: "170",
                value: 0
            }
        ]
    },
    {
        question: "3 9 4 16 11 ?",
        answers: [
            {
                answer: "27",
                value: 0
            },
            {
                answer: "44",
                value: 0
            },
            {
                answer: "25",
                value: 0
            },
            {
                answer: "35",
                value: 1
            }
        ]
    },
    {
        question: "17 11 28 39 67 ?",
        answers: [
            {
                answer: "96",
                value: 0
            },
            {
                answer: "106",
                value: 1
            },
            {
                answer: "95",
                value: 0
            },
            {
                answer: "58",
                value: 0
            }
        ]
    },
    {
        question: "5 3 4 9 23 ?",
        answers: [
            {
                answer: "41",
                value: 0
            },
            {
                answer: "60",
                value: 1
            },
            {
                answer: "34",
                value: 0
            },
            {
                answer: "32",
                value: 0
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequire7667")

//# sourceMappingURL=index.975ef6c8.js.map
