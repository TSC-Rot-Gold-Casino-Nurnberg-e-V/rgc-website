import { NextRouter } from "next/router";

export function mockRouter(params?: Partial<NextRouter>): NextRouter {
  return {
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    basePath: "",
    back: cy.spy().as("back"),
    beforePopState: cy.spy().as("beforePopState"),
    forward: cy.spy().as("forward"), // <---------- added `forward`
    prefetch: cy.stub().as("prefetch").resolves(),
    push: cy.spy().as("push"),
    reload: cy.spy().as("reload"),
    replace: cy.spy().as("replace"),
    events: {
      emit: cy.spy().as("emit"),
      off: cy.spy().as("off"),
      on: cy.spy().as("on"),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...params,
  };
}
