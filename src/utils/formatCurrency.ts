function formatCurrency(currency: number) {
  const dollarFormat = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return dollarFormat.format(currency);
}

export default formatCurrency;
