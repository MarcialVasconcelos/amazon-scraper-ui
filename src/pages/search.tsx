import Form from "../components/Form";
import Layout from "../components/Layout";

export default function Search() {

    return (
        <div className={`
        flex h-screen text-white
        `}>
            <Layout title='Busca de produtos'>
                <Form></Form>
                <div id="table" className="flex justify-center mt-10"></div>
            </Layout>
        </div>
    )
}