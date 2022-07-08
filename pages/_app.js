import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Provider } from 'react-redux';
import Store from '../state';
function MyApp({ Component, pageProps }) {
  return <Provider store={Store}>
    <Component {...pageProps} />
  </Provider>
}
export default MyApp
