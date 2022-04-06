import Header from "./Header"
import styles from '../styles/Layout.module.css'

interface LayoutProps {
    title: string
    children: any
}

export default function Layout(props: LayoutProps){
    return (
        <div className={styles.layout}>
            <Header title = {props.title}></Header>
            <div className={styles.content}>
                {props.children}
            </div>
            {/* <footer>Test</footer> */}
        </div>
    )
}