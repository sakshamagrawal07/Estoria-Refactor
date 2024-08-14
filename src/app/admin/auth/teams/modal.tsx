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
import PlusIcon from "@/components/plusIcon";
import { TeamMember } from "../../api/models/teams";
import toast from 'react-hot-toast';
import { differentTeams } from '@/lib/differentTeams';

interface InputChangeInterface {
    target: HTMLInputElement;
}


export default function AddNewModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isInvalid, setIsInvalid] = useState(true);
    const [isLoading, setIsLoading] = useState(false)

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [teams, setTeams] = useState([])
    const [insta, setInsta] = useState("")
    const [linkedin, setlinkedin] = useState("")
    const [github, setGithub] = useState("")

    const [imageUrl, setImageUrl] = useState<string>('');

    async function submitForm() {
        if (name === "") {
            toast.error("Name is required.")
            return
        }
        if (position === "") {
            toast.error("Position is required.")
            return
        }
        if (isInvalid) {
            toast.error("Select atleast one team.")
            return
        }
        setIsLoading(true)
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
        setIsLoading(false)
        setName("")
        setPosition("")
        setTeams([])
        setInsta("")
        setlinkedin("")
        setGithub("")
        setImageUrl("")
        setIsInvalid(true)
    }

    async function sendData(data: TeamMember) {
        const res: Response = await fetch("../api/teams", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const response = await res.json()
        if (response.status === 200) {
            toast.success(`${response.message}\nRefresh page to see newly added data.`)
        } else {
            toast.error(`${response.message}\nTry again.`)
        }
        console.log(response.message);
    }

    const handleUpload = (result:any) => {
        if (result.event === 'success') {
            console.log("Image Upload Reasult : ", result)
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
                                        value={name}
                                        onChange={(e: InputChangeInterface) => setName(e.target.value)}
                                    />
                                    <Input
                                        isRequired
                                        isClearable
                                        label="Position"
                                        variant="underlined"
                                        value={position}
                                        onChange={(e: InputChangeInterface) => setPosition(e.target.value)}
                                    />
                                    <Input
                                        isClearable
                                        label="Insta link"
                                        variant="underlined"
                                        value={insta}
                                        onChange={(e: InputChangeInterface) => setInsta(e.target.value)}
                                    />
                                    <Input
                                        isClearable
                                        label="LinkedIn link"
                                        variant="underlined"
                                        value={linkedin}
                                        onChange={(e: InputChangeInterface) => setlinkedin(e.target.value)}
                                    />
                                    <Input
                                        isClearable
                                        label="GitHub link"
                                        variant="underlined"
                                        value={github}
                                        onChange={(e: InputChangeInterface) => setGithub(e.target.value)}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <CheckboxGroup
                                            isRequired
                                            orientation="horizontal"
                                            isInvalid={isInvalid}
                                            label="Select team(s)"
                                            description="Choose Club only for Club Lead & Co-Lead"
                                            value={teams}
                                            onValueChange={(value) => {
                                                setIsInvalid(value.length < 1);
                                                //@ts-ignore
                                                setTeams(value)
                                            }}
                                        >
                                            {
                                                differentTeams.map((team,index) => {

                                                    return (
                                                        <Checkbox value={team} key={index}>{team}</Checkbox>
                                                    );
                                                })
                                            }
                                            {/* <Checkbox value="Acting">Acting</Checkbox>
                                            <Checkbox value="Poetry">Poetry</Checkbox>
                                            <Checkbox value="Cinematography">Cinematography</Checkbox>
                                            <Checkbox value="Script-Writing">Script-Writing</Checkbox>
                                            <Checkbox value="Management">Management</Checkbox>
                                            <Checkbox value="External Affairs">External Affairs</Checkbox>
                                            <Checkbox value="Design">Design</Checkbox>
                                            <Checkbox value="Social Media">Social Media</Checkbox>
                                            <Checkbox value="Developers">Developers</Checkbox> */}
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

                                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                                        onSuccess={(results, options) => {
                                            handleUpload(results)
                                        }}
                                    >
                                        {({ open }) => {
                                            return (
                                                <Button color="primary" variant="solid" onPress={() => open()} disabled={isLoading}>
                                                    Upload Image
                                                </Button>
                                            );
                                        }}
                                    </CldUploadWidget>

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose} disabled={isLoading} >
                                        Cancel
                                    </Button>
                                    <Button color="success" onPress={submitForm} endContent={!isLoading && <PlusIcon />} variant="flat" isLoading={isLoading}>
                                        {isLoading ? "Adding" : "Add"}
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