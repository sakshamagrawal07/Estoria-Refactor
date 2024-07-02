import { CldUploadWidget } from 'next-cloudinary';
import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    CheckboxGroup,
    Checkbox,
    Input

} from "@nextui-org/react";
import PlusIcon from "./plusIcon";
import { TeamMember } from "../api/models/teams";

interface InputChangeInterface {
    target: HTMLInputElement;
}


export default function AddNewModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isInvalid, setIsInvalid] = useState(true);

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [teams, setTeams] = useState([])
    const [insta, setInsta] = useState("")
    const [linkedin, setlinkedin] = useState("")
    const [github, setGithub] = useState("")
    
    const [imageUrl, setImageUrl] = useState<string>('');

    async function submitForm() {
        const data: TeamMember = {
            name: name,
            position: position,
            teams: teams,
            insta: insta === "" ? undefined : insta,
            linkedin: linkedin === "" ? undefined : linkedin,
            github: github === "" ? undefined : github,
            imageUrl: imageUrl
        }
        console.log('Uploaded image:', imageUrl);
        await sendData(data)
    }

    async function sendData(data: TeamMember) {
        const res: Response = await fetch("./api/teams", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const response = await res.json()
        console.log(response.message);
    }

    const handleUpload = (result) => {
        if (result.event === 'success') {
            setImageUrl(result.info.url);
        }
    };

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
                size="xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New Team Member</ModalHeader>
                            <form>
                                <ModalBody>

                                    <Input
                                        isRequired
                                        isClearable
                                        autoFocus
                                        label="Name"
                                        variant="underlined"
                                        onChange={(e: InputChangeInterface) => setName(e.target.value)}
                                    />
                                    <Input
                                        isRequired
                                        isClearable
                                        label="Position"
                                        variant="underlined"
                                        onChange={(e: InputChangeInterface) => setPosition(e.target.value)}
                                    />
                                    <Input
                                        isClearable
                                        label="Insta link"
                                        variant="underlined"
                                        onChange={(e: InputChangeInterface) => setInsta(e.target.value)}
                                    />
                                    <Input
                                        isClearable
                                        label="LinkedIn link"
                                        variant="underlined"
                                        onChange={(e: InputChangeInterface) => setlinkedin(e.target.value)}
                                    />
                                    <Input
                                        isClearable
                                        label="GitHub link"
                                        variant="underlined"
                                        onChange={(e: InputChangeInterface) => setGithub(e.target.value)}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <CheckboxGroup
                                            isRequired
                                            orientation="horizontal"
                                            isInvalid={isInvalid}
                                            label="Select team(s)"
                                            description="Choose Club only for Club Lead & Co-Lead"
                                            onValueChange={(value) => {
                                                setIsInvalid(value.length < 1);
                                                setTeams(value)
                                            }}
                                        >
                                            <Checkbox value="Club">Club</Checkbox>
                                            <Checkbox value="Acting">Acting</Checkbox>
                                            <Checkbox value="Poetry">Poetry</Checkbox>
                                            <Checkbox value="Cinematography">Cinematography</Checkbox>
                                            <Checkbox value="Script-Writing">Script-Writing</Checkbox>
                                            <Checkbox value="Management">Management</Checkbox>
                                            <Checkbox value="External Affairs">External Affairs</Checkbox>
                                            <Checkbox value="Design">Design</Checkbox>
                                            <Checkbox value="Social Media">Social Media</Checkbox>
                                            <Checkbox value="Developers">Developers</Checkbox>
                                        </CheckboxGroup>
                                    </div>
                                    {/* <CldUploadButton
                                        uploadPreset="h7tbopug"
                                        onSuccess={(results,options) => {
                                            console.log("hello")
                                            handleUpload(results)
                                        }}
                                        >
                                        Upload Image
                                    </CldUploadButton> */}
                                    <CldUploadWidget
                                        uploadPreset="h7tbopug"
                                        onSuccess={(results, options) => {
                                            handleUpload(results)
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
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}