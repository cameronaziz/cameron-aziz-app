import { atom } from 'jotai';

const initialState: Atoms.Blog = {
  posts: [],
};

const blog = atom(initialState);

export default blog;
