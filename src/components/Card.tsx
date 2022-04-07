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
        <div className="bg-black flex flex-col justify-around w-1/4 p-5 min-w-min">

                <div className="inline-block">
                    <span className="">{props.info.prime? 
                        <img src={primeIcon} className=" h-5"></img> : false}
                    </span> 
                    <h1 className=" text-xl ">{props.info.name}</h1>
                </div>
                
                <a href={props.info.link} target="_blank" className={
                    `flex justify-center bg-white
                     h-64 w-64 mt-5
                     self-center`
                }>
                    <img src={props.info.img} className="object-contain" />
                </a>
            <div className="flex flex-col content-center">
            </div>

            <div>
                <div>
                    Reviews: {props.info.reviews}   
                </div>
                <div className="flex flex-row align-middle">
                    <span className="m-1">Avaliação: {props.info.stars} </span>
                    <Stars rate={props.info.stars}> </Stars>
                </div>
            </div>

        </div>
    )
}