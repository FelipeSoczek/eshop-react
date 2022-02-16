import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Felipe',
        email: 'teste@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Joana',
        email: 'teste2@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users
