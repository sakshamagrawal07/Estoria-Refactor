"use client";

import { differentTeams } from "@/lib/differentTeams";
import Card from "@/components/team/card";
import Wing from "@/components/team/wing";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import "./globals.css"
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Teams() {

    const [data, setData] = useState(null || [])
    const [selectedKeys, setSelectedKeys] = useState(new Set(["Club Head"]));
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const selectedValue: string = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    useEffect(() => {
        fetch('../../admin/api/teams')
            .then(response => {
                console.log("JSON RES", response);
                return response.json();
            })
            .then(res => {
                const fetchedData = res.message;
                setData(fetchedData);

                console.log("RES : ", fetchedData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

        console.log("Selected keys : ", selectedValue)

    }, []);

    const obj = {
        firstName: "Saksham",
        lastName: "Agrawal",
        position: "member"
    }



    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <div className="header"><span className="samkaran">OUR</span>T<span className="samkaran">EAM</span></div>
            </div>
            <div className="container">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
                <div className="flex">
                    <Dropdown backdrop="blur" placement="bottom" onOpenChange={() => setIsOpen(!isOpen)}>
                        <DropdownTrigger>
                            <div
                                className="header subHeading flex items-center cursor-pointer"
                            >
                                {selectedValue.split(" ")[0].substring(0, 1)}<span className="samkaran">{selectedValue.split(" ")[0].substring(1)}</span>{selectedValue.split(" ")[1]?.substring(0, 1)}<span className="samkaran">{selectedValue.split(" ")[1]?.substring(1)}</span>
                                <div className="m-10 p-10">
                                    {isOpen ? <ChevronUp size={50} /> : <ChevronDown size={50} className="ml-10" />}
                                </div>
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Wings"
                            variant="shadow"
                            disallowEmptySelection
                            selectionMode="single"
                            color="warning"
                            selectedKeys={selectedKeys}
                            //@ts-ignore
                            onSelectionChange={setSelectedKeys}
                        >
                            {
                                differentTeams.map((team) => {
                                    return (
                                        <DropdownItem key={team} >{team}</DropdownItem>
                                    )
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                </div>
                {
                    //@ts-ignore
                    <Wing team={data[selectedValue]} />
                }
            </div>
        </div>
    )
}