class SearchBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector("#searchField").value;
	}

	render() {
		this.innerHTML = `
        <form class="flex flex-col rounded-md my-3 mx-2 md:mx-auto p-6 shadow-md sticky top-3 md:w-7/12">
            <input class="p-1 border-b-2 rounded-sm outline-none border-yellow-700 type="search" placeholder="Search meal name" id="searchField">
            <button class="rounded-sm mt-3 p-1" type="button" id="searchButton">Search</button>
        </form>
        `;
		this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
	}
}

customElements.define("search-bar", SearchBar);
