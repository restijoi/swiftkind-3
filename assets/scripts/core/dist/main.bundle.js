webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n    <ui-view name=\"navigation\"></ui-view>\n    <ui-view name=\"content\"></ui-view>\n    <ui-view name=\"footer\"></ui-view>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () { new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__["WOW"]().init(); };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_public_module__ = __webpack_require__("../../../../../src/app/public/public.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_includes_includes_module__ = __webpack_require__("../../../../../src/app/public/includes/includes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__states_app_states__ = __webpack_require__("../../../../../src/app/states/app.states.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["UIRouterModule"].forRoot({ otherwise: '/', states: __WEBPACK_IMPORTED_MODULE_6__states_app_states__["a" /* appStates */] }),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__public_public_module__["a" /* PublicModule */],
                __WEBPACK_IMPORTED_MODULE_5__public_includes_includes_module__["a" /* IncludesModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/public/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\n    <div class=\"masthead section\" data-section-name=\"about-us\">\n      <div id=\"masthead\" class=\"particles\"></div>\n        <div class=\"container main-text\">\n           <div class=\"header-content\">\n                <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\n                    WHO WE ARE\n                </h3>\n                <h4>\n                    <span class=\"text-content-wrapper\">\n                        <span typingAnimation [typeSpeed]=\"30\" [startDelay]=\"800\" class=\"wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">We are Swiftkind. We are no-nonsense, creative and dedicated group of individuals working together to produce benchmark products.</span>\n                  </span>\n                </h4>\n            </div>\n        </div>\n        <div class=\"scroll\"></div>\n    </div>\n    <div class=\"about-philosphy wow fadeInUp section\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"intro-text\">\n                        <h3 class=\"wow fadeInUp \" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">Ideas have no boundaries. We have no limits.</h3>\n                        \n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"text-wrapper\">\n                        <div class=\"text-content main \">\n                            <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">Our wide range of expertise combined with honest approach strengthen our relationship with our clients. This fuels us to work harder to come up with products that exceed expectations.</p>\n                            <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\n                                Combining our creative thinking and problem solving skills, we deliver the right solutions that would allow our clients to meet objectives and business requirements. \n                            </p>\n                        </div>\n                        <div class=\"text-content\">\n                            <a uiSref=\"works\" class=\" wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"2.5s\">VIEW OUR PROJECTS<img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\"></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"light-section \">\n            <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                We also take immense pride on our dedication to our clients through swift response and exceptional customer service. With full enthusiasm, we seek to build solid long term relationship based on trust.\n            </p>\n            <div class=\"item-links\">\n                <a uiSref=\"process\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">KNOW  OUR PROCESS\n                    <img src=\"/static/images/arrow-right-black.svg\" class=\"arrow-sm\">\n                </a>\n                <div class=\"link-options\">\n                    <a uiSref=\"contact\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">START A PROJECT WITH US\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"office\">\n            <div class=\"office-caption\">\n                <div>\n                    <p>\n                        Our team is working together to build a positive, proactive and stimulating environment. Every team member pushes their limits to turn brave ideas into a working and fully usable products.\n                    </p>\n                    <a href=\"#\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">VISIT  OUR BLOG\n                        <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"people\">\n            <div class=\"section-title\">\n                <div class=\"bg-anim\">\n                    <span class=\"text-anim wow inverted-text\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\" >OUR TEAM</span>\n                    <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                </div>\n            </div>\n            <div class=\"caption\">\n                <h3>\n                    <div class=\"bg-anim\">\n                        <span class=\"text-anim wow inverted-text\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\" > People <strong>behind Swiftkind</strong></span>\n                        <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\"></div>\n                    </div>\n                    </h3>\n                <p  class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.75s\">\n                   A small team of keen, specialized and diverse people believing that our works could improve people's daily lives. Fueled by our passion for our work, we pursue learing to keep up with the best practices and industry standards.\n                </p>\n            </div>\n            <div class=\"owl-carousel team-carousel\" id=\"team-carousel\">\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/earvin3.png\" class=\"img1\">\n                            <img src=\"/static/images/team/earvin1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Earvin Gemenez</a>\n                                <p>CEO</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/ralph2.png\" class=\"img1\">\n                            <img src=\"/static/images/team/ralph1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Ralph Leyga</a>\n                                <p>COO</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/manny2.png\" class=\"img1\">\n                            <img src=\"/static/images/team/manny1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Manny Candidier</a>\n                                <p>CTO</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/resty3.png\" class=\"img1\">\n                            <img src=\"/static/images/team/resty2.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Restie Antiquin</a>\n                                <p>UI/UX Designer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/kevin3.png\" class=\"img1\">\n                            <img src=\"/static/images/team/kevin1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Kevin Kalis</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/gong3.png\" class=\"img1\">\n                            <img src=\"/static/images/team/gong1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Jerome Rumbaoa</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/dudz1.png\" class=\"img1\">\n                            <img src=\"/static/images/team/dudz2.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Sanny Candidier</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/cholo3.png\" class=\"img1\">\n                            <img src=\"/static/images/team/cholo1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Pocholo Recto</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/king1.png\" class=\"img1\">\n                            <img src=\"/static/images/team/king2.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">King Rule</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/kolai1.png\" class=\"img1\">\n                            <img src=\"/static/images/team/kolai3.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Nikolai Teves</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/mike1.png\" class=\"img1\">\n                            <img src=\"/static/images/team/mike2.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Michael Sy</a>\n                                <p>Software Engineer</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/sam2.png\" class=\"img1\">\n                            <img src=\"/static/images/team/sam1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Sam Benemerito</a>\n                                <p>Intern</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/mae3.png\" class=\"img1\">\n                            <img src=\"/static/images/team/mae1.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Christian Mae Mendez</a>\n                                <p>Intern</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"img-holder\">\n                        <div class=\"member-img\">\n                            <img src=\"/static/images/team/sai1.png\" class=\"img1\">\n                            <img src=\"/static/images/team/sai3.png\" class=\"img2\">\n                            <div class=\"details\">\n                                <a href=\"#\">Isaiah Villa Abrille</a>\n                                <p>Intern</p>\n                                <div class=\"external-links\">\n                                  <a href=\"#\"><span class=\"ion-social-github\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-social-linkedin\"></span></a>\n                                  <a href=\"#\"><span class=\"ion-ios-upload\"></span></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"principles section\">\n            <div class=\"section-title\">\n                <div class=\"bg-anim\">\n                    <span class=\"text-anim\">WHAT WE BELIEVE IN</span>\n                    <div class=\"anim\"></div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row flex\">\n                    <div class=\"col-md-6 col-sm-12 no-padding\">\n                    <div class=\"principles-header\">\n                       <h2 class=\"wow hidden-xs\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0s\">To ensure quality,</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0s\"></div>\n                                </div>\n                            </span>\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">we assume responsibility</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                </div>\n                            </span>\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">for the project throughout</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\"></div>\n                                </div>\n                            </span>\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\">the entire process.</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\"></div>\n                                </div>\n                            </span>\n                        </h2>\n                       <h2 class=\"wow visible-xs\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0s\">To ensure quality, we</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0s\"></div>\n                                </div>\n                            </span>\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">assume responsibility</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                </div>\n                            </span>\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">for the project throughout</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\"></div>\n                                </div>\n                            </span>\n                            <span>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\">the entire process.</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\"></div>\n                                </div>\n                            </span>\n                        </h2>\n                    </div>\n                </div>\n                <div class=\"col-md-offset-1 col-md-5 col-sm-12\">\n                    <div class=\"principles-header\">\n                        <p class=\"fadeInUp wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\">Believing that quality is the core of our work, we are taking one step at time by defining what actually matters to us.</p>\n                    </div>\n\n                </div>\n                <div class=\"row no-margin\">\n                    <div class=\"col-md-5 col-sm-12\">\n                        <div class=\"principles-content\">\n                            <h3>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\">Our purpose</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\"></div>\n                                </div>\n                            </h3>\n                            <p  class=\"fadeInUp wow\" data-wow-duration=\"1s\" data-wow-delay=\"2s\">\n                                We design and develop applications that kick off the way people work, play and live. Our designers and strategists work closely to identify needs, design and define functionalities, determine timelines that would allow us to deal with any contingencies and deliver on time.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-offset-2 col-md-5 col-sm-12 col-sm-offset-0 \">\n                        <div class=\"principles-content\">\n                            <h3>\n                                <div class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\">Our mission</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.5s\"></div>\n                                </div>\n                            </h3>\n                            <p  class=\"fadeInUp wow\" data-wow-duration=\"1s\" data-wow-delay=\"2s\">\n                                We dream of a world where we can inspire more people to create greater solutions that would give everyone the capacity to solve more problems and make everyday life easier by the use of the technology, creativity and skills we have.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"contact-link\">\n        <h4 class=\"text-bg\">WORK WITH US</h4>\n        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Let's create something amazing</h3>\n        <a uiSref=\"contact\" class=\"inverted-link wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">MAKE IT HAPPEN</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(app) {
        this.app = app;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.ngAfterViewInit = function () { new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__["WOW"]().init(); };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/public/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public/includes/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-content\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-5 col-sm-5\">\n              <h3>contact@swiftkind.com</h3>\n              <p>\n                  Door 1, 3rd Floor, Consuelo Building, J.P. Laurel Avenue, Lanang, Davao City, Philippines, 8000\n              </p>\n              <p>\n                  (082) 225 - 1050\n              </p>\n          </div>\n          <div class=\"col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1\">\n              <p>\n                  <strong>WHAT'S NEW</strong>\n              </p>\n              <div id=\"\" class=\"carousel vertical slide pagelinks\">\n                  <div class=\"carousel-inner\" role=\"listbox\">\n                      <div class=\"item active\">\n                          <p>\n                              Looking for a <a href=\"#\">Full-Stack Developer</a>\n                          </p>\n                      </div>\n                      <div class=\"item\">\n                          <p>Transferred to new office</p>\n                      </div>\n                      <div class=\"item\">\n                          <p>Building a search engine</p>\n                      </div>\n                      <div class=\"item\">\n                          <p>Working with Safari Pages</p>\n                      </div>\n                  </div>\n              </div>\n              <div id=\"\" class=\"carousel vertical slide pagelinks\">\n                  <div class=\"carousel-inner\" role=\"listbox\">\n                      <div class=\"item \">\n                          <p>\n                              Looking for a <a href=\"#\">Full-Stack Developer</a>\n                          </p>\n                      </div>\n                      <div class=\"item active\">\n                          <p>Transferred to new office</p>\n                      </div>\n                      <div class=\"item\">\n                          <p>Builing a search engine</p>\n                      </div>\n                      <div class=\"item\">\n                          <p>Working with Safari Pages</p>\n                      </div>\n                  </div>\n              </div>\n              <div id=\"\" class=\"carousel vertical slide pagelinks\">\n                  <div class=\"carousel-inner\" role=\"listbox\">\n                      <div class=\"item \">\n                          <p>\n                              Looking for a <a href=\"#\">Full-Stack Developer</a>\n                          </p>\n                      </div>\n                      <div class=\"item \">\n                          <p>Transferred to new office</p>\n                      </div>\n                      <div class=\"item active\">\n                          <p>Builing a search engine</p>\n                      </div>\n                      <div class=\"item\">\n                          <p>Working with Safari Pages</p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-3  col-sm-3\">\n              <p>\n                  <strong>FOLLOW US</strong>\n              </p>\n              <p>\n                  <a href=\"https://github.com/Swiftkind\">Github</a>\n              </p>\n              <p>\n                  <a href=\"https://www.behance.net/restyantiqc47e\">Behance</a>\n              </p>\n              <p>\n                  <a href=\"https://www.facebook.com/swiftkind/?ref=br_rs\">Facebook</a>\n              </p>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"copyright container-fluid\">\n  <a href=\"\">COPYRIGHT  SWIFTKIND 2018</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/includes/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/includes/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/public/includes/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/includes/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public/includes/includes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncludesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/public/includes/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/public/includes/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IncludesModule = /** @class */ (function () {
    function IncludesModule() {
    }
    IncludesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["UIRouterModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */]]
        })
    ], IncludesModule);
    return IncludesModule;
}());



/***/ }),

/***/ "../../../../../src/app/public/includes/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-nav\">\n  <ul class=\"\">\n      <li>\n          <a uiSref=\"index\" class=\"hvr-underline-from-center\">HOME</a>\n      </li>\n      <li>\n          <a uiSref=\"about\" class=\"hvr-underline-from-center\">OUR STORY</a>\n      </li>\n      <li>\n          <a uiSref=\"process\" class=\"hvr-underline-from-center\">HOW WE WORK</a>\n      </li>\n      <li>\n          <a uiSref=\"works\" class=\"hvr-underline-from-center\">PROJECTS</a>\n      </li>\n      <li>\n          <a uiSref=\"http://blog.swiftkind.com\" class=\"hvr-underline-from-center\">JOURNAL</a>\n      </li>\n      <li>\n          <a uiSref=\"contact\" class=\"hvr-underline-from-center\">CONTACT</a>\n      </li>\n  </ul>\n</div>\n<nav class=\"navbar main-nav main-nav-sticky\">\n      <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n              <a uiSref=\"index\" class=\"navbar-brand\">\n                  <img src=\"/static/images/nav-logo.svg\" class=\"nav-logo\">\n              </a>\n          </div>\n          <ul class=\"nav navbar navbar-nav navbar-right nav-links\">\n              <li>\n                  <a uiSref='about' class=\"hvr-underline-from-center\">OUR STORY</a>\n              </li>\n              <li>\n                  <a uiSref=\"process\" class=\"hvr-underline-from-center\">HOW WE WORK</a>\n              </li>\n              <li>\n              \n                  <a uiSref=\"works\" class=\"hvr-underline-from-center\">PROJECTS</a>\n              </li>\n              <li>\n                  <a href=\"http://blog.swiftkind.com\" class=\"hvr-underline-from-center\">JOURNAL</a>\n              </li>\n              <li>\n                  <a uiSref=\"contact\" class=\"hvr-underline-from-center\">CONTACT</a>\n              </li>\n          </ul>\n          <ul class=\"nav navbar navbar-nav navbar-right\">\n              <li>\n                  <a href=\"#\" class=\"mobile-nav\">\n                      <span class=\"bar top\"></span>\n                      <span class=\"menu\">MENU</span>\n                      <span class=\"bar bottom\"></span>\n                  </a>\n              </li>\n          </ul>\n      </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/public/includes/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/includes/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(stateService) {
        this.stateService = stateService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/public/includes/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/includes/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__uirouter_angular__["StateService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"masthead main-masthead section\">\n        <div id=\"masthead\" class=\"particles\"></div>\n        <div class=\"container main-text\">\n            <h5 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">WE ARE <STRONG>SWIFTKIND</STRONG></h5>\n            <h1 class=\"hidden-xs wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                PRODUCT &amp; DEVELOPMENT AGENCY FOR DIGITAL USERS.\n            </h1>\n            <h1 class=\"visible-xs wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\n                PRODUCT &amp; DEVELOPMENT AGENCY FOR DIGITAL USERS.\n            </h1>\n            <h4 >\n               <span class=\"text-content-wrapper\">\n                    <span typingAnimation [typeSpeed]=\"30\" [startDelay]=\"800\" class=\"wow\" data-wow-duration=\"3s\" data-wow-delay=\"0s\">With the right ideas, execution, and people we can create something fantastic.</span>\n              </span>\n            </h4>\n        </div>\n        <div class=\"container footnote\">\n            <div class=\"left\">\n                <p>WEB</p>\n                <p>UI/UX</p>\n                <p>DEVELOPMENT</p>\n            </div>\n            <div class=\"right\">\n                <a uiSref=\"works\">EXPLORE OUR WORK <img src=\"/static/images/arrow-right.svg\"></a>\n            </div>\n        </div>   \n         <div class=\"scroll\"></div>\n    </div>\n    <div class=\"intro-text section\">\n        <div class=\"container\">\n            <h3 class=\"wow fadeInUp hidden-xs\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">We're crafting digital solutions <br/>to step up your game.</h3>\n            <h3 class=\"wow fadeInUp visible-xs\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">We're crafting digital solution to step up your game.<</h3>\n            <h4 class=\"wow fadeInUp\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">\n                Committed to deliver products that innovate the way people connect and work. Creating experiences that help individuals, startups, brands and corporations innovate and change lives.\n            </h4>\n            <div class=\"row\">\n                <div class=\"col-md-7 col-xs-12\">\n                    <div class=\"col-md-4 col-xs-4\">\n                        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                            13\n                        </h3>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                            Team Members\n                        </p>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" >\n                        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                            19\n                        </h3>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                            Total Projects\n                        </p>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\">\n                        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                            02\n                        </h3>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                           Years Experience\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item-links\">\n                <a uiSref=\"contact\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">CONTACT US\n                    <img src=\"/static/images/arrow-right.svg\">\n                </a>\n                <div class=\"link-options\">\n                    <a href=\"https://github.com/Swiftkind\" class=\"wow fadeInUp\" target=\"_blank\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.75s\">GITHUB</a>\n                    <a href=\"https://www.behance.net/restyantiqc47e\" class=\"wow fadeInUp\" target=\"_blank\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">BEHANCE</a>\n                    <a href=\"https://www.facebook.com/swiftkind/\" class=\"wow fadeInUp\" target=\"_blank\" data-wow-duration=\"0.5s\" data-wow-delay=\"1.2s\">FACEBOOK</a>\n                </div>\n            </div>\n        </div>\n    </div>\n        \n    <div class=\"services-section section\">\n        <div class=\"section-title\">\n            <div class=\"bg-anim\">\n                <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\" >THINGS WE'RE GOOD AT</span>\n                <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n            </div>\n        </div>\n        <div class=\"\">\n            <div class=\"item section\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                <div class=\"svc-label visible-xs\">\n                                    <span class=\"number\">01</span>\n                                    <h2 class=\"bg-anim\">\n                                        <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">Web Applications</span>\n                                        <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                    </h2>\n                                </div>\n                                <div class=\"flex-center svc-img left wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                                    <img src=\"/static/images/webapp.svg\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                <div class=\"flex-center svc-details\">\n                                    <div>\n                                        <div class=\"svc-label hidden-xs\">\n                                            <span class=\"number\">01</span>\n                                            <h2 class=\"bg-anim\">\n                                                <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">Web Applications</span>\n                                                <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                            </h2>\n                                        </div>\n                                        <p class=\"svc-desc fadeInUp wow\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.2s\">\n                                            We develop complex web applications using the cutting-edge technologies that are fully focused on our client's needs and business requirements. Specializing in crafting corporate applications fully optimized to enhance productivity and user experience. \n                                        </p>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                 <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Python (2.x & 3.x)</h4>\n                                                 <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">Django Framework</h4>\n                                                 <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.6s\">Restful APIs (DRF)</h4>\n                                                 <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.8s\">Angular JS (1.x,2 & 4)</h4>\n                                                 <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">JavaScript (ES5/ES6)</h4>\n                                                 <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1.2s\">MySQL, Sqlite, PostgreSQL</h4>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Linux/Ubuntu (DO, AWS)</h4>\n                                                <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">HTML5/CSS3 (Sass/Less)</h4>\n                                                <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.6s\">Bootstrap/Bulma/SemanticUI</h4>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n            </div> \n            <div class=\"item section\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"svc-label visible-xs\">\n                                <span class=\"number\">02</span>\n                                <h2 class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">UI/UX Design</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                </h2>\n                            </div>\n                            <div class=\"flex-center svc-img right wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">\n                                <img src=\"/static/images/ui-ux.svg\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"flex-center svc-details\">\n                                <div>\n                                    <div class=\"svc-label hidden-xs\">\n                                        <span class=\"number\">02</span>\n                                        <h2 class=\"bg-anim\">\n                                            <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">UI/UX Design</span>\n                                            <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                        </h2>\n                                    </div>\n                                    <p class=\"svc-desc fadeInUp wow\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.5s\">\n                                        From Wireframes to Prototypes, we create original and effective  designs to produce top-notch user-centered experience for both usability and aesthetics. \n                                    </p>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Sketch</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">Photoshop</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Adobe XD</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Illustrator</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Invision</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Zeplin</h4>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Prototyping</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">Responsive design</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Wireframes</h4>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item section\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"svc-label visible-xs\">\n                                <span class=\"number\">03</span>        \n                                <h2 class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"> Cross-platform apps</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                </h2>\n                            </div>\n                            <div class=\"flex-center svc-img left  wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">\n                                <img src=\"/static/images/cross-platform.svg\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"flex-center svc-details\">\n                                <div>\n                                    <div class=\"svc-label hidden-xs\">\n                                        <span class=\"number\">03</span>        \n                                        <h2 class=\"bg-anim\">\n                                            <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"> Cross-platform apps</span>\n                                            <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                        </h2>\n                                    </div>\n                                    <p class=\"svc-desc fadeInUp wow\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.5s\">\n                                        We extend our capability on creating web applications that can be converted into mobile apps without any sweat. Using these technologies, we are able to create a platform that can easily be compiled to any types of mobile devices (iOS & Android).\n                                    </p>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Ionic</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">AngularJS</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Firebase</h4>\n                                             <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Titanium</h4>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item section\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"svc-label visible-xs\">\n                                <span class=\"number\">04</span>\n                                <h2 class=\"bg-anim\">\n                                    <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">API Development</span>\n                                    <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                </h2>\n                            </div>\n                            <div class=\"flex-center svc-img right\">\n                                <img src=\"/static/images/api.svg\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"flex-center svc-details\">\n                                <div>\n                                    <div class=\"svc-label hidden-xs\">\n                                        <span class=\"number\">04</span>\n                                        <h2 class=\"bg-anim\">\n                                            <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">API Development</span>\n                                            <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n                                        </h2>\n                                    </div>\n                                    <p class=\"svc-desc fadeInUp wow\" data-wow-duration=\"0.75s\" data-wow-delay=\"0.5s\">\n                                        We create independent backend APIs for web and mobile platforms. These backend servers are light and flexible on sending and receiving data from multiple different platforms (Web, Mobile, Smart Devices, etc...).\n                                    </p>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Django Rest Framework</h4>\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">Linux/Ubuntu Servers</h4>\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Nginx (uwsgi/gunicorn)</h4>\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">AWS</h4>\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Digital Ocean</h4>\n                                            <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.7s\">Celery (Real-time tool)</h4>\n                                        </div>\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> \n        </div>\n    </div>\n\n    <div class=\"screen-section section\" data-section-name=\"our-projects\">\n        <div class=\"section-title\">\n            <div class=\"bg-anim\">\n                <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\" >STUFF WE'RE PROUD OF</span>\n                <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n            </div>\n        </div>\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper blackpearl\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-4.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/projects/book-ipad2.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                    <li>\n                                        <p>UI/UX</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">BOOK APP</p>\n                                <a uiSref=\"bookapp\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper midnight\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.6s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-5.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/tracker-1.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                    <li>\n                                        <p>UI/UX</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">TRACKR.</p>\n                                <a uiSref=\"trackr\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper midnight\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.8s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-6.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/projects/learn-ipad1.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                    <li>\n                                        <p>UI/UX</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">SWIFTLEARN</p>\n                                <a uiSref=\"learn\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper blackpearl\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-7.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/projects/jobs-ipad2.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                   <li>\n                                        <p>UI/UX</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">JOBS</p>\n                                <a uiSref=\"jobs\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bottom-link\">\n               <a uiSref=\"works\" class=\"primary-link\">VIEW MORE <strong>CASE STUDIES</strong>  <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\"></a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"testimonies\">\n        <div class=\"section-title\">\n            <div class=\"bg-anim\">\n                <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">WHAT OUR CLIENTS SAY</span>\n                <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n            </div>\n        </div>\n\n       <div class=\"container\">\n            <carousel>\n            <slide>\n                <div class=\"item\">\n                    <p class=\"testimony\">\n                        To be a consistent winner means preparing not just one day, one month, or even one year — but for a lifetime.\n                    </p>\n                    <div class=\"author\">\n                        <span class=\"line\"></span>\n                        <div>\n                            <p class=\"name\">\n                                Dan Red\n                            </p>\n                            <p class=\"designation\">\n                                CEO, Company Inc.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </slide>\n            <slide>\n                <div class=\"item\">\n                    <p class=\"testimony\">\n                        To be a consistent winner means preparing not just one day, one month, or even one year — but for a lifetime.\n                    </p>\n                    <div class=\"author\">\n                        <span class=\"line\"></span>\n                        <div>\n                            <p class=\"name\">\n                                Dan Red1\n                            </p>\n                            <p class=\"designation\">\n                                CEO, Company Inc.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </slide>\n            <slide>\n                <div class=\"item\">\n                    <p class=\"testimony\">\n                        To be a consistent winner means preparing not just one day, one month, or even one year — but for a lifetime.\n                    </p>\n                    <div class=\"author\">\n                        <span class=\"line\"></span>\n                        <div>\n                            <p class=\"name\">\n                                Dan Red3\n                            </p>\n                            <p class=\"designation\">\n                                CEO, Company Inc.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </slide>\n        </carousel>\n       </div>\n    </div>\n\n    <div class=\"contact-link\">\n        <h4 class=\"text-bg\">WORK WITH US</h4>\n        <h3 class=\"\" >\n            <div class=\"bg-anim\">\n                <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Let's create something amazing</span>\n                <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\"></div>\n            </div>\n        </h3>\n        <a uiSref=\"contact\" class=\"inverted-link wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">MAKE IT HAPPEN</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.ngAfterViewInit = function () { new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__["WOW"]().init(); };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/public/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public/process/process.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"masthead section\">\n        <div id=\"masthead\" class=\"particles\"></div>\n        <div class=\"container main-text\">\n            <div class=\"header-content\">\n                <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\n                    HOW WE WORK\n                </h3>\n                <h4>\n                    <span class=\"text-content-wrapper\">\n                        <span typingAnimation [typeSpeed]=\"30\" [startDelay]=\"800\" class=\"wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">Though our projects are uniquely tailored for each client, our methodology stays consistent. </span>\n                  </span>\n                </h4>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"our-process\">\n        <div class=\"container\">\n            <div class=\"process-block\">\n                <div class=\"pro-content\" id=\"pro-descovery\" >\n                    <div class=\"process-label text-center\" id=\"li-descovery\">\n                        <a href=\"#\" class=\"label-link center\">\n                            <span class=\"link-wrapper\">\n                                <span class=\"link\" >\n                                    <span class=\"text \">\n                                        <div class=\"bg-anim\">\n                                            <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">DISCOVERY</span>\n                                            <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                        </div>\n                                    </span>\n                                    <span class=\"blink\"></span>\n                                </span>\n                                <span class=\"line\"></span>\n                            </span>\n                        </a>\n                        <div class=\"block-description\">\n                            <p>Lyft jean shorts sriracha 8-bit irony live-edge PBR&B messenger bag swag. Jean shorts trust fund dreamcatcher everyday carry ennui shaman whatever vaporware, hoodie church-key taxidermy freegan fashion axe live-edge godard. Taiyaki tacos live-edge pop-up umami farm-to-table asymmetrical wayfarers kinfolk pabst.</p>\n                        </div>\n                    </div>\n                    <div class=\"discovery-icons\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 thumb\">\n                                <div class=\"text-center\">\n                                    <img src=\"/static/images/project.svg\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                                </div>\n                                <div class=\"text-center\">\n                                    <p class=\"title wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">HOURLY BASIS</p>\n                                    <p class=\"description wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.75s\">We charge on an hourly basis, to minimise extra fees.</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4 thumb\">\n                                <div class=\"text-center\">\n                                    <img src=\"/static/images/dedicated.svg\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                                </div>\n                                <div class=\"text-center\">\n                                    <p class=\"title wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">PROJECT BASED</p>\n                                    <p class=\"description  wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.75s\">We estimate our time by project, so there are no hidden costs.</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4 thumb\">\n                                <div class=\"text-center\">\n                                    <img src=\"/static/images/hourly.svg\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                                </div>\n                                <div class=\"text-center\">\n                                    <p class=\"title wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">DEDICATED TEAM</p>\n                                    <p class=\"description  wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.75s\">We allocate a whole team for you, for constant support of your project.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"path\">\n                            <span class=\"line left  wow process-path-side \" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\"></span>\n                            <span class=\"line center  wow process-path-center\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\"></span>\n                            <span class=\"line right  wow process-path-side\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\"></span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"pro-content\" id=\"pro-architecture\">\n                    <div class=\"process-label text-center wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\" id=\"li-architecture\">\n                        <a href=\"#\" class=\"label-link center\">\n                            <span class=\"link-wrapper\">\n                                <span class=\"link\">\n                                    <span class=\"text\">\n                                        <div class=\"bg-anim\">\n                                            <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">PROJECT ARCHITECTURE</span>\n                                            <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                        </div>\n                                    </span>\n                                    <span class=\"blink\"></span>\n                                </span>\n                                <span class=\"line\"></span>\n                            </span>\n                        </a>\n                        <div class=\"block-description\">\n                            <p>Lyft jean shorts sriracha 8-bit irony live-edge PBR&B messenger bag swag. Jean shorts trust fund dreamcatcher everyday carry ennui shaman whatever vaporware, hoodie church-key taxidermy freegan fashion axe live-edge godard. Taiyaki tacos live-edge pop-up umami farm-to-table asymmetrical wayfarers kinfolk pabst.</p>\n                        </div>\n                    </div>\n                    <div class=\"path\">\n                        <span class=\"line center wow process-path-center \" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\"></span>\n                    </div>\n                </div>\n                <div class=\"pro-content\" id=\"pro-iteration\">\n                    <img src=\"/static/images/iterate.svg\" class=\"img-responsive img-iterate\">\n                    <div class=\"left-label\">\n                        <div class=\"process-label text-center wow fadeInRight\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\" id=\"li-development\">\n                            <a href=\"#\" class=\"label-link center\">\n                                <span class=\"link-wrapper\">\n                                    <span class=\"link\">\n                                            <span class=\"text\">\n                                                <div class=\"bg-anim\">\n                                                    <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">DEVELOPMENT</span>\n                                                    <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                                </div>\n                                            </span>\n                                        <span class=\"blink\"></span>\n                                    </span>\n                                    <span class=\"line\"></span>\n                                </span>\n                            </a>\n                            <div class=\"block-description\">\n                                <p>Lyft jean shorts sriracha 8-bit irony live-edge PBR&B messenger bag swag. Jean shorts trust fund dreamcatcher everyday carry ennui shaman whatever vaporware, hoodie church-key taxidermy freegan fashion axe live-edge godard. Taiyaki tacos live-edge pop-up umami farm-to-table asymmetrical wayfarers kinfolk pabst.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"right-label\">\n                        <div class=\"process-label text-center wow fadeInLeft\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\" id=\"li-planning\">\n                            <a href=\"#\" class=\"label-link center\">\n                                <span class=\"link-wrapper\">\n                                    <span class=\"link\">\n                                        <span class=\"text\">\n                                            <div class=\"bg-anim\">\n                                                <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">SPRINT PLANNING</span>\n                                                <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                            </div>\n                                        </span>\n                                        <span class=\"blink\"></span>\n                                    </span>\n                                    <span class=\"line\"></span>\n                                </span>\n                            </a>\n                            <div class=\"block-description\">\n                                <p>Lyft jean shorts sriracha 8-bit irony live-edge PBR&B messenger bag swag. Jean shorts trust fund dreamcatcher everyday carry ennui shaman whatever vaporware, hoodie church-key taxidermy freegan fashion axe live-edge godard. Taiyaki tacos live-edge pop-up umami farm-to-table asymmetrical wayfarers kinfolk pabst.</p>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"pro-content\" id=\"pro-launch\">\n                    <div class=\"path\">\n                        <span class=\"line center wow process-path-center \" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\"></span>\n                    </div>\n                    <div class=\"process-label text-center wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\" id=\"li-launch\">\n                        <a href=\"#\" class=\"label-link center\">\n                            <span class=\"link-wrapper\">\n                                <span class=\"link\">\n                                    <span class=\"text\">\n                                        <div class=\"bg-anim\">\n                                            <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">SHIP AND MAINTAIN</span>\n                                            <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\"></div>\n                                        </div>\n                                    </span>\n                                    <span class=\"blink\"></span>\n                                </span>\n                                <span class=\"line\"></span>\n                            </span>\n                        </a>\n                        <div class=\"block-description\">\n                            <p>Lyft jean shorts sriracha 8-bit irony live-edge PBR&B messenger bag swag. Jean shorts trust fund dreamcatcher everyday carry ennui shaman whatever vaporware, hoodie church-key taxidermy freegan fashion axe live-edge godard. Taiyaki tacos live-edge pop-up umami farm-to-table asymmetrical wayfarers kinfolk pabst.</p>\n                        </div>\n                    </div>\n                    \n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"process-values\">\n        <div class=\"section-title\">\n            <p>OUR STANDPOINT</p>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"featured-quote\">\n                        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n                            We differentiate ourselves by being extremely attentive to our clients. Helping them in any way we can even if it doesn't benefit us immediately. Because that's what our clients are going to remember.\n                        </h3>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">\n                            -  Earvin Gemenez, CEO\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"values-header\">\n                        <div class=\"bg-anim\">\n                            <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\">Our Standards</span>\n                            <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-6 pv-item \">\n                    <img src=\"/static/images/simple.svg\" class=\"img-responsive wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">\n                    <div>\n                        <h4>\n                            <div class=\"bg-anim\">\n                                <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.6s\">KEEP IT SIMPLE</span>\n                                <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.6s\"></div>\n                            </div>\n                        </h4>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.8s\">\n                        Shaman taxidermy plaid messenger bag knausgaard blue bottle cred crucifix street art fanny pack craft beer.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-6 pv-item\">\n                    <img src=\"/static/images/no-errors.svg\" class=\"img-responsive wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.6s\">\n                    <div>\n                        <h4>\n                            <div class=\"bg-anim\">\n                                <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.8s\">ERROR SHOULD NEVER PASS SILENTLY</span>\n                                <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.8s\"></div>\n                            </div>\n                        </h4>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">\n                        Shaman taxidermy plaid messenger bag knausgaard blue bottle cred crucifix street art fanny pack craft beer.\n                    </p>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-6 pv-item\">\n                    <img src=\"/static/images/quality.svg\" class=\"img-responsive  wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1.8s\">\n                    <div>\n                        <h4>\n                            <div class=\"bg-anim\">\n                                <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"0.8s\">QUALITY OVER QUANTITY</span>\n                                <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1s\"></div>\n                            </div>\n                        </h4>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1.2s\">\n                        Shaman taxidermy plaid messenger bag knausgaard blue bottle cred crucifix street art fanny pack craft beer.\n                        </p>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-6 pv-item\">\n                    <img src=\"/static/images/better.svg\" class=\"img-responsive wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"2s\">\n                    <div>\n                        <h4>\n                            <div class=\"bg-anim\">\n                                <span class=\"text-anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.2s\">MAKE IT BETTER, EVERY DAY</span>\n                                <div class=\"anim wow\" data-wow-duration=\"1s\" data-wow-delay=\"1.2s\"></div>\n                            </div>\n                        </h4>\n                        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1.4s\">\n                            Shaman taxidermy plaid messenger bag knausgaard blue bottle cred crucifix street art fanny pack craft beer.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"contact-link\">\n        <h4 class=\"text-bg\">WORK WITH US</h4>\n        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">Let's create something amazing</h3>\n        <a uiSref=\"contact\" class=\"inverted-link wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">MAKE IT HAPPEN</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/process/process.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/process/process.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessComponent = /** @class */ (function () {
    function ProcessComponent() {
    }
    ProcessComponent.prototype.ngOnInit = function () {
    };
    ProcessComponent.prototype.ngAfterViewInit = function () { new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__["WOW"]().init(); };
    ProcessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-process',
            template: __webpack_require__("../../../../../src/app/public/process/process.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/process/process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessComponent);
    return ProcessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/public/public.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("../../../../@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_typing_animation__ = __webpack_require__("../../../../angular-typing-animation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_index_component__ = __webpack_require__("../../../../../src/app/public/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/public/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__process_process_component__ = __webpack_require__("../../../../../src/app/public/process/process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__works_works_component__ = __webpack_require__("../../../../../src/app/public/works/works.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["UIRouterModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_carousel__["a" /* CarouselModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__index_index_component__["a" /* IndexComponent */], __WEBPACK_IMPORTED_MODULE_3_angular_typing_animation__["a" /* TypingAnimationDirective */], __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_7__process_process_component__["a" /* ProcessComponent */], __WEBPACK_IMPORTED_MODULE_8__works_works_component__["a" /* WorksComponent */]]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "../../../../../src/app/public/works/works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <div class=\"masthead main-masthead section\" data-section-name=\"projects\">\n        <div class=\"container main-text\">\n            <div class=\"header-content\">\n                <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.5s\">\n                    STUFF WE'RE PROUD OF\n                </h3>\n                <h4>\n                    <span class=\"text-content-wrapper\">\n                        <span typingAnimation [typeSpeed]=\"30\" [startDelay]=\"800\" class=\"wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">Our constant desire to build solutions using cutting-edge technologies often leads us to enjoyable experiences. </span>\n                  </span>\n                </h4>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"screen-section section\" data-section-name=\"our-projects\">\n        <div class=\"section-title\">\n            <div class=\"bg-anim\">\n                <span class=\"text-anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">LATEST WORKS</span>\n                <div class=\"anim wow\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\"></div>\n            </div>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper blackpearl\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-4.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/projects/book-ipad2.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                    <li>\n                                        <p>UI/UX DESIGN</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">BOOK APP</p>\n                                <a uiSref=\"bookapp\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper midnight\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.6s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-5.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/tracker-1.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                    <li>\n                                        <p>UI/UX DESIGN</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">TRACKR.</p>\n                                <a href=\"{% url 'trackr\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper midnight\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.8s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-6.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/projects/learn-ipad1.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                    <li>\n                                        <p>UI/UX DESIGN</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">SWIFTLEAR</p>\n                                <a href=\"{% url 'learn\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 no-padding\">\n                    <div class=\"img-wrapper blackpearl\">\n                        <div class=\"content-holder wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"1s\">\n                            <div class=\"img-holder\">\n                                <img src=\"/static/images/layer-7.png\" class=\"img-responsive img1\">\n                                <img src=\"/static/images/projects/jobs-ipad2.png\" class=\"img-responsive img2\">\n                            </div>\n                            <div class=\"content-wrapper\">\n                                <ul class=\"techs\">\n                                   <li>\n                                        <p>UI/UX DESIGN</p>\n                                    </li>\n                                    <li>\n                                        <p>PYTHON</p>\n                                    </li>\n                                    <li>\n                                        <p>DJANGO</p>\n                                    </li>\n                                    <li>\n                                        <p>ANGULAR</p>\n                                    </li>\n                                </ul>\n                                <p class=\"title\">JOBS</p>\n                                <a href=\"{% url 'jobs\" class=\"link-bordered hvr-sweep-to-right\">\n                                    VIEW CASE STUDIES \n                                    <img src=\"/static/images/arrow-right.svg\" class=\"arrow-sm\">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"light-section\">\n        <p class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0s\">\n            We offer our services from  the idea conceptualization to shipping final digital products. Most of the time, we're here to support companies, Startups and individual make a better world.\n        </p>\n        <div class=\"item-links\">\n            <a href=\"#\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.2s\">KNOW <strong>OUR STORY</strong>\n                <img src=\"/static/images/arrow-right.svg\">\n            </a>\n            <div class=\"link-options\">\n                <a href=\"https://github.com/Swiftkind\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.4s\">GITHUB</a>\n                <a href=\"https://www.behance.net/restyantiqc47e\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.6s\">BEHANCE</a>\n                <a href=\"https://www.facebook.com/swiftkind/?ref=br_rs\" class=\"wow fadeInUp\" data-wow-duration=\"0.5s\" data-wow-delay=\"0.8s\">FACEBOOK</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/works/works.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/works/works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__ = __webpack_require__("../../../../wowjs/dist/wow.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent.prototype.ngAfterViewInit = function () { new __WEBPACK_IMPORTED_MODULE_1_wowjs_dist_wow_min__["WOW"]().init(); };
    WorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-works',
            template: __webpack_require__("../../../../../src/app/public/works/works.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public/works/works.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/states/app.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appStates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_states__ = __webpack_require__("../../../../../src/app/states/public.states.ts");

// export const appStates = _.flattenDeep([
//   publicStates
// ])
var appStates = [].concat(__WEBPACK_IMPORTED_MODULE_0__public_states__["a" /* publicStates */]);


/***/ }),

/***/ "../../../../../src/app/states/public.states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return publicStates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_layout__ = __webpack_require__("../../../../../src/app/utils/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_index_index_component__ = __webpack_require__("../../../../../src/app/public/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_about_about_component__ = __webpack_require__("../../../../../src/app/public/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_process_process_component__ = __webpack_require__("../../../../../src/app/public/process/process.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_works_works_component__ = __webpack_require__("../../../../../src/app/public/works/works.component.ts");





var publicStates = [
    {
        name: 'index',
        url: '/',
        views: Object(__WEBPACK_IMPORTED_MODULE_0__utils_layout__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_1__public_index_index_component__["a" /* IndexComponent */])
    },
    {
        name: 'about',
        url: '/about/',
        views: Object(__WEBPACK_IMPORTED_MODULE_0__utils_layout__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_2__public_about_about_component__["a" /* AboutComponent */])
    },
    {
        name: 'process',
        url: '/process/',
        views: Object(__WEBPACK_IMPORTED_MODULE_0__utils_layout__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_3__public_process_process_component__["a" /* ProcessComponent */])
    },
    {
        name: 'works',
        url: '/works/',
        views: Object(__WEBPACK_IMPORTED_MODULE_0__utils_layout__["a" /* render */])(__WEBPACK_IMPORTED_MODULE_4__public_works_works_component__["a" /* WorksComponent */])
    },
];


/***/ }),

/***/ "../../../../../src/app/utils/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_includes_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/public/includes/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_includes_footer_footer_component__ = __webpack_require__("../../../../../src/app/public/includes/footer/footer.component.ts");


function render(content) {
    return {
        'navigation': __WEBPACK_IMPORTED_MODULE_0__public_includes_navigation_navigation_component__["a" /* NavigationComponent */],
        'content': content,
        'footer': __WEBPACK_IMPORTED_MODULE_1__public_includes_footer_footer_component__["a" /* FooterComponent */]
    };
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map