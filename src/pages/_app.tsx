import '../styles/globals.css'
import 'antd/dist/antd.css';
import { AuthProvider } from '../core/context/AuthContext'
import '../translate/i18n';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
