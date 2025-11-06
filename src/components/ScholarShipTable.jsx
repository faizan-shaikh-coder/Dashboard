import React, { useState } from "react";
import scholarships from "../data/scholarshipData";

const ScholarShipTable = () => {
    const [filters, setFilters] = useState({
        country: "",
        grade: "",
        eligibility: "",
    });

    const [sort, setSort] = useState("");

    const filtered = scholarships
        .filter(
            (s) =>
                (filters.country ? s.country === filters.country : true) &&
                (filters.grade ? s.grade === filters.grade : true) &&
                (filters.eligibility ? s.eligibility === filters.eligibility : true)
        )
        .sort((a, b) => {
            if (sort === "amount") return b.amount - a.amount;
            return 0;
        });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
                Scholarships
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
                <select
                    name="country"
                    onChange={handleFilterChange}
                    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Countries</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                </select>

                <select
                    name="grade"
                    onChange={handleFilterChange}
                    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Grades</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                </select>

                <select
                    name="eligibility"
                    onChange={handleFilterChange}
                    className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Eligibility</option>
                    <option value="Financial Need">Financial Need</option>
                    <option value="Female Students">Female Students</option>
                    <option value="Environmental Studies">Environmental Studies</option>
                    <option value="STEM Background">STEM Background</option>
                    <option value="Public Health Students">Public Health Students</option>
                    <option value="Leadership Skills">Leadership Skills</option>
                    <option value="Community Service">Community Service</option>
                    <option value="Language Student">Language Student</option>
                    <option value="Rural Student">Rural Student</option>
                    <option value="Merit Based">Merit Based</option>
                </select>

                <button
                    onClick={() => setSort("amount")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                    Sort by Amount
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full border border-gray-300 text-sm md:text-base border-collapse sm:text-base">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 border border-gray-300">Name</th>
                            <th className="p-3 border border-gray-300">Country</th>
                            <th className="p-3 border border-gray-300">Grade</th>
                            <th className="p-3 border border-gray-300">Eligibility</th>
                            <th className="p-3 border border-gray-300">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((s) => (
                            <tr
                                key={s.id}
                                className="hover:bg-blue-50 transition duration-200"
                            >
                                <td className="p-3 border border-gray-300">{s.name}</td>
                                <td className="p-3 border border-gray-300">{s.country}</td>
                                <td className="p-3 border border-gray-300">{s.grade}</td>
                                <td className="p-3 border border-gray-300">{s.eligibility}</td>
                                <td className="p-3 border border-gray-300 font-semibold text-blue-600">
                                    ${s.amount.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScholarShipTable;
