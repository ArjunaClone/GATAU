//ga usah di ganti cuman ada connecting

'use strict';const _0xb7ab4f=_0x5dfa;(function(_0x25e636,_0x31c918){const _0x1baf58=_0x5dfa,_0x26f160=_0x25e636();while(!![]){try{const _0x463dac=-parseInt(_0x1baf58(0x136))/0x1*(-parseInt(_0x1baf58(0xc2))/0x2)+-parseInt(_0x1baf58(0x16b))/0x3+-parseInt(_0x1baf58(0x105))/0x4*(-parseInt(_0x1baf58(0x15d))/0x5)+-parseInt(_0x1baf58(0xf2))/0x6+parseInt(_0x1baf58(0x159))/0x7+-parseInt(_0x1baf58(0x11a))/0x8*(parseInt(_0x1baf58(0x10d))/0x9)+-parseInt(_0x1baf58(0xf7))/0xa*(parseInt(_0x1baf58(0x113))/0xb);if(_0x463dac===_0x31c918)break;else _0x26f160['push'](_0x26f160['shift']());}catch(_0x55f98a){_0x26f160['push'](_0x26f160['shift']());}}}(_0x188f,0x5c75c));function _0x5dfa(_0x5d2353,_0x4e0ac3){const _0x188ff7=_0x188f();return _0x5dfa=function(_0x5dfa50,_0x140e25){_0x5dfa50=_0x5dfa50-0xc0;let _0x882939=_0x188ff7[_0x5dfa50];return _0x882939;},_0x5dfa(_0x5d2353,_0x4e0ac3);}const {default:makeWASocket,BufferJSON,initInMemoryKeyStore,DisconnectReason,AnyMessageContent,useSingleFileAuthState,makeInMemoryStore,delay,downloadContentFromMessage,jidDecode,generateForwardMessageContent,generateWAMessageFromContent,proto,prepareWAMessageMedia}=require(_0xb7ab4f(0x10c)),figlet=require(_0xb7ab4f(0x100)),fs=require('fs'),moment=require('moment'),chalk=require(_0xb7ab4f(0xd3)),logg=require(_0xb7ab4f(0x12e)),PhoneNumber=require(_0xb7ab4f(0xc1)),clui=require(_0xb7ab4f(0x16e)),{Spinner}=clui,afk=require(_0xb7ab4f(0x164)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0xb7ab4f(0x103)),{serialize,getBuffer,makeid}=require(_0xb7ab4f(0xf8)),{color,connLog}=require(_0xb7ab4f(0x118)),{isSetWelcome,getTextSetWelcome}=require('./lib/setwelcome'),{isSetLeft,getTextSetLeft}=require('./lib/setleft');let welcome=JSON[_0xb7ab4f(0x13d)](fs['readFileSync']('./database/welcome.json')),left=JSON[_0xb7ab4f(0x13d)](fs[_0xb7ab4f(0x13f)](_0xb7ab4f(0x127))),set_welcome_group=JSON[_0xb7ab4f(0x13d)](fs[_0xb7ab4f(0x13f)](_0xb7ab4f(0x142))),set_left_db=JSON['parse'](fs[_0xb7ab4f(0x13f)](_0xb7ab4f(0x131))),_afk=JSON['parse'](fs[_0xb7ab4f(0x13f)](_0xb7ab4f(0x15b)));const time=moment(new Date())[_0xb7ab4f(0x169)](_0xb7ab4f(0xf9));let setting=JSON[_0xb7ab4f(0x13d)](fs['readFileSync'](_0xb7ab4f(0x15a))),nama_session=_0xb7ab4f(0xc5);function _0x188f(){const _0x3653ea=['watchFile','@s.whatsapp.net','imageMessage','group-participants.update','query','attrs','pino','recording','Safari','./database/set_left.json','store','readViewOnce','3.0','user','71926requim','0@s.whatsapp.net','Neobot\x20Multi\x20Device','log','textSync','audioMessage','connection.update','parse','name','readFileSync','CB:call','video','./database/set_welcome.json','Connect,\x20Welcome\x20Owner','startsWith','concat','getName','videoMessage','bind','lastKnownPresence','\x20Booting\x20WhatsApp\x20Bot','set','add','extendedTextMessage','contextInfo','remove','./help','Standard','verifiedName','stringify','catch','key','statusCode','international','public','277648eDrozp','./config.json','./database/afk.json','@g.us','205JtQKrJ','status','Rela\x20Bergadang\x20Demi\x20Mencari\x20Cuan:v','\x22\x20Update!','yellow','writeFileSync','Connection\x20Lost','./lib/afk','magenta','image','messages.upsert','copyNForward','format','\x20berhenti\x20afk,\x20dia\x20sedang\x20','464748IPDlLW','audio','clear','clui','content','downloadAndSaveMediaMessage','ephemeralMessage','stop','cyan','sendVideoAsSticker','block','sticker','packname','awesome-phonenumber','14teTJDN','jid','subject','./session.json','output','contacts','getNumber','quotedMessage','reply','Lexxy\x20Official','error','replace','default','blue','keys','ignore','[\x20STORE\x20-\x20BOT\x20]','chalk','\x0aitem1.TEL;waid=','loggedOut','bold','Maaf\x20kamu\x20terdektesi\x20telpon\x20bot,\x20Bot\x20akan\x20blokir\x20otomatis.\x20Jika\x20Mau\x20Dibuka\x20Silahkan\x20Hubungi\x20Ownerku\x0aWa.me/','presences','includes','presence.update','\x20Preparing\x20After\x20Connect','length','mengetik','profilePictureUrl','notify','./index','merekam','redBright','stickerMessage','server','close','splice','white','\x20Bot\x20Otomatis\x20Memblokir\x20User','base64','groupMetadata','Telpon\x20Masuk\x20Dari\x20','filter','all','viewOnceMessage','from','cache','conversation','1769706pdbNKj','test','\x20in\x20the\x20group\x20','sendMessage','checkAfkUser','80yzixap','./lib/myfunc','HH:mm:ss\x20DD/MM/YYYY','remoteJid','WhatsApp','sendContact','relayMessage','[\x20CMD\x20]\x20\x20','messages','figlet','map','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','./lib/exif2','sendMessageFromContent','71572FkqJhf','action','italic','author','fatal','contacts.update','creds.update','@adiwajshing/baileys','144JgjExr','participants','•\x20YouTube','red','•\x20Caption','messages.delete','135080arrksa','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','yellowBright','isBuffer','alloc','./lib/color','utf-8','174968KZIIOK','resolve','isBaileys','viewOnce','push','split','existsSync','message','\x20:\x20','decodeJid','has','composing','Sayonara\x20@','./database/left.json'];_0x188f=function(){return _0x3653ea;};return _0x188f();}const {state,saveState}=useSingleFileAuthState(nama_session);function title(){const _0xc9a4c5=_0xb7ab4f;console[_0xc9a4c5(0x139)](chalk[_0xc9a4c5(0xd6)][_0xc9a4c5(0xcf)](figlet[_0xc9a4c5(0x13a)]('NEOBOT',{'font':_0xc9a4c5(0x151),'horizontalLayout':_0xc9a4c5(0xce),'verticalLayout':_0xc9a4c5(0xce),'width':0x50,'whitespaceBreak':![]}))),console[_0xc9a4c5(0x139)](chalk[_0xc9a4c5(0x161)]('\x0a'+chalk[_0xc9a4c5(0x110)](_0xc9a4c5(0xd2))+'\x0a\x0a'+chalk[_0xc9a4c5(0x107)]['magenta']('•\x20Author')+'\x20:\x20'+chalk['white']('Lexxy24')+'\x0a'+chalk[_0xc9a4c5(0x107)][_0xc9a4c5(0x165)](_0xc9a4c5(0x10f))+_0xc9a4c5(0x122)+chalk['white'](_0xc9a4c5(0xcb))+'\x0a'+chalk[_0xc9a4c5(0x107)]['magenta'](_0xc9a4c5(0x111))+_0xc9a4c5(0x122)+chalk[_0xc9a4c5(0xe7)](_0xc9a4c5(0x15f))+'\x0a'));}function nocache(_0x39b789,_0x27ff01=()=>{}){const _0x3e8c3b=_0xb7ab4f;console['log']('Bot\x20Sudah\x20Aktif\x20✅'),fs[_0x3e8c3b(0x128)](require[_0x3e8c3b(0x11b)](_0x39b789),async()=>{await uncache(require['resolve'](_0x39b789)),_0x27ff01(_0x39b789);});}function uncache(_0x1d58fa='.'){return new Promise((_0x39c064,_0x3ff182)=>{const _0x4a4dca=_0x5dfa;try{delete require[_0x4a4dca(0xf0)][require[_0x4a4dca(0x11b)](_0x1d58fa)],_0x39c064();}catch(_0x563ad8){_0x3ff182(_0x563ad8);}});}const status=new Spinner(chalk['cyan'](_0xb7ab4f(0x14a))),starting=new Spinner(chalk[_0xb7ab4f(0x173)](_0xb7ab4f(0xdb))),reconnect=new Spinner(chalk['redBright']('\x20Reconnecting\x20WhatsApp\x20Bot')),store=makeInMemoryStore({'logger':logg()['child']({'level':_0xb7ab4f(0x109),'stream':_0xb7ab4f(0x132)})}),connectToWhatsApp=async()=>{const _0x4b2cf9=_0xb7ab4f,_0xf1c74b=makeWASocket({'printQRInTerminal':!![],'logger':logg({'level':_0x4b2cf9(0x109)}),'auth':state,'browser':[_0x4b2cf9(0x138),_0x4b2cf9(0x130),_0x4b2cf9(0x134)]});return title(),store[_0x4b2cf9(0x148)](_0xf1c74b['ev']),_0xf1c74b['mode']=_0x4b2cf9(0x158),require(_0x4b2cf9(0xe0)),require(_0x4b2cf9(0x150)),nocache(_0x4b2cf9(0xe0),_0x1f4a4f=>console['log'](chalk[_0x4b2cf9(0xe2)]('[\x20CMD\x20]\x20\x20')+time+chalk[_0x4b2cf9(0x115)]('\x20\x22'+_0x1f4a4f+_0x4b2cf9(0x160)))),nocache(_0x4b2cf9(0x150),_0xcb7a9=>console[_0x4b2cf9(0x139)](chalk[_0x4b2cf9(0xe2)](_0x4b2cf9(0xfe))+time+chalk[_0x4b2cf9(0x115)]('\x20\x22'+_0xcb7a9+_0x4b2cf9(0x160)))),_0xf1c74b['ev']['on'](_0x4b2cf9(0x167),async _0x3d869d=>{const _0x1245cb=_0x4b2cf9;var _0x188fe2=_0x3d869d[_0x1245cb(0xff)][0x0];if(!_0x3d869d['messages'])return;if(_0x188fe2['key']&&_0x188fe2[_0x1245cb(0x155)]['remoteJid']=='status@broadcast')return;_0x188fe2=serialize(_0xf1c74b,_0x188fe2),_0x188fe2[_0x1245cb(0x11c)]=_0x188fe2[_0x1245cb(0x155)]['id'][_0x1245cb(0x144)]('BAE5')||_0x188fe2[_0x1245cb(0x155)]['id'][_0x1245cb(0x144)]('3EB0'),require('./index')(_0xf1c74b,_0x188fe2,_0x3d869d,setting,store,welcome,left,set_welcome_group,set_left_db,_afk);}),_0xf1c74b['ev']['on'](_0x4b2cf9(0xda),async _0x15c215=>{const _0x23e395=_0x4b2cf9;if(_0x15c215['presences'])for(let _0xaf8f16 in _0x15c215[_0x23e395(0xd8)]){(_0x15c215['presences'][_0xaf8f16]['lastKnownPresence']===_0x23e395(0x125)||_0x15c215[_0x23e395(0xd8)][_0xaf8f16][_0x23e395(0x149)]===_0x23e395(0x12f))&&(afk[_0x23e395(0xf6)](_0xaf8f16,_afk)&&(_afk[_0x23e395(0xe6)](afk['getAfkPosition'](_0xaf8f16,_afk),0x1),fs[_0x23e395(0x162)]('./database/afk.json',JSON[_0x23e395(0x153)](_afk,null,0x2)),_0xf1c74b[_0x23e395(0xf5)](_0x15c215['id'],{'text':'@'+_0xaf8f16[_0x23e395(0x11f)]('@')[0x0]+_0x23e395(0x16a)+(_0x15c215['presences'][_0xaf8f16]['lastKnownPresence']===_0x23e395(0x125)?_0x23e395(0xdd):_0x23e395(0xe1)),'mentions':[_0xaf8f16]})));}}),_0xf1c74b['ev']['on'](_0x4b2cf9(0x13c),_0x39d573=>{const _0xb2bb8e=_0x4b2cf9,{connection:_0x415a3f,lastDisconnect:_0x3fd8ab}=_0x39d573;_0x415a3f===_0xb2bb8e(0xe5)&&(status[_0xb2bb8e(0x172)](),reconnect[_0xb2bb8e(0x172)](),starting[_0xb2bb8e(0x172)](),console[_0xb2bb8e(0x139)](connLog(_0xb2bb8e(0x143))),_0x3fd8ab[_0xb2bb8e(0xcc)]?.[_0xb2bb8e(0xc6)]?.[_0xb2bb8e(0x156)]!==DisconnectReason[_0xb2bb8e(0xd5)]?connectToWhatsApp():console[_0xb2bb8e(0x139)](connLog(_0xb2bb8e(0x163))));}),_0xf1c74b['ev']['on'](_0x4b2cf9(0x12b),async _0x5025f8=>{const _0x4b965a=_0x4b2cf9,_0x1ef917=welcome['includes'](_0x5025f8['id'])?!![]:![],_0x58f583=left[_0x4b965a(0xd9)](_0x5025f8['id'])?!![]:![],_0x46b8e7=await _0xf1c74b['groupMetadata'](_0x5025f8['id']),_0x44a4ef=_0x46b8e7['subject'],_0xdf48c1=_0x46b8e7['desc'],_0x3ee657=_0x46b8e7[_0x4b965a(0x10e)][_0x4b965a(0xdc)];try{for(let _0x77db30 of _0x5025f8[_0x4b965a(0x10e)]){if(_0x5025f8[_0x4b965a(0x106)]==_0x4b965a(0x14c)&&_0x1ef917){try{var _0x2876a3=await _0xf1c74b['profilePictureUrl'](_0x77db30,'image');}catch{var _0x2876a3=_0x4b965a(0x102);}if(isSetWelcome(_0x5025f8['id'],set_welcome_group)){var _0x5a8420=getTextSetWelcome(_0x5025f8['id'],set_welcome_group),_0x59f7bf=_0x5a8420[_0x4b965a(0xcd)](/@user/gi,'@'+_0x77db30[_0x4b965a(0x11f)]('@')[0x0]),_0x10d904=_0x59f7bf[_0x4b965a(0xcd)](/@group/gi,_0x44a4ef)[_0x4b965a(0xcd)](/@desc/gi,_0xdf48c1);_0xf1c74b[_0x4b965a(0xf5)](_0x5025f8['id'],{'caption':''+_0x10d904,'image':await getBuffer(_0x2876a3),'mentions':[_0x77db30]});}else _0xf1c74b[_0x4b965a(0xf5)](_0x5025f8['id'],{'caption':'Welcome\x20@'+_0x77db30['split']('@')[0x0]+_0x4b965a(0xf4)+_0x44a4ef,'image':await getBuffer(_0x2876a3),'mentions':[_0x77db30]});}else{if(_0x5025f8[_0x4b965a(0x106)]==_0x4b965a(0x14f)&&_0x58f583){try{var _0x2876a3=await _0xf1c74b[_0x4b965a(0xde)](_0x77db30,'image');}catch{var _0x2876a3='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}if(isSetLeft(_0x5025f8['id'],set_left_db)){var _0x24fe4e=getTextSetLeft(_0x5025f8['id'],set_left_db),_0x59f7bf=_0x24fe4e['replace'](/@user/gi,'@'+_0x77db30[_0x4b965a(0x11f)]('@')[0x0]),_0x10d904=_0x59f7bf[_0x4b965a(0xcd)](/@group/gi,_0x44a4ef)[_0x4b965a(0xcd)](/@desc/gi,_0xdf48c1);_0xf1c74b[_0x4b965a(0xf5)](_0x5025f8['id'],{'caption':''+_0x10d904,'image':await getBuffer(_0x2876a3),'mentions':[_0x77db30]});}else _0xf1c74b[_0x4b965a(0xf5)](_0x5025f8['id'],{'caption':_0x4b965a(0x126)+_0x77db30[_0x4b965a(0x11f)]('@')[0x0],'image':await getBuffer(_0x2876a3),'mentions':[_0x77db30]});}}}}catch(_0x19a584){console[_0x4b965a(0x139)](_0x19a584);}}),_0xf1c74b['ev']['on'](_0x4b2cf9(0x112),_0x6cc3d2=>{const _0x21a584=_0x4b2cf9;if(_0x21a584(0xed)in _0x6cc3d2){const _0x9dd6=messages[_0x6cc3d2[_0x21a584(0xc3)]];_0x9dd6===null||_0x9dd6===void 0x0?void 0x0:_0x9dd6[_0x21a584(0x16d)]();}else{const _0x478598=_0x6cc3d2[_0x21a584(0xd0)][0x0][_0x21a584(0xfa)],_0x483c04=messages[_0x478598];if(_0x483c04){const _0x3b0195=new Set(_0x6cc3d2[_0x21a584(0xd0)][_0x21a584(0x101)](_0x21886a=>_0x21886a['id']));_0x483c04[_0x21a584(0xec)](_0x178b95=>!_0x3b0195[_0x21a584(0x124)](_0x178b95[_0x21a584(0x155)]['id']));}}}),_0xf1c74b['ev']['on'](_0x4b2cf9(0x10b),()=>saveState),_0xf1c74b[_0x4b2cf9(0xca)]=(_0x254478,_0x33fa65,_0xbc964a)=>_0xf1c74b[_0x4b2cf9(0xf5)](_0x254478,{'text':_0x33fa65},{'quoted':_0xbc964a}),_0xf1c74b['ws']['on'](_0x4b2cf9(0x140),async _0x593197=>{const _0x577fd6=_0x4b2cf9,_0xc208da=_0x593197[_0x577fd6(0x16f)][0x0][_0x577fd6(0x12d)]['call-creator'];console[_0x577fd6(0x139)](_0x577fd6(0xeb)+_0xc208da+_0x577fd6(0xe8)),_0xf1c74b['sendMessage'](_0xc208da,{'text':_0x577fd6(0xd7)+setting['contactOwner']}),_0xf1c74b['updateBlockStatus'](_0xc208da,_0x577fd6(0x175));}),_0xf1c74b[_0x4b2cf9(0x123)]=_0x3c6b72=>{const _0x2d1b42=_0x4b2cf9;if(!_0x3c6b72)return _0x3c6b72;if(/:\d+@/gi[_0x2d1b42(0xf3)](_0x3c6b72)){let _0x296be2=jidDecode(_0x3c6b72)||{};return _0x296be2[_0x2d1b42(0x135)]&&_0x296be2[_0x2d1b42(0xe4)]&&_0x296be2['user']+'@'+_0x296be2[_0x2d1b42(0xe4)]||_0x3c6b72;}else return _0x3c6b72;},_0xf1c74b['ev']['on'](_0x4b2cf9(0x10a),_0x4bdbaa=>{const _0x3080e9=_0x4b2cf9;for(let _0xe5d41d of _0x4bdbaa){let _0x111f12=_0xf1c74b['decodeJid'](_0xe5d41d['id']);if(store&&store[_0x3080e9(0xc7)])store[_0x3080e9(0xc7)][_0x111f12]={'id':_0x111f12,'name':_0xe5d41d[_0x3080e9(0xdf)]};}}),_0xf1c74b[_0x4b2cf9(0x146)]=(_0x5b7f1b,_0x591885=![])=>{const _0x4bd431=_0x4b2cf9;var _0xa68c6d=_0xf1c74b[_0x4bd431(0x123)](_0x5b7f1b);_0x591885=_0xf1c74b['withoutContact']||_0x591885;let _0x3644d7;if(_0xa68c6d['endsWith'](_0x4bd431(0x15c)))return new Promise(async _0x4bf0bb=>{const _0x43430c=_0x4bd431;_0x3644d7=store[_0x43430c(0xc7)][_0xa68c6d]||{};if(!(_0x3644d7[_0x43430c(0x13e)]||_0x3644d7['subject']))_0x3644d7=_0xf1c74b[_0x43430c(0xea)](_0xa68c6d)||{};_0x4bf0bb(_0x3644d7[_0x43430c(0x13e)]||_0x3644d7[_0x43430c(0xc4)]||PhoneNumber('+'+_0xa68c6d['replace']('@s.whatsapp.net',''))[_0x43430c(0xc8)](_0x43430c(0x157)));});else _0x3644d7=_0xa68c6d===_0x4bd431(0x137)?{'id':_0xa68c6d,'name':_0x4bd431(0xfb)}:_0xa68c6d===_0xf1c74b['decodeJid'](_0xf1c74b[_0x4bd431(0x135)]['id'])?_0xf1c74b[_0x4bd431(0x135)]:store[_0x4bd431(0xc7)][_0xa68c6d]||{};return(_0x591885?'':_0x3644d7[_0x4bd431(0x13e)])||_0x3644d7[_0x4bd431(0xc4)]||_0x3644d7[_0x4bd431(0x152)]||PhoneNumber('+'+_0x5b7f1b[_0x4bd431(0xcd)](_0x4bd431(0x129),''))[_0x4bd431(0xc8)]('international');},_0xf1c74b['setStatus']=_0x543aa4=>{const _0x38f58a=_0x4b2cf9;return _0xf1c74b[_0x38f58a(0x12c)]({'tag':'iq','attrs':{'to':_0x38f58a(0x129),'type':_0x38f58a(0x14b),'xmlns':_0x38f58a(0x15e)},'content':[{'tag':'status','attrs':{},'content':Buffer[_0x38f58a(0xef)](_0x543aa4,_0x38f58a(0x119))}]}),_0x543aa4;},_0xf1c74b[_0x4b2cf9(0xfc)]=async(_0x4026c1,_0x502737,_0x360eeb='',_0x44eae1={})=>{const _0x5ef17a=_0x4b2cf9;let _0x80fa41=[];for(let _0x184fd7 of _0x502737){_0x80fa41[_0x5ef17a(0x11e)]({'lisplayName':await _0xf1c74b[_0x5ef17a(0x146)](_0x184fd7+_0x5ef17a(0x129)),'vcard':_0x5ef17a(0x114)+await _0xf1c74b[_0x5ef17a(0x146)](_0x184fd7+_0x5ef17a(0x129))+'\x0aFN:'+await _0xf1c74b[_0x5ef17a(0x146)](_0x184fd7+'@s.whatsapp.net')+_0x5ef17a(0xd4)+_0x184fd7+':'+_0x184fd7+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'});}return _0xf1c74b['sendMessage'](_0x4026c1,{'contacts':{'displayName':_0x80fa41[_0x5ef17a(0xdc)]+'\x20Contacts','contacts':_0x80fa41},..._0x44eae1},{'quoted':_0x360eeb});},_0xf1c74b[_0x4b2cf9(0x168)]=async(_0x55613f,_0x51c02f,_0x496077=![],_0x5d19f7={})=>{const _0x2dcd3c=_0x4b2cf9;let _0xc98cab;_0x5d19f7[_0x2dcd3c(0x133)]&&(_0x51c02f[_0x2dcd3c(0x121)]=_0x51c02f[_0x2dcd3c(0x121)]&&_0x51c02f['message'][_0x2dcd3c(0x171)]&&_0x51c02f['message']['ephemeralMessage'][_0x2dcd3c(0x121)]?_0x51c02f[_0x2dcd3c(0x121)]['ephemeralMessage'][_0x2dcd3c(0x121)]:_0x51c02f[_0x2dcd3c(0x121)]||undefined,_0xc98cab=Object[_0x2dcd3c(0xd0)](_0x51c02f[_0x2dcd3c(0x121)]['viewOnceMessage'][_0x2dcd3c(0x121)])[0x0],delete(_0x51c02f[_0x2dcd3c(0x121)]&&_0x51c02f['message'][_0x2dcd3c(0xd1)]?_0x51c02f['message'][_0x2dcd3c(0xd1)]:_0x51c02f[_0x2dcd3c(0x121)]||undefined),delete _0x51c02f['message']['viewOnceMessage']['message'][_0xc98cab][_0x2dcd3c(0x11d)],_0x51c02f[_0x2dcd3c(0x121)]={..._0x51c02f['message'][_0x2dcd3c(0xee)][_0x2dcd3c(0x121)]});let _0x59d6c0=Object['keys'](_0x51c02f[_0x2dcd3c(0x121)])[0x0],_0x43c9ef=await generateForwardMessageContent(_0x51c02f,_0x496077),_0x46385a=Object[_0x2dcd3c(0xd0)](_0x43c9ef)[0x0],_0x59059d={};if(_0x59d6c0!=_0x2dcd3c(0xf1))_0x59059d=_0x51c02f['message'][_0x59d6c0][_0x2dcd3c(0x14e)];_0x43c9ef[_0x46385a][_0x2dcd3c(0x14e)]={..._0x59059d,..._0x43c9ef[_0x46385a][_0x2dcd3c(0x14e)]};const _0x2ad37a=await generateWAMessageFromContent(_0x55613f,_0x43c9ef,_0x5d19f7?{..._0x43c9ef[_0x46385a],..._0x5d19f7,..._0x5d19f7[_0x2dcd3c(0x14e)]?{'contextInfo':{..._0x43c9ef[_0x46385a][_0x2dcd3c(0x14e)],..._0x5d19f7['contextInfo']}}:{}}:{});return await _0xf1c74b['relayMessage'](_0x55613f,_0x2ad37a[_0x2dcd3c(0x121)],{'messageId':_0x2ad37a[_0x2dcd3c(0x155)]['id']}),_0x2ad37a;},_0xf1c74b[_0x4b2cf9(0x104)]=async(_0x58b72c,_0x5e4419,_0x2fed58={})=>{const _0x6666d6=_0x4b2cf9;var _0x5a4a98={'contextInfo':{},..._0x2fed58},_0x10fec2=await generateWAMessageFromContent(_0x58b72c,_0x5e4419,_0x5a4a98);return await _0xf1c74b[_0x6666d6(0xfd)](_0x58b72c,_0x10fec2[_0x6666d6(0x121)],{'messageId':_0x10fec2['key']['id']}),_0x10fec2;},_0xf1c74b[_0x4b2cf9(0x170)]=async(_0x37337c,_0x4d064e,_0x5eba5e)=>{const _0x3e1edb=_0x4b2cf9;if(_0x4d064e==='image'){var _0x2770a5=await downloadContentFromMessage(_0x37337c['message'][_0x3e1edb(0x12a)]||_0x37337c[_0x3e1edb(0x121)][_0x3e1edb(0x14d)]?.['contextInfo'][_0x3e1edb(0xc9)]['imageMessage'],_0x3e1edb(0x166));let _0x329546=Buffer['from']([]);for await(const _0x29305c of _0x2770a5){_0x329546=Buffer[_0x3e1edb(0x145)]([_0x329546,_0x29305c]);}return fs[_0x3e1edb(0x162)](_0x5eba5e,_0x329546),_0x5eba5e;}else{if(_0x4d064e===_0x3e1edb(0x141)){var _0x2770a5=await downloadContentFromMessage(_0x37337c['message'][_0x3e1edb(0x147)]||_0x37337c['message'][_0x3e1edb(0x14d)]?.[_0x3e1edb(0x14e)][_0x3e1edb(0xc9)][_0x3e1edb(0x147)],'video');let _0x1eb29d=Buffer['from']([]);for await(const _0x2e0b59 of _0x2770a5){_0x1eb29d=Buffer['concat']([_0x1eb29d,_0x2e0b59]);}return fs[_0x3e1edb(0x162)](_0x5eba5e,_0x1eb29d),_0x5eba5e;}else{if(_0x4d064e===_0x3e1edb(0x176)){var _0x2770a5=await downloadContentFromMessage(_0x37337c[_0x3e1edb(0x121)][_0x3e1edb(0xe3)]||_0x37337c[_0x3e1edb(0x121)][_0x3e1edb(0x14d)]?.[_0x3e1edb(0x14e)][_0x3e1edb(0xc9)][_0x3e1edb(0xe3)],'sticker');let _0x29a162=Buffer[_0x3e1edb(0xef)]([]);for await(const _0x634ed4 of _0x2770a5){_0x29a162=Buffer[_0x3e1edb(0x145)]([_0x29a162,_0x634ed4]);}return fs[_0x3e1edb(0x162)](_0x5eba5e,_0x29a162),_0x5eba5e;}else{if(_0x4d064e===_0x3e1edb(0x16c)){var _0x2770a5=await downloadContentFromMessage(_0x37337c['message'][_0x3e1edb(0x13b)]||_0x37337c[_0x3e1edb(0x121)][_0x3e1edb(0x14d)]?.[_0x3e1edb(0x14e)][_0x3e1edb(0xc9)][_0x3e1edb(0x13b)],'audio');let _0x2999c3=Buffer[_0x3e1edb(0xef)]([]);for await(const _0x366980 of _0x2770a5){_0x2999c3=Buffer[_0x3e1edb(0x145)]([_0x2999c3,_0x366980]);}return fs['writeFileSync'](_0x5eba5e,_0x2999c3),_0x5eba5e;}}}}},_0xf1c74b['sendImageAsSticker']=async(_0x2f9034,_0x525ac7,_0x24e422,_0x2eb857={})=>{const _0x345e0b=_0x4b2cf9;let _0x159d37=Buffer[_0x345e0b(0x116)](_0x525ac7)?_0x525ac7:/^data:.*?\/.*?;base64,/i['test'](_0x525ac7)?Buffer['from'](_0x525ac7['split']`,`[0x1],'base64'):/^https?:\/\//[_0x345e0b(0xf3)](_0x525ac7)?await await getBuffer(_0x525ac7):fs[_0x345e0b(0x120)](_0x525ac7)?fs[_0x345e0b(0x13f)](_0x525ac7):Buffer[_0x345e0b(0x117)](0x0),_0x10e7ea;return _0x2eb857&&(_0x2eb857['packname']||_0x2eb857[_0x345e0b(0x108)])?_0x10e7ea=await writeExifImg(_0x159d37,_0x2eb857):_0x10e7ea=await imageToWebp(_0x159d37),await _0xf1c74b['sendMessage'](_0x2f9034,{'sticker':{'url':_0x10e7ea},..._0x2eb857},{'quoted':_0x24e422}),_0x10e7ea;},_0xf1c74b[_0x4b2cf9(0x174)]=async(_0x3280ab,_0xd278f4,_0x2026b0,_0x194303={})=>{const _0x160811=_0x4b2cf9;let _0x1f58a6=Buffer[_0x160811(0x116)](_0xd278f4)?_0xd278f4:/^data:.*?\/.*?;base64,/i[_0x160811(0xf3)](_0xd278f4)?Buffer[_0x160811(0xef)](_0xd278f4['split']`,`[0x1],_0x160811(0xe9)):/^https?:\/\//['test'](_0xd278f4)?await await getBuffer(_0xd278f4):fs[_0x160811(0x120)](_0xd278f4)?fs[_0x160811(0x13f)](_0xd278f4):Buffer[_0x160811(0x117)](0x0),_0x37791c;return _0x194303&&(_0x194303[_0x160811(0xc0)]||_0x194303[_0x160811(0x108)])?_0x37791c=await writeExifVid(_0x1f58a6,_0x194303):_0x37791c=await videoToWebp(_0x1f58a6),await _0xf1c74b[_0x160811(0xf5)](_0x3280ab,{'sticker':{'url':_0x37791c},..._0x194303},{'quoted':_0x2026b0}),_0x37791c;},_0xf1c74b;};connectToWhatsApp()[_0xb7ab4f(0x154)](_0x30b86d=>console[_0xb7ab4f(0x139)](_0x30b86d));