import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Examen' }: Props) => (
    <div id="container">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className={styles.header}>
            <Link href="/" className={styles.elementos}>Inicio</Link>
            <Link href="/marca" className={styles.elementos}>Marca</Link>
            <Link href="/celular" className={styles.elementos}>Celular</Link>
        </header>
        <div id="content">{children}</div>

    </div>
)

export default Layout
