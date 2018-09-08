let movies = [
    {
        id: 0, 
        name: "StarWarz",
        score: 1
    },
    {
        id: 1,
        name: "Oceans 11",
        score: 8
    },
    {
        id: 2,
        name: "Upgrade",
        score: 9
    },
    {
        id: 3,
        name: "Thinker",
        score: 10
    },
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleandMovies.length ) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${ movies.length + 1 }`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie
}