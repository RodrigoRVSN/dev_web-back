export const postPetPath = {
  post: {
    tags: ['Pets'],
    summary: 'API to create a Pet',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/petCreateSchema',
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
              $ref: '#/schemas/petSchema',
            },
          },
        },
      },
    },
  },
};
