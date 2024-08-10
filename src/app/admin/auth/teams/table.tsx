import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link } from "@nextui-org/react";
import "./globals.css"
import toast from "react-hot-toast";

interface Team {
    _id:string;
    name: string;
    position: string;
    teams: string[];
    insta?: string;
    linkedin?: string;
    github?: string;
    imageUrl?: string;
}

export default function DataTable({ tableData }: { tableData: object[] }) {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleRemove(_id: string) {
        setIsLoading(true)
        await sendData(_id)
        setIsLoading(false)
    }

    async function sendData(_id: string) {
        // console.log("sendData = ",_id)
        const res: Response = await fetch(`http://localhost:3000/admin/api/teams?_id=${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const response = await res.json()
        if (response.status === 200) {
            toast.success(`${response.message}\nRefresh page to see updated data.`)
        } else {
            toast.error(`${response.message}\nTry again.`)
        }
        // console.log(response.message);
    }

    return (
        <>
            <Table
                isStriped
                aria-label="Example static collection table"
                // selectionMode="multiple"
                color="danger"
                fullWidth={true}
                className="tableSize"
                layout="auto"
            >
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>POSITION</TableColumn>
                    <TableColumn>INSTA</TableColumn>
                    <TableColumn>LINKEDIN</TableColumn>
                    <TableColumn>GITHUB</TableColumn>
                    <TableColumn>IMAGE LINK</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        //@ts-ignore
                        tableData.map((member: Team) => {
                            return (
                                <TableRow key={member._id}>
                                    <TableCell>{member.name}</TableCell>
                                    <TableCell>{member.position}</TableCell>
                                    <TableCell>{member.insta}</TableCell>
                                    <TableCell>{member.linkedin}</TableCell>
                                    <TableCell>{member.github}</TableCell>
                                    <TableCell>
                                        <Link
                                            isBlock
                                            showAnchorIcon
                                            isExternal
                                            href={member.imageUrl}
                                            color="primary">
                                            View
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="danger" variant="flat" size="sm" onClick={() => { handleRemove(member._id) }} isLoading={isLoading}>
                                            {isLoading ? "Removing" : "Remove"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </>
    );
}
