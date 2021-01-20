import { NavBar } from '../components/NavBar'
import '../styles.css'

interface Props {
  Component: any;
  pageProps: any;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp( { Component, pageProps } : Props ) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>Footer</footer>
    </>
  ) 
}
