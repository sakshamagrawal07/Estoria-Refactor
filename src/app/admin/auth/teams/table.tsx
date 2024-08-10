import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link } from "@nextui-org/react";
import "./globals.css"

export default function DataTable({ tableData }: { tableData: object[] }) {

    async function handleRemove(_id: string) {
        await sendData(_id)
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
                        tableData.map((member: object) => {
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
                                        <Button color="danger" variant="flat" size="sm" onClick={() => { handleRemove(member._id) }}>
                                            Remove
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
