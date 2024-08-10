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
import toast from "react-hot-toast";

interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function SliderModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [image, setImage] = useState<string>("");


    async function submitForm() {
        if(title===""){
            toast.error("Title is required.")
            return
        }
        if(description===""){
            toast.error("Description is required.")
        }
        setIsLoading(true)
        const data: HomeInterface = {
            title: title,
            description: description,
            image: image,
            cardType: "Slider"
        }
        await sendData(data)
        setIsLoading(false)
        setTitle("")
        setDescription("")
        setImage("")
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
        if(response.staus===200){
            toast.success(`${response.message}\nRefresh page to see newly added data.`)
        } else {
            toast.error(`${response.message}\nTry Again.`)
        }
        console.log(response.message);
    }

    const handleOnSuccess = (result: any) => {
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
                                    value={title}
                                    onChange={(e: InputChangeInterface) => setTitle(e.target.value)}
                                />
                                <Input
                                    isRequired
                                    autoFocus
                                    label="Short description"
                                    variant="underlined"
                                    value={description}
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
                                            <Button color="primary" variant="solid" onPress={() => open()} isDisabled={isLoading}>
                                                Upload Image
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
                                    {isLoading ? "Adding" : "Add"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
