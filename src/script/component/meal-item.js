class MealItem extends HTMLElement {
	set meal(meal) {
		this._meal = meal;
		this.render();
		console.log(this._meal);
	}

	render() {
		this.innerHTML = `
		<article class="rounded-md my-3 mx-2 md:mx-auto shadow-lg md:w-10/12 md:flex md:flex-row">
			<img src="${this._meal.strMealThumb}" 
			class="rounded-t-md max-h-96 w-full object-cover 
			md:max-h-full md:max-w-lg md:rounded-l-md md:rounded-t-none" alt="${this._meal.strMeal}">
			<div class="p-7">
				<h4 class="font-bold text-lg">${this._meal.strMeal}</h4>
				<p>${this._meal.strInstructions}</p>
				<div class="mt-5" id="ingredients-container">
					<h4 class="font-semibold">Ingredients</h4>
				</div>
			</div>
		</article>
        `;

		const ingredientContainerElement = this.querySelector(
			"#ingredients-container"
		);
		const ingredients = this.getIngredients();
		const measures = this.getMeasures();
		for (let i in ingredients) {
			const ingredientElement = document.createElement("p");
			ingredientElement.setAttribute("class", "card-text");
			ingredientElement.innerText = `${measures[i]} ${ingredients[i]}`;
			ingredientContainerElement.appendChild(ingredientElement);
		}
	}

	getIngredients() {
		const ingredientRegex = /strIngredient/;
		let ingredients = [];
		let i = 0;

		for (let prop in this._meal) {
			const hasIngredient = ingredientRegex.test(prop);
			if (hasIngredient && this._meal[prop] != "" && this._meal[prop] != null) {
				ingredients[i] = this._meal[prop];
				i++;
			}
		}
		return ingredients;
	}

	getMeasures() {
		const measureRegex = /strMeasure/;
		let measures = [];
		let i = 0;

		for (let prop in this._meal) {
			const hasMeasure = measureRegex.test(prop);
			if (hasMeasure && this._meal[prop] != "" && this._meal[prop] != null) {
				measures[i] = this._meal[prop];
				i++;
			}
		}
		return measures;
	}
}

customElements.define("meal-item", MealItem);
