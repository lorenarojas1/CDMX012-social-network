/* eslint-disable import/no-cycle */
/* eslint import/no-unresolved: */
import {
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  // query,
  // where,
} from './firebase-import.js';

import initApp from './initApp.js';

import { auth } from './firebase.js';

initApp();

// Iniciar Firestore
const db = getFirestore();

export const savePost = (rating, review, user, date) => addDoc(collection(db, 'posts'), {
  rating,
  review,
  user,
  date,
  likes: [],
});

export const getPosts = () => getDocs(collection(db, 'posts'));

export async function getPost(id) {
  return getDoc(doc(db, 'posts', id));
}

export const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePosts = (id) => deleteDoc(doc(db, 'posts', id));

export const updatePost = (id, updatedPost) => updateDoc(doc(db, 'posts', id), updatedPost);

export const likePost = (postId) => {
  const email = auth.currentUser.email;
  return firebase.firestore().collection('posts').doc(postId).update({
    likes: firebase.firestore.FieldValue.arrayUnion(email),
  });
};
export const unLikePost = (postId) => {
  const email = auth.currentUser.email;
  return firebase.firestore().collection('posts').doc(postId).update({
    likes: firebase.firestore.FieldValue.arrayRemove(email),
  });
};
