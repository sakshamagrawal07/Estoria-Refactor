'use client'

import CardsModal from "@/components/admin/teams/cardsModal";
import SliderModal from "@/components/admin/teams/sliderModal";
import { Button, Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import "./globals.css"
import { useEffect, useState } from "react";
import { HomeInterface } from "../../api/models/home";

export default function App({ }) {

    const [data, setData] = useState<HomeInterface[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/home')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    async function handleRemove(_id: string) {
        console.log("sendData = ", _id)
        const res: Response = await fetch(`http://localhost:3000/admin/api/home?_id=${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const response = await res.json()
        console.log(response.message);
    }

    return (
        <div className="px-6">
            <div className="flex items-center justify-center mb-5">
                <CardsModal />
                <SliderModal />
            </div>
            <Table
                isStriped
                aria-label="Example static collection table"
                color="danger"
                fullWidth={false}
                layout="auto"
            >
                <TableHeader>
                    <TableColumn>TYPE</TableColumn>
                    <TableColumn>TITLE</TableColumn>
                    <TableColumn>DESCRIPTION</TableColumn>
                    <TableColumn>IMAGE(S)</TableColumn>
                    <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        data.map((card: object) => {
                            return (
                                <TableRow key={card._id}>
                                    <TableCell>{card.cardType}</TableCell>
                                    <TableCell>{card.title}</TableCell>
                                    <TableCell>{card.description}</TableCell>
                                    <TableCell>
                                        {card.image &&  <Link
                                            isBlock
                                            showAnchorIcon
                                            isExternal
                                            href={card.image}
                                            color="primary">
                                            Image
                                        </Link>}
                                        {
                                            card.imageUrls.map((urls: string,index:number) => {
                                                return (
                                                    <Link
                                                        isBlock
                                                        showAnchorIcon
                                                        isExternal
                                                        href={urls}
                                                        color="primary">
                                                        {`Image ${index+1}`}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </TableCell>
                                    <TableCell>
                                        <Button color="danger" variant="flat" size="sm" type="submit" onClick={() => { handleRemove(card._id) }}>
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}