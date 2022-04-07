import { link } from 'fs'
import Results from './database/model/results'

async function handler(req, res) {
    if(req.method === 'POST') handlePost(req,res)
    else res.status(405).send
}

async function getResults(req) {
    const query = JSON.parse(req.body)
    console.log("Procurando por:", query)
    const docs = await Results.find(query)
    return docs
}

function Manipulator(data){
    const last = data[data.length - 1]
    let newData = {
        info: {
            name: last.name,
            img: last.image,
            link: last.link,
            prime: last.prime,
            reviews: last.reviews,
            stars: last.stars,
        },
        list: []
    }
    data.forEach(result => {
        const sameDate = newData.list.find(e => e.date === result.date) 
        
        if (sameDate) {
            if (sameDate.price > result.price){
                // newData.list.findOneAndUpdate(e => e.date === result.date, 
                //     {date:result.date, price:result.price}, 
                //     function (err, docs) {
                //         if (err) { console.log(err) }
                //         else { console.log("Updated Docs : ", docs); 
                //     }
                // })
                newData.list.push({date:result.date, price:result.price})
            }
        }
        else {
            if (result.price) newData.list.push(
                {
                    date:result.date, 
                    price:result.price,
                })
        } 
    });
    return newData
}

async function handlePost(req, res) {
    const docs = await getResults(req)
    const priceList = Manipulator(docs)
    // console.log("Req.:",req.body)
    // console.log("Res.:",docs)
    // res.status(200).json(req.body)
    res.status(200).json(priceList)
}

export default handler