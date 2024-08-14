"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "./globals.css";
import NavBar from "../../navbar";
import DataTable from "./table";
import AddNewModal from "./modal";
import { TeamMember } from "../../api/models/teams";
import { differentTeams } from "@/lib/differentTeams";

export default function App() {

    const [data, setData] = useState<TeamMember[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/teams')
            .then(response => response.json())
            .then(res => {setData(res.message)})
    }, []);

    return (
        <>
            {/* <NavBar /> */}
            <div className="flex flex-wrap gap-4 navbar">
                <Tabs key="primary" color="secondary" aria-label="Tabs colors" radius="full" defaultSelectedKey="home" className="tabs">
                    {
                        differentTeams.map((team) => {
                            //@ts-ignore
                            const tableData = data[team] || []
                            return (
                                <Tab key={team} title={team} className="tabContent">
                                    <DataTable tableData={tableData} />
                                </Tab>
                            );
                        })
                    }
                    <Tab key="addNew">
                        <AddNewModal />
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}
