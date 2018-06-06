import { Profile } from "../../models/profile/profile.interface";


const userList: Profile[] = [
    {
        firstName: 'Poteii',
        lastName: 'De Aon',
        email: 'poteii.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    },

    {
        firstName: 'Supreeya',
        lastName: 'Chailungka',
        email: 'supreeya.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    },

    {
        firstName: 'John',
        lastName: 'Smith',
        email: 'johm.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    },

    {
        firstName: 'Pat',
        lastName: 'Parker',
        email: 'pat.pase@gmail.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    }
];

export const USER_LIST = userList;