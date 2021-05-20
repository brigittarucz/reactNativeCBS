interface ChatRoomInterface {
    id: string;
    createdDate: number;
    name: string;
    name_2: string | boolean;
    image: string;
    chatMessages: string[];
    isPublicChat: boolean;
    lastMessage: string;
    lastMessageDate: number;
}

class ChatRoom implements ChatRoomInterface  {
    id: string;
    createdDate: number;
    name: string;
    name_2: string | boolean;
    image: string;
    chatMessages: string[];
    isPublicChat: boolean;
    lastMessage: string;
    lastMessageDate: number;
    
    constructor(id: string, 
                createdDate: number, 
                name: string, 
                name_2: string | boolean, 
                image: string, 
                chatMessages: [], 
                isPublicChat: boolean) {
        this.id = id;
        this.createdDate = createdDate;
        this.name = name;
        this.name_2 = name_2;
        this.image = image;
        this.chatMessages = chatMessages.filter(message => message.chatId === id);
        this.isPublicChat = isPublicChat;
        this.lastMessage = this.chatMessages.length !== 0 ?
                           this.chatMessages[this.chatMessages.length-1].message : '';
        this.lastMessageDate = this.chatMessages.length !== 0 ?
                               this.chatMessages[this.chatMessages.length-1].createdDate : 0;
    }
}

export default ChatRoom;