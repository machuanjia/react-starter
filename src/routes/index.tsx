import React from "react";
import { Route, Switch } from "react-router-dom";
import { AsyncComponent, AppliedRoute, AuthenticatedRoute, UnauthenticatedRoute } from "Components";
const AsyncHome = AsyncComponent(() => import("../views/Home"));
const AsyncAbout = AsyncComponent(() => import("../views/About"));
const AsyncNotFound = AsyncComponent(() => import("../views/NotFound"));
const AsyncLogin = AsyncComponent(() => import("../views/Login"))

export default ({ childProps }:any) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/about"
      exact
      component={AsyncAbout}
      props={childProps}
    />
    <Route component={AsyncNotFound} />
  </Switch>
;
