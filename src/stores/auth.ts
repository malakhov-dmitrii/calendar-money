import { writable } from 'svelte/store';

export const auth = writable({
	modal: false,
	subscriptionModal: false
});
