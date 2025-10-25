import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isMobile = writable(false);

if (browser) {
    const updateIsMobile = () => {
        isMobile.set(window.innerWidth < 768);
    };
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    // return () => window.removeEventListener('resize', updateIsMobile);
}
