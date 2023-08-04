const mapping: Record<string, string> = {
  billings: 'billing',
  inventories: 'inventory',
  organizations: 'organization',
  'purchase-histories': 'purchase_history',
  sales: 'sale',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
