import paths from './paths';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Mia Khats API',
    description:
      'API of Miakhats to adopt pets',
    version: '1.0.0',
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
  },
  tags: [
    {
      name: 'Pets',
    },
    {
      name: 'Adopters',
    },
  ],
  paths,
  schemas,
};
