import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    DatePicker,
    Textarea,
    RadioGroup,
    Radio

} from "@nextui-org/react";
import PlusIcon from "./plusIcon";
import { EventsInterface } from "../api/models/events";
import { CldUploadWidget } from "next-cloudinary";

interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function AddNewModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [shortDescp, setShortDescp] = useState("");
    const [detailedDescp, setDetailedDescp] = useState("");
    const [eventType, setEventType] = useState("");

    const [coverImageUrl, setCoverImageUrl] = useState<string>('');
    const [galleryImageUrls, setGalleryImageUrls] = useState<string[]>([]);

    const handleDateChange = (value) => {
        const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        setDate(`${value.day} ${month[value.month - 1]}, ${value.year}`);
    }

    async function submitForm() {
        const data: EventsInterface = {
            name: name,
            date: date,
            shortDescription: shortDescp,
            detailedDescription: detailedDescp,
            eventType: eventType,
            coverImageUrl: coverImageUrl,
            galleryImageUrls : galleryImageUrls
        }
        await sendData(data)
    }

    async function sendData(data: EventsInterface) {
        const res: Response = await fetch("./api/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const response = await res.json()
        console.log(response.message);
    }

    const handleOnSuccess = (result) => {
        if (result.event === 'success') {
            setCoverImageUrl(result.info.url);
        }
    };

    const handleOnQueuesEnd = (results) => {
        let urls:string[] = [];
        results.info.files.map(file => {
            // console.log(file.uploadInfo.url)
            urls.push(file.uploadInfo.url)
        })
        console.log(urls)
        setGalleryImageUrls(urls)
    }

    return (
        <>
            <Button
                onPress={onOpen}
                color="success"
                endContent={<PlusIcon />}
                size="sm"
                radius="full"
                variant="shadow"
            >
                Add New
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
                                    label="Event name"
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setName(e.target.value)}
                                />
                                <DatePicker
                                    isRequired
                                    showMonthAndYearPickers
                                    label="Event date"
                                    variant="underlined"
                                    className="max-w-[284px]"
                                    onChange={handleDateChange}
                                />
                                <Input
                                    isRequired
                                    autoFocus
                                    label="Short description"
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setShortDescp(e.target.value)}
                                />
                                <Textarea
                                    label="Detailed description"
                                    minRows={2}
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setDetailedDescp(e.target.value)}
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <RadioGroup
                                        isRequired
                                        size="sm"
                                        label="Event type : "
                                        orientation="horizontal"
                                        onChange={(e: InputChangeInterface) => setEventType(e.target.value)}
                                    >
                                        <Radio value="Up-Coming Events">Up-Coming Event</Radio>
                                        <Radio value="Past Events">Past Event</Radio>
                                    </RadioGroup>
                                </div>
                                <CldUploadWidget
                                    uploadPreset="h7tbopug"
                                    onSuccess={(results, options) => {
                                        handleOnSuccess(results)
                                    }}
                                >
                                    {({ open }) => {
                                        return (
                                            <Button color="primary" variant="solid" onPress={() => open()}>
                                                Upload Cover Image
                                            </Button>
                                        );
                                    }}
                                </CldUploadWidget>
                                <CldUploadWidget
                                    uploadPreset="h7tbopug"
                                    onQueuesEnd={(results, options) => {
                                        // console.log("Results", results)
                                        // console.log("Options", options)
                                        // results.info.files.map(file => {
                                        //     console.log(file.uploadInfo.url)
                                        // })
                                        handleOnQueuesEnd(results)
                                    }}
                                >
                                    {({ open }) => {
                                        return (
                                            <Button color="primary" variant="solid" onPress={() => open()}>
                                                Upload Gallery Images
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
