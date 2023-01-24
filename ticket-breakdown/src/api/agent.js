import { agents } from "./seed";

export const getAllAgents = () => {
    return agents;
}

export const findAgentById = (id) => {
    return agents.find((agent) => agent.id === id);
}