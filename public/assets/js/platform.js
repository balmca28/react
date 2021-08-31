/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/platform.js":
/*!**********************************!*\
  !*** ./resources/js/platform.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function (e) {
  $("#main-logout-btn").click(function (e) {
    e.preventDefault();
    $("#main-logout-form").submit();
  });
  $(".sidebar_click").click(function () {
    $(".sidebar_click").removeClass("active");
    $(this).addClass("active");
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".sidebar_click") === false) {
      $(".sidebar_click").removeClass("active");
    }
  });
  $(function () {
    // $('[data-tooltip="tooltip"]').tooltip();
    $('body').tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  });
  $('.sidebar_sm_text').show();
  $('.sidebar_open_show_submenu').hide();
  $('.logo-lg').hide();
  $(document).on('click', '.sidebar_toggle_custom', function () {
    $('.main-sidebar').toggleClass("active");
    $('.sidebar_open_arrow').addClass('show_arrow');

    if ($(".main-sidebar").hasClass('active')) {
      $('.main-sidebar').removeClass("main_sidebar_hover"); // $('.main-sidebar > .sidebar > ul > li > a').addClass("sidebar_tab_active");
      // $('.main-sidebar > .sidebar > ul > li > a').css({"text-align":"left", "padding":"16px 20px"});

      $('.main-sidebar > .sidebar > ul > li > a').css({
        "text-align": "left"
      });
      $('.svg_sidebar').css({
        "margin": "5px 0px 5px 23px"
      });
      $('.sidebar-menu li').removeClass('treeview');
      $('.sidebar_sm_text').hide();
      $('.treeview-menu').attr('style', 'display: none !important');
      $('.sidebar-menu li a').addClass("has_submenu_sidebar"); // $('.content-wrapper').css({"margin-left":"230px"});
      // $('.content-wrapper,.main-footer,.main-header').addClass('expand_view');
      // $('.content-wrapper,.main-footer,.main-header').removeClass('shrink_view');

      $('.main-header').addClass('expand_view');
      $('.main-header').removeClass('shrink_view');
      $('.content-wrapper').addClass('expand_view_header');
      $('.content-wrapper').removeClass('shrink_view_header');
      $('.sidebar-logo').removeClass('shrink_width');
      $('.sidebar-logo').addClass('expand_width');
      $('.logo-mini').hide();
      $('.logo-lg').show();
    } else {
      $('.main-sidebar').addClass("main_sidebar_hover");
      $('.sidebar_open_show_submenu').hide();
      $('.sidebar_open_arrow').removeClass('show_arrow');
      $('.sidebar_open_arrow').removeClass('.');
      $('.sidebar_open_arrow>i').removeClass('fa-angle-up').addClass('fa-angle-down'); // $('.main-sidebar > .sidebar > ul > li > a').removeClass("sidebar_tab_active");
      // $('.main-sidebar > .sidebar > ul > li > a').css({"text-align":"center", "padding":"11px 2px"});

      $('.main-sidebar > .sidebar > ul > li > a').css({
        "text-align": "center"
      });
      $('.svg_sidebar').css({
        "margin": "0px 10px 0 10px"
      });
      $('.sidebar_sm_text,.treeview-menu').show();
      $('.treeview-menu').parent('li').addClass("treeview");
      $('.sidebar-menu li a').removeClass("has_submenu_sidebar"); // $('.content-wrapper').css({"margin-left":"70px"});
      // $('.content-wrapper,.main-footer,.main-header').addClass('shrink_view');
      // $('.content-wrapper,.main-footer,.main-header').removeClass('expand_view');

      $('.content-wrapper').addClass('shrink_view_header');
      $('.content-wrapper').removeClass('expand_view_header');
      $('.main-header').addClass('shrink_view');
      $('.main-header').removeClass('expand_view');
      $('.sidebar-logo').addClass('shrink_width');
      $('.sidebar-logo').removeClass('expand_width');
      $('.logo-mini').show();
      $('.logo-lg').hide();
    }
  });
  $(document).on('click', '.has_submenu_sidebar', function () {
    $(this).find('.sidebar_open_arrow>i').toggleClass('fa-angle-up fa-angle-down');
    $(this).next('.sidebar_open_show_submenu').toggle(200);
    $(this).parent('li').parent('ul').parents("li").addClass("active").siblings().removeClass('active');
  });
  $(document).on('click', '.treeview-menu li a', function () {
    $(this).parent('li').parent('ul').parents("li").addClass("active").siblings().removeClass('active');
  });
  $(document).on('click', '.main_db_logo', function () {
    $('.sidebar-menu li:first-child').addClass("active").siblings().removeClass('active');
  });
  $(document).on('click', '.btnClick_act_sidebar', function () {
    $('.sidebar-menu li:nth-child(4)').addClass("active").siblings().removeClass('active');
  });
  $(document).on('click', '.btnClick_act_sidebar1', function () {
    $('.sidebar-menu li:nth-child(3)').addClass("active").siblings().removeClass('active');
  });
});

/***/ }),

/***/ "./resources/sass/AdminLTE.scss":
/*!**************************************!*\
  !*** ./resources/sass/AdminLTE.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/auth.scss":
/*!**********************************!*\
  !*** ./resources/sass/auth.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/bootstrap.scss":
/*!***************************************!*\
  !*** ./resources/sass/bootstrap.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/onboarding.scss":
/*!****************************************!*\
  !*** ./resources/sass/onboarding.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/platform.scss":
/*!**************************************!*\
  !*** ./resources/sass/platform.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/skin-purple-light.scss":
/*!***********************************************!*\
  !*** ./resources/sass/skin-purple-light.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/platform.js ./resources/sass/bootstrap.scss ./resources/sass/platform.scss ./resources/sass/AdminLTE.scss ./resources/sass/skin-purple-light.scss ./resources/sass/auth.scss ./resources/sass/onboarding.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/js/platform.js */"./resources/js/platform.js");
__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/sass/bootstrap.scss */"./resources/sass/bootstrap.scss");
__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/sass/platform.scss */"./resources/sass/platform.scss");
__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/sass/AdminLTE.scss */"./resources/sass/AdminLTE.scss");
__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/sass/skin-purple-light.scss */"./resources/sass/skin-purple-light.scss");
__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/sass/auth.scss */"./resources/sass/auth.scss");
module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/sellerx/app/resources/sass/onboarding.scss */"./resources/sass/onboarding.scss");


/***/ })

/******/ });