import { RootState } from "./../types/store";
import { MutationTree } from "vuex";
import { IAgoraRTCClient, ILocalAudioTrack } from "agora-rtc-sdk-ng";
import { removeSendersAvatar } from "@/utils/Data Helpers/editData";

export const mutations: MutationTree<RootState> = {
  setDarkTheme(state, val: boolean) {
    state.darkTheme = val;
  },
  setProgress: (state, progress: number) => {
    state.progressLine = progress;
  },
  addPageOfMessages: (state) => {
    state.textChat.pageOfMessages++;
  },
  setAudio(state, audio: HTMLAudioElement) {
    state.audioMessage.audio = audio;
  },
  setPaused(state, val: boolean) {
    state.audioMessage.paused = val;
  },
  setVolume(state, val: number) {
    state.audioMessage.volume = val;
  },
  setCurrentTime(state, val: number) {
    state.audioMessage.currentTime = val;
  },
  setVoiceClient(state, client: IAgoraRTCClient) {
    state.voiceChatClient.client = client;
  },
  setLocalAudioTrack(state, track: ILocalAudioTrack) {
    state.voiceChatClient.audioTrack = track;
  },
  setChannelBerIsOpen(state, v: boolean) {
    state.isChannelBarOpen = v;
  },
};
