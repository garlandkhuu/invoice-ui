import { useLocation, useNavigate } from 'react-router-dom'
import useInvoices from "../../hooks/useInvoices";
import formatCurrency from '../../utils/formatCurrency';
import calculateInvoice from '../../utils/calculateInvoice';
import statusBadgeStyleMap from '../../constants/statusBadgeStyleMap'
import { ReactComponent as BackArrowIcon } from '../../assets/back-arrow.svg';
import './InvoiceDetails.scss';

function InvoiceDetails() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const invoiceId = params.get('id');

  // Fetch invoice object from id in the url query params
  const { getInvoiceById } = useInvoices();
  const invoice = getInvoiceById(invoiceId);
  const {
    invoiceNumber,
    status = 'UNDEFINED',
    lineItems = [],
    taxAmount
  } = invoice || {};

  const navigate = useNavigate();

  return invoice ? (
    <div className="invoice-details-wrapper">
      <div className='invoice-detail-heading-row'>
        <button className='back-button' onClick={() => navigate('/')}>
          <BackArrowIcon />
        </button>
        <div className="invoice-header">
          {invoiceNumber}
        </div>
        <div className={'invoice-status-badge ' + statusBadgeStyleMap[status]}>
          {status}
        </div>
      </div>
      <div className='invoice-details-item-table'>
        <table>
          <tr>
            <th className='item-label-name' />
            <th className='item-label-other'>Quantity</th>
            <th className='item-label-other'>Unit Cost</th>
            <th className='item-label-other'>Total Cost</th>
          </tr>
          {lineItems.map(({ description, quantity, unitCost, lineItemTotalCost }) => (
            <tr>
              <td className='item-label-name'>{description}</td>
              <td className='item-label-other'>{quantity}</td>
              <td className='item-label-other'>{formatCurrency(unitCost)}</td>
              <td className='item-label-other'>{formatCurrency(lineItemTotalCost)}</td>
            </tr>
          ))}
          <p>
          </p> 
        </table>
      </div>
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
    </div>
  ) : (
    <div className="invoice-details-wrapper">
      <div className="invoice-header">
        Invoice Not Found
      </div>
    </div>
  );
}

export default InvoiceDetails;
