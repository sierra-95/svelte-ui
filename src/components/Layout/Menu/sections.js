const components = `/components`;
const stores = `/stores`;
const hooks = `/hooks`;

export const routes = {
  getting_started: '/',
  // Components
  buttons: `${components}/button`,
  progress: `${components}/progress`,
  user: `${components}/user`,
  // Stores
  dispatch: `${stores}/dispatch`,
  // Hooks
  WindowHistory: `${hooks}/windowhistory`,
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
                    { path: `${routes.buttons}/default`, label: 'Default buttons' },
                    { path: `${routes.buttons}/custom`, label: 'Custom buttons' }
                ] 
            },
            { 
                path: routes.progress,
                label: 'Progress', 
                icon: 'fa fa-spinner',
                subitems: [
                    { path: `${routes.progress}/circular`, label: 'Circular progress' },
                    { path: `${routes.progress}/linear`, label: 'Linear progress' }
                ]
            },
            { path: routes.user, label: 'User', icon: 'fa fa-user' }
        ]
    },
    {
        label: 'Stores',
        items: [
            { path: routes.dispatch, label: 'Dispatch', icon: 'fa fa-bell' },
        ]
    },
    {
        label: 'Hooks',
        items: [
            { path: routes.WindowHistory, label: 'Browser History', icon: 'fa fa-chrome' }
        ]
    }
];