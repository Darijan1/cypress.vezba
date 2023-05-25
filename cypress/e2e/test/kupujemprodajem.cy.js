
describe("TRYING TO BUY GPU ",()=>{

it("visiting kupujemprodajem",()=>{
    cy.visit("https://novi.kupujemprodajem.com")
})
it("searching for GTX 1080TI",()=>{

    cy.get('#keywords').type("GTX 1080 TI")
    cy.get('.Input_inputRow__jtTd8 > :nth-child(3) > .Button_base__Pz8U1').click()
})
it("FINDING GTX 1080TI",()=>{

    cy.contains("Gtx 1080 ti GOLDEN smpl. Gainward 11gb / gtx 1080ti").click()
})
it("TRYING TO SEND MESSAGE TO PERSON",()=>{

    cy.get('.UserSummary_userSummary__PoV0P > .Button_base__Pz8U1').click()
})
it("LOGIN ON KUPUJMPRODAJEM",()=>{

    cy.get('#email').type("kupujemprodajemm082@gmail.com")
    cy.get('#password').type("Kinsey.123")
    cy.get('.LoginModal_form__4Jegu > .ButtonSecondary_secondary__MOPh4').click()

})
it("SENDING MESSAGE TO PERSON",()=>{

    cy.get('#message').type("Pozdrav hteo bih da kupim od vas bla bla moze?")

})
it("LOGGING OUT FROM KUPUJEMPRODAJEM",()=>{

    cy.get(':nth-child(17) > .Link_link__J4Qd8 > :nth-child(2)').click()
})
})










