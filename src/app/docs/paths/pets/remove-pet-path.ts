export const removePetPath = {
  delete: {
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
      204: {
        description: 'Success',
      },
    },
  },
};
