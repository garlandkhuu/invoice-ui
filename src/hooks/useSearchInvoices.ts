import { useState, useEffect } from "react";
import { Invoice } from '../types/interfaces/invoice.interfaces';

/**
 * Searches and filters invoices with a given search query
 * @param {Array<Invoice>} invoices
 * @param {string} query
 * @returns a filtered list of invoices matching query
 */
function useSearchInvoices(invoices: Array<Invoice>, query: string) {
  const [filteredInvoices, setFilteredInvoices] = useState<Array<Invoice>>(invoices);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const _query = query.toLowerCase();
    const filteredResults = invoices.filter(
      ({ invoiceNumber, status }) =>
        invoiceNumber.toLowerCase().includes(_query) || status.toLowerCase().includes(_query)
    );
    setFilteredInvoices(filteredResults);

    setLoading(false);
  }, [invoices, query]);

  return { filteredInvoices, loading }
}

export default useSearchInvoices;