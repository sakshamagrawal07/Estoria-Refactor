"use client"

import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input

} from "@nextui-org/react";
import { CldUploadWidget } from "next-cloudinary";
import { PlusIcon } from "lucide-react";
import { HomeInterface } from "@/app/admin/api/models/home";

interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function SliderModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [image, setImage] = useState<string>('');


    async function submitForm() {
        const data: HomeInterface = {
            title: title,
            description: description,
            image: image,
            cardType: "Slider"
        }
        await sendData(data)
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
        console.log(response.message);
    }

    const handleOnSuccess = (result:any) => {
        if (result.event === 'success') {
            setImage(result.info.url);
        }
    };

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
                Add Slider
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
                                <Input
                                    isRequired
                                    autoFocus
                                    label="Title"
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setTitle(e.target.value)}
                                />
                                <Input
                                    isRequired
                                    autoFocus
                                    label="Short description"
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setDescription(e.target.value)}
                                />
                                <CldUploadWidget
                                    uploadPreset="h7tbopug"
                                    onSuccess={(results, options) => {
                                        handleOnSuccess(results)
                                    }}
                                >
                                    {({ open }) => {
                                        return (
                                            <Button color="primary" variant="solid" onPress={() => open()}>
                                                Upload Image
                                            </Button>
                                        );
                                    }}
                                </CldUploadWidget>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="success" onPress={submitForm} endContent={<PlusIcon />} variant="flat" type="submit">
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
