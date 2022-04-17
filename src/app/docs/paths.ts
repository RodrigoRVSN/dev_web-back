import {
  getAllPetsPath, getPetPath, postPetPath, removePetPath,
} from './paths/pets';

export default {
  '/pets/create': postPetPath,
  '/pets/': getAllPetsPath,
  '/pets/{id}': getPetPath,
  '/pets/remove/{id}': removePetPath,
};
