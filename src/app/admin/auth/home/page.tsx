'use client'

import CardsModal from "./cardsModal";
import SliderModal from "./sliderModal";
import { Button, Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import "./globals.css"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Home {
    _id: string;
    title?: string;
    cardType?: string;
    description: string;
    image?: string;
    imageUrls?: string[];
}

export default function App({ }) {

    const [data, setData] = useState<Home[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetch('http://localhost:3000/admin/api/home')
            .then(response => response.json())
            .then(res => setData(res.message));

    }, []);

    async function handleRemove(_id: string) {
        setIsLoading(true)
        console.log("sendData = ", _id)
        const res: Response = await fetch(`http://localhost:3000/admin/api/home?_id=${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const response = await res.json()
        if (response.status === "200") {
            toast.success(`${response.message}\nRefresh page to see updated data.`)
        } else {
            toast.error(`${response.message}\nTry again.`)
        }
        setIsLoading(false)
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
                        data.map((card: Home) => {
                            return (
                                <TableRow key={card._id}>
                                    <TableCell>{card.cardType}</TableCell>
                                    <TableCell>{card.title}</TableCell>
                                    <TableCell>{card.description}</TableCell>
                                    <TableCell>
                                        {card.image && <Link
                                            isBlock
                                            showAnchorIcon
                                            isExternal
                                            href={card.image}
                                            color="primary">
                                            Image
                                        </Link>}
                                        {
                                            card.imageUrls!.map((urls: string, index: number) => {
                                                return (
                                                    <Link
                                                        key={index}
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
                                        <Button color="danger" variant="flat" size="sm" onClick={() => { handleRemove(card._id) }} isLoading={isLoading}>
                                            {isLoading ? "Removing" : "Remove"}
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