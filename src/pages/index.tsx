import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon Web-scraper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao web-scraper da <a href="https://www.amazon.com.br/">Amazon.br!</a>
        </h1>

        <p className={styles.description}>
          Selecione abaixo o método que deseja utilizar:
        </p>

        <div className={styles.grid}>
          <a href="/search" className={styles.card}>
            <h2>Busca &rarr;</h2>
            <p>Realiza uma pesquisa por algum produto e armazena os resultados em um banco de dados </p>
          </a>

          <a href="/comparator" className={styles.card}>
            <h2>Comparador &rarr;</h2>
            <p>Utilizando um Id de produto exibe o histórico de preços armazenados no banco de dados</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
