const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function createAccount(data) {
  try {
    const user = await prisma.User.create({
      data: {
        id: data.id,
        password: data.password,
        email: data.email,
        name: data.name,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
async function findUserByEmail(email) {
  try {
    const user = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
async function findUserById(id) {
  try {
    const user = await prisma.User.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {}
}
async function findUserByName(name) {
  try {
    const user = await prisma.User.findUnique({
      where: {
        name: name,
      },
    });
    return user;
  } catch (error) {}
}
async function findUserByGroup(group) {
  try {
    const user = await prisma.User.findMany({
      where: {
        group: group,
      },
    });
    return user;
  } catch (error) {}
}
async function findUserByGroupAndName(group, name) {
  try {
    const user = await prisma.User.findMany({
      where: {
        group: group,
        name: name,
      },
    });
    return user;
  } catch (error) {}
}
async function updateUserAuth(data) {
  try {
    const user = await prisma.User.update({
      where: {
        id: data.id,
      },
      data: {
        password: data?.password,
        email: data?.email,
        name: data?.name,
      },
    });
    return user;
  } catch (error) {}
}
async function updateUser(data) {
  try {
    const user = await prisma.User.update({
      where: {
        id: data.id,
      },
      data: {
        password: data?.password,
        email: data?.email,
        name: data?.name,
        group: data?.group,
        role: data?.role,
        status: data?.status,
      },
    });
    return user;
  } catch (error) {
    console.log(err);
  }
}
async function deleteUser(id) {
  try {
    const user = await prisma.User.delete({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {}
}
async function deleteUserByEmail(email) {
  try {
    const user = await prisma.User.delete({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {}
}
module.exports = {
  createAccount,
  findUserByEmail,
  findUserById,
  findUserByName,
  findUserByGroup,
  findUserByGroupAndName,
  updateUser,
  updateUserAuth,
  deleteUser,
  deleteUserByEmail,
};

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
