// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Home$ReactTemplate = require("./views/Home.bs.js");
var Link$ReactTemplate = require("./components/Link.bs.js");
var About$ReactTemplate = require("./views/About.bs.js");
var Users$ReactTemplate = require("./views/Users.bs.js");
var Channels$ReactTemplate = require("./views/Channels.bs.js");
var NotFound$ReactTemplate = require("./views/NotFound.bs.js");
var CreateRouter$ReactTemplate = require("./functors/CreateRouter.bs.js");

function toRoute(url) {
  var match = url[/* path */0];
  if (match) {
    switch (match[0]) {
      case "about" : 
          if (match[1]) {
            return /* NotFound */4;
          } else {
            return /* About */3;
          }
      case "channels" : 
          if (match[1]) {
            return /* NotFound */4;
          } else {
            return /* Channels */2;
          }
      case "users" : 
          if (match[1]) {
            return /* NotFound */4;
          } else {
            return /* Users */1;
          }
      default:
        return /* NotFound */4;
    }
  } else {
    return /* Home */0;
  }
}

function toUrl(route) {
  switch (route) {
    case 0 : 
        return "/";
    case 1 : 
        return "/users";
    case 2 : 
        return "/channels";
    case 3 : 
        return "/about";
    case 4 : 
        return "/not_found";
    
  }
}

var Config = /* module */[
  /* toRoute */toRoute,
  /* toUrl */toUrl
];

var Router = CreateRouter$ReactTemplate.Make([
      toUrl,
      toRoute
    ]);

function str(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("App");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", undefined, React.createElement("header", undefined, React.createElement("nav", {
                                  role: "navigation"
                                }, React.createElement("ul", undefined, React.createElement("li", undefined, ReasonReact.element(undefined, undefined, Link$ReactTemplate.make(toUrl(/* Home */0), (function (param) {
                                                    return "Home";
                                                  }), /* array */[]))), React.createElement("li", undefined, ReasonReact.element(undefined, undefined, Link$ReactTemplate.make(toUrl(/* Users */1), (function (param) {
                                                    return "Users";
                                                  }), /* array */[]))), React.createElement("li", undefined, ReasonReact.element(undefined, undefined, Link$ReactTemplate.make(toUrl(/* Channels */2), (function (param) {
                                                    return "Channels";
                                                  }), /* array */[]))), React.createElement("li", undefined, ReasonReact.element(undefined, undefined, Link$ReactTemplate.make(toUrl(/* About */3), (function (param) {
                                                    return "About";
                                                  }), /* array */[])))))), React.createElement("main", {
                              className: "container",
                              role: "main"
                            }, ReasonReact.element(undefined, undefined, Curry._2(Router[/* make */1], (function (param) {
                                        switch (param[/* route */1]) {
                                          case 0 : 
                                              return ReasonReact.element(undefined, undefined, Home$ReactTemplate.make(/* array */[]));
                                          case 1 : 
                                              return ReasonReact.element(undefined, undefined, Users$ReactTemplate.make(/* array */[]));
                                          case 2 : 
                                              return ReasonReact.element(undefined, undefined, Channels$ReactTemplate.make(/* array */[]));
                                          case 3 : 
                                              return ReasonReact.element(undefined, undefined, About$ReactTemplate.make(/* array */[]));
                                          case 4 : 
                                              return ReasonReact.element(undefined, undefined, NotFound$ReactTemplate.make(/* array */[]));
                                          
                                        }
                                      }), /* array */[]))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Config = Config;
exports.Router = Router;
exports.str = str;
exports.component = component;
exports.make = make;
/* Router Not a pure module */
