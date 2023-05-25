describe("never give up", () => {})
it("ytubevideo",()=>{

cy.visit("https://www.youtube.com/")
cy.get('#sb_ifc50 > #search').type("never gonna give you up")
})
