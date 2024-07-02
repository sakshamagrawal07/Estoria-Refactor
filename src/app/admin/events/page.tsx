"use client"

import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import "./globals.css"
import NavBar from "../navbar";
import DataTable from "./table";
import AddNewModal from "./modal";
import { TimelineEvents } from "../api/models/events";

export default function App() {

    const eventsType = [
        "Up-Coming Events",
        "Past Events"
    ]

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/events')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    return (
        <>
            <NavBar />
            <div className="flex flex-wrap gap-4 navbar">
                <Tabs key="primary" color="secondary" aria-label="Tabs colors" radius="full" defaultSelectedKey="home" className="tabs">
                    {
                        eventsType.map((eventType) => {
                            const tableData = data.filter((event: TimelineEvents) => {
                                return event.eventType === eventType;
                            })

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
