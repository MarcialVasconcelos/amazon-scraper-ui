import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Header (props){
    return (
        <header className={styles.header}>
            <h1>{props.title ?? 'Título'}</h1>            
            <Link href='/'>Pág. Inicial</Link> 
        </header>
    )
}