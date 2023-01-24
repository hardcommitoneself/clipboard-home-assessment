import { shifts } from "./seed";

export const getShiftsByFacility = (facility_id) => {
    return shifts.filter((shift) => shift.facility_id === facility_id);
}