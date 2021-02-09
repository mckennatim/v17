(self["webpackChunkablank"] = self["webpackChunkablank"] || []).push([["src_components_AddJob_jsx"],{

/***/ "./src/components/AddJob.jsx":
/*!***********************************!*\
  !*** ./src/components/AddJob.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddJob)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");


function AddJob() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_1__.AContext),
      foundJobs = _useContext.foundJobs,
      setFoundJobs = _useContext.setFoundJobs,
      setJob2edit = _useContext.setJob2edit,
      job2edit = _useContext.job2edit;

  var update = function update() {
    setFoundJobs([{
      job: job2edit,
      category: ''
    }, {
      job: job2edit,
      category: 'maintain'
    }, {
      job: job2edit,
      category: 'treework'
    }]);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.addjob.div0
  }, "AddJob", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, job2edit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: update
  }, "update"));
}
var styles = {
  addjob: {
    div0: {
      backgroundColor: '#c6a7a7'
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=src_components_AddJob_jsx.2f48eb71152c00578570.js.map