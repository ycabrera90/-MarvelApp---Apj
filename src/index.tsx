import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import InfoBar from "components/InfoBar/InfoBar";
import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const messages = createPortal(<InfoBar />, document.getElementById("message")!);

root.render(
  <Provider store={store}>
    {messages}
    <App />
  </Provider>
);
