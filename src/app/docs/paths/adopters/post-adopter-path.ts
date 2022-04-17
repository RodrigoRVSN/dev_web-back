export const postAdopterPath = {
  post: {
    tags: ['Adopters'],
    summary: 'API to create a Adopter',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/adopterCreateSchema',
          },
        },
      },
    },
    responses: {
      201: {
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
