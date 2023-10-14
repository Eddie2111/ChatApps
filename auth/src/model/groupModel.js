const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function createGroup(data) {
  const group = await prisma.Group.create({
    data: {
      id: data.id,
      name: data.name,
      description: data.description,
    },
  });
  return group;
}
async function findGroupById(id) {
  const group = await prisma.Group.findUnique({
    where: {
      id: id,
    },
  });
  return group;
}
async function findGroupByName(name) {
  const group = await prisma.Group.findUnique({
    where: {
      name: name,
    },
  });
  return group;
}
async function findGroupByUser(user) {
  const group = await prisma.Group.findMany({
    where: {
      user: user,
    },
  });
  return group;
}
async function findGroupByUserAndName(user, name) {
  const group = await prisma.Group.findMany({
    where: {
      user: user,
      name: name,
    },
  });
  return group;
}
async function updateGroup(data) {
  const group = await prisma.Group.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      description: data.description,
    },
  });
  return group;
}
async function deleteGroup(id) {
  const group = await prisma.Group.delete({
    where: {
      id: id,
    },
  });
  return group;
}

module.exports = {
  createGroup,
  findGroupById,
  findGroupByName,
  findGroupByUser,
  findGroupByUserAndName,
  updateGroup,
  deleteGroup,
};
