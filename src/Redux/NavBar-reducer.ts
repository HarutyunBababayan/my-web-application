type NavBarNameType = {
    id: number
    navName: string
    href: string | any
}

let initialState = {
    navBarName: [
        {id: 0, navName: "Profile", href: 'profile/:id'},
        {id: 1, navName: "Users", href: 'users'},
        {id: 2, navName: "Messages", href: 'dialogs'},
        {id: 3, navName: "News", href: 'news'},
        {id: 4, navName: "Musics", href: 'musics'},
        {id: 5, navName: "Settings", href: 'settings'},
    ] as Array<NavBarNameType>,
}

const NavBarReducer = (state = initialState) => {
    return state;
};

export default NavBarReducer;