import { InventoryInterface } from 'interfaces/inventory';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SaleInterface {
  id?: string;
  device_id?: string;
  customer_id?: string;
  sales_associate_id?: string;
  created_at?: any;
  updated_at?: any;

  inventory?: InventoryInterface;
  user_sale_customer_idTouser?: UserInterface;
  user_sale_sales_associate_idTouser?: UserInterface;
  _count?: {};
}

export interface SaleGetQueryInterface extends GetQueryInterface {
  id?: string;
  device_id?: string;
  customer_id?: string;
  sales_associate_id?: string;
}
