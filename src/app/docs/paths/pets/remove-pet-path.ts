export const removePetPath = {
  delete: {
    tags: ['Pets'],
    summary: 'API to delete one Adopter',
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
