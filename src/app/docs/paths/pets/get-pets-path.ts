export const getAllPetsPath = {
  get: {
    tags: ['Pets'],
    summary: 'API to get all Pets',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/petSchema',
            },
          },
        },
      },
    },
  },
};
