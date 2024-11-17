import { Request, Response } from 'express';
import { 
    getAllChatsByGroupId as getAllChatsByGroupIdService,
    get20ChatsByGroupId as get20ChatsByGroupIdService,
    saveChatMessages as saveChatMessagesService,
    createSingleChat as createSingleChatService

} from '../service/chatService';

export async function getAllChatsByGroupId(req: Request, res: Response) {
    const groupId = parseInt(req.params.id);
    const chats = await getAllChatsByGroupIdService(groupId);
    return res.json({ chats });
}

export async function get20ChatsByGroupId(req: Request, res: Response) {
    const groupId = parseInt(req.params.id);
    const lastMessageDate = req.query.lastMessageDate
        ? new Date(req.query.lastMessageDate as string)
        : undefined;
        
    const chats = await get20ChatsByGroupIdService(groupId, lastMessageDate);
    return res.json({ chats });
}

export async function saveChatMessages(req: Request, res: Response) {
    const chatList = req.body.chatList;
    console.log("chatList", chatList);
    const chat = await saveChatMessagesService(chatList);
    return res.json({ chat });
}

export async function createSingleChat(req: Request, res: Response) {
    const chat = req.body.chat;
    const newChat = await createSingleChatService(chat);
    return res.json({ newChat });
}
