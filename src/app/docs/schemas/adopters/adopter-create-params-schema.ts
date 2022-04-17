export const adopterCreateParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    cpf: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    pet_id: {
      type: 'string',
    },
  },
  required: ['name', 'phone', 'cpf', 'address', 'pet_id'],
};
