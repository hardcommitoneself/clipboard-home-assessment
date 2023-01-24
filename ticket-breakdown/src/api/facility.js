import { facilities } from "./seed";

export const getAllFacilities = () => {
    return facilities;
}

export const findFacilityById = (id) => {
    return facilities.find((facility) => facility.id === id);
}