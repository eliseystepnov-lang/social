

let currentUserId=3
let currentChatId=0

export let users=[
    {
        id: 0,
        name: "Эль Примо",
        image: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/elprimo.jpg"
    },
    {
        id: 1,
        name: "Дрил Миньон",
        image: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/drillminion.jpg"
    },
    {
        id: 2,
        name: "Найк Миньон",
        image: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/nikeminion.jpeg"
    },
    {
        id: 3,
        name: "qwe",
        image: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/ProfilePhoto.jpeg"
    }
]
let chats=[
    {
        id: 0,
        usersId: [3, 2],
        messagesId: [0, 1, 2],
        imageUrl: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/nikeminion.jpeg",
        chatName: "Найк Миньон"
    },
    {
        id: 1,
        usersId: [3, 1],
        messagesId: [],
        imageUrl: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/drillminion.jpg",
        chatName: "Дрил Миньон"
    },
    {
        id: 2,
        usersId: [3],
        messagesId: [],
        imageUrl: "https://raw.githubusercontent.com/eliseystepnov-lang/social/refs/heads/main/src/img/ProfilePhoto.jpeg",
        chatName: "Заметки"
    },
    {
        id: 3,
        usersId: [0, 1, 2, 3],
        messagesId: [3, 4, 5, 6],
        imagesUrl: "https://funny.klev.club/smeh/uploads/posts/2024-05/funny-klev-club-7ved-p-smeshnie-kartinki-avatarki-net-21.jpg",
        chatName: "Групповой чат"
    }
]
let messages=[
    {
        id: 0,
        userId: 2,
        text: "Привет"
    },
    {
        id: 1,
        userId: 3,
        text: "Привет!"
    },
    {
        id: 2,
        userId: 2,
        text: "Как дела?"
    },
    {
        id: 3,
        userId: 0,
        text: "Как дела?"
    },
    {
        id: 4,
        userId: 1,
        text: "Как дела?"
    },
    {
        id: 5,
        userId: 2,
        text: "Как дела?"
    },
    {
        id: 6,
        userId: 3,
        text: "Как дела?"
    }
]
export function setCurrentChatId(id){
    currentChatId=id
    console.log(currentChatId)
}
export function getCurrentChatId(){
    return currentChatId
}
export function getCurrentUserId(){
    return currentUserId
}
export function getChats(userId){
    return chats.filter(chat => chat.usersId.includes(userId)) 
}
export function getChat(chatId){
    return chats.filter(chat => chat.id==chatId)[0]
}
export function getMessages(chatId){
    let chat = chats.filter(chat => chat.id==chatId)[0]
    return messages.filter(message => chat.messagesId.includes(message.id))
}
export function addMessage(messageText){
    const message={
        id: messages.length,
        userId: currentUserId,
        text: messageText
    }
    messages.push(message)
    let chat = getChat(currentChatId)
    chat.messagesId.push(message.id)
    console.log(messages)
}
