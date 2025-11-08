import { useState } from "react"
import "./Chat.css"
import {setCurrentChatId, getCurrentChatId, getChats, getMessages, addMessage, users, getCurrentUserId} from "./../../state.js"

const MESSAGE_I="chatMessageI"



function ChatCard({id, imageUrl, chatName, handleChatSelect}){
    return (
        <div className="chatFriendCard" onClick={() => handleChatSelect(id)}>
            <img src={imageUrl} className="chatFriendImg" alt="фото профиля"/>
            <p className="chatFriendName">{chatName}</p>
        </div>
    )
}

function Message({id, userId, text}){
    return(
        <p className={"chatMessage "+(userId==getCurrentUserId()?MESSAGE_I:"")}>{text}</p> 
    )
}




function Chat(){
    const [chats, setChats] = useState(getChats(getCurrentUserId()))
    const [messagesList, setMessages] = useState(getMessages(getCurrentChatId()))
    const [messageText, SetMessageText] = useState("")
    function SendMessage(){
        addMessage(messageText)
        SetMessageText("")
        setMessages(getMessages(getCurrentChatId()))
    }
    function handleChatSelect(id){
        setCurrentChatId(id)
        setMessages(getMessages(getCurrentChatId()))
    }
    
    let chatDisplay=chats.map((chat) =>(
        <ChatCard key={`chat${chat.id}`} id={chat.id} imageUrl={chat.imageUrl} chatName={chat.chatName} handleChatSelect={handleChatSelect}></ChatCard>
    ))
    let messagesDisplay=messagesList.map((message) =>(
        <Message key={`message${message.id}`} id={message.id} userId={message.userId} text={message.text}></Message>
    ))
    return (
        <div className="chat">
                <div className="chatFriends">
                    {chatDisplay}
                </div>
                <div className="chatSpace">
                    <div className="chatMessages">
                        {messagesDisplay}
                    </div>
                    <div className="chatInpContainer">
                        <input type="text" placeholder="Сообщение" className="chatInput" value={messageText} onChange={(e) =>SetMessageText(e.target.value)}></input>
                        <button className="chatSendBtn" onClick={SendMessage}>Отправить</button>
                    </div>
                </div>
        </div>
    )
}
export default Chat