import React from "react";
import { getAllFacilities } from "../api/facility";

const facilities = getAllFacilities();

export const Main = (props) => {
    return (
        <div>
            <div className="flex flex-col gap-1">
                {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <span className="max-w-[100px] truncate">{facility.id}</span>
                        <span className="font-bold w-72">{facility.name}</span>
                        <a
                            href={`/report/${facility.id}`}
                            className="h-10 cursor-pointer px-5 flex items-center justify-between bg-teal-500 text-white hover:bg-teal-800 transition rounded"
                        >
                            View Shifts
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}