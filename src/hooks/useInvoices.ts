import { useEffect, useState } from "react";
import { Invoice } from "../ts/interfaces/invoice.interfaces";

function useInvoices() {
  const [invoices, setInvoices] = useState<Array<Invoice>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3004/invoices")
      .then((res) => res.json())
      .then((result) => {
        setInvoices(result);
        setLoading(false);
      });
  }, []);

  return { invoices, setInvoices, loading };
}

export default useInvoices;
