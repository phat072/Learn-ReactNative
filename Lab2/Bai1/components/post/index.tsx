import { View } from "react-native"
import PostItem from "./item"


const itemList = [
	{
		username: "Dao Dai Chi",
		title: "Phong canh thien nhien nui rung hung vi",
		imgUrl:
			"https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-7.jpg.webp",
		likes: 24,
		comments: 50,
		shares: 250,
		userUrl: "https://z-p4-instagram.fsgn7-2.fna.fbcdn.net/v/t51.29350-15/459935341_8846348778732639_4162304861148714984_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=z-p4-instagram.fsgn7-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=RFVFrKUh6wcQ7kNvgGUHLIq&_nc_gid=27c1c207773f409fb3c37a1854220b3e&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ1NzUwMjUyNTE1NzQ2MzQ0MQ%3D%3D.3-ccb7-5&oh=00_AYBGg576V8LJYY65GnoURGHIjeOqK6AZANRohXMa6sP2MA&oe=66F232FC&_nc_sid=7a9f4b",
	},
	{
		username: "Nguyen Duc Huy",
		title: "Di that xa de tro ve",
		imgUrl:
			"https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-6.jpg.webp",
		likes: 1000,
		comments: 200,
		shares: 50,
		userUrl: "https://z-p4-instagram.fsgn7-1.fna.fbcdn.net/v/t51.2885-19/434300689_1751718388644559_5981030401229987716_n.jpg?stp=dst-jpg_s150x150&_nc_ht=z-p4-instagram.fsgn7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=tI8LwKVqRJ0Q7kNvgFuSAZ1&_nc_gid=e498e235c178408bbc0faeb332a31f74&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDMlwibQZNskkiQ7Tp3CuzSoYDYnXdKqHT7wwnl0v3NQg&oe=66F23103&_nc_sid=7a9f4b",
	},
	{
		username: "Tran Le Anh Khoa",
		title: "Toi dang o mot noi rat xa",
		imgUrl: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-4.jpg.webp",
		likes: 1000,
		comments: 200,
		shares: 50,
		userUrl: "https://z-p4-instagram.fsgn7-2.fna.fbcdn.net/v/t51.29350-15/458295207_1652443658928176_1683881744757849176_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=z-p4-instagram.fsgn7-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=W48tfLjK7yIQ7kNvgG5tDNy&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0ODIzNTQ1NTQ1MzkxMjkwNQ%3D%3D.3-ccb7-5&oh=00_AYD-s5CRk0-jB6C2Bl2-yePHwjrHH9HJfDul37HwSfe_LQ&oe=66F21297&_nc_sid=7a9f4b",
	},
	{
		username: "Phan Ca Phat",
		title: "Rung hom nay dep qua",
		imgUrl:
			"https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-2.jpg.webp",
		likes: 24,
		comments: 50,
		shares: 250,
		userUrl: "https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-6/425511743_4594134964145239_5550195951008051947_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmqqXVxsfGnboyX88J9LmPVDhSdZO_1-5UOFJ1k7_X7rY6LI_EYdJoM2dMQtrNa04IWBHymC18puJzcX8VKYvv&_nc_ohc=UFn6fHJa1fkQ7kNvgGLG-l3&_nc_ht=scontent.fsgn7-1.fna&_nc_gid=AWuGu2yvZCmNsaO9PQnRIkf&oh=00_AYB4xxDOAZtqFL-6l7SDjOVGhxxnVg1zdm76DrDs4agpYA&oe=66F2321A",
	},
	{
		username: "Phan Ca Phat",
		title: "Toi yeu me nhieu me moi mua ban co cho toi <3",
		imgUrl:
			"https://www.covuacaocap.com/wp-content/uploads/Bo-Co-Vua-Go-Cao-Cap.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
		userUrl: "https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-6/425511743_4594134964145239_5550195951008051947_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmqqXVxsfGnboyX88J9LmPVDhSdZO_1-5UOFJ1k7_X7rY6LI_EYdJoM2dMQtrNa04IWBHymC18puJzcX8VKYvv&_nc_ohc=UFn6fHJa1fkQ7kNvgGLG-l3&_nc_ht=scontent.fsgn7-1.fna&_nc_gid=AWuGu2yvZCmNsaO9PQnRIkf&oh=00_AYB4xxDOAZtqFL-6l7SDjOVGhxxnVg1zdm76DrDs4agpYA&oe=66F2321A",
	},
	{
		username: "Phan Ca Phat",
		title: "Di leo nui cung nhom ban",
		imgUrl: "https://sakos.vn/wp-content/uploads/2023/08/Bia-4.png",
		likes: 1000,
		comments: 200,
		shares: 50,
		userUrl: "https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-6/425511743_4594134964145239_5550195951008051947_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmqqXVxsfGnboyX88J9LmPVDhSdZO_1-5UOFJ1k7_X7rY6LI_EYdJoM2dMQtrNa04IWBHymC18puJzcX8VKYvv&_nc_ohc=UFn6fHJa1fkQ7kNvgGLG-l3&_nc_ht=scontent.fsgn7-1.fna&_nc_gid=AWuGu2yvZCmNsaO9PQnRIkf&oh=00_AYB4xxDOAZtqFL-6l7SDjOVGhxxnVg1zdm76DrDs4agpYA&oe=66F2321A",
	},
	{
		username: "Phan Ca Phat",
		title: "Idol cua toi",
		imgUrl:
			"https://pos.nvncdn.com/be3294-43017/art/artCT/20211214_b5IUaJlDygZ3bPJIctRMhjgS.jpg",
		likes: 24,
		comments: 50,
		shares: 250,
		userUrl: "https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-6/425511743_4594134964145239_5550195951008051947_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmqqXVxsfGnboyX88J9LmPVDhSdZO_1-5UOFJ1k7_X7rY6LI_EYdJoM2dMQtrNa04IWBHymC18puJzcX8VKYvv&_nc_ohc=UFn6fHJa1fkQ7kNvgGLG-l3&_nc_ht=scontent.fsgn7-1.fna&_nc_gid=AWuGu2yvZCmNsaO9PQnRIkf&oh=00_AYB4xxDOAZtqFL-6l7SDjOVGhxxnVg1zdm76DrDs4agpYA&oe=66F2321A",
	},
	{
		username: "Phan Ca Phat",
		title: "Hom nay toi di boi",
		imgUrl:
			"https://aokhoacnam.vn/upload/images/views/b%C6%A1i%20nam/boi-kieu-nao-dang-dep-1.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
		userUrl: "https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-6/425511743_4594134964145239_5550195951008051947_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHmqqXVxsfGnboyX88J9LmPVDhSdZO_1-5UOFJ1k7_X7rY6LI_EYdJoM2dMQtrNa04IWBHymC18puJzcX8VKYvv&_nc_ohc=UFn6fHJa1fkQ7kNvgGLG-l3&_nc_ht=scontent.fsgn7-1.fna&_nc_gid=AWuGu2yvZCmNsaO9PQnRIkf&oh=00_AYB4xxDOAZtqFL-6l7SDjOVGhxxnVg1zdm76DrDs4agpYA&oe=66F2321A",
	},
	{
		username: "Lionel Messi",
		title: "An mung vo dich",
		imgUrl: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/12/19/nhung-ky-luc-the-gioi-an-tuong-nhat-cua-lionel-messi4-16714411391661967922751.jpg",
		likes: 1000,
		comments: 200,
		shares: 50,
		userUrl: "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/mzdic/2024_07_15/lionel-messi-copa-america-2024-7360.jpg.webp",
	},
]

const Post = () => {
	return (
		<View style={{ flexDirection: 'column', marginHorizontal: 8, marginBottom: 2 }}>
			{itemList.map((item, index) => {
				return <PostItem {...item} key={index} />
			})}
		</View>
	)
}

export default Post