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
    Textarea,
    RadioGroup,
    Radio

} from "@nextui-org/react";
import PlusIcon from "@/components/plusIcon";
import { ClubWings } from "../../api/models/wings";


interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function AddNewModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [wingName, setWingName] = useState("");
    const [description, setDescription] = useState("");
    const [wingType, setWingType] = useState("")

    async function submitForm() {
        const data: ClubWings = {
            name: wingName,
            description: description,
            wingType: wingType
        }
        await sendData(data)
    }

    async function sendData(data: ClubWings) {
        const res: Response = await fetch("./api/wings", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const response = await res.json()
        console.log(response.message);
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
                            <ModalHeader className="flex flex-col gap-1">Add New Wing</ModalHeader>
                            <ModalBody>
                                <Input
                                    isRequired
                                    autoFocus
                                    label="Wing name"
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setWingName(e.target.value)}
                                    />
                                <Textarea
                                    isRequired
                                    label="Description"
                                    minRows={2}
                                    variant="underlined"
                                    onChange={(e: InputChangeInterface) => setDescription(e.target.value)}
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <RadioGroup
                                        isRequired
                                        size="sm"
                                        label="Wing type : "
                                        orientation="horizontal"
                                        onChange={(e:InputChangeInterface) => setWingType(e.target.value)}
                                    >
                                        <Radio value="Cultural Wings">Cultural Wing</Radio>
                                        <Radio value="Non-Cultural Wings">Non-Cultural Wing</Radio>
                                    </RadioGroup>
                                </div>
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
