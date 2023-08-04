import { UserInterface } from 'interfaces/user';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseHistoryInterface {
  id?: string;
  customer_id?: string;
  device_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface PurchaseHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  device_id?: string;
}
