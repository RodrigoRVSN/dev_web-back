export const getPetPath = {
  get: {
    tags: ['Pets'],
    summary: 'API to get one Pet',
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
              $ref: '#/schemas/petSchema',
            },
          },
        },
      },
    },
  },
};
