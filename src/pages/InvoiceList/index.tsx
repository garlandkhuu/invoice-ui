import useInvoices from '../../hooks/useInvoices';
import InvoiceListItem from './components/InvoiceListItem';
import './InvoiceList.scss'

function InvoiceList() {
  const { invoices } = useInvoices();

  return (
    <div className="invoice-list">
      <div className="invoice-header">Invoices</div>
      <ul className="invoice-list-items">
        {invoices.map((invoice: any) => (
          <InvoiceListItem invoice={invoice} />
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
