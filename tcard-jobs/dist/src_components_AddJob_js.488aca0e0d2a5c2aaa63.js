(self["webpackChunktcard_jobs"] = self["webpackChunktcard_jobs"] || []).push([["src_components_AddJob_js"],{

/***/ "./src/components/AddJob.js":
/*!**********************************!*\
  !*** ./src/components/AddJob.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddJob)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _fetches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetches */ "./src/fetches.js");
/* harmony import */ var muicss_lib_react_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! muicss/lib/react/form */ "../node_modules/muicss/lib/react/form.js");
/* harmony import */ var muicss_lib_react_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(muicss_lib_react_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! muicss/lib/react/input */ "../node_modules/muicss/lib/react/input.js");
/* harmony import */ var muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var muicss_lib_react_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! muicss/lib/react/button */ "../node_modules/muicss/lib/react/button.js");
/* harmony import */ var muicss_lib_react_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(muicss_lib_react_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var muicss_lib_react_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! muicss/lib/react/checkbox */ "../node_modules/muicss/lib/react/checkbox.js");
/* harmony import */ var muicss_lib_react_checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(muicss_lib_react_checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // eslint-disable-line 

 // eslint-disable-line 


 // import {Jobs}from './Jobs'


var blajob = {
  job: '',
  categories: '[]',
  hrs: null,
  labor: null,
  archived: 0,
  "default": 0,
  defcat: 0,
  jobwoCat: 1
};
function AddJob() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_6__.AContext),
      job2edit = _useContext.job2edit,
      foundJobs = _useContext.foundJobs,
      setFoundJobs = _useContext.setFoundJobs;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(beingEditedReducer, blajob),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      beingEdited = _useReducer2[0],
      dispatchBeingEdited = _useReducer2[1];

  var updateJob = function updateJob() {
    var retJobs = expandEditedJobs();

    if (retJobs.length == 0) {
      window.alert("You need at leas a name for the job to save");
    } else {
      setFoundJobs(retJobs);
      console.log('retJobs, foundJobs: ', retJobs, foundJobs);
      saveJob();
    }
  };

  var expandEditedJobs = function expandEditedJobs() {
    var recs = [];

    if (beingEdited.job.length > 1) {
      if (beingEdited.jobwoCat || beingEdited.categories.length < 4) {
        recs.push({
          job: beingEdited.job,
          category: '',
          "default": beingEdited["default"]
        });
      }

      if (beingEdited.categories.length > 4) {
        var catarr = JSON.parse(beingEdited.categories);
        catarr.map(function (c) {
          recs.push({
            job: beingEdited.job,
            category: c.cat,
            "default": c.def
          });
        });
      }
    }

    return recs;
  };

  var saveJob = function saveJob() {
    (0,_fetches__WEBPACK_IMPORTED_MODULE_1__.postJob)(beingEdited).then(function (res) {
      return console.log('res: ', res);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getJob();
  }, [job2edit]);

  var getJob = function getJob() {
    if (job2edit.length > 0) {
      (0,_fetches__WEBPACK_IMPORTED_MODULE_1__.fetchJob)(job2edit).then(function (res) {
        console.log('res: ', res);
        dispatchBeingEdited({
          type: 'replace',
          payload: res.job
        });
      });
    }
  };

  var addRec = function addRec() {
    dispatchBeingEdited({
      type: 'changeCatStr',
      payload: {
        cat: '',
        hrs: '',
        labor: '',
        def: 0
      }
    });
  };

  var renderCategories = function renderCategories() {
    var catarr = JSON.parse(beingEdited.categories);
    var tablarr = catarr.map(function (c, i) {
      console.log('catarr.length: ', catarr.length);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        width: "10%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        name: i,
        onClick: function onClick(e) {
          return dispatchBeingEdited({
            type: 'deleteCat',
            payload: {
              idx: e.target.name
            }
          });
        }
      }, "x")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        width: "40%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default()), {
        name: i,
        placeholder: "category",
        value: c.cat,
        onChange: function onChange(e) {
          return dispatchBeingEdited({
            type: 'changeCat',
            payload: {
              idx: e.target.name,
              field: e.target.value
            }
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        width: "15%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default()), {
        name: i,
        placeholder: "hrs",
        value: c.hrs,
        onChange: function onChange(e) {
          return dispatchBeingEdited({
            type: 'changeCatHrs',
            payload: {
              idx: e.target.name,
              field: e.target.value
            }
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        width: "20%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default()), {
        name: i,
        placeholder: "labor$",
        value: c.labor,
        onChange: function onChange(e) {
          return dispatchBeingEdited({
            type: 'changeCatLabor',
            payload: {
              idx: e.target.name,
              field: e.target.value
            }
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        width: "15%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
        name: i,
        label: "default",
        checked: c.def,
        onChange: function onChange(e) {
          return dispatchBeingEdited({
            type: 'changeCatCk',
            payload: {
              idx: e.target.name,
              field: e.target.checked
            }
          });
        }
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_button__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "flat",
      onClick: addRec
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "+ Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, beingEdited.defcat), beingEdited.categories.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "mui-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, tablarr)));
  };

  var renderForm = function renderForm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Add or Update Job"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "mui-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      width: "85%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default()), {
      placeholder: "Job",
      value: beingEdited.job,
      onChange: function onChange(e) {
        return dispatchBeingEdited({
          type: 'changeJob',
          payload: e.target.value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      width: "15%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
      label: "default",
      checked: beingEdited["default"],
      onChange: function onChange(e) {
        return dispatchBeingEdited({
          type: 'changeCk',
          payload: e.target.checked
        });
      }
    }))), beingEdited.categories.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "include no category  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      checked: beingEdited.jobwoCat,
      onChange: function onChange(e) {
        return dispatchBeingEdited({
          type: 'changeWoCat',
          payload: e.target.checked * 1
        });
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "mui-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      width: "50%",
      key: "0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default()), {
      placeholder: "Bid Hours ",
      value: beingEdited.hrs == null ? '' : beingEdited.hrs,
      onChange: function onChange(e) {
        return dispatchBeingEdited({
          type: 'changeHrs',
          payload: e.target.value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      width: "50%",
      key: "1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_input__WEBPACK_IMPORTED_MODULE_3___default()), {
      placeholder: "Bid Labor $",
      value: beingEdited.labor == null ? '' : beingEdited.labor,
      onChange: function onChange(e) {
        return dispatchBeingEdited({
          type: 'changeLabor',
          payload: e.target.value
        });
      }
    }))))), renderCategories(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((muicss_lib_react_button__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "raised",
      onClick: updateJob
    }, "update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " archive "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "checkbox",
      checked: beingEdited.archived,
      onClick: function onClick(e) {
        return dispatchBeingEdited({
          type: 'archive',
          payload: e.target.checked
        });
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style.outer
  }, renderForm());
}

var beingEditedReducer = function beingEditedReducer(state, action) {
  var catarr = [];
  var catstr = '';
  console.log('state: ', state);
  console.log('action: ', action);

  switch (action.type) {
    case 'replace':
      return action.payload;

    case 'changeJob':
      return _objectSpread(_objectSpread({}, state), {}, {
        job: action.payload
      });

    case 'changeHrs':
      return _objectSpread(_objectSpread({}, state), {}, {
        hrs: action.payload
      });

    case 'changeLabor':
      return _objectSpread(_objectSpread({}, state), {}, {
        labor: action.payload
      });

    case 'changeCk':
      return _objectSpread(_objectSpread({}, state), {}, {
        "default": action.payload * 1
      });

    case 'changeWoCat':
      return _objectSpread(_objectSpread({}, state), {}, {
        jobwoCat: action.payload
      });

    case 'archive':
      if (action.payload) {
        console.log('check archive and job will no longer show in this app');
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        archived: action.payload * 1
      });

    case 'changeCatStr':
      catarr = JSON.parse(state.categories);
      console.log('catarr', catarr);
      console.log('catstr: ', catstr);
      catarr.push(action.payload);
      catstr = JSON.stringify(catarr);
      console.log('catarr', catarr);
      console.log('catstr: ', catstr);
      state.categories = catstr;
      console.log('state: ', state);
      action.type = '';
      return _objectSpread({}, state);

    case 'changeCat':
      catarr = JSON.parse(state.categories);
      catarr[action.payload.idx].cat = action.payload.field;
      catstr = JSON.stringify(catarr);
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: catstr
      });

    case 'changeCatHrs':
      catarr = JSON.parse(state.categories);
      catarr[action.payload.idx].hrs = action.payload.field;
      catstr = JSON.stringify(catarr);
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: catstr
      });

    case 'changeCatLabor':
      catarr = JSON.parse(state.categories);
      catarr[action.payload.idx].labor = action.payload.field;
      catstr = JSON.stringify(catarr);
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: catstr
      });

    case 'changeCatCk':
      catarr = JSON.parse(state.categories);
      catarr[action.payload.idx].def = action.payload.field * 1;
      var dc = isCkCat(catarr);
      catstr = JSON.stringify(catarr);
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: catstr,
        defcat: dc * 1
      });

    case 'deleteCat':
      catarr = JSON.parse(state.categories);
      var newarr = catarr.filter(function (c, i) {
        return i != action.payload.idx;
      });
      var rc = isCkCat(newarr);
      catstr = JSON.stringify(newarr);
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: catstr,
        defcat: rc * 1
      });

    default:
      return state;
  }
};

var isCkCat = function isCkCat(arr) {
  var f = arr.filter(function (a) {
    return a.def;
  });
  console.log('f: ', f);
  return f.length > 0;
};

var style = {
  outer: {
    overflow: 'hidden',
    margin: '2px 10px 10px 10px',
    padding: '4px',
    background: '#99CCFF'
  },
  info: {
    div: {
      "float": 'right',
      textAlign: 'right'
    },
    span: {
      fontSize: '200%',
      color: 'orange'
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
    idx: {
      "float": 'left',
      width: '7%',
      padding: '5px'
    },
    icon: {
      fontSize: '18px'
    }
  }
}; // const expandCats=(ajob)=>{
//   const cats = ajob.categories.split(',')
//   const na = []
//   const exjob = cats.map((j)=>{
//   })
// }
// function contractCats(jobs){
//   if(!jobs){
//     jobs=[{job:'new', category:''}]
//   }
//   jobs[0].categories=''
//   console.log('jobs: ', jobs)
//   const job = jobs.reduce((acc, j, i)=>{
//     console.log('acc,j: ', acc,j)
//     acc.categories = `${acc.categories},${j.category}`
//     console.log('acc: ', acc)
//   },[jobs[0]])
//   console.log('jobs: ', jobs)
//   return jobs
// }

/***/ })

}]);
//# sourceMappingURL=src_components_AddJob_js.488aca0e0d2a5c2aaa63.js.map