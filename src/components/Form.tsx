import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Button from "./Button";
import Input from "./Input";
import api from '../pages/api/adapter';
import Table from "../components/Table";

export default function Form(){
    const [product,  setProduct]  = useState('')
    const [quantity, setQuantity] = useState(100)

    const [data, setData] = useState(null)

    const fetchData = async e => {
        e.preventDefault()
        try {
            console.log(e.target.product)
            const dataResponse = await api.post('/', 
                {
                    product: e.target.product.value,
                    quantity: e.target.quantity.value,
                }, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
                        'Access-Control-Allow-Credentials': true,
                }
            })
            setData(dataResponse.data)
            renderResults(dataResponse.data)
            console.log("fetchData (final)", data)
        } catch (error) {
            console.error("FALHA NA REQUISIÇÃO", error)
        }
    }

    function renderResults(data){
        console.log("renderResults", data)
        const root = ReactDOM.createRoot(document.getElementById("table") as HTMLElement);
        
        root.render(
            <Table data={data}>Tabela</Table>
        )
    }
    
    return (
        <form onSubmit={fetchData}>
            <Input 
                name="product"
                text='Produto: '
                type="text"
                value={product}
                placeholder='Digite o nome do produto desejado...'
                onChange={setProduct}
            />

            <Input 
                name="quantity"
                text='Quantidade: '
                type="number"
                value={quantity}
                onChange={setQuantity}
            />

            <Button type="submit" color="green">Pesquisar</Button>

        </form>
    )
}