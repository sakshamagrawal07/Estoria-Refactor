"use client";

import { differentTeams } from "@/app/admin/auth/teams/differentTeams";
import Card from "@/components/team/card";
import Wing from "@/components/team/wing";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useMemo, useState } from "react";
import "./globals.css"
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Teams() {

    const obj = {
        firstName: "Saksham",
        lastName: "Agrawal",
        position: "member"
    }

    const [selectedKeys, setSelectedKeys] = useState(new Set(["Acting"]));
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                {/* <div className="header-logo">
                    <img src="../logo.jpg" alt="logo" />
                </div> */}
                <div className="header"><span className="samkaran">OUR</span>T<span className="samkaran">EAM</span></div>
            </div>
            <div className="container">
                {/* <TopRow /> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
                <div className="topRow flex">
                    <Card {...obj} />
                    <Card {...obj} />
                </div >
                <div className="flex">
                    <Dropdown backdrop="blur" placement="right-start">
                        <DropdownTrigger>
                            {/* <Button
                                variant="shadow"
                                className="h-screen min-h-[500px]"
                                color="warning"
                                size="lg"
                            > */}
                            {/* {`${selectedValue} Team`} */}
                            <div
                                className="header subHeading flex items-center cursor-pointer"
                                onClick={() => { setIsOpen(true) }}
                            >
                                {selectedValue.substring(0, 1)}
                                <span className="samkaran">
                                    {selectedValue.substring(1)}
                                </span>
                                <div className="m-10 p-10">
                                    {isOpen ? <ChevronUp size={50}/> : <ChevronDown size={50}/>}
                                </div>
                            </div>
                            {/* </Button> */}
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
                                        <DropdownItem key={team} onClick={() => { setIsOpen(false) }} >{team}</DropdownItem>
                                    )
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <Wing />
                <hr className="sectionBreak" />
                <Wing />
            </div>
        </div>
    )
}