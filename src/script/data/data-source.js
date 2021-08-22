import axios from "axios";

class DataSource {
	static async searchMeal(keyword) {
		return axios
			.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
			.then((response) => {
				if (response.data.meals) {
					return Promise.resolve(response.data.meals);
				} else {
					return Promise.reject(`${keyword} is not found`);
				}
			});
	}
}

export default DataSource;
