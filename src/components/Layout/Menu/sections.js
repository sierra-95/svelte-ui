const buttons = `/button`;

export const routes = {
    getting_started: '/',
    // Buttons
    default_button: `${buttons}/default`,
    custom_button: `${buttons}/custom`,
    //others
    progress: `/progress`,
    user: `/user`,
    modal: `/modal`,
    dispatch: `/dispatch`,
    maintenance: `/maintenance`,
    stores: `/stores`,
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
            },
        ]
    },
    {
        label: 'Alerts',
        items: [
            { 
                path: routes.dispatch, 
                label: 'Dispatch',
                icon: 'fa fa-commenting' ,
            },
            { 
                path: routes.modal, 
                label: 'Modal',
                icon: 'fa fa-exclamation-triangle' ,
            },
            { 
                path: routes.maintenance, 
                label: 'Site Under Maintenance',
                icon: 'fa fa-firefox' ,
            }
        ]
    },
    {
        label: 'Stores',
        items: [
            { 
                path: routes.stores, 
                label: 'Stores',
                icon: 'fa fa-store' ,
            },
        ]
    },
];