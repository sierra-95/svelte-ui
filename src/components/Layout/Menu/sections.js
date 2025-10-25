const buttons = `/button`;

export const routes = {
    getting_started: '/',
    // Buttons
    default_button: `${buttons}/default`,
    custom_button: `${buttons}/custom`,
    //others
    progress: `/progress`,
    user: `/user`,
};

export const sections = [
    {
        label: '',
        items: [
            { path: routes.getting_started, label: 'Getting Started',  icon: 'fa-solid fa-compass' }
        ]
    },
    {
        label: 'Buttons',
        items: [
            { 
                path: routes.default_button, 
                label: 'Default', 
                icon: 'fa fa-square',
            },
            { 
                path: routes.custom_button,
                label: 'Custom', 
                icon: 'fa fa-adjust',
            }
        ]
    },
    {
        label: 'Progress',
        items: [
            { 
                path: routes.progress,
                label: 'Progress', 
                icon: 'fa fa-spinner',
            },
        ]
    },
    {
        label: 'Menus',
        items: [
            { 
                path: routes.user, 
                label: 'User',
                icon: 'fa fa-user' ,
            }
        ]
    },
];