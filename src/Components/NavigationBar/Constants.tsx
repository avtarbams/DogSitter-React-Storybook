export enum NAVTYPES {
    About = 1,
    Services = 2,
    News = 3,
    Contact = 4,
    Login = 8,
    SignUp = 9
}

export enum VIEWTYPES {
    MAIN = 0,
    GUEST = 1,
    USER_OPTIONS = 2,
    USER_NOTIFICATION = 3,
    MAIN_SUBHEADER = 4
}


export const NAVBARDATA = [
    {
        "title": "About Us",
        "uri": "/About",
        "navId": NAVTYPES.About
    },
    {
        "title": "Services",
        "uri": "/Services",
        "navId": NAVTYPES.Services
    },
    {
        "title": "News",
        "uri": "/News",
        "navId": NAVTYPES.News
    }

];




export const USEROPTIONS = [
    {
        "title": "Login",
        "uri": "/Login",
        "navId": NAVTYPES.Login
    },
    {
        "title": "Sign Up",
        "uri": "/signup",
        "navId": NAVTYPES.SignUp
    }
];
