import { Client, Databases } from 'appwrite';

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67e8591d001417542836');

export const databases = new Databases(client);

