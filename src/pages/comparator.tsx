import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import ReactDOM from 'react-dom/client';
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import History from "../components/History";

const initData = {
    info: {
        name: 'Informe um ID para visualizar o histórico',
        img: '',
        link: '',
        prime: false,
        reviews: 0,
        stars: 0,
    },
    list: [{
        date: "",
        price: 0
    },]
}
let firstRender = false

export default function Search() {
    
    console.log("Iniciou", firstRender)
    const router = useRouter();

    const [ID, setID] = useState("")
    const [Data, setData] = useState(initData)


    useEffect(() => {
        if (ID!="" && router.isReady && router.query.productID){
            if (!firstRender) {fetchData(ID)
            firstRender = true
            console.log("Realizando a busca do estado inicial", ID)
            renderData()}
        }
    }, [ID])
    
    useEffect(() => {
        if (router.isReady && router.query.productID){
            setID(`${router.query.productID}`)
            firstRender = true   
        }
    },[router.isReady])

    useEffect(() => {
        renderData()
    }, [Data])


    function fetchData(ID) {
        if (ID == "") return
        fetch('../api/mongo-adapter', {
            method: 'post', // opcional
            body: JSON.stringify({ productID: ID })
        })
            .then(response => response.json())
            //   .then(data => console.log(data))
            .then(async data => {
                setData(data)
                console.log("Setando Data com ", data)
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    const renderData = () => {
        const root = ReactDOM.createRoot(document.getElementById("data") as HTMLElement);
        root.render(
            <History Data={Data}></History>
        )
    }

    const handleClick = e => {
        e.preventDefault()
        try {
            fetchData(ID)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={`h-screen w-screen text-white`}>
            <Layout title='Busca de produtos'>
                <form onSubmit={handleClick} className="flex flex-row">
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
                    Informe um ID para visualizar o histórico
                </div>
            </Layout>
        </div>
    )
}