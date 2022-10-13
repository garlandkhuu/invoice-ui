import useInvoices from '../../hooks/useInvoices';
import './InvoiceList.css'

function InvoiceList() {
  const { invoices } = useInvoices();

  return (
    <div className="invoice-list" style={{ margin: "auto" }}>
      <div className="invoice-heading-1">Invoices</div>
      <ul className="invoice-list-item">
        {invoices.map((invoice: any) => (
          <li key={invoice.id}>
            <div>{invoice.invoiceNumber}</div> <div>{invoice.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
