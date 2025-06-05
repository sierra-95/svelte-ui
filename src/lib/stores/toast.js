import { writable } from 'svelte/store';
import { toasts } from 'svelte-toasts';

/** 
 * @typedef {Object} ToastData
 * @property {string} [title]
 * @property {string} [description]
 * @property {'info' | 'success' | 'error' | 'warning'} [type]
 * @property {number} [duration]
 */

/** @type {import('svelte/store').Writable<ToastData | null>} */
export const toastStore = writable(null);

toastStore.subscribe((toastData) => {
  if (!toastData) return;

  toasts.add({
    title: toastData.title || 'Notification',
    description: toastData.description || '',
    type: toastData.type || 'info',
    duration: toastData.duration ?? 10000,
    placement: 'top-right',
    theme: 'dark',
  });

  toastStore.set(null);
});
