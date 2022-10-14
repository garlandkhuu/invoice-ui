import { Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetails from "./pages/InvoiceDetails";
import { ReactComponent as Logo } from './assets/logo.svg';
import "./App.scss";

function App() {
  return (
    <div>
      <div className="app-header">
        <Logo />
      </div>
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="invoice" element={<InvoiceDetails />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
