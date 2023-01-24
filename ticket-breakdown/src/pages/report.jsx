import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShiftsByFacility } from "../api/shift";

export async function loader({ params }) {
    console.log(getShiftsByFacility(params.facility_id));
    return getShiftsByFacility(params.facility_id);
}

export const Report = (props) => {
    const shifts = useLoaderData();

    return (
        <div>
            {shifts.length}
        </div>
    )
}