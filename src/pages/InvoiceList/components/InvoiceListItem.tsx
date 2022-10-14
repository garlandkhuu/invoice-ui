import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'
import { Invoice } from '../../../types/interfaces/invoice.interfaces';
import calculateInvoice from '../../../utils/calculateInvoice';
import formatCurrency from '../../../utils/formatCurrency';
import statusBadgeStyleMap from '../../../constants/statusBadgeStyleMap'

interface InvoiceListItemProps {
  invoice: Invoice;
}

function InvoiceListItem({ invoice }: InvoiceListItemProps) {
  const {
    id,
    invoiceNumber,
    status,
  } = invoice;
  const total = useMemo(() => formatCurrency(calculateInvoice(invoice)), [invoice]);

  const navigate = useNavigate();

  return (
    <li className="invoice-list-item" key={id} onClick={() => navigate(`/invoice?id=${id}`) }>
      <div className='invoice-list-item-section'>
        <div>{invoiceNumber}</div>
        <div className={'invoice-status-badge ' + statusBadgeStyleMap[status]}>{status}</div>
      </div>
      <div className='invoice-list-item-section'>
        <div>{total}</div>
      </div>
    </li>
  );
}

export default InvoiceListItem;
