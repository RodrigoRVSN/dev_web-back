export const getAdopterPath = {
  get: {
    tags: ['Adopters'],
    summary: 'API to get one adopter',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
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
