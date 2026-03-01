import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
