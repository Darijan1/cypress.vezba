describe("never give up", () => {})
it("ytubevideo",()=>{

cy.visit("https://www.youtube.com/")
cy.get('[class="style-scope ytd-searchbox"]').first().type("never gonna give you up")
cy.get('#search-icon-legacy').click()
cy.get(':nth-child(3) > :nth-child(1) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click()
})
