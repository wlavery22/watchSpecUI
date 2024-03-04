describe('What user sees on home page', () => {
	beforeEach(() => {
		cy.visit('https://cryptic-thicket-07538-399494341bbd.herokuapp.com/api/v1/watches');
	});
  
	it('Should show the name of the app, a form, a collection of watches, should hold the value in the form input when data is entered, navigate to /results after button click, and display search results on /results page', () => {
		cy.intercept('GET', 'https://cryptic-thicket-07538-399494341bbd.herokuapp.com/api/v1/watches', {
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
    cy.get('@nameInput').should('have.value', 'Alpinist');
    cy.get('.submitUserName').click();
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/results');
    cy.get('.all-results-container .watch-by-name').within(() => {
      cy.contains('Watch by Name:');
      cy.contains('Alpinist');
      cy.contains('Type: field watch');
      cy.contains('Maker: Seiko');
      cy.contains('Cost: $700');
      cy.contains('Complications: date');
      cy.contains('Features: triangular indices');
      cy.contains('Size: 39mm');
    });
    cy.visit('https://watch-spec-ui.vercel.app/');
    cy.get('input[name="name"]').as('nameInput').clear();
    cy.get('input[name="price"]').as('priceInput').focus().clear().type('700');
    cy.get('@priceInput').should('have.value', '700');
    cy.get('.submitUserPrice').click()
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/results');
    cy.get('.all-results-container .watches-by-price').within(() => {
      cy.contains('Watches by Price:');
      cy.contains('Alpinist');
    });
    cy.visit('https://watch-spec-ui.vercel.app/');
    cy.get('input[name="price"]').as('priceInput').clear();
    cy.get('input[name="type"]').as('typeInput').focus().clear().type('field watch');
    cy.get('@typeInput').should('have.value', 'field watch');
    cy.get('.submitUserType').click()
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/results');
    cy.get('.all-results-container .watches-by-type').within(() => {
      cy.contains('Watches by Type:');
      cy.contains('Alpinist');
    });
    cy.get('.home-page-button').click()
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/');
  });

  it('should display an error message when the form field is submitted empty, and when the search does not return any watches', () => {
    cy.get('.submitUserName').click();
    cy.get('.error-message').should('contain', 'Please enter a name.');
    cy.get('.submitUserPrice').click();
    cy.get('.error-message').should('contain', 'Please enter a price.');
    cy.get('.submitUserType').click();
    cy.get('.error-message').should('contain', 'Please enter a type.');
    cy.get('input[name="name"]').type('NoWatchName');
    cy.get('.submitUserName').click();
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/results');
    cy.get('.no-results').should('contain', 'There are no watches that meet your criteria, please try again.');
    cy.visit('https://watch-spec-ui.vercel.app/');
    cy.get('input[name="price"]').type('20000');
    cy.get('.submitUserPrice').click();
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/results');
    cy.get('.no-results').should('contain', 'There are no watches that meet your criteria, please try again.');
    cy.visit('https://watch-spec-ui.vercel.app/');
    cy.get('input[name="type"]').type('NoWatchType');
    cy.get('.submitUserType').click();
    cy.url().should('eq', 'https://watch-spec-ui.vercel.app/results');
    cy.get('.no-results').should('contain', 'There are no watches that meet your criteria, please try again.');
    });
  it('should display an error message when a 500 error occurs', () => {
    cy.intercept('GET', 'http://localhost:20223/api/v1/watches', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getAllWatches');
      cy.wait('@getAllWatches');
      cy.get('.server-error-message').should('contain', 'We\'re having trouble getting data. Please try again later.');
    });
  });







