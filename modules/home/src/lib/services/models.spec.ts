import { isCustomerData } from './models';

describe('isCustomerData', () => {
  test.each([
    {
      value: {
        firstName: 'John',
        lastName: 'Cena',
        email: 'john@example.com',
      },
      result: true,
    },
    {
      value: {
        lastName: 'Cena',
        email: 'john@example.com',
      },
      result: false,
    },
    {
      value: {
        firstName: 'John',
        email: 'john@example.com',
      },
      result: false,
    },
    {
      value: {
        firstName: 'John',
        lastName: 'Cena',
      },
      result: false,
    },
    {
      value: {
        firstName: 'Jonny',
        lastName: 'Ceninha',
        email: 'jonny@example.com',
      },
      result: true,
    },
    {
      value: {
        firstName: 1,
        lastName: 'Cena',
        email: 'john@example.com',
      },
      result: false,
    },
    {
      value: {
        firstName: 'John',
        lastName: true,
        email: 'john@example.com',
      },
      result: false,
    },
    {
      value: {
        firstName: 'John',
        lastName: 'Cena',
        email: [],
      },
      result: false,
    },
    {
      value: null,
      result: false,
    },
    {
      value: undefined,
      result: false,
    },
    {
      value: {},
      result: false,
    },
    {
      value: 1,
      result: false,
    },
    {
      value: 'a',
      result: false,
    },
    {
      value: true,
      result: false,
    },
    {
      value: [],
      result: false,
    },
    {
      value: jest.fn(),
      result: false,
    },
  ])(
    'should return true for values that comply with the CustomerData interface, false otherwise. Input: $value',
    ({ value, result }) => {
      expect(isCustomerData(value)).toBe(result);
    }
  );
});
