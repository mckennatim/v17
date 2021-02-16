(self["webpackChunktcard_jobs"] = self["webpackChunktcard_jobs"] || []).push([["src_components_Jobs_js"],{

/***/ "./src/components/Jobs.js":
/*!********************************!*\
  !*** ./src/components/Jobs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/wfuncs */ "./src/utilities/wfuncs.js");
/* harmony import */ var _fetches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetches */ "./src/fetches.js");
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Jobs = function Jobs(_ref) {
  var firstday = _ref.firstday;
  var blajobs = [{
    id: '',
    job: '',
    category: '',
    week: '',
    yr: ''
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(blajobs),
      _useState2 = _slicedToArray(_useState, 2),
      allJobs = _useState2[0],
      setAllJobs = _useState2[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_3__.AContext),
      foundJobs = _useContext.foundJobs,
      setFoundJobs = _useContext.setFoundJobs,
      setJob2edit = _useContext.setJob2edit;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchStr = _useState4[0],
      setSearchStr = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(blajobs),
      _useState6 = _slicedToArray(_useState5, 2),
      jobs4week = _useState6[0],
      setJobs4week = _useState6[1];

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(dateInfoReducer, (0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.getDateInfo)(new Date())),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      dateInfo = _useReducer2[0],
      dispatchDateInfo = _useReducer2[1];

  function dateInfoReducer(state, action) {
    switch (action.type) {
      case 'changeWeek':
        return _objectSpread(_objectSpread({}, state), {}, {
          week: action.payload
        });

      case 'changeYear':
        return _objectSpread(_objectSpread({}, state), {}, {
          yr: action.payload
        });

      case 'changeDateStr':
        return _objectSpread(_objectSpread({}, state), {}, {
          datestr: action.payload
        });

      default:
        throw new Error();
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getAllJobs();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    //once firstday resolves from getSettings
    var nv = (0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.getDateOfWeek)(dateInfo.week, dateInfo.yr);
    dispatchDateInfo({
      type: 'changeDateStr',
      payload: nv
    });
  }, [firstday]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getJobs4week(dateInfo.week, dateInfo.yr);
  }, [dateInfo.week, dateInfo.yr]);

  var getAllJobs = function getAllJobs() {
    (0,_fetches__WEBPACK_IMPORTED_MODULE_2__.fetchAllJobs)().then(function (res) {
      setAllJobs(res.jobs);
    });
  };

  function getJobs4week(wk, yr) {
    var nv = (0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.getDateOfWeek)(wk, yr);
    dispatchDateInfo({
      type: 'changeDateStr',
      payload: nv
    });
    (0,_fetches__WEBPACK_IMPORTED_MODULE_2__.fetchJobs4week)(wk, yr).then(function (res) {
      var ajobs = res.jobs.map(function (a) {
        a.active = 1;
        return a;
      });
      setJobs4week(ajobs);
    });
  }

  var onChecked = function onChecked(e) {
    var j4w = _toConsumableArray(jobs4week);

    j4w[e.target.name].active = e.target.checked; // const idx = ojob
    // .findIndex((o)=>o.id==a.id)
    // ojob[idx].active = !a.active*1

    setJobs4week(j4w);
  };

  var save2week = function save2week() {
    var savejobs = jobs4week.filter(function (j) {
      return j.active;
    }).map(function (d) {
      delete d.id;
      delete d["default"];
      delete d.coid;
      d.active = 1;
      d.week = dateInfo.week;
      d.year = dateInfo.yr;
      return d;
    });
    (0,_fetches__WEBPACK_IMPORTED_MODULE_2__.postJobs)(savejobs, dateInfo.week, dateInfo.yr).then(function () {
      setJobs4week(savejobs);
    });
  };

  var editJob = function editJob(e) {
    return function () {
      setJob2edit(e.job);
    };
  }; // const onCheckedFound=(j)=>(e)=>{
  //   console.log('j.job, e.target.checked: ', j.job, e.target.checked, e.target.name)
  //   const njobs = [...foundJobs]
  //   njobs[e.target.name].default=e.target.checked
  //   setFoundJobs(njobs)
  //   if(category.length>0){
  //   }
  //   postJob({job:j.job, default:e.target.checked})
  // }


  var search = function search(e) {
    var sel = e.target.value.toLowerCase();
    setSearchStr(sel);

    if (sel.length > 1) {
      var _foundJobs = allJobs.filter(function (j) {
        return j.job.toLowerCase().includes(sel);
      });

      setFoundJobs(_foundJobs);
    } else {
      setFoundJobs([]);
    }
  };

  var moveUp = function moveUp(a) {
    return function () {
      var isdup = jobs4week.filter(function (j) {
        return j.job == a.job && j.category == a.category;
      }).length > 0;

      if (!isdup) {
        var b = _objectSpread({}, a);

        b.active = 1;
        setJobs4week([].concat(_toConsumableArray(jobs4week), [b]));
      }
    };
  };

  var renderHeader = function renderHeader() {
    var week = dateInfo.week,
        yr = dateInfo.yr,
        firstdow = dateInfo.firstdow,
        datestr = dateInfo.datestr;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style.he
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style.he.yw
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "number",
      value: yr,
      style: style.he.yr,
      onChange: function onChange(e) {
        return dispatchDateInfo({
          type: 'changeYear',
          payload: e.target.value
        });
      }
    }), "wk", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "number",
      value: week,
      onChange: function onChange(e) {
        return dispatchDateInfo({
          type: 'changeWeek',
          payload: e.target.value
        });
      },
      style: style.he.wk
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "starting on ", firstdow, " ", datestr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style.he.get
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn",
      onClick: save2week
    }, "sav2wk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style.he.act
    })));
  };

  var renderJobs4week = function renderJobs4week() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style.myli.od
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      style: style.myli.ul
    }, jobs4week //.filter((ajob)=>this.fil(ajob))
    .map(function (ajob, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: i,
        style: style.myli.li
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.idx
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.job
      }, ajob.job), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.cat
      }, ajob.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.act
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        name: i,
        style: style.myli.ck,
        type: "checkbox",
        checked: ajob.active,
        onChange: onChecked
      })));
    })));
  };

  var renderSearched = function renderSearched() {
    var jobs = foundJobs.map(function (ajob, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        key: i,
        style: style.myli.li
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.idx
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: style.myli.idxsp,
        onClick: editJob(ajob)
      }, "\u270E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.job
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, ajob.job, " "), ajob["default"] == 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: style.myli.sc
      }, "def")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.cat
      }, ajob.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: style.myli.up
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: style.myli.ar,
        onClick: moveUp(ajob)
      }, "\u2191")));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: style.myli.ul
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: "\uD83D\uDD0E all jobs",
      value: searchStr,
      onChange: search
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      style: style.myli.ul
    }, jobs));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, renderHeader(), renderJobs4week(), renderSearched());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jobs);
var style = {
  btn: {},
  he: {
    margin: '2px 10px 10px 10px',
    height: '70px',
    yw: {
      padding: '1px 1px 10px 1px'
    },
    yr: {
      width: '45px',
      background: 'silver'
    },
    wk: {
      width: '44px',
      background: 'whitesmoke'
    },
    img: {
      "float": 'right',
      width: '30px'
    },
    act: {
      "float": 'right'
    },
    get: {
      "float": 'left'
    },
    but: {
      ac: {
        margin: '4px',
        padding: '4px'
      },
      ia: {
        margin: '4px',
        padding: '4px'
      },
      al: {
        margin: '4px',
        padding: '4px'
      }
    }
  },
  myli: {
    od: {
      overflow: 'hidden',
      width: '100%',
      border: '1px solid #ccc'
    },
    ul: {
      textAlign: 'left',
      listStyleType: 'none',
      paddingLeft: '12px'
    },
    li: {
      background: '#99CCCC',
      padding: '6px',
      overflow: 'hidden',
      border: 'solid 1px black'
    },
    sc: {
      fontSize: '9px',
      fonntWeight: 'bold',
      fontVariant: "small-caps",
      background: 'whitesmoke',
      color: 'blue'
    },
    idx: {
      "float": 'left',
      width: '7%',
      padding: '5px'
    },
    icon: {
      fontSize: '18px'
    },
    ck: {
      transform: 'scale(1.5)',
      msTransform: 'scale(1.5)',
      WebkitTransform: 'scale(1.5)',
      padding: '10px',
      border: '2px solid black'
    },
    job: {
      padding: '3px',
      width: '40%',
      "float": 'left',
      background: '#99CCCC'
    },
    cat: {
      padding: '3px',
      width: '20%',
      "float": 'left',
      background: '#99CCCC'
    },
    act: {
      width: '10%',
      "float": 'right',
      background: '#99CCCC'
    },
    up: {
      width: '10%',
      "float": 'right',
      background: '#99CCCC'
    },
    ar: {
      border: 'solid 1px black',
      fontSize: '24px',
      fontWeight: 'bold',
      background: '#99CCFF'
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=src_components_Jobs_js.e3f672567c1b51bf2694.js.map