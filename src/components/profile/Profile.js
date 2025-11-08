import { useState } from "react"
import profilePhoto from "../../img/ProfilePhoto.jpeg"
import "./Profile.css"

let posts=[
    {
        id: 0,
        text: "Всем привет",
        date: "03.10"
    },
    {
        id: 1,
        text: "Всем пока",
        date: "04.10"
    }
]
function addPost(postText){
    const post={
        id: posts.length,
        text: postText,
        date: "11.10"
    }
    posts.push(post)
    console.log(posts)
}

function Post({text, date}){
    return(
        <div className="postCard">
            <p className="postText">{text}</p>
            <p className="postDate">{date}</p>
        </div>
    )
}

function Profile(){
    const [postText, SetPostText] = useState("")
    function SendPost(){
        addPost(postText)
        SetPostText("")
    }
    let postDisplay=posts.map((post) =>(
        <Post key={`post${post.id}`} text={post.text} date={post.date}></Post>
    ))

    return (
        <div className="profile">
            <div className="profileContainer">
                <img className="profilePhoto" src={profilePhoto} alt="фото профиля"/>
                <div className="profileContent">
                    <div className="profileName">
                        <h2 className="profileTitle">modnik12345</h2>
                        <h3 className="profileSubTitle">absolute dickalo</h3>
                    </div>
                    <div className="profileSubscribe">
                        <button className="profileSubBtn">Изменить профиль</button>
                    </div>
                    <div className="profileInfo">
                        <div className="profileInfoCard">
                            <h3 className="profileInfoText">319</h3>
                            <h3 className="profileText">Подписки</h3>
                        </div>
                        <div className="profileInfoCard">
                            <h3 className="profileInfoText">216</h3>
                            <h3 className="profileText">Подписчики</h3>
                        </div>
                        <div className="profileInfoCard">
                            <h3 className="profileInfoText">32.9К</h3>
                            <h3 className="profileText">Лайки</h3>
                        </div>
                    </div>
                    <div className="profileBio">
                        <h3 className="profileText">
                            свои 32 года я понял, что хочу снимать домофоны и поезда (ещё возможно автобусы в рязанской области)
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" value={postText} onChange={(e) =>SetPostText(e.target.value)}></input>
                <button onClick={SendPost}>Post</button>
            </div>
            <div className="postContainer">
                {postDisplay}
            </div>
        </div>
    )
}
export default Profile
