import { faker } from "@faker-js/faker/locale/en_ZA"

export const apsMap = {
    0: 1,
    30: 2,
    40: 3,
    50: 4,
    60: 5,
    70: 6,
    80: 7
}

export const classes = [
    {
        grade: "11A",
        learners: [
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 }),
                aps: 50,
                id: 1,
                subjects: [
                    {
                        name: "Mathematics",
                        activities: [
                            {
                                name: 'activity 1',
                                totalMark: 70,
                                markObtained: faker.number.int({ min: 0, max: 70 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1,

                            }
                        ],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Physical Sciences",
                        activities: [
                            {
                                name: 'activity 1',
                                totalMark: 70,
                                markObtained: faker.number.int({ min: 0, max: 70 }),
                                markPercentage: faker.number.int({ min: 1, max: 100 }),
                                term: 1
                            }
                        ],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Orientation",
                        activities: [
                            {
                                name: 'activity 1',
                                totalMark: 70,
                                markObtained: faker.number.int({ min: 0, max: 70 }),
                                markPercentage: faker.number.int({ min: 1, max: 100 }),
                                term: 1
                            }
                        ],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Biology",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Geography",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "English",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },

                ]
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 }),
                aps: faker.number.int({ min: 7, max: 49 }),
                id: 2,
                subjects: [
                    {
                        name: "Accounting",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1

                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Business Studies",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Orientation",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Economics",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Geography",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Afrikaans Fal",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "English",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                ]
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 }),
                aps: faker.number.int({ min: 7, max: 49 }),
                id: 3,
                subjects: [
                    {
                        name: "Mathematics",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1

                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Physical Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Orientation",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Biology",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Geography",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "English",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                ]
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 }),
                aps: faker.number.int({ min: 7, max: 49 }),
                id: 4,
                subjects: [
                    {
                        name: "Mathematics",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1

                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Physical Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Orientation",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Biology",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Geography",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "English",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                ]
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 }),
                aps: faker.number.int({ min: 7, max: 49 }),
                id: 5,
                subjects: [
                    {
                        name: "Mathematics",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1

                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Physical Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Orientation",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Biology",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Geography",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "English",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                ]
            },
            {
                name: faker.person.firstName(),
                photo: faker.internet.avatar(),
                surname: faker.person.lastName(),
                gender: faker.person.sex(),
                age: faker.number.int({ min: 16, max: 18 }),
                aps: faker.number.int({ min: 7, max: 49 }),
                id: 6,
                subjects: [
                    {
                        name: "Mathematics",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1

                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Physical Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Orientation",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Life-Sciences",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Biology",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: faker.number.int({ min: 1, max: 100 }),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "Geography",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                    {
                        name: "English",
                        activities: [{
                            name: 'activity 1',
                            totalMark: 70,
                            markObtained: faker.number.int({ min: 0, max: 70 }),
                            markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                            term: 1
                        }],
                        tests: [
                            {
                                name: "test 1",
                                totalMark: 50,
                                markObtained: faker.number.int({ min: 0, max: 50 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        examinations: [
                            {
                                name: 'exam 1',
                                totalMark: 100,
                                markObtained: faker.number.int({ min: 0, max: 100 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ],
                        assignments: [
                            {
                                name: 'assignment 1',
                                totalMark: 80,
                                markObtained: faker.number.int({ min: 0, max: 80 }),
                                markPercentage: Math.ceil((faker.number.int({ min: 1, max: 100 }) / faker.number.int({ min: 1, max: 100 }))),
                                term: 1
                            }
                        ]
                    },
                ]
            }
        ]
    }
]


