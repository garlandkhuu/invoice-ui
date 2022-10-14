/**
 * Formats currency into USD
 * @param currency number representing a currency
 * @returns formatted currency of price in USD
 */
function formatCurrency(currency: number | undefined) {
  if (!currency) return null;
  const dollarFormat = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return dollarFormat.format(currency);
}

export default formatCurrency;
