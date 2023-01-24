import { faker } from '@faker-js/faker';

export const agents = [];
export const facilities = [];
export const shifts = [];

// generate fake agents
const createRandomAgent = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email:  faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birth: faker.date.birthdate(),
        created_at: faker.date.past()
    }
}

// generate fake facilities
const createRandomFacility = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
    }
}

// generate fake shifts
const createRadomShift = (facility_id, agent_org_id, agent_id) => {
    return {
        id: faker.datatype.uuid(),
        facility_id: facility_id,
        agent_id: agent_id,
        agent_org_id: agent_org_id,
        date: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
        work_hours: Math.floor(Math.random() * 8 + 1)
    }
}

Array.from({ length: 20 }).forEach(() => {
    agents.push(createRandomAgent());
});

Array.from({ length: 5 }).forEach(() => {
    facilities.push(createRandomFacility());
});

facilities.forEach((facility) => {
    agents.forEach((agent) => {
        if(Math.floor(Math.random() * 2) === 0) {
            // facility own customer id
            const agent_id = faker.datatype.uuid();
            Array.from({ length: Math.floor(Math.random() * 10 + 1) }).forEach(() => {
                shifts.push(createRadomShift(facility.id, agent.id, agent_id));
            });
        }
    })
});
