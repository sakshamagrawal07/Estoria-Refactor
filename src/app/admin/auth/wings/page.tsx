"use client"

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "./globals.css"
import NavBar from "../../navbar";
import DataTable from "./table";
import AddNewModal from "./modal";

import { ClubWings } from "../../api/models/wings";
import { table } from "console";

export default function App() {

    const wingsType = [
        "Cultural Wings",
        "Non-Cultural Wings"
    ]

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/wings')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    return (
        <>
            {/* <NavBar /> */}
            <div className="flex flex-wrap gap-4 navbar">
                <Tabs key="primary" color="secondary" aria-label="Tabs colors" radius="full" defaultSelectedKey="home" className="tabs">
                    {
                        wingsType.map((wingType) => {

                            const tableData = data.filter((wing: ClubWings) => {
                                return wing.wingType === wingType;
                            })

                            return (
                                <Tab key={wingType} title={wingType} className="tabContent">
                                    <DataTable tableData={tableData} />
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
