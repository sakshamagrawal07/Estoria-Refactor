import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Link } from "@nextui-org/react";
import "./globals.css"
import toast from "react-hot-toast";

interface Events {
    _id: string;
    name: string;
    date: string;
    shortDescription: string;
    detailedDescription?: string;
    registrationLink?: string;
    coverImageUrl?: string;
    galleryImageUrls?: string[];
}

export default function DataTable({ tableData }: { tableData: object[] }) {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleRemove(_id: string) {
        setIsLoading(true)
        await sendData(_id)
    }

    async function sendData(_id: string) {
        console.log("sendData = ", _id)
        const res: Response = await fetch(`http://localhost:3000/admin/api/events?_id=${_id}`, {
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
        setIsLoading(false)
        console.log(response.message);
    }

    return (
        <>
            <Table
                isStriped
                // selectionMode="multiple"
                color="danger"
                fullWidth={true}
                className="tableSize"
                layout="auto"
            >
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>DATE</TableColumn>
                    <TableColumn>SHORT DESCRIPTION</TableColumn>
                    <TableColumn>DETAILED DESCRIPTION</TableColumn>
                    <TableColumn>REGISTRATION LINK</TableColumn>
                    <TableColumn>COVER IMAGE</TableColumn>
                    <TableColumn>GALLERY IMAGES</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        //@ts-ignore
                        tableData.map((event: Events) => {
                            return (
                                <TableRow key={event._id}>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>{event.date}</TableCell>
                                    <TableCell>{event.shortDescription}</TableCell>
                                    <TableCell>{event.detailedDescription}</TableCell>
                                    <TableCell>{event.registrationLink}</TableCell>
                                    <TableCell>
                                        {event.coverImageUrl &&<Link
                                            isBlock
                                            showAnchorIcon
                                            isExternal
                                            href={event.coverImageUrl}
                                            color="primary">
                                            View
                                        </Link>}
                                    </TableCell>
                                    <TableCell>
                                        {
                                            event.galleryImageUrls!.map((urls: string, index: number) => {
                                                return (
                                                    <Link
                                                        isBlock
                                                        showAnchorIcon
                                                        isExternal
                                                        href={urls}
                                                        color="primary">
                                                        {`Image ${index + 1}`}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </TableCell>
                                    <TableCell>
                                        <Button color="danger" variant="flat" size="sm" type="submit" onClick={() => { handleRemove(event._id) }} isLoading={isLoading}>
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
