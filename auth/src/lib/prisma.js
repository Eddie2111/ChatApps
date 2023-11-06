'use strict';

const { PrismaClient } = require('@prisma/client');
const prismaClientSingleton = () => {
    return new PrismaClient()
};

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || prismaClientSingleton()

module.exports = prisma;