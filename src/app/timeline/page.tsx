import PastEvent from "./components/pastEvent";
import UpcomingEvent from "./components/upcomingEvent";

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
            <div className="past-event-box">
                <section className="timeline">
                    <section className="modal hidden scroll-y scroll-x">
                        <div className="flex-2">
                            <button className="btn-close">⨉</button>
                        </div>
                        <div >
                            <h1 className="text-center samkaran">heading</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error rem, atque quisquam excepturi neque eos corrupti porro libero perspiciatis iure! Pariatur accusamus ex porro reiciendis eos assumenda odit ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident doloremque nam beatae labore a tenetur, assumenda facere molestiae iusto voluptatum dolorem laudantium laboriosam earum nemo reprehenderit rem omnis aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit nobis doloremque, eveniet placeat mollitia sapiente nulla error illum sunt ducimus cum omnis provident fugit, beatae id molestias, atque sed! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore maiores, cupiditate fuga consectetur quae harum animi. Dolores odio tempora, eos, exercitationem quasi rem illo aliquid architecto nam neque quisquam provident suscipit voluptas. Quod veniam voluptate eaque sed quisquam sapiente.
                            </p>
                        </div>
                    </section>

                    <h1 className="heading-sec">
                        <span className="font-style">P</span>AST
                        <span className="font-style">E</span>VENTS
                    </h1>
                    <ul>
                        <PastEvent />
                        <PastEvent />
                        <PastEvent />
                    </ul>
                </section>
            </div >
        </>
    )
}