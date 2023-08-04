import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  device_name: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
