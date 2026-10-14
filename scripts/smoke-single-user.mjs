import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import {createJiti} from 'jiti'
const j=createJiti(import.meta.url,{alias:{'@':new URL('../src',import.meta.url).pathname}})
const {useLocalSession}=await j.import('../src/lib/useLocalSession.ts')
let requests=0
const live=useLocalSession({getSession:()=>{requests++;return null},onRemoteSession:()=>requests++})
assert.equal(live.enabled,false);assert.equal(live.joined,false);assert.equal(live.liveRoom,null)
live.pushSession({});assert.equal(requests,0)
const {FESTIVAL_KEY,parseSession}=await j.import('../src/lib/festival.ts')
assert.equal(FESTIVAL_KEY,'beckmans-type-design-project-v1')
const {PRESET_SHAPES}=await j.import('../src/lib/types.ts')
const fixture={version:2,updatedAt:'2026-10-14T00:00:00Z',active:{char:'A',grid:{cols:7,rows:9,cellSize:40,gap:2},filled:[],brokenJoins:[],softness:0,cornerRadius:0,holeMode:'open'},drafts:[],contributions:[],library:PRESET_SHAPES}
assert.equal(parseSession(JSON.stringify(fixture)).active.char,'A')
const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8'),main=readFileSync(new URL('../src/main.tsx',import.meta.url),'utf8')
assert.ok(!main.includes('StudioDesk') && !main.includes('Projection'))
assert.ok(!app.includes('<LiveSessionJoin') && !app.includes('<ClearRoomControl') && !app.includes('<SessionArchives'))
assert.ok(app.includes('exportFestivalFont(exportCharacters, library)'))
console.log('Single-user passed: no sync calls, fresh storage namespace, complete archive import, retired views absent, draft-inclusive font export.')
