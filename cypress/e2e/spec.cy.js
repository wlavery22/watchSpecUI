describe('What user sees on home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001');
	});

	it('Should show the name of the app, a form, a collection of watches, and should hold the value in the form input when data is entered and navigate to /results after button click', () => {
		cy.intercept('GET', 'http://localhost:3000/api/v1/watches', {
			statusCode: 200,
			fixture: 'example.json'
		})
		cy.get('header').within(() => {
      cy.get('img').should('exist');
    });
    cy.get('p').contains("Search Watches by Name, Price, OR Type").should("be.visible");
    cy.get('input[name="name"]').should('have.attr', 'placeholder', 'Name').should("be.visible");
    cy.get('.submitUserName').contains("SUBMIT").should('be.visible');
    cy.get('input[name="price"]').should('have.attr', 'placeholder', 'Price').should("be.visible");
    cy.get('.submitUserPrice').contains("SUBMIT").should('be.visible');
    cy.get('input[name="type"]').should('have.attr', 'placeholder', 'Type').should("be.visible");
    cy.get('.submitUserType').contains("SUBMIT").should('be.visible');
    cy.get(".all-watches-container").find('.card').should("have.length", 7);
    cy.get('.all-watches-container .card:first').within(() => {
      cy.contains('Name: Alpinist');
      cy.contains('Type: field watch');
      cy.contains('Maker: Seiko');
      cy.contains('Cost: $700');
      cy.contains('Complications: date');
      cy.contains('Features: triangular indices');
      cy.contains('Size: 39mm');
    });
    cy.get('.all-watches-container .card:last').within(() => {
      cy.contains('Name: Premier B09');
      cy.contains('Type: pilot\'s watch');
      cy.contains('Maker: Brietling');
      cy.contains('Cost: $9000');
      cy.contains('Complications: chronograph');
      cy.contains('Features: bi-compax dial');
      cy.contains('Size: 40mm');
    });
    cy.get('input[name="name"]').as('nameInput').focus().clear().type('Alpinist');
    cy.wait(500);
    // cy.debug();
    cy.get('@nameInput').should('have.value', 'Alpinist');
    cy.get('input[name="name"]').as('nameInput').clear()
    cy.get('input[name="price"]').as('priceInput').focus().clear().type('700');
    cy.get('@priceInput').should('have.value', '700');
    cy.get('input[name="price"]').as('priceInput').clear();
    cy.get('input[name="type"]').as('typeInput').focus().clear().type('field watch');
    cy.get('@typeInput').should('have.value', 'field watch')
    cy.get('input[name="type"]').as('typeInput').clear();
    
    // cy.wait(500); 
    // cy.get('input[name="price"]').as('priceInput').clear()
    
    // cy.get('input[name="name"]').clear()
    // cy.get('input[name="price"]').clear().type('700').should('have.value', '700')
    // cy.get('input[name="name"]').as('nameInput').type('Alpinist');
    // cy.get('@nameInput').should('have.value', 'Alpinist');
    // cy.get('.submitUserName').click();
    // cy.url().should('eq', 'http://localhost:3001/results'); 
    // cy.get(".submitUserName").click()
    // cy.url().should('eq', 'http://localhost:3001/results')
    
    // cy.get('.submitUserPrice').click()
    // cy.url().should('eq', 'http://localhost:3001/results')
    // cy.get('input[name="type"]').type('field watch').should('have.value', 'field watch')
    // cy.get('.submitUserType').click()
    // cy.url().should('eq', 'http://localhost:3001/results')

  })
});




