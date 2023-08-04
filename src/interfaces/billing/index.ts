import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BillingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  invoice_amount?: number;
  sales_summary?: string;
  notes?: string;
  user_id?: string;

  user?: UserInterface;
  _count?: {};
}

export interface BillingGetQueryInterface extends GetQueryInterface {
  id?: string;
  sales_summary?: string;
  notes?: string;
  user_id?: string;
}
