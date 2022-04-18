/* eslint import/no-unresolved: */
import {
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  arrayUnion,
  arrayRemove,
} from './firebase-import.js';

import { auth } from './firebase.js';

// Iniciar Firestore
const db = getFirestore();

export const savePost = (rating, review, user, date) => addDoc(collection(db, 'posts'), {
  rating,
  review,
  user,
  date,
  likes: [],
});

export async function getPost(id) {
  return getDoc(doc(db, 'posts', id));
}

export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

export const updatePost = (id, updatedPost) => updateDoc(doc(db, 'posts', id), updatedPost);

export const likePost = (postId) => {
  const email = auth.currentUser.email;
  const post = doc(db, 'posts', postId);
  return updateDoc(post, { likes: arrayUnion(email) });
};
export const unLikePost = (postId) => {
  const email = auth.currentUser.email;
  const post = doc(db, 'posts', postId);
  return updateDoc(post, { likes: arrayRemove(email) });
};
