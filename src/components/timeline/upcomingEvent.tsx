import "./global.css"

export default function UpcomingEvent() {
    return (
        <div className="card" >
            <h2 className="event">Event_Name</h2>
            <p className="date">DATE | 21/10/2022</p>
            <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati deleniti cupiditate officia sint ipsa similique
            </p>
            <button className="register-button-pushable" role="button">
                <span className="register-button-shadow"></span>
                <span className="register-button-edge"></span>
                <span className="register-button-front text">
                    Register
                </span>
            </button>

        </div >
    )
}