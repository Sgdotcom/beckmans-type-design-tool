import type { FestivalSession } from './festival'
import type { LiveRoomState, LiveSyncStatus, LiveRoomApplyMeta } from './liveSession'
const pushSession = (_session:FestivalSession, _options?:{immediate?:boolean}) => {}
/** Local mode never starts network synchronisation. Kept compatible with editing callbacks. */
export function useLocalSession(_options:{getSession:()=>FestivalSession|null;painting?:()=>boolean;onRemoteSession:(session:FestivalSession,room:LiveRoomState,meta?:LiveRoomApplyMeta)=>void;wallMode?:boolean;activeChar?:string;holding?:boolean}) {
 return {enabled:false,joined:false,room:'local',status:{state:'off',message:'Saved locally'} as LiveSyncStatus,draftSvgs:{} as Record<string,string>,liveRoom:null as LiveRoomState|null,pushSession}
}
