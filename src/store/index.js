import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [
      {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        rating: 4.8,
        price: 14.99,
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        image: "https://picsum.photos/300/450",
        genres: ["Sci-Fi", "Action", "Thriller"],
        productionPhotos: [
          "https://picsum.photos/300/200",
          "https://picsum.photos/301/200",
          "https://picsum.photos/302/200"
        ],
        crew: {
          producer: "Emma Thomas",
          cinematographer: "Wally Pfister",
          composer: "Hans Zimmer",
          editor: "Lee Smith"
        }
      },
      {
        id: 2,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman"],
        rating: 4.9,
        price: 12.99,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        image: "https://picsum.photos/300/451",
        genres: ["Drama", "Crime"],
        productionPhotos: [
          "https://picsum.photos/303/200",
          "https://picsum.photos/304/200",
          "https://picsum.photos/305/200"
        ],
        crew: {
          producer: "Niki Marvin",
          cinematographer: "Roger Deakins",
          composer: "Thomas Newman",
          editor: "Richard Francis-Bruce"
        }
      },
      {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        rating: 4.7,
        price: 13.99,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        image: "https://picsum.photos/300/452",
        genres: ["Crime", "Drama"],
        productionPhotos: [
          "https://picsum.photos/306/200",
          "https://picsum.photos/307/200",
          "https://picsum.photos/308/200"
        ],
        crew: {
          producer: "Lawrence Bender",
          cinematographer: "Andrzej Sekula",
          composer: "Various Artists",
          editor: "Sally Menke"
        }
      }
    ],
    genres: [],
    people: [],
    user: null
  }),
  
  getters: {
    getMoviesByGenre: (state) => (genre) => {
      return state.movies.filter(movie => movie.genres.includes(genre));
    },
    isAuthenticated: (state) => !!state.user,
    getAllGenres: (state) => {
      const genreSet = new Set();
      state.movies.forEach(movie => {
        movie.genres.forEach(genre => genreSet.add(genre));
      });
      return Array.from(genreSet).map(genre => ({
        id: genre,
        name: genre,
        movieCount: state.movies.filter(m => m.genres.includes(genre)).length
      }));
    },
    getAllPeople: (state) => {
      const peopleSet = new Set();
      state.movies.forEach(movie => {
        peopleSet.add({ id: movie.director, name: movie.director, role: 'Director', photo: 'https://picsum.photos/300/300' });
        movie.cast.forEach(actor => {
          peopleSet.add({ id: actor, name: actor, role: 'Actor', photo: 'https://picsum.photos/300/300' });
        });
      });
      return Array.from(peopleSet);
    }
  },
  
  actions: {
    initializeStore() {
      const storedData = localStorage.getItem('movieStore');
      if (storedData) {
        this.$patch(JSON.parse(storedData));
      }
      this.genres = this.getAllGenres;
      this.people = this.getAllPeople;
    },
    
    saveToLocalStorage() {
      localStorage.setItem('movieStore', JSON.stringify({
        movies: this.movies,
        genres: this.genres,
        people: this.people,
        user: this.user
      }));
    },
    
    setUser(user) {
      this.user = user;
      this.saveToLocalStorage();
    },
    
    addMovie(movie) {
      this.movies.push(movie);
      this.saveToLocalStorage();
    }
  }
});