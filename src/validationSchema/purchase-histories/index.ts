import * as yup from 'yup';

export const purchaseHistoryValidationSchema = yup.object().shape({
  customer_id: yup.string().nullable(),
  device_id: yup.string().nullable(),
});
