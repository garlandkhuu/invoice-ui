import React, { useState } from 'react'
import useInvoices from '../../hooks/useInvoices';
import useSearchInvoices from '../../hooks/useSearchInvoices';
import InvoiceListItem from './components/InvoiceListItem';
import debounce from '../../utils/debounce';
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import './InvoiceList.scss'

function InvoiceList() {
  const [query, setQuery] = useState<string>('');
  const [searchFocused, setSerachFocused] = useState<boolean>(false);
  const { invoices } = useInvoices();
  const { filteredInvoices } = useSearchInvoices(invoices, query);

  //Debounce the event handler to not fire for every single key stroke
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => debounce(() => {
    setQuery(e.target.value);
  }, 250);

  const onSearchFocus = (e: React.FocusEvent<HTMLInputElement>) => setSerachFocused(true);
  const onSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => setSerachFocused(false);

  return (
    <div className="invoice-list">
      <div className='invoice-list-header-row'>
        <div className="invoice-header">Invoices</div>
        <div className='search-bar-wrapper'>
          <input
            className='search-input'
            onChange={onSearchChange}
            onFocus={onSearchFocus}
            onBlur={onSearchBlur}
            placeholder="Start typing to search..."  
          />
          <SearchIcon {...(searchFocused && { className: 'focused' })} />
        </div>
      </div>
      {filteredInvoices.length > 0
        ? (
          <ul className="invoice-list-items">
            {filteredInvoices.map((invoice: any) => (
              <InvoiceListItem invoice={invoice} />
            ))}
          </ul>
        ) : (
          <div className='no-results'>No Results.</div>
        )
      }
    </div>
  );
}

export default InvoiceList;
