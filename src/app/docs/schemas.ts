import {
  petCreateParamsSchema, adopterCreateParamsSchema, adopterSchema, petSchema,
} from './schemas/';

export default {
  petCreateSchema: petCreateParamsSchema,
  petSchema,
  adopterCreateSchema: adopterCreateParamsSchema,
  adopterSchema,
};
