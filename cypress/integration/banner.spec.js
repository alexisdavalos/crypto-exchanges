describe("testing main banner", () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit("/");
	});

	it("banner and contents renders on screen", () => {
		// Check base html element for relative class and be visible
		cy.get("[data-test=main-banner]").should("have.class", "relative");
		cy.get("[data-test=main-banner]").should("be.visible");

		// Check if img is present has expected attributes
		cy.get("[data-test=banner-img]")
			.should("have.class", "object-cover")
			.should("have.attr", "alt", "People working on laptops")
			.should(
				"have.attr",
				"src",
				"https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=2830&q=80&sat=-100"
			);

		// Check content of banner
		cy.get("[data-test=banner-title]")
			.children("span")
			.eq(0)
			.should("contain", "Take control of your");

		cy.get("[data-test=banner-title]")
			.children("span")
			.eq(1)
			.should("contain", "crypto knowledge");
	});
});
