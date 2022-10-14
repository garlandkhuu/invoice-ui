import formatCurrency from '../../../utils/formatCurrency';
import calculateInvoice from '../../../utils/calculateInvoice';
import { Invoice } from '../../../types/interfaces/invoice.interfaces';

interface TotalTableProps {
  invoice: Invoice
}

function TotalTable({ invoice }: TotalTableProps) {
  const { taxAmount } = invoice;

  return (
    <div className='invoice-detail-total-container'>
      <table>
        <tr>
          <td>Total (Tax Exclusive)</td>
          <td>{formatCurrency(calculateInvoice(invoice, { excludeTax: true }))}</td>
        </tr>
        <tr>
          <td>Tax Amount</td>
          <td>{formatCurrency(taxAmount)}</td>
        </tr>
        <tr>
          <td>Total (Tax Inclusive)</td>
          <td>{formatCurrency(calculateInvoice(invoice))}</td>
        </tr>
      </table>
    </div>
  );
}

export default TotalTable;
