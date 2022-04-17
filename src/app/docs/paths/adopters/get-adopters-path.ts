export const getAllAdoptersPath = {
  get: {
    tags: ['Adopters'],
    summary: 'API to get all Adopters',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/adopterSchema',
            },
          },
        },
      },
    },
  },
};
