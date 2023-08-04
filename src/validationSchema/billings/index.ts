import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  invoice_amount: yup.number().integer().nullable(),
  sales_summary: yup.string().nullable(),
  notes: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
