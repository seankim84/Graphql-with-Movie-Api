export const people = [{
        id: "0",
        name: "Sean",
        age: 29,
        gender: "Male"
    },
    {
        id: "1",
        name: "Rebekah",
        age: 27,
        gender: "Female"
    },
    {
        id: "2",
        name: "Jisu",
        age: 31,
        gender: "Male"
    },
    {
        id: "3",
        name: "Dongy",
        age: 55,
        gender: "Female"
    },
    {
        id: "4",
        name: "Jang",
        age: 52,
        gender: "Female"
    },
    {
        id: "5",
        name: "Taeho",
        age: 99,
        gender: "Male"
    }
];

export const getById = id => {
    const filteredPeople = poeple.filter(person => people.id === id);
    return  filteredPeople[0]
}