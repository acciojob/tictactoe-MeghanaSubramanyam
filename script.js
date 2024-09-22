cy.get('#player-1').should('be.visible');
cy.get('#player-1').type('Player1');
cy.get('#player-2').should('be.visible');
cy.get('#player-2').type('Player2');
