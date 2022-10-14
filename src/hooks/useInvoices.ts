import { useEffect, useState, useCallback } from "react";
import { Invoice } from "../types/interfaces/invoice.interfaces";

/**
 * Hook to fetch and return invoices
 * @returns { invoices, setInvoices, loading, getInvoiceById }
 *  invoices: array of invoice objects
 *  setInvoices: setter for array of invoice objects
 *  loading: loading status on fetching invoices
 *  getInvoiceById: a function that returns an invoice indexed by an invoice ID
 */
function useInvoices() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [invoices, setInvoices] = useState<Array<Invoice>>(
    JSON.parse(localStorage.getItem('invoices') || '[]') // Default invoices to LS and fallback on empty array
  );
  
  const getInvoiceById = useCallback(
    (invoiceId: string | null) => invoices.find(({ id }) => id === invoiceId)
  , [invoices]);

  useEffect(() => {
    setLoading(true);
    try {
      fetch("http://localhost:3004/invoices")
      .then((res) => res.json())
      .then((result) => {
        setInvoices(result);
        localStorage.setItem('invoices', JSON.stringify(result)); // Store invoices in LS for simple caching
        setLoading(false);
      });
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    }
  }, []);

  return { invoices, setInvoices, getInvoiceById, loading, error };
}

export default useInvoices;
