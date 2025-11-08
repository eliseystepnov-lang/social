

let currentUserId=3
let currentChatId=0

export let users=[
    {
        id: 0,
        name: "Эль Примо",
        // image: {elprimo}
    },
    {
        id: 1,
        name: "Дрил Миньон",
        // image: {drillminion}
    },
    {
        id: 2,
        name: "Найк Миньон",
        // image: {nikeminion}
    },
    {
        id: 3,
        name: "qwe",
        // image: {nikeminion}
    }
]
let chats=[
    {
        id: 0,
        usersId: [3, 2],
        messagesId: [0, 1, 2],
        // imageUrl: {nikeminion},
        chatName: "Найк Миньон"
    },
    {
        id: 1,
        usersId: [3, 1],
        messagesId: [],
        // imageUrl: {nikeminion},
        chatName: "Дрил Миньон"
    },
    {
        id: 2,
        usersId: [3],
        messagesId: [],
        // imageUrl: {nikeminion},
        chatName: "Заметки"
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
