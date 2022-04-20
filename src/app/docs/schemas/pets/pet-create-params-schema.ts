export const petCreateParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    breed: {
      type: 'string',
    },
    gender: {
      type: 'string',
    },
    birth_date: {
      type: 'string',
    },
    age_group: {
      type: 'string',
    },
    image: {
      type: 'string',
      format: 'binary',
    },
  },
  required: ['name', 'breed', 'gender', 'age_group'],
};
