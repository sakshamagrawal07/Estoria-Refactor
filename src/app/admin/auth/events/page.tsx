"use client"

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "./globals.css"
import NavBar from "../../navbar";
import DataTable from "./table";
import AddNewModal from "./modal";
import { EventsInterface } from "../../api/models/events";
import { differentEventTypes } from "@/lib/differentEventTypes";

export default function App() {
    const [data, setData] = useState<EventsInterface[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/events')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    return (
        <>
            {/* <NavBar /> */}
            <div className="flex flex-wrap gap-4 navbar">
                <Tabs key="primary" color="secondary" aria-label="Tabs colors" radius="full" defaultSelectedKey="home" className="tabs">
                    {
                        differentEventTypes.map((eventType) => {
                            //@ts-ignore
                            const tableData = data[eventType] || []
                            return (
                                < Tab key={eventType} title={eventType} className="tabContent" >
                                    < DataTable tableData={tableData} />
                                </Tab>
                            )
                        })
                    }
                    <Tab>
                        <AddNewModal />
                    </Tab>
                </Tabs>

            </div >
        </>
    );
}
