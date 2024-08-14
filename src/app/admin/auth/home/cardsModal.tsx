'use client'

import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
    Textarea,
    useDisclosure
} from "@nextui-org/react";
import "./globals.css"
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { PlusIcon } from "lucide-react";
import { HomeInterface } from "@/app/admin/api/models/home";
import toast from "react-hot-toast";
// import { useRouter } from "next/router";

interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function CardsModal() {

    // const router = useRouter();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [description, setDescription] = useState<string>("");
    const [cardType, setCardType] = useState<string>("");
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const [imageUrls, setImageUrls] = useState<string[]>([]);

    async function submitForm() {
        if(description===""){
            toast.error("Description is required.")
            return
        }
        if(cardType===""){
            toast.error("Card type is required.")
            return
        }
        setIsLoading(true)
        const data: HomeInterface = {
            description: description,
            cardType: cardType,
            imageUrls: imageUrls
        }
        await sendData(data)
        setIsLoading(false)
        setDescription("")
        setCardType("")
        setImageUrls([])
    }

    async function sendData(data: HomeInterface) {
        const res: Response = await fetch("../api/home", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const response = await res.json()
        // console.log("RESPONSE : ",res.status)
        if(response.status===200){
            toast.success(`${response.message}\nRefresh page to see newly added data.`)
        } else{
            toast.error(`${response.message}\nTry again.`)
        }
        // router.reload()
        // console.log(response.message);
    }

    const handleOnQueuesEnd = (results: any) => {
        let urls: string[] = [];
        results.info.files.map((file: any) => {
            // console.log(file.uploadInfo.url)
            urls.push(file.uploadInfo.url)
        })
        // console.log(urls)
        setImageUrls(urls)
    }

    return (
        <>
            <Button
                onPress={onOpen}
                color="success"
                endContent={<PlusIcon />}
                size="md"
                radius="sm"
                variant="shadow"
                className="mx-1"
            >
                Add Card
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Event</ModalHeader>
                            <ModalBody>
                                <Textarea
                                    isRequired
                                    label="Description"
                                    minRows={2}
                                    variant="underlined"
                                    value={description}
                                    onChange={(e: InputChangeInterface) => setDescription(e.target.value)}
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <RadioGroup
                                        isRequired
                                        size="sm"
                                        label="Card type : "
                                        orientation="horizontal"
                                        value={cardType}
                                        onChange={(e: InputChangeInterface) => setCardType(e.target.value)}
                                    >
                                        <Radio value="About Us">About Us</Radio>
                                        <Radio value="Events">Events</Radio>
                                        <Radio value="Our Team">Our Team</Radio>
                                    </RadioGroup>
                                </div>
                                <CldUploadWidget
                                    uploadPreset="h7tbopug"
                                    onQueuesEnd={(results, options) => {
                                        handleOnQueuesEnd(results)
                                    }}
                                >
                                    {({ open }) => {
                                        return (
                                            <Button color="primary" variant="solid" onPress={() => open()} isDisabled={isLoading}>
                                                Upload Images
                                            </Button>
                                        );
                                    }}
                                </CldUploadWidget>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose} isDisabled={isLoading}>
                                    Cancel
                                </Button>
                                <Button color="success" onPress={submitForm} endContent={!isLoading&&<PlusIcon />} variant="flat" isLoading={isLoading}>
                                    {isLoading?"Adding":"Add"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}