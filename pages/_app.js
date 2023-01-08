import '../styles/globals.css'
import Profile from '../components/profile'

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <Profile/> */}
      <Component {...pageProps} />
    </div>
  )
}
