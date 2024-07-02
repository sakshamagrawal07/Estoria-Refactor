import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import "./globals.css"

export default function DataTable({ tableData }: { tableData: object[] }) {
    async function handleRemove(_id:string) {
        await sendData(_id)
    }

    async function sendData(_id:string) {
        // console.log("sendData = ",_id)
        const res: Response = await fetch(`http://localhost:3000/admin/api/wings?_id=${_id}`, {
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
                        tableData.map((wing:object) => {
                            return (
                                    <TableRow key={wing._id}>
                                        <TableCell>{wing.name}</TableCell>
                                        <TableCell>{wing.description}</TableCell>
                                        <TableCell>
                                            <Button color="danger" variant="flat" size="sm" onClick={()=>{handleRemove(wing._id)}}>
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
