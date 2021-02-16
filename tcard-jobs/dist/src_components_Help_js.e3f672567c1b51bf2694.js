(self["webpackChunktcard_jobs"] = self["webpackChunktcard_jobs"] || []).push([["src_components_Help_js"],{

/***/ "./src/components/Help.js":
/*!********************************!*\
  !*** ./src/components/Help.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Help)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _fetchHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetchHelp */ "./src/fetchHelp.js");
/* harmony import */ var _HelpApp_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelpApp.jsx */ "./src/components/HelpApp.jsx");
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Help() {
  var _this = this;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_3__.AContext),
      visiblePages = _useContext.visiblePages;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      help = _useState2[0],
      setHelp = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      allhelp = _useState4[0],
      setAllhelp = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      newQ = _useState6[0],
      toggleNewQ = _useState6[1];

  var appid = 'jobs';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.fetchHelp)(appid).then(function (res) {
      console.log('res: ', res);
      setAllhelp(res.results);
      makeData(res.results);
    });
  }, []);

  function makeData(allhelp) {
    var ahelp = filterByPageNames(allhelp);
    var bhelp = indentData(ahelp.slice());
    setHelp(bhelp);
    return bhelp;
  }

  var filterByPageNames = function filterByPageNames(allhelp) {
    var pages = visiblePages;

    var fhelp = _toConsumableArray(allhelp).filter(function (a) {
      return pages.length == 1 ? true : pages.includes(a.pagename);
    }).sort(function (a, b) {
      if (b.pagename === a.pagename) {
        return b.qrank < a.qrank ? -1 : 1;
      }

      return b.pagename > a.pagename ? -1 : 1;
    }).map(function (m) {
      return m;
    });

    return fhelp;
  };

  var indentData = function indentData(sdata) {
    var bhelp = sdata.reduce(function (acc, rr) {
      var r = _objectSpread({}, rr);

      r.toggle = true;
      var qh = {
        qid: r.qid,
        qrank: r.qrank,
        qrankst: r.qrankst,
        qedit: r.qedit,
        howto: r.howto,
        appid: r.appid,
        pagename: r.pagename,
        qcontributor: r.qcontributor
      };
      var ah = {
        qid: r.qid,
        aid: r.aid,
        arank: r.arank,
        arankst: r.arankst,
        aedit: r.aedit,
        hereshow: r.hereshow,
        acontributor: r.acontributor
      };

      if (acc.length == 0) {
        qh.indent = [ah];
        acc.push(qh);
      } else {
        var lhw = acc.pop();

        if (lhw.qid == r.qid) {
          lhw.indent.push(ah);
          acc.push(lhw);
        } else {
          qh.indent = [ah];
          acc.push(lhw);
          acc.push(qh);
        }
      }

      return acc;
    }, []);
    var bshelp = bhelp.map(function (b) {
      if (b.indent.length > 1) {
        var sorted = b.indent.sort(function (a, b) {
          return a.arank < b.arank;
        });
        b.indent = sorted;
      }

      return b;
    });
    return bshelp;
  };

  var handleVote = function handleVote() {
    console.log('handleVote');
  };

  var handleEditHelp = function handleEditHelp(ed) {
    return function (e) {
      var id = ed.d == 'q' ? 'qid' : 'aid';
      var edit = ed.d == 'q' ? 'qedit' : 'aedit';
      var m = ed.m;
      console.log('ed: ', ed);
      var ahupd = help.map(function (a) {
        // console.log('ed.m[id], a[id]: ', id, ed.m[id], a[id])
        if (true) {
          switch (ed["do"]) {
            case 'input':
              console.log('edit: ', edit);

              if (edit == 'qedit') {
                a[edit] = true;
              } else {
                a.indent[ed.idx].aedit = true;
                console.log('a.indent[ed.idx].aedit: ', a.indent[ed.idx].aedit);
              }

              break;

            case 'clearans':
              var numans = allhelp.filter(function (a) {
                return a.qid == ed.m.qid;
              }).length;

              if (numans > 1) {
                help.allhelp = allhelp.filter(function (a) {
                  return a.aid != ed.m.aid;
                });

                _this.setState({
                  help: help
                });
              } else {
                var idx = allhelp.findIndex(function (a) {
                  return a.aid == ed.m.aid;
                });
                var ch = allhelp[idx];
                ch = _objectSpread(_objectSpread({}, ch), {}, {
                  hereshow: null,
                  arank: null,
                  acontributor: null
                });
                allhelp[idx] = ch;
                help.allhelp = allhelp;

                _this.setState({
                  help: help
                });
              }

              (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.delHelp)(appid, ed.m[id], 'a');
              break;

            case 'clearques':
              var newh = allhelp.filter(function (a) {
                return a.qid != ed.m.qid;
              });
              help.allhelp = newh;

              _this.setState({
                help: help
              });

              (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.delHelp)(appid, ed.m[id], 'q');
              break;

            case 'changeq':
              a.howto = e.target.value;
              break;

            case 'changeans':
              console.log('a.indent[ed.idx]: ', a.indent, ed);
              a.indent[ed.idx].hereshow = e.target.value;
              break;

            case 'selectp':
              a.pagename = e.target.value;

              _this.setState({
                page: e.target.value
              });

              break;

            case 'submita':
              e.preventDefault();
              (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.putHelpAns)(appid, {
                aid: a.aid,
                qid: a.qid,
                hereshow: a.hereshow,
                arank: a.arank,
                acontributor: a.acontributor
              }).then(function (res) {
                if (a.aid > 7000) {
                  (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.fetchHelp)(_this.props.help.appid).then(function (res) {
                    var allhelp = res.results.map(function (m) {
                      m.qrankst = 0;
                      m.arankst = 0;
                      m.qedit = false;
                      m.aedit = false;
                      return m;
                    });
                    console.log('allhelp: ', allhelp);
                    var help = _this.state.help;
                    help.allhelp = allhelp;

                    _this.setState({
                      help: help
                    }, console.log('this.props: ', _this.props));
                  });
                }

                console.log('a.aid: ', a.aid);
                console.log('res: ', res);
              });
              a[edit] = false;
              break;

            case 'submitq':
              console.log('m: ', m);
              (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.putHelpQues)(appid, {
                qid: m.qid,
                howto: m.howto,
                appid: appid,
                pagename: m.pagename
              });
              a[edit] = false;
              break;

            default:
              break;
          }
        }

        return a;
      });
      setAllhelp(ahupd);
    };
  };

  var handleAddDelHelp = function handleAddDelHelp(ed) {
    return function () {
      e.preventDefault;
      console.log('handleAddDelHelp', ed);
    };
  };

  var handleQuestion = function handleQuestion(q) {
    return function () {
      var m = q.m;
      m.appid = appid;
      (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_1__.putHelpQues)(appid, {
        qid: m.qid,
        howto: m.howto,
        appid: m.appid,
        pagename: m.pagename
      }).then(function (res) {
        console.log('res: ', res);
        m.qid = res.results[0].insertId;

        var newhelp = _toConsumableArray(help);

        newhelp.push(m);
        console.log('newhelp: ', newhelp);
        setHelp(newhelp);
      });
    };
  };

  var handleAnswer = function handleAnswer(a) {
    return function () {
      var m = a.m;
      console.log('a: ', a);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HelpApp_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    ahelp: help,
    xvote: handleVote,
    modifyAnswer: handleAnswer
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: handleAddDelHelp({
      "do": 'newQ',
      pages: 'jobs'
    }),
    className: "material-icons"
  }, "add"), newQ && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleAddDelHelp({
      "do": 'submitnewq'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: this.state.page,
    onChange: handleAddDelHelp({
      "do": 'selectp'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    name: "d",
    id: "",
    cols: "40",
    rows: "4",
    value: 'dog',
    onChange: handleAddDelHelp({
      "do": 'changeq'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "submit",
    value: "Submit"
  }))); //   return(
  //     <div style ={styles.help.div0}>
  //       <span>
  //       Dog Shares of GameStop — the company at the center of an online buying binge that captured the imagination of the world last week — crashed another 42 percent on Thursday, leaving it at a small fraction of the value it held just a few days ago.
  // It was the third plunge in four trading sessions for the stock, which had become the symbolic heart of an online crusade against some of Wall Street’s most sophisticated investors.
  // Shares of GameStop closed at $53.50, almost 90 percent below their peak of $483 on Thursday morning last week.
  // The video game retailer’s stock is down 84 percent this week, and the rout has convinced many who favored the stock that the ride is over.
  // “GME is dead,” one user, BoBo_HUST, wrote on Reddit’s WallStreetBets forum, using GameStop’s ticker symbol. Then the commenter wondered aloud about the prospects of one of the other so-called meme stocks, BlackBerry. “Can BB save us?”
  // BlackBerry, the once-dominant maker of mobile device
  //       </span>
  //     </div>
  //   )
}
var styles = {
  help: {
    div0: {
      backgroundColor: '#c7b1c9'
    }
  }
};

/***/ }),

/***/ "./src/components/HelpApp.jsx":
/*!************************************!*\
  !*** ./src/components/HelpApp.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HelpApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/Accordion/Accordion.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
/* harmony import */ var _fetchHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetchHelp */ "./src/fetchHelp.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // eslint-disable-line no-unused-vars


 // eslint-disable-line no-unused-vars

 // eslint-disable-line no-unused-vars




var styles = function styles(theme) {
  return {
    root: {
      width: '100%'
    },
    troot: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 300
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    }
  };
};

function HelpApp(_ref) {
  var ahelp = _ref.ahelp,
      xvote = _ref.xvote;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      letvote = _useState2[0],
      setLetvote = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Array(100).fill(false)),
      _useState4 = _slicedToArray(_useState3, 2),
      toggles = _useState4[0],
      setToggles = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      newQ = _useState6[0],
      toggleNewQ = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      newQtxt = _useState8[0],
      setNewQtxt = _useState8[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_1__.AContext),
      visiblePages = _useContext.visiblePages,
      appid = _useContext.appid;

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visiblePages[0]),
      _useState10 = _slicedToArray(_useState9, 2),
      hpage = _useState10[0],
      setHpage = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ahelp),
      _useState12 = _slicedToArray(_useState11, 2),
      help = _useState12[0],
      setHelp = _useState12[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setHelp(ahelp);
  }, [ahelp]);

  var vote = function vote(ids, up, vtype) {
    return function () {
      // const maxvotes =2
      var isup = up ? 1 : -1;
      var idtype = vtype == 'qrank' ? 'qid' : 'aid';
      var qa = vtype == 'qrank' ? 'q' : 'a'; // const st3 = vtype+'st'

      var vhelp = _toConsumableArray(help);

      var qidx = vhelp.findIndex(function (h) {
        return h.qid * 1 == ids[0] * 1;
      });
      var qrec = vhelp[qidx];

      if (vtype == 'qrank') {
        var newrank = qrec[vtype] += isup;
        qrec[vtype] = newrank;
        (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_2__.putVote)(appid, {
          vtype: vtype,
          idtype: idtype,
          qa: qa,
          id: ids[0] * 1,
          rank: newrank
        });
      } else {
        var vans = _toConsumableArray(qrec.indent);

        var vidx = vans.findIndex(function (h) {
          return h.aid * 1 == ids[1] * 1;
        });
        vans[vidx].arank += isup;
        vans.sort(function (a, b) {
          return b.arank < a.arank ? -1 : 1;
        });
        qrec.indent = vans;
        (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_2__.putVote)(appid, {
          vtype: vtype,
          idtype: idtype,
          qa: qa,
          id: ids[1] * 1,
          rank: vans[vidx].arank
        });
      }

      vhelp[qidx] = qrec;
      vhelp.sort(function (a, b) {
        if (b.pagename === a.pagename) {
          return b.qrank < a.qrank ? -1 : 1;
        }

        return b.pagename > a.pagename ? -1 : 1;
      });
      setHelp(vhelp);
    };
  };

  var toggle = function toggle(i) {
    return function () {
      var togs = _toConsumableArray(toggles);

      togs[i] = !togs[i];
      setToggles(togs);
    };
  };

  var dispUniTitl = function dispUniTitl(bhelp, h, i) {
    return function () {
      var tf = true;

      if (bhelp[i - 1] && bhelp[i - 1].pagename == h.pagename) {
        tf = false;
      }

      return tf;
    };
  };

  var editQfield = function editQfield(ed) {
    var nhelp = _toConsumableArray(help);

    var hidx = nhelp.findIndex(function (h) {
      return h.qid == ed.qid;
    });
    nhelp[hidx][ed.field] = ed.value;
    setHelp(nhelp);
  };

  var editAfield = function editAfield(ed) {
    var nhelp = _toConsumableArray(help);

    var hidx = nhelp.findIndex(function (h) {
      return h.qid == ed.qid;
    });

    var ans = _toConsumableArray(nhelp[hidx].indent);

    var aidx = ans.findIndex(function (a) {
      return a.aid == ed.aid;
    });
    ans[aidx][ed.field] = ed.value;
    nhelp.indent = ans;
    setHelp(nhelp);
  };

  var editAns = function editAns(ed) {
    return function (e) {
      if (!ed.value) {
        ed.value = e.target.value;
      }

      editAfield(ed);
    };
  };

  var editQues = function editQues(ed) {
    return function (e) {
      console.log('ed: ', ed);

      if (!ed.value) {
        ed.value = e.target.value;
      }

      editQfield(ed);
    };
  };

  var submitQ = function submitQ(h, i) {
    return function (e) {
      console.log('submitQ', h, i);
      e.preventDefault();
      editQfield({
        field: 'qedit',
        qid: h.qid,
        value: false
      });
      saveQ(h);
    };
  };

  var submitA = function submitA(h, i) {
    return function (e) {
      console.log('submitA', h, i);
      e.preventDefault();
      editAfield({
        field: 'aedit',
        qid: h.qid,
        aid: h.aid,
        value: false
      });
      delete h.arankst;
      delete h.aedit;
      saveA(h);
    };
  };

  var addAns = function addAns(q) {
    return function () {
      console.log('a: ', a);
      var a = {
        qid: q.qid,
        aid: 9999,
        hereshow: 'heres how',
        aedit: true,
        arank: 0
      };

      var nhelp = _toConsumableArray(help);

      var hidx = nhelp.findIndex(function (h) {
        return h.qid == q.qid;
      });
      nhelp[hidx].indent.push(a);
      setHelp(nhelp);
      console.log('help: ', help, nhelp[hidx]);
    };
  };

  var submitNewQ = function submitNewQ() {
    var m = {
      pagename: hpage,
      appid: appid,
      qid: 8888,
      howto: newQtxt,
      indent: [],
      qrank: 0
    };
    toggleNewQ(false);
    saveQ(m);
  };

  var saveQ = function saveQ(m) {
    (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_2__.putHelpQues)(appid, {
      qid: m.qid,
      howto: m.howto,
      appid: m.appid,
      pagename: m.pagename
    }).then(function (res) {
      if (m.qid * 1 == 8888) {
        m.qid = res.results[0].insertId;

        var newhelp = _toConsumableArray(help);

        newhelp.push(m);
        newhelp.sort(function (a, b) {
          if (b.pagename === a.pagename) {
            return b.qrank < a.qrank ? -1 : 1;
          }

          return b.pagename > a.pagename ? -1 : 1;
        });
        console.log('newhelp: ', newhelp);
        setHelp(newhelp);
      }
    });
  };

  var saveA = function saveA(m) {
    (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_2__.putHelpAns)(appid, m).then(function (res) {
      if (m.aid * 1 == 9999) {
        editAfield({
          field: 'aid',
          qid: m.qid,
          aid: 9999,
          value: res.results[0].insertId
        });
      }
    });
  };

  var delQ = function delQ(id) {
    return function () {
      var nhelp = help.filter(function (h) {
        return h.qid * 1 != id * 1;
      });
      setHelp(nhelp);
      (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_2__.delHelp)(appid, id, 'q');
    };
  };

  var delA = function delA(qid, aid) {
    return function () {
      var nhelp = _toConsumableArray(help);

      var hidx = nhelp.findIndex(function (h) {
        return h.qid * 1 == qid * 1;
      });

      var ans = _toConsumableArray(nhelp[hidx].indent);

      var dans = ans.filter(function (a) {
        return a.aid * 1 != aid * 1;
      });
      nhelp[hidx].indent = dans;
      setHelp(nhelp);
      (0,_fetchHelp__WEBPACK_IMPORTED_MODULE_2__.delHelp)(appid, aid, 'a');
    };
  };

  var renderAnswers = function renderAnswers(h) {
    return function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        style: style.list.ul
      }, h.indent.map(function (m, j) {
        if (!m.aedit) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            style: style.list.li,
            key: j
          }, letvote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Vote, {
            m: [h.qid, m.aid],
            vote: vote,
            vtype: "arank",
            num: m.arank,
            style: v.l
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            style: style.list.hhow
          }, m.hereshow), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            onClick: editAns({
              field: 'aedit',
              qid: h.qid,
              aid: m.aid,
              value: true
            }),
            className: "material-icons"
          }, "edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
            onClick: delA(h.qid, m.aid),
            className: "material-icons"
          }, "clear"));
        } else {
          m.hereshow = !m.hereshow ? '' : m.hereshow;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
            name: "d",
            id: "",
            cols: "30",
            rows: "4",
            value: m.hereshow,
            onChange: editAns({
              field: 'hereshow',
              qid: h.qid,
              aid: m.aid
            })
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            onClick: submitA(m)
          }, "Submit"));
        }
      }));
    };
  };

  var renderQuestion = function renderQuestion(h, i) {
    return function () {
      if (!h.qedit) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          style: style.sum.div
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: toggle(i),
          style: style.sum.how
        }, h.howto), letvote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Vote, {
          m: [h.qid],
          vote: vote,
          vtype: "qrank",
          num: h.qrank,
          style: v.r
        }));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
          onSubmit: submitQ(h, i),
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
          name: h.qid,
          id: h.qid,
          cols: "30",
          rows: "4",
          value: h.howto,
          onChange: editQues({
            field: 'howto',
            qid: h.qid
          })
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "submit",
          value: "Submit"
        }));
      }
    };
  };

  var renderNewQ = function renderNewQ() {
    if (!newQ) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        onClick: function onClick() {
          return toggleNewQ(!newQ);
        },
        className: "material-icons"
      }, "add");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        onChange: function onChange(e) {
          return setHpage(e.target.value);
        }
      }, visiblePages.map(function (r, j) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          value: r,
          key: j
        }, r);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
        name: "d",
        id: "",
        cols: "30",
        rows: "4",
        value: newQtxt,
        onChange: function onChange(e) {
          return setNewQtxt(e.target.value);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: submitNewQ
      }, "Submit"));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style.outer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, " Help ", renderNewQ()), help.map(function (h, i) {
    var theq = renderQuestion(h, i);
    var detli = renderAnswers(h, i);
    var titl = dispUniTitl(help, h, i)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: i
    }, titl && h.pagename, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: i,
      expanded: toggles[i]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, null, theq()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      onClick: addAns(h),
      className: "material-icons"
    }, "add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      onClick: delQ(h.qid),
      className: "material-icons"
    }, "clear"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      onClick: editQues({
        field: 'qedit',
        qid: h.qid,
        value: true
      }),
      className: "material-icons"
    }, "edit"), detli())));
  }));
}

function Vote(props) {
  // eslint-disable-line no-unused-vars
  var m = props.m,
      vote = props.vote,
      vtype = props.vtype,
      style = props.style,
      num = props.num;
  var st3 = vtype + 'st'; // console.log('m[idtype]: ', m[idtype], vtype)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style.vote
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: vote(m, true, vtype),
    className: "material-icons",
    style: m[st3] > 0 ? {
      color: 'orange'
    } : {
      color: 'lightgrey'
    }
  }, "keyboard_arrow_up"), num, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    onClick: vote(m, false, vtype),
    className: "material-icons",
    style: m[st3] < 0 ? {
      color: 'orange'
    } : {
      color: 'lightgrey'
    }
  }, "keyboard_arrow_down"));
}

var v = {
  r: {
    vote: {
      "float": 'right',
      padding: '0 0 0 3px'
    }
  },
  l: {
    vote: {
      "float": 'left',
      padding: '0 0 0 3px'
    }
  }
};
var style = {
  add: {},
  outer: {
    overflow: 'hidden',
    padding: '4px',
    margin: '2px 10px 10px 10px',
    background: '#99CCFF'
  },
  he: {
    overflow: 'hidden',
    margin: '2px 10px 10px 10px',
    padding: '4px',
    background: '#C4A265'
  },
  list: {
    ul: {
      listStyleType: 'none',
      paddingInlineStart: '0px',
      width: '100%' //display: 'flex',
      //flexDirection: 'column'

    },
    li: {
      overflow: 'hidden',
      paddingTop: '8px',
      borderBottom: '1px solid',
      width: '100%' //flex:1

    },
    rt: {
      "float": 'right',
      textAlign: 'right'
    },
    hhow: {
      width: '80%',
      "float": 'right'
    }
  },
  vote: {
    "float": 'right'
  },
  sum: {
    div: {
      padding: '1px',
      width: '100%'
    },
    how: {
      "float": 'left',
      width: '75%',
      padding: '1px'
    }
  }
};

/***/ }),

/***/ "./src/fetchHelp.js":
/*!**************************!*\
  !*** ./src/fetchHelp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchHelp": () => (/* binding */ fetchHelp),
/* harmony export */   "putHelpAns": () => (/* binding */ putHelpAns),
/* harmony export */   "putHelpQues": () => (/* binding */ putHelpQues),
/* harmony export */   "delHelp": () => (/* binding */ delHelp),
/* harmony export */   "putVote": () => (/* binding */ putVote)
/* harmony export */ });
/* harmony import */ var _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/getCfg */ "./src/utilities/getCfg.js");
/* harmony import */ var _utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/wfuncs */ "./src/utilities/wfuncs.js");



var fetchHelp = function fetchHelp(appid) {
  console.log('in fetch help o');
  var lsh = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.ls.getItem();

  if ((0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.geta)('lsh.token', lsh)) {
    var url = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.cfg.url.api + '/common/help/' + appid;
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token']
      },
      method: 'GET'
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (json) {
      return json;
    })["catch"](function (e) {
      return {
        qmessage: e.message
      };
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you do not seem to be known on this device '
    });
    return p2;
  }
};

var putVote = function putVote(appid, vote) {
  var lsh = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.ls.getItem();
  console.log(JSON.stringify({
    vote: vote
  }));

  if ((0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.geta)('lsh.token', lsh)) {
    var url = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.cfg.url.api + '/common/help/vote/' + appid;
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        vote: vote
      })
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (json) {
      return json;
    })["catch"](function (e) {
      return {
        qmessage: e.message
      };
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you do not seem to be known on this device '
    });
    return p2;
  }
};

var putHelpAns = function putHelpAns(appid, ans) {
  var lsh = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.ls.getItem();
  console.log(JSON.stringify({
    ans: ans
  }));

  if ((0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.geta)('lsh.token', lsh)) {
    var url = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.cfg.url.api + '/common/help/ans/' + appid;
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        ans: ans
      })
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (json) {
      return json;
    })["catch"](function (e) {
      return {
        qmessage: e.message
      };
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you do not seem to be known on this device '
    });
    return p2;
  }
};

var putHelpQues = function putHelpQues(appid, ques) {
  var lsh = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.ls.getItem();
  console.log(JSON.stringify({
    ques: ques
  }));

  if ((0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.geta)('lsh.token', lsh)) {
    var url = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.cfg.url.api + '/common/help/ques/' + appid;
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        ques: ques
      })
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (json) {
      return json;
    })["catch"](function (e) {
      return {
        qmessage: e.message
      };
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you do not seem to be known on this device '
    });
    return p2;
  }
};

var delHelp = function delHelp(appid, id, qa) {
  var lsh = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.ls.getItem();

  if ((0,_utilities_wfuncs__WEBPACK_IMPORTED_MODULE_1__.geta)('lsh.token', lsh)) {
    var url = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_0__.cfg.url.api + '/common/help/del/' + appid + '/' + qa + '/' + id;
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    }).then(function (json) {
      return json;
    })["catch"](function (e) {
      return {
        qmessage: e.message
      };
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you do not seem to be known on this device '
    });
    return p2;
  }
};



/***/ })

}]);
//# sourceMappingURL=src_components_Help_js.e3f672567c1b51bf2694.js.map