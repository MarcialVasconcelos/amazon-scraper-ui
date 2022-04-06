import styles from '../styles/Table.module.css';
import Stars from './Stars';

export default function Table(props) {
    function renderHeader() {
        return (
            <tr>
                <th className={styles.imgCol}>   Imagem</th>
                <th className={styles.nameCol}>  Produto</th>
                <th className={styles.priceCol}> Preço</th>
                <th className={styles.starsCol}> Classificação</th>
                <th className={styles.column}>   ProductID</th>
                <th className={styles.linkCol}>  Link</th>
            </tr>
        )
    }

    function renderRow(props) {
        return props.data && props.data.data && props.data.data.map((item, index) => {
            return (
                <tr key={index}
                className={`${(index % 2 === 0) ? styles.odd : styles.even} ${styles.row}`}>
                    <td>
                        <div className={styles.imgHolder}><img src={item.image} /></div>
                    </td>
                    <td className={styles.nameCol}>
                        <h1>{item.name}</h1>
                    </td>
                    <td>
                        <h2>{(item.price ? `R$ ${item.price.toFixed(2).replace('.',',')}` : "Ausente")}</h2>
                    </td>
                    <td>
                        <h2>{item.stars} <Stars rate={item.stars}></Stars> </h2>
                    </td>
                    <td>
                        {item.productID}
                    </td>
                    <td className={styles.link}>
                        <a href={item.link} target="_blank">Pág. da loja</a>
                        <a href={`http://localhost:3000/comparator?productID=${item.productID}`} target="_blank">Histórico</a>
                    </td>
                </tr>
            )}
        )
        
    }

    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                {renderHeader()}
            </thead>
            <tbody className={styles.body}>
                {renderRow(props)}
            </tbody>
        </table>
    )
}