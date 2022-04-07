import Card from "./Card";
import Graph from "./Graph";

interface CardProps {
    Data: {
        info: {
            name: string,
            img: string,
            link: string,
            prime: Boolean,
            reviews: Number,
            stars: Number,
        },
        list: [{
        }]
    }
}

export default function History(props) {
    return (
        <div className="flex flex-row rounded-3xl overflow-hidden ">
            <Card info={props.Data.info}></Card>
            <Graph data={props.Data.list}></Graph>
        </div>
    )
}