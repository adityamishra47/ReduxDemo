import { Provider } from "react-redux"
import HomePage from './src/HomePage';

import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
