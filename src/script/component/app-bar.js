class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <h2 class="font-bold text-lg py-4 px-7 shadow-md">Meal Finder</h2>
        `;
	}
}

customElements.define("app-bar", AppBar);
