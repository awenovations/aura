import { v4 as uuidv4 } from 'uuid';
import { get, writable } from 'svelte/store';
import type { AlertSeverity } from '$lib/alert/props';

export interface ToastMessage {
	id?: string;
	severity: AlertSeverity;
	message: string;
	duration?: number;
}

export const toastStore: Writable<Array<ToastMessage>> = writable([]);

export const showToast = (toastMessage: ToastMessage) => {
	const id = toastMessage.id ?? uuidv4();
	const duration = toastMessage.duration ?? 2000;

  const toast = get(toastStore);

	toastStore.update((toastList) => {
		return [...toastList, { ...toastMessage, duration, id }];
	});

	setTimeout(() => {
    const toast = get(toastStore);

    toast.shift();

    if(toast.length === 0) {
      toastStore.set([])
    }
	}, duration);
};
