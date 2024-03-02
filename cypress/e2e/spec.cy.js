describe('What user sees on home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3001');
	});

	it('Should be able to see the name of the app, a form, and a collection of watches', () => {
		cy.intercept('GET', 'http://localhost:3000/api/v1/watches', {
			statusCode: 200,
			fixture: 'example.json'
		})
		cy.get('header')
			.contains('Rancid Tomatillos')
			.get(".all-movies-container").find('.movie-card').should("have.length", 40)
			.get(".all-movies-container").find('.movie-card').first().should("have.id", 694919)
			.get(".all-movies-container").find('.movie-card').last().should("have.id", 585244)
			.url().should('eq', 'http://localhost:3000/')
  });
})

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })