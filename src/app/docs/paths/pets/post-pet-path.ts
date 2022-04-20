export const postPetPath = {
  post: {
    tags: ['Pets'],
    summary: 'API to create a Pet',
    requestBody: {
      content: {
        'multipart/form-data': {
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
