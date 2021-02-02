import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Hello <span>World!</span> 👋
				</h1>
				<div className={styles.description}>
					<p>This is a starter Next.js template.</p>
					<a href="https://github.com/giridhar7632/next-app">
						<button className={styles.btn}>GitHub</button>
					</a>
				</div>
			</main>
		</div>
	)
}
