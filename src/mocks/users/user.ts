import { User } from "../../models/user/user.interface";

const userList: User[] = [
    {
        firstName: 'Poteii',
        lastName: 'De Aon',
        email: 'poteii.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png'
    },

    {
        firstName: 'Supreeya',
        lastName: 'Chailungka',
        email: 'supreeya.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png'
    },

    {
        firstName: 'John',
        lastName: 'Smith',
        email: 'johm.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png'
    },

    {
        firstName: 'Pat',
        lastName: 'Parker',
        email: 'pat.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png'
    }
];

export const USER_LIST = userList;