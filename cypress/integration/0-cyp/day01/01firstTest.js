//describe('genel bir isim', (eger varsa parametre) =>{body, test})
describe('my first test', () => {
    //it ('testin ismini', (eger varsa parametre) =>{body, test})
    it('URL test', () => {
      //* visit() -> bizi bir websiteye yonlendiriyor
      cy.visit('https://www.google.com/');
      //* should('include', 'text') -> texti icermeli (assertion)
      cy.url().should('include', 'google');
      cy.url().should('include', 'https');
      cy.url().should('include', '.com');
      //* should('eq', 'text') -> texte esit olmali (assertion)
      cy.url().should('eq', 'https://www.google.com/');
      //* should('not.include', 'text') -> texti icermemeli (assertion)
      cy.url().should('not.include', 'amazon')
    });
    it('Title test', ()=>{
      cy.visit('https://www.google.com/');
      cy.title().should('eq', 'Google');
      // cy.title().should('eq', 'Coogle')
    })
  });