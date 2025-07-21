export const routes = {
    getting_started: '/docs',
    //Components
    buttons: '/docs/components/button',
    progress: '/docs/components/progress',
    //Stores
    dispatch: '/docs/stores/dispatch',
    user: '/docs/stores/user',
    //Hooks
    WindowHistory: '/docs/hooks/windowhistory',
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
            { path: routes.buttons, label: 'Buttons', icon: 'fa fa-square' },
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