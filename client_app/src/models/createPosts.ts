import {PrismaClient} from '@prisma/client';
let prisma: PrismaClient | null = null;

export const getPrismaClient = () => {
	if (!prisma) {
		prisma = new PrismaClient();
	}
	return prisma;
};
interface ICreatePost {
  id: string;
  userId: string;
  body: string;
  mood?: string;
  image?: string;
}
async function CreatePost(data: ICreatePost) {
	const prisma = getPrismaClient();
	const post = await prisma.posts.create({
		data: {
			id: data.id,
			userId: data.userId,
			body: data.body,
			mood: data.mood || 'Neutral',
			image: data.image,
		},
	});
	return post;
}
async function GetAllPostsHome() {
	const prisma = getPrismaClient();
	const posts = await prisma.posts.findMany({});
	console.log(posts);
	return posts;
}
async function GetAllPostsProfile(userId: string) {
	const prisma = getPrismaClient();
	const posts = await prisma.posts.findMany({
		where: {
			userId: userId,
		},
	});
	return posts;
}

// export the functions
export {CreatePost, GetAllPostsHome, GetAllPostsProfile};
// CreatePost()
//   .then(async () => {
//     await getPrismaClient.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await getPrismaClient.$disconnect()
//     process.exit(1)
//   })
