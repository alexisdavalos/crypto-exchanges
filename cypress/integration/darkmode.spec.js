describe("testing dark mode", () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit("/");
	});

	it("displays light mode by default", () => {
		// Check base html element for light class as default
		cy.get("html").should("have.class", "light");
	});

	it("toggles between light mode and dark mode", () => {
		// Check base html element for light class
		cy.get("html").should("have.class", "light");

		// Click the dark mode toggle button
		cy.get("[data-test=dark-mode-toggle]")
			.should("have.class", "bg-gray-900")
			.click()
			.should("have.class", "bg-gray-50");

		// Check base html element for dark class
		cy.get("html").should("have.class", "dark");
	});

	it("user selected mode persists after refresh", () => {
		cy.get("html").should("have.class", "light");
		cy.get("[data-test=dark-mode-toggle]").click();
		cy.get("html").should("have.class", "dark");
		// Revisit the page
		cy.visit("/");
		cy.get("html").should("have.class", "dark");
	});
});
