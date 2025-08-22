const base = '/svelte';
const componentsBase = `${base}/components`;
const storesBase = `${base}/stores`;
const hooksBase = `${base}/hooks`;

export const routes = {
  getting_started: `${base}`,
  // Components
  buttons: `${componentsBase}/button`,
  progress: `${componentsBase}/progress`,
  // Stores
  dispatch: `${storesBase}/dispatch`,
  user: `${storesBase}/user`,
  // Hooks
  WindowHistory: `${hooksBase}/windowhistory`,
};

export const sections = [
    {
        label: '',
        items: [
            { path: routes.getting_started, label: 'Getting Started',  icon: 'fa-solid fa-compass' }
        ]
    },
    {
        label: 'Components',
        items: [
            { 
                path: routes.buttons, 
                label: 'Buttons', 
                icon: 'fa fa-square',
                subitems: [
                    { path: `${routes.buttons}/default`, label: 'Default Buttons' },
                    { path: `${routes.buttons}/custom`, label: 'Custom Buttons' }
                ] 
            },
            { path: routes.progress, label: 'Progress', icon: 'fa fa-spinner' }
        ]
    },
    {
        label: 'Stores',
        items: [
            { path: routes.dispatch, label: 'Dispatch', icon: 'fa fa-bell' },
            { path: routes.user, label: 'User', icon: 'fa fa-user' }
        ]
    },
    {
        label: 'Hooks',
        items: [
            { path: routes.WindowHistory, label: 'Browser History', icon: 'fa fa-chrome' }
        ]
    }
];