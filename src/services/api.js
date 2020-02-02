import axios from 'axios';

const API_KEY = 'b7b330666a733df935ff0bb74641b061';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default {
  async getPopularMovies() {
    try {
      const popularMovies = await axios.get(
        `/trending/movie/day?api_key=${API_KEY}`,
      );
      return popularMovies.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getMoviesByQuery(query) {
    try {
      const moviesByQuery = await axios.get(
        `/search/movie?api_key=${API_KEY}&query=${query}&page=1`,
      );

      return moviesByQuery.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};
