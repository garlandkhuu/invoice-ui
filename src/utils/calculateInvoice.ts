import { Invoice } from '../ts/interfaces/invoice.interfaces';

/**
 * Calculates the total of an invoice
 * @param invoice an invoice object
 * @returns the total
 */
function calculateInvoice(invoice: Invoice) {
  const { lineItems, taxAmount } = invoice;

  return lineItems.reduce((accum, lineItem) => {
    const { lineItemTotalCost } = lineItem;
    return accum + lineItemTotalCost;
  }, 0) + taxAmount;
}

export default calculateInvoice;