const prisma = require('../lib/prisma')

async function createGroup (data) {
  const group = await prisma.Group.create({
    data: {
      id: data.id,
      name: data.name,
      description: data.description
    }
  })
  return group
}
async function findGroupById (id) {
  const group = await prisma.Group.findUnique({
    where: {
      id
    }
  })
  return group
}
async function findGroupByName (name) {
  const group = await prisma.Group.findUnique({
    where: {
      name
    }
  })
  return group
}
async function findGroupByUser (user) {
  const group = await prisma.Group.findMany({
    where: {
      user
    }
  })
  return group
}
async function findGroupByUserAndName (user, name) {
  const group = await prisma.Group.findMany({
    where: {
      user,
      name
    }
  })
  return group
}
async function updateGroup (data) {
  const group = await prisma.Group.update({
    where: {
      id: data.id
    },
    data: {
      name: data.name,
      description: data.description
    }
  })
  return group
}
async function deleteGroup (id) {
  const group = await prisma.Group.delete({
    where: {
      id
    }
  })
  return group
}

module.exports = {
  createGroup,
  findGroupById,
  findGroupByName,
  findGroupByUser,
  findGroupByUserAndName,
  updateGroup,
  deleteGroup
}
