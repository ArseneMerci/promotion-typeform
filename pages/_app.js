import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import '../styles/globals.css'
import { Provider } from 'react-redux';
import Store from '../state';
function MyApp({ Component, pageProps }) {
  return <Provider store={Store}>
    <Component {...pageProps} />
  </Provider>
}
export default MyApp
