import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from "next/image";

type Props = {
  children?: ReactNode
  title?: string
}

// @ts-ignore
const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
              crossOrigin="anonymous"></link>
    </Head>
    <header>
        <div className="row bg-blue-900 h-50 ">
            <div className="col-6  ">
                <p className="h1 text-muted text-center">Find Me</p>
            </div>
            <div className="col-3 ">
                <a href="/" className="h1 text-muted text-end">Buscar</a>
            </div>
            <div className="col-3 ">
                <a href="/about" className="h1 text-muted text-end">Sobre Nosotros</a>
            </div>
        </div>
        <div>

            <img src="https://files.seniorweb.nl/uploadedimages/wwwseniorwebnl/thema/internet/google/google-maps-app-gebruiken-intro.png" width="100%"  className="img-fluid" alt="..."/>
        </div>

    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
