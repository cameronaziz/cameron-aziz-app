import { ListSchemaConfig } from '@keystone-6/core';
import Image from './Image';
import Person from './Person';
import Post from './Post';

export const lists: ListSchemaConfig = {
  Post,
  Image,
  Person,
};
