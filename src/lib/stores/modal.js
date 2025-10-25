// src/lib/stores/modal.js
import { writable } from 'svelte/store';

/**
 * @typedef {{
 *   open: boolean,
 *   title: string,
 *   content: string,
 *   confirmText?: string,
 *   cancelText?: string,
 *   onConfirm?: (() => void) | null,
 *   onCancel?: (() => void) | null,
 *   closeOnOverlay?: boolean
 * }} ModalData
 */

/** @type {import('svelte/store').Writable<ModalData>} */
export const modalStore = writable({
  open: false,
  title: '',
  content: '',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  onConfirm: null,
  onCancel: null,
  closeOnOverlay: true,
});
