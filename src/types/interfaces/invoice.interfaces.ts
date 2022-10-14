import { InvoiceStatus } from '../enums/status.enum';

export interface Invoice {
  taxAmount: number;
  region: string;
  id: string;
  invoiceNumber: string;
  lineItems: Array<LineItem>;
  status: InvoiceStatus;
  dueDateUtc: Date;
  createdDateUtc: Date;
  updatedDateUtc: Date;
};

export interface LineItem {
  lineItemId: string;
  description: string;
  quantity: number;
  unitCost: number;
  lineItemTotalCost: number;
}