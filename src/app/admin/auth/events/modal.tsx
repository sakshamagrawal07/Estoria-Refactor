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
import PlusIcon from "@/components/plusIcon";
import { EventsInterface } from "../../api/models/events";
import { CldUploadWidget } from "next-cloudinary";
import toast from "react-hot-toast";

interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function AddNewModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [shortDescp, setShortDescp] = useState<string>("");
    const [detailedDescp, setDetailedDescp] = useState<string>("");
    const [eventType, setEventType] = useState<string>("");
    const [registrationLink,setRegistrationLink] = useState<string>("")
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const [coverImageUrl, setCoverImageUrl] = useState<string>("");
    const [galleryImageUrls, setGalleryImageUrls] = useState<string[]>([]);

    const handleDateChange = (value:any) => {
        const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        setDate(`${value.day} ${month[value.month - 1]}, ${value.year}`);
    }

    async function submitForm() {
        setIsLoading(true)
        const data: EventsInterface = {
            name: name,
            date: date,
            shortDescription: shortDescp,
            detailedDescription: detailedDescp,
            registrationLink:registrationLink,
            eventType: eventType,
            coverImageUrl: coverImageUrl,
            galleryImageUrls : galleryImageUrls
        }
        await sendData(data)
        setIsLoading(false)
        setName("")
        setDate("")
        setShortDescp("")
        setDetailedDescp("")
        setEventType("")
        setCoverImageUrl("")
        setRegistrationLink("")
        setGalleryImageUrls([])
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
        if(response.status===200){
            toast.success(`${response.message}\nRefresh page to see newly added data.`)
        } else{
            toast.error(`${response.message}\Try again.`)
        }
        console.log(response.message);
    }

    const handleOnSuccess = (result:any) => {
        if (result.event === 'success') {
            setCoverImageUrl(result.info.url);
        }
    };

    const handleOnQueuesEnd = (results:any) => {
        let urls:string[] = [];
        results.info.files.map((file:any) => {
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
                                    value={name}
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
                                    value={shortDescp}
                                    onChange={(e: InputChangeInterface) => setShortDescp(e.target.value)}
                                />
                                <Textarea
                                    label="Detailed description"
                                    minRows={2}
                                    variant="underlined"
                                    value={detailedDescp}
                                    onChange={(e: InputChangeInterface) => setDetailedDescp(e.target.value)}
                                />
                                <Input
                                    isRequired
                                    autoFocus
                                    label="Short description"
                                    description="Required for an upcoming event"
                                    variant="underlined"
                                    value={registrationLink}
                                    onChange={(e: InputChangeInterface) => setRegistrationLink(e.target.value)}
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <RadioGroup
                                        isRequired
                                        size="sm"
                                        label="Event type : "
                                        orientation="horizontal"
                                        value={eventType}
                                        onChange={(e: InputChangeInterface) => setEventType(e.target.value)}
                                    >
                                        <Radio value="Up-Coming Events">Up-Coming Event</Radio>
                                        <Radio value="Past Events">Past Event</Radio>
                                    </RadioGroup>
                                </div>
                                <CldUploadWidget
                                    uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET}
                                    onSuccess={(results, options) => {
                                        handleOnSuccess(results)
                                    }}
                                >
                                    {({ open }) => {
                                        return (
                                            <Button color="primary" variant="solid" onPress={() => open()} isDisabled={isLoading}>
                                                Upload Cover Image
                                            </Button>
                                        );
                                    }}
                                </CldUploadWidget>
                                <CldUploadWidget
                                    uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET}
                                    onQueuesEnd={(results, options) => {
                                        handleOnQueuesEnd(results)
                                    }}
                                >
                                    {({ open }) => {
                                        return (
                                            <Button color="primary" variant="solid" onPress={() => open()} isDisabled={isLoading}>
                                                Upload Gallery Images
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
    );
}
