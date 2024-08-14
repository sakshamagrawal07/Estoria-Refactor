// "use client"

import "./global.css";
import Card from "./card";

export default function Wing({ team }: { team: object[] }) {

    //@ts-ignore
    const lead = team?.filter((member) => member.position === "Lead" || member.position === "Co-Lead" || member.position === "Head" || member.position === "Co-Head")

    //@ts-ignore
    const teamMembers = team?.filter((member) => member.position === "Member")

    return (
        <div className="section">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
            <div className="topRow flex">
                {
                    lead?.map((member) => {
                        return (
                            //@ts-ignore
                            <Card imageUrl={member.imageUrl} name={member.name} position={member.position} github={member?.github} insta={member?.insta} linkedIn={member?.linkedin} key={member._id} />
                        )
                    })
                }
            </div >
            <div className="row">
                {
                    teamMembers?.map((member) => {
                        return (
                            //@ts-ignore
                            <Card imageUrl={member.imageUrl} name={member.name} position={member.position} github={member?.github} insta={member?.insta} linkedIn={member?.linkedin} key={member._id} />
                        )
                    })
                }
                {/* <Card {...obj} />
                <Card {...obj} />
                <Card {...obj} />
                <Card {...obj} /> */}
            </div >
        </div>
    )
}