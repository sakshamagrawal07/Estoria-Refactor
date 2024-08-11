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
import toast from "react-hot-toast";


interface InputChangeInterface {
    target: HTMLInputElement;
}

export default function AddNewModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [wingName, setWingName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [wingType, setWingType] = useState<string>("")
    const [isLoading,setIsLoading] = useState<boolean>(false)

    async function submitForm() {
        setIsLoading(true)
        const data: ClubWings = {
            name: wingName,
            description: description,
            wingType: wingType
        }
        await sendData(data)
        setIsLoading(false)
        setWingName("")
        setDescription("")
        setWingType("")
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
        if(response.status===200){
            toast.success(`${response.message}\nRefreh page to see nely added data.`)
        } else {
            toast.error(`${response.message}\nTry again.`)
        }
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
                                    value={wingName}
                                    onChange={(e: InputChangeInterface) => setWingName(e.target.value)}
                                    />
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
                                        label="Wing type : "
                                        orientation="horizontal"
                                        value={wingType}
                                        onChange={(e:InputChangeInterface) => setWingType(e.target.value)}
                                    >
                                        <Radio value="Cultural Wings">Cultural Wing</Radio>
                                        <Radio value="Non-Cultural Wings">Non-Cultural Wing</Radio>
                                    </RadioGroup>
                                </div>
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
