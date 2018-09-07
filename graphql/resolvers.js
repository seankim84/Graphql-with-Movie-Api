const sean = {
    name: "Sean",
    age: 29,
    gender: "Male"
}

const resolvers = {
    Query: {
        person: () => sean
    }
};

export default resolvers;