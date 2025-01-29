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
      },
      {
        "id": 4,
        "title": "The Dark Knight",
        "director": "Christopher Nolan",
        "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "rating": 4.9,
        "price": 15.99,
        "description": "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "image": "https://picsum.photos/300/453",
        "genres": ["Action", "Crime", "Drama"],
        "productionPhotos": [
          "https://picsum.photos/309/200",
          "https://picsum.photos/310/200",
          "https://picsum.photos/311/200"
        ],
        "crew": {
          "producer": "Emma Thomas",
          "cinematographer": "Wally Pfister",
          "composer": "Hans Zimmer",
          "editor": "Lee Smith"
      }
    },
    {
      "id": 5,
      "title": "Fight Club",
      "director": "David Fincher",
      "cast": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
      "rating": 4.8,
      "price": 13.99,
      "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      "image": "https://picsum.photos/300/454",
      "genres": ["Drama"],
      "productionPhotos": [
        "https://picsum.photos/312/200",
        "https://picsum.photos/313/200",
        "https://picsum.photos/314/200"
      ],
      "crew": {
        "producer": "Art Linson",
        "cinematographer": "Jeff Cronenweth",
        "composer": "Dust Brothers",
        "editor": "James Haygood"
      }
    },
    {
      "id": 6,
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      "rating": 4.9,
      "price": 14.49,
      "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      "image": "https://picsum.photos/300/455",
      "genres": ["Drama", "Romance"],
      "productionPhotos": [
        "https://picsum.photos/315/200",
        "https://picsum.photos/316/200",
        "https://picsum.photos/317/200"
      ],
      "crew": {
        "producer": "Wendy Finerman",
        "cinematographer": "Don Burgess",
        "composer": "Alan Silvestri",
        "editor": "Arthur Schmidt"
      }
    },
    {
      "id": 7,
      "title": "The Matrix",
      "director": "Lana Wachowski, Lilly Wachowski",
      "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "rating": 4.8,
      "price": 13.99,
      "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "image": "https://picsum.photos/300/456",
      "genres": ["Sci-Fi", "Action"],
      "productionPhotos": [
        "https://picsum.photos/318/200",
        "https://picsum.photos/319/200",
        "https://picsum.photos/320/200"
      ],
      "crew": {
        "producer": "Joel Silver",
        "cinematographer": "Bill Pope",
        "composer": "Don Davis",
        "editor": "Zach Staenberg"
      }
    },
    {
      "id": 8,
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "cast": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "price": 16.99,
      "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "image": "https://picsum.photos/300/457",
      "genres": ["Adventure", "Drama", "Fantasy"],
      "productionPhotos": [
        "https://picsum.photos/321/200",
        "https://picsum.photos/322/200",
        "https://picsum.photos/323/200"
      ],
      "crew": {
        "producer": "Barrie M. Osborne",
        "cinematographer": "Andrew Lesnie",
        "composer": "Howard Shore",
        "editor": "Jamie Selkirk"
      }
    },
    {
      "id": 9,
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "price": 14.99,
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "image": "https://picsum.photos/300/458",
      "genres": ["Crime", "Drama"],
      "productionPhotos": [
        "https://picsum.photos/324/200",
        "https://picsum.photos/325/200",
        "https://picsum.photos/326/200"
      ],
      "crew": {
        "producer": "Albert S. Ruddy",
        "cinematographer": "Gordon Willis",
        "composer": "Nino Rota",
        "editor": "William Reynolds"
      }
    },
    {
      "id": 10,
      "title": "The Godfather: Part II",
      "director": "Francis Ford Coppola",
      "cast": ["Al Pacino", "Robert De Niro", "Robert Duvall"],
      "rating": 4.9,
      "price": 14.99,
      "description": "The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "image": "https://picsum.photos/300/459",
      "genres": ["Crime", "Drama"],
      "productionPhotos": [
        "https://picsum.photos/327/200",
        "https://picsum.photos/328/200",
        "https://picsum.photos/329/200"
      ],
      "crew": {
        "producer": "Francis Ford Coppola",
        "cinematographer": "Gordon Willis",
        "composer": "Nino Rota",
        "editor": "Barry Malkin"
      }
    },
    {
      "id": 11,
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "rating": 4.8,
      "price": 15.99,
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "image": "https://picsum.photos/300/460",
      "genres": ["Sci-Fi", "Adventure", "Drama"],
      "productionPhotos": [
        "https://picsum.photos/330/200",
        "https://picsum.photos/331/200",
        "https://picsum.photos/332/200"
      ],
      "crew": {
        "producer": "Emma Thomas",
        "cinematographer": "Hoyte van Hoytema",
        "composer": "Hans Zimmer",
        "editor": "Lee Smith"
      }
    },
    {
      "id": 12,
      "title": "Schindler's List",
      "director": "Steven Spielberg",
      "cast": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      "rating": 4.9,
      "price": 14.99,
      "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      "image": "https://picsum.photos/300/461",
      "genres": ["Biography", "Drama", "History"],
      "productionPhotos": [
        "https://picsum.photos/333/200",
        "https://picsum.photos/334/200",
        "https://picsum.photos/335/200"
      ],
      "crew": {
        "producer": "Branko Lustig",
        "cinematographer": "Janusz Kamiński",
        "composer": "John Williams",
        "editor": "Michael Kahn"
      }
    },
    {
      "id": 13,
      "title": "The Green Mile",
      "director": "Frank Darabont",
      "cast": ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
      "rating": 4.8,
      "price": 14.49,
      "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      "image": "https://picsum.photos/300/462",
      "genres": ["Crime", "Drama", "Fantasy"],
      "productionPhotos": [
        "https://picsum.photos/336/200",
        "https://picsum.photos/337/200",
        "https://picsum.photos/338/200"
      ],
      "crew": {
        "producer": "David Valdes",
        "cinematographer": "David Tattersall",
        "composer": "Thomas Newman",
        "editor": "Richard Francis-Bruce"
      }
    },
    {
      "id": 14,
      "title": "Gladiator",
      "director": "Ridley Scott",
      "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
      "rating": 4.8,
      "price": 13.99,
      "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "image": "https://picsum.photos/300/463",
      "genres": ["Action", "Adventure", "Drama"],
      "productionPhotos": [
        "https://picsum.photos/339/200",
        "https://picsum.photos/340/200",
        "https://picsum.photos/341/200"
      ],
      "crew": {
        "producer": "Douglas Wick",
        "cinematographer": "John Mathieson",
        "composer": "Hans Zimmer",
        "editor": "Pietro Scalia"
      }
    },
    {
      "id": 15,
      "title": "The Lion King",
      "director": "Roger Allers, Rob Minkoff",
      "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
      "rating": 4.7,
      "price": 12.99,
      "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      "image": "https://picsum.photos/300/464",
      "genres": ["Animation", "Adventure", "Drama"],
      "productionPhotos": [
        "https://picsum.photos/342/200",
        "https://picsum.photos/343/200",
        "https://picsum.photos/344/200"
      ],
      "crew": {
        "producer": "Don Hahn",
        "cinematographer": "Sharon Calahan",
        "composer": "Hans Zimmer",
        "editor": "Ivan Bilancio"
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
