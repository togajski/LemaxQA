export const search = (searchTerm) => {
    cy.get("input[name='ss']").type(searchTerm);
    cy.get("button[type='submit']").click();
}