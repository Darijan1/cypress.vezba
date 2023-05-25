describe("kp test", () => {

it("idemo na link kp",()=> {

cy.visit("https://novi.kupujemprodajem.com/")
cy.get('#keywords').type("gtx 1080ti")
cy.get('.Input_inputRow__jtTd8 > :nth-child(3) > .Button_base__Pz8U1').click()
cy.contains('Gtx 1080 ti 11g Rog Strix Gaming / gtx 1080ti').click()
cy.get('.UserSummary_userSummary__PoV0P > .Button_base__Pz8U1').click()
cy.get('.ButtonOAuth_google__JxPU3').click()
cy.visit("https://accounts.google.com/o/oauth2/auth/identifier?response_type=code&client_id=57926949926-csf6111a08b0jeth4aie8lmrtdamoja7.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.kupujemprodajem.com%2F__%2Fauth%2Fhandler&state=AMbdmDmUQ4PNY5HL0Rvf-DbapyiC8BCXfhCpPPu2LszaKY6Ysp16uwD2xg2Z8NI5YbMEqtdZVm1rBin1iTVA8t6QF8EJyZx1TYAgaHTOuPkivX1s7QBvWUfgxYUcCQU-RaFB3OJd8JE5ZDKz1CGw-E_gESUOIAhg5x0EzUvkGbuCZhIdk2PgOqSHJfTw-f82tzVryHJO6Rro9zhe5cLnH5lM8FSy_5tJZQ_2rytB2rqFNhrKX6UI4UfU3EFZsRFkhu182zT7rglec5WN0Gxi7hvFDGNbx78pk_pWM2nfp2O8h624mssVL0KIPmrz97kCP1c&scope=openid%20profile%20email&context_uri=https%3A%2F%2Fnovi.kupujemprodajem.com&service=lso&o2v=1&flowName=GeneralOAuthFlow")
cy.get("#identifierld.whs0nd.zHQkBf","366x54px").type("kinsey2174@gmail.com")

})

})

