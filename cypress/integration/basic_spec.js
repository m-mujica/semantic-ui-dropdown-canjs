describe('basic dropdown', function() {
  beforeEach(function() {
    cy.visit('demo/demo-basic.html');
  });

  it('initializes dropdown-ui', function() {
    cy.get('div.dropdown').should('exist');
    cy.get('div.dropdown')
      .should(($div) => {
        assert.ok($div.dropdown('is selection'), 'dropdown-ui initialized');
      });
  });

  it('shows/hides dropdown based on the presence of "show" attribute', function() {
    cy.get('div.dropdown').should('exist');

    cy.get('select')
      .then(function($select){
        $select.get(0).setAttribute('show', true);
      })
      .should('have.attr', 'show', 'true');

    cy.get('.active.visible').should('exist');

    cy.get('select')
      .then(function($select){
        $select.get(0).removeAttribute('show');
      })
      .should('not.have.attr', 'show');

    cy.get('.active.visible').should('not.exist');
  });
});