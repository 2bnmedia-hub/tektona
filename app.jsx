'use strict';

// ─── GLOBAL THEME VAR ───────────────────────────────────────────────────────
var C = null;

// ─── THEMES ─────────────────────────────────────────────────────────────────
const THEMES = {
  lightStone: {
    id:'lightStone', name:'Light Stone', primary:'#AF8C5C', accent:'#D1C7BD',
    bg:'#E7E2DD', card:'#F2EDE8', border:'#D1C7BD', text:'#1A1613', sub:'#474440',
    success:'#5A7A50', warning:'#AF8C5C', danger:'#8A4040', info:'#4A6A80',
    ai:'#7A5A90', sidebar:'#1A1613', sidebarAccent:'#AF8C5C', sidebarText:'#E7E2DD',
    inputBg:'#F2EDE8', archBg:false
  },
  warmSand: {
    id:'warmSand', name:'Warm Sand', primary:'#C86D38', accent:'#FEC868',
    bg:'#FEF5E6', card:'#FFFBF0', border:'#F0D8A0', text:'#473C33', sub:'#7A6455',
    success:'#6A8040', warning:'#C89030', danger:'#B04038', info:'#4A7080',
    ai:'#8A6A48', sidebar:'#473C33', sidebarAccent:'#FDA769', sidebarText:'#FEF5E6',
    inputBg:'#FFFBF0', archBg:false
  },
  softOlive: {
    id:'softOlive', name:'Soft Olive', primary:'#839958', accent:'#D3968C',
    bg:'#0A3323', card:'#0D3D2A', border:'#1A5035', text:'#F7F4D5', sub:'#6B8040',
    success:'#6AAB58', warning:'#C4883A', danger:'#A04040', info:'#105666',
    ai:'#9A78C0', sidebar:'#060E09', sidebarAccent:'#839958', sidebarText:'#F7F4D5',
    inputBg:'#102818', archBg:true
  },
  architectDark: {
    id:'architectDark', name:'Architect Dark', primary:'#D4AF37', accent:'#415A77',
    bg:'#0D1B2A', card:'#1B263B', border:'#2D4060', text:'#F7F3E9', sub:'#8A9CB5',
    success:'#4A8A60', warning:'#D4AF37', danger:'#C05050', info:'#415A77',
    ai:'#7A50C0', sidebar:'#080F1A', sidebarAccent:'#D4AF37', sidebarText:'#F7F3E9',
    inputBg:'#162030', archBg:true
  },
  zahaHadid: {
    id:'zahaHadid', name:'Dubai Concrete', primary:'#861211', accent:'#2B7574',
    bg:'#0E2931', card:'#12484C', border:'#1E5A60', text:'#E2E2E0', sub:'#8BADA9',
    success:'#4A9A70', warning:'#C4883A', danger:'#A03030', info:'#2B7574',
    ai:'#9050C0', sidebar:'#071419', sidebarAccent:'#861211', sidebarText:'#E2E2E0',
    inputBg:'#0C3038', archBg:true
  },
  bigBjarke: {
    id:'bigBjarke', name:'Copenhagen Blue', primary:'#E16A3D', accent:'#FFA45D',
    bg:'#043E52', card:'#0A5268', border:'#0E5E78', text:'#FFF5EE', sub:'#7AB0BE',
    success:'#016A6D', warning:'#FFA45D', danger:'#D04030', info:'#20A0B0',
    ai:'#C040A0', sidebar:'#021E2A', sidebarAccent:'#E16A3D', sidebarText:'#FFF5EE',
    inputBg:'#083045', archBg:true
  },
  tadaoAndo: {
    id:'tadaoAndo', name:'Osaka Brutalism', primary:'#D6C6AC', accent:'#AA9371',
    bg:'#000000', card:'#1A1613', border:'#494D54', text:'#FEF4E3', sub:'#AA9371',
    success:'#5A7A50', warning:'#AA9371', danger:'#8A4040', info:'#4A6080',
    ai:'#8050A0', sidebar:'#0A0A0A', sidebarAccent:'#D6C6AC', sidebarText:'#FEF4E3',
    inputBg:'#121212', archBg:true
  },
  fosterGlass: {
    id:'fosterGlass', name:'London Glass', primary:'#E0C58F', accent:'#09CBC2',
    bg:'#112250', card:'#1E3060', border:'#3C5070', text:'#F5F0E9', sub:'#B0A888',
    success:'#20B890', warning:'#E0C58F', danger:'#C04050', info:'#09CBC2',
    ai:'#9060C0', sidebar:'#080E20', sidebarAccent:'#E0C58F', sidebarText:'#F5F0E9',
    inputBg:'#1A2848', archBg:true
  },
  snohettaNordic: {
    id:'snohettaNordic', name:'Oslo Nordic', primary:'#CDAA80', accent:'#997953',
    bg:'#0F1E3F', card:'#213A56', border:'#2D4A66', text:'#F5F0E8', sub:'#A09878',
    success:'#4A8A6A', warning:'#CDAA80', danger:'#B04050', info:'#5090C0',
    ai:'#7060C0', sidebar:'#080E20', sidebarAccent:'#CDAA80', sidebarText:'#F5F0E8',
    inputBg:'#182A44', archBg:true
  },
  calqNoir: {
    id:'calqNoir', name:'Calq Noir', primary:'#E3E5E4', accent:'#4B4949',
    bg:'#040404', card:'#151515', border:'#2B2B2A', text:'#E3E5E4', sub:'#989C9A',
    success:'#3DAA7A', warning:'#C0902A', danger:'#D04040', info:'#4A90C0',
    ai:'#9060E0', sidebar:'#000000', sidebarAccent:'#E3E5E4', sidebarText:'#E3E5E4',
    inputBg:'#161616', archBg:false
  },
  snowWhite: {
    id:'snowWhite', name:'Snow White', primary:'#1A1A1A', accent:'#888888',
    bg:'#FFFFFF', card:'#F6F6F6', border:'#E2E2E2', text:'#111111', sub:'#777777',
    success:'#2E7D32', warning:'#C06800', danger:'#C62828', info:'#1565C0',
    ai:'#6A1B9A', sidebar:'#F0F0F0', sidebarAccent:'#1A1A1A', sidebarText:'#111111',
    inputBg:'#FFFFFF', archBg:false
  },
  customTheme: {
    id:'customTheme', name:'ערכה אישית', primary:'#AF8C5C', accent:'#D1C7BD',
    bg:'#E7E2DD', card:'#F2EDE8', border:'#D1C7BD', text:'#1A1613', sub:'#474440',
    success:'#5A7A50', warning:'#AF8C5C', danger:'#8A4040', info:'#4A6A80',
    ai:'#7A5A90', sidebar:'#1A1613', sidebarAccent:'#AF8C5C', sidebarText:'#E7E2DD',
    inputBg:'#F2EDE8', archBg:false
  }
};
(function(){
  try {
    const saved = localStorage.getItem('tektona_custom_theme');
    if (saved) Object.assign(THEMES.customTheme, JSON.parse(saved));
  } catch(e) {}
  C = THEMES.calqNoir;
})();

// ─── PLAN FEATURES ───────────────────────────────────────────────────────────
const _BASE = ['portal','timeline','documents','gallery','approvals','messages',
  'meetings','quotes','signature','payments','punchlist','brief','rfi','share','templates'];
const _PRO  = [..._BASE,'ai','tasks','reports','themes','priority','clientsuccess'];
const _STU  = [..._PRO,'whitelabel','bi','api','hours'];
const PLAN_FEATURES = {
  starter: new Set(_BASE),
  pro:     new Set(_PRO),
  studio:  new Set(_STU)
};
// Populated per-office at login time (enterOffice() in App()) from the offices row —
// real per-tenant branding/plan instead of a hardcoded constant.
const OFFICE_PLAN = { plan:'pro', logo:null, officeName:'Tektona', slogan:'' };
const canUse = (f) => PLAN_FEATURES[OFFICE_PLAN.plan].has(f);

// ─── PHASES ──────────────────────────────────────────────────────────────────
const PHASES = [
  { id:1, name:'תכנון מושגי',      short:'מושגי'   },
  { id:2, name:'תכנון ראשוני',     short:'ראשוני'  },
  { id:3, name:'תכנון מפורט',      short:'מפורט'   },
  { id:4, name:'היתר בנייה',       short:'היתר'    },
  { id:5, name:'מכרז קבלנים',      short:'מכרז'    },
  { id:6, name:'פיקוח עליון',      short:'פיקוח'   },
  { id:7, name:'גמר ופינישים',     short:'גמר'     },
  { id:8, name:'מסירה וליווי',     short:'מסירה'   }
];

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return isMobile;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2,10);
const today = () => new Date().toISOString().slice(0,10);
const fmtDate = (d) => d ? new Date(d).toLocaleDateString('he-IL') : '—';
const fmtCurrency = (n) => '₪' + Number(n||0).toLocaleString('he-IL');
const sanitize = (s) => String(s||'').replace(/[<>"'&]/g,c=>({'<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','&':'&amp;'}[c]));
const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20MB client-side guard

// Transliterates Hebrew project names into a readable ASCII slug for bookmarkable URLs
// (e.g. "וילה כרמל" -> "vylh-krml") instead of the internal id ("p1").
const HEBREW_TO_LATIN = {
  'א':'a','ב':'b','ג':'g','ד':'d','ה':'h','ו':'v','ז':'z','ח':'ch','ט':'t','י':'y',
  'כ':'k','ך':'k','ל':'l','מ':'m','ם':'m','נ':'n','ן':'n','ס':'s','ע':'a','פ':'p','ף':'f',
  'צ':'tz','ץ':'tz','ק':'k','ר':'r','ש':'sh','ת':'t',
};
const slugifyProjectName = (name) => {
  const translit = String(name||'').split('').map(ch => HEBREW_TO_LATIN[ch] ?? ch).join('');
  const slug = translit.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
  return slug || 'project';
};

// Small enough (office logo) that base64-in-DB is fine — not worth Storage complexity.
const readFileAsDataURL = (file, cb) => {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => cb(ev.target.result, file.name);
  reader.readAsDataURL(file);
};

// Real file storage (Supabase Storage) instead of base64-in-JSONB. Path convention
// {officeId}/{projectId}/{category}/{uid}-{filename} lets RLS scope access by office,
// same pattern as every DB table already uses.
async function uploadOfficeFile(officeId, projectId, category, file, cb) {
  if (!file) return;
  if (file.size > MAX_FILE_BYTES) { alert('הקובץ גדול מדי (מקסימום 20MB)'); return; }
  const path = `${officeId}/${projectId}/${category}/${uid()}-${file.name}`;
  const { error } = await sb.storage.from('office-files').upload(path, file);
  if (error) { alert('שגיאה בהעלאת הקובץ: '+error.message); return; }
  cb(path, file.name);
}
async function getFileUrl(path) {
  if (!path) return null;
  if (path.startsWith('data:')) return path; // backward-compat: old base64 records still open directly
  const { data, error } = await sb.storage.from('office-files').createSignedUrl(path, 3600);
  return error ? null : data.signedUrl;
}
const openAttachment = async (path) => { const url = await getFileUrl(path); if (url) window.open(url, '_blank'); };

// Resolves a stored path (or legacy base64) to a signed <img> src on mount.
function StorageImage({ path, style, alt }) {
  const [src, setSrc] = React.useState(null);
  React.useEffect(() => {
    let cancelled = false;
    setSrc(null);
    getFileUrl(path).then(url => { if (!cancelled) setSrc(url); });
    return () => { cancelled = true; };
  }, [path]);
  if (!src) return <div style={{...style, display:'flex',alignItems:'center',justifyContent:'center',
    background:C.border+'55', color:C.sub, fontSize:12}}>...</div>;
  return <img src={src} alt={alt||''} style={style}/>;
}

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const MOCK_PROJECTS = [
  {
    id:'p1', name:'וילה כרמל', address:'חיפה, כרמל', clientName:'משפחת לוי',
    architectName:'אדר. דנה כהן', status:'active', currentPhase:4, progress:55,
    area:320, budget:2800000, startDate:'2024-03-01', endDate:'2025-06-30',
    description:'בית פרטי יוקרתי על מדרון הכרמל עם נוף לים. 5 חדרי שינה, בריכה, גינה נוף.',
    coverImage:null, template:'villa',
    phases: PHASES.map((p,i)=>({ phaseId:p.id, status: i<4?'completed': i===4?'active':'pending', completedDate: i<4?'2024-0'+(i+3)+'-15':null, notes:'' })),
    documents:[
      { id:'d1', name:'תוכניות אדריכלות שלב א', type:'drawing', date:'2024-04-10', uploadedBy:'אדר. דנה כהן', fileType:'pdf', thumb:null },
      { id:'d2', name:'חוזה עם לקוח', type:'contract', date:'2024-03-05', uploadedBy:'מנהל משרד', fileType:'pdf', thumb:null }
    ],
    quotes:[
      { id:'q1', title:'הצעת מחיר שלב תכנון', amount:180000, status:'approved', date:'2024-03-10', validUntil:'2024-04-10', signature:null, fileName:null },
      { id:'q2', title:'הצעת מחיר שלב פיקוח', amount:95000, status:'pending', date:'2024-08-01', validUntil:'2024-09-01', signature:null, fileName:null }
    ],
    approvals:[
      { id:'a1', title:'אישור חומרי חיפוי חזית', requestedBy:'אדר. דנה כהן', date:'2024-07-01', status:'approved', approvedBy:'משפחת לוי', comment:'מאושר, לפי הדוגמה שהוצגה' },
      { id:'a2', title:'אישור תוכנית מטבח', requestedBy:'אדר. דנה כהן', date:'2024-08-15', status:'pending', approvedBy:null, comment:'' }
    ],
    messages:[
      { id:'m1', from:'אדר. דנה כהן', text:'שלום, עדכון: קיבלנו אישור מהועדה לתוכנית הגג. ממשיכים לשלב ההיתר.', time:'10:30', date:'2024-08-20', role:'arch' },
      { id:'m2', from:'דוד לוי', text:'מצוין! מתי אנחנו מצפים לקבלת ההיתר?', time:'11:15', date:'2024-08-20', role:'client' },
      { id:'m3', from:'אדר. דנה כהן', text:'בערך 6-8 שבועות מהגשה. נעדכן כשיש חדשות.', time:'11:45', date:'2024-08-20', role:'arch' }
    ],
    gallery:[
      { id:'g1', title:'רנדר חזית ראשית', phase:2, date:'2024-05-10', isAI:false, url:null },
      { id:'g2', title:'AI Visualization — סלון', phase:3, date:'2024-06-20', isAI:true, url:null }
    ],
    payments:[
      { id:'pay1', title:'תשלום ראשון — חתימת חוזה', amount:56000, dueDate:'2024-03-15', status:'paid', receivedDate:'2024-03-14', notes:'' },
      { id:'pay2', title:'תשלום שני — הגשת תוכניות', amount:56000, dueDate:'2024-06-01', status:'paid', receivedDate:'2024-06-03', notes:'' },
      { id:'pay3', title:'תשלום שלישי — קבלת היתר', amount:68000, dueDate:'2024-10-01', status:'pending', receivedDate:null, notes:'' }
    ],
    punchList:[
      { id:'pl1', number:1, title:'סדק בקיר מרתף', desc:'סדק אורכי כ-30 ס"מ', location:'מרתף', responsible:'קבלן ראשי', priority:'high', status:'open', img:null, fixedAt:null },
      { id:'pl2', number:2, title:'חלון לא נסגר כראוי', desc:'חלון גדול בסלון, לא אוטם', location:'סלון', responsible:'ספק חלונות', priority:'medium', status:'in-progress', img:null, fixedAt:null }
    ],
    rfis:[
      { id:'r1', number:1, title:'בירור סוג ריצוף גרם מדרגות', desc:'מה גודל האריחים ומה הספק המועדף?', from:'קבלן ראשי', priority:'medium', dueDate:'2024-09-01', img:null, reply:'אריחי פורצלן 60x60 ס"מ, ספק: קרמיקה פלוס', repliedBy:'אדר. דנה כהן', repliedAt:'2024-08-25' }
    ],
    brief:{ answers:{ style:'מודרני', rooms:'5', budget:'2.8M', timeline:'18 חודש', priorities:'נוף, פרטיות, בריכה', special:'מרתף יין', parking:'3 רכבים', outdoor:'גינת נוף ובריכה' }, submitted:true, savedAt:'2024-03-10', submittedBy:'דוד לוי' },
    tasks:[
      { id:'t1', title:'הגשת בקשה להיתר', desc:'הגשת כל מסמכי ההיתר לועדה המקומית', assignee:'אדר. דנה כהן', priority:'high', dueDate:'2024-09-15', status:'in-progress', createdBy:'מנהל', createdAt:'2024-08-01' },
      { id:'t2', title:'בחירת קבלן מבצע', desc:'קבלת הצעות מחיר ובחירת קבלן', assignee:'מנהל משרד', priority:'medium', dueDate:'2024-11-01', status:'todo', createdBy:'מנהל', createdAt:'2024-08-01' }
    ],
    dailyReports:[
      { id:'dr1', summary:'ביקור באתר, בדיקת יסודות', tasks:'יסודות, עמודים', hours:6, status:'approved', author:'אדר. דנה כהן', authorId:'arch1', date:'2024-08-19', time:'17:00' }
    ],
    meetings:[
      { id:'mt1', title:'סיכום שלב תכנון מפורט', date:'2024-09-10', time:'10:00', participants:['אדר. דנה כהן','דוד לוי','שרה לוי'], location:'משרד האדריכלות', link:'', notes:'סיכום בחירות חומרים ופתרונות', status:'scheduled', createdBy:'אדר. דנה כהן' }
    ],
    customTasks:[],
    clientProfile:{ style:'מקבל החלטות מהיר', responseStyle:'מהיר', workStyle:'מהיר', preferredContact:'טלפון', preferredHours:'09:00-17:00', preferredLang:'עברית', tags:['VIP','ממליץ'], healthScore:82, paymentReliability:95, approvalSpeed:88, changeFrequency:15, notes:'לקוח נאמן, פרויקט שני', history:[] },
    changeRequests:[],
    decisionLog:[]
  },
  {
    id:'p2', name:'שיפוץ דירה תל אביב', address:'תל אביב, הצפון הישן', clientName:'אור ורוני שמיר',
    architectName:'אדר. יוסף אברהם', status:'active', currentPhase:6, progress:78,
    area:145, budget:950000, startDate:'2023-11-01', endDate:'2024-10-30',
    description:'שיפוץ מקיף לדירת 5 חדרים. עיצוב מודרני-מינימליסטי עם שמירה על אלמנטים וינטג\'.',
    coverImage:null, template:'renovation',
    phases: PHASES.map((p,i)=>({ phaseId:p.id, status: i<6?'completed': i===6?'active':'pending', completedDate: i<6?'2024-0'+(i+1)+'-10':null, notes:'' })),
    documents:[{ id:'d3', name:'תוכניות שיפוץ', type:'drawing', date:'2023-12-01', uploadedBy:'אדר. יוסף אברהם', fileType:'pdf', thumb:null }],
    quotes:[{ id:'q3', title:'הצעת מחיר כוללת', amount:85000, status:'approved', date:'2023-11-15', validUntil:'2023-12-15', signature:'חתום', fileName:null }],
    approvals:[{ id:'a3', title:'אישור בחירת ריצוף', requestedBy:'אדר. יוסף אברהם', date:'2024-07-20', status:'approved', approvedBy:'אור שמיר', comment:'נהדר!' }],
    messages:[{ id:'m4', from:'אדר. יוסף אברהם', text:'הגמר מתקדם יפה, עוד שבועיים מסיימים ריצוף.', time:'09:00', date:'2024-08-21', role:'arch' }],
    gallery:[], payments:[
      { id:'pay4', title:'תשלום ראשון', amount:25000, dueDate:'2023-11-15', status:'paid', receivedDate:'2023-11-14', notes:'' },
      { id:'pay5', title:'תשלום שני', amount:35000, dueDate:'2024-04-01', status:'paid', receivedDate:'2024-04-02', notes:'' },
      { id:'pay6', title:'תשלום סופי', amount:25000, dueDate:'2024-10-01', status:'pending', receivedDate:null, notes:'' }
    ],
    punchList:[], rfis:[], brief:{ answers:{style:'מינימליסטי',rooms:'5',budget:'950K',timeline:'12 חודש',priorities:'מטבח, אמבטיה ראשית',special:'ללא',parking:'לא',outdoor:'מרפסת'}, submitted:true, savedAt:'2023-11-05', submittedBy:'אור שמיר' },
    tasks:[], dailyReports:[], meetings:[], customTasks:[],
    clientProfile:{ style:'מדוקדק', responseStyle:'זהיר', workStyle:'מתלבט', preferredContact:'וואטסאפ', preferredHours:'ערב', preferredLang:'עברית', tags:[], healthScore:70, paymentReliability:90, approvalSpeed:60, changeFrequency:35, notes:'', history:[] },
    changeRequests:[], decisionLog:[]
  },
  {
    id:'p3', name:'מרכז מסחרי נצרת', address:'נצרת, העיר', clientName:'קבוצת פינקל השקעות',
    architectName:'אדר. מיכל ברנר', status:'planning', currentPhase:1, progress:12,
    area:2400, budget:12000000, startDate:'2024-08-01', endDate:'2026-12-31',
    description:'פרויקט מסחרי כולל 3 קומות של חנויות ומסעדות. חזית זכוכית ועיצוב עכשווי.',
    coverImage:null, template:'commercial',
    phases: PHASES.map((p,i)=>({ phaseId:p.id, status: i===0?'active':'pending', completedDate:null, notes:'' })),
    documents:[], quotes:[], approvals:[], messages:[], gallery:[],
    payments:[{ id:'pay7', title:'מקדמה תכנון', amount:200000, dueDate:'2024-08-15', status:'paid', receivedDate:'2024-08-16', notes:'' }],
    punchList:[], rfis:[],
    brief:{ answers:{}, submitted:false, savedAt:null, submittedBy:null },
    tasks:[{ id:'t3', title:'הכנת תוכנית מושגית', desc:'סקיצות ראשוניות + מצגת ללקוח', assignee:'אדר. מיכל ברנר', priority:'high', dueDate:'2024-09-30', status:'in-progress', createdBy:'מנהל', createdAt:'2024-08-05' }],
    dailyReports:[], meetings:[],  customTasks:[],
    clientProfile:{ style:'עסקי', responseStyle:'מהיר', workStyle:'דוחק', preferredContact:'מייל', preferredHours:'09:00-18:00', preferredLang:'ערבית/עברית', tags:['גדול'], healthScore:75, paymentReliability:100, approvalSpeed:85, changeFrequency:20, notes:'', history:[] },
    changeRequests:[], decisionLog:[]
  }
];

// ─── MOCK USERS ──────────────────────────────────────────────────────────────
const MOCK_USERS = [
  { id:'u1', name:'מנהל משרד', email:'admin@tektona.io', role:'admin', active:true, avatar:'מ', plan:'pro' },
  { id:'u2', name:'אדר. דנה כהן', email:'dana@tektona.io', role:'arch', active:true, avatar:'ד', projects:['p1'] },
  { id:'u3', name:'אדר. יוסף אברהם', email:'yosef@tektona.io', role:'arch', active:true, avatar:'י', projects:['p2'] },
  { id:'u4', name:'אדר. מיכל ברנר', email:'michal@tektona.io', role:'arch', active:true, avatar:'מ', projects:['p3'] },
  { id:'u5', name:'דוד לוי', email:'david@levy.co.il', role:'client', active:true, avatar:'ד', projects:['p1'] },
  { id:'u6', name:'אור שמיר', email:'or@shamir.co.il', role:'client', active:true, avatar:'א', projects:['p2'] }
];

// ─── SUPABASE BACKEND ────────────────────────────────────────────────────────
// window.__SUPABASE_URL__ / __SUPABASE_ANON_KEY__ are injected by build.py at build time.
const sb = supabase.createClient(window.__SUPABASE_URL__, window.__SUPABASE_ANON_KEY__);

// A logged-in user's row in office_members tells us which office they belong to
// and what role they have — this is what real login replaces the old DEMO_USERS with.
async function fetchOfficeMember(authUserId) {
  const { data, error } = await sb.from('office_members')
    .select('id, office_id, role, display_name, ai_enabled')
    .eq('user_id', authUserId).single();
  if (error || !data) return null;
  return data;
}
function buildAppUser(member, email) {
  return { id: member.id, officeId: member.office_id, role: member.role,
    name: member.display_name, avatar: member.display_name[0], email, aiEnabled: member.ai_enabled };
}

// Notifies everyone with real, ID-based access to a project (its architect + clients,
// plus every office admin) — sidesteps the free-text assignee/requestedBy fields
// rather than trying to match them. Fire-and-forget; never blocks the caller's save.
async function notifyProjectMembers(officeId, project, actor, type, title, body) {
  try {
    const { data: admins } = await sb.from('office_members').select('id').eq('office_id', officeId).eq('role','admin');
    const recipientIds = new Set([project.architectId, ...(project.clientIds||[]), ...(admins||[]).map(a=>a.id)]);
    recipientIds.delete(actor.id); recipientIds.delete(null); recipientIds.delete(undefined);
    if (recipientIds.size === 0) return;
    await sb.from('notifications').insert([...recipientIds].map(recipient_id => ({
      office_id: officeId, recipient_id, project_id: project.id, project_name: project.name,
      type, title, body, actor_name: actor.name
    })));
  } catch(e) { console.error('notifyProjectMembers failed:', e.message); }
}

// A task privately assigned to one person notifies only them (+ admins) — broadcasting
// it to notifyProjectMembers' wider audience would leak the task's existence to
// people who aren't supposed to see it.
async function notifyTaskAssignee(officeId, project, actor, assigneeId, title, body) {
  try {
    const { data: admins } = await sb.from('office_members').select('id').eq('office_id', officeId).eq('role','admin');
    const recipientIds = new Set([assigneeId, ...(admins||[]).map(a=>a.id)]);
    recipientIds.delete(actor.id); recipientIds.delete(null); recipientIds.delete(undefined);
    if (recipientIds.size === 0) return;
    await sb.from('notifications').insert([...recipientIds].map(recipient_id => ({
      office_id: officeId, recipient_id, project_id: project.id, project_name: project.name,
      type:'task', title, body, actor_name: actor.name
    })));
  } catch(e) { console.error('notifyTaskAssignee failed:', e.message); }
}

// Snapshots a project into the cross-office deletion archive before it's removed from
// the office's data, so the platform owner can still see (and the office can still be
// asked about) what was deleted for 90 days.
async function archiveDeletedProject(officeId, officeName, project, deletedByName) {
  const { error } = await sb.from('deleted_projects').insert({
    office_id: officeId, office_name: officeName, project_id: project.id,
    project_name: project.name, project_data: project, deleted_by: deletedByName,
  });
  if (error) throw error;
}

// Platform owner is a role above any single office — checked separately from office_members.
async function fetchPlatformAdmin(authUserId) {
  const { data, error } = await sb.from('platform_admins').select('id').eq('user_id', authUserId).maybeSingle();
  if (error || !data) return null;
  return data;
}
function buildOwnerUser(admin, email) {
  return { id: admin.id, role: 'owner', name: 'Platform Owner', avatar: '⚡', email };
}

async function saveD(officeId, data) {
  if (!officeId) return;
  const { error } = await sb.from('offices').update({ data }).eq('id', officeId);
  if (error) console.error('saveD failed:', error.message);
}

async function loadOffice(officeId) {
  const { data, error } = await sb.from('offices')
    .select('data, name, logo, slogan, plan, active, status').eq('id', officeId).single();
  if (error || !data) return null;
  return data;
}

function exportData(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'tektona-backup-' + today() + '.json';
  a.click(); URL.revokeObjectURL(url);
}

// ─── RATE LIMIT ──────────────────────────────────────────────────────────────
let _loginAttempts = 0, _lastAttempt = 0;
function checkRateLimit() {
  const now = Date.now();
  if (now - _lastAttempt > 60000) _loginAttempts = 0;
  _lastAttempt = now;
  return ++_loginAttempts <= 5;
}

// ─── ARCH BACKGROUND (SVG animated, dark themes) ─────────────────────────────
function ArchBackground() {
  const lines = [];
  for (let i = 0; i < 8; i++) {
    lines.push({ x1: Math.random()*100, y1: Math.random()*100, x2: Math.random()*100, y2: Math.random()*100, dur: 8+i*2 });
  }
  return (
    <svg style={{ position:'fixed', inset:0, width:'100%', height:'100%', zIndex:0, opacity:0.07, pointerEvents:'none' }}
      viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={C.accent} />
          <stop offset="100%" stopColor={C.primary} />
        </linearGradient>
      </defs>
      {[...Array(12)].map((_,i) => (
        <line key={i}
          x1={`${(i*17)%100}`} y1={`${(i*23)%100}`}
          x2={`${(i*31+50)%100}`} y2={`${(i*13+40)%100}`}
          stroke="url(#archGrad)" strokeWidth="0.3"
          strokeDasharray="1000" strokeDashoffset="1000"
          style={{ animation: `drawLine ${6+i}s ease-in-out ${i*0.5}s infinite alternate` }}
        />
      ))}
      {[...Array(6)].map((_,i) => (
        <circle key={'c'+i} cx={`${(i*37)%90+5}`} cy={`${(i*29)%90+5}`}
          r={`${3+i*2}`} fill="none" stroke={C.accent} strokeWidth="0.2"
          style={{ animation: `archFloat ${8+i*3}s ease-in-out ${i}s infinite` }} />
      ))}
    </svg>
  );
}

// ─── SVG CIRCLE STAT ─────────────────────────────────────────────────────────
function SVGCircle({ value, max, color, label, sublabel, size=80 }) {
  const R = 34, circ = 2*Math.PI*R;
  const pct = Math.min(1, (value||0)/(max||1));
  const offset = circ*(1-pct);
  const gradId = 'cg_' + label?.replace(/\s/g,'') + size;
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
      <div style={{ position:'relative', width:size, height:size }}>
        {/* Soft color backdrop halo for a richer, less flat look */}
        <div style={{ position:'absolute', inset:'8%', borderRadius:'50%',
          background:`radial-gradient(circle, ${color}26 0%, transparent 72%)`, pointerEvents:'none' }}/>
        <svg width={size} height={size} viewBox="0 0 80 80">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="1"/>
              <stop offset="55%" stopColor={color} stopOpacity="0.85"/>
              <stop offset="100%" stopColor={color} stopOpacity="0.4"/>
            </linearGradient>
            <filter id={'glow_'+gradId}>
              <feGaussianBlur stdDeviation="2.2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Track */}
          <circle cx="40" cy="40" r={R} fill="none" stroke={C.border} strokeWidth="6"/>
          {/* Value arc */}
          <circle cx="40" cy="40" r={R} fill="none" stroke={`url(#${gradId})`} strokeWidth="6"
            strokeDasharray={circ} strokeDashoffset={offset}
            strokeLinecap="round" transform="rotate(-90 40 40)"
            filter={`url(#glow_${gradId})`}
            style={{ transition:'stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)', animation:'circleGrow 1.2s ease-out' }}/>
          {/* Glossy highlight streak — modern glass-ring shine, independent of value */}
          <circle cx="40" cy="40" r={R} fill="none" stroke="#fff" strokeOpacity="0.65" strokeWidth="2"
            strokeLinecap="round" strokeDasharray={`${circ*0.1} ${circ}`} strokeDashoffset={circ*0.045}
            transform="rotate(-90 40 40)" pointerEvents="none"/>
          {/* Center value */}
          <text x="40" y="37" textAnchor="middle" fill={C.text}
            style={{ fontSize:19, fontWeight:800, fontFamily:'Space Grotesk, Heebo, Arial, sans-serif' }}>
            {value}
          </text>
          {sublabel && (
            <text x="40" y="51" textAnchor="middle" fill={C.sub}
              style={{ fontSize:10, fontFamily:'Space Grotesk, Arial, sans-serif' }}>
              {sublabel}
            </text>
          )}
        </svg>
        {/* Glow ring when high */}
        {pct >= 0.8 && (
          <div style={{ position:'absolute', inset:-2, borderRadius:'50%',
            boxShadow:`0 0 12px 2px ${color}40`, pointerEvents:'none' }}/>
        )}
      </div>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:13, fontWeight:600, color:C.sub, letterSpacing:'0.04em', textTransform:'uppercase' }}>{label}</div>
      </div>
    </div>
  );
}

// ─── HONEYCOMB LOADER (shown whenever the system is thinking/loading) ─────────
function Honeycomb({ color }) {
  return (
    <div className="honeycomb" style={color ? { color } : undefined}>
      <div/><div/><div/><div/><div/><div/><div/>
    </div>
  );
}

// ─── SVG BAR CHART ────────────────────────────────────────────────────────────
function SVGBarChart({ data, height=120, showValues=true }) {
  if (!data || data.length === 0) return null;
  const maxVal = Math.max(...data.map(d => d.value), 1);
  const n = data.length;
  const chartH = height - 24;
  const barW = 80 / n;
  return (
    <svg width="100%" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none"
      style={{ overflow:'visible' }}>
      <defs>
        {data.map((d, i) => (
          <linearGradient key={'bg'+i} id={`bar_g_${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={d.color || C.primary} stopOpacity="0.9"/>
            <stop offset="100%" stopColor={d.color || C.primary} stopOpacity="0.4"/>
          </linearGradient>
        ))}
      </defs>
      {data.map((d, i) => {
        const barH = Math.max(2, (d.value / maxVal) * chartH);
        const x = i * barW + barW * 0.2;
        const w = barW * 0.6;
        const y = chartH - barH + 2;
        return (
          <g key={i}>
            {/* Background */}
            <rect x={x} y={2} width={w} height={chartH} fill={C.border} rx="2" opacity="0.4"/>
            {/* Value bar */}
            <rect x={x} y={y} width={w} height={barH} fill={`url(#bar_g_${i})`} rx="2"
              style={{ transition:'height 1s ease, y 1s ease' }}/>
            {/* Value label */}
            {showValues && d.value > 0 && (
              <text x={x + w/2} y={y - 3} textAnchor="middle" fill={d.color || C.primary}
                style={{ fontSize:6, fontWeight:700, fontFamily:'Space Grotesk, Arial' }}>
                {d.value}
              </text>
            )}
            {/* X label */}
            <text x={x + w/2} y={height - 2} textAnchor="middle" fill={C.sub}
              style={{ fontSize:5.5, fontFamily:'Heebo, Arial', direction:'rtl' }}>
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── SVG LINE CHART ───────────────────────────────────────────────────────────
function SVGLineChart({ points, color, height=80, label }) {
  if (!points || points.length < 2) return null;
  const maxV = Math.max(...points.map(p=>p.v), 1);
  const n = points.length;
  const W = 100, H = height - 16;
  const toX = (i) => (i / (n-1)) * W;
  const toY = (v) => H - (v / maxV) * H + 4;
  const pathD = points.map((p,i) => `${i===0?'M':'L'}${toX(i)},${toY(p.v)}`).join(' ');
  const areaD = pathD + ` L${toX(n-1)},${H+4} L0,${H+4} Z`;
  const gradId = 'lg_'+label?.replace(/\s/g,'');
  return (
    <svg width="100%" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#${gradId})`}/>
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {points.map((p,i) => (
        <circle key={i} cx={toX(i)} cy={toY(p.v)} r="1.8" fill={color}/>
      ))}
      {points.map((p,i) => (
        <text key={'l'+i} x={toX(i)} y={height-1} textAnchor="middle" fill={C.sub}
          style={{ fontSize:5, fontFamily:'Space Grotesk, Arial' }}>{p.label}</text>
      ))}
    </svg>
  );
}

// ─── ACCESSIBILITY WIDGET ────────────────────────────────────────────────────
function AccessibilityWidget() {
  const [open, setOpen] = React.useState(false);
  const [fs, setFs] = React.useState(100);
  const [contrast, setContrast] = React.useState(false);
  React.useEffect(() => {
    document.body.style.fontSize = fs + '%';
    document.body.style.filter = contrast ? 'contrast(1.5)' : '';
  }, [fs, contrast]);
  return (
    <div style={{ position:'fixed', bottom:80, left:16, zIndex:9999 }}>
      <button onClick={() => setOpen(!open)}
        style={{ width:44, height:44, borderRadius:'50%', border:'none',
          background:C.primary, color:contrastText(C.primary), fontSize:24, cursor:'pointer',
          boxShadow:'0 2px 12px rgba(0,0,0,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
        ♿
      </button>
      {open && (
        <div style={{ position:'absolute', bottom:52, left:0, background:C.card, border:`1px solid ${C.border}`,
          borderRadius:12, padding:16, width:200, boxShadow:'0 4px 20px rgba(0,0,0,0.2)' }}>
          <div style={{ fontSize:16, fontWeight:700, color:C.text, marginBottom:12 }}>נגישות</div>
          <div style={{ display:'flex', gap:8, marginBottom:10 }}>
            <button onClick={() => setFs(f=>Math.max(80,f-10))}
              style={{ flex:1, padding:'6px 0', borderRadius:8, border:`1px solid ${C.border}`,
                background:C.bg, color:C.text, cursor:'pointer', fontSize:19 }}>A-</button>
            <button onClick={() => setFs(100)}
              style={{ flex:1, padding:'6px 0', borderRadius:8, border:`1px solid ${C.border}`,
                background:C.bg, color:C.text, cursor:'pointer', fontSize:16 }}>רגיל</button>
            <button onClick={() => setFs(f=>Math.min(140,f+10))}
              style={{ flex:1, padding:'6px 0', borderRadius:8, border:`1px solid ${C.border}`,
                background:C.bg, color:C.text, cursor:'pointer', fontSize:22 }}>A+</button>
          </div>
          <button onClick={() => setContrast(c=>!c)}
            style={{ width:'100%', padding:'7px 0', borderRadius:8,
              border:`1px solid ${C.border}`, background: contrast ? C.primary : C.bg,
              color: contrast ? contrastText(C.primary) : C.text, cursor:'pointer', fontSize:16 }}>
            {contrast ? '✓ ' : ''}ניגודיות גבוהה
          </button>
        </div>
      )}
    </div>
  );
}

// ─── CUSTOM THEME EDITOR ─────────────────────────────────────────────────────
const CUSTOM_THEME_KEY = 'tektona_custom_theme';

function CustomThemeEditor({ prevThemeId, onApply, onCancel, onSave }) {
  const [colors, setColors] = React.useState(() => {
    const { id, name, archBg, ...cols } = THEMES.customTheme;
    return { ...cols, archBg: archBg || false };
  });

  const groups = [
    { title:'צבעים ראשיים', fields:[
      { key:'primary', label:'ראשי' }, { key:'accent', label:'הדגשה' }
    ]},
    { title:'רקע ומשטחים', fields:[
      { key:'bg', label:'רקע' }, { key:'card', label:'כרטיס' },
      { key:'border', label:'גבול' }, { key:'inputBg', label:'שדות קלט' }
    ]},
    { title:'טקסט', fields:[
      { key:'text', label:'טקסט ראשי' }, { key:'sub', label:'טקסט משני' }
    ]},
    { title:'מצבים', fields:[
      { key:'success', label:'הצלחה' }, { key:'warning', label:'אזהרה' },
      { key:'danger', label:'שגיאה' }, { key:'info', label:'מידע' },
      { key:'ai', label:'AI' }
    ]},
    { title:'סרגל צד', fields:[
      { key:'sidebar', label:'רקע' }, { key:'sidebarAccent', label:'הדגשה' },
      { key:'sidebarText', label:'טקסט' }
    ]}
  ];

  const applyLive = (next) => {
    Object.assign(THEMES.customTheme, next);
    onApply('customTheme');
  };

  const updateColor = (key, val) => {
    const next = { ...colors, [key]: val };
    setColors(next);
    applyLive(next);
  };

  const loadPreset = (id) => {
    const th = THEMES[id];
    if (!th) return;
    const next = {
      primary:th.primary, accent:th.accent, bg:th.bg, card:th.card,
      border:th.border, text:th.text, sub:th.sub, inputBg:th.inputBg,
      success:th.success, warning:th.warning, danger:th.danger, info:th.info,
      ai:th.ai, sidebar:th.sidebar, sidebarAccent:th.sidebarAccent,
      sidebarText:th.sidebarText, archBg:th.archBg
    };
    setColors(next);
    applyLive(next);
  };

  const handleSave = () => {
    localStorage.setItem(CUSTOM_THEME_KEY, JSON.stringify(colors));
    onSave();
  };

  const handleCancel = () => {
    onApply(prevThemeId);
    onCancel();
  };

  const previewColors = [colors.primary, colors.accent, colors.bg, colors.sidebar];

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', display:'flex',
      alignItems:'center', justifyContent:'center', zIndex:9100 }} onClick={handleCancel}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.card, borderRadius:20, padding:28,
        width:660, maxWidth:'95vw', maxHeight:'90vh', overflowY:'auto',
        boxShadow:'0 20px 60px rgba(0,0,0,0.5)', direction:'rtl' }}>

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
          <div>
            <h3 style={{ color:C.text, fontSize:22, fontWeight:700, margin:0 }}>✏️ ערכת צבעים אישית</h3>
            <div style={{ color:C.sub, fontSize:13, marginTop:4 }}>בחר כל צבע בנפרד — התצוגה מתעדכנת בזמן אמת</div>
          </div>
          <button onClick={handleCancel} style={{ background:'none', border:'none', color:C.sub, fontSize:26, cursor:'pointer' }}>×</button>
        </div>

        {/* Live preview strip */}
        <div style={{ display:'flex', borderRadius:10, overflow:'hidden', height:28, marginBottom:20, gap:1 }}>
          {previewColors.map((col,i) => (
            <div key={i} style={{ flex:1, background:col }}/>
          ))}
        </div>

        {/* Load from preset */}
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:13, fontWeight:600, color:C.sub, marginBottom:8 }}>התחל מערכת קיימת:</div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {Object.entries(THEMES).filter(([id])=>id!=='customTheme').map(([id,th])=>(
              <button key={id} onClick={()=>loadPreset(id)}
                style={{ padding:'5px 10px', borderRadius:8, border:`1px solid ${C.border}`,
                  background:'transparent', color:C.sub, cursor:'pointer', fontSize:12,
                  display:'flex', alignItems:'center', gap:5, transition:'border-color .15s' }}>
                <div style={{ display:'flex', gap:2 }}>
                  {[th.primary, th.bg, th.sidebar].map((col,i)=>(
                    <div key={i} style={{ width:8, height:8, borderRadius:'50%', background:col, border:`1px solid ${C.border}` }}/>
                  ))}
                </div>
                {th.name}
              </button>
            ))}
          </div>
        </div>

        {/* Color groups */}
        {groups.map(group => (
          <div key={group.title} style={{ marginBottom:20 }}>
            <div style={{ fontSize:14, fontWeight:700, color:C.sub, marginBottom:10,
              paddingBottom:6, borderBottom:`1px solid ${C.border}` }}>
              {group.title}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(190px,1fr))', gap:8 }}>
              {group.fields.map(({key, label}) => (
                <div key={key} style={{ display:'flex', alignItems:'center', gap:10,
                  padding:'8px 12px', background:C.bg, borderRadius:10 }}>
                  <div style={{ position:'relative', flexShrink:0 }}>
                    <div style={{ width:34, height:34, borderRadius:8, background:colors[key]||'#000',
                      border:`2px solid ${C.border}`, cursor:'pointer', overflow:'hidden' }}>
                      <input type="color" value={colors[key]||'#000000'}
                        onChange={e=>updateColor(key, e.target.value)}
                        style={{ position:'absolute', inset:'-4px', width:'calc(100% + 8px)',
                          height:'calc(100% + 8px)', opacity:0, cursor:'pointer' }}/>
                    </div>
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:C.text }}>{label}</div>
                    <input type="text" value={colors[key]||''}
                      onChange={e=>{
                        const v = e.target.value;
                        setColors(c=>({...c,[key]:v}));
                        if(/^#[0-9A-Fa-f]{6}$/.test(v)) applyLive({...colors,[key]:v});
                      }}
                      style={{ fontSize:11, color:C.sub, background:'transparent', border:'none',
                        outline:'none', width:'100%', fontFamily:'monospace', direction:'ltr' }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* archBg toggle */}
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24,
          padding:'10px 14px', background:C.bg, borderRadius:10 }}>
          <button onClick={()=>updateColor('archBg', !colors.archBg)}
            style={{ width:44, height:24, borderRadius:12, border:'none', flexShrink:0,
              background:colors.archBg ? C.primary : C.border, cursor:'pointer', position:'relative',
              transition:'background .2s' }}>
            <div style={{ position:'absolute', top:2, left:colors.archBg?22:2,
              width:20, height:20, borderRadius:10, background:'#fff', transition:'left .2s' }}/>
          </button>
          <span style={{ fontSize:14, fontWeight:600, color:C.text }}>רקע אנימציה (קווים אדריכליים)</span>
        </div>

        {/* Actions */}
        <div style={{ display:'flex', gap:10, justifyContent:'flex-end' }}>
          <Btn variant="ghost" onClick={handleCancel}>ביטול</Btn>
          <Btn onClick={handleSave}>שמור ערכה</Btn>
        </div>
      </div>
    </div>
  );
}

// ─── THEME SELECTOR ──────────────────────────────────────────────────────────
function ThemeSelector({ currentId, onSelect, onClose }) {
  const isMobile = useIsMobile();
  const [showCustomEditor, setShowCustomEditor] = React.useState(false);

  if (showCustomEditor) {
    return (
      <CustomThemeEditor
        prevThemeId={currentId}
        onApply={onSelect}
        onCancel={() => setShowCustomEditor(false)}
        onSave={() => { setShowCustomEditor(false); onSelect('customTheme'); onClose(); }}
      />
    );
  }

  const themeNames = { lightStone:'Light Stone', warmSand:'Warm Sand', softOlive:'Soft Olive',
    architectDark:'Architect Dark', zahaHadid:'Dubai Concrete', bigBjarke:'Copenhagen Blue',
    tadaoAndo:'Osaka Brutalism', fosterGlass:'London Glass', snohettaNordic:'Oslo Nordic',
    calqNoir:'Calq Noir', snowWhite:'Snow White' };

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex',
      alignItems:'center', justifyContent:'center', zIndex:9000 }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.card, borderRadius:20, padding:28,
        width:560, maxWidth:'95vw', boxShadow:'0 20px 60px rgba(0,0,0,0.4)', direction:'rtl' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
          <h3 style={{ color:C.text, fontSize:22, fontWeight:700 }}>בחר ערכת נושא</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:C.sub, fontSize:26, cursor:'pointer' }}>×</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:isMobile?'repeat(2,1fr)':'repeat(3,1fr)', gap:10 }}>
          {Object.entries(THEMES).filter(([id])=>id!=='customTheme').map(([id, th]) => (
            <button key={id} onClick={() => { onSelect(id); onClose(); }}
              style={{ border: id===currentId ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
                borderRadius:0, padding:12, background: th.card, cursor:'pointer',
                textAlign:'center', transition:'all .2s' }}>
              <div style={{ display:'flex', gap:4, justifyContent:'center', marginBottom:8 }}>
                {[th.primary, th.accent, th.bg, th.sidebar].map((col,i) => (
                  <div key={i} style={{ width:14, height:14, borderRadius:0, background:col, border:`1px solid ${th.border}` }}/>
                ))}
              </div>
              <div style={{ fontSize:13, fontWeight:600, color:th.text }}>{themeNames[id]}</div>
            </button>
          ))}
          {/* Custom theme card */}
          <button onClick={() => { onSelect('customTheme'); setShowCustomEditor(true); }}
            style={{ border: currentId==='customTheme' ? `2px solid ${C.primary}` : `2px dashed ${C.border}`,
              borderRadius:0, padding:12, background:C.bg, cursor:'pointer',
              textAlign:'center', transition:'all .2s', position:'relative' }}>
            <div style={{ display:'flex', gap:4, justifyContent:'center', marginBottom:8 }}>
              {[THEMES.customTheme.primary, THEMES.customTheme.accent,
                THEMES.customTheme.bg, THEMES.customTheme.sidebar].map((col,i) => (
                <div key={i} style={{ width:14, height:14, borderRadius:0, background:col, border:`1px solid ${C.border}` }}/>
              ))}
            </div>
            <div style={{ fontSize:13, fontWeight:600, color:C.text }}>✏️ ערכה אישית</div>
            <div style={{ fontSize:11, color:C.sub, marginTop:3 }}>ערוך צבעים</div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MODAL WRAPPER ───────────────────────────────────────────────────────────
function Modal({ title, onClose, children, width=600 }) {
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.55)',
      display:'flex', alignItems:'center', justifyContent:'center', zIndex:8000 }}
      onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}
        style={{ background:C.card, borderRadius:16, padding:28, width, maxWidth:'95vw',
          maxHeight:'90vh', overflowY:'auto', boxShadow:'0 20px 60px rgba(0,0,0,0.35)',
          animation:'fadeIn .2s ease' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
          <h3 style={{ color:C.text, fontSize:20, fontWeight:700 }}>{title}</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:C.sub, fontSize:26, cursor:'pointer' }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── DELETE PROJECT CONFIRMATION ──────────────────────────────────────────────
function DeleteProjectConfirm({ project, onCancel, onConfirm }) {
  const [deleting, setDeleting] = React.useState(false);
  const [error, setError] = React.useState('');
  const confirm = async () => {
    setDeleting(true); setError('');
    try { await onConfirm(); }
    catch(e) { setError('שגיאה במחיקת הפרויקט: '+e.message); setDeleting(false); }
  };
  return (
    <Modal title="⚠️ מחיקת פרויקט" onClose={onCancel} width={440}>
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        <div style={{color:C.text,fontSize:16,lineHeight:1.7}}>
          אתה עומד למחוק לצמיתות את הפרויקט <strong>"{project.name}"</strong> — כולל כל
          המשימות, המסמכים, ההודעות והתשלומים המשויכים אליו. לא ניתן לשחזר את הפרויקט
          בעצמך לאחר האישור. לצורך בקרה, עותק מלא יישמר בארכיון בעל המערכת למשך 90 יום.
        </div>
        {error && <div style={{color:C.danger,fontSize:14}}>{error}</div>}
        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <Btn variant="ghost" onClick={onCancel} disabled={deleting}>ביטול</Btn>
          <Btn variant="danger" onClick={confirm} disabled={deleting}>{deleting?'מוחק...':'מחק לצמיתות'}</Btn>
        </div>
      </div>
    </Modal>
  );
}

// ─── SMALL INPUT / BUTTON HELPERS ─────────────────────────────────────────────
function Input({ label, value, onChange, type='text', placeholder='', required=false, style:s={} }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:4, ...s }}>
      {label && <label style={{ fontSize:14, fontWeight:600, color:C.sub }}>{label}{required && ' *'}</label>}
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        style={{ padding:'9px 12px', borderRadius:8, border:`1px solid ${C.border}`,
          background:C.inputBg, color:C.text, fontSize:16, outline:'none',
          fontFamily:'Heebo, Arial, sans-serif', direction:'rtl' }}/>
    </div>
  );
}

function Select({ label, value, onChange, options, style:s={} }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:4, ...s }}>
      {label && <label style={{ fontSize:14, fontWeight:600, color:C.sub }}>{label}</label>}
      <select value={value} onChange={e=>onChange(e.target.value)}
        style={{ padding:'9px 12px', borderRadius:8, border:`1px solid ${C.border}`,
          background:C.inputBg, color:C.text, fontSize:16, outline:'none',
          fontFamily:'Heebo, Arial, sans-serif', direction:'rtl' }}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function isLightColor(hex) {
  if (!hex || !hex.startsWith('#')) return false;
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return (r*299 + g*587 + b*114)/1000 > 160;
}
// Some themes (e.g. Calq Noir) have a near-white primary color, so text hardcoded to
// white disappears on it — pick white or the theme's own background color for contrast.
function contrastText(bg) { return isLightColor(bg) ? C.bg : '#fff'; }

function Btn({ children, onClick, variant='primary', size='md', disabled=false, style:s={} }) {
  const bg = variant==='primary'?C.primary:variant==='danger'?C.danger:variant==='success'?C.success:'transparent';
  const col = variant==='ghost'?C.primary: isLightColor(bg)?C.bg:'#fff';
  const border = variant==='ghost'?`1px solid ${C.primary}`:'none';
  const pd = size==='sm'?'6px 14px':size==='lg'?'12px 28px':'9px 20px';
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ padding:pd, borderRadius:8, border, background:bg, color:col,
        fontSize: size==='sm'?12:14, fontWeight:600, cursor:disabled?'not-allowed':'pointer',
        opacity:disabled?.6:1, transition:'all .15s', fontFamily:'Heebo, Arial, sans-serif', ...s }}>
      {children}
    </button>
  );
}

function Badge({ text, color }) {
  return (
    <span style={{ display:'inline-block', padding:'2px 10px', borderRadius:20,
      background: color+'22', color, fontSize:13, fontWeight:600 }}>
      {text}
    </span>
  );
}

function StatusBadge({ status }) {
  const map = {
    active:   { label:'פעיל',      color:'#4CAF80' },
    planning: { label:'תכנון',     color:'#5B8FA8' },
    completed:{ label:'הושלם',     color:'#808080' },
    pending:  { label:'ממתין',     color:'#D4A030' },
    paid:     { label:'שולם',      color:'#4CAF80' },
    overdue:  { label:'באיחור',    color:'#C05050' },
    approved: { label:'מאושר',     color:'#4CAF80' },
    rejected: { label:'נדחה',      color:'#C05050' },
    open:     { label:'פתוח',      color:'#C05050' },
    closed:   { label:'סגור',      color:'#4CAF80' },
    'in-progress':{ label:'בביצוע', color:'#D4A030'},
    todo:     { label:'לביצוע',    color:'#5B8FA8' },
    draft:    { label:'טיוטה',     color:'#A09880' },
    scheduled:{ label:'מתוכנן',    color:'#5B8FA8' },
    done:     { label:'בוצע',      color:'#4CAF80' },
  };
  const { label, color } = map[status] || { label:status, color:C.sub };
  return <Badge text={label} color={color} />;
}

// ─── LEGAL MODAL ─────────────────────────────────────────────────────────────
// ─── SHARED NAVBAR ────────────────────────────────────────────────────────────
// Office white-label logo + slogan — must appear next to the TEKTONA wordmark on
// every screen for the same logged-in office, not just the AppNavBar-based ones.
function OfficeLogoBadge({ isMobile }) {
  if (isMobile || !OFFICE_PLAN.logo) return null;
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:6,
      borderRight:`1px solid ${C.border}`, paddingRight:16}}>
      <img src={OFFICE_PLAN.logo} alt="Office Logo" style={{height:78, width:'auto', display:'block', opacity:0.9}}/>
      {OFFICE_PLAN.slogan && (
        <div style={{fontSize:12, color:C.sub, letterSpacing:'0.02em', whiteSpace:'nowrap', textAlign:'center'}}>{OFFICE_PLAN.slogan}</div>
      )}
    </div>
  );
}

function AppNavBar({ onGoHome, title, subtitle, onBack, rightContent, onOpenTheme }) {
  const isMobile = useIsMobile();
  return (
    <div style={{background:C.sidebar, minHeight:56, display:'flex', alignItems:'center',
      justifyContent:'space-between', padding: isMobile ? '8px 16px' : '8px 32px',
      borderBottom:`1px solid ${C.border}`, flexShrink:0, zIndex:20, position:'relative'}}>
      <div style={{display:'flex', alignItems:'center', gap: isMobile ? 10 : 20}}>
        <button onClick={onGoHome}
          style={{background:'none', border:'none', cursor:'pointer', padding:0, display:'flex', alignItems:'center', gap:10}}
          title="דף הבית">
          <img src={isLightColor(C.sidebar) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
            style={{width: isMobile ? 80 : 'clamp(90px,12vw,180px)', height:'auto', display:'block', transition:'opacity .15s'}}
            onMouseEnter={e=>e.currentTarget.style.opacity='0.7'}
            onMouseLeave={e=>e.currentTarget.style.opacity='1'}/>
          <OfficeLogoBadge isMobile={isMobile}/>
        </button>
        {(title || onBack) && <div style={{width:1, height:18, background:C.border}}/>}
        {onBack && !isMobile && (
          <button onClick={onBack}
            style={{background:'none', border:'none', color:C.sub, cursor:'pointer', fontSize:14,
              letterSpacing:'0.04em', fontFamily:"'Space Grotesk',sans-serif"}}>
            ← חזור
          </button>
        )}
        {title && !isMobile && (
          <div>
            <div style={{color:C.sidebarText, fontWeight:700, fontSize:16,
              fontFamily:"'Space Grotesk',sans-serif", letterSpacing:'-0.01em'}}>{title}</div>
            {subtitle && <div style={{color:C.sub, fontSize:13}}>{subtitle}</div>}
          </div>
        )}
      </div>
      {(onOpenTheme || rightContent) && (
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          {onOpenTheme && canUse('themes') && (
            <button onClick={onOpenTheme}
              style={{background:'none',border:`1px solid ${C.border}`,padding:'5px 12px',
                color:C.sub,cursor:'pointer',fontSize:13,letterSpacing:'0.06em',borderRadius:0}}>
              THEME
            </button>
          )}
          {rightContent}
        </div>
      )}
    </div>
  );
}

// ─── NOTIFICATION BELL ────────────────────────────────────────────────────────
function NotificationBell({ user, onOpenProject }) {
  const [items, setItems] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const unread = items.filter(n=>!n.read).length;

  const load = async () => {
    const { data } = await sb.from('notifications').select('*')
      .eq('recipient_id', user.id).order('created_at', {ascending:false}).limit(30);
    setItems(data||[]);
  };
  React.useEffect(()=>{ load(); }, [user.id]);

  React.useEffect(()=>{
    const channel = sb.channel('notif-'+user.id)
      .on('postgres_changes', { event:'INSERT', schema:'public', table:'notifications', filter:'recipient_id=eq.'+user.id },
        payload => setItems(cur=>[payload.new, ...cur]))
      .subscribe();
    return () => sb.removeChannel(channel);
  }, [user.id]);

  const markRead = async (n) => {
    if (!n.read) {
      setItems(cur=>cur.map(i=>i.id===n.id?{...i,read:true}:i));
      await sb.from('notifications').update({read:true}).eq('id', n.id);
    }
    setOpen(false);
    if (n.project_id && onOpenProject) onOpenProject(n.project_id);
  };

  const typeIcons = {task:'✅', approval_requested:'✍️', approval_decided:'✓', message:'💬', rfi:'❓'};

  return (
    <div style={{position:'relative'}}>
      <button onClick={()=>setOpen(o=>!o)} title="התראות"
        style={{position:'relative', background:'none', border:`1px solid ${C.border}`, borderRadius:8,
          width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          color:C.sidebarText||C.text, fontSize:17, flexShrink:0}}>
        🔔
        {unread>0 && (
          <span style={{position:'absolute', top:-4, left:-4, background:C.danger, color:'#fff',
            borderRadius:10, minWidth:18, height:18, fontSize:11, fontWeight:700,
            display:'flex', alignItems:'center', justifyContent:'center', padding:'0 4px'}}>
            {unread>9?'9+':unread}
          </span>
        )}
      </button>
      {open && (
        <>
          <div onClick={()=>setOpen(false)} style={{position:'fixed', inset:0, zIndex:9998}}/>
          <div style={{position:'absolute', top:44, left:0, width:340, maxHeight:420, overflowY:'auto',
            background:C.card, border:`1px solid ${C.border}`, borderRadius:12, boxShadow:'0 12px 32px rgba(0,0,0,0.35)',
            zIndex:9999, direction:'rtl'}}>
            <div style={{padding:'12px 16px', borderBottom:`1px solid ${C.border}`, fontWeight:700, color:C.text, fontSize:15}}>התראות</div>
            {items.length===0 && <div style={{padding:24, textAlign:'center', color:C.sub, fontSize:14}}>אין התראות</div>}
            {items.map(n=>(
              <div key={n.id} onClick={()=>markRead(n)}
                style={{padding:'12px 16px', borderBottom:`1px solid ${C.border}`, cursor:'pointer',
                  background: n.read?'transparent':C.primary+'0d'}}>
                <div style={{display:'flex', gap:8, alignItems:'flex-start'}}>
                  <span style={{fontSize:16}}>{typeIcons[n.type]||'🔔'}</span>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontWeight:n.read?500:700, color:C.text, fontSize:14}}>{n.title}</div>
                    {n.body && <div style={{color:C.sub, fontSize:13, marginTop:2}}>{n.body}</div>}
                    <div style={{color:C.sub, fontSize:12, marginTop:4}}>{n.project_name} · {n.actor_name} · {fmtDate(n.created_at)}</div>
                  </div>
                  {!n.read && <div style={{width:8,height:8,borderRadius:4,background:C.primary,flexShrink:0,marginTop:4}}/>}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── APP FOOTER ───────────────────────────────────────────────────────────────
function AppFooter() {
  const [showLegal, setShowLegal] = React.useState(null);
  const isMobile = useIsMobile();
  return (
    <>
      <div style={{position:'fixed', bottom:0, left:0, right:0, zIndex:9990,
        background:C.sidebar, borderTop:`1px solid ${C.border}`,
        padding: isMobile ? '8px 12px' : '8px 32px',
        display:'flex', alignItems:'center', justifyContent:'center', gap: isMobile ? 12 : 24,
        flexWrap:'wrap'}}>
        {[['terms','תקנון'],['privacy','פרטיות'],['accessibility','נגישות']].map(([tab,label])=>(
          <button key={tab} onClick={()=>setShowLegal(tab)}
            style={{background:'none', border:'none', color:C.sub, cursor:'pointer',
              fontSize: isMobile ? 10 : 12, letterSpacing:'0.04em', padding:0, opacity:0.7}}
            onMouseEnter={e=>e.currentTarget.style.opacity='1'}
            onMouseLeave={e=>e.currentTarget.style.opacity='0.7'}>
            {label}
          </button>
        ))}
        <span style={{color:C.sub, fontSize: isMobile ? 10 : 12, opacity:0.4}}>·</span>
        <span style={{color:C.sub, fontSize: isMobile ? 10 : 12, opacity:0.4}}>
          © {new Date().getFullYear()} 2BN Media
        </span>
      </div>
      {showLegal && <LegalModal tab={showLegal} onClose={()=>setShowLegal(null)} />}
    </>
  );
}

// ─── LEGAL DOCS (backed by the legal_documents table — see PlatformAdminDashboard for the editor) ──
const LEGAL_DOC_ORDER = ['terms','privacy','accessibility','dpa'];
const LEGAL_DOC_LABELS = { terms:'תקנון', privacy:'פרטיות', accessibility:'נגישות', dpa:'עיבוד נתונים' };

async function fetchLegalDocs() {
  const { data, error } = await sb.from('legal_documents')
    .select('id, title, sections, updated_label, status');
  if (error || !data) return null;
  const map = {};
  data.forEach(d => { map[d.id] = d; });
  return map;
}

// ─── LEGAL MODAL ──────────────────────────────────────────────────────────────
function LegalModal({ tab='terms', onClose }) {
  const [activeTab, setActiveTab] = React.useState(tab);
  const [docs, setDocs] = React.useState(null);
  const [loadError, setLoadError] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    fetchLegalDocs().then(map => {
      if (cancelled) return;
      if (!map) { setLoadError(true); return; }
      setDocs(map);
    });
    return () => { cancelled = true; };
  }, []);

  const activeDoc = docs && docs[activeTab];

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex',
      alignItems:'center', justifyContent:'center', zIndex:9500 }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.card, borderRadius:20, padding:28,
        width:660, maxWidth:'95vw', maxHeight:'88vh', display:'flex', flexDirection:'column',
        boxShadow:'0 20px 60px rgba(0,0,0,0.4)', animation:'fadeIn .2s ease' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
          <h3 style={{ color:C.text, fontSize:22, fontWeight:700 }}>מסמכים משפטיים</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:C.sub, fontSize:29, cursor:'pointer' }}>×</button>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:20, flexWrap:'wrap' }}>
          {LEGAL_DOC_ORDER.map(key => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ padding:'7px 20px', borderRadius:20, border:`1px solid ${C.border}`,
                background: activeTab===key ? C.primary : 'transparent',
                color: activeTab===key ? contrastText(C.primary) : C.text, cursor:'pointer', fontSize:15 }}>
              {(docs && docs[key] && docs[key].title) || LEGAL_DOC_LABELS[key]}
            </button>
          ))}
        </div>
        <div style={{ overflowY:'auto', flex:1 }}>
          {loadError && <div style={{ color:C.danger, fontSize:15 }}>לא ניתן לטעון את המסמכים כרגע. נסו שוב מאוחר יותר.</div>}
          {!loadError && !docs && (
            <div style={{ display:'flex', alignItems:'center', gap:10, color:C.sub, fontSize:15 }}>
              <Honeycomb/> טוען מסמכים...
            </div>
          )}
          {activeDoc && activeDoc.sections.map((item, i) => (
            <div key={i} style={{ marginBottom:16, padding:'14px 16px', background:C.bg, borderRadius:10 }}>
              <div style={{ fontWeight:700, color:C.text, fontSize:17, marginBottom:6 }}>{item.h}</div>
              <div style={{ color:C.sub, fontSize:15, lineHeight:1.75, whiteSpace:'pre-line' }}>{item.t}</div>
            </div>
          ))}
          {activeDoc && (
            <div style={{ color:C.sub, fontSize:12, opacity:0.7, marginTop:4 }}>
              {activeDoc.status ? `${activeDoc.status} · ` : ''}עודכן: {activeDoc.updated_label || '—'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Standalone, publicly-reachable page for each legal document (e.g. /privacy) — needed
// because external forms (like Google OAuth consent screen branding) require a real
// URL to link to, not a modal that only opens from inside the app.
function LegalPage({ docId, onBack }) {
  const [doc, setDoc] = React.useState(null);
  const [loadError, setLoadError] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    fetchLegalDocs().then(map => {
      if (cancelled) return;
      if (!map) { setLoadError(true); return; }
      setDoc(map[docId] || null);
    });
    return () => { cancelled = true; };
  }, [docId]);

  return (
    <div style={{ minHeight:'100vh', background:C.bg, direction:'rtl', padding:'40px 20px' }}>
      <div style={{ maxWidth:720, margin:'0 auto' }}>
        <button onClick={onBack} style={{ background:'none', border:`1px solid ${C.border}`, borderRadius:20,
          padding:'8px 20px', cursor:'pointer', color:C.text, fontSize:15, marginBottom:24 }}>
          ← חזרה למסך כניסה
        </button>
        <h1 style={{ color:C.text, fontSize:28, fontWeight:800, marginBottom:20 }}>{(doc && doc.title) || LEGAL_DOC_LABELS[docId]}</h1>
        {loadError && <div style={{ color:C.danger, fontSize:15 }}>לא ניתן לטעון את המסמך כרגע. נסו שוב מאוחר יותר.</div>}
        {!loadError && !doc && (
          <div style={{ display:'flex', alignItems:'center', gap:10, color:C.sub, fontSize:15 }}>
            <Honeycomb/> טוען מסמך...
          </div>
        )}
        {doc && doc.sections.map((item, i) => (
          <div key={i} style={{ marginBottom:16, padding:'14px 16px', background:C.card, borderRadius:10, border:`1px solid ${C.border}` }}>
            <div style={{ fontWeight:700, color:C.text, fontSize:17, marginBottom:6 }}>{item.h}</div>
            <div style={{ color:C.sub, fontSize:15, lineHeight:1.75, whiteSpace:'pre-line' }}>{item.t}</div>
          </div>
        ))}
        {doc && (
          <div style={{ color:C.sub, fontSize:12, opacity:0.7, marginTop:16 }}>
            {doc.status ? `${doc.status} · ` : ''}עודכן: {doc.updated_label || '—'}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────
// Animated constellation background (dots drifting slowly, thin lines connecting nearby
// ones) — same idea as the effect on 2bnmedia.com, reimplemented from scratch for the login page.
function SpaceDotsBackground() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const LINE_DIST = 140;
    const MOUSE_DIST = 160;
    let raf, particles = [], w = 0, h = 0;
    const mouse = { x:-9999, y:-9999 };

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      const count = Math.max(30, Math.floor((w*h)/18000));
      particles = Array.from({length:count}, () => {
        const depth = 0.25 + Math.random()*0.75; // 0=far/faint, 1=near/bright — gives the field a sense of depth
        return {
          x: Math.random()*w, y: Math.random()*h,
          vx: (Math.random()-0.5)*0.25*depth, vy: (Math.random()-0.5)*0.25*depth,
          gray: 90 + Math.random()*110, depth,
          radius: 0.6 + depth*1.3,
          opacity: 0.12 + depth*0.45,
        };
      });
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      ctx.clearRect(0,0,w,h);
      particles.forEach(p => {
        // Gently pushed away from the cursor, then drifts back to its own slow motion.
        const dx = p.x-mouse.x, dy = p.y-mouse.y;
        const distToMouse = Math.sqrt(dx*dx+dy*dy);
        if (distToMouse < MOUSE_DIST) {
          const force = (1 - distToMouse/MOUSE_DIST) * 0.6 * p.depth;
          p.x += (dx/(distToMouse||1)) * force;
          p.y += (dy/(distToMouse||1)) * force;
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x<0||p.x>w) p.vx*=-1;
        if (p.y<0||p.y>h) p.vy*=-1;
      });
      for (let i=0;i<particles.length;i++) {
        const a = particles[i];
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI*2);
        ctx.fillStyle = `rgba(${a.gray},${a.gray},${a.gray},${a.opacity})`;
        ctx.fill();
        for (let j=i+1;j<particles.length;j++) {
          const b = particles[j];
          const dx=a.x-b.x, dy=a.y-b.y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if (dist < LINE_DIST) {
            const g = (a.gray+b.gray)/2;
            const lineOpacity = (1-dist/LINE_DIST) * 0.18 * ((a.opacity+b.opacity)/2);
            ctx.beginPath();
            ctx.moveTo(a.x,a.y);
            ctx.lineTo(b.x,b.y);
            ctx.strokeStyle = `rgba(${g},${g},${g},${lineOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);
  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none' }}/>;
}

function LoginScreen({ onLogin, onSignup }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showLegal, setShowLegal] = React.useState(null);
  const [showPricing, setShowPricing] = React.useState(false);
  const [themeId, setThemeId] = React.useState('calqNoir');
  const [showTheme, setShowTheme] = React.useState(false);
  const isMobile = useIsMobile();

  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };

  // Demo accounts — role button just pre-fills the email; a real password is still required.
  const DEMO_EMAILS = { admin:'admin@tektona.io', arch:'dana@tektona.io', client:'david@levy.co.il' };
  const pickRole = (id) => { setEmail(DEMO_EMAILS[id]||''); setLoginError(''); };

  const handleLogin = async () => {
    if (!checkRateLimit()) { setLoginError('יותר מדי ניסיונות. נסה שוב בעוד דקה.'); return; }
    if (!email || !password) { setLoginError('נא למלא אימייל וסיסמה'); return; }
    setLoading(true); setLoginError('');
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) { setLoading(false); setLoginError('אימייל או סיסמה שגויים'); return; }
    const owner = await fetchPlatformAdmin(data.user.id);
    if (owner) { setLoading(false); onLogin(buildOwnerUser(owner, email)); return; }
    const member = await fetchOfficeMember(data.user.id);
    if (!member) { setLoading(false); setLoginError('המשתמש לא משויך לאף משרד'); await sb.auth.signOut(); return; }
    setLoading(false);
    onLogin(buildAppUser(member, email));
  };

  const roles = [
    { id:'admin',    label:'מנהל משרד',   desc:'גישה מלאה' },
    { id:'arch',     label:'אדריכל',        desc:'פרויקטים שהוקצו' },
    { id:'employee', label:'עובד משרד',    desc:'משימות שהוקצו' },
    { id:'client',   label:'לקוח',          desc:'פרויקט אישי' }
  ];

  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, direction:'rtl',
      display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>

      <SpaceDotsBackground/>

      {/* Calq-style top nav */}
      <div style={{ position:'absolute', top:0, left:0, right:0, zIndex:10,
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding: isMobile ? '16px 20px' : '24px 40px', borderBottom:`1px solid ${C.border}` }}>
        <img src={isLightColor(C.bg) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
          style={{ width: isMobile ? 90 : 'clamp(110px,16vw,240px)', height:'auto', display:'block' }}/>
        {!isMobile && (
          <div style={{ display:'flex', gap:28, alignItems:'center' }}>
            <button onClick={() => setShowPricing(true)}
              style={{ background:'none', border:'none', color:C.sub, cursor:'pointer',
                fontSize:16, letterSpacing:'0.05em', fontFamily:"'Space Grotesk',sans-serif" }}>
              תמחור
            </button>
            {canUse('themes') && (
              <button onClick={() => setShowTheme(true)}
                style={{ background:'none', border:`1px solid ${C.border}`, borderRadius:0,
                  padding:'6px 16px', color:C.sub, cursor:'pointer', fontSize:14,
                  letterSpacing:'0.06em' }}>
                THEME
              </button>
            )}
          </div>
        )}
      </div>

      {/* Scanline overlay */}
      <div className="scanline-overlay"/>

      {/* Data stream dots - decorative */}
      {[...Array(6)].map((_,i)=>(
        <div key={i} style={{
          position:'absolute', top:0, left:`${8+i*15}%`, width:1, height:'100%',
          background:`linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)`,
          animation:`dataStream ${3+i*.7}s ${i*.4}s linear infinite`, pointerEvents:'none', zIndex:0
        }}/>
      ))}

      {/* Center content */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center',
        justifyContent:'center', animation:'pageEnter .6s ease', padding:'0 20px', position:'relative', zIndex:1 }}>

        {/* Logo heading */}
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <img src={isLightColor(C.bg) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
            style={{ width:'clamp(220px,32vw,480px)', height:'auto', display:'block',
              margin:'0 auto 16px' }}/>
          <div style={{ width:40, height:1, background:C.sub, margin:'0 auto 20px' }}/>
          <div className="cursor" style={{ color:C.sub, fontSize:17, letterSpacing:'0.1em', textTransform:'uppercase' }}>
            ניהול משרד אדריכלים
          </div>
        </div>

        {/* Role buttons - calq style (pre-fill demo email only; password still required) */}
        <div style={{ display:'grid', gridTemplateColumns: 'repeat(2,1fr)',
          gap:8, marginBottom:24, width:'100%', maxWidth: isMobile ? '100%' : 460 }}>
          {roles.map(r => (
            <button key={r.id} onClick={() => pickRole(r.id)}
              style={{ padding: isMobile ? '12px 10px' : '14px 20px',
                border:`1px solid ${email===DEMO_EMAILS[r.id] ? C.text : C.border}`,
                background: email===DEMO_EMAILS[r.id] ? C.text : 'transparent',
                color: email===DEMO_EMAILS[r.id] ? C.bg : C.sub,
                cursor:'pointer', fontSize: isMobile ? 12 : 13, fontWeight:600, letterSpacing:'0.04em',
                fontFamily:"'Space Grotesk',sans-serif", borderRadius:0,
                transition:'all .2s ease' }}>
              <div style={{ marginBottom:2 }}>{r.label}</div>
              <div style={{ fontSize:12, opacity:0.6, fontWeight:400 }}>{r.desc}</div>
            </button>
          ))}
        </div>

        {/* Email + password */}
        <div style={{ marginBottom:20, width:'100%', maxWidth:340, display:'flex', flexDirection:'column', gap:10 }}>
          <input type="email" value={email} onChange={e=>{setEmail(e.target.value);setLoginError('');}}
            placeholder="אימייל"
            style={{ width:'100%', padding:'13px 18px', background:C.inputBg,
              border:`1px solid ${C.border}`, borderRadius:0, color:C.text,
              fontSize:16, outline:'none', fontFamily:"'Space Grotesk',sans-serif",
              textAlign:'right', direction:'ltr' }}
            onKeyDown={e=>{if(e.key==='Enter')handleLogin();}}/>
          <input type="password" value={password} onChange={e=>{setPassword(e.target.value);setLoginError('');}}
            placeholder="סיסמה"
            style={{ width:'100%', padding:'13px 18px', background:C.inputBg,
              border:`1px solid ${C.border}`, borderRadius:0, color:C.text,
              fontSize:16, outline:'none', fontFamily:"'Space Grotesk',sans-serif",
              textAlign:'right' }}
            onKeyDown={e=>{if(e.key==='Enter')handleLogin();}}/>
          {loginError && <div style={{ color:C.danger, fontSize:14, textAlign:'center' }}>{loginError}</div>}
        </div>

        {/* Enter button */}
        <button onClick={handleLogin} className="btn-pulse" disabled={loading}
          style={{ padding:'16px 56px', background:C.text, color:C.bg, border:'none',
            cursor: loading ? 'wait' : 'pointer', fontSize:17, fontWeight:700, letterSpacing:'0.1em',
            fontFamily:"'Space Grotesk',sans-serif", borderRadius:0, opacity: loading?0.7:1 }}>
          {loading ? '...' : 'ENTER →'}
        </button>

        <button onClick={onSignup} style={{ marginTop:24, background:'none', border:'none',
          color:C.sub, cursor:'pointer', fontSize:14, textDecoration:'underline',
          fontFamily:"'Space Grotesk',sans-serif" }}>
          משרד אדריכלים? הצטרפו אלינו
        </button>
      </div>

      {/* Footer */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, zIndex:2, borderTop:`1px solid ${C.border}`,
        padding:'10px 24px', display:'flex', alignItems:'center', justifyContent:'center', gap:20 }}>
        {[['terms','תקנון אתר'],['privacy','מדיניות פרטיות'],['accessibility','הצהרת נגישות']].map(([tab,label])=>(
          <button key={tab} onClick={()=>setShowLegal(tab)}
            style={{ background:'none', border:'none', color:C.sub, cursor:'pointer',
              fontSize:11, letterSpacing:'0.04em', opacity:0.7, padding:0 }}
            onMouseEnter={e=>e.currentTarget.style.opacity='1'}
            onMouseLeave={e=>e.currentTarget.style.opacity='0.7'}>
            {label}
          </button>
        ))}
        <span style={{ color:C.sub, fontSize:11, opacity:0.4 }}>•</span>
        <span style={{ color:C.sub, fontSize:11, opacity:0.4 }}>© {new Date().getFullYear()} 2BN Media</span>
      </div>

      {showLegal && <LegalModal tab={showLegal} onClose={() => setShowLegal(null)} />}
      {showPricing && <PricingScreen onBack={() => setShowPricing(false)} />}
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={() => setShowTheme(false)} />}
    </div>
  );
}

// ─── FRANCHISE SIGNUP SCREEN ────────────────────────────────────────────────────
// Public entry point for architecture offices joining as franchisees: sign in with
// Google, fill in office details, then wait for the platform owner's approval.
function SignupScreen({ googleUser, onSubmitted, onCancel }) {
  const [officeName, setOfficeName] = React.useState('');
  const [contactName, setContactName] = React.useState(googleUser?.name || '');
  const [phone, setPhone] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const isMobile = useIsMobile();

  const handleGoogleSignup = async () => {
    await sb.auth.signInWithOAuth({ provider:'google', options:{ redirectTo: window.location.origin + '/signup' } });
  };

  const handleSubmit = async () => {
    if (!officeName || !contactName || !phone) { setError('נא למלא שם משרד, שם איש קשר וטלפון'); return; }
    setLoading(true); setError('');
    try {
      const { data:{ session } } = await sb.auth.getSession();
      const res = await fetch('/api/signup-office', {
        method:'POST',
        headers: { 'Content-Type':'application/json', 'Authorization':'Bearer '+session.access_token },
        body: JSON.stringify({ name:officeName, contactName, phone })
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'שגיאה בשליחת ההרשמה');
      setSubmitted(true);
    } catch(e) { setError(e.message); }
    setLoading(false);
  };

  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, direction:'rtl',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      padding:'0 20px', position:'relative' }}>
      <img src={isLightColor(C.bg) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
        style={{ width:'clamp(160px,22vw,300px)', height:'auto', display:'block', margin:'0 auto 32px' }}/>

      {submitted ? (
        <div style={{ textAlign:'center', maxWidth:420 }}>
          <div style={{ fontSize:44, marginBottom:16 }}>⏳</div>
          <div style={{ fontSize:22, fontWeight:700, color:C.text, marginBottom:8 }}>הבקשה נשלחה בהצלחה</div>
          <div style={{ color:C.sub, fontSize:16, marginBottom:24 }}>
            נבדוק את הבקשה ונאשר אותה לאחר סגירת התשלום. תקבלו גישה מלאה עם האישור.
          </div>
          <Btn onClick={onSubmitted}>המשך</Btn>
        </div>
      ) : !googleUser ? (
        <div style={{ textAlign:'center', maxWidth:420, width:'100%' }}>
          <div style={{ fontSize:22, fontWeight:700, color:C.text, marginBottom:8 }}>הצטרפות למערכת Tektona</div>
          <div style={{ color:C.sub, fontSize:16, marginBottom:28, lineHeight:1.6 }}>
            משרד אדריכלים? הירשמו ומלאו פרטי משרד, ואנו נדאג לחזור אליכם בהקדם.
          </div>
          <button onClick={handleGoogleSignup}
            style={{ width:'100%', padding:'14px 20px', background:C.text, color:C.bg, border:'none',
              cursor:'pointer', fontSize:16, fontWeight:700, letterSpacing:'0.04em',
              fontFamily:"'Space Grotesk',sans-serif", borderRadius:0, marginBottom:14 }}>
            הרשמה עם Google
          </button>
          <button onClick={onCancel}
            style={{ background:'none', border:'none', color:C.sub, cursor:'pointer', fontSize:14, textDecoration:'underline' }}>
            חזרה למסך כניסה
          </button>
        </div>
      ) : (
        <div style={{ width:'100%', maxWidth:380, display:'flex', flexDirection:'column', gap:12 }}>
          <div style={{ fontSize:20, fontWeight:700, color:C.text, marginBottom:4, textAlign:'center' }}>פרטי המשרד</div>
          <div style={{ color:C.sub, fontSize:14, marginBottom:10, textAlign:'center' }}>מחוברים כ-{googleUser.email}</div>
          <Input label="שם המשרד" value={officeName} onChange={setOfficeName} required/>
          <Input label="שם איש קשר" value={contactName} onChange={setContactName} required/>
          <Input label="טלפון" value={phone} onChange={setPhone} required/>
          {error && <div style={{ color:C.danger, fontSize:14, textAlign:'center' }}>{error}</div>}
          <button onClick={handleSubmit} disabled={loading}
            style={{ padding:'14px 20px', background:C.text, color:C.bg, border:'none',
              cursor: loading?'wait':'pointer', fontSize:16, fontWeight:700, letterSpacing:'0.04em',
              fontFamily:"'Space Grotesk',sans-serif", borderRadius:0, opacity:loading?0.7:1, marginTop:8 }}>
            {loading ? '...' : 'שליחת בקשת הצטרפות'}
          </button>
          <button onClick={onCancel}
            style={{ background:'none', border:'none', color:C.sub, cursor:'pointer', fontSize:14, textDecoration:'underline', marginTop:4 }}>
            ביטול
          </button>
        </div>
      )}
    </div>
  );
}

// ─── PRICING SCREEN ───────────────────────────────────────────────────────────
function PricingScreen({ onBack }) {
  const [annual, setAnnual] = React.useState(true);
  const plans = [
    { id:'starter', name:'Starter', price:890, projects:5, extra:99,
      features:['פורטל לקוח','ציר זמן','מסמכים','גלריה','אישורים','הודעות','פגישות','הצעות מחיר','חתימה דיגיטלית','תשלומים','Punch List','תקציר','RFI','שיתוף','תבניות'] },
    { id:'pro', name:'Pro', price:1690, projects:15, extra:79, popular:true,
      features:['הכל ב-Starter','AI Agent','משימות','דוחות','ערכות נושא','עדיפות תמיכה','Client Success'] },
    { id:'studio', name:'Studio', price:2990, projects:30, extra:59,
      features:['הכל ב-Pro','White Label','BI Reports','API גישה','שעות עבודה'] }
  ];
  return (
    <div style={{ position:'fixed', inset:0, background:C.bg, overflowY:'auto',
      zIndex:9000, direction:'rtl', padding:'40px 20px' }}>
      <button onClick={onBack} style={{ position:'fixed', top:20, right:20,
        background:C.card, border:`1px solid ${C.border}`, borderRadius:20,
        padding:'8px 20px', cursor:'pointer', color:C.text, fontSize:16 }}>
        ← חזור
      </button>
      <div style={{ textAlign:'center', marginBottom:40, maxWidth:700, margin:'0 auto 40px' }}>
        <h1 style={{ fontSize:38, fontWeight:800, color:C.text, marginBottom:12 }}>תמחור שקוף</h1>
        <p style={{ color:C.sub, fontSize:19 }}>בחר את המסלול המתאים למשרדך</p>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginTop:20 }}>
          <span style={{ color:C.sub, fontSize:17 }}>חודשי</span>
          <button onClick={() => setAnnual(a=>!a)}
            style={{ width:48, height:26, borderRadius:13, border:'none',
              background: annual ? C.primary : C.border, cursor:'pointer', position:'relative' }}>
            <div style={{ position:'absolute', top:3, transition:'left .2s',
              left: annual ? 4 : 24, width:20, height:20, borderRadius:10, background:'#fff' }}/>
          </button>
          <span style={{ color:C.sub, fontSize:17 }}>שנתי <Badge text="15% הנחה" color={C.success}/></span>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
        gap:20, maxWidth:960, margin:'0 auto' }}>
        {plans.map(pl => {
          const price = annual ? Math.round(pl.price * 0.85) : pl.price;
          return (
            <div key={pl.id} style={{ background:C.card, borderRadius:20, padding:28,
              border: pl.popular ? `2px solid ${C.primary}` : `1px solid ${C.border}`,
              position:'relative' }}>
              {pl.popular && (
                <div style={{ position:'absolute', top:-12, right:20,
                  background:C.primary, color:contrastText(C.primary), fontSize:13, fontWeight:700,
                  padding:'4px 14px', borderRadius:20 }}>הכי פופולרי</div>
              )}
              <div style={{ fontSize:26, fontWeight:800, color:C.text, marginBottom:6 }}>{pl.name}</div>
              <div style={{ marginBottom:4 }}>
                <span style={{ fontSize:43, fontWeight:800, color:C.primary }}>₪{price.toLocaleString()}</span>
                <span style={{ color:C.sub, fontSize:17 }}>/חודש</span>
              </div>
              <div style={{ color:C.sub, fontSize:16, marginBottom:4 }}>עד {pl.projects} פרויקטים</div>
              <div style={{ color:C.sub, fontSize:16, marginBottom:20 }}>+ ₪{pl.extra} לפרויקט נוסף</div>
              <Btn style={{ width:'100%', marginBottom:20 }} variant={pl.popular?'primary':'ghost'}>
                {pl.popular ? 'התחל עכשיו' : 'בחר מסלול'}
              </Btn>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8 }}>
                {pl.features.map((f,i) => (
                  <li key={i} style={{ fontSize:16, color:C.text, display:'flex', gap:8, alignItems:'center' }}>
                    <span style={{ color:C.success, fontWeight:700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign:'center', marginTop:40, color:C.sub, fontSize:16 }}>
        כל המסלולים כוללים תמיכה טכנית, גיבוי אוטומטי ו-SSL. אין חוזה מחייב.
      </div>
    </div>
  );
}

// ─── SYSTEM DASHBOARD ─────────────────────────────────────────────────────────
function SystemDashboard({ data, setData, user, officeId, onBack, onGoHome = onBack, onOpenProject, onUsers, onFilterProjects }) {
  const isMobile = useIsMobile();
  const logoRef = React.useRef();
  const [officeLogo, setOfficeLogo] = React.useState(OFFICE_PLAN.logo);
  const [slogan, setSlogan] = React.useState(OFFICE_PLAN.slogan || '');
  const [sloganSaved, setSloganSaved] = React.useState(false);
  const [showNewProject, setShowNewProject] = React.useState(false);
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('lightStone');
  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };
  const [form, setForm] = React.useState({name:'',address:'',clientName:'',architectName:'',architectId:null,clientIds:[],employeeIds:[],budget:'',area:'',startDate:'',endDate:'',description:'',template:'villa'});
  const addProject = () => {
    if (!form.name) return;
    const np = {
      ...form, id:'p'+uid(), status:'planning', currentPhase:1, progress:0, createdAt:today(),
      budget:Number(form.budget)||0, area:Number(form.area)||0, coverImage:null,
      phases:PHASES.map((p,i)=>({phaseId:p.id,status:i===0?'active':'pending',completedDate:null,notes:''})),
      documents:[], quotes:[], approvals:[], messages:[], gallery:[], payments:[],
      punchList:[], rfis:[], brief:{answers:{},submitted:false,savedAt:null,submittedBy:null},
      tasks:[], dailyReports:[], meetings:[], customTasks:[], changeRequests:[], decisionLog:[],
      clientProfile:{healthScore:80,paymentReliability:80,approvalSpeed:80,changeFrequency:10,tags:[],notes:'',history:[]}
    };
    setData(d=>({...d,projects:[...(d.projects||[]),np]}));
    setForm({name:'',address:'',clientName:'',architectName:'',architectId:null,clientIds:[],employeeIds:[],budget:'',area:'',startDate:'',endDate:'',description:'',template:'villa'});
    setShowNewProject(false);
  };
  const handleLogoUpload = (e) => {
    const file = e.target.files[0]; if (!file) return;
    readFileAsDataURL(file, async (dataUrl) => {
      OFFICE_PLAN.logo = dataUrl;
      setOfficeLogo(dataUrl);
      await sb.from('offices').update({ logo: dataUrl }).eq('id', officeId);
    });
  };
  const removeLogo = async () => {
    OFFICE_PLAN.logo = null; setOfficeLogo(null);
    await sb.from('offices').update({ logo: null }).eq('id', officeId);
  };
  const saveSlogan = async () => {
    OFFICE_PLAN.slogan = slogan;
    await sb.from('offices').update({ slogan }).eq('id', officeId);
    setSloganSaved(true); setTimeout(()=>setSloganSaved(false), 2000);
  };
  const projects = data.projects || [];
  const active = projects.filter(p=>p.status==='active').length;
  const completed = projects.filter(p=>p.status==='completed').length;
  const totalRevenue = projects.reduce((s,p) => s + (p.payments||[]).filter(py=>py.status==='paid').reduce((a,py)=>a+py.amount,0), 0);
  const pendingPayments = projects.reduce((s,p) => s + (p.payments||[]).filter(py=>py.status==='pending').reduce((a,py)=>a+py.amount,0), 0);
  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, direction:'rtl',
      display:'flex', flexDirection:'column' }}>
      {C.archBg && <ArchBackground />}
      <AppNavBar onGoHome={onGoHome} title="ניהול מערכת" subtitle={OFFICE_PLAN.officeName} onBack={onBack}
        onOpenTheme={()=>setShowTheme(true)}
        rightContent={<NotificationBell user={user} onOpenProject={onOpenProject}/>}/>
      <div style={{ flex:1, overflowY:'auto', padding: isMobile ? 12 : 18, paddingBottom:32, position:'relative', zIndex:1 }}>
        {/* Stats + financials — circles centered, financials in one row underneath */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18,
          marginBottom:14, background:`linear-gradient(135deg,${C.card},${C.bg})`,
          padding:'18px', borderRadius:14, border:`1px solid ${C.border}` }}>
          <div style={{ display:'flex', gap:isMobile?16:26, flexWrap:'wrap', justifyContent:'center' }}>
            <SVGCircle value={projects.length} max={OFFICE_PLAN.plan==='studio'?30:OFFICE_PLAN.plan==='pro'?15:5}
              color={C.primary} label="סה״כ פרויקטים" sublabel={`/${OFFICE_PLAN.plan==='studio'?30:OFFICE_PLAN.plan==='pro'?15:5}`} size={176}/>
            <div onClick={()=>onFilterProjects && onFilterProjects('active')} style={{cursor:onFilterProjects?'pointer':'default'}} title="הצג פרויקטים פעילים">
              <SVGCircle value={active} max={projects.length||1} color={C.success} label="פעילים" sublabel="active" size={176}/>
            </div>
            <div onClick={()=>onFilterProjects && onFilterProjects('completed')} style={{cursor:onFilterProjects?'pointer':'default'}} title="הצג פרויקטים שהושלמו">
              <SVGCircle value={completed} max={projects.length||1} color={C.info} label="הושלמו" sublabel="done" size={176}/>
            </div>
            <div onClick={onUsers} style={{cursor:onUsers?'pointer':'default'}} title="הצג משתמשים">
              <SVGCircle value={(data.users||MOCK_USERS).length} max={20} color={C.ai} label="משתמשים" sublabel="users" size={176}/>
            </div>
          </div>
          <div style={{ display:'flex', gap:isMobile?24:48, flexWrap:'wrap', justifyContent:'center' }}>
            <div style={{ display:'flex', alignItems:'baseline', gap:8 }}>
              <span style={{ color:C.sub, fontSize:13 }}>הכנסות שהתקבלו</span>
              <span style={{ fontSize:22, fontWeight:800, color:C.success }}>{fmtCurrency(totalRevenue)}</span>
            </div>
            <div style={{ display:'flex', alignItems:'baseline', gap:8 }}>
              <span style={{ color:C.sub, fontSize:13 }}>תשלומים ממתינים</span>
              <span style={{ fontSize:22, fontWeight:800, color:C.warning }}>{fmtCurrency(pendingPayments)}</span>
            </div>
          </div>
        </div>
        {/* Branding — logo + slogan side by side */}
        <div style={{background:C.card,borderRadius:14,border:`1px solid ${C.border}`,marginBottom:14,
          display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', overflow:'hidden'}}>
          <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap',padding:14,
            borderBottom: isMobile ? `1px solid ${C.border}` : 'none',
            borderInlineEnd: isMobile ? 'none' : `1px solid ${C.border}`}}>
            <div style={{minWidth:110}}>
              <div style={{fontWeight:700,color:C.text,fontSize:14}}>🏢 לוגו (White Label)</div>
            </div>
            {officeLogo && <img src={officeLogo} alt="office logo" style={{height:28,width:'auto',borderRadius:5}}/>}
            <input ref={logoRef} type="file" accept="image/*" onChange={handleLogoUpload} style={{display:'none'}}/>
            <Btn size="sm" variant="ghost" onClick={()=>logoRef.current?.click()}>
              {officeLogo ? '🔄 החלף' : '📤 העלה'}
            </Btn>
            {officeLogo && <Btn size="sm" variant="ghost" onClick={removeLogo}>הסר</Btn>}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap',padding:14}}>
            <div style={{minWidth:90}}>
              <div style={{fontWeight:700,color:C.text,fontSize:14}}>💬 סלוגן</div>
            </div>
            <input value={slogan} onChange={e=>setSlogan(e.target.value)} placeholder="הסלוגן שלכם..."
              style={{flex:1,minWidth:120,padding:'6px 10px',borderRadius:7,border:`1px solid ${C.border}`,
                background:C.inputBg,color:C.text,fontSize:14,outline:'none',direction:'rtl',fontFamily:'Heebo,Arial,sans-serif'}}/>
            <Btn size="sm" onClick={saveSlogan}>{sloganSaved?'✓ נשמר':'שמור'}</Btn>
          </div>
        </div>
        {/* Projects list */}
        <div style={{ background:C.card, borderRadius:14, border:`1px solid ${C.border}`, overflow:'hidden' }}>
          <div style={{ padding:'12px 16px', borderBottom:`1px solid ${C.border}`,
            display:'flex', alignItems:'center', justifyContent:'space-between', gap:10, flexWrap:'wrap' }}>
            <h3 style={{ color:C.text, fontSize:16, fontWeight:700 }}>כל הפרויקטים</h3>
            <div style={{ display:'flex', gap:8 }}>
              <Btn size="sm" variant="ghost" onClick={onBack}>📁 ניהול פרויקטים קיימים</Btn>
              <Btn size="sm" onClick={()=>setShowNewProject(true)}>+ פרויקט חדש</Btn>
            </div>
          </div>
          {projects.map(p => (
            <div key={p.id} onClick={()=>onOpenProject && onOpenProject(p.id)}
              style={{ padding:'14px 20px', borderBottom:`1px solid ${C.border}`,
              display:'flex', justifyContent:'space-between', alignItems:'center',
              cursor: onOpenProject ? 'pointer' : 'default' }}>
              <div>
                <div style={{ fontWeight:600, color:C.text, fontSize:17 }}>{p.name}</div>
                <div style={{ color:C.sub, fontSize:14 }}>{p.clientName} · {p.architectName}</div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:78, textAlign:'center' }}>
                  <div style={{ fontSize:10, color:C.sub, opacity:0.7 }}>נוסף</div>
                  <div style={{ fontSize:13, color:C.sub }}>{fmtDate(p.createdAt || p.startDate)}</div>
                </div>
                <div style={{ width:80, height:6, background:C.border, borderRadius:3, overflow:'hidden' }}>
                  <div style={{ width:p.progress+'%', height:'100%', background:C.primary, borderRadius:3 }}/>
                </div>
                <span style={{ fontSize:14, color:C.sub, width:36 }}>{p.progress}%</span>
                <StatusBadge status={p.status}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showNewProject && (
        <Modal title="פרויקט חדש" onClose={()=>setShowNewProject(false)} width={580}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <Input label="שם הפרויקט" value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} required style={{gridColumn:'1/-1'}}/>
            <Input label="כתובת" value={form.address} onChange={v=>setForm(f=>({...f,address:v}))} style={{gridColumn:'1/-1'}}/>
            <div style={{gridColumn:'1/-1'}}>
              <ProjectAccessEditor officeId={officeId} architectId={form.architectId} clientIds={form.clientIds}
                employeeIds={form.employeeIds}
                onChange={patch=>setForm(f=>({...f,...patch}))}/>
            </div>
            <Input label="תקציב (₪)" type="number" value={form.budget} onChange={v=>setForm(f=>({...f,budget:v}))}/>
            <Input label={'שטח (מ"ר)'} type="number" value={form.area} onChange={v=>setForm(f=>({...f,area:v}))}/>
            <Input label="תחילת פרויקט" type="date" value={form.startDate} onChange={v=>setForm(f=>({...f,startDate:v}))}/>
            <Input label="סיום צפוי" type="date" value={form.endDate} onChange={v=>setForm(f=>({...f,endDate:v}))}/>
            <Select label="תבנית" value={form.template} onChange={v=>setForm(f=>({...f,template:v}))} style={{gridColumn:'1/-1'}}
              options={[{value:'villa',label:'🏡 וילה / בית פרטי'},{value:'renovation',label:'🔧 שיפוץ'},{value:'commercial',label:'🏢 מסחרי'},{value:'addition',label:'➕ תוספת בנייה'}]}/>
            <div style={{gridColumn:'1/-1'}}>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:4}}>תיאור</label>
              <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}
                rows={3} placeholder="תיאור קצר של הפרויקט..."
                style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                  fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            </div>
          </div>
          <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:16}}>
            <Btn onClick={()=>setShowNewProject(false)} variant="ghost">ביטול</Btn>
            <Btn onClick={addProject}>צור פרויקט</Btn>
          </div>
        </Modal>
      )}
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={()=>setShowTheme(false)}/>}
    </div>
  );
}

// ─── USERS SCREEN ─────────────────────────────────────────────────────────────
function UsersScreen({ data, setData, officeId, onBack, onGoHome = onBack }) {
  const isMobile = useIsMobile();
  const [showInvite, setShowInvite] = React.useState(false);
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('lightStone');
  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };
  const [form, setForm] = React.useState({ name:'', email:'', role:'arch' });
  const [inviteError, setInviteError] = React.useState('');
  const [inviting, setInviting] = React.useState(false);
  const users = data.users || MOCK_USERS;
  const invite = async () => {
    if (!form.name || !form.email) return;
    setInviting(true); setInviteError('');
    try {
      const { data:{ session } } = await sb.auth.getSession();
      const res = await fetch('/api/invite-user', {
        method:'POST', headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+session.access_token},
        body: JSON.stringify({ officeId, name:form.name, email:form.email, role:form.role })
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'שגיאה בהזמנת המשתמש');
      const nu = { id:'u'+uid(), name:form.name, email:form.email, role:form.role, active:true, avatar:form.name[0], projects:[], aiEnabled:false };
      setData(d=>({...d, users:[...(d.users||MOCK_USERS), nu]}));
      setForm({name:'',email:'',role:'arch'}); setShowInvite(false);
    } catch(e) {
      setInviteError(e.message);
    }
    setInviting(false);
  };
  const toggleAI = (uid) => setData(d=>({...d, users:(d.users||MOCK_USERS).map(u=>u.id===uid?{...u,aiEnabled:!u.aiEnabled}:u)}));
  const roleLabel = { admin:'מנהל', arch:'אדריכל', employee:'עובד משרד', client:'לקוח' };
  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',display:'flex',flexDirection:'column'}}>
      <AppNavBar onGoHome={onGoHome} title="ניהול משתמשים" subtitle={`${users.length} משתמשים`} onBack={onBack}
        onOpenTheme={()=>setShowTheme(true)}
        rightContent={<Btn onClick={()=>setShowInvite(true)} size="sm">+ הזמן</Btn>}/>
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={()=>setShowTheme(false)}/>}
      <div style={{flex:1,overflowY:'auto',padding: isMobile ? 16 : 28, paddingBottom:56}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:16}}>
          {users.map(u=>(
            <div key={u.id} style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`}}>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:C.primary,color:contrastText(C.primary),
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,fontWeight:700}}>
                  {u.avatar}
                </div>
                <div>
                  <div style={{fontWeight:700,color:C.text}}>{u.name}</div>
                  <div style={{fontSize:14,color:C.sub}}>{u.email}</div>
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:u.role==='arch'?10:0}}>
                <Badge text={roleLabel[u.role]||u.role} color={u.role==='admin'?C.danger:u.role==='arch'?C.primary:C.info}/>
                <Badge text={u.active?'פעיל':'לא פעיל'} color={u.active?C.success:C.sub}/>
              </div>
              {u.role==='arch' && (
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',
                  padding:'8px 10px',background:C.bg,borderRadius:8,marginTop:4}}>
                  <span style={{fontSize:13,color:C.sub}}>🤖 AI Agent</span>
                  <button onClick={()=>toggleAI(u.id)}
                    style={{width:38,height:20,borderRadius:10,border:'none',cursor:'pointer',position:'relative',
                      background:u.aiEnabled?C.ai:C.border,transition:'background .2s'}}>
                    <div style={{position:'absolute',top:2,left:u.aiEnabled?20:2,width:16,height:16,
                      borderRadius:8,background:'#fff',transition:'left .2s'}}/>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showInvite && (
        <Modal title="הזמנת משתמש חדש" onClose={()=>setShowInvite(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            <Input label="שם מלא" value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} required/>
            <Input label="אימייל" type="email" value={form.email} onChange={v=>setForm(f=>({...f,email:v}))} required/>
            <Select label="תפקיד" value={form.role} onChange={v=>setForm(f=>({...f,role:v}))}
              options={[{value:'arch',label:'אדריכל'},{value:'employee',label:'עובד משרד'},{value:'client',label:'לקוח'},{value:'admin',label:'מנהל'}]}/>
            {inviteError && <div style={{color:C.danger,fontSize:14}}>{inviteError}</div>}
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowInvite(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={invite} disabled={inviting}>{inviting?'שולח...':'שלח הזמנה'}</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── BACKUP PANEL ─────────────────────────────────────────────────────────────
function BackupPanel({ data, setData, onBack, onGoHome = onBack }) {
  const isMobile = useIsMobile();
  const [msg, setMsg] = React.useState('');
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('lightStone');
  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };
  const inputRef = React.useRef();
  const doExport = () => { exportData(data); setMsg('גיבוי יוצא בהצלחה!'); };
  const doImport = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try { const imported = JSON.parse(ev.target.result); setData(imported); setMsg('נתונים יובאו בהצלחה!'); }
      catch { setMsg('שגיאה: קובץ לא תקין'); }
    };
    reader.readAsText(file);
  };
  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',display:'flex',flexDirection:'column'}}>
      <AppNavBar onGoHome={onGoHome} title="גיבוי ושחזור" onBack={onBack} onOpenTheme={()=>setShowTheme(true)}/>
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={()=>setShowTheme(false)}/>}
      <div style={{flex:1,overflowY:'auto',padding: isMobile ? 16 : 28, paddingBottom:56}}>
        <h2 style={{color:C.text,fontSize: isMobile ? 20 : 24,fontWeight:800,marginBottom:12}}>💾 גיבוי ושחזור</h2>
        <div style={{background:C.success+'15',border:`1px solid ${C.success}`,borderRadius:10,padding:'8px 16px',marginBottom:16,
          display:'flex',alignItems:'center',gap:8}}>
          <span style={{color:C.success,fontSize:15}}>✓ הנתונים נשמרים באופן שוטף במסד נתונים מרכזי (Supabase). היצוא/יבוא כאן הוא כלי גיבוי ידני נוסף בלבד.</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',gap:20,maxWidth:700}}>
        <div style={{background:C.card,borderRadius:16,padding:24,border:`1px solid ${C.border}`}}>
          <div style={{fontSize:38,marginBottom:12}}>📤</div>
          <h3 style={{color:C.text,fontSize:19,fontWeight:700,marginBottom:8}}>יצוא נתונים</h3>
          <p style={{color:C.sub,fontSize:16,marginBottom:16,lineHeight:1.6}}>הורד קובץ JSON עם כל נתוני המשרד.</p>
          <Btn onClick={doExport} style={{width:'100%'}}>יצוא גיבוי</Btn>
        </div>
        <div style={{background:C.card,borderRadius:16,padding:24,border:`1px solid ${C.border}`}}>
          <div style={{fontSize:38,marginBottom:12}}>📥</div>
          <h3 style={{color:C.text,fontSize:19,fontWeight:700,marginBottom:8}}>יבוא נתונים</h3>
          <p style={{color:C.sub,fontSize:16,marginBottom:16,lineHeight:1.6}}>שחזר נתונים מקובץ גיבוי. הנתונים הנוכחיים יוחלפו.</p>
          <input ref={inputRef} type="file" accept=".json" onChange={doImport} style={{display:'none'}}/>
          <Btn onClick={()=>inputRef.current?.click()} variant="ghost" style={{width:'100%'}}>בחר קובץ גיבוי</Btn>
        </div>
      </div>
      {msg && <div style={{marginTop:16,padding:'12px 16px',borderRadius:10,
        background:msg.includes('שגיאה')?C.danger+'22':C.success+'22',
        color:msg.includes('שגיאה')?C.danger:C.success,fontSize:17}}>{msg}</div>}
      </div>
    </div>
  );
}

// ─── SHARE PANEL ─────────────────────────────────────────────────────────────
function SharePanel({ project, onClose }) {
  const sd = {name:project.name,client:project.clientName,progress:project.progress,status:project.status};
  const url = window.location.origin+'?share='+encodeURIComponent(JSON.stringify(sd));
  const [copied,setCopied] = React.useState(false);
  const copy = ()=>{ navigator.clipboard.writeText(url).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);}); };
  return (
    <Modal title="שיתוף פרויקט" onClose={onClose} width={480}>
      <p style={{color:C.sub,fontSize:16,marginBottom:16,lineHeight:1.7}}>
        קישור לצפייה בלבד עבור הלקוח. ללא אפשרות עריכה.
      </p>
      <div style={{background:C.bg,borderRadius:10,padding:'12px 14px',marginBottom:16,
        fontSize:14,color:C.sub,wordBreak:'break-all',fontFamily:'monospace'}}>{url.slice(0,80)}...</div>
      <Btn onClick={copy} style={{width:'100%'}}>{copied?'✓ הועתק!':'📋 העתק קישור'}</Btn>
    </Modal>
  );
}

// ─── PROJECT ACCESS EDITOR (real architect/client assignment, not name-matching) ──
function ProjectAccessEditor({ officeId, architectId, clientIds, employeeIds, onChange }) {
  const [members, setMembers] = React.useState(null);
  const [showInvite, setShowInvite] = React.useState(false);
  const [inviteForm, setInviteForm] = React.useState({name:'',email:''});
  const [inviting, setInviting] = React.useState(false);
  const [inviteError, setInviteError] = React.useState('');

  const load = async () => {
    const { data } = await sb.from('office_members').select('id,role,display_name').eq('office_id', officeId);
    setMembers(data||[]);
  };
  React.useEffect(()=>{ load(); },[officeId]);

  const archs = (members||[]).filter(m=>m.role==='arch');
  const clients = (members||[]).filter(m=>m.role==='client');
  const employees = (members||[]).filter(m=>m.role==='employee');

  const setArchitect = (id) => {
    const m = archs.find(a=>a.id===id);
    onChange({ architectId: id || null, architectName: m ? m.display_name : '' });
  };
  const toggleClient = (id) => {
    const cur = clientIds || [];
    const next = cur.includes(id) ? cur.filter(c=>c!==id) : [...cur, id];
    const names = clients.filter(c=>next.includes(c.id)).map(c=>c.display_name).join(', ');
    onChange({ clientIds: next, clientName: names });
  };
  const toggleEmployee = (id) => {
    const cur = employeeIds || [];
    const next = cur.includes(id) ? cur.filter(c=>c!==id) : [...cur, id];
    onChange({ employeeIds: next });
  };

  const inviteClient = async () => {
    if (!inviteForm.name || !inviteForm.email) return;
    setInviting(true); setInviteError('');
    try {
      const { data: { session } } = await sb.auth.getSession();
      const res = await fetch('/api/invite-user', {
        method:'POST', headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+session.access_token},
        body: JSON.stringify({ officeId, name: inviteForm.name, email: inviteForm.email, role:'client' })
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'שגיאה בהזמנת הלקוח');
      await load();
      setInviteForm({name:'',email:''}); setShowInvite(false);
    } catch(e) { setInviteError(e.message); }
    setInviting(false);
  };

  if (members===null) return <div style={{display:'flex',alignItems:'center',gap:10,color:C.sub,fontSize:14}}><Honeycomb/> טוען...</div>;

  return (
    <div style={{display:'flex',flexDirection:'column',gap:16}}>
      <div>
        <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>אדריכל אחראי</label>
        {archs.length===0
          ? <div style={{color:C.sub,fontSize:14}}>אין אדריכלים במשרד — הזמן דרך "ניהול משתמשים"</div>
          : (
            <select value={architectId||''} onChange={e=>setArchitect(e.target.value)}
              style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                background:C.inputBg,color:C.text,fontSize:16,outline:'none'}}>
              <option value="">בחר אדריכל...</option>
              {archs.map(a=><option key={a.id} value={a.id}>{a.display_name}</option>)}
            </select>
          )}
      </div>
      <div>
        <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>לקוחות</label>
        {clients.map(c=>(
          <label key={c.id} style={{display:'flex',alignItems:'center',gap:8,padding:'4px 0',color:C.text,fontSize:16,cursor:'pointer'}}>
            <input type="checkbox" checked={(clientIds||[]).includes(c.id)} onChange={()=>toggleClient(c.id)}/>
            {c.display_name}
          </label>
        ))}
        {!showInvite ? (
          <Btn size="sm" variant="ghost" onClick={()=>setShowInvite(true)} style={{marginTop:6}}>+ הזמן לקוח חדש</Btn>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:8,padding:12,background:C.bg,borderRadius:8}}>
            <Input label="שם הלקוח" value={inviteForm.name} onChange={v=>setInviteForm(f=>({...f,name:v}))}/>
            <Input label="אימייל" type="email" value={inviteForm.email} onChange={v=>setInviteForm(f=>({...f,email:v}))}/>
            {inviteError && <div style={{color:C.danger,fontSize:13}}>{inviteError}</div>}
            <div style={{display:'flex',gap:8}}>
              <Btn size="sm" variant="ghost" onClick={()=>setShowInvite(false)}>ביטול</Btn>
              <Btn size="sm" onClick={inviteClient} disabled={inviting}>{inviting?'שולח...':'הזמן והוסף'}</Btn>
            </div>
          </div>
        )}
      </div>
      <div>
        <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>עובדי משרד</label>
        {employees.length===0
          ? <div style={{color:C.sub,fontSize:14}}>אין עובדי משרד — הזמן דרך "ניהול משתמשים"</div>
          : employees.map(e=>(
            <label key={e.id} style={{display:'flex',alignItems:'center',gap:8,padding:'4px 0',color:C.text,fontSize:16,cursor:'pointer'}}>
              <input type="checkbox" checked={(employeeIds||[]).includes(e.id)} onChange={()=>toggleEmployee(e.id)}/>
              {e.display_name}
            </label>
          ))}
      </div>
    </div>
  );
}

// ─── DASHBOARD TAB ────────────────────────────────────────────────────────────
function DashboardTab({ project, setProject, user, onDeleteProject }) {
  const isMobile = useIsMobile();
  const [editingInfo, setEditingInfo] = React.useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false);
  const [infoForm, setInfoForm] = React.useState(null);
  const startEditInfo = () => {
    setInfoForm({ name:project.name||'', address:project.address||'',
      architectName:project.architectName||'', clientName:project.clientName||'',
      area:project.area||'', budget:project.budget||'', startDate:project.startDate||'', endDate:project.endDate||'' });
    setEditingInfo(true);
  };
  const saveInfo = () => {
    setProject(p=>({ ...p, name:infoForm.name, address:infoForm.address,
      architectName:infoForm.architectName, clientName:infoForm.clientName,
      area:Number(infoForm.area)||0, budget:Number(infoForm.budget)||0,
      startDate:infoForm.startDate, endDate:infoForm.endDate }));
    setEditingInfo(false);
  };
  const [editingDesc, setEditingDesc] = React.useState(false);
  const [descDraft, setDescDraft] = React.useState('');
  const paid = (project.payments||[]).filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
  const total = (project.payments||[]).reduce((s,p)=>s+p.amount,0);
  const pendingApprovals = (project.approvals||[]).filter(a=>a.status==='pending').length;
  const openPunch = (project.punchList||[]).filter(p=>p.status==='open'||p.status==='in-progress').length;
  const phase = PHASES[(project.currentPhase||1)-1];
  const completedPhases = (project.phases||[]).filter(p=>p.status==='completed').length;
  const paidPct = Math.round(paid/(total||1)*100);

  const kpis = [
    { value:project.progress||0, max:100, color:C.primary, label:'התקדמות', sublabel:'%', size:90 },
    { value:project.currentPhase||1, max:8, color:C.accent, label:'שלב נוכחי', sublabel:phase?.short, size:90 },
    { value:paidPct, max:100, color:C.success, label:'גביה', sublabel:'%', size:90 },
    { value:pendingApprovals, max:Math.max(pendingApprovals,5), color:C.warning, label:'אישורים', sublabel:'ממתין', size:90 },
    { value:openPunch, max:Math.max(openPunch,5), color:C.danger, label:'ממצאים', sublabel:'פתוחים', size:90 },
    { value:completedPhases, max:8, color:C.info, label:'שלבים', sublabel:'הושלמו', size:90 },
  ];

  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      {/* Unified hero + KPI card — project identity and performance in one cohesive block */}
      <div style={{borderRadius:18,marginBottom:20,overflow:'hidden',border:`1px solid ${C.border}`,
        boxShadow:'0 12px 32px rgba(0,0,0,0.18)',background:C.card}}>
      {/* Cover */}
      <div style={{height:200,position:'relative',
        background:`linear-gradient(135deg,${C.primary}33 0%,${C.accent}22 40%,${C.bg} 100%)`}}>
        {project.coverImage
          ? <StorageImage path={project.coverImage} style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(0.85)'}} alt="cover"/>
          : (
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
              {/* Architectural grid lines */}
              <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.12}} viewBox="0 0 400 200" preserveAspectRatio="none">
                {[...Array(8)].map((_,i)=><line key={'v'+i} x1={i*60} y1="0" x2={i*60} y2="200" stroke={C.text} strokeWidth="0.5"/>)}
                {[...Array(4)].map((_,i)=><line key={'h'+i} x1="0" y1={i*50} x2="400" y2={i*50} stroke={C.text} strokeWidth="0.5"/>)}
                <line x1="0" y1="0" x2="400" y2="200" stroke={C.accent} strokeWidth="1" opacity="0.6"/>
                <line x1="400" y1="0" x2="0" y2="200" stroke={C.accent} strokeWidth="1" opacity="0.4"/>
                <circle cx="200" cy="100" r="40" fill="none" stroke={C.primary} strokeWidth="0.8" opacity="0.5"/>
                <circle cx="200" cy="100" r="70" fill="none" stroke={C.border} strokeWidth="0.5"/>
              </svg>
              <div style={{textAlign:'center',position:'relative',zIndex:1}}>
                <div style={{fontSize:58,marginBottom:6}}>🏗️</div>
                <div style={{fontSize:13,color:C.sub,letterSpacing:'0.1em',textTransform:'uppercase'}}>
                  {project.template==='villa'?'Residential':project.template==='commercial'?'Commercial':project.template==='renovation'?'Renovation':'Construction'}
                </div>
              </div>
            </div>
          )
        }
        <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'16px 20px',
          background:'linear-gradient(transparent,rgba(0,0,0,0.8))'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
            <div>
              <div style={{color:'#fff',fontWeight:800,fontSize:26,letterSpacing:'-0.01em'}}>{project.name}</div>
              <div style={{color:'rgba(255,255,255,0.65)',fontSize:14,marginTop:2}}>{project.address} · {project.clientName}</div>
            </div>
            <div style={{textAlign:'left'}}>
              <StatusBadge status={project.status}/>
            </div>
          </div>
          {/* Progress bar on cover */}
          <div style={{marginTop:12,height:3,background:'rgba(255,255,255,0.2)',borderRadius:2,overflow:'hidden'}}>
            <div style={{width:(project.progress||0)+'%',height:'100%',borderRadius:2,
              background:`linear-gradient(90deg,${C.accent},${C.primary})`,transition:'width 1.5s ease'}}/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:4}}>
            <span style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>{PHASES[0]?.short}</span>
            <span style={{fontSize:12,color:'rgba(255,255,255,0.7)',fontWeight:600}}>{project.progress||0}%</span>
            <span style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>{PHASES[PHASES.length-1]?.short}</span>
          </div>
        </div>
      </div>

      {/* KPI Circles — same card, seamlessly continuing below the cover */}
      <div style={{padding:'22px 20px',background:`linear-gradient(135deg,${C.card},${C.bg})`}}>
        <div style={{fontSize:12,color:C.sub,letterSpacing:'0.12em',fontWeight:700,marginBottom:20,textTransform:'uppercase'}}>
          מדדי ביצוע — KPIs
        </div>
        <div style={{display:'flex',gap:20,flexWrap:'wrap',justifyContent:'center'}}>
          {kpis.map((k,i)=>(
            <SVGCircle key={i} {...k}/>
          ))}
        </div>
      </div>
      </div>

      {/* Info grid */}
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr',gap:16,marginBottom:16}}>
        <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
            <h4 style={{color:C.sub,fontSize:13,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>פרטי פרויקט</h4>
            {user.role==='admin' && !editingInfo && (
              <button onClick={startEditInfo}
                style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:14}}
                title="ערוך פרטים">✏️ ערוך</button>
            )}
          </div>
          {editingInfo ? (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <Input label="שם הפרויקט" value={infoForm.name} onChange={v=>setInfoForm(f=>({...f,name:v}))} required/>
              <Input label="כתובת" value={infoForm.address} onChange={v=>setInfoForm(f=>({...f,address:v}))}/>
              <Input label="אדריכל" value={infoForm.architectName} onChange={v=>setInfoForm(f=>({...f,architectName:v}))}/>
              <Input label="לקוח" value={infoForm.clientName} onChange={v=>setInfoForm(f=>({...f,clientName:v}))}/>
              <Input label={'שטח (מ"ר)'} type="number" value={infoForm.area} onChange={v=>setInfoForm(f=>({...f,area:v}))}/>
              <Input label="תקציב (₪)" type="number" value={infoForm.budget} onChange={v=>setInfoForm(f=>({...f,budget:v}))}/>
              <Input label="תחילה" type="date" value={infoForm.startDate} onChange={v=>setInfoForm(f=>({...f,startDate:v}))}/>
              <Input label="סיום" type="date" value={infoForm.endDate} onChange={v=>setInfoForm(f=>({...f,endDate:v}))}/>
              <div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:6}}>
                <Btn size="sm" variant="ghost" onClick={()=>setEditingInfo(false)}>ביטול</Btn>
                <Btn size="sm" onClick={saveInfo}>שמור</Btn>
              </div>
            </div>
          ) : (
            [['שם הפרויקט',project.name],['כתובת',project.address],
              ['אדריכל',project.architectName],['לקוח',project.clientName],
              ['שטח',project.area?project.area+' מ"ר':'—'],['תקציב',fmtCurrency(project.budget)],
              ['תחילה',fmtDate(project.startDate)],['סיום',fmtDate(project.endDate)]
            ].map(([k,v])=>(
              <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',
                borderBottom:`1px solid ${C.border}`}}>
                <span style={{color:C.sub,fontSize:14}}>{k}</span>
                <span style={{color:C.text,fontSize:14,fontWeight:600}}>{v||'—'}</span>
              </div>
            ))
          )}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`,flex:1}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
              <h4 style={{color:C.sub,fontSize:13,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>תיאור</h4>
              {user?.role==='admin' && !editingDesc && (
                <button onClick={()=>{setDescDraft(project.description||'');setEditingDesc(true);}}
                  style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:14}}>✏️ ערוך</button>
              )}
            </div>
            {editingDesc ? (
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <textarea value={descDraft} onChange={e=>setDescDraft(e.target.value)} rows={4}
                  style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                    fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
                <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
                  <Btn size="sm" variant="ghost" onClick={()=>setEditingDesc(false)}>ביטול</Btn>
                  <Btn size="sm" onClick={()=>{setProject(p=>({...p,description:descDraft}));setEditingDesc(false);}}>שמור</Btn>
                </div>
              </div>
            ) : (
              <p style={{color:C.text,fontSize:16,lineHeight:1.8}}>{project.description||'אין תיאור.'}</p>
            )}
          </div>
          {/* Payment summary mini bar */}
          <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:10}}>
              <span style={{color:C.sub,fontSize:13,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em'}}>גביה</span>
              <span style={{color:C.success,fontSize:16,fontWeight:700}}>{paidPct}%</span>
            </div>
            <div style={{height:6,background:C.border,borderRadius:3,overflow:'hidden',marginBottom:8}}>
              <div style={{width:paidPct+'%',height:'100%',borderRadius:3,
                background:`linear-gradient(90deg,${C.success}99,${C.success})`,transition:'width 1.5s'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:14}}>
              <span style={{color:C.success}}>{fmtCurrency(paid)} שולם</span>
              <span style={{color:C.sub}}>{fmtCurrency(total-paid)} נותר</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project access — who can actually see this project (real assignment, not name text) */}
      {user?.role==='admin' && (
        <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
          <h4 style={{color:C.sub,fontSize:13,fontWeight:700,marginBottom:14,letterSpacing:'0.1em',textTransform:'uppercase'}}>🔑 ניהול גישה לפרויקט</h4>
          <ProjectAccessEditor officeId={user.officeId} architectId={project.architectId} clientIds={project.clientIds}
            employeeIds={project.employeeIds}
            onChange={patch=>setProject(p=>({...p,...patch}))}/>
        </div>
      )}

      {/* Danger zone — permanent project deletion, admin only */}
      {user?.role==='admin' && onDeleteProject && (
        <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.danger}`,marginTop:16}}>
          <h4 style={{color:C.danger,fontSize:13,fontWeight:700,marginBottom:10,letterSpacing:'0.1em',textTransform:'uppercase'}}>⚠️ אזור מסוכן</h4>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <div style={{color:C.sub,fontSize:14}}>מחיקת הפרויקט היא פעולה בלתי הפיכה.</div>
            <Btn variant="danger" size="sm" onClick={()=>setShowDeleteConfirm(true)}>🗑️ מחק פרויקט</Btn>
          </div>
        </div>
      )}
      {showDeleteConfirm && (
        <DeleteProjectConfirm project={project} onCancel={()=>setShowDeleteConfirm(false)}
          onConfirm={onDeleteProject}/>
      )}
    </div>
  );
}

// ─── BRIEF TAB ────────────────────────────────────────────────────────────────
function BriefTab({ project, setProject, user }) {
  const brief = project.brief || {answers:{},submitted:false};
  const [answers, setAnswers] = React.useState({...brief.answers});
  const [customQuestions, setCustomQuestions] = React.useState(brief.customQuestions || []);
  const [newQuestion, setNewQuestion] = React.useState('');
  const [saved, setSaved] = React.useState(false);
  const addQuestion = () => {
    if (!newQuestion.trim()) return;
    setCustomQuestions(cs => [...cs, { key:'c'+uid(), q:newQuestion.trim() }]);
    setNewQuestion('');
  };
  const removeQuestion = (key) => {
    setCustomQuestions(cs => cs.filter(c=>c.key!==key));
    setAnswers(a => { const na = {...a}; delete na[key]; return na; });
  };
  const questions = [
    {key:'style',q:'איזה סגנון עיצוב אתה מעדיף?',hint:'מודרני, קלאסי, מינימליסטי, ים-תיכוני...'},
    {key:'rooms',q:'כמה חדרים נדרשים?',hint:'חדרי שינה, עבודה וכו\''},
    {key:'budget',q:'מהו תקציב הפרויקט?',hint:'טווח משוער'},
    {key:'timeline',q:'מהו לוח הזמנים הרצוי?',hint:'מתי אתה מצפה לסיום?'},
    {key:'priorities',q:'מה העדיפויות שלך?',hint:'נוף, פרטיות, חיסכון אנרגיה...'},
    {key:'special',q:'דרישות מיוחדות?',hint:'בריכה, נגישות, חדר מדיה...'},
    {key:'parking',q:'כמה מקומות חניה?',hint:'מספר רכבים'},
    {key:'outdoor',q:'מה רצוי בחוץ?',hint:'גינה, מרפסת, בריכה, גג...'}
  ];
  const save = () => {
    setProject(p=>({...p,brief:{...brief,answers,customQuestions,savedAt:new Date().toISOString()}}));
    setSaved(true); setTimeout(()=>setSaved(false),2000);
  };
  const submit = () => setProject(p=>({...p,brief:{...brief,answers,customQuestions,submitted:true,savedAt:new Date().toISOString(),submittedBy:user.name}}));
  const readOnly = brief.submitted && user.role==='client';
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>תקציר לקוח</h3>
          <p style={{color:C.sub,fontSize:16}}>8 שאלות לפני הפגישה הראשונה</p>
        </div>
        {brief.submitted && <Badge text="✓ הוגש" color={C.success}/>}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {questions.map(q=>(
          <div key={q.key} style={{background:C.card,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
            <div style={{fontWeight:600,color:C.text,fontSize:17,marginBottom:4}}>{q.q}</div>
            <div style={{color:C.sub,fontSize:14,marginBottom:8}}>{q.hint}</div>
            {readOnly ? <div style={{color:C.text,fontSize:16}}>{answers[q.key]||'—'}</div>
              : <textarea value={answers[q.key]||''} onChange={e=>setAnswers(a=>({...a,[q.key]:e.target.value}))}
                  rows={2} placeholder="הזן תשובה..."
                  style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                    fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            }
          </div>
        ))}
        {customQuestions.map(q=>(
          <div key={q.key} style={{background:C.card,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:8,marginBottom:4}}>
              <div style={{fontWeight:600,color:C.text,fontSize:17}}>{q.q}</div>
              {!readOnly && (
                <button onClick={()=>removeQuestion(q.key)}
                  style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:16,padding:0}}
                  title="הסר שאלה">✕</button>
              )}
            </div>
            {readOnly ? <div style={{color:C.text,fontSize:16}}>{answers[q.key]||'—'}</div>
              : <textarea value={answers[q.key]||''} onChange={e=>setAnswers(a=>({...a,[q.key]:e.target.value}))}
                  rows={2} placeholder="הזן תשובה..."
                  style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                    fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            }
          </div>
        ))}
        {!readOnly && (
          <div style={{display:'flex',gap:8,background:C.card,borderRadius:12,padding:16,border:`1px dashed ${C.border}`}}>
            <input value={newQuestion} onChange={e=>setNewQuestion(e.target.value)}
              onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();addQuestion();}}}
              placeholder="הוסף שאלה משלך..."
              style={{flex:1,padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                background:C.inputBg,color:C.text,fontSize:16,outline:'none',direction:'rtl',
                fontFamily:'Heebo,Arial,sans-serif'}}/>
            <Btn size="sm" onClick={addQuestion}>+ הוסף שאלה</Btn>
          </div>
        )}
      </div>
      {!readOnly && (
        <div style={{display:'flex',gap:10,marginTop:20,justifyContent:'flex-end'}}>
          {saved && <span style={{color:C.success,fontSize:16,alignSelf:'center'}}>✓ נשמר</span>}
          <Btn onClick={save} variant="ghost">שמור טיוטה</Btn>
          {!brief.submitted && <Btn onClick={submit}>הגש תקציר</Btn>}
        </div>
      )}
    </div>
  );
}

// ─── AI AGENT TAB ────────────────────────────────────────────────────────────
function AIAgentTab({ project }) {
  const [msg, setMsg] = React.useState('');
  const [chat, setChat] = React.useState([
    {role:'assistant', content:`שלום! אני Tektona AI, העוזר החכם שלך לפרויקט "${project.name}". אני יכול לעזור בניתוח תמונות, הצעות עיצוב, כתיבת תיאורים מקצועיים, ניתוח מסמכים וסיכום פגישות. במה אוכל לסייע?`}
  ]);
  const [loading, setLoading] = React.useState(false);
  const chatRef = React.useRef();

  const send = async () => {
    if (!msg.trim()) return;
    const userMsg = msg.trim(); setMsg('');
    const newChat = [...chat, {role:'user', content:userMsg}];
    setChat(newChat); setLoading(true);
    try {
      const { data:{ session } } = await sb.auth.getSession();
      const res = await fetch('/api/chat',{
        method:'POST', headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+session.access_token},
        body: JSON.stringify({
          model:'gpt-4.1',
          messages:[
            {role:'system',content:`אתה עוזר AI מקצועי למשרד אדריכלות. הפרויקט: ${project.name}, לקוח: ${project.clientName}, שלב: ${PHASES[(project.currentPhase||1)-1]?.name}. ענה בעברית, בצורה מקצועית ומועילה.`},
            ...newChat.slice(-8).map(m=>({role:m.role,content:m.content}))
          ]
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'שגיאת שרת');
      const reply = data.choices?.[0]?.message?.content || 'שגיאה בקבלת תשובה';
      setChat(c=>[...c,{role:'assistant',content:reply}]);
    } catch(e) {
      setChat(c=>[...c,{role:'assistant',content:'שגיאה בחיבור ל-AI: '+e.message}]);
    }
    setLoading(false);
    setTimeout(()=>chatRef.current?.scrollTo({top:9999,behavior:'smooth'}),100);
  };

  return (
    <div style={{padding:24,height:'calc(100vh - 140px)',display:'flex',flexDirection:'column',animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>🤖 AI Agent</h3>
          <p style={{color:C.sub,fontSize:16}}>GPT-4.1 · עוזר חכם לפרויקט</p>
        </div>
      </div>
      <div ref={chatRef} style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:12,marginBottom:16}}>
        {chat.map((m,i)=>(
          <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-start':'flex-end'}}>
            <div style={{maxWidth:'75%',padding:'12px 16px',borderRadius:16,fontSize:17,lineHeight:1.7,
              background:m.role==='user'?C.primary:C.card,
              color:m.role==='user'?(isLightColor(C.primary)?C.bg:'#fff'):C.text,
              border:m.role==='user'?'none':`1px solid ${C.border}`,
              borderTopRightRadius:m.role==='user'?4:16,
              borderTopLeftRadius:m.role==='assistant'?4:16}}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:'14px 20px',
              display:'flex',alignItems:'center'}}>
              <Honeycomb color={C.primary}/>
            </div>
          </div>
        )}
      </div>
      <div style={{display:'flex',gap:10}}>
        <textarea value={msg} onChange={e=>setMsg(e.target.value)}
          onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}}
          placeholder="שאל אותי על הפרויקט... (Enter לשליחה)" rows={2}
          style={{flex:1,padding:'10px 14px',borderRadius:12,border:`1px solid ${C.border}`,
            background:C.inputBg,color:C.text,fontSize:17,resize:'none',
            fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
        <Btn onClick={send} disabled={loading||!msg.trim()} style={{alignSelf:'flex-end'}}>שלח</Btn>
      </div>
      <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
        {['סכם את הפרויקט','מה השלב הבא?','כתוב עדכון ללקוח','זהה סיכונים בפרויקט'].map(s=>(
          <button key={s} onClick={()=>{setMsg(s);}}
            style={{padding:'5px 12px',borderRadius:20,border:`1px solid ${C.border}`,
              background:'transparent',color:C.sub,cursor:'pointer',fontSize:14}}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── TIMELINE TAB ────────────────────────────────────────────────────────────
function TimelineTab({ project, setProject }) {
  const [viewMode, setViewMode] = React.useState('list');
  const [newPhaseName, setNewPhaseName] = React.useState('');
  const phases = project.phases || PHASES.map((p,i)=>({phaseId:p.id,status:i===0?'active':'pending',completedDate:null,notes:''}));
  const customPhases = project.customPhases || [];
  const updatePhase = (idx, field, val) => {
    const updated = phases.map((p,i)=>i===idx?{...p,[field]:val}:p);
    setProject(pr=>({...pr,phases:updated}));
  };
  // Standard phases stay in place (other features index into project.currentPhase),
  // so "deleting" one just hides it instead of splicing the array.
  const removePhase = (idx) => updatePhase(idx, 'hidden', true);
  const restorePhase = (idx) => updatePhase(idx, 'hidden', false);
  const updateCustomPhase = (id, field, val) => {
    setProject(pr=>({...pr, customPhases:(pr.customPhases||[]).map(c=>c.id===id?{...c,[field]:val}:c)}));
  };
  const addCustomPhase = () => {
    if (!newPhaseName.trim()) return;
    setProject(pr=>({...pr, customPhases:[...(pr.customPhases||[]),
      { id:'c'+uid(), name:newPhaseName.trim(), status:'pending', completedDate:null, notes:'' }]}));
    setNewPhaseName('');
  };
  const removeCustomPhase = (id) => {
    setProject(pr=>({...pr, customPhases:(pr.customPhases||[]).filter(c=>c.id!==id)}));
  };
  const statusColors = { completed:C.success, active:C.primary, pending:C.border };

  const start = project.startDate ? new Date(project.startDate) : new Date();
  const end   = project.endDate   ? new Date(project.endDate)   : new Date(start.getTime()+365*86400000);
  const totalDays = Math.max(1, (end-start)/86400000);
  const phaseSegLen = totalDays / PHASES.length;

  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>ציר זמן פרויקט</h3>
        <button onClick={()=>setViewMode(v=>v==='list'?'gantt':'list')}
          style={{padding:'6px 14px',borderRadius:8,border:`1px solid ${C.border}`,background:C.bg,
            color:C.sub,cursor:'pointer',fontSize:13}}>
          {viewMode==='list' ? '📊 תצוגת Gantt' : '☰ רשימה'}
        </button>
      </div>

      {viewMode==='gantt' && (
        <div style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`,marginBottom:20,overflowX:'auto'}}>
          <div style={{fontSize:13,color:C.sub,marginBottom:12,display:'flex',justifyContent:'space-between'}}>
            <span>{project.startDate||'—'}</span><span>{project.endDate||'—'}</span>
          </div>
          {(() => {
            const segs = [
              ...PHASES.map((phase,i)=>({ key:phase.id, name:ph=>ph.name||phase.short, ph:phases[i]||{status:'pending'} }))
                .filter(s=>!s.ph.hidden),
              ...customPhases.map(ph=>({ key:ph.id, name:()=>ph.name, ph })),
            ];
            const totalSegs = segs.length || 1;
            return <>
              {segs.map((seg,i)=>{
                const ph = seg.ph;
                const color = ph.status==='completed'?C.success:ph.status==='active'?C.primary:C.border;
                const left  = (i/totalSegs)*100;
                const width = (1/totalSegs)*100;
                return (
                  <div key={seg.key} style={{marginBottom:8,display:'flex',alignItems:'center',gap:10}}>
                    <div style={{width:90,fontSize:12,color:C.sub,textAlign:'right',flexShrink:0,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}} title={seg.name(ph)}>{seg.name(ph)}</div>
                    <div style={{flex:1,height:20,background:C.border,borderRadius:4,position:'relative',minWidth:200}}>
                      <div style={{position:'absolute',right:`${100-left-width}%`,width:width+'%',height:'100%',
                        background:color,borderRadius:4,transition:'width .8s ease',
                        display:'flex',alignItems:'center',justifyContent:'center'}}>
                        {ph.status==='completed'&&<span style={{fontSize:10,color:contrastText(color),fontWeight:700}}>✓</span>}
                        {ph.status==='active'&&<span style={{fontSize:10,color:contrastText(color),fontWeight:700}}>▶</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>;
          })()}
        </div>
      )}

      {viewMode==='list' && (
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',right:19,top:32,bottom:32,width:2,background:C.border,zIndex:0}}/>
          {PHASES.map((phase,i)=>{
            const ph = phases[i] || {status:'pending',completedDate:null,notes:''};
            if (ph.hidden) return null;
            const color = statusColors[ph.status] || C.border;
            return (
              <div key={phase.id} style={{display:'flex',gap:20,marginBottom:20,position:'relative'}}>
                <div style={{width:40,height:40,borderRadius:'50%',background:color,
                  border:`3px solid ${ph.status==='active'?C.primary:C.border}`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color:contrastText(color),fontWeight:700,fontSize:17,flexShrink:0,zIndex:1,
                  boxShadow:ph.status==='active'?`0 0 0 4px ${C.primary}33`:'none'}}>
                  {ph.status==='completed'?'✓':phase.id}
                </div>
                <div style={{flex:1,background:C.card,borderRadius:12,padding:16,border:`1px solid ${ph.status==='active'?C.primary:C.border}`}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8,gap:8}}>
                    <div style={{display:'flex',alignItems:'center',gap:6,flex:1,
                      borderBottom:`1px dashed ${C.border}`,paddingBottom:2}}>
                      <span style={{fontSize:13,opacity:0.6,flexShrink:0}} title="ניתן לערוך שם זה">✏️</span>
                      <input value={ph.name||phase.name} onChange={e=>updatePhase(i,'name',e.target.value)}
                        title="לחץ כדי לערוך את שם השלב"
                        style={{flex:1,fontWeight:700,color:C.text,fontSize:18,background:'transparent',
                          border:'none',outline:'none',fontFamily:'Heebo,Arial,sans-serif',padding:0}}/>
                    </div>
                    <Select value={ph.status} onChange={v=>updatePhase(i,'status',v)}
                      options={[{value:'pending',label:'ממתין'},{value:'active',label:'פעיל'},{value:'completed',label:'הושלם'}]}
                      style={{width:120}}/>
                    <button onClick={()=>removePhase(i)}
                      style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:16}}
                      title="הסר שלב">✕</button>
                  </div>
                  {ph.status==='completed' && (
                    <div style={{marginBottom:8}}>
                      <input type="date" value={ph.completedDate||''} onChange={e=>updatePhase(i,'completedDate',e.target.value)}
                        style={{padding:'5px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                          background:C.inputBg,color:C.text,fontSize:14,outline:'none'}}/>
                    </div>
                  )}
                  <input value={ph.notes||''} onChange={e=>updatePhase(i,'notes',e.target.value)}
                    placeholder="הוסף הערות..."
                    style={{width:'100%',padding:'6px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                      background:C.inputBg,color:C.text,fontSize:14,outline:'none',direction:'rtl',
                      fontFamily:'Heebo,Arial,sans-serif'}}/>
                </div>
              </div>
            );
          })}
          {customPhases.map((ph,ci)=>{
            const color = statusColors[ph.status] || C.border;
            return (
              <div key={ph.id} style={{display:'flex',gap:20,marginBottom:20,position:'relative'}}>
                <div style={{width:40,height:40,borderRadius:'50%',background:color,
                  border:`3px solid ${ph.status==='active'?C.primary:C.border}`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color:contrastText(color),fontWeight:700,fontSize:17,flexShrink:0,zIndex:1,
                  boxShadow:ph.status==='active'?`0 0 0 4px ${C.primary}33`:'none'}}>
                  {ph.status==='completed'?'✓':PHASES.length+ci+1}
                </div>
                <div style={{flex:1,background:C.card,borderRadius:12,padding:16,border:`1px solid ${ph.status==='active'?C.primary:C.border}`}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8,gap:8}}>
                    <div style={{display:'flex',alignItems:'center',gap:6,flex:1,
                      borderBottom:`1px dashed ${C.border}`,paddingBottom:2}}>
                      <span style={{fontSize:13,opacity:0.6,flexShrink:0}} title="ניתן לערוך שם זה">✏️</span>
                      <input value={ph.name} onChange={e=>updateCustomPhase(ph.id,'name',e.target.value)}
                        title="לחץ כדי לערוך את שם השלב"
                        style={{flex:1,fontWeight:700,color:C.text,fontSize:18,background:'transparent',
                          border:'none',outline:'none',fontFamily:'Heebo,Arial,sans-serif',padding:0}}/>
                    </div>
                    <Select value={ph.status} onChange={v=>updateCustomPhase(ph.id,'status',v)}
                      options={[{value:'pending',label:'ממתין'},{value:'active',label:'פעיל'},{value:'completed',label:'הושלם'}]}
                      style={{width:120}}/>
                    <button onClick={()=>removeCustomPhase(ph.id)}
                      style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:16}}
                      title="הסר שלב">✕</button>
                  </div>
                  {ph.status==='completed' && (
                    <div style={{marginBottom:8}}>
                      <input type="date" value={ph.completedDate||''} onChange={e=>updateCustomPhase(ph.id,'completedDate',e.target.value)}
                        style={{padding:'5px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                          background:C.inputBg,color:C.text,fontSize:14,outline:'none'}}/>
                    </div>
                  )}
                  <input value={ph.notes||''} onChange={e=>updateCustomPhase(ph.id,'notes',e.target.value)}
                    placeholder="הוסף הערות..."
                    style={{width:'100%',padding:'6px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                      background:C.inputBg,color:C.text,fontSize:14,outline:'none',direction:'rtl',
                      fontFamily:'Heebo,Arial,sans-serif'}}/>
                </div>
              </div>
            );
          })}
          <div style={{display:'flex',gap:20,position:'relative'}}>
            <div style={{width:40,flexShrink:0}}/>
            <div style={{flex:1,display:'flex',gap:8,background:C.card,borderRadius:12,padding:16,border:`1px dashed ${C.border}`}}>
              <input value={newPhaseName} onChange={e=>setNewPhaseName(e.target.value)}
                onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();addCustomPhase();}}}
                placeholder="הוסף שלב נוסף..."
                style={{flex:1,padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:16,outline:'none',direction:'rtl',
                  fontFamily:'Heebo,Arial,sans-serif'}}/>
              <Btn size="sm" onClick={addCustomPhase}>+ הוסף שלב</Btn>
            </div>
          </div>
          {PHASES.some((p,i)=>(phases[i]||{}).hidden) && (
            <div style={{display:'flex',gap:20,position:'relative',marginTop:16}}>
              <div style={{width:40,flexShrink:0}}/>
              <div style={{flex:1,display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
                <span style={{fontSize:13,color:C.sub}}>שלבים מוסתרים:</span>
                {PHASES.map((phase,i)=>(phases[i]||{}).hidden && (
                  <Btn key={phase.id} size="sm" variant="ghost" onClick={()=>restorePhase(i)}>
                    ↩️ {(phases[i]||{}).name||phase.name}
                  </Btn>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── TASKS TAB ────────────────────────────────────────────────────────────────
function TasksTab({ project, setProject, user, officeId }) {
  const isMobile = useIsMobile();
  const [showAdd, setShowAdd] = React.useState(false);
  const [logHoursId, setLogHoursId] = React.useState(null);
  const [hoursInput, setHoursInput] = React.useState('');
  const [form, setForm] = React.useState({title:'',desc:'',archAssigneeId:'',employeeAssigneeId:'',priority:'medium',dueDate:'',notes:''});
  const [editingId, setEditingId] = React.useState(null);
  const [editForm, setEditForm] = React.useState(null);
  const [members, setMembers] = React.useState(null);
  React.useEffect(()=>{
    sb.from('office_members').select('id,role,display_name').eq('office_id', officeId)
      .then(({data})=>setMembers(data||[]));
  },[officeId]);
  const archMembers = (members||[]).filter(m=>m.role==='arch');
  const employeeMembers = (members||[]).filter(m=>m.role==='employee');
  const tasks = project.tasks || [];
  // Admins see every task; everyone else sees unassigned tasks plus tasks assigned to them —
  // once the office manager assigns a task to a specific architect and/or employee, only those
  // people (and admins) see it.
  const isAssigned = (t) => !!(t.archAssigneeId || t.employeeAssigneeId);
  const visibleTasks = user.role==='admin' ? tasks
    : tasks.filter(t=>!isAssigned(t) || t.archAssigneeId===user.id || t.employeeAssigneeId===user.id);
  const nameFor = (id) => (members||[]).find(m=>m.id===id)?.display_name || '';
  const assigneeLabel = (t) => [t.archAssigneeId&&nameFor(t.archAssigneeId), t.employeeAssigneeId&&nameFor(t.employeeAssigneeId)]
    .filter(Boolean).join(' + ');
  const add = () => {
    if (!form.title) return;
    const np = {...form, id:'t'+uid(), status:'todo', createdBy:user.name, createdAt:today(), hoursLogged:[]};
    setProject(p=>({...p, tasks:[...(p.tasks||tasks),np]}));
    if (form.archAssigneeId || form.employeeAssigneeId) {
      if (form.archAssigneeId) notifyTaskAssignee(officeId, project, user, form.archAssigneeId, 'משימה חדשה הוקצתה לך: '+form.title, form.desc);
      if (form.employeeAssigneeId) notifyTaskAssignee(officeId, project, user, form.employeeAssigneeId, 'משימה חדשה הוקצתה לך: '+form.title, form.desc);
    } else {
      notifyProjectMembers(officeId, project, user, 'task', 'משימה חדשה: '+form.title, form.desc);
    }
    setForm({title:'',desc:'',archAssigneeId:'',employeeAssigneeId:'',priority:'medium',dueDate:'',notes:''}); setShowAdd(false);
  };
  const updateStatus = (id, s) => setProject(p=>({...p,tasks:(p.tasks||tasks).map(t=>t.id===id?{...t,status:s}:t)}));
  const startEdit = (t) => {
    setEditForm({title:t.title||'',desc:t.desc||'',archAssigneeId:t.archAssigneeId||'',employeeAssigneeId:t.employeeAssigneeId||'',
      priority:t.priority||'medium',dueDate:t.dueDate||'',notes:t.notes||''});
    setEditingId(t.id);
  };
  const saveEdit = () => {
    const prevTask = tasks.find(t=>t.id===editingId);
    setProject(p=>({...p,tasks:(p.tasks||tasks).map(t=>t.id===editingId?{...t,...editForm}:t)}));
    if (editForm.archAssigneeId && editForm.archAssigneeId !== prevTask?.archAssigneeId) {
      notifyTaskAssignee(officeId, project, user, editForm.archAssigneeId, 'משימה הוקצתה לך: '+editForm.title, editForm.desc);
    }
    if (editForm.employeeAssigneeId && editForm.employeeAssigneeId !== prevTask?.employeeAssigneeId) {
      notifyTaskAssignee(officeId, project, user, editForm.employeeAssigneeId, 'משימה הוקצתה לך: '+editForm.title, editForm.desc);
    }
    setEditingId(null); setEditForm(null);
  };
  const removeTask = (id) => setProject(p=>({...p,tasks:(p.tasks||tasks).filter(t=>t.id!==id)}));
  const logHours = (id) => {
    const h = parseFloat(hoursInput); if (!h||h<=0) return;
    setProject(p=>({...p,tasks:(p.tasks||tasks).map(t=>t.id===id?{...t,hoursLogged:[...(t.hoursLogged||[]),{hours:h,by:user.name,date:today()}]}:t)}));
    setHoursInput(''); setLogHoursId(null);
  };
  const totalHours = visibleTasks.reduce((s,t)=>(t.hoursLogged||[]).reduce((a,l)=>a+l.hours,0)+s,0);
  const priColors = {high:C.danger,medium:C.warning,low:C.success};
  const cols = [{k:'high',l:'דחוף'},{k:'medium',l:'בינוני'},{k:'low',l:'רגיל'}];
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>משימות</h3>
        {user.role!=='client' && <Btn onClick={()=>setShowAdd(true)}>+ משימה חדשה</Btn>}
      </div>
      {/* Hours summary */}
      {totalHours>0 && (
        <div style={{background:C.card,borderRadius:12,padding:'12px 18px',marginBottom:16,
          border:`1px solid ${C.border}`,display:'flex',gap:20,flexWrap:'wrap'}}>
          <div style={{color:C.sub,fontSize:14}}>⏱️ סה"כ שעות מדווחות: <strong style={{color:C.primary}}>{totalHours.toFixed(1)}</strong></div>
          {visibleTasks.filter(t=>(t.hoursLogged||[]).length>0).map(t=>(
            <div key={t.id} style={{fontSize:13,color:C.sub}}>
              {t.title}: <strong style={{color:C.text}}>{(t.hoursLogged||[]).reduce((s,l)=>s+l.hours,0).toFixed(1)}h</strong>
            </div>
          ))}
        </div>
      )}
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr 1fr',gap:16}}>
        {cols.map(col=>(
          <div key={col.k}>
            <div style={{fontWeight:700,color:priColors[col.k],fontSize:14,marginBottom:10,
              display:'flex',alignItems:'center',gap:6}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:priColors[col.k],display:'inline-block'}}/>
              {col.l} ({visibleTasks.filter(t=>t.priority===col.k).length})
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,minHeight:80}}>
              {visibleTasks.filter(t=>t.priority===col.k).map(t=>(
                <div key={t.id} style={{background:C.card,borderRadius:12,padding:14,
                  border:`1px solid ${C.border}`,borderRight:`3px solid ${priColors[t.priority]||C.border}`}}>
                  <div style={{fontWeight:600,color:C.text,fontSize:16,marginBottom:4}}>{t.title}</div>
                  {t.desc && <div style={{color:C.sub,fontSize:14,marginBottom:6}}>{t.desc}</div>}
                  {t.notes && <div style={{color:C.sub,fontSize:13,marginBottom:6,fontStyle:'italic'}}>📝 {t.notes}</div>}
                  {(t.hoursLogged||[]).length>0 && (
                    <div style={{fontSize:12,color:C.ai,marginBottom:6}}>
                      ⏱️ {(t.hoursLogged||[]).reduce((s,l)=>s+l.hours,0).toFixed(1)}h מדווח
                    </div>
                  )}
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:6}}>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                      {isAssigned(t) && <Badge text={'🔒 '+assigneeLabel(t)} color={C.info}/>}
                      {t.dueDate && <span style={{fontSize:13,color:C.sub}}>{fmtDate(t.dueDate)}</span>}
                    </div>
                    {user.role!=='client' && (
                      <select value={t.status} onChange={e=>updateStatus(t.id,e.target.value)}
                        style={{fontSize:13,padding:'3px 6px',borderRadius:6,border:`1px solid ${C.border}`,
                          background:C.inputBg,color:C.text,cursor:'pointer',outline:'none'}}>
                        <option value="todo">לביצוע</option>
                        <option value="in-progress">בביצוע</option>
                        <option value="done">בוצע</option>
                      </select>
                    )}
                  </div>
                  {user.role!=='client' && (
                    <div style={{marginTop:8}}>
                      {logHoursId===t.id ? (
                        <div style={{display:'flex',gap:6}}>
                          <input type="number" min="0.5" step="0.5" value={hoursInput}
                            onChange={e=>setHoursInput(e.target.value)}
                            placeholder="שעות"
                            style={{width:70,padding:'4px 8px',borderRadius:6,border:`1px solid ${C.border}`,
                              background:C.inputBg,color:C.text,fontSize:13,outline:'none'}}/>
                          <Btn size="sm" onClick={()=>logHours(t.id)}>שמור</Btn>
                          <Btn size="sm" variant="ghost" onClick={()=>setLogHoursId(null)}>✕</Btn>
                        </div>
                      ) : (
                        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                          <Btn size="sm" variant="ghost" onClick={()=>{setLogHoursId(t.id);setHoursInput('');}}>⏱️ דווח שעות</Btn>
                          <Btn size="sm" variant="ghost" onClick={()=>startEdit(t)}>✏️ ערוך</Btn>
                          <Btn size="sm" variant="ghost" onClick={()=>removeTask(t.id)}>🗑️ מחק</Btn>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="משימה חדשה" onClose={()=>setShowAdd(false)} width={480}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="תיאור" value={form.desc} onChange={v=>setForm(f=>({...f,desc:v}))}/>
            <Select label="מוקצה לאדריכל" value={form.archAssigneeId} onChange={v=>setForm(f=>({...f,archAssigneeId:v}))}
              options={[{value:'',label:'— ללא —'}, ...archMembers.map(m=>({value:m.id,label:m.display_name}))]}/>
            <Select label="מוקצה לעובד" value={form.employeeAssigneeId} onChange={v=>setForm(f=>({...f,employeeAssigneeId:v}))}
              options={[{value:'',label:'— ללא —'}, ...employeeMembers.map(m=>({value:m.id,label:m.display_name}))]}/>
            <Select label="עדיפות" value={form.priority} onChange={v=>setForm(f=>({...f,priority:v}))}
              options={[{value:'high',label:'גבוהה'},{value:'medium',label:'בינונית'},{value:'low',label:'נמוכה'}]}/>
            <Input label="תאריך יעד" type="date" value={form.dueDate} onChange={v=>setForm(f=>({...f,dueDate:v}))}/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>הערות</label>
              <textarea value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}
                rows={3} placeholder="הערות נוספות..."
                style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                  fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף משימה</Btn>
            </div>
          </div>
        </Modal>
      )}
      {editingId && (
        <Modal title="ערוך משימה" onClose={()=>{setEditingId(null);setEditForm(null);}} width={480}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={editForm.title} onChange={v=>setEditForm(f=>({...f,title:v}))} required/>
            <Input label="תיאור" value={editForm.desc} onChange={v=>setEditForm(f=>({...f,desc:v}))}/>
            <Select label="מוקצה לאדריכל" value={editForm.archAssigneeId} onChange={v=>setEditForm(f=>({...f,archAssigneeId:v}))}
              options={[{value:'',label:'— ללא —'}, ...archMembers.map(m=>({value:m.id,label:m.display_name}))]}/>
            <Select label="מוקצה לעובד" value={editForm.employeeAssigneeId} onChange={v=>setEditForm(f=>({...f,employeeAssigneeId:v}))}
              options={[{value:'',label:'— ללא —'}, ...employeeMembers.map(m=>({value:m.id,label:m.display_name}))]}/>
            <Select label="עדיפות" value={editForm.priority} onChange={v=>setEditForm(f=>({...f,priority:v}))}
              options={[{value:'high',label:'גבוהה'},{value:'medium',label:'בינונית'},{value:'low',label:'נמוכה'}]}/>
            <Input label="תאריך יעד" type="date" value={editForm.dueDate} onChange={v=>setEditForm(f=>({...f,dueDate:v}))}/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>הערות</label>
              <textarea value={editForm.notes} onChange={e=>setEditForm(f=>({...f,notes:e.target.value}))}
                rows={3} placeholder="הערות נוספות..."
                style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                  fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>{setEditingId(null);setEditForm(null);}} variant="ghost">ביטול</Btn>
              <Btn onClick={saveEdit}>שמור</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── MEETINGS TAB ─────────────────────────────────────────────────────────────
function MeetingsTab({ project, setProject, user }) {
  const emptyForm = {title:'',date:'',time:'',location:'',link:'',notes:'',summary:'',participants:''};
  const [showAdd, setShowAdd] = React.useState(false);
  const [editId, setEditId] = React.useState(null);
  const [form, setForm] = React.useState(emptyForm);
  const [copiedId, setCopiedId] = React.useState(null);
  const meetings = project.meetings || [];

  const openAdd = () => { setEditId(null); setForm(emptyForm); setShowAdd(true); };
  const openEdit = (m) => {
    setEditId(m.id);
    setForm({...emptyForm,...m, participants:Array.isArray(m.participants)?m.participants.join(', '):''});
    setShowAdd(true);
  };

  const save = () => {
    if (!form.title||!form.date) return;
    const participants = form.participants.split(',').map(p=>p.trim()).filter(Boolean);
    if (editId) {
      setProject(p=>({...p,meetings:meetings.map(m=>m.id===editId?{...m,...form,participants}:m)}));
    } else {
      const m = {...form,id:'mt'+uid(),status:'scheduled',createdBy:user.name,participants};
      setProject(p=>({...p,meetings:[...meetings,m]}));
    }
    setForm(emptyForm); setShowAdd(false); setEditId(null);
  };

  const updateStatus = (id,s) => setProject(p=>({...p,meetings:meetings.map(m=>m.id===id?{...m,status:s}:m)}));
  const updateSummary = (id,summary) => setProject(p=>({...p,meetings:meetings.map(m=>m.id===id?{...m,summary}:m)}));

  const shareMeeting = (m) => {
    const text = `פגישה: ${m.title}\nתאריך: ${fmtDate(m.date)}${m.time?' · '+m.time:''}${m.location?' · '+m.location:''}\n${m.link?'קישור: '+m.link:''}`;
    if (navigator.share) { navigator.share({title:m.title, text}); }
    else { navigator.clipboard.writeText(text); setCopiedId(m.id); setTimeout(()=>setCopiedId(null),2000); }
  };

  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>פגישות</h3>
        {user.role!=='client' && <Btn onClick={openAdd}>+ פגישה חדשה</Btn>}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
        {meetings.length===0 && <div style={{color:C.sub,fontSize:17,textAlign:'center',padding:40,gridColumn:'1/-1'}}>אין פגישות מתוכננות</div>}
        {[...meetings].sort((a,b)=>b.date.localeCompare(a.date)).map(m=>(
          <div key={m.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:18}}>{m.title}</div>
                <div style={{color:C.sub,fontSize:16,marginTop:4}}>
                  📅 {fmtDate(m.date)}{m.time&&' · ⏰ '+m.time}{m.location&&' · 📍 '+m.location}
                </div>
              </div>
              <StatusBadge status={m.status}/>
            </div>
            {m.participants?.length>0 && <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:8}}>{m.participants.map((p,i)=><Badge key={i} text={p} color={C.info}/>)}</div>}
            {m.notes && <div style={{color:C.sub,fontSize:15,marginBottom:8}}>📝 {m.notes}</div>}
            {m.link && <a href={m.link} target="_blank" rel="noreferrer" style={{color:C.primary,fontSize:16}}>🔗 {m.link}</a>}
            {/* Summary section */}
            {m.status==='done' && (
              <div style={{marginTop:10,background:C.bg,borderRadius:8,padding:10}}>
                <div style={{fontSize:13,fontWeight:600,color:C.sub,marginBottom:6}}>סיכום פגישה</div>
                <textarea value={m.summary||''} onChange={e=>updateSummary(m.id,e.target.value)}
                  rows={3} placeholder="כתוב סיכום פגישה כאן..."
                  style={{width:'100%',padding:'8px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:14,resize:'vertical',
                    fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
              </div>
            )}
            <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
              {user.role!=='client' && m.status==='scheduled' && (
                <>
                  <Btn size="sm" onClick={()=>updateStatus(m.id,'done')}>✓ בוצע</Btn>
                  <Btn size="sm" variant="ghost" onClick={()=>openEdit(m)}>✏️ עריכה</Btn>
                  <Btn size="sm" variant="ghost" onClick={()=>updateStatus(m.id,'cancelled')}>ביטול</Btn>
                </>
              )}
              <Btn size="sm" variant="ghost" onClick={()=>shareMeeting(m)}>
                {copiedId===m.id ? '✓ הועתק!' : '📤 שתף'}
              </Btn>
              {m.link && (
                <a href={`https://wa.me/?text=${encodeURIComponent(m.title+' — '+fmtDate(m.date)+(m.link?'\n'+m.link:''))}`}
                  target="_blank" rel="noreferrer"
                  style={{padding:'6px 14px',borderRadius:8,border:`1px solid ${C.border}`,background:'transparent',
                    color:C.success,fontSize:12,fontWeight:600,textDecoration:'none'}}>
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title={editId ? 'עריכת פגישה' : 'פגישה חדשה'} onClose={()=>{setShowAdd(false);setEditId(null);}} width={500}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <Input label="תאריך" type="date" value={form.date} onChange={v=>setForm(f=>({...f,date:v}))} required/>
              <Input label="שעה" type="time" value={form.time} onChange={v=>setForm(f=>({...f,time:v}))}/>
            </div>
            <Input label="מיקום" value={form.location} onChange={v=>setForm(f=>({...f,location:v}))} placeholder="כתובת / Zoom / Google Meet"/>
            <Input label="קישור" value={form.link} onChange={v=>setForm(f=>({...f,link:v}))} placeholder="https://..."/>
            <Input label="משתתפים (בפסיק)" value={form.participants} onChange={v=>setForm(f=>({...f,participants:v}))}/>
            <Input label="הערות" value={form.notes} onChange={v=>setForm(f=>({...f,notes:v}))}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>{setShowAdd(false);setEditId(null);}} variant="ghost">ביטול</Btn>
              <Btn onClick={save}>{editId ? 'שמור שינויים' : 'צור פגישה'}</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── PAYMENTS TAB ─────────────────────────────────────────────────────────────
function PaymentsTab({ project, setProject }) {
  const isMobile = useIsMobile();
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',amount:'',dueDate:'',notes:''});
  const payments = project.payments || [];
  const add = () => {
    if (!form.title||!form.amount) return;
    setProject(p=>({...p,payments:[...payments,{...form,id:'pay'+uid(),amount:Number(form.amount),status:'pending',receivedDate:null}]}));
    setForm({title:'',amount:'',dueDate:'',notes:''}); setShowAdd(false);
  };
  const markPaid = (id) => setProject(p=>({...p,payments:payments.map(py=>py.id===id?{...py,status:'paid',receivedDate:today()}:py)}));
  const totalPaid = payments.filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
  const totalPending = payments.filter(p=>p.status==='pending').reduce((s,p)=>s+p.amount,0);
  const totalAll = payments.reduce((s,p)=>s+p.amount,0);
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>תשלומים</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ תשלום חדש</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'repeat(3,1fr)',gap:16,marginBottom:24}}>
        {[['סה"כ',totalAll,C.text],['שולם',totalPaid,C.success],['ממתין',totalPending,C.warning]].map(([l,v,c])=>(
          <div key={l} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`,
            textAlign:'center',borderTop:`2px solid ${c}`}}>
            <div style={{color:C.sub,fontSize:13,marginBottom:6,letterSpacing:'0.08em',textTransform:'uppercase'}}>{l}</div>
            <div style={{fontSize:24,fontWeight:800,color:c}}>{fmtCurrency(v)}</div>
          </div>
        ))}
      </div>
      {/* Payment progress — donut, matching the main dashboard's KPI circles */}
      {totalAll > 0 && (
        <div style={{background:`linear-gradient(135deg,${C.card},${C.bg})`,borderRadius:14,padding:18,
          border:`1px solid ${C.border}`,marginBottom:20,display:'flex',alignItems:'center',gap:20,flexWrap:'wrap'}}>
          <SVGCircle value={Math.round(totalPaid/totalAll*100)} max={100} color={C.success} label="מצב גביה" sublabel="%" size={90}/>
          <div style={{flex:1,minWidth:180}}>
            <div style={{height:8,background:C.border,borderRadius:4,overflow:'hidden',marginBottom:8}}>
              <div style={{width:Math.round(totalPaid/totalAll*100)+'%',height:'100%',borderRadius:4,
                background:`linear-gradient(90deg,${C.success}88,${C.success})`,transition:'width 1.5s ease'}}/>
            </div>
            <div style={{color:C.sub,fontSize:14}}>{fmtCurrency(totalPaid)} מתוך {fmtCurrency(totalAll)} התקבלו</div>
          </div>
        </div>
      )}
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {payments.map(py=>(
          <div key={py.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`,
            display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:600,color:C.text,fontSize:18}}>{py.title}</div>
              <div style={{color:C.sub,fontSize:16,marginTop:4}}>
                {fmtCurrency(py.amount)}{py.dueDate&&' · יעד: '+fmtDate(py.dueDate)}{py.receivedDate&&' · התקבל: '+fmtDate(py.receivedDate)}
              </div>
              {py.notes && <div style={{color:C.sub,fontSize:14}}>{py.notes}</div>}
            </div>
            <div style={{display:'flex',gap:10,alignItems:'center'}}>
              <StatusBadge status={py.status}/>
              {py.status==='pending' && <Btn size="sm" onClick={()=>markPaid(py.id)}>✓ שולם</Btn>}
            </div>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="תשלום חדש" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="סכום (₪)" type="number" value={form.amount} onChange={v=>setForm(f=>({...f,amount:v}))} required/>
            <Input label="תאריך יעד" type="date" value={form.dueDate} onChange={v=>setForm(f=>({...f,dueDate:v}))}/>
            <Input label="הערות" value={form.notes} onChange={v=>setForm(f=>({...f,notes:v}))}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף תשלום</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── PUNCH LIST TAB ───────────────────────────────────────────────────────────
function PunchListTab({ project, setProject, officeId, user }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',desc:'',location:'',responsible:'',priority:'medium',imgs:[]});
  const [editingId, setEditingId] = React.useState(null);
  const [editForm, setEditForm] = React.useState(null);
  const [uploadingId, setUploadingId] = React.useState(null);
  const [uploadingForm, setUploadingForm] = React.useState(false);
  const imgRefs = React.useRef({});
  const formImgRef = React.useRef();
  const list = project.punchList || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,punchList:[...(p.punchList||list),{...form,id:'pl'+uid(),number:list.length+1,status:'open',fixedAt:null}]}));
    setForm({title:'',desc:'',location:'',responsible:'',priority:'medium',imgs:[]}); setShowAdd(false);
  };
  const startEdit = (item) => {
    setEditForm({title:item.title||'',desc:item.desc||'',location:item.location||'',responsible:item.responsible||'',priority:item.priority||'medium'});
    setEditingId(item.id);
  };
  const saveEdit = () => {
    setProject(p=>({...p,punchList:list.map(i=>i.id===editingId?{...i,...editForm}:i)}));
    setEditingId(null); setEditForm(null);
  };
  const updateStatus = (id,s) => setProject(p=>({...p,punchList:(p.punchList||[]).map(i=>i.id===id?{...i,status:s,fixedAt:s==='closed'?today():null}:i)}));
  const itemImgs = (item) => item.imgs || (item.img ? [item.img] : []);
  const uploadImgs = async (id, files) => {
    if (!files || !files.length) return;
    setUploadingId(id);
    for (const file of Array.from(files)) {
      await uploadOfficeFile(officeId, project.id, 'punchlist', file,
        path => setProject(p=>({...p,punchList:(p.punchList||[]).map(i=>
          i.id===id?{...i, imgs:[...itemImgs(i), path]}:i)})));
    }
    setUploadingId(null);
  };
  const removeImg = (id, path) => {
    setProject(p=>({...p,punchList:(p.punchList||[]).map(i=>
      i.id===id?{...i, imgs:itemImgs(i).filter(p2=>p2!==path), img: i.img===path?null:i.img}:i)}));
  };
  const priColors = {high:C.danger,medium:C.warning,low:C.success};
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>Punch List — ממצאים</h3>
          <p style={{color:C.sub,fontSize:16}}>{list.filter(i=>i.status==='open').length} פתוחים · {list.filter(i=>i.status==='closed').length} סגורים</p>
        </div>
        <Btn onClick={()=>setShowAdd(true)}>+ ממצא חדש</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
        {list.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17,gridColumn:'1/-1'}}>אין ממצאים פתוחים</div>}
        {list.map(item=>(
          <div key={item.id} style={{background:C.card,borderRadius:14,padding:18,
            border:`1px solid ${item.status==='open'?C.danger:item.status==='in-progress'?C.warning:C.border}`,
            borderRight:`4px solid ${priColors[item.priority]||C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:18}}>#{item.number} — {item.title}</div>
                {item.desc && <div style={{color:C.sub,fontSize:16,marginTop:4}}>{item.desc}</div>}
                <div style={{display:'flex',gap:12,marginTop:6}}>
                  {item.location && <span style={{fontSize:14,color:C.sub}}>📍 {item.location}</span>}
                  {item.responsible && <span style={{fontSize:14,color:C.sub}}>👷 {item.responsible}</span>}
                  {item.fixedAt && <span style={{fontSize:14,color:C.success}}>✓ תוקן: {fmtDate(item.fixedAt)}</span>}
                </div>
              </div>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <StatusBadge status={item.status}/>
                <Badge text={item.priority==='high'?'גבוה':item.priority==='medium'?'בינוני':'נמוך'} color={priColors[item.priority]}/>
              </div>
            </div>
            {itemImgs(item).length > 0 && (
              <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:10}}>
                {itemImgs(item).map(path=>(
                  <div key={path} style={{position:'relative',width:72,height:72,flexShrink:0}}>
                    <StorageImage path={path} alt="ממצא" style={{width:72,height:72,objectFit:'cover',borderRadius:8}}/>
                    <button onClick={()=>removeImg(item.id,path)} title="הסר תמונה"
                      style={{position:'absolute',top:-6,left:-6,width:20,height:20,borderRadius:'50%',
                        background:C.danger,color:'#fff',border:'none',cursor:'pointer',fontSize:12,
                        display:'flex',alignItems:'center',justifyContent:'center',lineHeight:1}}>✕</button>
                  </div>
                ))}
              </div>
            )}
            <div style={{display:'flex',gap:8,marginTop:8,flexWrap:'wrap'}}>
              {item.status==='open' && <Btn size="sm" onClick={()=>updateStatus(item.id,'in-progress')}>בטיפול</Btn>}
              {(item.status==='open'||item.status==='in-progress') && <Btn size="sm" variant="ghost" onClick={()=>updateStatus(item.id,'closed')}>✓ סגור</Btn>}
              <input type="file" accept="image/*" multiple style={{display:'none'}}
                ref={el=>imgRefs.current[item.id]=el}
                onChange={e=>{uploadImgs(item.id, e.target.files); e.target.value='';}}/>
              <Btn size="sm" variant="ghost" onClick={()=>imgRefs.current[item.id]?.click()} disabled={uploadingId===item.id}>
                📷 {uploadingId===item.id?'מעלה...':'הוסף תמונות'}
              </Btn>
              {user?.role==='admin' && (
                <Btn size="sm" variant="ghost" onClick={()=>startEdit(item)}>✏️ ערוך</Btn>
              )}
            </div>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="ממצא חדש" onClose={()=>setShowAdd(false)} width={480}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="תיאור" value={form.desc} onChange={v=>setForm(f=>({...f,desc:v}))}/>
            <Input label="מיקום" value={form.location} onChange={v=>setForm(f=>({...f,location:v}))} placeholder="חדר, קומה..."/>
            <Input label="אחראי" value={form.responsible} onChange={v=>setForm(f=>({...f,responsible:v}))}/>
            <Select label="עדיפות" value={form.priority} onChange={v=>setForm(f=>({...f,priority:v}))}
              options={[{value:'high',label:'גבוהה'},{value:'medium',label:'בינונית'},{value:'low',label:'נמוכה'}]}/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>תמונות ממצא (אופציונלי)</label>
              <input ref={formImgRef} type="file" accept="image/*" multiple style={{display:'none'}}
                onChange={async e=>{const files=Array.from(e.target.files||[]);e.target.value='';if(!files.length)return;
                  setUploadingForm(true);
                  for (const file of files) {
                    await uploadOfficeFile(officeId, project.id, 'punchlist', file,
                      path=>setForm(f=>({...f,imgs:[...(f.imgs||[]),path]})));
                  }
                  setUploadingForm(false);}}/>
              <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
                <Btn size="sm" variant="ghost" onClick={()=>formImgRef.current?.click()} disabled={uploadingForm}>
                  📷 {uploadingForm?'מעלה...':'הוסף תמונות'}
                </Btn>
                {(form.imgs||[]).map(path=>(
                  <div key={path} style={{position:'relative',width:44,height:44}}>
                    <StorageImage path={path} alt="ממצא" style={{width:44,height:44,objectFit:'cover',borderRadius:6}}/>
                    <button onClick={()=>setForm(f=>({...f,imgs:(f.imgs||[]).filter(p=>p!==path)}))} title="הסר"
                      style={{position:'absolute',top:-5,left:-5,width:16,height:16,borderRadius:'50%',
                        background:C.danger,color:'#fff',border:'none',cursor:'pointer',fontSize:10,
                        display:'flex',alignItems:'center',justifyContent:'center',lineHeight:1}}>✕</button>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף ממצא</Btn>
            </div>
          </div>
        </Modal>
      )}
      {editingId && (
        <Modal title="ערוך ממצא" onClose={()=>{setEditingId(null);setEditForm(null);}} width={480}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={editForm.title} onChange={v=>setEditForm(f=>({...f,title:v}))} required/>
            <Input label="תיאור" value={editForm.desc} onChange={v=>setEditForm(f=>({...f,desc:v}))}/>
            <Input label="מיקום" value={editForm.location} onChange={v=>setEditForm(f=>({...f,location:v}))} placeholder="חדר, קומה..."/>
            <Input label="אחראי" value={editForm.responsible} onChange={v=>setEditForm(f=>({...f,responsible:v}))}/>
            <Select label="עדיפות" value={editForm.priority} onChange={v=>setEditForm(f=>({...f,priority:v}))}
              options={[{value:'high',label:'גבוהה'},{value:'medium',label:'בינונית'},{value:'low',label:'נמוכה'}]}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>{setEditingId(null);setEditForm(null);}} variant="ghost">ביטול</Btn>
              <Btn onClick={saveEdit}>שמור</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── RFI TAB ─────────────────────────────────────────────────────────────────
function RFITab({ project, setProject, user }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',desc:'',from:'',priority:'medium',dueDate:''});
  const [replyForm, setReplyForm] = React.useState({});
  const rfis = project.rfis || [];
  const roleLabel = { admin:'מנהל', arch:'אדריכל', employee:'עובד משרד', client:'לקוח' };
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,rfis:[...rfis,{...form,id:'r'+uid(),number:rfis.length+1,img:null,reply:null,repliedBy:null,repliedAt:null}]}));
    setForm({title:'',desc:'',from:'',priority:'medium',dueDate:''}); setShowAdd(false);
  };
  const reply = (id) => {
    const text = replyForm[id]; if (!text) return;
    const repliedBy = user?.name || roleLabel[user?.role] || 'משתמש';
    setProject(p=>({...p,rfis:rfis.map(r=>r.id===id?{...r,reply:text,repliedBy,repliedAt:today()}:r)}));
    setReplyForm(f=>({...f,[id]:''}));
  };
  const priColors = {high:C.danger,medium:C.warning,low:C.success};
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>RFI — בקשות מידע</h3>
          <p style={{color:C.sub,fontSize:16}}>{rfis.filter(r=>!r.reply).length} ממתינות לתשובה</p>
        </div>
        <Btn onClick={()=>setShowAdd(true)}>+ RFI חדש</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
        {rfis.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17,gridColumn:'1/-1'}}>אין בקשות מידע</div>}
        {rfis.map(r=>(
          <div key={r.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${r.reply?C.border:C.warning}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:18}}>RFI #{r.number} — {r.title}</div>
                <div style={{color:C.sub,fontSize:16,marginTop:4}}>{r.desc}</div>
                <div style={{display:'flex',gap:12,marginTop:6}}>
                  {r.from && <span style={{fontSize:14,color:C.sub}}>מ: {r.from}</span>}
                  {r.dueDate && <span style={{fontSize:14,color:C.sub}}>יעד: {fmtDate(r.dueDate)}</span>}
                </div>
              </div>
              <Badge text={r.priority==='high'?'דחוף':r.priority==='medium'?'בינוני':'רגיל'} color={priColors[r.priority]}/>
            </div>
            {r.reply ? (
              <div style={{background:C.success+'15',borderRadius:8,padding:'10px 12px',marginTop:10}}>
                <div style={{fontSize:14,fontWeight:600,color:C.success,marginBottom:4}}>✓ תשובה — {r.repliedBy} · {fmtDate(r.repliedAt)}</div>
                <div style={{color:C.text,fontSize:16}}>{r.reply}</div>
              </div>
            ) : (
              <div style={{marginTop:12,display:'flex',gap:10}}>
                <input value={replyForm[r.id]||''} onChange={e=>setReplyForm(f=>({...f,[r.id]:e.target.value}))}
                  placeholder="כתוב תשובה..."
                  style={{flex:1,padding:'8px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:16,outline:'none',direction:'rtl',fontFamily:'Heebo,Arial,sans-serif'}}/>
                <Btn size="sm" onClick={()=>reply(r.id)}>שלח</Btn>
              </div>
            )}
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="RFI חדש" onClose={()=>setShowAdd(false)} width={480}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="תיאור מפורט" value={form.desc} onChange={v=>setForm(f=>({...f,desc:v}))}/>
            <Input label="מבקש" value={form.from} onChange={v=>setForm(f=>({...f,from:v}))} placeholder="קבלן, מהנדס..."/>
            <Select label="עדיפות" value={form.priority} onChange={v=>setForm(f=>({...f,priority:v}))}
              options={[{value:'high',label:'דחוף'},{value:'medium',label:'בינוני'},{value:'low',label:'רגיל'}]}/>
            <Input label="תאריך יעד" type="date" value={form.dueDate} onChange={v=>setForm(f=>({...f,dueDate:v}))}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף RFI</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── GALLERY TAB ──────────────────────────────────────────────────────────────
function GalleryTab({ project, setProject, officeId }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',phase:1,isAI:false,url:null});
  const [view, setView] = React.useState('grid');
  const [uploading, setUploading] = React.useState(false);
  const fileRef = React.useRef();
  const coverRef = React.useRef();
  const gallery = project.gallery || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,gallery:[...gallery,{...form,id:'g'+uid(),date:today()}]}));
    setForm({title:'',phase:1,isAI:false,url:null}); setShowAdd(false);
  };
  const setCover = (path) => setProject(p=>({...p,coverImage:path}));
  const handleFileChange = async (e, onUploaded) => {
    const file = e.target.files[0]; if (!file) return;
    setUploading(true);
    await uploadOfficeFile(officeId, project.id, 'gallery', file, onUploaded);
    setUploading(false);
  };
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20,flexWrap:'wrap',gap:10}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>גלריה</h3>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <input ref={coverRef} type="file" accept="image/*" style={{display:'none'}}
            onChange={e=>handleFileChange(e, path=>setCover(path))}/>
          <Btn size="sm" variant="ghost" onClick={()=>coverRef.current?.click()} disabled={uploading}>
            {uploading?'מעלה...':'🖼️ תמונת רקע לפרויקט'}
          </Btn>
          <button onClick={()=>setView(v=>v==='grid'?'mood':'grid')}
            style={{padding:'6px 12px',borderRadius:8,border:`1px solid ${C.border}`,background:C.bg,
              color:C.sub,cursor:'pointer',fontSize:13}}>
            {view==='grid' ? '🎨 Mood Board' : '⊞ גריד'}
          </button>
          <Btn onClick={()=>setShowAdd(true)}>+ הוסף תמונה</Btn>
        </div>
      </div>
      {gallery.length===0 && <div style={{color:C.sub,textAlign:'center',padding:60,fontSize:17}}>אין תמונות בגלריה</div>}
      {view==='grid' ? (
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:14}}>
          {gallery.map(img=>(
            <div key={img.id} style={{background:C.card,borderRadius:14,overflow:'hidden',
              border:`1px solid ${C.border}`,position:'relative'}}>
              <div style={{height:140,background:`linear-gradient(135deg,${C.primary}33,${C.accent}22)`,
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:58,position:'relative',overflow:'hidden'}}>
                {img.url
                  ? <StorageImage path={img.url} style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}} alt={img.title}/>
                  : (img.isAI ? '🤖' : '🖼️')}
              </div>
              <div style={{padding:'10px 12px'}}>
                <div style={{fontWeight:600,color:C.text,fontSize:16,marginBottom:4}}>{img.title}</div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:13,color:C.sub}}>{PHASES[(img.phase||1)-1]?.short} · {fmtDate(img.date)}</span>
                  {img.isAI && <Badge text="AI" color={C.ai}/>}
                </div>
                {img.url && (
                  <button onClick={()=>setCover(img.url)}
                    style={{marginTop:6,fontSize:12,background:'none',border:`1px solid ${C.border}`,
                      borderRadius:6,padding:'3px 8px',color:C.sub,cursor:'pointer'}}>
                    קבע כרקע
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{columns:3,gap:12}}>
          {gallery.map(img=>(
            <div key={img.id} style={{marginBottom:12,breakInside:'avoid',borderRadius:10,overflow:'hidden',
              border:`1px solid ${C.border}`,background:C.card}}>
              <div style={{height:img.url?'auto':120,background:`linear-gradient(135deg,${C.primary}22,${C.accent}11)`,
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>
                {img.url
                  ? <StorageImage path={img.url} style={{width:'100%',height:'auto',minHeight:120,display:'block'}} alt={img.title}/>
                  : (img.isAI ? '🤖' : '🖼️')}
              </div>
              <div style={{padding:'8px 12px',fontSize:13,color:C.sub}}>{img.title}</div>
            </div>
          ))}
        </div>
      )}
      {showAdd && (
        <Modal title="הוסף לגלריה" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Select label="שלב" value={String(form.phase)} onChange={v=>setForm(f=>({...f,phase:Number(v)}))}
              options={PHASES.map(p=>({value:String(p.id),label:p.name}))}/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>העלאת תמונה</label>
              <input ref={fileRef} type="file" accept="image/*" style={{display:'none'}}
                onChange={e=>handleFileChange(e, path=>setForm(f=>({...f,url:path})))}/>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <Btn size="sm" variant="ghost" onClick={()=>fileRef.current?.click()} disabled={uploading}>
                  {uploading?'מעלה...':'בחר קובץ'}
                </Btn>
                {form.url && <span style={{fontSize:13,color:C.success}}>✓ תמונה נטענה</span>}
              </div>
            </div>
            <label style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',color:C.text,fontSize:17}}>
              <input type="checkbox" checked={form.isAI} onChange={e=>setForm(f=>({...f,isAI:e.target.checked}))}/>
              תמונה שנוצרה על ידי AI
            </label>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── DOCUMENTS TAB ────────────────────────────────────────────────────────────
function DocumentsTab({ project, setProject, officeId }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({name:'',type:'drawing',uploadedBy:'',fileType:'pdf',filePath:null});
  const [uploading, setUploading] = React.useState(false);
  const fileRef = React.useRef();
  const docs = project.documents || [];
  const add = () => {
    if (!form.name) return;
    setProject(p=>({...p,documents:[...docs,{...form,id:'d'+uid(),date:today(),thumb:null}]}));
    setForm({name:'',type:'drawing',uploadedBy:'',fileType:'pdf',filePath:null}); setShowAdd(false);
  };
  const handleFile = async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    setForm(f=>({...f, name:f.name||file.name.replace(/\.[^.]+$/,''), fileType:ext}));
    setUploading(true);
    await uploadOfficeFile(officeId, project.id, 'documents', file, path => setForm(f=>({...f,filePath:path})));
    setUploading(false);
  };
  const typeIcons = {drawing:'📐',contract:'📋',permit:'🏛️',report:'📊',other:'📄'};
  const typeLabels = {drawing:'תרשים',contract:'חוזה',permit:'היתר',report:'דוח',other:'אחר'};
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>מסמכים</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ הוסף מסמך</Btn>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {docs.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17}}>אין מסמכים</div>}
        {docs.map(doc=>(
          <div key={doc.id} onClick={()=>openAttachment(doc.filePath||doc.fileData)}
            style={{background:C.card,borderRadius:12,padding:'14px 18px',
            border:`1px solid ${C.border}`,display:'flex',alignItems:'center',gap:14,
            cursor:(doc.filePath||doc.fileData)?'pointer':'default'}}>
            <div style={{fontSize:38}}>{typeIcons[doc.type]||'📄'}</div>
            <div style={{flex:1}}>
              <div style={{fontWeight:600,color:C.text,fontSize:17}}>{doc.name}</div>
              <div style={{color:C.sub,fontSize:14,marginTop:4}}>
                {typeLabels[doc.type]||doc.type} · {fmtDate(doc.date)}{doc.uploadedBy&&' · '+doc.uploadedBy}
                {!(doc.filePath||doc.fileData) && ' · אין קובץ מצורף'}
              </div>
            </div>
            <Badge text={doc.fileType?.toUpperCase()||'PDF'} color={C.info}/>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="הוסף מסמך" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>העלאת קובץ (PDF / תמונה)</label>
              <input ref={fileRef} type="file" accept=".pdf,image/*" style={{display:'none'}} onChange={handleFile}/>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <Btn size="sm" variant="ghost" onClick={()=>fileRef.current?.click()} disabled={uploading}>
                  {uploading?'מעלה...':'📂 בחר קובץ'}
                </Btn>
                {form.filePath && <span style={{fontSize:13,color:C.success}}>✓ הועלה</span>}
                {form.fileType!=='pdf' && <Badge text={form.fileType.toUpperCase()} color={C.info}/>}
              </div>
            </div>
            <Input label="שם מסמך" value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} required/>
            <Select label="סוג" value={form.type} onChange={v=>setForm(f=>({...f,type:v}))}
              options={[{value:'drawing',label:'תרשים'},{value:'contract',label:'חוזה'},{value:'permit',label:'היתר'},{value:'report',label:'דוח'},{value:'other',label:'אחר'}]}/>
            <Input label="הועלה על ידי" value={form.uploadedBy} onChange={v=>setForm(f=>({...f,uploadedBy:v}))}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף מסמך</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── QUOTES TAB ───────────────────────────────────────────────────────────────
function QuotesTab({ project, setProject, officeId }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',amount:'',validUntil:'',fileName:null,filePath:null});
  const [editingId, setEditingId] = React.useState(null);
  const [editForm, setEditForm] = React.useState(null);
  const [sigModal, setSigModal] = React.useState(null);
  const [uploadingId, setUploadingId] = React.useState(null);
  const [uploadingForm, setUploadingForm] = React.useState(false);
  const fileRefs = React.useRef({});
  const formFileRef = React.useRef();
  const quotes = project.quotes || [];
  const add = () => {
    if (!form.title||!form.amount) return;
    setProject(p=>({...p,quotes:[...quotes,{...form,id:'q'+uid(),amount:Number(form.amount),status:'pending',date:today(),signature:null}]}));
    setForm({title:'',amount:'',validUntil:'',fileName:null,filePath:null}); setShowAdd(false);
  };
  const updateStatus = (id,s) => setProject(p=>({...p,quotes:quotes.map(q=>q.id===id?{...q,status:s}:q)}));
  const startEdit = (q) => {
    setEditForm({title:q.title||'',amount:q.amount||'',validUntil:q.validUntil||''});
    setEditingId(q.id);
  };
  const saveEdit = () => {
    setProject(p=>({...p,quotes:(p.quotes||quotes).map(q=>q.id===editingId?{...q,...editForm,amount:Number(editForm.amount)||0}:q)}));
    setEditingId(null); setEditForm(null);
  };
  const removeQuote = (id) => setProject(p=>({...p,quotes:(p.quotes||quotes).filter(q=>q.id!==id)}));
  const addSig = (id,sig) => { setProject(p=>({...p,quotes:quotes.map(q=>q.id===id?{...q,signature:sig,status:'approved'}:q)})); setSigModal(null); };
  const attachFile = async (id, file) => {
    setUploadingId(id);
    await uploadOfficeFile(officeId, project.id, 'quotes', file, (path,name) =>
      setProject(p=>({...p,quotes:quotes.map(q=>q.id===id?{...q,fileName:name,filePath:path}:q)})));
    setUploadingId(null);
  };
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>הצעות מחיר</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ הצעת מחיר</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
        {quotes.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17,gridColumn:'1/-1'}}>אין הצעות מחיר</div>}
        {quotes.map(q=>(
          <div key={q.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:18}}>{q.title}</div>
                <div style={{fontSize:29,fontWeight:800,color:C.primary,marginTop:4}}>{fmtCurrency(q.amount)}</div>
                <div style={{color:C.sub,fontSize:16,marginTop:4}}>
                  הוצאה: {fmtDate(q.date)}{q.validUntil&&' · בתוקף עד: '+fmtDate(q.validUntil)}
                </div>
              </div>
              <StatusBadge status={q.status}/>
            </div>
            {q.signature && <div style={{background:C.success+'15',borderRadius:8,padding:'8px 12px',marginBottom:10,fontSize:16,color:C.success}}>✓ חתום: {q.signature}</div>}
            {q.fileName && (
              <div onClick={()=>openAttachment(q.filePath)}
                style={{fontSize:13,color:C.info,marginBottom:10,cursor:q.filePath?'pointer':'default',
                  textDecoration:q.filePath?'underline':'none'}}>📎 {q.fileName}</div>
            )}
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {q.status==='pending' && <Btn size="sm" onClick={()=>updateStatus(q.id,'approved')}>✓ אשר</Btn>}
              {q.status==='pending' && <Btn size="sm" variant="ghost" onClick={()=>setSigModal(q.id)}>✍️ חתימה</Btn>}
              {q.status==='pending' && <Btn size="sm" variant="ghost" onClick={()=>updateStatus(q.id,'rejected')}>דחה</Btn>}
              <input type="file" accept=".pdf,image/*" style={{display:'none'}}
                ref={el=>fileRefs.current[q.id]=el}
                onChange={e=>attachFile(q.id, e.target.files[0])}/>
              <Btn size="sm" variant="ghost" onClick={()=>fileRefs.current[q.id]?.click()} disabled={uploadingId===q.id}>
                📎 {uploadingId===q.id?'מעלה...':q.fileName?'החלף קובץ':'צרף PDF'}
              </Btn>
              <Btn size="sm" variant="ghost" onClick={()=>{
                const w=window.open('','_blank');
                w.document.write(`<html dir="rtl"><head><title>הצעת מחיר — ${sanitize(q.title)}</title>
                  <style>body{font-family:Arial,sans-serif;padding:40px;direction:rtl}h1{font-size:28px}
                  .amount{font-size:36px;font-weight:800;color:#AF8C5C;margin:12px 0}
                  .meta{color:#777;margin-bottom:8px}.sig{margin-top:24px;padding:12px;border:1px solid #ccc;border-radius:8px;background:#f9f9f9}
                  @media print{button{display:none}}</style></head>
                  <body><h1>הצעת מחיר</h1><h2>${sanitize(q.title)}</h2>
                  <div class="amount">${fmtCurrency(q.amount)}</div>
                  <div class="meta">הוצאה: ${fmtDate(q.date)}${q.validUntil?' · בתוקף עד: '+fmtDate(q.validUntil):''}</div>
                  <div class="meta">סטטוס: ${q.status==='approved'?'מאושר':q.status==='rejected'?'נדחה':'ממתין'}</div>
                  ${q.signature?`<div class="sig">חתימה: ${sanitize(q.signature)}</div>`:''}
                  <br/><button onclick="window.print()">🖨️ הדפס PDF</button></body></html>`);
                w.document.close();
              }}>🖨️ PDF</Btn>
              <Btn size="sm" variant="ghost" onClick={()=>startEdit(q)}>✏️ ערוך</Btn>
              <Btn size="sm" variant="ghost" onClick={()=>removeQuote(q.id)}>🗑️ מחק</Btn>
            </div>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="הצעת מחיר חדשה" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="סכום (₪)" type="number" value={form.amount} onChange={v=>setForm(f=>({...f,amount:v}))} required/>
            <Input label="בתוקף עד" type="date" value={form.validUntil} onChange={v=>setForm(f=>({...f,validUntil:v}))}/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>צרף מסמך PDF (אופציונלי)</label>
              <input ref={formFileRef} type="file" accept=".pdf,image/*" style={{display:'none'}}
                onChange={async e=>{const file=e.target.files[0];if(!file)return;setUploadingForm(true);
                  await uploadOfficeFile(officeId, project.id, 'quotes', file, (path,name)=>setForm(f=>({...f,fileName:name,filePath:path})));
                  setUploadingForm(false);}}/>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <Btn size="sm" variant="ghost" onClick={()=>formFileRef.current?.click()} disabled={uploadingForm}>
                  📎 {uploadingForm?'מעלה...':'בחר קובץ'}
                </Btn>
                {form.fileName && <span style={{fontSize:13,color:C.success}}>✓ {form.fileName}</span>}
              </div>
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>צור הצעה</Btn>
            </div>
          </div>
        </Modal>
      )}
      {sigModal && (
        <Modal title="חתימה דיגיטלית" onClose={()=>setSigModal(null)} width={400}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <p style={{color:C.sub,fontSize:16}}>הכנס שם לחתימה דיגיטלית:</p>
            <input id="sigInput" type="text" placeholder="שם מלא"
              style={{padding:'10px 14px',borderRadius:8,border:`1px solid ${C.border}`,background:C.inputBg,color:C.text,fontSize:17,outline:'none',direction:'rtl',fontFamily:'Heebo,Arial,sans-serif'}}/>
            <Btn onClick={()=>{const v=document.getElementById('sigInput')?.value;if(v)addSig(sigModal,v);}}>חתום</Btn>
          </div>
        </Modal>
      )}
      {editingId && (
        <Modal title="ערוך הצעת מחיר" onClose={()=>{setEditingId(null);setEditForm(null);}} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={editForm.title} onChange={v=>setEditForm(f=>({...f,title:v}))} required/>
            <Input label="סכום (₪)" type="number" value={editForm.amount} onChange={v=>setEditForm(f=>({...f,amount:v}))} required/>
            <Input label="בתוקף עד" type="date" value={editForm.validUntil} onChange={v=>setEditForm(f=>({...f,validUntil:v}))}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>{setEditingId(null);setEditForm(null);}} variant="ghost">ביטול</Btn>
              <Btn onClick={saveEdit}>שמור</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── APPROVALS TAB ────────────────────────────────────────────────────────────
function ApprovalsTab({ project, setProject, user, officeId }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',requestedBy:'',attachmentName:null,attachmentPath:null});
  const [uploadingId, setUploadingId] = React.useState(null);
  const [uploadingForm, setUploadingForm] = React.useState(false);
  const attachRefs = React.useRef({});
  const formAttachRef = React.useRef();
  const approvals = project.approvals || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,approvals:[...approvals,{...form,id:'a'+uid(),date:today(),status:'pending',approvedBy:null,comment:''}]}));
    notifyProjectMembers(officeId, project, user, 'approval_requested', 'בקשת אישור חדשה: '+form.title, null);
    setForm({title:'',requestedBy:'',attachmentName:null,attachmentPath:null}); setShowAdd(false);
  };
  const attachPDF = async (id, file) => {
    if (!file) return;
    setUploadingId(id);
    await uploadOfficeFile(officeId, project.id, 'approvals', file, (path, name) =>
      setProject(p=>({...p,approvals:approvals.map(a=>a.id===id?{...a,attachmentName:name,attachmentPath:path}:a)})));
    setUploadingId(null);
  };
  const approve = (id,comment='') => {
    const a0 = approvals.find(a=>a.id===id);
    setProject(p=>({...p,approvals:approvals.map(a=>a.id===id?{...a,status:'approved',approvedBy:user.name,comment}:a)}));
    if (a0) notifyProjectMembers(officeId, project, user, 'approval_decided', 'האישור אושר: '+a0.title, null);
  };
  const reject = (id,comment='') => {
    const a0 = approvals.find(a=>a.id===id);
    setProject(p=>({...p,approvals:approvals.map(a=>a.id===id?{...a,status:'rejected',approvedBy:user.name,comment}:a)}));
    if (a0) notifyProjectMembers(officeId, project, user, 'approval_decided', 'האישור נדחה: '+a0.title, null);
  };
  const removeApproval = (id) => setProject(p=>({...p,approvals:(p.approvals||approvals).filter(a=>a.id!==id)}));
  const pending = approvals.filter(a=>a.status==='pending');
  const done    = approvals.filter(a=>a.status!=='pending');
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>מרכז אישורים</h3>
          <p style={{color:C.sub,fontSize:16}}>{pending.length} ממתינים לאישור</p>
        </div>
        {user.role!=='client' && <Btn onClick={()=>setShowAdd(true)}>+ בקשת אישור</Btn>}
      </div>
      {pending.length>0 && (
        <div style={{marginBottom:20}}>
          <div style={{fontWeight:700,color:C.warning,fontSize:16,marginBottom:10}}>⏳ ממתינים לאישור</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
          {pending.map(a=>(
            <div key={a.id} style={{background:C.card,borderRadius:14,padding:18,
              border:`1px solid ${C.warning}`,position:'relative'}}>
              <div style={{fontWeight:700,color:C.text,fontSize:18,marginBottom:4}}>{a.title}</div>
              <div style={{color:C.sub,fontSize:16,marginBottom:12}}>בקשה מ: {a.requestedBy} · {fmtDate(a.date)}</div>
              {a.attachmentName && (
                <div onClick={()=>openAttachment(a.attachmentPath)}
                  style={{fontSize:13,color:C.info,marginBottom:8,cursor:a.attachmentPath?'pointer':'default',
                    textDecoration:a.attachmentPath?'underline':'none'}}>📎 {a.attachmentName}</div>
              )}
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {(user.role==='client'||user.role==='admin') && (
                  <>
                    <Btn size="sm" onClick={()=>approve(a.id,'מאושר')}>✓ אשר</Btn>
                    <Btn size="sm" variant="ghost" onClick={()=>reject(a.id,'נדחה')}>✗ דחה</Btn>
                  </>
                )}
                <input type="file" accept=".pdf,image/*" style={{display:'none'}}
                  ref={el=>attachRefs.current[a.id]=el}
                  onChange={e=>attachPDF(a.id, e.target.files[0])}/>
                <Btn size="sm" variant="ghost" onClick={()=>attachRefs.current[a.id]?.click()} disabled={uploadingId===a.id}>
                  📎 {uploadingId===a.id?'מעלה...':'צרף PDF'}
                </Btn>
                {user.role==='admin' && <Btn size="sm" variant="ghost" onClick={()=>removeApproval(a.id)}>🗑️ מחק</Btn>}
              </div>
            </div>
          ))}
          </div>
        </div>
      )}
      {done.length>0 && (
        <div>
          <div style={{fontWeight:700,color:C.sub,fontSize:16,marginBottom:10}}>היסטוריה</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
          {done.map(a=>(
            <div key={a.id} style={{background:C.card,borderRadius:14,padding:16,border:`1px solid ${C.border}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}}>
                <div>
                  <div style={{fontWeight:600,color:C.text,fontSize:17}}>{a.title}</div>
                  <div style={{color:C.sub,fontSize:14,marginTop:4}}>
                    {a.approvedBy && `${a.status==='approved'?'אושר':'נדחה'} ע"י ${a.approvedBy}`}
                    {a.comment && ' · '+a.comment}
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:8}}>
                  <StatusBadge status={a.status}/>
                  {user.role==='admin' && (
                    <button onClick={()=>removeApproval(a.id)} title="מחק"
                      style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:15}}>🗑️</button>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}
      {showAdd && (
        <Modal title="בקשת אישור חדשה" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="נושא האישור" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="בקשה מ" value={form.requestedBy} onChange={v=>setForm(f=>({...f,requestedBy:v}))} placeholder="שם האדריכל"/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:6}}>צרף קובץ (אופציונלי)</label>
              <input ref={formAttachRef} type="file" accept=".pdf,image/*" style={{display:'none'}}
                onChange={async e=>{const file=e.target.files[0];if(!file)return;setUploadingForm(true);
                  await uploadOfficeFile(officeId, project.id, 'approvals', file, (path,name)=>setForm(f=>({...f,attachmentName:name,attachmentPath:path})));
                  setUploadingForm(false);}}/>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <Btn size="sm" variant="ghost" onClick={()=>formAttachRef.current?.click()} disabled={uploadingForm}>
                  📎 {uploadingForm?'מעלה...':'בחר קובץ'}
                </Btn>
                {form.attachmentName && <span style={{fontSize:13,color:C.success}}>✓ {form.attachmentName}</span>}
              </div>
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>שלח לאישור</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── MESSAGES TAB ─────────────────────────────────────────────────────────────
function MessagesTab({ project, setProject, user }) {
  const [msg, setMsg] = React.useState('');
  const messages = project.messages || [];
  const chatRef = React.useRef();
  const send = () => {
    if (!msg.trim()) return;
    const m = {id:'m'+uid(),from:user.name,text:msg.trim(),time:new Date().toLocaleTimeString('he-IL',{hour:'2-digit',minute:'2-digit'}),date:today(),role:user.role};
    setProject(p=>({...p,messages:[...messages,m]}));
    notifyProjectMembers(user.officeId, project, user, 'message', 'הודעה חדשה מ'+user.name, msg.trim().slice(0,80));
    setMsg('');
    setTimeout(()=>chatRef.current?.scrollTo({top:9999,behavior:'smooth'}),50);
  };
  React.useEffect(()=>{chatRef.current?.scrollTo({top:9999});},[messages.length]);
  const removeMessage = (id) => setProject(p=>({...p,messages:(p.messages||messages).filter(m=>m.id!==id)}));
  return (
    <div style={{padding:24,height:'calc(100vh - 140px)',display:'flex',flexDirection:'column',animation:'fadeIn .3s ease'}}>
      <h3 style={{color:C.text,fontSize:22,fontWeight:700,marginBottom:16}}>💬 הודעות פנימיות</h3>
      <div ref={chatRef} style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:12,marginBottom:16}}>
        {messages.map((m,i)=>{
          const isMe = m.from===user.name;
          return (
            <div key={m.id||i} style={{display:'flex',flexDirection:'column',alignItems:isMe?'flex-end':'flex-start'}}>
              <div style={{maxWidth:'70%',padding:'10px 14px',borderRadius:16,fontSize:17,lineHeight:1.7,
                background:isMe?C.primary:C.card,color:isMe?(isLightColor(C.primary)?C.bg:'#fff'):C.text,
                border:isMe?'none':`1px solid ${C.border}`,
                borderTopRightRadius:isMe?4:16,borderTopLeftRadius:isMe?16:4}}>
                {m.text}
              </div>
              <div style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:C.sub,marginTop:4,marginRight:isMe?0:4,marginLeft:isMe?4:0}}>
                {m.from} · {m.time}
                {user.role==='admin' && m.id && (
                  <button onClick={()=>removeMessage(m.id)} title="מחק הודעה"
                    style={{background:'none',border:'none',color:C.sub,cursor:'pointer',fontSize:12,padding:0}}>🗑️</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{display:'flex',gap:10}}>
        <input value={msg} onChange={e=>setMsg(e.target.value)}
          onKeyDown={e=>{if(e.key==='Enter')send();}}
          placeholder="כתוב הודעה... (Enter לשליחה)"
          style={{flex:1,padding:'11px 16px',borderRadius:24,border:`1px solid ${C.border}`,
            background:C.inputBg,color:C.text,fontSize:17,outline:'none',direction:'rtl',
            fontFamily:'Heebo,Arial,sans-serif'}}/>
        <Btn onClick={send} disabled={!msg.trim()}>שלח</Btn>
      </div>
    </div>
  );
}

// ─── BI REPORTS TAB (Studio only) ────────────────────────────────────────────
function BIReportsTab({ project, data }) {
  const isMobile = useIsMobile();
  const allProjects = data?.projects || [project];
  const totalRevenue = allProjects.reduce((s,p)=>(p.payments||[]).filter(py=>py.status==='paid').reduce((a,py)=>a+py.amount,0)+s,0);
  const totalPending = allProjects.reduce((s,p)=>(p.payments||[]).filter(py=>py.status==='pending').reduce((a,py)=>a+py.amount,0)+s,0);
  const totalBudget  = allProjects.reduce((s,p)=>s+(p.budget||0),0);
  const phaseColors  = [C.primary,C.accent,C.success,C.warning,C.danger,C.info,C.ai,C.sub];
  const phasesBar    = PHASES.map((ph,i)=>({
    label:ph.short,
    value:allProjects.filter(p=>p.currentPhase===ph.id).length,
    color:phaseColors[i%8]
  }));
  const progressBar  = allProjects.map(p=>({
    label:p.name.slice(0,6),
    value:p.progress||0,
    color: p.status==='active'?C.success:p.status==='planning'?C.info:C.sub
  }));
  const paymentTimeline = allProjects.flatMap(p=>(p.payments||[]).filter(py=>py.receivedDate))
    .sort((a,b)=>a.receivedDate?.localeCompare(b.receivedDate))
    .slice(-6)
    .map((py,i)=>({ v:py.amount/1000, label:(i+1)+'', color:C.success }));

  const collectionRate = Math.round(totalRevenue/(totalRevenue+totalPending||1)*100);

  const hoursByArchitect = {};
  allProjects.forEach(p=>(p.tasks||[]).forEach(t=>(t.hoursLogged||[]).forEach(l=>{
    hoursByArchitect[l.by] = (hoursByArchitect[l.by]||0) + l.hours;
  })));
  const archHoursBar = Object.entries(hoursByArchitect)
    .sort((a,b)=>b[1]-a[1])
    .map(([name,hrs],i)=>({ label:name.replace('אדר. ',''), value:Math.round(hrs*10)/10, color:phaseColors[i%8] }));
  const totalLoggedHours = Object.values(hoursByArchitect).reduce((s,h)=>s+h,0);

  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:800,letterSpacing:'-0.01em'}}>📊 BI Reports</h3>
          <p style={{color:C.sub,fontSize:16,marginTop:2}}>ניתוח עסקי — {allProjects.length} פרויקטים</p>
        </div>
      </div>

      {/* Top KPIs */}
      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr 1fr':'repeat(4,1fr)',gap:12,marginBottom:20}}>
        {[
          {label:'הכנסות שהתקבלו', value:fmtCurrency(totalRevenue), color:C.success, sub:'שולם'},
          {label:'תשלומים ממתינים', value:fmtCurrency(totalPending), color:C.warning, sub:'ממתין'},
          {label:'תקציב כולל', value:fmtCurrency(totalBudget), color:C.primary, sub:'מחויב'},
          {label:'אחוז גביה', value:collectionRate+'%', color:collectionRate>80?C.success:collectionRate>60?C.warning:C.danger, sub:'collection rate'},
        ].map((k,i)=>(
          <div key={i} style={{background:C.card,borderRadius:14,padding:16,border:`1px solid ${C.border}`,
            borderTop:`2px solid ${k.color}`}}>
            <div style={{fontSize:12,color:C.sub,letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:6}}>{k.label}</div>
            <div style={{fontSize:24,fontWeight:800,color:k.color,letterSpacing:'-0.02em'}}>{k.value}</div>
            <div style={{fontSize:12,color:C.sub,marginTop:4}}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr',gap:16,marginBottom:16}}>
        {/* Phase distribution bar chart */}
        <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`}}>
          <h4 style={{color:C.text,fontSize:16,fontWeight:700,marginBottom:4,letterSpacing:'-0.01em'}}>פיזור לפי שלב</h4>
          <p style={{color:C.sub,fontSize:13,marginBottom:16}}>מספר פרויקטים בכל שלב</p>
          <SVGBarChart data={phasesBar.filter(d=>d.value>0).length>0 ? phasesBar : [{label:'—',value:1,color:C.border}]} height={130}/>
          {phasesBar.every(d=>d.value===0) && (
            <div style={{textAlign:'center',color:C.sub,fontSize:16,padding:20}}>אין נתונים</div>
          )}
        </div>

        {/* Projects progress chart */}
        <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`}}>
          <h4 style={{color:C.text,fontSize:16,fontWeight:700,marginBottom:4,letterSpacing:'-0.01em'}}>התקדמות פרויקטים</h4>
          <p style={{color:C.sub,fontSize:13,marginBottom:16}}>אחוז השלמה</p>
          <SVGBarChart data={progressBar} height={130}/>
        </div>
      </div>

      {/* Hours by architect — efficiency / pricing basis */}
      {archHoursBar.length>0 && (
        <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`,marginBottom:16}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:4}}>
            <h4 style={{color:C.text,fontSize:16,fontWeight:700,letterSpacing:'-0.01em'}}>⏱️ שעות עבודה לפי אדריכל</h4>
            <span style={{fontSize:13,color:C.sub}}>סה"כ: <strong style={{color:C.primary}}>{totalLoggedHours.toFixed(1)}h</strong></span>
          </div>
          <p style={{color:C.sub,fontSize:13,marginBottom:16}}>שעות מדווחות בכל הפרויקטים — בסיס למדידת יעילות ותמחור</p>
          <SVGBarChart data={archHoursBar} height={130}/>
        </div>
      )}

      {/* Detailed progress with stacked bars */}
      <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`,marginBottom:16}}>
        <h4 style={{color:C.text,fontSize:16,fontWeight:700,marginBottom:16}}>ניתוח פרויקטים מפורט</h4>
        {allProjects.map(p=>{
          const ppaid = (p.payments||[]).filter(py=>py.status==='paid').reduce((s,py)=>s+py.amount,0);
          const ptotal = (p.payments||[]).reduce((s,py)=>s+py.amount,0);
          const ppct = Math.round(ppaid/(ptotal||1)*100);
          const statusColor = p.status==='active'?C.success:p.status==='planning'?C.info:C.sub;
          return (
            <div key={p.id} style={{marginBottom:18,paddingBottom:18,borderBottom:`1px solid ${C.border}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                <div>
                  <span style={{fontSize:17,color:C.text,fontWeight:700}}>{p.name}</span>
                  <span style={{fontSize:13,color:C.sub,marginRight:8}}> · {p.clientName}</span>
                </div>
                <div style={{display:'flex',gap:10,alignItems:'center'}}>
                  <span style={{fontSize:14,color:C.sub}}>{PHASES[(p.currentPhase||1)-1]?.name}</span>
                  <StatusBadge status={p.status}/>
                </div>
              </div>
              {/* Progress */}
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6}}>
                <div style={{fontSize:13,color:C.sub,width:52,textAlign:'left'}}>התקדמות</div>
                <div style={{flex:1,height:6,background:C.border,borderRadius:3,overflow:'hidden'}}>
                  <div style={{width:(p.progress||0)+'%',height:'100%',borderRadius:3,
                    background:`linear-gradient(90deg,${statusColor}88,${statusColor})`,transition:'width 1.5s'}}/>
                </div>
                <span style={{fontSize:13,color:statusColor,fontWeight:700,width:32}}>{p.progress||0}%</span>
              </div>
              {/* Payment */}
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{fontSize:13,color:C.sub,width:52,textAlign:'left'}}>גביה</div>
                <div style={{flex:1,height:6,background:C.border,borderRadius:3,overflow:'hidden'}}>
                  <div style={{width:ppct+'%',height:'100%',borderRadius:3,
                    background:`linear-gradient(90deg,${C.success}88,${C.success})`,transition:'width 1.5s'}}/>
                </div>
                <span style={{fontSize:13,color:C.success,fontWeight:700,width:32}}>{ppct}%</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Payment timeline line chart */}
      {paymentTimeline.length >= 2 && (
        <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`}}>
          <h4 style={{color:C.text,fontSize:16,fontWeight:700,marginBottom:4}}>מגמת תשלומים (אלפי ₪)</h4>
          <p style={{color:C.sub,fontSize:13,marginBottom:16}}>תשלומים אחרונים שהתקבלו</p>
          <SVGLineChart points={paymentTimeline} color={C.success} height={80} label="payments"/>
        </div>
      )}
    </div>
  );
}

// ─── CLIENT SUCCESS TAB (Feature 23) ─────────────────────────────────────────
function ClientSuccessTab({ project, setProject }) {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = React.useState('profile');
  const [showCRForm, setShowCRForm] = React.useState(false);
  const [crForm, setCrForm] = React.useState({title:'',type:'scope',reason:'',impact:''});
  const profile = project.clientProfile || {};
  const crs = project.changeRequests || [];
  const dl = project.decisionLog || [];
  const addCR = () => {
    if (!crForm.title) return;
    setProject(p=>({...p,changeRequests:[...(p.changeRequests||[]),{...crForm,id:'cr'+uid(),date:today(),status:'draft',requestedBy:'אדריכל'}]}));
    setCrForm({title:'',type:'scope',reason:'',impact:''}); setShowCRForm(false);
  };
  const health = profile.healthScore || 0;
  const healthColor = health>80?C.success:health>60?C.warning:C.danger;
  const sections = [
    {k:'profile',l:'פרופיל לקוח'},
    {k:'changes',l:'בקשות שינוי'},
    {k:'decisions',l:'יומן החלטות'},
    {k:'metrics',l:'מדדי בריאות'}
  ];
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>🧠 Client Success</h3>
          <p style={{color:C.sub,fontSize:16}}>ניהול קשרי לקוחות חכם · Client Relationship Intelligence</p>
        </div>
        <SVGCircle value={health} max={100} color={healthColor} label="Health Score" size={72}/>
      </div>
      {/* Section tabs */}
      <div style={{display:'flex',gap:8,marginBottom:20,borderBottom:`1px solid ${C.border}`,paddingBottom:12,flexWrap:'wrap'}}>
        {sections.map(s=>(
          <button key={s.k} onClick={()=>setActiveSection(s.k)}
            style={{padding:'7px 16px',borderRadius:20,border:'none',cursor:'pointer',fontSize:16,fontWeight:600,
              background:activeSection===s.k?C.primary:'transparent',
              color:activeSection===s.k?contrastText(C.primary):C.sub}}>
            {s.l}
          </button>
        ))}
      </div>

      {activeSection==='profile' && (
        <div style={{display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr',gap:16}}>
          <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <h4 style={{color:C.text,fontSize:17,fontWeight:700,marginBottom:12}}>פרטי תקשורת מועדפת</h4>
            {[
              ['סגנון עבודה',profile.style||'—'],['זמינות',profile.responseStyle||'—'],
              ['ערוץ מועדף',profile.preferredContact||'—'],
              ['שעות מועדפות',profile.preferredHours||'—'],
              ['שפה מועדפת',profile.preferredLang||'—']
            ].map(([k,v])=>(
              <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:`1px solid ${C.border}`}}>
                <span style={{color:C.sub,fontSize:16}}>{k}</span>
                <span style={{color:C.text,fontSize:16,fontWeight:500}}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <h4 style={{color:C.text,fontSize:17,fontWeight:700,marginBottom:12}}>תגיות ורשומות</h4>
            <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:12}}>
              {(profile.tags||[]).map((t,i)=><Badge key={i} text={t} color={C.primary}/>)}
              {(!profile.tags||profile.tags.length===0)&&<span style={{color:C.sub,fontSize:16}}>אין תגיות</span>}
            </div>
            {profile.notes && <p style={{color:C.text,fontSize:16,lineHeight:1.7}}>{profile.notes}</p>}
          </div>
        </div>
      )}

      {activeSection==='changes' && (
        <div>
          <div style={{display:'flex',justifyContent:'flex-end',marginBottom:14}}>
            <Btn onClick={()=>setShowCRForm(true)}>+ בקשת שינוי</Btn>
          </div>
          {crs.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17}}>אין בקשות שינוי</div>}
          {crs.map(cr=>(
            <div key={cr.id} style={{background:C.card,borderRadius:12,padding:16,marginBottom:10,border:`1px solid ${C.border}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                <div style={{fontWeight:700,color:C.text,fontSize:17}}>{cr.title}</div>
                <StatusBadge status={cr.status}/>
              </div>
              <div style={{color:C.sub,fontSize:14}}>סוג: {cr.type} · {fmtDate(cr.date)}</div>
              {cr.impact && <div style={{color:C.warning,fontSize:14,marginTop:4}}>השפעה: {cr.impact}</div>}
            </div>
          ))}
          {showCRForm && (
            <Modal title="בקשת שינוי חדשה" onClose={()=>setShowCRForm(false)} width={480}>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                <Input label="כותרת" value={crForm.title} onChange={v=>setCrForm(f=>({...f,title:v}))} required/>
                <Select label="סוג שינוי" value={crForm.type} onChange={v=>setCrForm(f=>({...f,type:v}))}
                  options={[{value:'scope',label:'Scope'},{value:'design',label:'עיצוב'},{value:'budget',label:'תקציב'},{value:'timeline',label:'זמן'},{value:'material',label:'חומרים'}]}/>
                <Input label="סיבה" value={crForm.reason} onChange={v=>setCrForm(f=>({...f,reason:v}))}/>
                <Input label="השפעה על תקציב/זמן" value={crForm.impact} onChange={v=>setCrForm(f=>({...f,impact:v}))}/>
                <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
                  <Btn onClick={()=>setShowCRForm(false)} variant="ghost">ביטול</Btn>
                  <Btn onClick={addCR}>הגש בקשה</Btn>
                </div>
              </div>
            </Modal>
          )}
        </div>
      )}

      {activeSection==='decisions' && (
        <div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {dl.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17}}>אין החלטות מתועדות</div>}
            {dl.map((d,i)=>(
              <div key={i} style={{background:C.card,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
                <div style={{fontWeight:700,color:C.text,fontSize:17,marginBottom:4}}>{d.title}</div>
                <div style={{color:C.sub,fontSize:14}}>{fmtDate(d.date)} · ע"י {d.by}</div>
                {d.note && <div style={{color:C.text,fontSize:16,marginTop:6}}>{d.note}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection==='metrics' && (
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:16}}>
          {[
            {label:'Health Score',value:profile.healthScore||0,color:healthColor,max:100},
            {label:'תשלומים',value:profile.paymentReliability||0,color:C.success,max:100},
            {label:'מהירות אישור',value:profile.approvalSpeed||0,color:C.info,max:100},
            {label:'שינויי Scope',value:100-(profile.changeFrequency||0),color:C.warning,max:100}
          ].map((m,i)=>(
            <div key={i} style={{background:C.card,borderRadius:14,padding:16,border:`1px solid ${C.border}`,display:'flex',justifyContent:'center'}}>
              <SVGCircle value={m.value} max={m.max} color={m.color} label={m.label} sublabel="%" size={80}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── CUSTOM BLOCKS TAB ────────────────────────────────────────────────────────
const RENOVATION_BLOCKS = ['מצב קיים','השראות (מה הלקוח רוצה)','עבודה שוטפת','הדמיות'];

function CustomBlocksTab({ project, setProject }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',content:''});
  const blocks = project.customBlocks || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,customBlocks:[...blocks,{...form,id:'cb'+uid(),createdAt:today()}]}));
    setForm({title:'',content:''}); setShowAdd(false);
  };
  const update = (id,content) => setProject(p=>({...p,customBlocks:blocks.map(b=>b.id===id?{...b,content}:b)}));
  const remove = (id) => setProject(p=>({...p,customBlocks:blocks.filter(b=>b.id!==id)}));
  const missingRenoBlocks = RENOVATION_BLOCKS.filter(t=>!blocks.some(b=>b.title===t));
  const seedRenoBlocks = () => setProject(p=>({...p,customBlocks:[
    ...(p.customBlocks||[]),
    ...missingRenoBlocks.map(title=>({id:'cb'+uid()+title.length,title,content:'',createdAt:today()}))
  ]}));
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <div>
          <h3 style={{color:C.text,fontSize:22,fontWeight:700}}>🧩 אזורים חופשיים</h3>
          <p style={{color:C.sub,fontSize:14}}>הגדר תוכן חופשי לפרויקט — מצב קיים, השראות, עבודה שוטפת ועוד</p>
        </div>
        <div style={{display:'flex',gap:8}}>
          {project.template==='renovation' && missingRenoBlocks.length>0 && (
            <Btn variant="ghost" onClick={seedRenoBlocks}>🏚️ טען שלד שיפוצים</Btn>
          )}
          <Btn onClick={()=>setShowAdd(true)}>+ אזור חדש</Btn>
        </div>
      </div>
      {blocks.length===0 && (
        <div style={{color:C.sub,textAlign:'center',padding:60,fontSize:17}}>
          <div style={{fontSize:48,marginBottom:12}}>🧩</div>
          לחץ "+ אזור חדש" כדי להוסיף משבצת תוכן חופשית לפרויקט
        </div>
      )}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:16,marginTop:16}}>
        {blocks.map(b=>(
          <div key={b.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
              <div style={{fontWeight:700,color:C.text,fontSize:17}}>{b.title}</div>
              <button onClick={()=>remove(b.id)}
                style={{background:'none',border:'none',color:C.danger,cursor:'pointer',fontSize:18}}>×</button>
            </div>
            <textarea value={b.content||''} onChange={e=>update(b.id,e.target.value)}
              rows={5} placeholder="הכנס תוכן..."
              style={{width:'100%',padding:'8px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                background:C.bg,color:C.text,fontSize:14,resize:'vertical',
                fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="אזור חדש" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת האזור" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))}
              placeholder="מצב קיים / השראות / עבודה שוטפת / הדמיות..." required/>
            <div>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:4}}>תוכן</label>
              <textarea value={form.content} onChange={e=>setForm(f=>({...f,content:e.target.value}))}
                rows={4} placeholder="תוכן חופשי..."
                style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:15,resize:'vertical',
                  fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף אזור</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── PROJECT VIEW (main container) ───────────────────────────────────────────
function ProjectView({ projectId, data, setData, user, onBack, onGoHome = onBack, onOpenProject, activeTab: activeTabProp, onTabChange, onSystemDash, onDeleteProject }) {
  const project = (data.projects||[]).find(p=>p.id===projectId);
  const [localTab, setLocalTab] = React.useState('dashboard');
  const activeTab = activeTabProp || localTab;
  const setActiveTab = onTabChange || setLocalTab;
  const [showShare, setShowShare] = React.useState(false);
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('lightStone');
  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };
  const isMobile = useIsMobile();
  const tabRefs = React.useRef({});
  const [glider, setGlider] = React.useState({left:0, width:0});

  if (!project) return <div style={{padding:40,color:C.text}}>פרויקט לא נמצא</div>;

  const setProject = (updater) => {
    setData(d=>({...d, projects:(d.projects||[]).map(p=>p.id===projectId?(typeof updater==='function'?updater(p):updater):p)}));
  };

  const allTabs = [
    {id:'dashboard',label:'דשבורד',icon:'📊',feature:'portal'},
    {id:'brief',label:'תקציר',icon:'📋',feature:'brief'},
    {id:'timeline',label:'ציר זמן',icon:'📅',feature:'timeline'},
    {id:'tasks',label:'משימות',icon:'✅',feature:'tasks'},
    {id:'meetings',label:'פגישות',icon:'🤝',feature:'meetings'},
    {id:'payments',label:'תשלומים',icon:'💳',feature:'payments'},
    {id:'punchlist',label:'Punch List',icon:'🔧',feature:'punchlist'},
    {id:'rfi',label:'RFI',icon:'❓',feature:'rfi'},
    {id:'gallery',label:'גלריה',icon:'🖼️',feature:'gallery'},
    {id:'documents',label:'מסמכים',icon:'📁',feature:'documents'},
    {id:'quotes',label:'הצעות מחיר',icon:'💰',feature:'quotes'},
    {id:'approvals',label:'אישורים',icon:'✍️',feature:'approvals'},
    {id:'messages',label:'הודעות',icon:'💬',feature:'messages'},
    {id:'bi',label:'BI Reports',icon:'📈',feature:'bi'},
    {id:'clientsuccess',label:'Client Success',icon:'🧠',feature:'clientsuccess'},
    {id:'customblocks',label:'אזורים חופשיים',icon:'🧩',feature:'portal'},
    {id:'ai',label:'AI Agent',icon:'🤖',feature:'ai'}
  ];

  const visibleTabs = user.role==='client'
    ? allTabs.filter(t=>['dashboard','brief','gallery','approvals','messages','payments','quotes','rfi'].includes(t.id))
    : (user.role==='arch' || user.role==='employee')
      ? allTabs.filter(t=>canUse(t.feature) && !['payments','quotes'].includes(t.id) && (t.id!=='ai' || user.aiEnabled))
      : allTabs.filter(t=>canUse(t.feature));

  React.useEffect(()=>{
    if (!visibleTabs.some(t=>t.id===activeTab)) setActiveTab('dashboard');
  },[activeTab]);

  // Glider: slide the active-tab highlight to the active button's measured position.
  React.useLayoutEffect(()=>{
    const el = tabRefs.current[activeTab];
    if (el) setGlider({ left: el.offsetLeft, width: el.offsetWidth });
  },[activeTab, isMobile, visibleTabs.length]);

  const renderTab = () => {
    switch(activeTab) {
      case 'dashboard':    return <DashboardTab project={project} setProject={setProject} user={user}
        onDeleteProject={onDeleteProject ? ()=>onDeleteProject(project) : null}/>;
      case 'brief':        return <BriefTab project={project} setProject={setProject} user={user}/>;
      case 'ai':           return <AIAgentTab project={project}/>;
      case 'timeline':     return <TimelineTab project={project} setProject={setProject}/>;
      case 'tasks':        return <TasksTab project={project} setProject={setProject} user={user} officeId={user.officeId}/>;
      case 'meetings':     return <MeetingsTab project={project} setProject={setProject} user={user}/>;
      case 'payments':     return <PaymentsTab project={project} setProject={setProject}/>;
      case 'punchlist':    return <PunchListTab project={project} setProject={setProject} officeId={user.officeId} user={user}/>;
      case 'rfi':          return <RFITab project={project} setProject={setProject} user={user}/>;
      case 'gallery':      return <GalleryTab project={project} setProject={setProject} officeId={user.officeId}/>;
      case 'documents':    return <DocumentsTab project={project} setProject={setProject} officeId={user.officeId}/>;
      case 'quotes':       return <QuotesTab project={project} setProject={setProject} officeId={user.officeId}/>;
      case 'approvals':    return <ApprovalsTab project={project} setProject={setProject} user={user} officeId={user.officeId}/>;
      case 'messages':     return <MessagesTab project={project} setProject={setProject} user={user}/>;
      case 'bi':           return <BIReportsTab project={project} data={data}/>;
      case 'clientsuccess':return <ClientSuccessTab project={project} setProject={setProject}/>;
      case 'customblocks': return <CustomBlocksTab project={project} setProject={setProject}/>;
      default:             return null;
    }
  };

  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',
      background:C.bg,direction:'rtl'}}>

      {/* Calq-style top header */}
      <div style={{background:C.sidebar,borderBottom:`1px solid ${C.border}`,
        padding: isMobile ? '0 12px' : '0 40px',flexShrink:0,zIndex:10,position:'relative'}}>
        {/* Project identity row */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',
          minHeight:56,padding:'6px 0',borderBottom:`1px solid ${C.border}`}}>
          <div style={{display:'flex',alignItems:'center',gap: isMobile ? 10 : 20, minWidth:0}}>
            <button onClick={onGoHome}
              style={{background:'none',border:'none',cursor:'pointer',padding:0,
                display:'flex',alignItems:'center',flexShrink:0}}>
              <img src={isLightColor(C.sidebar) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
                style={{width: isMobile ? 72 : 'clamp(90px,12vw,180px)', height:'auto', display:'block', transition:'opacity .15s'}}
                onMouseEnter={e=>e.currentTarget.style.opacity='0.7'}
                onMouseLeave={e=>e.currentTarget.style.opacity='1'}/>
              <OfficeLogoBadge isMobile={isMobile}/>
            </button>
            <div style={{width:1,height:16,background:C.border,flexShrink:0}}/>
            <span style={{color:C.text,fontWeight:700,fontSize: isMobile ? 15 : 18,letterSpacing:'-0.01em',
              fontFamily:"'Space Grotesk',sans-serif",overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
              {project.name}
            </span>
            {!isMobile && <span style={{color:C.sub,fontSize:16,flexShrink:0}}>{project.clientName}</span>}
          </div>
          <div style={{display:'flex',alignItems:'center',gap: isMobile ? 8 : 16, flexShrink:0}}>
            {!isMobile && (
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:80,height:1,background:C.border,position:'relative'}}>
                  <div style={{position:'absolute',top:0,right:0,height:'100%',
                    width:(project.progress||0)+'%',background:C.text,transition:'width 1s'}}/>
                </div>
                <span style={{color:C.sub,fontSize:13,letterSpacing:'0.08em'}}>
                  {project.progress||0}%
                </span>
              </div>
            )}
            {user.role==='admin' && onSystemDash && (
              <button onClick={onSystemDash}
                style={{background:'none',border:`1px solid ${C.border}`,padding: isMobile ? '4px 10px' : '5px 14px',
                  color:C.sub,cursor:'pointer',fontSize: isMobile ? 12 : 14,letterSpacing:'0.04em',borderRadius:0,
                  whiteSpace:'nowrap'}}>
                {isMobile ? '⚙️' : '⚙️ ניהול מערכת'}
              </button>
            )}
            {canUse('share') && (
              <button onClick={()=>setShowShare(true)}
                style={{background:'none',border:`1px solid ${C.border}`,padding: isMobile ? '4px 10px' : '5px 14px',
                  color:C.sub,cursor:'pointer',fontSize: isMobile ? 12 : 14,letterSpacing:'0.06em',borderRadius:0}}>
                SHARE
              </button>
            )}
            {canUse('themes') && (
              <button onClick={()=>setShowTheme(true)}
                style={{background:'none',border:`1px solid ${C.border}`,padding: isMobile ? '4px 10px' : '5px 14px',
                  color:C.sub,cursor:'pointer',fontSize: isMobile ? 12 : 14,letterSpacing:'0.06em',borderRadius:0}}>
                THEME
              </button>
            )}
            <NotificationBell user={user} onOpenProject={onOpenProject}/>
          </div>
        </div>

        {/* Horizontal tab nav — calq style, with a sliding glider under the active tab */}
        <div style={{display:'flex',overflowX:'auto',gap:0,position:'relative',
          scrollbarWidth:'none',msOverflowStyle:'none'}}>
          {visibleTabs.map(tab=>(
            <button key={tab.id} ref={el=>{tabRefs.current[tab.id]=el;}} onClick={()=>setActiveTab(tab.id)}
              className="tab-btn"
              style={{padding: isMobile ? '10px 12px' : '14px 20px',background:'transparent',border:'none',
                color:activeTab===tab.id?C.text:C.sub,
                cursor:'pointer',fontSize: isMobile ? 12 : 14,fontWeight:activeTab===tab.id?700:400,
                letterSpacing:'0.04em',whiteSpace:'nowrap',flexShrink:0,
                fontFamily:"'Space Grotesk',sans-serif",transition:'color .15s'}}>
              {isMobile ? tab.icon : tab.label}
            </button>
          ))}
          <div style={{position:'absolute',bottom:0,height:3,borderRadius:2,
            background:`linear-gradient(90deg, transparent, ${C.text}, transparent)`,
            boxShadow:`0 0 8px 2px ${C.text}80`,
            transform:`translateX(${glider.left}px)`, width:glider.width,
            transition:'transform .5s cubic-bezier(.37,1.95,.66,.56), width .5s cubic-bezier(.37,1.95,.66,.56)',
            pointerEvents:'none'}}/>
        </div>
      </div>

      {/* Main content */}
      <div style={{flex:1,overflowY:'auto',position:'relative',paddingBottom:44}}>
        <div style={{position:'relative',zIndex:1,animation:'pageEnter .3s ease'}}
          key={activeTab}>
          {renderTab()}
        </div>
      </div>

      {showShare && <SharePanel project={project} onClose={()=>setShowShare(false)}/>}
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={()=>setShowTheme(false)}/>}
    </div>
  );
}

// ─── PROJECTS LIST ────────────────────────────────────────────────────────────
function ProjectsList({ data, setData, user, onLogout, onOpenProject, onSystemDash, onUsers, onBackup, statusFilter, onClearFilter, onDeleteProject }) {
  const [deletingProject, setDeletingProject] = React.useState(null);
  const [showNewProject, setShowNewProject] = React.useState(false);
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('calqNoir');
  const [form, setForm] = React.useState({name:'',address:'',clientName:'',architectName:'',architectId:null,clientIds:[],employeeIds:[],budget:'',area:'',startDate:'',endDate:'',description:'',template:'villa'});
  const [search, setSearch] = React.useState('');
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const isMobile = useIsMobile();

  const projects = (data.projects||[]).filter(p=>{
    if (user.role==='arch') return p.architectId === user.id;
    if (user.role==='employee') return (p.employeeIds||[]).includes(user.id);
    if (user.role==='client') return (p.clientIds||[]).includes(user.id);
    return true;
  }).filter(p=>!search||p.name.includes(search)||p.clientName.includes(search))
    .filter(p=>!statusFilter||p.status===statusFilter);
  const filterLabels = { active:'פעילים', completed:'הושלמו', planning:'בתכנון' };

  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };

  const addProject = () => {
    if (!form.name) return;
    const np = {
      ...form, id:'p'+uid(), status:'planning', currentPhase:1, progress:0, createdAt:today(),
      budget:Number(form.budget)||0, area:Number(form.area)||0, coverImage:null,
      phases:PHASES.map((p,i)=>({phaseId:p.id,status:i===0?'active':'pending',completedDate:null,notes:''})),
      documents:[], quotes:[], approvals:[], messages:[], gallery:[], payments:[],
      punchList:[], rfis:[], brief:{answers:{},submitted:false,savedAt:null,submittedBy:null},
      tasks:[], dailyReports:[], meetings:[], customTasks:[], changeRequests:[], decisionLog:[],
      clientProfile:{healthScore:80,paymentReliability:80,approvalSpeed:80,changeFrequency:10,tags:[],notes:'',history:[]}
    };
    setData(d=>({...d,projects:[...(d.projects||[]),np]}));
    setForm({name:'',address:'',clientName:'',architectName:'',architectId:null,clientIds:[],employeeIds:[],budget:'',area:'',startDate:'',endDate:'',description:'',template:'villa'});
    setShowNewProject(false);
  };

  const active = projects.filter(p=>p.status==='active').length;
  const completed = projects.filter(p=>p.status==='completed').length;

  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',display:'flex',flexDirection:'column',position:'relative'}}>
      <div className="scanline-overlay"/>
      {/* Calq-style top nav */}
      <div style={{background:C.sidebar,padding: isMobile ? '8px 16px' : '8px 40px',display:'flex',alignItems:'center',
        justifyContent:'space-between',minHeight:56,flexShrink:0,position:'relative',zIndex:10,
        borderBottom:`1px solid ${C.border}`}}>
        {/* Mobile center logo (absolute) */}
        {isMobile && (
          <div style={{position:'absolute',left:0,right:0,top:0,bottom:0,
            display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',zIndex:0}}>
            <img src={isLightColor(C.sidebar) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
              style={{width:87, height:'auto', display:'block'}}/>
          </div>
        )}

        {/* RIGHT group (first in DOM = rightmost in RTL) */}
        <div style={{display:'flex',alignItems:'center',gap: isMobile ? 10 : 32, flexShrink:0, zIndex:1}}>
          {isMobile ? (
            /* Mobile: only ≡ button — logo is centered absolutely */
            <>
              <button onClick={()=>setShowMobileMenu(m=>!m)}
                style={{background:'none',border:`1px solid ${C.border}`,padding:'5px 11px',
                  color:C.sidebarText,cursor:'pointer',fontSize:20,borderRadius:4,lineHeight:1}}>
                ≡
              </button>
            </>
          ) : (
            /* Desktop: logo first (= far right), then divider + admin links */
            <>
              <button onClick={onLogout} style={{background:'none',border:'none',padding:0,cursor:'pointer',display:'flex',alignItems:'center',gap:10}}
                onMouseEnter={e=>e.currentTarget.querySelector('img').style.opacity='0.7'}
                onMouseLeave={e=>e.currentTarget.querySelector('img').style.opacity='1'}>
                <img src={isLightColor(C.sidebar) ? '/logo-dark.png' : '/logo-white.png'} alt="TEKTONA"
                  style={{width:'clamp(110px,16vw,240px)', height:'auto', display:'block', transition:'opacity .15s'}}/>
                <OfficeLogoBadge isMobile={isMobile}/>
              </button>
              <div style={{width:1,height:20,background:C.border}}/>
              {user.role==='admin' && (
                <div style={{display:'flex',gap:24}}>
                  {[['מערכת',onSystemDash],['משתמשים',onUsers],['גיבוי',onBackup]].map(([l,fn])=>(
                    <button key={l} onClick={fn}
                      style={{background:'none',border:'none',color:C.sub,cursor:'pointer',
                        fontSize:16,letterSpacing:'0.05em',fontFamily:"'Space Grotesk',sans-serif",
                        transition:'color .15s'}}
                      onMouseOver={e=>e.target.style.color=C.text}
                      onMouseOut={e=>e.target.style.color=C.sub}>
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* LEFT group (last in DOM = leftmost in RTL) */}
        <div style={{display:'flex',alignItems:'center',gap: isMobile ? 8 : 16, flexShrink:0}}>
          {!isMobile && (
            <>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="חיפוש..."
                style={{padding:'6px 14px',border:'none',borderBottom:`1px solid ${C.border}`,
                  background:'transparent',color:C.sidebarText,fontSize:16,outline:'none',
                  direction:'rtl',fontFamily:"'Space Grotesk',sans-serif",width:180}}/>
              {canUse('themes') && (
                <button onClick={()=>setShowTheme(true)}
                  style={{background:'none',border:`1px solid ${C.border}`,padding:'5px 12px',
                    color:C.sub,cursor:'pointer',fontSize:13,letterSpacing:'0.06em',borderRadius:0}}>
                  THEME
                </button>
              )}
              <div style={{width:1,height:20,background:C.border}}/>
              <span style={{color:C.sub,fontSize:15,maxWidth:120,overflow:'hidden',
                textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{user.name}</span>
            </>
          )}
          <NotificationBell user={user} onOpenProject={onOpenProject}/>
          <button onClick={onLogout}
            style={{background:'none',border:`1px solid ${C.border}`,
              padding: isMobile ? '5px 10px' : '5px 14px',
              color:C.sub,cursor:'pointer',fontSize: isMobile ? 12 : 14,
              letterSpacing:'0.06em',borderRadius:0,flexShrink:0}}>
            יציאה
          </button>
        </div>
      </div>

      <div style={{flex:1,overflowY:'auto',position:'relative',zIndex:1,paddingBottom:44}}>
        {/* Stats bar — always one row, scroll on overflow */}
        <div style={{borderBottom:`1px solid ${C.border}`,
          padding: isMobile ? '14px 16px' : '24px 40px',
          display:'flex',gap: isMobile ? 14 : 40,alignItems:'center',
          animation:'pageEnter .4s ease',overflowX:'auto',flexWrap:'nowrap',
          scrollbarWidth:'none',msOverflowStyle:'none'}}>
          {[
            {label:'PROJECTS', value:projects.length, max:OFFICE_PLAN.plan==='studio'?30:15, color:C.text},
            {label:'ACTIVE', value:active, max:projects.length||1, color:C.success},
            {label:'PLANNING', value:projects.filter(p=>p.status==='planning').length, max:projects.length||1, color:C.info},
            {label:'COMPLETED', value:completed, max:projects.length||1, color:C.sub}
          ].map((s,i)=>(
            <div key={i} style={{display:'flex',alignItems:'baseline',gap: isMobile ? 6 : 10, flexShrink:0}}>
              {i===1 && (
                <div className="led-active" style={{width:6,height:6,borderRadius:'50%',
                  background:C.success,color:C.success,marginBottom:4,alignSelf:'center'}}/>
              )}
              <span className={i===0?'shimmer-text':''} style={{fontSize: isMobile ? 26 : 43,fontWeight:700,
                color:i===0?'transparent':s.color,letterSpacing:'-0.02em',
                fontFamily:"'Space Grotesk',sans-serif",
                animation:`countUp .6s ${i*.15}s ease both`}}>{s.value}</span>
              <div>
                <div style={{fontSize: isMobile ? 10 : 12,letterSpacing:'0.12em',color:C.sub,fontWeight:500}}>{s.label}</div>
                <div style={{width:s.max>0?(s.value/s.max*60):0,height:1,background:s.color,marginTop:4,transition:'width 1.5s ease'}}/>
              </div>
              {i<3 && <div style={{width:1,height: isMobile ? 24 : 32,background:C.border,marginLeft: isMobile ? 8 : 20}}/>}
            </div>
          ))}
        </div>

        {/* Projects header + Add button */}
        <div style={{padding: isMobile ? '14px 16px 10px' : '24px 40px 14px',animation:'pageEnter .5s ease',
          display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div>
            <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:4}}>
              <h2 style={{color:C.text,fontSize:16,fontWeight:700,letterSpacing:'0.15em',
                fontFamily:"'Space Grotesk',sans-serif"}}>
                {user.role==='client'?'MY PROJECTS':'PROJECTS'}
              </h2>
              <span style={{color:C.sub,fontSize:16}}>{projects.length}</span>
              {statusFilter && (
                <span style={{display:'flex',alignItems:'center',gap:6,padding:'3px 10px',
                  border:`1px solid ${C.border}`,borderRadius:20,fontSize:13,color:C.text}}>
                  מסונן: {filterLabels[statusFilter]||statusFilter}
                  <button onClick={onClearFilter} style={{background:'none',border:'none',color:C.sub,
                    cursor:'pointer',fontSize:14,padding:0,lineHeight:1}} title="נקה סינון">✕</button>
                </span>
              )}
            </div>
            <div style={{width:32,height:1,background:C.sub}}/>
          </div>
          {user.role!=='client' && (
            <button onClick={()=>setShowNewProject(true)}
              style={{padding: isMobile ? '8px 18px' : '10px 28px',background:C.text,color:C.bg,
                border:'none',cursor:'pointer',fontSize: isMobile ? 14 : 16,fontWeight:700,
                letterSpacing:'0.08em',fontFamily:"'Space Grotesk',sans-serif",borderRadius:0,
                flexShrink:0}}>
              + פרויקט
            </button>
          )}
        </div>

        {/* Projects grid — calq editorial style */}
        <div style={{
          padding: isMobile ? '0 0 40px' : '0 40px 40px',
          display:'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill,minmax(340px,1fr))',
          gap:1,
          border:`1px solid ${C.border}`,
          margin: isMobile ? '0 16px 40px' : '0 40px 40px',
          animation:'pageEnter .6s ease'}}>
          {projects.map((p,idx)=>{
            const paid = (p.payments||[]).filter(py=>py.status==='paid').reduce((s,py)=>s+py.amount,0);
            const total = (p.payments||[]).reduce((s,py)=>s+py.amount,0);
            return (
              <div key={p.id} className="proj-card" onClick={()=>onOpenProject(p.id)}
                style={{background:C.card,cursor:'pointer',padding:28,
                  borderBottom:`1px solid ${C.border}`,borderRight:`1px solid ${C.border}`,
                  position:'relative',animation:`pageEnter ${.4+idx*.08}s ease`,overflow:'hidden'}}>
                {/* Subtle corner accent */}
                <div style={{position:'absolute',top:0,right:0,width:3,height:'100%',
                  background:`linear-gradient(180deg,${p.status==='active'?C.success:p.status==='planning'?C.info:C.sub}55,transparent)`}}/>
                {user.role==='admin' && onDeleteProject && (
                  <button onClick={e=>{e.stopPropagation();setDeletingProject(p);}}
                    title="מחק פרויקט"
                    style={{position:'absolute',top:10,left:10,background:'none',border:'none',
                      color:C.sub,cursor:'pointer',fontSize:16,zIndex:1,padding:4}}>🗑️</button>
                )}
                {/* Cover */}
                {p.coverImage && (
                  <div style={{height:160,marginBottom:20,overflow:'hidden',borderRadius:8,margin:'-28px -28px 20px'}}>
                    <StorageImage path={p.coverImage} style={{width:'100%',height:'100%',objectFit:'cover',
                      filter:'grayscale(20%) brightness(0.85)'}} alt="cover"/>
                    <div style={{position:'absolute',top:0,left:0,right:0,height:160,
                      background:'linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.5))'}}/>
                  </div>
                )}
                {/* Number + phase */}
                <div style={{fontSize:12,color:C.sub,letterSpacing:'0.14em',marginBottom:10,
                  fontFamily:"'Space Grotesk',sans-serif",display:'flex',justifyContent:'space-between'}}>
                  <span>{String(idx+1).padStart(2,'0')}</span>
                  <span style={{color:p.status==='active'?C.success:C.sub}}>{PHASES[(p.currentPhase||1)-1]?.name}</span>
                </div>
                {/* Name */}
                <div style={{fontWeight:800,color:C.text,fontSize:24,marginBottom:4,
                  letterSpacing:'-0.02em',lineHeight:1.2,fontFamily:"'Space Grotesk',sans-serif"}}>
                  {p.name}
                </div>
                <div style={{color:C.sub,fontSize:14,marginBottom:18,display:'flex',gap:8}}>
                  <span>{p.clientName}</span>
                  <span style={{color:C.border}}>·</span>
                  <span>{p.address}</span>
                </div>
                {/* Progress bar — thicker, with gradient */}
                <div style={{height:3,background:C.border,marginBottom:4,borderRadius:2,overflow:'hidden'}}>
                  <div style={{position:'relative',height:'100%',borderRadius:2,
                    width:(p.progress||0)+'%',
                    background:`linear-gradient(90deg,${p.status==='active'?C.success:p.status==='planning'?C.info:C.sub}88,${p.status==='active'?C.success:p.status==='planning'?C.info:C.sub})`,
                    transition:'width 1.2s cubic-bezier(.4,0,.2,1)'}}/>
                </div>
                <div style={{fontSize:12,color:C.sub,marginBottom:16,textAlign:'left'}}>{p.progress||0}%</div>
                {/* Footer */}
                <div style={{display:'flex',justifyContent:'space-between',fontSize:14,color:C.sub,
                  fontFamily:"'Space Grotesk',sans-serif",alignItems:'center',
                  paddingTop:12,borderTop:`1px solid ${C.border}`}}>
                  <span style={{fontSize:13}}>{fmtCurrency(paid)}<span style={{opacity:0.5}}> / {fmtCurrency(total)}</span></span>
                  <div style={{display:'flex',alignItems:'center',gap:6}}>
                    {p.status==='active' && (
                      <div className="led-active" style={{width:5,height:5,borderRadius:'50%',
                        background:C.success,color:C.success}}/>
                    )}
                    <span style={{color:p.status==='active'?C.success:p.status==='planning'?C.info:C.sub,
                      fontWeight:700,letterSpacing:'0.1em',fontSize:12}}>
                      {p.status==='active'?'ACTIVE':p.status==='completed'?'DONE':'PLANNING'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {projects.length===0 && (
          <div style={{textAlign:'center',padding:80}}>
            <div style={{fontSize:77,marginBottom:16}}>🏗️</div>
            <div style={{color:C.sub,fontSize:22,marginBottom:8}}>אין פרויקטים עדיין</div>
            {user.role!=='client' && <Btn onClick={()=>setShowNewProject(true)}>צור פרויקט ראשון</Btn>}
          </div>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {showMobileMenu && (
        <div style={{position:'fixed',inset:0,zIndex:500}} onClick={()=>setShowMobileMenu(false)}>
          <div onClick={e=>e.stopPropagation()} style={{position:'fixed',top:56,right:0,left:0,
            background:C.sidebar,borderBottom:`1px solid ${C.border}`,zIndex:501,
            display:'flex',flexDirection:'column',padding:'8px 0',animation:'fadeIn .15s ease'}}>
            {/* Search row */}
            <div style={{padding:'10px 20px',borderBottom:`1px solid ${C.border}`}}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="חיפוש פרויקט..."
                style={{width:'100%',padding:'8px 14px',border:`1px solid ${C.border}`,
                  background:C.bg,color:C.text,fontSize:15,outline:'none',
                  direction:'rtl',fontFamily:"'Space Grotesk',sans-serif",borderRadius:4}}/>
            </div>
            {/* User row */}
            <div style={{padding:'10px 20px',borderBottom:`1px solid ${C.border}`,
              display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{color:C.sub,fontSize:15}}>{user.name}</span>
              {canUse('themes') && (
                <button onClick={()=>{setShowTheme(true);setShowMobileMenu(false);}}
                  style={{background:'none',border:`1px solid ${C.border}`,padding:'4px 12px',
                    color:C.sub,cursor:'pointer',fontSize:12,borderRadius:0}}>
                  THEME
                </button>
              )}
            </div>
            {/* Admin links */}
            {user.role==='admin' && [['⚙️ מערכת',onSystemDash],['👥 משתמשים',onUsers],['💾 גיבוי',onBackup]].map(([l,fn])=>(
              <button key={l} onClick={()=>{fn();setShowMobileMenu(false);}}
                style={{background:'none',border:'none',color:C.sidebarText,cursor:'pointer',
                  fontSize:16,padding:'12px 20px',textAlign:'right',letterSpacing:'0.03em',
                  fontFamily:"'Space Grotesk',sans-serif",borderBottom:`1px solid ${C.border}`}}>
                {l}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* New project modal */}
      {showNewProject && (
        <Modal title="פרויקט חדש" onClose={()=>setShowNewProject(false)} width={580}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <Input label="שם הפרויקט" value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} required style={{gridColumn:'1/-1'}}/>
            <Input label="כתובת" value={form.address} onChange={v=>setForm(f=>({...f,address:v}))} style={{gridColumn:'1/-1'}}/>
            <div style={{gridColumn:'1/-1'}}>
              <ProjectAccessEditor officeId={user.officeId} architectId={form.architectId} clientIds={form.clientIds}
                employeeIds={form.employeeIds}
                onChange={patch=>setForm(f=>({...f,...patch}))}/>
            </div>
            <Input label="תקציב (₪)" type="number" value={form.budget} onChange={v=>setForm(f=>({...f,budget:v}))}/>
            <Input label={'שטח (מ"ר)'} type="number" value={form.area} onChange={v=>setForm(f=>({...f,area:v}))}/>
            <Input label="תחילת פרויקט" type="date" value={form.startDate} onChange={v=>setForm(f=>({...f,startDate:v}))}/>
            <Input label="סיום צפוי" type="date" value={form.endDate} onChange={v=>setForm(f=>({...f,endDate:v}))}/>
            <Select label="תבנית" value={form.template} onChange={v=>setForm(f=>({...f,template:v}))} style={{gridColumn:'1/-1'}}
              options={[{value:'villa',label:'🏡 וילה / בית פרטי'},{value:'renovation',label:'🔧 שיפוץ'},{value:'commercial',label:'🏢 מסחרי'},{value:'addition',label:'➕ תוספת בנייה'}]}/>
            <div style={{gridColumn:'1/-1'}}>
              <label style={{fontSize:14,fontWeight:600,color:C.sub,display:'block',marginBottom:4}}>תיאור</label>
              <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}
                rows={3} placeholder="תיאור קצר של הפרויקט..."
                style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:16,resize:'vertical',
                  fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            </div>
          </div>
          <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:16}}>
            <Btn onClick={()=>setShowNewProject(false)} variant="ghost">ביטול</Btn>
            <Btn onClick={addProject}>צור פרויקט</Btn>
          </div>
        </Modal>
      )}
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={()=>setShowTheme(false)}/>}
      {deletingProject && (
        <DeleteProjectConfirm project={deletingProject} onCancel={()=>setDeletingProject(null)}
          onConfirm={async ()=>{ await onDeleteProject(deletingProject); setDeletingProject(null); }}/>
      )}
      <AccessibilityWidget/>
    </div>
  );
}

// ─── LEGAL DOCS ADMIN (owner-only editor for legal_documents) ────────────────
function LegalDocsAdmin() {
  const [docs, setDocs] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('terms');
  const [saving, setSaving] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);
  const [savedAt, setSavedAt] = React.useState(null);

  const load = async () => {
    const map = await fetchLegalDocs();
    if (map) setDocs(map);
  };
  React.useEffect(()=>{ load(); },[]);

  const doc = docs && docs[activeTab];
  const patchDoc = (patch) => {
    setDocs(d => ({ ...d, [activeTab]: { ...d[activeTab], ...patch } }));
    setDirty(true); setSavedAt(null);
  };
  const patchSection = (idx, patch) => {
    patchDoc({ sections: doc.sections.map((s,i)=> i===idx ? { ...s, ...patch } : s) });
  };
  const addSection = () => patchDoc({ sections: [...doc.sections, { h:'כותרת סעיף חדש', t:'' }] });
  const removeSection = (idx) => {
    if (!window.confirm('למחוק את הסעיף הזה מהמסמך?')) return;
    patchDoc({ sections: doc.sections.filter((_,i)=>i!==idx) });
  };
  const moveSection = (idx, dir) => {
    const j = idx+dir;
    if (j<0 || j>=doc.sections.length) return;
    const arr = [...doc.sections];
    [arr[idx], arr[j]] = [arr[j], arr[idx]];
    patchDoc({ sections: arr });
  };

  const save = async () => {
    setSaving(true);
    const { data:{ user } } = await sb.auth.getUser();
    const { error } = await sb.from('legal_documents').update({
      title: doc.title,
      sections: doc.sections,
      status: doc.status,
      updated_label: doc.updated_label,
      updated_at: new Date().toISOString(),
      updated_by: user ? user.id : null,
    }).eq('id', activeTab);
    setSaving(false);
    if (!error) { setDirty(false); setSavedAt(new Date()); }
    else window.alert('שמירה נכשלה: ' + error.message);
  };

  const switchTab = (key) => {
    if (dirty && !window.confirm('יש שינויים שלא נשמרו במסמך הנוכחי. לעבור בכל זאת?')) return;
    setActiveTab(key); setDirty(false); setSavedAt(null);
  };

  const iconBtn = { width:30, height:30, borderRadius:8, border:`1px solid ${C.border}`, background:C.inputBg,
    color:C.text, cursor:'pointer', fontSize:14, flexShrink:0 };

  if (!docs) return <div style={{display:'flex',alignItems:'center',gap:10,color:C.sub,fontSize:16}}><Honeycomb/> טוען מסמכים...</div>;

  return (
    <div>
      <div style={{display:'flex',gap:8,marginBottom:18,flexWrap:'wrap'}}>
        {LEGAL_DOC_ORDER.map(key=>(
          <button key={key} onClick={()=>switchTab(key)}
            style={{padding:'7px 18px',borderRadius:20,border:`1px solid ${C.border}`,cursor:'pointer',fontSize:14,fontWeight:600,
              background:activeTab===key?C.primary:'transparent',color:activeTab===key?contrastText(C.primary):C.text}}>
            {(docs[key] && docs[key].title) || LEGAL_DOC_LABELS[key]}
          </button>
        ))}
      </div>

      {doc && (
        <>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:20}}>
            <Input label="כותרת המסמך" value={doc.title} onChange={v=>patchDoc({title:v})}/>
            <Input label="תווית ‘עודכן לאחרונה’" value={doc.updated_label||''} onChange={v=>patchDoc({updated_label:v})}/>
            <div>
              <div style={{fontSize:13,color:C.sub,marginBottom:6}}>סטטוס</div>
              <select value={doc.status} onChange={e=>patchDoc({status:e.target.value})}
                style={{padding:'10px 12px',borderRadius:10,border:`1px solid ${C.border}`,background:C.inputBg,color:C.text,fontSize:15,outline:'none'}}>
                <option value="טיוטה">טיוטה</option>
                <option value="בבדיקה משפטית">בבדיקה משפטית</option>
                <option value="פעיל">פעיל</option>
              </select>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            {doc.sections.map((s,i)=>(
              <div key={i} style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:16}}>
                <div style={{display:'flex',gap:8,marginBottom:10,alignItems:'center'}}>
                  <input value={s.h} onChange={e=>patchSection(i,{h:e.target.value})}
                    style={{flex:1,minWidth:120,padding:'8px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                      background:C.inputBg,color:C.text,fontWeight:700,fontSize:15,outline:'none'}}/>
                  <button onClick={()=>moveSection(i,-1)} disabled={i===0} title="הזז למעלה" style={iconBtn}>↑</button>
                  <button onClick={()=>moveSection(i,1)} disabled={i===doc.sections.length-1} title="הזז למטה" style={iconBtn}>↓</button>
                  <button onClick={()=>removeSection(i)} title="מחק סעיף" style={{...iconBtn,color:C.danger}}>✕</button>
                </div>
                <textarea value={s.t} onChange={e=>patchSection(i,{t:e.target.value})} rows={4}
                  style={{width:'100%',padding:'10px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:14,lineHeight:1.6,resize:'vertical',
                    fontFamily:'inherit',outline:'none',boxSizing:'border-box'}}/>
              </div>
            ))}
          </div>

          <div style={{display:'flex',gap:12,marginTop:18,alignItems:'center',flexWrap:'wrap'}}>
            <Btn onClick={addSection} variant="ghost">+ סעיף חדש</Btn>
            <Btn onClick={save} disabled={saving || !dirty}>{saving?'שומר...':'שמור שינויים'}</Btn>
            {!dirty && savedAt && <span style={{color:C.success,fontSize:13}}>נשמר בהצלחה · {savedAt.toLocaleTimeString('he-IL',{hour:'2-digit',minute:'2-digit'})}</span>}
            {dirty && <span style={{color:C.warning,fontSize:13}}>יש שינויים שלא נשמרו</span>}
          </div>
        </>
      )}
    </div>
  );
}

// ─── DELETED PROJECTS ARCHIVE (platform owner only, 90-day retention window) ──
function DeletedProjectsArchive() {
  const [rows, setRows] = React.useState(null);
  const [expandedId, setExpandedId] = React.useState(null);

  const load = async () => {
    const since = new Date(Date.now() - 90*86400000).toISOString();
    const { data } = await sb.from('deleted_projects').select('*').gte('deleted_at', since).order('deleted_at', {ascending:false});
    setRows(data||[]);
  };
  React.useEffect(()=>{ load(); },[]);

  if (rows===null) return <div style={{display:'flex',alignItems:'center',gap:10,color:C.sub,fontSize:16}}><Honeycomb/> טוען...</div>;
  if (rows.length===0) return <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:17}}>אין פרויקטים שנמחקו ב-90 הימים האחרונים</div>;

  return (
    <div style={{background:C.card,borderRadius:16,border:`1px solid ${C.border}`,overflow:'hidden'}}>
      <div style={{padding:'12px 16px',borderBottom:`1px solid ${C.border}`,color:C.sub,fontSize:13}}>
        פרויקטים שנמחקו נשמרים כאן למשך 90 יום בלבד ממועד המחיקה.
      </div>
      {rows.map(r=>(
        <div key={r.id} style={{borderBottom:`1px solid ${C.border}`}}>
          <div onClick={()=>setExpandedId(id=>id===r.id?null:r.id)}
            style={{padding:'14px 16px',cursor:'pointer',display:'flex',justifyContent:'space-between',
              alignItems:'center',gap:12,flexWrap:'wrap'}}>
            <div>
              <div style={{fontWeight:700,color:C.text,fontSize:17}}>{r.project_name}</div>
              <div style={{color:C.sub,fontSize:14}}>{r.office_name} · נמחק ע"י {r.deleted_by||'—'}</div>
            </div>
            <div style={{color:C.sub,fontSize:14}}>{fmtDate(r.deleted_at)}</div>
          </div>
          {expandedId===r.id && (
            <div style={{padding:'0 16px 16px',color:C.sub,fontSize:14}}>
              <pre style={{whiteSpace:'pre-wrap',wordBreak:'break-word',background:C.bg,borderRadius:8,
                padding:12,maxHeight:300,overflowY:'auto',fontFamily:'monospace',fontSize:12}}>
                {JSON.stringify(r.project_data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PLATFORM ADMIN DASHBOARD (cross-tenant owner view) ──────────────────────
function PlatformAdminDashboard({ onLogout }) {
  const isMobile = useIsMobile();
  const [section, setSection] = React.useState('offices');
  const [offices, setOffices] = React.useState(null);
  const [showNew, setShowNew] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', adminName:'', adminEmail:'' });
  const [formError, setFormError] = React.useState('');
  const [creating, setCreating] = React.useState(false);
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('lightStone');
  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };

  const load = async () => {
    const { data: offs } = await sb.from('offices')
      .select('id, name, plan, active, status, contact_email, contact_phone, created_at, data');
    const { data: members } = await sb.from('office_members').select('office_id, role, display_name');
    const counts = {}; const adminNames = {};
    (members||[]).forEach(m => {
      counts[m.office_id] = (counts[m.office_id]||0)+1;
      if (m.role==='admin' && !adminNames[m.office_id]) adminNames[m.office_id] = m.display_name;
    });
    setOffices((offs||[]).map(o => ({ ...o, userCount: counts[o.id]||0,
      projectCount: (o.data?.projects||[]).length, adminName: adminNames[o.id]||'' }))
      .sort((a,b)=>a.name.localeCompare(b.name)));
  };
  React.useEffect(()=>{ load(); },[]);

  const updatePlan = async (id, plan) => { await sb.from('offices').update({plan}).eq('id',id); load(); };
  const toggleActive = async (id, active) => { await sb.from('offices').update({active:!active}).eq('id',id); load(); };
  const approveOffice = async (id) => { await sb.from('offices').update({status:'active'}).eq('id',id); load(); };
  const rejectOffice = async (id) => { await sb.from('offices').update({status:'rejected'}).eq('id',id); load(); };

  const createOffice = async () => {
    if (!form.name || !form.adminName || !form.adminEmail) return;
    setCreating(true); setFormError('');
    try {
      const { data: { session } } = await sb.auth.getSession();
      const res = await fetch('/api/create-office', {
        method:'POST',
        headers: { 'Content-Type':'application/json', 'Authorization': 'Bearer '+session.access_token },
        body: JSON.stringify(form)
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'שגיאה ביצירת משרד');
      setForm({name:'',adminName:'',adminEmail:''}); setShowNew(false); load();
    } catch(e) { setFormError(e.message); }
    setCreating(false);
  };

  const approvedOffices = (offices||[]).filter(o=>o.status==='active');
  const requestOffices = (offices||[]).filter(o=>o.status!=='active');
  const pendingCount = (offices||[]).filter(o=>o.status==='pending').length;

  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',display:'flex',flexDirection:'column'}}>
      <AppNavBar onGoHome={onLogout} title="Platform Owner" subtitle="כל המשרדים" onBack={onLogout} onOpenTheme={()=>setShowTheme(true)}/>
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={()=>setShowTheme(false)}/>}
      <div style={{flex:1,overflowY:'auto',padding: isMobile?16:28,paddingBottom:56}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20,flexWrap:'wrap',gap:12}}>
          <h1 style={{color:C.text,fontSize:isMobile?22:29,fontWeight:800}}>⚡ Platform Owner</h1>
          {section==='offices' && <Btn onClick={()=>setShowNew(true)}>+ משרד חדש</Btn>}
        </div>
        <div style={{display:'flex',gap:8,marginBottom:20,flexWrap:'wrap'}}>
          {[['offices','משרדים'],['requests','בקשות הרשמה'],['legal','מסמכים משפטיים'],['archive','ארכיון מחיקות']].map(([key,label])=>(
            <button key={key} onClick={()=>setSection(key)}
              style={{padding:'7px 18px',borderRadius:20,border:`1px solid ${C.border}`,cursor:'pointer',fontSize:14,fontWeight:600,
                background:section===key?C.primary:'transparent',color:section===key?contrastText(C.primary):C.text,
                display:'flex',alignItems:'center',gap:6}}>
              {label}
              {key==='requests' && pendingCount>0 && (
                <span style={{background:C.danger,color:contrastText(C.danger),
                  borderRadius:10,fontSize:11,fontWeight:700,padding:'1px 7px'}}>{pendingCount}</span>
              )}
            </button>
          ))}
        </div>
        {section==='legal' && <LegalDocsAdmin/>}
        {section==='archive' && <DeletedProjectsArchive/>}
        {(section==='offices' || section==='requests') && offices===null && <div style={{display:'flex',alignItems:'center',gap:10,color:C.sub,fontSize:16}}><Honeycomb/> טוען...</div>}
        {section==='requests' && offices && (
          <div style={{background:C.card,borderRadius:16,border:`1px solid ${C.border}`,overflow:'hidden'}}>
            {requestOffices.length===0 ? (
              <div style={{padding:28,textAlign:'center',color:C.sub,fontSize:16}}>אין בקשות הרשמה כרגע</div>
            ) : (
              <div style={{overflowX:'auto'}}>
                <table style={{width:'100%',borderCollapse:'collapse'}}>
                  <thead>
                    <tr style={{background:C.bg}}>
                      {['משרד','איש קשר','אימייל','טלפון','סטטוס','נשלח','פעולות'].map(h=>(
                        <th key={h} style={{padding:'10px 16px',textAlign:'right',fontSize:14,color:C.sub,fontWeight:600,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {requestOffices.map(o=>(
                      <tr key={o.id} style={{borderBottom:`1px solid ${C.border}`}}>
                        <td style={{padding:'12px 16px',fontSize:16,fontWeight:600,color:C.text}}>{o.name}</td>
                        <td style={{padding:'12px 16px',fontSize:15,color:C.text}}>{o.adminName||'—'}</td>
                        <td style={{padding:'12px 16px',fontSize:14,color:C.sub,direction:'ltr',textAlign:'right'}}>{o.contact_email||'—'}</td>
                        <td style={{padding:'12px 16px',fontSize:14,color:C.sub,direction:'ltr',textAlign:'right'}}>{o.contact_phone||'—'}</td>
                        <td style={{padding:'12px 16px'}}>
                          <span style={{padding:'4px 12px',borderRadius:20,fontSize:13,fontWeight:600,
                            background:o.status==='pending'?C.sub+'22':C.danger+'22',color:o.status==='pending'?C.sub:C.danger}}>
                            {o.status==='pending'?'⏳ ממתין':'✕ נדחה'}
                          </span>
                        </td>
                        <td style={{padding:'12px 16px',fontSize:14,color:C.sub}}>{fmtDate(o.created_at)}</td>
                        <td style={{padding:'12px 16px',display:'flex',gap:8}}>
                          <button onClick={()=>approveOffice(o.id)}
                            style={{padding:'5px 14px',borderRadius:20,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,
                              background:C.success+'22',color:C.success}}>
                            ✓ אשר
                          </button>
                          {o.status==='pending' && (
                            <button onClick={()=>rejectOffice(o.id)}
                              style={{padding:'5px 14px',borderRadius:20,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,
                                background:C.danger+'22',color:C.danger}}>
                              ✕ דחה
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        {section==='offices' && offices && (
          <div style={{background:C.card,borderRadius:16,border:`1px solid ${C.border}`,overflow:'hidden'}}>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse'}}>
                <thead>
                  <tr style={{background:C.bg}}>
                    {['משרד','מסלול','סטטוס','פרויקטים','משתמשים','נוצר'].map(h=>(
                      <th key={h} style={{padding:'10px 16px',textAlign:'right',fontSize:14,color:C.sub,fontWeight:600,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {approvedOffices.map(o=>(
                    <tr key={o.id} style={{borderBottom:`1px solid ${C.border}`}}>
                      <td style={{padding:'12px 16px',fontSize:16,fontWeight:600,color:C.text}}>{o.name}</td>
                      <td style={{padding:'12px 16px'}}>
                        <select value={o.plan} onChange={e=>updatePlan(o.id, e.target.value)}
                          style={{padding:'4px 8px',borderRadius:6,border:`1px solid ${C.border}`,background:C.inputBg,color:C.text,fontSize:14,outline:'none'}}>
                          <option value="starter">Starter</option>
                          <option value="pro">Pro</option>
                          <option value="studio">Studio</option>
                        </select>
                      </td>
                      <td style={{padding:'12px 16px'}}>
                        <button onClick={()=>toggleActive(o.id, o.active)}
                          style={{padding:'4px 12px',borderRadius:20,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,
                            background:o.active?C.success+'22':C.danger+'22',color:o.active?C.success:C.danger}}>
                          {o.active?'✓ פעיל':'⏸ מושהה'}
                        </button>
                      </td>
                      <td style={{padding:'12px 16px',fontSize:16,color:C.text}}>{o.projectCount}</td>
                      <td style={{padding:'12px 16px',fontSize:16,color:C.text}}>{o.userCount}</td>
                      <td style={{padding:'12px 16px',fontSize:14,color:C.sub}}>{fmtDate(o.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {showNew && (
        <Modal title="משרד חדש" onClose={()=>setShowNew(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="שם המשרד" value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} required/>
            <Input label="שם מנהל המשרד" value={form.adminName} onChange={v=>setForm(f=>({...f,adminName:v}))} required/>
            <Input label="אימייל מנהל המשרד" type="email" value={form.adminEmail} onChange={v=>setForm(f=>({...f,adminEmail:v}))} required/>
            {formError && <div style={{color:C.danger,fontSize:14}}>{formError}</div>}
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowNew(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={createOffice} disabled={creating}>{creating?'יוצר...':'צור משרד'}</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
// ─── ROUTING ──────────────────────────────────────────────────────────────────
const SCREEN_PATHS = {
  login: '/login',
  projects: '/projects',
  systemdash: '/system',
  users: '/users',
  backup: '/backup',
  platformadmin: '/platform',
  suspended: '/suspended',
  signup: '/signup',
  pending: '/pending',
  rejected: '/rejected',
  terms: '/terms',
  privacy: '/privacy',
  accessibility: '/accessibility',
  dpa: '/dpa',
};
const PATH_SCREENS = Object.fromEntries(Object.entries(SCREEN_PATHS).map(([s,p])=>[p,s]));

function buildPath(screen, projectId, tab, projects) {
  if (screen === 'project' && projectId) {
    const proj = (projects||[]).find(p=>p.id===projectId);
    const slug = proj ? slugifyProjectName(proj.name) : projectId;
    return `/project/${slug}${tab && tab !== 'dashboard' ? '/' + tab : ''}`;
  }
  return SCREEN_PATHS[screen] || '/projects';
}

function parsePath(pathname, projects) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'project' && parts[1]) {
    // Resolve the slug back to a real project id; fall back to treating the
    // segment as a raw id so old bookmarked /project/p1 links keep working.
    const proj = (projects||[]).find(p=>slugifyProjectName(p.name)===parts[1])
      || (projects||[]).find(p=>p.id===parts[1]);
    return { screen: 'project', projectId: proj ? proj.id : parts[1], tab: parts[2] || 'dashboard' };
  }
  const screen = PATH_SCREENS['/' + parts.join('/')];
  return screen ? { screen, projectId: null, tab: null } : null;
}

const ROLE_SCREENS = {
  owner: ['platformadmin'],
  admin: ['systemdash','users','backup','project','projects'],
  arch: ['project','projects'],
  employee: ['project','projects'],
  client: ['project','projects'],
};

function App() {
  const [screen, setScreen] = React.useState('loading');
  const [user, setUser] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [activeProject, setActiveProject] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [themeId, setThemeId] = React.useState('lightStone');
  const [projectsFilter, setProjectsFilter] = React.useState(null);
  const [signupUser, setSignupUser] = React.useState(null);
  const officeIdRef = React.useRef(null);

  const updateData = (updater) => {
    setData(d => {
      const nd = typeof updater==='function' ? updater(d) : updater;
      saveD(officeIdRef.current, nd);
      return nd;
    });
  };

  const screenForUser = (u) => u.role==='owner'?'platformadmin':u.role==='admin'?'systemdash':'projects';

  const navigate = (targetScreen, opts={}) => {
    const { projectId=null, tab=null, replace=false, projects=data?.projects } = opts;
    setScreen(targetScreen);
    if (targetScreen === 'project') {
      setActiveProject(projectId);
      setActiveTab(tab || 'dashboard');
    }
    const path = buildPath(targetScreen, projectId, tab, projects);
    if (window.location.pathname !== path) {
      window.history[replace ? 'replaceState' : 'pushState']({ screen: targetScreen, projectId, tab }, '', path);
    }
  };

  const enterOffice = async (u) => {
    if (u.role === 'owner') { setUser(u); navigate('platformadmin', { replace:true }); return; }
    officeIdRef.current = u.officeId;
    setUser(u);
    const office = await loadOffice(u.officeId);
    if (office && office.status === 'pending') { navigate('pending', { replace:true }); return; }
    if (office && office.status === 'rejected') { navigate('rejected', { replace:true }); return; }
    if (office && office.active === false) { navigate('suspended', { replace:true }); return; }
    if (office) {
      OFFICE_PLAN.plan = office.plan || 'pro';
      OFFICE_PLAN.logo = office.logo || null;
      OFFICE_PLAN.officeName = office.name || 'Tektona';
      OFFICE_PLAN.slogan = office.slogan || '';
    }
    const officeData = (office && office.data) || { projects: [], users: [] };
    setData(officeData);

    // Restore a deep link from the current URL if it's valid for this user; otherwise land on the role's default screen.
    const parsed = parsePath(window.location.pathname, officeData.projects);
    const allowed = ROLE_SCREENS[u.role] || [];
    if (parsed && allowed.includes(parsed.screen)) {
      if (parsed.screen === 'project') {
        if ((officeData.projects||[]).some(p=>p.id===parsed.projectId)) {
          navigate('project', { projectId: parsed.projectId, tab: parsed.tab, replace:true, projects: officeData.projects });
          return;
        }
      } else {
        navigate(parsed.screen, { replace:true });
        return;
      }
    }
    navigate(screenForUser(u), { replace:true });
  };

  React.useEffect(()=>{
    const initApp = async () => {
      // Legal pages (linked from external forms like the Google OAuth consent screen)
      // must be reachable directly by URL regardless of login state.
      const legalDocId = window.location.pathname.slice(1);
      if (LEGAL_DOC_ORDER.includes(legalDocId)) { navigate(legalDocId, { replace:true }); return; }
      const { data: { session } } = await sb.auth.getSession();
      if (session) {
        const owner = await fetchPlatformAdmin(session.user.id);
        if (owner) { await enterOffice(buildOwnerUser(owner, session.user.email)); return; }
        const member = await fetchOfficeMember(session.user.id);
        if (member) { await enterOffice(buildAppUser(member, session.user.email)); return; }
        // Authenticated (e.g. via Google) but not linked to any office yet — let them
        // finish the franchise signup form instead of silently signing them out.
        setSignupUser({ id: session.user.id, email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '' });
        navigate('signup', { replace:true });
        return;
      }
      navigate(window.location.pathname === '/signup' ? 'signup' : 'login', { replace:true });
    };
    initApp();
  },[]);

  // Browser back/forward: reflect the URL the user landed on without pushing a new entry.
  React.useEffect(()=>{
    const onPopState = () => {
      if (!user) return;
      const parsed = parsePath(window.location.pathname, data?.projects);
      const allowed = ROLE_SCREENS[user.role] || [];
      if (parsed && allowed.includes(parsed.screen)) {
        if (parsed.screen === 'project') {
          setActiveProject(parsed.projectId);
          setActiveTab(parsed.tab || 'dashboard');
          setScreen('project');
        } else {
          setScreen(parsed.screen);
        }
      } else {
        setScreen(screenForUser(user));
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  },[user, data]);

  // Live sync: when any office member saves, everyone else's screen updates too.
  React.useEffect(()=>{
    if (!user?.officeId) return;
    const channel = sb.channel('office-'+user.officeId)
      .on('postgres_changes', { event:'UPDATE', schema:'public', table:'offices', filter:'id=eq.'+user.officeId },
        payload => {
          // Unchanged large JSONB columns can arrive missing from the replication payload
          // (Postgres omits unchanged TOASTed values) — never clobber local data with that.
          if (payload.new.data !== undefined) setData(payload.new.data);
        })
      .subscribe();
    return () => sb.removeChannel(channel);
  },[user?.officeId]);

  const handleLogin = (u) => { enterOffice(u); };
  const handleLogout = () => { sb.auth.signOut(); officeIdRef.current = null; setUser(null); setData(null); setActiveProject(null); setActiveTab('dashboard'); navigate('login'); };

  if (screen==='loading') return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{textAlign:'center'}}>
        <div style={{fontSize:48,fontWeight:800,color:C.primary,marginBottom:20}}>Tektona</div>
        <div style={{display:'flex',justifyContent:'center',marginBottom:16}}><Honeycomb color={C.primary}/></div>
        <div style={{color:C.sub,fontSize:17}}>טוען...</div>
      </div>
    </div>
  );

  if (LEGAL_DOC_ORDER.includes(screen)) return <LegalPage docId={screen} onBack={()=>navigate('login')}/>;

  if (screen==='login') return <LoginScreen onLogin={handleLogin} onSignup={()=>navigate('signup')}/>;

  if (screen==='platformadmin') return <PlatformAdminDashboard onLogout={handleLogout}/>;

  if (screen==='signup') return (
    <SignupScreen
      googleUser={signupUser}
      onSubmitted={async()=>{
        const member = await fetchOfficeMember(signupUser.id);
        if (member) await enterOffice(buildAppUser(member, signupUser.email));
      }}
      onCancel={async()=>{ await sb.auth.signOut(); setSignupUser(null); navigate('login', { replace:true }); }}
    />
  );

  if (screen==='suspended') return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,display:'flex',alignItems:'center',
      justifyContent:'center',direction:'rtl',textAlign:'center'}}>
      <div>
        <div style={{fontSize:44,marginBottom:16}}>🔒</div>
        <div style={{fontSize:22,fontWeight:700,color:C.text,marginBottom:8}}>המשרד הושהה</div>
        <div style={{color:C.sub,fontSize:16,marginBottom:20}}>הגישה למערכת הושעתה. פנו לבעל הפלטפורמה לפרטים.</div>
        <Btn onClick={handleLogout}>חזרה למסך כניסה</Btn>
      </div>
    </div>
  );

  if (screen==='pending') return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,display:'flex',alignItems:'center',
      justifyContent:'center',direction:'rtl',textAlign:'center'}}>
      <div>
        <div style={{fontSize:44,marginBottom:16}}>⏳</div>
        <div style={{fontSize:22,fontWeight:700,color:C.text,marginBottom:8}}>הבקשה שלכם ממתינה לאישור</div>
        <div style={{color:C.sub,fontSize:16,marginBottom:20,maxWidth:420}}>
          ההרשמה למערכת התקבלה. לאחר סגירת התשלום מול בעל הפלטפורמה, המשרד יאושר ותקבלו גישה מלאה.
        </div>
        <Btn onClick={handleLogout}>חזרה למסך כניסה</Btn>
      </div>
    </div>
  );

  if (screen==='rejected') return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,display:'flex',alignItems:'center',
      justifyContent:'center',direction:'rtl',textAlign:'center'}}>
      <div>
        <div style={{fontSize:44,marginBottom:16}}>✕</div>
        <div style={{fontSize:22,fontWeight:700,color:C.text,marginBottom:8}}>הבקשה נדחתה</div>
        <div style={{color:C.sub,fontSize:16,marginBottom:20,maxWidth:420}}>בקשת ההצטרפות שלכם לא אושרה. לפרטים נוספים פנו לבעל הפלטפורמה.</div>
        <Btn onClick={handleLogout}>חזרה למסך כניסה</Btn>
      </div>
    </div>
  );

  const goHome = () => navigate('projects');
  const openProject = (id, tab) => navigate('project', { projectId: id, tab });
  const filterProjects = (status) => { setProjectsFilter(status); navigate('projects'); };
  const deleteProject = async (project) => {
    await archiveDeletedProject(user.officeId, OFFICE_PLAN.officeName, project, user.name);
    updateData(d=>({...d, projects:(d.projects||[]).filter(p=>p.id!==project.id)}));
    if (activeProject === project.id) { setActiveProject(null); navigate('projects'); }
  };
  return (
    <>
      {screen==='systemdash' && <SystemDashboard data={data} setData={updateData} user={user} officeId={user.officeId} onBack={goHome} onGoHome={handleLogout}
        onOpenProject={openProject} onUsers={()=>navigate('users')} onFilterProjects={filterProjects}/>}
      {screen==='users' && <UsersScreen data={data} setData={updateData} officeId={user.officeId} onBack={goHome} onGoHome={handleLogout}/>}
      {screen==='backup' && <BackupPanel data={data} setData={updateData} onBack={goHome} onGoHome={handleLogout}/>}
      {screen==='project' && activeProject && (
        <ProjectView projectId={activeProject} data={data} setData={updateData}
          user={user} onBack={goHome} onGoHome={handleLogout}
          activeTab={activeTab} onTabChange={(tab)=>navigate('project', { projectId: activeProject, tab, replace:true })}
          onOpenProject={openProject} onSystemDash={()=>navigate('systemdash')} onDeleteProject={deleteProject}/>
      )}
      {(screen==='projects' || (!['systemdash','users','backup','project','platformadmin','suspended'].includes(screen))) && (
        <ProjectsList data={data} setData={updateData} user={user} onLogout={handleLogout}
          onOpenProject={openProject} onDeleteProject={deleteProject}
          onSystemDash={()=>navigate('systemdash')}
          onUsers={()=>navigate('users')}
          onBackup={()=>navigate('backup')}
          statusFilter={projectsFilter} onClearFilter={()=>setProjectsFilter(null)}/>
      )}
      <AppFooter/>
    </>
  );
}

// ─── ERROR BOUNDARY ─────────────────────────────────────────────────────────
// Without this, any uncaught render error unmounts the whole tree, leaving a
// black screen (body background is dark) with no way to recover but a hard refresh.
class AppErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Uncaught render error:', error, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{width:'100vw',height:'100vh',background:'#080808',display:'flex',
          alignItems:'center',justifyContent:'center',direction:'rtl',textAlign:'center',color:'#fff'}}>
          <div>
            <div style={{fontSize:44,marginBottom:16}}>⚠️</div>
            <div style={{fontSize:22,fontWeight:700,marginBottom:8}}>משהו השתבש</div>
            <div style={{color:'#999',fontSize:15,marginBottom:20}}>אירעה שגיאה בלתי צפויה. נסה לרענן את הדף.</div>
            <button onClick={()=>window.location.reload()}
              style={{padding:'10px 24px',borderRadius:8,border:'none',background:'#fff',color:'#080808',
                fontWeight:600,cursor:'pointer',fontSize:15}}>רענן דף</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── MOUNT ────────────────────────────────────────────────────────────────────
const _root = ReactDOM.createRoot(document.getElementById('root'));
_root.render(React.createElement(AppErrorBoundary, null, React.createElement(App)));
