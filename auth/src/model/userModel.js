const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createAccount(data) {
    const user = await prisma.User.create({
        data: {
            id: data.id,
            password: data.password,
            email: data.email,
            name: data.name,
        },
    })
    return user;
}
async function findUserByEmail(email) {
    const user = await prisma.User.findUnique({
        where: {
            email: email,
        },
    })
    return user;
}
async function findUserById(id) {
    const user = await prisma.User.findUnique({
        where: {
            id: id,
        },
    })
    return user;
}
async function findUserByName(name) {
    const user = await prisma.User.findUnique({
        where: {
            name: name,
        },
    })
    return user;
}
async function findUserByGroup(group) {
    const user = await prisma.User.findMany({
        where: {
            group: group,
        },
    })
    return user;
}
async function findUserByGroupAndName(group, name) {
    const user = await prisma.User.findMany({
        where: {
            group: group,
            name: name,
        },
    })
    return user;
}
async function updateUser(data) {
    const user = await prisma.User.update({
        where: {
            id: data.id,
        },
        data: {
            password: data.password,
            email: data.email,
            name: data.name,
        },
    })
    return user;
}
async function deleteUser(id) {
    const user = await prisma.User.delete({
        where: {
            id: id,
        },
    })
    return user;
}

module.exports = {
    createAccount,
    findUserByEmail,
    findUserById,
    findUserByName,
    findUserByGroup,
    findUserByGroupAndName,
    updateUser,
    deleteUser,
}

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
