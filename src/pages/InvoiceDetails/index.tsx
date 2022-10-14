import { useLocation, useNavigate } from 'react-router-dom'
import ItemTable from './components/ItemTable';
import TotalTable from './components/TotalTable';
import useInvoices from "../../hooks/useInvoices";
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
    lineItems = []
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
      <ItemTable lineItems={lineItems} />
      <TotalTable invoice={invoice} />
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
