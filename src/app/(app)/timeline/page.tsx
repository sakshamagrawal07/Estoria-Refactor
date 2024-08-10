import PastEvent from "@/components/timeline/pastEvent";
import UpcomingEvent from "@/components/timeline/upcomingEvent";
import "../../../components/timeline/global.css"

export default function Timeline() {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap"
                rel="stylesheet"
            />
            <div className="container upcomping-event-box">
                <div className="flex flex-row gap-2">
                    <div className="header-logo">
                        <img src="" alt="logo" />
                    </div>
                    <div className="header">U<span className="samkaran">PCOMING</span> E<span className="samkaran">VENTS</span></div>
                </div>
                <div className="upcomping-event-card">
                    <div className="upcoming-event-container">
                        <div className="items">
                            <UpcomingEvent />
                            <UpcomingEvent />
                        </div>
                    </div>
                </div>
            </div>
            <PastEvent />
        </>
    )
}