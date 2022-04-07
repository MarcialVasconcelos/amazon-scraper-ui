import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface GraphProps {
    data: {
        date:string,
        price:number
    }[]
}

export default function Graph(props: GraphProps) {

    const labels = []
    props.data.map(iten => labels.push(iten.date))
    const prices = []
    props.data.map(iten => prices.push(iten.price))

    const data = {
        labels: labels,
        datasets: [{
            label: `Preço do produto`,
            data: prices,
            fill: false,
            borderColor: '#f00',
            hoverBackgroundColor: '#555',
            backgroundColor: '#f00',
            tension: 0.1
        }]
    };
    return (
        <div className="bg-white text-black w-3/4 p-5 min-w-min">
            <h2 className='text-3xl text-center'>Histórico de preços</h2>
            <div className='m-10'>
                <Line data={data} />
            </div>
        </div>
    )
}