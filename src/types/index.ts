import { IAgoraRTCClient, ILocalAudioTrack } from "agora-rtc-sdk-ng";
import { UserInfo } from "firebase/auth";

export interface MessageSender {
  displayName: string | null;
  photoURL: string | null;
  uid: string;
}

export interface Message {
  id?: string;
  text: string;
  sender: MessageSender;
  imageURL?: string;
  audioURL?: string;
  createdAt: number;
  showSenderAvatar?: boolean;
}

export interface TextMessage {
  sender: string;
  text: string;
  createdAt: number;
}

export interface TextChat {
  id: string;
  title: string;
  createdAt: number;
  messages: Message[];
  pageOfMessages: number;
}

export interface VoiceChat {
  id: string;
  title: string;
  createdAt: number;
  participants: Participant[];
  groupId: string;
}

export interface Group {
  id: string;
  title: string;
  owner: UserInfo["uid"];
  members: UserInfo["uid"][];
  imageURL: string;
  createdAt: number;
  textChats: Pick<TextChat, "id" | "title" | "createdAt">[];
  voiceChats: VoiceChat[];
}

export interface AudioMessage {
  paused: boolean;
  audio: HTMLAudioElement | null;
  volume: number;
  currentTime: number;
}

export interface Participant {
  userInfo: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
  joinedAt: number;
  uid: string;
  muted: boolean;
}

export interface VoiceChatClient {
  client: IAgoraRTCClient;
  audioTrack: ILocalAudioTrack;
}
