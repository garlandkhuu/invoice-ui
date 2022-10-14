import { Invoice } from '../types/interfaces/invoice.interfaces';

interface Options {
  excludeTax: boolean;
}

/**
 * Calculates the total of an invoice
 * @param invoice an invoice object
 * @returns the total
 */
function calculateInvoice(invoice: Invoice, { excludeTax }: Options = { excludeTax: false }) {
  const { lineItems, taxAmount } = invoice;

  return lineItems.reduce((accum, lineItem) => {
    const { lineItemTotalCost } = lineItem;
    return accum + lineItemTotalCost;
  }, 0) + (excludeTax ? 0 : taxAmount);
}

export default calculateInvoice;