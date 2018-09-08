import { getMovies } from './db/db';

const resolvers = {
    Query: {
        movies: () => getMovies() 
    }
}

export default resolvers;