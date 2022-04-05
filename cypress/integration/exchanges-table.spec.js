describe("testing exchanges table", () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit("/");
	});

	it("initially displays a table for exchange data with 10 rows", () => {
		// Check base html element for light class as default
		cy.get("[data-test=exchanges-table]").should("be.visible");

		// Check table initially has 10 rows of data
		cy.get("[data-test=exchanges-table] > tbody > tr").should(
			"have.length",
			10
		);
	});

	it("increases number of rows when user changes per page value", () => {
		// Check table initially has 10 rows of data
		cy.get("[data-test=exchanges-table] > tbody > tr").should(
			"have.length",
			10
		);

		const perPageValues = ["10", "20", "30", "40", "50"];
		perPageValues.forEach((value) => {
			// Change per page value
			cy.get("#per-page").select(value);

			// Check table now has correct # of rows
			cy.get("[data-test=exchanges-table] > tbody > tr").should(
				"have.length",
				value
			);
		});
	});

	it("increase table page number displayed manually", () => {
		// First exchange record should be binance
		cy.get("[data-test=exchanges-table] > tbody > tr > td")
			.first("p")
			.should("contain", "Binance");

		// Should not have a previous page button
		cy.get("[data-test=exchange-table-previous-page-button]").should(
			"have.length",
			0
		);

		// Should have a next page button
		cy.get("[data-test=exchange-table-next-page-button]")
			.should("have.length", 1)
			.should("be.visible");

		// Click next page to change table data and wait for state to update the table from request data
		cy.get("[data-test=exchange-table-next-page-button]").click();
		cy.wait(1000);

		// First record on the table should no longer be Binance
		cy.get("[data-test=exchanges-table] > tbody > tr > td")
			.first("p")
			.should("not.contain", "Binance");

		// Previous page button is now visible
		cy.get("[data-test=exchange-table-previous-page-button]").should(
			"be.visible"
		);
	});

	it("table rows have a link to exchange page on the last cell", () => {
		// Checks the link of the first row and the last cell leads to exchange data page
		cy.get("[data-test=exchanges-table] > tbody > tr")
			.first()
			.find("td")
			.last()
			.find("a")
			.should("contain", "View Data");
	});

	it("exchange link navigates away to exchange details", () => {
		// Navigates to the first data page and checks value of the url
		cy.location("pathname").should("not.include", "binance");

		cy.get("[data-test=exchanges-table] > tbody > tr")
			.first()
			.find("td")
			.last()
			.find("a")
			.click();

		cy.location("pathname").should("include", "binance");
	});
});
