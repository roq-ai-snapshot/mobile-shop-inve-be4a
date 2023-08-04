interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Inventory Manager', 'Sales Associate', 'Accountant'],
  tenantName: 'Organization',
  applicationName: 'Mobile Shop inventory management  v6',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
