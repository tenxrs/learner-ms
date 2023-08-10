import { faker } from "@faker-js/faker/locale/en_ZA"

export const classes = [
    {
        grade: "11A",
        learners: [
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 })
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 })
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 })
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 })
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 })
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 })
            }
        ]
    }
]
