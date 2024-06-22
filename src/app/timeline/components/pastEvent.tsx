import "../global.css"

export default function PastEvent(){
    return (
        <li>
            <div>
                <time>1687</time>
                <div className="content">
                    <h1>content</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Reiciendis iusto quae beatae nulla, ipsum, quas officiis,
                        reprehenderit enim eos similie? <a className="btn btn-open"> See more</a>
                    </p>
                </div>
                <div className="photo"></div>
            </div>
        </li>
    )
}