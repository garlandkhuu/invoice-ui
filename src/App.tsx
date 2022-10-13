import { Routes, Route } from "react-router-dom";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetails from "./pages/InvoiceDetails";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="invoice/:invoiceId" element={<InvoiceDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
