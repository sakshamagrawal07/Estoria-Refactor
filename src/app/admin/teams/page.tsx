"use client"

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "./globals.css"
import NavBar from "../navbar";
import DataTable from "./table";
import AddNewModal from "./modal";
import { TeamMember } from "../api/models/teams";

export default function App() {

    const teams = [
        "Club",
        "Acting",
        "Poetry",
        "Cinematography",
        "Script-Writing",
        "Management",
        "External Affairs",
        "Design",
        "Social Media",
        "Developers"
    ]

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/teams')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    return (
        <>
            <NavBar />
            <div className="flex flex-wrap gap-4 navbar">
                <Tabs key="primary" color="secondary" aria-label="Tabs colors" radius="full" defaultSelectedKey="home" className="tabs">
                    {
                        teams.map((team) => {
                            const tableData = data.filter((member: TeamMember) => {
                                return member.teams.includes(team)
                            })

                            return (
                                < Tab key={team} title={team} className="tabContent" >
                                    < DataTable tableData={tableData} />
                                </Tab>
                            )
                        })
                    }
                    <Tab>
                        <AddNewModal />
                    </Tab>
                </Tabs>

            </div>
        </>
    );
}
