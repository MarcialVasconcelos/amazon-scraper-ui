import { useState } from "react";
import { useRouter } from 'next/router'
import ReactDOM from 'react-dom/client';
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import Graph from "../components/Graph";
import Card from "../components/Card";

const initData = {
    info: {
        name: '',
        img: '',
        link: '',
        prime: false,
        reviews: 0,
        stars: 0,
    },
    list: [{
        date: "01/01/2000",
        price: 0
    },
    {
        date: "01/01/2001",
        price: 0
    }]
}

export default function Search() {

    const router = useRouter()
    const initID = router.query.productID

    const [ID, setID] = useState(initID)
    const [Data, setData] = useState(initData)

    function fetchData(ID) {
        fetch('../api/mongo-adapter', {
            method: 'post', // opcional
            body: JSON.stringify({ productID: ID })
        })
            .then(response => response.json())
            //   .then(data => console.log(data))
            .then(async data => {
                await setData(data)
                console.log("Setando Data com ", data)
                return data
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    const renderData = async e => {
        e.preventDefault()
        try {
            const response = fetchData(ID)
        } catch (error) {
            console.error(error)
        }
        // console.log("Dados obtidos:\n", Data)

        const root = ReactDOM.createRoot(document.getElementById("data") as HTMLElement);
        root.render(
            <div className="flex flex-row">
                <Card info={Data.info}></Card>
                <Graph data={Data.list}></Graph>
            </div>
        )
    }

    return (
        <div className={`h-screen w-screen text-white`}>
            <Layout title='Busca de produtos'>
                <form onSubmit={renderData}>
                    <Input
                        text="ProductID"
                        type="text"
                        name="productID"
                        value={ID}
                        placeholder='Digite o Id do produto'
                        onChange={setID}
                    ></Input>

                    <Button type="submit" color="green">Buscar Preços</Button>
                </form>
                <div id="data" className="mt-10 h-full w-full">
                    Aqui ficará as infos
                </div>
            </Layout>
        </div>
    )
}