"use client";

import { useRef, useState } from "react";
import "./global.css";
import { useInView } from "react-hook-inview";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { pastEvents } from "@/data/pastEvents";

export default function PastEvent() {

  const items = Array(10).fill(0);
  const refs = useRef([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  function EventCard(event: any, index: number, onOpen: any) {
    const [ref, inView] = useInView({ threshold: 0.5 });
    //@ts-ignore    
    refs.current[index] = ref;

    return (
      <li key={index} ref={ref} className={inView ? "in-view" : ""}>
        <div className="timeline-card">
          <time>{event.date}</time>
          <div className="overflow-hidden">
            <div className="content">
              <h1>{event.shortTitle}</h1>
              <p>{event.shortDescription}</p>
              <a className="btn btn-open" onClick={onOpen}>See more</a>
            </div>
            <img className="photo" src={event.image}></img>
          </div>
        </div>
      </li>
    );
  }

  return (
    <div className="past-event-box">
      <section className="timeline">
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          scrollBehavior="inside"
          backdrop="blur"
          // classNames={{
          //   // body: "py-[50px]",
          //   backdrop: "backdrop-opacity-50",
          //   header: "border-b-[10px] border-[#292f46]"
          // }}
          size="xl"
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
            </ModalBody>
          </ModalContent>
        </Modal>


        <h1 className="heading-sec">
          <span className="font-style">P</span>AST{" "}
          <span className="font-style">E</span>VENTS
        </h1>
        <ul>
          {pastEvents.map((event, index) => EventCard(event, index, onOpen))}
        </ul>
      </section>
    </div>
  );
}

