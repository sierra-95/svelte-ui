import { writable } from 'svelte/store';

export interface DispatchCarrier {
	status: 'success' | 'warning' | 'error';
	message: string | null;
	disableTimeout: boolean;
}

const defaultState: DispatchCarrier = {
	status: 'success',
	message: null,
	disableTimeout: false,
};

export const dispatchCarrier = writable<DispatchCarrier>({ ...defaultState });

let timeoutId: ReturnType<typeof setTimeout>;
export const setDispatchMessage = (status: DispatchCarrier['status'], message: string, duration: number = 6000, disableTimeout: boolean = false) => {
	dispatchCarrier.set({ status, message, disableTimeout });
	if (disableTimeout) return;
	if(timeoutId) clearTimeout(timeoutId);
	timeoutId = setTimeout(() => {
		clearDispatchMessage();
	}, duration);
};

export const clearDispatchMessage = () => {
	dispatchCarrier.set({ ...defaultState });
};
