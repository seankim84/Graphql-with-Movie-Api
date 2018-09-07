import {people, getById} from './db/db';

const resolvers = {
    Query: {
        people: () => people,
        person() => getById()
    }
};

export default resolvers;