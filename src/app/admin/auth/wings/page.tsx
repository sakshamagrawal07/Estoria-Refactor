"use client"

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "./globals.css"
import DataTable from "./table";
import AddNewModal from "./modal";
import { differentWingTypes } from "@/lib/differentWingTypes";

export default function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/wings')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    return (
        <>
            <div className="flex flex-wrap gap-4 navbar">
                <Tabs key="primary" color="secondary" aria-label="Tabs colors" radius="full" defaultSelectedKey="home" className="tabs">
                    {
                        differentWingTypes.map((wingType) => {
                            //@ts-ignore
                            const tableData = data[wingType] || []
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
