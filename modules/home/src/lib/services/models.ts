export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
}

export function isCustomerData(data: any): data is CustomerData {
  return (
    typeof data?.firstName === 'string' &&
    typeof data?.lastName === 'string' &&
    typeof data?.email === 'string'
  );
}
