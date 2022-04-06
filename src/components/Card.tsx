import Stars from "./Stars";

interface CardProps {
    info: {
        name: string,
        img: string,
        link: string,
        prime: Boolean,
        reviews: number,
        stars: number,
    }
}

const primeIcon = "https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png"

export default function Card(props: CardProps) {
    return (
        <div className="bg-black  w-1/3 p-5">
            <div className="m-10">
                <img src={props.info.img} />
            </div>

            <div>
                <p className="h-1 inline-block">
                    <span>{props.info.prime? 
                        <img src={primeIcon} className=" h-5"></img> : false}
                    </span> 
                    <h1 className="">{props.info.name}</h1>
                </p>
                <p>
                    Reviews: {props.info.reviews}   
                </p>
                <p>
                    Avaliação: {props.info.stars} </p>
                    <Stars rate={props.info.stars}> </Stars>
            </div>
            
        </div>
    )
}