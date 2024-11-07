import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text, Image, TouchableOpacity } from "react-native"

interface status {
	LIKE: boolean
}
interface interactProps {
	like: number
	comment: number
	share: number
}
interface PostItemProps {
	username: string
	title: string
	imgUrl: string
	likes: number
	comments: number
	shares: number
	userUrl: string
}
const PostItem = (props: PostItemProps) => {
	const { username, title, imgUrl, likes, comments, shares, userUrl } = props
	const [status, setStatus] = React.useState<status>({
		LIKE: false,
	})
	const [interact, setInteract] = React.useState<interactProps>({
		like: likes,
		comment: comments,
		share: shares,
	})
	const handleInteract = (nameText: string) => {
		if (nameText === "like") {
			setStatus((preState) => ({ ...preState, LIKE: !preState.LIKE }))
			setInteract((preState) => ({
				...preState,
				like: status.LIKE ? preState.like - 1 : preState.like + 1,
			}))
		}
		if (nameText === "comment")
			setInteract((preState) => ({
				...preState,
				comment: preState.comment + 1,
			}))
		if (nameText === "share")
			setInteract((preState) => ({
				...preState,
				share: preState.share + 1,
			}))
	}
	return (
		<View style={{ flexDirection: 'column', gap: 4, marginTop: 2, marginLeft: 1, padding: 6, backgroundColor: 'white', borderRadius: 4, marginBottom: 6}}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
				<View style={{ height: 40, width: 40, borderRadius: 20 }}>
					<Image
						style={{ width: '100%', height: '100%', borderColor: 'black', borderWidth: 1, borderRadius: 20 }}
						source={{
							uri: userUrl,
						}}
					/>
				</View>
				<Text>{username}</Text>
			</View>
			<Text>{title}</Text>
			<Image
				style={{ width: '100%', height: 180, borderRadius: 8 }}
				source={{
					uri: imgUrl,
				}}
			/>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
				<Text style={{ fontSize: 12, color: 'gray' }}>{interact.like} Likes</Text>
				<Text style={{ fontSize: 12, color: 'gray' }}>
					{interact.comment} Comments
				</Text>
				<Text style={{ fontSize: 12, color: 'gray' }}>{interact.share} Shares</Text>
			</View>
			<View style={{ width: '100%', borderTopWidth: 1, borderTopColor: 'gray' }} />
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 2 }}>
				<TouchableOpacity onPress={() => handleInteract("like")}>
					<Text
						style={{
							color: status.LIKE ? "#5bcefa" : "black",
							fontSize: 16,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<Icon
							name="thumbs-o-up"
							color={status.LIKE ? "#5bcefa" : "black"}
						/>{" "}
						Like
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleInteract("comment")}>
					<Text style={{ fontSize: 16 }}>
						<Icon name="comments-o" /> Comment
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleInteract("share")}>
					<Text style={{ fontSize: 16 }}>
						<Icon name="share-square" /> Share
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
export default PostItem