import { LineItem } from '../../../types/interfaces/invoice.interfaces';
import formatCurrency from '../../../utils/formatCurrency';

interface ItemTableProps {
  lineItems: Array<LineItem>;
}

function ItemTable({ lineItems }: ItemTableProps) {
  return (
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
  );
}

export default ItemTable;