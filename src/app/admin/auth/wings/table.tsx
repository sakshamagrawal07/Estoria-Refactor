import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import "./globals.css"
import { useState } from "react";
import toast from "react-hot-toast";

interface ClubWings {
    _id:string;
    name: string;
    wingType: string;
    description: string;
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
        const res: Response = await fetch(`http://localhost:3000/admin/api/wings?_id=${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const response = await res.json()
        if (response.status === 200) {
            toast.success(`${response.message}\nRefresh page to see newly updated data.`)
        } else {
            toast.error(`${response.message}\nTry again.`)
        }
        // console.log(response.message);
    }
    return (
        <>
            <Table
                isStriped aria-label="Example static collection table"
                // selectionMode="multiple"
                color="danger"
                fullWidth={true}
                className="tableSize"
                layout="auto"
            >
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>DESCRIPTION</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        //@ts-ignore
                        tableData.map((wing: ClubWings) => {
                            return (
                                <TableRow key={wing._id}>
                                    <TableCell>{wing.name}</TableCell>
                                    <TableCell>{wing.description}</TableCell>
                                    <TableCell>
                                        <Button color="danger" variant="flat" size="sm" onClick={() => { handleRemove(wing._id) }} isLoading={isLoading}>
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
