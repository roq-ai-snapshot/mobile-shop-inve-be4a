import * as yup from 'yup';

export const saleValidationSchema = yup.object().shape({
  device_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
  sales_associate_id: yup.string().nullable(),
});
