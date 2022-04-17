import {
  getAllPetsPath, getPetPath, postPetPath, removePetPath,
  getAdopterPath, getAllAdoptersPath, postAdopterPath, removeAdopterPath,
} from './paths/';

export default {
  '/pets/create': postPetPath,
  '/pets/': getAllPetsPath,
  '/pets/{id}': getPetPath,
  '/pets/remove/{id}': removePetPath,

  '/adopters/create': postAdopterPath,
  '/adopters/': getAllAdoptersPath,
  '/adopters/{id}': getAdopterPath,
  '/adopters/remove/{id}': removeAdopterPath,
};
