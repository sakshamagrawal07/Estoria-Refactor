import "../global.css"

interface CardProp{
    index:string,
    title:string
}

export default function Card(prop:CardProp){
    return (
        <div className="card">
            <div className="content">
                <h2>{prop.index}</h2>
                <h3>{prop.title}</h3>

            </div>
        </div>
    )
}