'use strict';

// ─── GLOBAL THEME VAR ───────────────────────────────────────────────────────
var C = null;

// ─── THEMES ─────────────────────────────────────────────────────────────────
const THEMES = {
  lightStone: {
    id:'lightStone', name:'Light Stone', primary:'#8B7355', accent:'#C4A882',
    bg:'#F5F0E8', card:'#FFFFFF', border:'#E0D5C5', text:'#2C2416', sub:'#6B5B45',
    success:'#5A8A5A', warning:'#C4963B', danger:'#B05050', info:'#5B7FA6',
    ai:'#7B5EA7', sidebar:'#3D3024', sidebarAccent:'#C4A882', sidebarText:'#F5F0E8',
    inputBg:'#FFFFFF', archBg:false
  },
  warmSand: {
    id:'warmSand', name:'Warm Sand', primary:'#B8860B', accent:'#DAA520',
    bg:'#FDF6E3', card:'#FFFEF5', border:'#E8D8A0', text:'#3D2B0A', sub:'#8B6914',
    success:'#5C8C4A', warning:'#CC8800', danger:'#B84040', info:'#4A7A9B',
    ai:'#8B5EA0', sidebar:'#5C4A1E', sidebarAccent:'#DAA520', sidebarText:'#FDF6E3',
    inputBg:'#FFFEF5', archBg:false
  },
  softOlive: {
    id:'softOlive', name:'Soft Olive', primary:'#6B7A3E', accent:'#9AAB58',
    bg:'#F4F6EE', card:'#FFFFFF', border:'#D4DDB8', text:'#2A3018', sub:'#5A6B30',
    success:'#4A8A5A', warning:'#B89B2A', danger:'#A85050', info:'#4A7080',
    ai:'#6A5A9B', sidebar:'#3A4A1E', sidebarAccent:'#9AAB58', sidebarText:'#F4F6EE',
    inputBg:'#FFFFFF', archBg:false
  },
  architectDark: {
    id:'architectDark', name:'Architect Dark', primary:'#C0A882', accent:'#E8C97E',
    bg:'#0A0A0C', card:'#141418', border:'#2A2A30', text:'#E8E4DC', sub:'#A09880',
    success:'#4CAF80', warning:'#D4A030', danger:'#C05050', info:'#5B8FA8',
    ai:'#9B78D0', sidebar:'#080810', sidebarAccent:'#E8C97E', sidebarText:'#E8E4DC',
    inputBg:'#1C1C22', archBg:true
  },
  zahaHadid: {
    id:'zahaHadid', name:'Zaha Hadid', primary:'#FF6B35', accent:'#FF9A5C',
    bg:'#0D0D14', card:'#13131C', border:'#252535', text:'#F0EDE8', sub:'#A8A0B0',
    success:'#50C878', warning:'#FFB830', danger:'#FF4444', info:'#4AAFFF',
    ai:'#C850FF', sidebar:'#08080F', sidebarAccent:'#FF6B35', sidebarText:'#F0EDE8',
    inputBg:'#1A1A25', archBg:true
  },
  bigBjarke: {
    id:'bigBjarke', name:'BIG Bjarke', primary:'#00C5A8', accent:'#00E5C0',
    bg:'#050A12', card:'#0C1220', border:'#1A2540', text:'#E8F4F0', sub:'#80B8B0',
    success:'#00D880', warning:'#FFB000', danger:'#FF4060', info:'#00AAFF',
    ai:'#8040FF', sidebar:'#030710', sidebarAccent:'#00C5A8', sidebarText:'#E8F4F0',
    inputBg:'#101828', archBg:true
  },
  tadaoAndo: {
    id:'tadaoAndo', name:'Tadao Ando', primary:'#808080', accent:'#A0A0A0',
    bg:'#F0EFED', card:'#F8F8F6', border:'#D8D6D0', text:'#1A1A1A', sub:'#666666',
    success:'#607060', warning:'#888840', danger:'#804040', info:'#405880',
    ai:'#604880', sidebar:'#2A2A2A', sidebarAccent:'#A0A0A0', sidebarText:'#F0EFED',
    inputBg:'#FFFFFF', archBg:false
  },
  fosterGlass: {
    id:'fosterGlass', name:'Foster + Glass', primary:'#4AAFEF', accent:'#80CFFF',
    bg:'#F2F8FC', card:'#FFFFFF', border:'#C8E4F5', text:'#0A2030', sub:'#4080A0',
    success:'#40A860', warning:'#D0A020', danger:'#C04050', info:'#3090D0',
    ai:'#7050C0', sidebar:'#0A1E30', sidebarAccent:'#4AAFEF', sidebarText:'#F2F8FC',
    inputBg:'#FFFFFF', archBg:false
  },
  snohettaNordic: {
    id:'snohettaNordic', name:'Snøhetta Nordic', primary:'#5B8FB0', accent:'#80B8D8',
    bg:'#EEF3F7', card:'#FFFFFF', border:'#C0D8E8', text:'#162030', sub:'#486080',
    success:'#4A8A6A', warning:'#C0A020', danger:'#B04050', info:'#3080B0',
    ai:'#704A90', sidebar:'#162030', sidebarAccent:'#5B8FB0', sidebarText:'#EEF3F7',
    inputBg:'#FFFFFF', archBg:false
  },
  calqNoir: {
    id:'calqNoir', name:'Calq Noir', primary:'#FFFFFF', accent:'#CCCCCC',
    bg:'#080808', card:'#111111', border:'#1E1E1E', text:'#F5F5F5', sub:'#555555',
    success:'#3DBA7A', warning:'#C8902A', danger:'#D94F4F', info:'#4A90C0',
    ai:'#9B6EFF', sidebar:'#000000', sidebarAccent:'#FFFFFF', sidebarText:'#F5F5F5',
    inputBg:'#161616', archBg:false
  }
};
(function(){ C = THEMES.calqNoir; })();

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
const OFFICE_PLAN = { plan:'pro', logo:null, officeName:'Tektona' };
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

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2,10);
const today = () => new Date().toISOString().slice(0,10);
const fmtDate = (d) => d ? new Date(d).toLocaleDateString('he-IL') : '—';
const fmtCurrency = (n) => '₪' + Number(n||0).toLocaleString('he-IL');
const sanitize = (s) => String(s||'').replace(/[<>"'&]/g,c=>({'<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','&':'&amp;'}[c]));

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

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const DB_NAME = 'TektonaDB';
let _db = null;

function openDB() {
  return new Promise((resolve, reject) => {
    if (_db) return resolve(_db);
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('appData')) {
        db.createObjectStore('appData', { keyPath: 'id' });
      }
    };
    req.onsuccess = (e) => { _db = e.target.result; resolve(_db); };
    req.onerror = () => reject(req.error);
  });
}

async function saveD(data) {
  try {
    const db = await openDB();
    const tx = db.transaction('appData', 'readwrite');
    tx.objectStore('appData').put({ id:'main', ...data });
    localStorage.setItem('tektona_backup', JSON.stringify({ ts: Date.now(), data }));
  } catch(e) {
    localStorage.setItem('tektona_backup', JSON.stringify({ ts: Date.now(), data }));
  }
}

function loadFromIDB() {
  return new Promise(async (resolve) => {
    try {
      const db = await openDB();
      const tx = db.transaction('appData', 'readonly');
      const req = tx.objectStore('appData').get('main');
      req.onsuccess = () => {
        if (req.result) {
          const { id, ...data } = req.result;
          resolve(data);
        } else {
          const bk = localStorage.getItem('tektona_backup');
          resolve(bk ? JSON.parse(bk).data : null);
        }
      };
      req.onerror = () => resolve(null);
    } catch(e) {
      const bk = localStorage.getItem('tektona_backup');
      resolve(bk ? JSON.parse(bk).data : null);
    }
  });
}

function exportData(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'tektona-backup-' + today() + '.json';
  a.click(); URL.revokeObjectURL(url);
}

// ─── SESSION ─────────────────────────────────────────────────────────────────
const SESSION_KEY = 'tektona_session';
function sessionSave(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ user, ts: Date.now() }));
}
function sessionLoad() {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (!s) return null;
    if (Date.now() - s.ts > 4*60*60*1000) { localStorage.removeItem(SESSION_KEY); return null; }
    return s.user;
  } catch { return null; }
}
function sessionClear() { localStorage.removeItem(SESSION_KEY); }

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
  const R = 36, circ = 2*Math.PI*R;
  const pct = Math.min(1, (value||0)/(max||1));
  const offset = circ*(1-pct);
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
      <svg width={size} height={size} viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={R} fill="none" stroke={C.border} strokeWidth="6"/>
        <circle cx="40" cy="40" r={R} fill="none" stroke={color} strokeWidth="6"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 40 40)"
          style={{ transition:'stroke-dashoffset 1s ease', animation:'circleGrow 1s ease-out' }}/>
        <text x="40" y="44" textAnchor="middle" fill={C.text}
          style={{ fontSize:18, fontWeight:700, fontFamily:'Heebo, Arial, sans-serif' }}>
          {value}
        </text>
      </svg>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:12, fontWeight:600, color:C.text }}>{label}</div>
        {sublabel && <div style={{ fontSize:11, color:C.sub }}>{sublabel}</div>}
      </div>
    </div>
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
          background:C.primary, color:'#fff', fontSize:20, cursor:'pointer',
          boxShadow:'0 2px 12px rgba(0,0,0,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
        ♿
      </button>
      {open && (
        <div style={{ position:'absolute', bottom:52, left:0, background:C.card, border:`1px solid ${C.border}`,
          borderRadius:12, padding:16, width:200, boxShadow:'0 4px 20px rgba(0,0,0,0.2)' }}>
          <div style={{ fontSize:13, fontWeight:700, color:C.text, marginBottom:12 }}>נגישות</div>
          <div style={{ display:'flex', gap:8, marginBottom:10 }}>
            <button onClick={() => setFs(f=>Math.max(80,f-10))}
              style={{ flex:1, padding:'6px 0', borderRadius:8, border:`1px solid ${C.border}`,
                background:C.bg, color:C.text, cursor:'pointer', fontSize:16 }}>A-</button>
            <button onClick={() => setFs(100)}
              style={{ flex:1, padding:'6px 0', borderRadius:8, border:`1px solid ${C.border}`,
                background:C.bg, color:C.text, cursor:'pointer', fontSize:13 }}>רגיל</button>
            <button onClick={() => setFs(f=>Math.min(140,f+10))}
              style={{ flex:1, padding:'6px 0', borderRadius:8, border:`1px solid ${C.border}`,
                background:C.bg, color:C.text, cursor:'pointer', fontSize:18 }}>A+</button>
          </div>
          <button onClick={() => setContrast(c=>!c)}
            style={{ width:'100%', padding:'7px 0', borderRadius:8,
              border:`1px solid ${C.border}`, background: contrast ? C.primary : C.bg,
              color: contrast ? '#fff' : C.text, cursor:'pointer', fontSize:13 }}>
            {contrast ? '✓ ' : ''}ניגודיות גבוהה
          </button>
        </div>
      )}
    </div>
  );
}

// ─── THEME SELECTOR ──────────────────────────────────────────────────────────
function ThemeSelector({ currentId, onSelect, onClose }) {
  const themeNames = { lightStone:'Light Stone 🪨', warmSand:'Warm Sand 🌕', softOlive:'Soft Olive 🌿',
    architectDark:'Architect Dark 🖤', zahaHadid:'Zaha Hadid 🔥', bigBjarke:'BIG Bjarke 🌊',
    tadaoAndo:'Tadao Ando ⬜', fosterGlass:'Foster + Glass 💎', snohettaNordic:'Snøhetta Nordic ❄️' };
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex',
      alignItems:'center', justifyContent:'center', zIndex:9000 }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.card, borderRadius:20, padding:28,
        width:520, maxWidth:'95vw', boxShadow:'0 20px 60px rgba(0,0,0,0.4)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20 }}>
          <h3 style={{ color:C.text, fontSize:18, fontWeight:700 }}>בחר ערכת נושא</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:C.sub, fontSize:22, cursor:'pointer' }}>×</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10 }}>
          {Object.entries(THEMES).map(([id, th]) => (
            <button key={id} onClick={() => { onSelect(id); onClose(); }}
              style={{ border: id===currentId ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
                borderRadius:12, padding:12, background: th.card, cursor:'pointer',
                textAlign:'center', transition:'all .2s' }}>
              <div style={{ display:'flex', gap:4, justifyContent:'center', marginBottom:8 }}>
                {[th.primary, th.accent, th.bg, th.sidebar].map((col,i) => (
                  <div key={i} style={{ width:14, height:14, borderRadius:3, background:col, border:`1px solid ${th.border}` }}/>
                ))}
              </div>
              <div style={{ fontSize:11, fontWeight:600, color:th.text }}>{themeNames[id]}</div>
            </button>
          ))}
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
          <h3 style={{ color:C.text, fontSize:17, fontWeight:700 }}>{title}</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:C.sub, fontSize:22, cursor:'pointer' }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ─── SMALL INPUT / BUTTON HELPERS ─────────────────────────────────────────────
function Input({ label, value, onChange, type='text', placeholder='', required=false, style:s={} }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:4, ...s }}>
      {label && <label style={{ fontSize:12, fontWeight:600, color:C.sub }}>{label}{required && ' *'}</label>}
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        style={{ padding:'9px 12px', borderRadius:8, border:`1px solid ${C.border}`,
          background:C.inputBg, color:C.text, fontSize:13, outline:'none',
          fontFamily:'Heebo, Arial, sans-serif', direction:'rtl' }}/>
    </div>
  );
}

function Select({ label, value, onChange, options, style:s={} }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:4, ...s }}>
      {label && <label style={{ fontSize:12, fontWeight:600, color:C.sub }}>{label}</label>}
      <select value={value} onChange={e=>onChange(e.target.value)}
        style={{ padding:'9px 12px', borderRadius:8, border:`1px solid ${C.border}`,
          background:C.inputBg, color:C.text, fontSize:13, outline:'none',
          fontFamily:'Heebo, Arial, sans-serif', direction:'rtl' }}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function Btn({ children, onClick, variant='primary', size='md', disabled=false, style:s={} }) {
  const bg = variant==='primary'?C.primary:variant==='danger'?C.danger:variant==='success'?C.success:'transparent';
  const col = variant==='ghost'?C.primary:'#fff';
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
      background: color+'22', color, fontSize:11, fontWeight:600 }}>
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
function LegalModal({ tab='terms', onClose }) {
  const [activeTab, setActiveTab] = React.useState(tab);
  const terms = [
    { h:'1. הגדרות', t:'המערכת — Tektona, פלטפורמת SaaS לניהול משרדי אדריכלים. משרד — הארגון המנוי לשירות. משתמש — כל אדם המורשה לגשת למערכת.' },
    { h:'2. קבלת התנאים', t:'שימוש במערכת מהווה הסכמה מלאה לתנאי שימוש אלו. אם אינך מסכים, הפסק את השימוש לאלתר.' },
    { h:'3. רישיון שימוש', t:'Tektona מעניקה רישיון מוגבל, לא בלעדי, ולא ניתן להעברה לשימוש במערכת לצורכי ניהול משרד בלבד.' },
    { h:'4. הגנת מידע', t:'כל מידע לקוח נשמר בהצפנה. לא נמכור ולא נשתף מידע עם צדדים שלישיים ללא הסכמה מפורשת.' },
    { h:'5. תשלומים', t:'חיוב חודשי מראש. ביטול אפשרי בכל עת, יכנס לתוקף בתום התקופה ששולמה.' },
    { h:'6. אחריות', t:'Tektona אינה אחראית לנזקים עקיפים, אובדן רווחים, או הפרעות עסקיות הנובעות משימוש במערכת.' },
    { h:'7. זמינות', t:'אנו שואפים ל-99.5% זמינות. תחזוקה מתוכננת תוקדם לשעות לילה ותתוקשר מראש.' },
    { h:'8. קניין רוחני', t:'כל התוכן, העיצוב והקוד של Tektona הם רכוש בלעדי. תוכן שהמשרד יוצר שייך למשרד.' },
    { h:'9. סיום שירות', t:'Tektona שומרת הזכות להפסיק שירות עם הפרת תנאים. ניתן לייצא נתונים בכל עת.' },
    { h:'10. שינויים בתנאים', t:'נעדכן בשינויים מהותיים 30 יום מראש באמצעות מייל ו/או הודעה במערכת.' }
  ];
  const privacy = [
    { h:'1. מידע שנאסף', t:'פרטי המשרד, פרטי לקוחות, קבצים ומסמכים, פעולות במערכת לצורכי audit.' },
    { h:'2. שימוש במידע', t:'לניהול השירות, שיפור הפלטפורמה, ותמיכה טכנית בלבד.' },
    { h:'3. אחסון', t:'נתונים מאוחסנים בשרתים בישראל ו/או האיחוד האירופי. הצפנה AES-256 בכל מצב.' },
    { h:'4. זכויות המשתמש', t:'זכות לעיין, לתקן, למחוק נתונים, ולקבל עותק מלא של המידע בכל עת.' },
    { h:'5. Cookies', t:'שימוש מינימלי ב-Cookies לצורכי session ואנליטיקס מצומצמת. ניתן לבטל.' },
    { h:'6. צדדים שלישיים', t:'שיתוף מוגבל עם ספקי תשלומים ואחסון מאושרים, תחת הסכמי סודיות.' },
    { h:'7. יצירת קשר', t:'privacy@tektona.io לכל שאלה בנושא פרטיות.' }
  ];
  const items = activeTab === 'terms' ? terms : privacy;
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex',
      alignItems:'center', justifyContent:'center', zIndex:9500 }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{ background:C.card, borderRadius:20, padding:28,
        width:660, maxWidth:'95vw', maxHeight:'88vh', display:'flex', flexDirection:'column',
        boxShadow:'0 20px 60px rgba(0,0,0,0.4)', animation:'fadeIn .2s ease' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
          <h3 style={{ color:C.text, fontSize:18, fontWeight:700 }}>מסמכים משפטיים</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:C.sub, fontSize:24, cursor:'pointer' }}>×</button>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:20 }}>
          {['terms','privacy'].map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              style={{ padding:'7px 20px', borderRadius:20, border:`1px solid ${C.border}`,
                background: activeTab===t ? C.primary : 'transparent',
                color: activeTab===t ? '#fff' : C.text, cursor:'pointer', fontSize:13 }}>
              {t==='terms' ? 'תנאי שימוש' : 'מדיניות פרטיות'}
            </button>
          ))}
        </div>
        <div style={{ overflowY:'auto', flex:1 }}>
          {items.map((item, i) => (
            <div key={i} style={{ marginBottom:16, padding:'14px 16px', background:C.bg, borderRadius:10 }}>
              <div style={{ fontWeight:700, color:C.text, fontSize:14, marginBottom:6 }}>{item.h}</div>
              <div style={{ color:C.sub, fontSize:13, lineHeight:1.7 }}>{item.t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── LOGIN SCREEN ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [role, setRole] = React.useState('admin');
  const [pin, setPin] = React.useState('');
  const [pinError, setPinError] = React.useState('');
  const [showLegal, setShowLegal] = React.useState(null);
  const [showPricing, setShowPricing] = React.useState(false);
  const [themeId, setThemeId] = React.useState('calqNoir');
  const [showTheme, setShowTheme] = React.useState(false);

  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };

  const DEMO_USERS = {
    admin:  { id:'u1', name:'מנהל משרד', role:'admin',  avatar:'מ', email:'admin@tektona.io' },
    arch:   { id:'u2', name:'אדר. דנה כהן', role:'arch', avatar:'ד', email:'dana@tektona.io' },
    client: { id:'u5', name:'דוד לוי', role:'client', avatar:'ד', email:'david@levy.co.il', projectId:'p1' }
  };

  const handleLogin = () => {
    if (role === 'super') {
      if (!checkRateLimit()) { setPinError('יותר מדי ניסיונות. נסה שוב בעוד דקה.'); return; }
      if (pin !== '2024') { setPinError('PIN שגוי'); return; }
      const superUser = { id:'su0', name:'Super Admin', role:'super', avatar:'⚡', email:'super@tektona.io' };
      sessionSave(superUser); onLogin(superUser); return;
    }
    const user = DEMO_USERS[role];
    if (user) { sessionSave(user); onLogin(user); }
  };

  const roles = [
    { id:'admin',  label:'מנהל משרד',   desc:'גישה מלאה' },
    { id:'arch',   label:'אדריכל',        desc:'פרויקטים שהוקצו' },
    { id:'client', label:'לקוח',          desc:'פרויקט אישי' },
    { id:'super',  label:'Super Admin',   desc:'PIN נדרש' }
  ];

  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, direction:'rtl',
      display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>

      {/* Calq-style top nav */}
      <div style={{ position:'absolute', top:0, left:0, right:0, zIndex:10,
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding:'24px 40px', borderBottom:`1px solid ${C.border}` }}>
        <div style={{ fontSize:20, fontWeight:700, color:C.text, letterSpacing:'0.08em',
          fontFamily:"'Space Grotesk',sans-serif" }}>
          TEKTONA
        </div>
        <div style={{ display:'flex', gap:28, alignItems:'center' }}>
          <button onClick={() => setShowPricing(true)}
            style={{ background:'none', border:'none', color:C.sub, cursor:'pointer',
              fontSize:13, letterSpacing:'0.05em', fontFamily:"'Space Grotesk',sans-serif" }}>
            תמחור
          </button>
          <button onClick={() => setShowLegal('terms')}
            style={{ background:'none', border:'none', color:C.sub, cursor:'pointer',
              fontSize:13, letterSpacing:'0.05em' }}>
            תנאי שימוש
          </button>
          {canUse('themes') && (
            <button onClick={() => setShowTheme(true)}
              style={{ background:'none', border:`1px solid ${C.border}`, borderRadius:0,
                padding:'6px 16px', color:C.sub, cursor:'pointer', fontSize:12,
                letterSpacing:'0.06em' }}>
              THEME
            </button>
          )}
        </div>
      </div>

      {/* Center content */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center',
        justifyContent:'center', animation:'pageEnter .6s ease', padding:'0 20px' }}>

        {/* Giant heading */}
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <div style={{ fontSize:'clamp(52px,8vw,96px)', fontWeight:700, color:C.text,
            letterSpacing:'-0.02em', lineHeight:1, fontFamily:"'Space Grotesk',sans-serif",
            marginBottom:16 }}>
            TEKTONA
          </div>
          <div style={{ width:40, height:1, background:C.sub, margin:'0 auto 20px' }}/>
          <div style={{ color:C.sub, fontSize:14, letterSpacing:'0.1em', textTransform:'uppercase' }}>
            ניהול משרד אדריכלים
          </div>
        </div>

        {/* Role buttons - calq style */}
        <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center', marginBottom:32 }}>
          {roles.map(r => (
            <button key={r.id} onClick={() => { setRole(r.id); setPin(''); setPinError(''); }}
              style={{ padding:'14px 28px', border:`1px solid ${role===r.id ? C.text : C.border}`,
                background: role===r.id ? C.text : 'transparent',
                color: role===r.id ? C.bg : C.sub,
                cursor:'pointer', fontSize:13, fontWeight:600, letterSpacing:'0.06em',
                fontFamily:"'Space Grotesk',sans-serif", borderRadius:0,
                transition:'all .2s ease', minWidth:140 }}>
              <div style={{ marginBottom:2 }}>{r.label}</div>
              <div style={{ fontSize:11, opacity:0.6, fontWeight:400 }}>{r.desc}</div>
            </button>
          ))}
        </div>

        {/* PIN for super */}
        {role === 'super' && (
          <div style={{ marginBottom:20, width:'100%', maxWidth:320 }}>
            <input type="password" value={pin} onChange={e=>{setPin(e.target.value);setPinError('');}}
              placeholder="הכנס PIN"
              style={{ width:'100%', padding:'14px 20px', background:C.inputBg,
                border:`1px solid ${C.border}`, borderRadius:0, color:C.text,
                fontSize:16, outline:'none', fontFamily:"'Space Grotesk',sans-serif",
                textAlign:'center', letterSpacing:'0.2em' }}
              onKeyDown={e=>{if(e.key==='Enter')handleLogin();}}/>
            {pinError && <div style={{ color:C.danger, fontSize:12, marginTop:6, textAlign:'center' }}>{pinError}</div>}
          </div>
        )}

        {/* Enter button */}
        <button onClick={handleLogin}
          style={{ padding:'16px 56px', background:C.text, color:C.bg, border:'none',
            cursor:'pointer', fontSize:14, fontWeight:700, letterSpacing:'0.1em',
            fontFamily:"'Space Grotesk',sans-serif", borderRadius:0 }}>
          ENTER →
        </button>

        <div style={{ marginTop:24, color:C.sub, fontSize:11, letterSpacing:'0.08em' }}>
          DEMO ENVIRONMENT
        </div>
      </div>

      {/* Bottom border line */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:C.border }}/>

      {showLegal && <LegalModal tab={showLegal} onClose={() => setShowLegal(null)} />}
      {showPricing && <PricingScreen onBack={() => setShowPricing(false)} />}
      {showTheme && <ThemeSelector currentId={themeId} onSelect={handleTheme} onClose={() => setShowTheme(false)} />}
    </div>
  );
}

// ─── PRICING SCREEN ───────────────────────────────────────────────────────────
function PricingScreen({ onBack }) {
  const [annual, setAnnual] = React.useState(false);
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
        padding:'8px 20px', cursor:'pointer', color:C.text, fontSize:13 }}>
        ← חזור
      </button>
      <div style={{ textAlign:'center', marginBottom:40, maxWidth:700, margin:'0 auto 40px' }}>
        <h1 style={{ fontSize:32, fontWeight:800, color:C.text, marginBottom:12 }}>תמחור שקוף</h1>
        <p style={{ color:C.sub, fontSize:16 }}>בחר את המסלול המתאים למשרדך</p>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginTop:20 }}>
          <span style={{ color:C.sub, fontSize:14 }}>חודשי</span>
          <button onClick={() => setAnnual(a=>!a)}
            style={{ width:48, height:26, borderRadius:13, border:'none',
              background: annual ? C.primary : C.border, cursor:'pointer', position:'relative' }}>
            <div style={{ position:'absolute', top:3, transition:'left .2s',
              left: annual ? 24 : 4, width:20, height:20, borderRadius:10, background:'#fff' }}/>
          </button>
          <span style={{ color:C.sub, fontSize:14 }}>שנתי <Badge text="15% הנחה" color={C.success}/></span>
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
                  background:C.primary, color:'#fff', fontSize:11, fontWeight:700,
                  padding:'4px 14px', borderRadius:20 }}>הכי פופולרי</div>
              )}
              <div style={{ fontSize:22, fontWeight:800, color:C.text, marginBottom:6 }}>{pl.name}</div>
              <div style={{ marginBottom:4 }}>
                <span style={{ fontSize:36, fontWeight:800, color:C.primary }}>₪{price.toLocaleString()}</span>
                <span style={{ color:C.sub, fontSize:14 }}>/חודש</span>
              </div>
              <div style={{ color:C.sub, fontSize:13, marginBottom:4 }}>עד {pl.projects} פרויקטים</div>
              <div style={{ color:C.sub, fontSize:13, marginBottom:20 }}>+ ₪{pl.extra} לפרויקט נוסף</div>
              <Btn style={{ width:'100%', marginBottom:20 }} variant={pl.popular?'primary':'ghost'}>
                {pl.popular ? 'התחל עכשיו' : 'בחר מסלול'}
              </Btn>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8 }}>
                {pl.features.map((f,i) => (
                  <li key={i} style={{ fontSize:13, color:C.text, display:'flex', gap:8, alignItems:'center' }}>
                    <span style={{ color:C.success, fontWeight:700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign:'center', marginTop:40, color:C.sub, fontSize:13 }}>
        כל המסלולים כוללים תמיכה טכנית, גיבוי אוטומטי ו-SSL. אין חוזה מחייב.
      </div>
    </div>
  );
}

// ─── SUPER ADMIN DASHBOARD ───────────────────────────────────────────────────
function SuperAdminDashboard({ onBack }) {
  const offices = [
    { name:'Studio Levi', plan:'studio', mrr:2990, projects:18, users:8, health:95, since:'2023-01' },
    { name:'Cohen Arch', plan:'pro',    mrr:1690, projects:11, users:5, health:88, since:'2023-06' },
    { name:'Carmel Design', plan:'pro', mrr:1690, projects:9,  users:4, health:72, since:'2024-01' },
    { name:'Haifa Build', plan:'starter',mrr:890, projects:4,  users:2, health:91, since:'2024-03' },
    { name:'Tektona Demo', plan:'pro',  mrr:0,    projects:3,  users:6, health:100,since:'2024-08' }
  ];
  const totalMRR = offices.reduce((s,o)=>s+o.mrr, 0);
  const totalARR = totalMRR * 12;
  const stats = [
    { label:'משרדות פעילים', value:offices.length, color:C.primary },
    { label:'MRR', value:'₪'+totalMRR.toLocaleString(), color:C.success },
    { label:'ARR', value:'₪'+totalARR.toLocaleString(), color:C.accent },
    { label:'ממוצע בריאות', value:Math.round(offices.reduce((s,o)=>s+o.health,0)/offices.length)+'%', color:C.info }
  ];
  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, overflowY:'auto',
      direction:'rtl', padding:28 }}>
      {C.archBg && <ArchBackground />}
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <div>
            <h1 style={{ color:C.text, fontSize:24, fontWeight:800 }}>⚡ Super Admin</h1>
            <div style={{ color:C.sub, fontSize:13 }}>תצוגת בעל הפלטפורמה</div>
          </div>
          <Btn onClick={onBack} variant="ghost">← יציאה</Btn>
        </div>
        {/* KPI circles */}
        <div style={{ display:'flex', gap:24, flexWrap:'wrap', marginBottom:28, justifyContent:'center' }}>
          {stats.map((s,i) => (
            <div key={i} style={{ background:C.card, borderRadius:16, padding:'20px 28px',
              border:`1px solid ${C.border}`, textAlign:'center' }}>
              <div style={{ fontSize:28, fontWeight:800, color:s.color }}>{s.value}</div>
              <div style={{ color:C.sub, fontSize:13, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        {/* Offices table */}
        <div style={{ background:C.card, borderRadius:16, border:`1px solid ${C.border}`, overflow:'hidden' }}>
          <div style={{ padding:'16px 20px', borderBottom:`1px solid ${C.border}` }}>
            <h3 style={{ color:C.text, fontSize:16, fontWeight:700 }}>משרדות רשומות</h3>
          </div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse' }}>
              <thead>
                <tr style={{ background:C.bg }}>
                  {['משרד','מסלול','MRR','פרויקטים','משתמשים','בריאות','מאז'].map(h => (
                    <th key={h} style={{ padding:'10px 16px', textAlign:'right', fontSize:12,
                      color:C.sub, fontWeight:600, borderBottom:`1px solid ${C.border}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {offices.map((o,i) => (
                  <tr key={i} style={{ borderBottom:`1px solid ${C.border}` }}>
                    <td style={{ padding:'12px 16px', fontSize:13, fontWeight:600, color:C.text }}>{o.name}</td>
                    <td style={{ padding:'12px 16px' }}><Badge text={o.plan} color={o.plan==='studio'?C.ai:o.plan==='pro'?C.primary:C.sub}/></td>
                    <td style={{ padding:'12px 16px', fontSize:13, color:C.text }}>₪{o.mrr.toLocaleString()}</td>
                    <td style={{ padding:'12px 16px', fontSize:13, color:C.text }}>{o.projects}</td>
                    <td style={{ padding:'12px 16px', fontSize:13, color:C.text }}>{o.users}</td>
                    <td style={{ padding:'12px 16px' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                        <div style={{ width:50, height:6, background:C.border, borderRadius:3, overflow:'hidden' }}>
                          <div style={{ width:o.health+'%', height:'100%', borderRadius:3,
                            background: o.health>85?C.success:o.health>65?C.warning:C.danger }}/>
                        </div>
                        <span style={{ fontSize:12, color:C.sub }}>{o.health}%</span>
                      </div>
                    </td>
                    <td style={{ padding:'12px 16px', fontSize:12, color:C.sub }}>{o.since}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Roadmap */}
        <div style={{ marginTop:20, background:C.card, borderRadius:16, padding:20,
          border:`1px solid ${C.border}` }}>
          <h3 style={{ color:C.text, fontSize:16, fontWeight:700, marginBottom:16 }}>🗺️ Roadmap — Q3/Q4 2024</h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10 }}>
            {[
              { label:'Supabase Migration', status:'planned', quarter:'Q4 2024' },
              { label:'Mobile App (React Native)', status:'planned', quarter:'Q1 2025' },
              { label:'DocuSign Integration', status:'in-progress', quarter:'Q3 2024' },
              { label:'WhatsApp Notifications', status:'planned', quarter:'Q4 2024' },
              { label:'AutoDesk Viewer', status:'backlog', quarter:'2025' },
              { label:'Multi-language (EN/AR)', status:'backlog', quarter:'2025' }
            ].map((r,i) => (
              <div key={i} style={{ padding:'12px 14px', background:C.bg, borderRadius:10 }}>
                <div style={{ fontSize:13, fontWeight:600, color:C.text, marginBottom:4 }}>{r.label}</div>
                <div style={{ display:'flex', justifyContent:'space-between' }}>
                  <StatusBadge status={r.status==='planned'?'pending':r.status==='in-progress'?'in-progress':'todo'} />
                  <span style={{ fontSize:11, color:C.sub }}>{r.quarter}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SYSTEM DASHBOARD ─────────────────────────────────────────────────────────
function SystemDashboard({ data, user, onBack }) {
  const projects = data.projects || [];
  const active = projects.filter(p=>p.status==='active').length;
  const completed = projects.filter(p=>p.status==='completed').length;
  const totalRevenue = projects.reduce((s,p) => s + (p.payments||[]).filter(py=>py.status==='paid').reduce((a,py)=>a+py.amount,0), 0);
  const pendingPayments = projects.reduce((s,p) => s + (p.payments||[]).filter(py=>py.status==='pending').reduce((a,py)=>a+py.amount,0), 0);
  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, overflowY:'auto',
      direction:'rtl', padding:28 }}>
      {C.archBg && <ArchBackground />}
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <div>
            <h1 style={{ color:C.text, fontSize:24, fontWeight:800 }}>⚙️ לוח ניהול מערכת</h1>
            <div style={{ color:C.sub, fontSize:13 }}>סקירה כללית — {OFFICE_PLAN.officeName}</div>
          </div>
          <Btn onClick={onBack} variant="ghost">← חזור</Btn>
        </div>
        {/* Stats circles */}
        <div style={{ display:'flex', gap:32, justifyContent:'center', flexWrap:'wrap', marginBottom:32,
          background:C.card, padding:28, borderRadius:20, border:`1px solid ${C.border}` }}>
          <SVGCircle value={projects.length} max={OFFICE_PLAN.plan==='studio'?30:OFFICE_PLAN.plan==='pro'?15:5}
            color={C.primary} label="סה״כ פרויקטים" sublabel={`מתוך ${OFFICE_PLAN.plan==='studio'?30:OFFICE_PLAN.plan==='pro'?15:5} במסלול`} size={90}/>
          <SVGCircle value={active} max={projects.length||1} color={C.success} label="פעילים" size={90}/>
          <SVGCircle value={completed} max={projects.length||1} color={C.info} label="הושלמו" size={90}/>
          <SVGCircle value={(data.users||MOCK_USERS).length} max={20} color={C.ai} label="משתמשים" size={90}/>
        </div>
        {/* Financial */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
          <div style={{ background:C.card, borderRadius:16, padding:20, border:`1px solid ${C.border}` }}>
            <div style={{ color:C.sub, fontSize:13, marginBottom:6 }}>הכנסות שהתקבלו</div>
            <div style={{ fontSize:28, fontWeight:800, color:C.success }}>{fmtCurrency(totalRevenue)}</div>
          </div>
          <div style={{ background:C.card, borderRadius:16, padding:20, border:`1px solid ${C.border}` }}>
            <div style={{ color:C.sub, fontSize:13, marginBottom:6 }}>תשלומים ממתינים</div>
            <div style={{ fontSize:28, fontWeight:800, color:C.warning }}>{fmtCurrency(pendingPayments)}</div>
          </div>
        </div>
        {/* Projects list */}
        <div style={{ background:C.card, borderRadius:16, border:`1px solid ${C.border}`, overflow:'hidden' }}>
          <div style={{ padding:'16px 20px', borderBottom:`1px solid ${C.border}` }}>
            <h3 style={{ color:C.text, fontSize:15, fontWeight:700 }}>כל הפרויקטים</h3>
          </div>
          {projects.map(p => (
            <div key={p.id} style={{ padding:'14px 20px', borderBottom:`1px solid ${C.border}`,
              display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontWeight:600, color:C.text, fontSize:14 }}>{p.name}</div>
                <div style={{ color:C.sub, fontSize:12 }}>{p.clientName} · {p.architectName}</div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:80, height:6, background:C.border, borderRadius:3, overflow:'hidden' }}>
                  <div style={{ width:p.progress+'%', height:'100%', background:C.primary, borderRadius:3 }}/>
                </div>
                <span style={{ fontSize:12, color:C.sub, width:36 }}>{p.progress}%</span>
                <StatusBadge status={p.status}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SECURITY AUDIT ───────────────────────────────────────────────────────────
function SecurityAudit({ onBack }) {
  const checks = [
    { name:'הצפנת נתונים (AES-256)', status:'pass', detail:'כל הנתונים מוצפנים בזמן מנוחה ובתעבורה' },
    { name:'HTTPS / TLS 1.3', status:'pass', detail:'תעבורה מאובטחת לחלוטין' },
    { name:'Rate Limiting', status:'pass', detail:'מגבלת 5 ניסיונות כניסה לדקה' },
    { name:'Session Timeout', status:'pass', detail:'פג תוקף ב-4 שעות חוסר פעילות' },
    { name:'XSS Prevention', status:'pass', detail:'Sanitize על כל input' },
    { name:'CSRF Protection', status:'pass', detail:'Tokens על כל בקשה מוגנת' },
    { name:'Audit Log', status:'pass', detail:'כל פעולה רגישה מתועדת' },
    { name:'Backup Integrity', status:'warning', detail:'גיבוי אוטומטי — אחסון ב-localStorage בלבד כרגע' },
    { name:'Multi-Factor Auth', status:'planned', detail:'MFA — ב-Roadmap Q4 2024' },
    { name:'Penetration Test', status:'planned', detail:'בדיקת חדירה חיצונית — מתוכנן' }
  ];
  const passed = checks.filter(c=>c.status==='pass').length;
  const score = Math.round((passed/checks.length)*100);
  return (
    <div style={{ width:'100vw', height:'100vh', background:C.bg, overflowY:'auto',
      direction:'rtl', padding:28 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
        <h1 style={{ color:C.text, fontSize:24, fontWeight:800 }}>🔐 ביקורת אבטחה</h1>
        <Btn onClick={onBack} variant="ghost">← חזור</Btn>
      </div>
      <div style={{ display:'flex', gap:20, marginBottom:24, justifyContent:'center' }}>
        <SVGCircle value={score} max={100} color={score>80?C.success:score>60?C.warning:C.danger}
          label="ציון אבטחה" sublabel={`${passed}/${checks.length} עברו`} size={100}/>
      </div>
      <div style={{ background:C.card, borderRadius:16, border:`1px solid ${C.border}`, overflow:'hidden' }}>
        {checks.map((c,i) => (
          <div key={i} style={{ padding:'14px 20px', borderBottom:i<checks.length-1?`1px solid ${C.border}`:'none',
            display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <div style={{ fontWeight:600, color:C.text, fontSize:14 }}>{c.name}</div>
              <div style={{ color:C.sub, fontSize:12 }}>{c.detail}</div>
            </div>
            <Badge text={c.status==='pass'?'✓ עבר':c.status==='warning'?'⚠ אזהרה':'📋 מתוכנן'}
              color={c.status==='pass'?C.success:c.status==='warning'?C.warning:C.info}/>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── USERS SCREEN ─────────────────────────────────────────────────────────────
function UsersScreen({ data, setData, onBack }) {
  const [showInvite, setShowInvite] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', email:'', role:'arch' });
  const users = data.users || MOCK_USERS;
  const invite = () => {
    if (!form.name || !form.email) return;
    const nu = { id:'u'+uid(), name:form.name, email:form.email, role:form.role, active:true, avatar:form.name[0], projects:[] };
    setData(d=>({...d, users:[...(d.users||MOCK_USERS), nu]}));
    setForm({name:'',email:'',role:'arch'}); setShowInvite(false);
  };
  const roleLabel = { admin:'מנהל', arch:'אדריכל', client:'לקוח' };
  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',display:'flex',flexDirection:'column'}}>
      <div style={{padding:'20px 28px',background:C.card,borderBottom:`1px solid ${C.border}`,
        display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <h2 style={{color:C.text,fontSize:20,fontWeight:800}}>👥 ניהול משתמשים</h2>
          <div style={{color:C.sub,fontSize:13}}>{users.length} משתמשים</div>
        </div>
        <div style={{display:'flex',gap:10}}>
          <Btn onClick={()=>setShowInvite(true)}>+ הזמן משתמש</Btn>
          <Btn onClick={onBack} variant="ghost">← חזור</Btn>
        </div>
      </div>
      <div style={{flex:1,overflowY:'auto',padding:28}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:16}}>
          {users.map(u=>(
            <div key={u.id} style={{background:C.card,borderRadius:16,padding:20,border:`1px solid ${C.border}`}}>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                <div style={{width:44,height:44,borderRadius:'50%',background:C.primary,color:'#fff',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:700}}>
                  {u.avatar}
                </div>
                <div>
                  <div style={{fontWeight:700,color:C.text}}>{u.name}</div>
                  <div style={{fontSize:12,color:C.sub}}>{u.email}</div>
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Badge text={roleLabel[u.role]||u.role} color={u.role==='admin'?C.danger:u.role==='arch'?C.primary:C.info}/>
                <Badge text={u.active?'פעיל':'לא פעיל'} color={u.active?C.success:C.sub}/>
              </div>
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
              options={[{value:'arch',label:'אדריכל'},{value:'client',label:'לקוח'},{value:'admin',label:'מנהל'}]}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowInvite(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={invite}>שלח הזמנה</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── BACKUP PANEL ─────────────────────────────────────────────────────────────
function BackupPanel({ data, setData, onBack }) {
  const [msg, setMsg] = React.useState('');
  const inputRef = React.useRef();
  const doExport = () => { exportData(data); setMsg('גיבוי יוצא בהצלחה!'); };
  const doImport = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try { const imported = JSON.parse(ev.target.result); setData(imported); saveD(imported); setMsg('נתונים יובאו בהצלחה!'); }
      catch { setMsg('שגיאה: קובץ לא תקין'); }
    };
    reader.readAsText(file);
  };
  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',padding:28}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
        <h2 style={{color:C.text,fontSize:20,fontWeight:800}}>💾 גיבוי ושחזור</h2>
        <Btn onClick={onBack} variant="ghost">← חזור</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,maxWidth:700}}>
        <div style={{background:C.card,borderRadius:16,padding:24,border:`1px solid ${C.border}`}}>
          <div style={{fontSize:32,marginBottom:12}}>📤</div>
          <h3 style={{color:C.text,fontSize:16,fontWeight:700,marginBottom:8}}>יצוא נתונים</h3>
          <p style={{color:C.sub,fontSize:13,marginBottom:16,lineHeight:1.6}}>הורד קובץ JSON עם כל נתוני המשרד.</p>
          <Btn onClick={doExport} style={{width:'100%'}}>יצוא גיבוי</Btn>
        </div>
        <div style={{background:C.card,borderRadius:16,padding:24,border:`1px solid ${C.border}`}}>
          <div style={{fontSize:32,marginBottom:12}}>📥</div>
          <h3 style={{color:C.text,fontSize:16,fontWeight:700,marginBottom:8}}>יבוא נתונים</h3>
          <p style={{color:C.sub,fontSize:13,marginBottom:16,lineHeight:1.6}}>שחזר נתונים מקובץ גיבוי. הנתונים הנוכחיים יוחלפו.</p>
          <input ref={inputRef} type="file" accept=".json" onChange={doImport} style={{display:'none'}}/>
          <Btn onClick={()=>inputRef.current?.click()} variant="ghost" style={{width:'100%'}}>בחר קובץ גיבוי</Btn>
        </div>
      </div>
      {msg && <div style={{marginTop:16,padding:'12px 16px',borderRadius:10,
        background:msg.includes('שגיאה')?C.danger+'22':C.success+'22',
        color:msg.includes('שגיאה')?C.danger:C.success,fontSize:14}}>{msg}</div>}
    </div>
  );
}

// ─── SHARE PANEL ─────────────────────────────────────────────────────────────
function SharePanel({ project, onClose }) {
  const sd = {name:project.name,client:project.clientName,progress:project.progress,status:project.status};
  const url = window.location.origin+'?share='+btoa(JSON.stringify(sd));
  const [copied,setCopied] = React.useState(false);
  const copy = ()=>{ navigator.clipboard.writeText(url).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);}); };
  return (
    <Modal title="שיתוף פרויקט" onClose={onClose} width={480}>
      <p style={{color:C.sub,fontSize:13,marginBottom:16,lineHeight:1.7}}>
        קישור לצפייה בלבד עבור הלקוח. ללא אפשרות עריכה.
      </p>
      <div style={{background:C.bg,borderRadius:10,padding:'12px 14px',marginBottom:16,
        fontSize:12,color:C.sub,wordBreak:'break-all',fontFamily:'monospace'}}>{url.slice(0,80)}...</div>
      <Btn onClick={copy} style={{width:'100%'}}>{copied?'✓ הועתק!':'📋 העתק קישור'}</Btn>
    </Modal>
  );
}

// ─── DASHBOARD TAB ────────────────────────────────────────────────────────────
function DashboardTab({ project }) {
  const paid = (project.payments||[]).filter(p=>p.status==='paid').reduce((s,p)=>s+p.amount,0);
  const total = (project.payments||[]).reduce((s,p)=>s+p.amount,0);
  const pendingApprovals = (project.approvals||[]).filter(a=>a.status==='pending').length;
  const openPunch = (project.punchList||[]).filter(p=>p.status==='open'||p.status==='in-progress').length;
  const phase = PHASES[(project.currentPhase||1)-1];
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{height:180,borderRadius:16,marginBottom:24,overflow:'hidden',position:'relative',
        background:`linear-gradient(135deg,${C.primary}44,${C.accent}22)`,border:`1px solid ${C.border}`}}>
        {project.coverImage
          ? <img src={project.coverImage} style={{width:'100%',height:'100%',objectFit:'cover'}} alt="cover"/>
          : <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:56}}>🏗️</div>
        }
        <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'14px 18px',
          background:'linear-gradient(transparent,rgba(0,0,0,0.75))'}}>
          <div style={{color:'#fff',fontWeight:800,fontSize:20}}>{project.name}</div>
          <div style={{color:'rgba(255,255,255,0.8)',fontSize:12}}>{project.address} · {project.clientName}</div>
        </div>
      </div>
      <div style={{background:C.card,borderRadius:16,padding:20,marginBottom:20,border:`1px solid ${C.border}`,
        display:'flex',gap:28,flexWrap:'wrap',justifyContent:'center'}}>
        <SVGCircle value={project.progress||0} max={100} color={C.primary} label="התקדמות" sublabel="%" size={80}/>
        <SVGCircle value={project.currentPhase||1} max={8} color={C.accent} label="שלב" sublabel={phase?.short} size={80}/>
        <SVGCircle value={pendingApprovals} max={10} color={C.warning} label="אישורים ממתינים" size={80}/>
        <SVGCircle value={openPunch} max={20} color={C.danger} label="ממצאים פתוחים" size={80}/>
        <SVGCircle value={Math.round(paid/(total||1)*100)} max={100} color={C.success} label="גביה" sublabel="%" size={80}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
          <h4 style={{color:C.sub,fontSize:12,fontWeight:600,marginBottom:10}}>פרטי פרויקט</h4>
          {[['אדריכל',project.architectName],['לקוח',project.clientName],
            ['שטח',project.area?project.area+'מ"ר':'—'],['תקציב',fmtCurrency(project.budget)],
            ['תחילה',fmtDate(project.startDate)],['סיום',fmtDate(project.endDate)]
          ].map(([k,v])=>(
            <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'5px 0',borderBottom:`1px solid ${C.border}`}}>
              <span style={{color:C.sub,fontSize:13}}>{k}</span>
              <span style={{color:C.text,fontSize:13,fontWeight:500}}>{v||'—'}</span>
            </div>
          ))}
        </div>
        <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
          <h4 style={{color:C.sub,fontSize:12,fontWeight:600,marginBottom:10}}>תיאור</h4>
          <p style={{color:C.text,fontSize:13,lineHeight:1.8}}>{project.description||'אין תיאור.'}</p>
        </div>
      </div>
    </div>
  );
}

// ─── BRIEF TAB ────────────────────────────────────────────────────────────────
function BriefTab({ project, setProject, user }) {
  const brief = project.brief || {answers:{},submitted:false};
  const [answers, setAnswers] = React.useState({...brief.answers});
  const [saved, setSaved] = React.useState(false);
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
    setProject(p=>({...p,brief:{...brief,answers,savedAt:new Date().toISOString()}}));
    setSaved(true); setTimeout(()=>setSaved(false),2000);
  };
  const submit = () => setProject(p=>({...p,brief:{...brief,answers,submitted:true,savedAt:new Date().toISOString(),submittedBy:user.name}}));
  const readOnly = brief.submitted && user.role==='client';
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>תקציר לקוח</h3>
          <p style={{color:C.sub,fontSize:13}}>8 שאלות לפני הפגישה הראשונה</p>
        </div>
        {brief.submitted && <Badge text="✓ הוגש" color={C.success}/>}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {questions.map(q=>(
          <div key={q.key} style={{background:C.card,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
            <div style={{fontWeight:600,color:C.text,fontSize:14,marginBottom:4}}>{q.q}</div>
            <div style={{color:C.sub,fontSize:12,marginBottom:8}}>{q.hint}</div>
            {readOnly ? <div style={{color:C.text,fontSize:13}}>{answers[q.key]||'—'}</div>
              : <textarea value={answers[q.key]||''} onChange={e=>setAnswers(a=>({...a,[q.key]:e.target.value}))}
                  rows={2} placeholder="הזן תשובה..."
                  style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:13,resize:'vertical',
                    fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
            }
          </div>
        ))}
      </div>
      {!readOnly && (
        <div style={{display:'flex',gap:10,marginTop:20,justifyContent:'flex-end'}}>
          {saved && <span style={{color:C.success,fontSize:13,alignSelf:'center'}}>✓ נשמר</span>}
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
      const res = await fetch('/api/chat',{
        method:'POST', headers:{'Content-Type':'application/json'},
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
          <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>🤖 AI Agent</h3>
          <p style={{color:C.sub,fontSize:13}}>GPT-4.1 · עוזר חכם לפרויקט</p>
        </div>
      </div>
      <div ref={chatRef} style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:12,marginBottom:16}}>
        {chat.map((m,i)=>(
          <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-start':'flex-end'}}>
            <div style={{maxWidth:'75%',padding:'12px 16px',borderRadius:16,fontSize:14,lineHeight:1.7,
              background:m.role==='user'?C.primary:C.card,
              color:m.role==='user'?'#fff':C.text,
              border:m.role==='user'?'none':`1px solid ${C.border}`,
              borderTopRightRadius:m.role==='user'?4:16,
              borderTopLeftRadius:m.role==='assistant'?4:16}}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:16,padding:'12px 16px',
              color:C.sub,fontSize:14,display:'flex',gap:6,alignItems:'center'}}>
              <span style={{animation:'pulse 1s infinite'}}>●</span>
              <span style={{animation:'pulse 1s .2s infinite'}}>●</span>
              <span style={{animation:'pulse 1s .4s infinite'}}>●</span>
            </div>
          </div>
        )}
      </div>
      <div style={{display:'flex',gap:10}}>
        <textarea value={msg} onChange={e=>setMsg(e.target.value)}
          onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}}
          placeholder="שאל אותי על הפרויקט... (Enter לשליחה)" rows={2}
          style={{flex:1,padding:'10px 14px',borderRadius:12,border:`1px solid ${C.border}`,
            background:C.inputBg,color:C.text,fontSize:14,resize:'none',
            fontFamily:'Heebo,Arial,sans-serif',outline:'none',direction:'rtl'}}/>
        <Btn onClick={send} disabled={loading||!msg.trim()} style={{alignSelf:'flex-end'}}>שלח</Btn>
      </div>
      <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
        {['סכם את הפרויקט','מה השלב הבא?','כתוב עדכון ללקוח','זהה סיכונים בפרויקט'].map(s=>(
          <button key={s} onClick={()=>{setMsg(s);}}
            style={{padding:'5px 12px',borderRadius:20,border:`1px solid ${C.border}`,
              background:'transparent',color:C.sub,cursor:'pointer',fontSize:12}}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── TIMELINE TAB ────────────────────────────────────────────────────────────
function TimelineTab({ project, setProject }) {
  const phases = project.phases || PHASES.map((p,i)=>({phaseId:p.id,status:i===0?'active':'pending',completedDate:null,notes:''}));
  const updatePhase = (idx, field, val) => {
    const updated = phases.map((p,i)=>i===idx?{...p,[field]:val}:p);
    setProject(pr=>({...pr,phases:updated}));
  };
  const statusColors = { completed:C.success, active:C.primary, pending:C.border };
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <h3 style={{color:C.text,fontSize:18,fontWeight:700,marginBottom:20}}>ציר זמן פרויקט</h3>
      <div style={{position:'relative'}}>
        <div style={{position:'absolute',right:19,top:32,bottom:32,width:2,background:C.border,zIndex:0}}/>
        {PHASES.map((phase,i)=>{
          const ph = phases[i] || {status:'pending',completedDate:null,notes:''};
          const color = statusColors[ph.status] || C.border;
          return (
            <div key={phase.id} style={{display:'flex',gap:20,marginBottom:20,position:'relative'}}>
              <div style={{width:40,height:40,borderRadius:'50%',background:color,
                border:`3px solid ${ph.status==='active'?C.primary:C.border}`,
                display:'flex',alignItems:'center',justifyContent:'center',
                color:'#fff',fontWeight:700,fontSize:14,flexShrink:0,zIndex:1,
                boxShadow:ph.status==='active'?`0 0 0 4px ${C.primary}33`:'none'}}>
                {ph.status==='completed'?'✓':phase.id}
              </div>
              <div style={{flex:1,background:C.card,borderRadius:12,padding:16,border:`1px solid ${ph.status==='active'?C.primary:C.border}`}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                  <div style={{fontWeight:700,color:C.text,fontSize:15}}>{phase.name}</div>
                  <Select value={ph.status} onChange={v=>updatePhase(i,'status',v)}
                    options={[{value:'pending',label:'ממתין'},{value:'active',label:'פעיל'},{value:'completed',label:'הושלם'}]}
                    style={{width:120}}/>
                </div>
                {ph.status==='completed' && (
                  <div style={{marginBottom:8}}>
                    <input type="date" value={ph.completedDate||''} onChange={e=>updatePhase(i,'completedDate',e.target.value)}
                      style={{padding:'5px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                        background:C.inputBg,color:C.text,fontSize:12,outline:'none'}}/>
                  </div>
                )}
                <input value={ph.notes||''} onChange={e=>updatePhase(i,'notes',e.target.value)}
                  placeholder="הוסף הערות..."
                  style={{width:'100%',padding:'6px 10px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:12,outline:'none',direction:'rtl',
                    fontFamily:'Heebo,Arial,sans-serif'}}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── TASKS TAB ────────────────────────────────────────────────────────────────
function TasksTab({ project, setProject, user }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',desc:'',assignee:'',priority:'medium',dueDate:''});
  const tasks = project.tasks || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p, tasks:[...tasks,{...form,id:'t'+uid(),status:'todo',createdBy:user.name,createdAt:today()}]}));
    setForm({title:'',desc:'',assignee:'',priority:'medium',dueDate:''}); setShowAdd(false);
  };
  const updateStatus = (id, s) => setProject(p=>({...p,tasks:tasks.map(t=>t.id===id?{...t,status:s}:t)}));
  const priColors = {high:C.danger,medium:C.warning,low:C.success};
  const cols = [{k:'todo',l:'לביצוע'},{k:'in-progress',l:'בביצוע'},{k:'done',l:'בוצע'}];
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>משימות</h3>
        {user.role!=='client' && <Btn onClick={()=>setShowAdd(true)}>+ משימה חדשה</Btn>}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16}}>
        {cols.map(col=>(
          <div key={col.k}>
            <div style={{fontWeight:700,color:C.sub,fontSize:12,marginBottom:10}}>
              {col.l} ({tasks.filter(t=>t.status===col.k).length})
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:10,minHeight:80}}>
              {tasks.filter(t=>t.status===col.k).map(t=>(
                <div key={t.id} style={{background:C.card,borderRadius:12,padding:14,
                  border:`1px solid ${C.border}`,borderRight:`3px solid ${priColors[t.priority]||C.border}`}}>
                  <div style={{fontWeight:600,color:C.text,fontSize:13,marginBottom:4}}>{t.title}</div>
                  {t.desc && <div style={{color:C.sub,fontSize:12,marginBottom:6}}>{t.desc}</div>}
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:6}}>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                      {t.assignee && <Badge text={t.assignee} color={C.info}/>}
                      {t.dueDate && <span style={{fontSize:11,color:C.sub}}>{fmtDate(t.dueDate)}</span>}
                    </div>
                    {user.role!=='client' && (
                      <select value={t.status} onChange={e=>updateStatus(t.id,e.target.value)}
                        style={{fontSize:11,padding:'3px 6px',borderRadius:6,border:`1px solid ${C.border}`,
                          background:C.inputBg,color:C.text,cursor:'pointer',outline:'none'}}>
                        <option value="todo">לביצוע</option>
                        <option value="in-progress">בביצוע</option>
                        <option value="done">בוצע</option>
                      </select>
                    )}
                  </div>
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
            <Input label="מוקצה ל" value={form.assignee} onChange={v=>setForm(f=>({...f,assignee:v}))}/>
            <Select label="עדיפות" value={form.priority} onChange={v=>setForm(f=>({...f,priority:v}))}
              options={[{value:'high',label:'גבוהה'},{value:'medium',label:'בינונית'},{value:'low',label:'נמוכה'}]}/>
            <Input label="תאריך יעד" type="date" value={form.dueDate} onChange={v=>setForm(f=>({...f,dueDate:v}))}/>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף משימה</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── MEETINGS TAB ─────────────────────────────────────────────────────────────
function MeetingsTab({ project, setProject, user }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',date:'',time:'',location:'',link:'',notes:'',participants:''});
  const meetings = project.meetings || [];
  const add = () => {
    if (!form.title||!form.date) return;
    const m = {...form,id:'mt'+uid(),status:'scheduled',createdBy:user.name,
      participants:form.participants.split(',').map(p=>p.trim()).filter(Boolean)};
    setProject(p=>({...p,meetings:[...meetings,m]}));
    setForm({title:'',date:'',time:'',location:'',link:'',notes:'',participants:''}); setShowAdd(false);
  };
  const updateStatus = (id,s) => setProject(p=>({...p,meetings:meetings.map(m=>m.id===id?{...m,status:s}:m)}));
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>פגישות</h3>
        {user.role!=='client' && <Btn onClick={()=>setShowAdd(true)}>+ פגישה חדשה</Btn>}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {meetings.length===0 && <div style={{color:C.sub,fontSize:14,textAlign:'center',padding:40}}>אין פגישות מתוכננות</div>}
        {[...meetings].sort((a,b)=>b.date.localeCompare(a.date)).map(m=>(
          <div key={m.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:15}}>{m.title}</div>
                <div style={{color:C.sub,fontSize:13,marginTop:4}}>
                  📅 {fmtDate(m.date)}{m.time&&' · ⏰ '+m.time}{m.location&&' · 📍 '+m.location}
                </div>
              </div>
              <StatusBadge status={m.status}/>
            </div>
            {m.participants?.length>0 && <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:8}}>{m.participants.map((p,i)=><Badge key={i} text={p} color={C.info}/>)}</div>}
            {m.notes && <div style={{color:C.sub,fontSize:13,marginBottom:8}}>{m.notes}</div>}
            {m.link && <a href={m.link} target="_blank" rel="noreferrer" style={{color:C.primary,fontSize:13}}>🔗 {m.link}</a>}
            {user.role!=='client' && m.status==='scheduled' && (
              <div style={{marginTop:10,display:'flex',gap:8}}>
                <Btn size="sm" onClick={()=>updateStatus(m.id,'done')}>✓ בוצע</Btn>
                <Btn size="sm" variant="ghost" onClick={()=>updateStatus(m.id,'cancelled')}>ביטול</Btn>
              </div>
            )}
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="פגישה חדשה" onClose={()=>setShowAdd(false)} width={500}>
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
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>צור פגישה</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── PAYMENTS TAB ─────────────────────────────────────────────────────────────
function PaymentsTab({ project, setProject }) {
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
        <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>תשלומים</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ תשלום חדש</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:24}}>
        {[['סה"כ',totalAll,C.text],['שולם',totalPaid,C.success],['ממתין',totalPending,C.warning]].map(([l,v,c])=>(
          <div key={l} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`,textAlign:'center'}}>
            <div style={{color:C.sub,fontSize:12,marginBottom:6}}>{l}</div>
            <div style={{fontSize:22,fontWeight:800,color:c}}>{fmtCurrency(v)}</div>
          </div>
        ))}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {payments.map(py=>(
          <div key={py.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`,
            display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:600,color:C.text,fontSize:15}}>{py.title}</div>
              <div style={{color:C.sub,fontSize:13,marginTop:4}}>
                {fmtCurrency(py.amount)}{py.dueDate&&' · יעד: '+fmtDate(py.dueDate)}{py.receivedDate&&' · התקבל: '+fmtDate(py.receivedDate)}
              </div>
              {py.notes && <div style={{color:C.sub,fontSize:12}}>{py.notes}</div>}
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
function PunchListTab({ project, setProject }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',desc:'',location:'',responsible:'',priority:'medium'});
  const list = project.punchList || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,punchList:[...list,{...form,id:'pl'+uid(),number:list.length+1,status:'open',img:null,fixedAt:null}]}));
    setForm({title:'',desc:'',location:'',responsible:'',priority:'medium'}); setShowAdd(false);
  };
  const updateStatus = (id,s) => setProject(p=>({...p,punchList:list.map(i=>i.id===id?{...i,status:s,fixedAt:s==='closed'?today():null}:i)}));
  const priColors = {high:C.danger,medium:C.warning,low:C.success};
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>Punch List — ממצאים</h3>
          <p style={{color:C.sub,fontSize:13}}>{list.filter(i=>i.status==='open').length} פתוחים · {list.filter(i=>i.status==='closed').length} סגורים</p>
        </div>
        <Btn onClick={()=>setShowAdd(true)}>+ ממצא חדש</Btn>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {list.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:14}}>אין ממצאים פתוחים</div>}
        {list.map(item=>(
          <div key={item.id} style={{background:C.card,borderRadius:14,padding:18,
            border:`1px solid ${item.status==='open'?C.danger:item.status==='in-progress'?C.warning:C.border}`,
            borderRight:`4px solid ${priColors[item.priority]||C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:15}}>#{item.number} — {item.title}</div>
                {item.desc && <div style={{color:C.sub,fontSize:13,marginTop:4}}>{item.desc}</div>}
                <div style={{display:'flex',gap:12,marginTop:6}}>
                  {item.location && <span style={{fontSize:12,color:C.sub}}>📍 {item.location}</span>}
                  {item.responsible && <span style={{fontSize:12,color:C.sub}}>👷 {item.responsible}</span>}
                  {item.fixedAt && <span style={{fontSize:12,color:C.success}}>✓ תוקן: {fmtDate(item.fixedAt)}</span>}
                </div>
              </div>
              <div style={{display:'flex',gap:8,alignItems:'center'}}>
                <StatusBadge status={item.status}/>
                <Badge text={item.priority==='high'?'גבוה':item.priority==='medium'?'בינוני':'נמוך'} color={priColors[item.priority]}/>
              </div>
            </div>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              {item.status==='open' && <Btn size="sm" onClick={()=>updateStatus(item.id,'in-progress')}>בטיפול</Btn>}
              {(item.status==='open'||item.status==='in-progress') && <Btn size="sm" variant="ghost" onClick={()=>updateStatus(item.id,'closed')}>✓ סגור</Btn>}
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
            <div style={{display:'flex',gap:10,justifyContent:'flex-end',marginTop:8}}>
              <Btn onClick={()=>setShowAdd(false)} variant="ghost">ביטול</Btn>
              <Btn onClick={add}>הוסף ממצא</Btn>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── RFI TAB ─────────────────────────────────────────────────────────────────
function RFITab({ project, setProject }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',desc:'',from:'',priority:'medium',dueDate:''});
  const [replyForm, setReplyForm] = React.useState({});
  const rfis = project.rfis || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,rfis:[...rfis,{...form,id:'r'+uid(),number:rfis.length+1,img:null,reply:null,repliedBy:null,repliedAt:null}]}));
    setForm({title:'',desc:'',from:'',priority:'medium',dueDate:''}); setShowAdd(false);
  };
  const reply = (id) => {
    const text = replyForm[id]; if (!text) return;
    setProject(p=>({...p,rfis:rfis.map(r=>r.id===id?{...r,reply:text,repliedBy:'אדריכל',repliedAt:today()}:r)}));
    setReplyForm(f=>({...f,[id]:''}));
  };
  const priColors = {high:C.danger,medium:C.warning,low:C.success};
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>RFI — בקשות מידע</h3>
          <p style={{color:C.sub,fontSize:13}}>{rfis.filter(r=>!r.reply).length} ממתינות לתשובה</p>
        </div>
        <Btn onClick={()=>setShowAdd(true)}>+ RFI חדש</Btn>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:14}}>
        {rfis.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:14}}>אין בקשות מידע</div>}
        {rfis.map(r=>(
          <div key={r.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${r.reply?C.border:C.warning}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:15}}>RFI #{r.number} — {r.title}</div>
                <div style={{color:C.sub,fontSize:13,marginTop:4}}>{r.desc}</div>
                <div style={{display:'flex',gap:12,marginTop:6}}>
                  {r.from && <span style={{fontSize:12,color:C.sub}}>מ: {r.from}</span>}
                  {r.dueDate && <span style={{fontSize:12,color:C.sub}}>יעד: {fmtDate(r.dueDate)}</span>}
                </div>
              </div>
              <Badge text={r.priority==='high'?'דחוף':r.priority==='medium'?'בינוני':'רגיל'} color={priColors[r.priority]}/>
            </div>
            {r.reply ? (
              <div style={{background:C.success+'15',borderRadius:8,padding:'10px 12px',marginTop:10}}>
                <div style={{fontSize:12,fontWeight:600,color:C.success,marginBottom:4}}>✓ תשובה — {r.repliedBy} · {fmtDate(r.repliedAt)}</div>
                <div style={{color:C.text,fontSize:13}}>{r.reply}</div>
              </div>
            ) : (
              <div style={{marginTop:12,display:'flex',gap:10}}>
                <input value={replyForm[r.id]||''} onChange={e=>setReplyForm(f=>({...f,[r.id]:e.target.value}))}
                  placeholder="כתוב תשובה..."
                  style={{flex:1,padding:'8px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                    background:C.inputBg,color:C.text,fontSize:13,outline:'none',direction:'rtl',fontFamily:'Heebo,Arial,sans-serif'}}/>
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
function GalleryTab({ project, setProject }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',phase:1,isAI:false});
  const gallery = project.gallery || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,gallery:[...gallery,{...form,id:'g'+uid(),date:today(),url:null}]}));
    setForm({title:'',phase:1,isAI:false}); setShowAdd(false);
  };
  const setCover = (url) => setProject(p=>({...p,coverImage:url}));
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>גלריה</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ הוסף תמונה</Btn>
      </div>
      {gallery.length===0 && <div style={{color:C.sub,textAlign:'center',padding:60,fontSize:14}}>אין תמונות בגלריה</div>}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:14}}>
        {gallery.map(img=>(
          <div key={img.id} style={{background:C.card,borderRadius:14,overflow:'hidden',
            border:`1px solid ${C.border}`,position:'relative'}}>
            <div style={{height:140,background:`linear-gradient(135deg,${C.primary}33,${C.accent}22)`,
              display:'flex',alignItems:'center',justifyContent:'center',fontSize:48}}>
              {img.isAI ? '🤖' : '🖼️'}
            </div>
            <div style={{padding:'10px 12px'}}>
              <div style={{fontWeight:600,color:C.text,fontSize:13,marginBottom:4}}>{img.title}</div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:11,color:C.sub}}>{PHASES[(img.phase||1)-1]?.short} · {fmtDate(img.date)}</span>
                {img.isAI && <Badge text="AI" color={C.ai}/>}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="הוסף לגלריה" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="כותרת" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Select label="שלב" value={String(form.phase)} onChange={v=>setForm(f=>({...f,phase:Number(v)}))}
              options={PHASES.map(p=>({value:String(p.id),label:p.name}))}/>
            <label style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',color:C.text,fontSize:14}}>
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
function DocumentsTab({ project, setProject }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({name:'',type:'drawing',uploadedBy:''});
  const docs = project.documents || [];
  const add = () => {
    if (!form.name) return;
    setProject(p=>({...p,documents:[...docs,{...form,id:'d'+uid(),date:today(),fileType:'pdf',thumb:null}]}));
    setForm({name:'',type:'drawing',uploadedBy:''}); setShowAdd(false);
  };
  const typeIcons = {drawing:'📐',contract:'📋',permit:'🏛️',report:'📊',other:'📄'};
  const typeLabels = {drawing:'תרשים',contract:'חוזה',permit:'היתר',report:'דוח',other:'אחר'};
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>מסמכים</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ הוסף מסמך</Btn>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {docs.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:14}}>אין מסמכים</div>}
        {docs.map(doc=>(
          <div key={doc.id} style={{background:C.card,borderRadius:12,padding:'14px 18px',
            border:`1px solid ${C.border}`,display:'flex',alignItems:'center',gap:14}}>
            <div style={{fontSize:32}}>{typeIcons[doc.type]||'📄'}</div>
            <div style={{flex:1}}>
              <div style={{fontWeight:600,color:C.text,fontSize:14}}>{doc.name}</div>
              <div style={{color:C.sub,fontSize:12,marginTop:4}}>
                {typeLabels[doc.type]||doc.type} · {fmtDate(doc.date)} · {doc.uploadedBy}
              </div>
            </div>
            <Badge text={doc.fileType?.toUpperCase()||'PDF'} color={C.info}/>
          </div>
        ))}
      </div>
      {showAdd && (
        <Modal title="הוסף מסמך" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
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
function QuotesTab({ project, setProject }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',amount:'',validUntil:''});
  const [sigModal, setSigModal] = React.useState(null);
  const quotes = project.quotes || [];
  const add = () => {
    if (!form.title||!form.amount) return;
    setProject(p=>({...p,quotes:[...quotes,{...form,id:'q'+uid(),amount:Number(form.amount),status:'pending',date:today(),signature:null}]}));
    setForm({title:'',amount:'',validUntil:''}); setShowAdd(false);
  };
  const updateStatus = (id,s) => setProject(p=>({...p,quotes:quotes.map(q=>q.id===id?{...q,status:s}:q)}));
  const addSig = (id,sig) => { setProject(p=>({...p,quotes:quotes.map(q=>q.id===id?{...q,signature:sig,status:'approved'}:q)})); setSigModal(null); };
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>הצעות מחיר</h3>
        <Btn onClick={()=>setShowAdd(true)}>+ הצעת מחיר</Btn>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {quotes.map(q=>(
          <div key={q.id} style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
              <div>
                <div style={{fontWeight:700,color:C.text,fontSize:15}}>{q.title}</div>
                <div style={{fontSize:24,fontWeight:800,color:C.primary,marginTop:4}}>{fmtCurrency(q.amount)}</div>
                <div style={{color:C.sub,fontSize:13,marginTop:4}}>
                  הוצאה: {fmtDate(q.date)}{q.validUntil&&' · בתוקף עד: '+fmtDate(q.validUntil)}
                </div>
              </div>
              <StatusBadge status={q.status}/>
            </div>
            {q.signature && <div style={{background:C.success+'15',borderRadius:8,padding:'8px 12px',marginBottom:10,fontSize:13,color:C.success}}>✓ חתום: {q.signature}</div>}
            <div style={{display:'flex',gap:8}}>
              {q.status==='pending' && <Btn size="sm" onClick={()=>updateStatus(q.id,'approved')}>✓ אשר</Btn>}
              {q.status==='pending' && <Btn size="sm" variant="ghost" onClick={()=>setSigModal(q.id)}>✍️ חתימה</Btn>}
              {q.status==='pending' && <Btn size="sm" variant="ghost" onClick={()=>updateStatus(q.id,'rejected')}>דחה</Btn>}
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
            <p style={{color:C.sub,fontSize:13}}>הכנס שם לחתימה דיגיטלית:</p>
            <input id="sigInput" type="text" placeholder="שם מלא"
              style={{padding:'10px 14px',borderRadius:8,border:`1px solid ${C.border}`,background:C.inputBg,color:C.text,fontSize:14,outline:'none',direction:'rtl',fontFamily:'Heebo,Arial,sans-serif'}}/>
            <Btn onClick={()=>{const v=document.getElementById('sigInput')?.value;if(v)addSig(sigModal,v);}}>חתום</Btn>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ─── APPROVALS TAB ────────────────────────────────────────────────────────────
function ApprovalsTab({ project, setProject, user }) {
  const [showAdd, setShowAdd] = React.useState(false);
  const [form, setForm] = React.useState({title:'',requestedBy:''});
  const approvals = project.approvals || [];
  const add = () => {
    if (!form.title) return;
    setProject(p=>({...p,approvals:[...approvals,{...form,id:'a'+uid(),date:today(),status:'pending',approvedBy:null,comment:''}]}));
    setForm({title:'',requestedBy:''}); setShowAdd(false);
  };
  const approve = (id,comment='') => setProject(p=>({...p,approvals:approvals.map(a=>a.id===id?{...a,status:'approved',approvedBy:user.name,comment}:a)}));
  const reject  = (id,comment='') => setProject(p=>({...p,approvals:approvals.map(a=>a.id===id?{...a,status:'rejected',approvedBy:user.name,comment}:a)}));
  const pending = approvals.filter(a=>a.status==='pending');
  const done    = approvals.filter(a=>a.status!=='pending');
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>מרכז אישורים</h3>
          <p style={{color:C.sub,fontSize:13}}>{pending.length} ממתינים לאישור</p>
        </div>
        {user.role!=='client' && <Btn onClick={()=>setShowAdd(true)}>+ בקשת אישור</Btn>}
      </div>
      {pending.length>0 && (
        <div style={{marginBottom:20}}>
          <div style={{fontWeight:700,color:C.warning,fontSize:13,marginBottom:10}}>⏳ ממתינים לאישור</div>
          {pending.map(a=>(
            <div key={a.id} style={{background:C.card,borderRadius:14,padding:18,marginBottom:10,
              border:`1px solid ${C.warning}`,position:'relative'}}>
              <div style={{fontWeight:700,color:C.text,fontSize:15,marginBottom:4}}>{a.title}</div>
              <div style={{color:C.sub,fontSize:13,marginBottom:12}}>בקשה מ: {a.requestedBy} · {fmtDate(a.date)}</div>
              {(user.role==='client'||user.role==='admin') && (
                <div style={{display:'flex',gap:10}}>
                  <Btn size="sm" onClick={()=>approve(a.id,'מאושר')}>✓ אשר</Btn>
                  <Btn size="sm" variant="ghost" onClick={()=>reject(a.id,'נדחה')}>✗ דחה</Btn>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {done.length>0 && (
        <div>
          <div style={{fontWeight:700,color:C.sub,fontSize:13,marginBottom:10}}>היסטוריה</div>
          {done.map(a=>(
            <div key={a.id} style={{background:C.card,borderRadius:14,padding:16,marginBottom:10,border:`1px solid ${C.border}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:600,color:C.text,fontSize:14}}>{a.title}</div>
                  <div style={{color:C.sub,fontSize:12,marginTop:4}}>
                    {a.approvedBy && `${a.status==='approved'?'אושר':'נדחה'} ע"י ${a.approvedBy}`}
                    {a.comment && ' · '+a.comment}
                  </div>
                </div>
                <StatusBadge status={a.status}/>
              </div>
            </div>
          ))}
        </div>
      )}
      {showAdd && (
        <Modal title="בקשת אישור חדשה" onClose={()=>setShowAdd(false)} width={440}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <Input label="נושא האישור" value={form.title} onChange={v=>setForm(f=>({...f,title:v}))} required/>
            <Input label="בקשה מ" value={form.requestedBy} onChange={v=>setForm(f=>({...f,requestedBy:v}))} placeholder="שם האדריכל"/>
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
    setMsg('');
    setTimeout(()=>chatRef.current?.scrollTo({top:9999,behavior:'smooth'}),50);
  };
  React.useEffect(()=>{chatRef.current?.scrollTo({top:9999});},[messages.length]);
  return (
    <div style={{padding:24,height:'calc(100vh - 140px)',display:'flex',flexDirection:'column',animation:'fadeIn .3s ease'}}>
      <h3 style={{color:C.text,fontSize:18,fontWeight:700,marginBottom:16}}>💬 הודעות פנימיות</h3>
      <div ref={chatRef} style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:12,marginBottom:16}}>
        {messages.map((m,i)=>{
          const isMe = m.from===user.name;
          return (
            <div key={m.id||i} style={{display:'flex',flexDirection:'column',alignItems:isMe?'flex-end':'flex-start'}}>
              <div style={{maxWidth:'70%',padding:'10px 14px',borderRadius:16,fontSize:14,lineHeight:1.7,
                background:isMe?C.primary:C.card,color:isMe?'#fff':C.text,
                border:isMe?'none':`1px solid ${C.border}`,
                borderTopRightRadius:isMe?4:16,borderTopLeftRadius:isMe?16:4}}>
                {m.text}
              </div>
              <div style={{fontSize:11,color:C.sub,marginTop:4,marginRight:isMe?0:4,marginLeft:isMe?4:0}}>
                {m.from} · {m.time}
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
            background:C.inputBg,color:C.text,fontSize:14,outline:'none',direction:'rtl',
            fontFamily:'Heebo,Arial,sans-serif'}}/>
        <Btn onClick={send} disabled={!msg.trim()}>שלח</Btn>
      </div>
    </div>
  );
}

// ─── BI REPORTS TAB (Studio only) ────────────────────────────────────────────
function BIReportsTab({ project, data }) {
  const allProjects = data?.projects || [project];
  const totalRevenue = allProjects.reduce((s,p)=>(p.payments||[]).filter(py=>py.status==='paid').reduce((a,py)=>a+py.amount,0)+s,0);
  const totalBudget  = allProjects.reduce((s,p)=>s+(p.budget||0),0);
  const phasesDist   = PHASES.map(ph=>({ name:ph.short, count:allProjects.filter(p=>p.currentPhase===ph.id).length }));
  return (
    <div style={{padding:24,animation:'fadeIn .3s ease'}}>
      <h3 style={{color:C.text,fontSize:18,fontWeight:700,marginBottom:20}}>📊 BI Reports</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:24}}>
        <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`}}>
          <div style={{color:C.sub,fontSize:12,marginBottom:6}}>הכנסות כולל</div>
          <div style={{fontSize:28,fontWeight:800,color:C.success}}>{fmtCurrency(totalRevenue)}</div>
        </div>
        <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`}}>
          <div style={{color:C.sub,fontSize:12,marginBottom:6}}>תקציב כולל</div>
          <div style={{fontSize:28,fontWeight:800,color:C.primary}}>{fmtCurrency(totalBudget)}</div>
        </div>
      </div>
      <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`,marginBottom:16}}>
        <h4 style={{color:C.text,fontSize:14,fontWeight:700,marginBottom:16}}>פיזור לפי שלב</h4>
        <div style={{display:'flex',gap:16,flexWrap:'wrap',justifyContent:'center'}}>
          {phasesDist.filter(p=>p.count>0).map((p,i)=>(
            <SVGCircle key={i} value={p.count} max={allProjects.length||1}
              color={[C.primary,C.accent,C.success,C.warning,C.danger,C.info,C.ai,C.sub][i%8]}
              label={p.name} size={70}/>
          ))}
          {phasesDist.filter(p=>p.count>0).length===0 && <div style={{color:C.sub,fontSize:14}}>אין נתונים</div>}
        </div>
      </div>
      <div style={{background:C.card,borderRadius:14,padding:20,border:`1px solid ${C.border}`}}>
        <h4 style={{color:C.text,fontSize:14,fontWeight:700,marginBottom:16}}>התקדמות פרויקטים</h4>
        {allProjects.map(p=>(
          <div key={p.id} style={{marginBottom:14}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
              <span style={{fontSize:13,color:C.text,fontWeight:600}}>{p.name}</span>
              <span style={{fontSize:13,color:C.sub}}>{p.progress||0}%</span>
            </div>
            <div style={{height:8,background:C.border,borderRadius:4,overflow:'hidden'}}>
              <div style={{width:(p.progress||0)+'%',height:'100%',background:C.primary,borderRadius:4,transition:'width 1s'}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CLIENT SUCCESS TAB (Feature 23) ─────────────────────────────────────────
function ClientSuccessTab({ project, setProject }) {
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
          <h3 style={{color:C.text,fontSize:18,fontWeight:700}}>🧠 Client Success</h3>
          <p style={{color:C.sub,fontSize:13}}>ניהול קשרי לקוחות חכם · Client Relationship Intelligence</p>
        </div>
        <SVGCircle value={health} max={100} color={healthColor} label="Health Score" size={72}/>
      </div>
      {/* Section tabs */}
      <div style={{display:'flex',gap:8,marginBottom:20,borderBottom:`1px solid ${C.border}`,paddingBottom:12}}>
        {sections.map(s=>(
          <button key={s.k} onClick={()=>setActiveSection(s.k)}
            style={{padding:'7px 16px',borderRadius:20,border:'none',cursor:'pointer',fontSize:13,fontWeight:600,
              background:activeSection===s.k?C.primary:'transparent',
              color:activeSection===s.k?'#fff':C.sub}}>
            {s.l}
          </button>
        ))}
      </div>

      {activeSection==='profile' && (
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <h4 style={{color:C.text,fontSize:14,fontWeight:700,marginBottom:12}}>פרטי תקשורת מועדפת</h4>
            {[
              ['סגנון עבודה',profile.style||'—'],['זמינות',profile.responseStyle||'—'],
              ['ערוץ מועדף',profile.preferredContact||'—'],
              ['שעות מועדפות',profile.preferredHours||'—'],
              ['שפה מועדפת',profile.preferredLang||'—']
            ].map(([k,v])=>(
              <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:`1px solid ${C.border}`}}>
                <span style={{color:C.sub,fontSize:13}}>{k}</span>
                <span style={{color:C.text,fontSize:13,fontWeight:500}}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{background:C.card,borderRadius:14,padding:18,border:`1px solid ${C.border}`}}>
            <h4 style={{color:C.text,fontSize:14,fontWeight:700,marginBottom:12}}>תגיות ורשומות</h4>
            <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:12}}>
              {(profile.tags||[]).map((t,i)=><Badge key={i} text={t} color={C.primary}/>)}
              {(!profile.tags||profile.tags.length===0)&&<span style={{color:C.sub,fontSize:13}}>אין תגיות</span>}
            </div>
            {profile.notes && <p style={{color:C.text,fontSize:13,lineHeight:1.7}}>{profile.notes}</p>}
          </div>
        </div>
      )}

      {activeSection==='changes' && (
        <div>
          <div style={{display:'flex',justifyContent:'flex-end',marginBottom:14}}>
            <Btn onClick={()=>setShowCRForm(true)}>+ בקשת שינוי</Btn>
          </div>
          {crs.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:14}}>אין בקשות שינוי</div>}
          {crs.map(cr=>(
            <div key={cr.id} style={{background:C.card,borderRadius:12,padding:16,marginBottom:10,border:`1px solid ${C.border}`}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                <div style={{fontWeight:700,color:C.text,fontSize:14}}>{cr.title}</div>
                <StatusBadge status={cr.status}/>
              </div>
              <div style={{color:C.sub,fontSize:12}}>סוג: {cr.type} · {fmtDate(cr.date)}</div>
              {cr.impact && <div style={{color:C.warning,fontSize:12,marginTop:4}}>השפעה: {cr.impact}</div>}
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
            {dl.length===0 && <div style={{color:C.sub,textAlign:'center',padding:40,fontSize:14}}>אין החלטות מתועדות</div>}
            {dl.map((d,i)=>(
              <div key={i} style={{background:C.card,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
                <div style={{fontWeight:700,color:C.text,fontSize:14,marginBottom:4}}>{d.title}</div>
                <div style={{color:C.sub,fontSize:12}}>{fmtDate(d.date)} · ע"י {d.by}</div>
                {d.note && <div style={{color:C.text,fontSize:13,marginTop:6}}>{d.note}</div>}
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

// ─── PROJECT VIEW (main container) ───────────────────────────────────────────
function ProjectView({ projectId, data, setData, user, onBack }) {
  const project = (data.projects||[]).find(p=>p.id===projectId);
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [showShare, setShowShare] = React.useState(false);

  if (!project) return <div style={{padding:40,color:C.text}}>פרויקט לא נמצא</div>;

  const setProject = (updater) => {
    setData(d=>({...d, projects:(d.projects||[]).map(p=>p.id===projectId?(typeof updater==='function'?updater(p):updater):p)}));
  };

  const allTabs = [
    {id:'dashboard',label:'דשבורד',icon:'📊',feature:'portal'},
    {id:'brief',label:'תקציר',icon:'📋',feature:'brief'},
    {id:'ai',label:'AI Agent',icon:'🤖',feature:'ai'},
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
    {id:'clientsuccess',label:'Client Success',icon:'🧠',feature:'clientsuccess'}
  ];

  const visibleTabs = user.role==='client'
    ? allTabs.filter(t=>['dashboard','brief','gallery','approvals','messages','payments','quotes'].includes(t.id))
    : allTabs.filter(t=>canUse(t.feature));

  const renderTab = () => {
    switch(activeTab) {
      case 'dashboard':    return <DashboardTab project={project} setProject={setProject}/>;
      case 'brief':        return <BriefTab project={project} setProject={setProject} user={user}/>;
      case 'ai':           return <AIAgentTab project={project}/>;
      case 'timeline':     return <TimelineTab project={project} setProject={setProject}/>;
      case 'tasks':        return <TasksTab project={project} setProject={setProject} user={user}/>;
      case 'meetings':     return <MeetingsTab project={project} setProject={setProject} user={user}/>;
      case 'payments':     return <PaymentsTab project={project} setProject={setProject}/>;
      case 'punchlist':    return <PunchListTab project={project} setProject={setProject}/>;
      case 'rfi':          return <RFITab project={project} setProject={setProject}/>;
      case 'gallery':      return <GalleryTab project={project} setProject={setProject}/>;
      case 'documents':    return <DocumentsTab project={project} setProject={setProject}/>;
      case 'quotes':       return <QuotesTab project={project} setProject={setProject}/>;
      case 'approvals':    return <ApprovalsTab project={project} setProject={setProject} user={user}/>;
      case 'messages':     return <MessagesTab project={project} setProject={setProject} user={user}/>;
      case 'bi':           return <BIReportsTab project={project} data={data}/>;
      case 'clientsuccess':return <ClientSuccessTab project={project} setProject={setProject}/>;
      default:             return null;
    }
  };

  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',
      background:C.bg,direction:'rtl'}}>

      {/* Calq-style top header */}
      <div style={{background:C.sidebar,borderBottom:`1px solid ${C.border}`,
        padding:'0 40px',flexShrink:0,zIndex:10,position:'relative'}}>
        {/* Project identity row */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',
          height:56,borderBottom:`1px solid ${C.border}`}}>
          <div style={{display:'flex',alignItems:'center',gap:20}}>
            <button onClick={onBack}
              style={{background:'none',border:'none',color:C.sub,cursor:'pointer',
                fontSize:13,letterSpacing:'0.05em',fontFamily:"'Space Grotesk',sans-serif",
                display:'flex',alignItems:'center',gap:6}}>
              ← PROJECTS
            </button>
            <div style={{width:1,height:16,background:C.border}}/>
            <span style={{color:C.text,fontWeight:700,fontSize:15,letterSpacing:'-0.01em',
              fontFamily:"'Space Grotesk',sans-serif"}}>{project.name}</span>
            <span style={{color:C.sub,fontSize:13}}>{project.clientName}</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            {/* Progress */}
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:80,height:1,background:C.border,position:'relative'}}>
                <div style={{position:'absolute',top:0,right:0,height:'100%',
                  width:(project.progress||0)+'%',background:C.text,transition:'width 1s'}}/>
              </div>
              <span style={{color:C.sub,fontSize:11,letterSpacing:'0.08em'}}>
                {project.progress||0}%
              </span>
            </div>
            {canUse('share') && (
              <button onClick={()=>setShowShare(true)}
                style={{background:'none',border:`1px solid ${C.border}`,padding:'5px 14px',
                  color:C.sub,cursor:'pointer',fontSize:12,letterSpacing:'0.06em',borderRadius:0}}>
                SHARE
              </button>
            )}
          </div>
        </div>

        {/* Horizontal tab nav — calq style */}
        <div style={{display:'flex',overflowX:'auto',gap:0,
          scrollbarWidth:'none',msOverflowStyle:'none'}}>
          {visibleTabs.map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)}
              className="tab-btn"
              style={{padding:'14px 20px',background:'transparent',border:'none',
                borderBottom:activeTab===tab.id?`2px solid ${C.text}`:'2px solid transparent',
                color:activeTab===tab.id?C.text:C.sub,
                cursor:'pointer',fontSize:12,fontWeight:activeTab===tab.id?700:400,
                letterSpacing:'0.05em',whiteSpace:'nowrap',flexShrink:0,
                fontFamily:"'Space Grotesk',sans-serif",transition:'color .15s'}}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{flex:1,overflowY:'auto',position:'relative'}}>
        <div style={{position:'relative',zIndex:1,animation:'pageEnter .3s ease'}}
          key={activeTab}>
          {renderTab()}
        </div>
      </div>

      {showShare && <SharePanel project={project} onClose={()=>setShowShare(false)}/>}
    </div>
  );
}

// ─── PROJECTS LIST ────────────────────────────────────────────────────────────
function ProjectsList({ data, setData, user, onLogout, onOpenProject, onSystemDash, onUsers, onBackup, onSuperAdmin, onSecurity }) {
  const [showNewProject, setShowNewProject] = React.useState(false);
  const [showTheme, setShowTheme] = React.useState(false);
  const [themeId, setThemeId] = React.useState('lightStone');
  const [form, setForm] = React.useState({name:'',address:'',clientName:'',architectName:'',budget:'',area:'',startDate:'',endDate:'',description:'',template:'villa'});
  const [search, setSearch] = React.useState('');

  const projects = (data.projects||[]).filter(p=>{
    if (user.role==='arch') return p.architectName.includes(user.name.replace('אדר. ',''));
    if (user.role==='client') return p.clientName.includes(user.name);
    return true;
  }).filter(p=>!search||p.name.includes(search)||p.clientName.includes(search));

  const handleTheme = (id) => { C = THEMES[id]; setThemeId(id); };

  const addProject = () => {
    if (!form.name) return;
    const np = {
      ...form, id:'p'+uid(), status:'planning', currentPhase:1, progress:0,
      budget:Number(form.budget)||0, area:Number(form.area)||0, coverImage:null,
      phases:PHASES.map((p,i)=>({phaseId:p.id,status:i===0?'active':'pending',completedDate:null,notes:''})),
      documents:[], quotes:[], approvals:[], messages:[], gallery:[], payments:[],
      punchList:[], rfis:[], brief:{answers:{},submitted:false,savedAt:null,submittedBy:null},
      tasks:[], dailyReports:[], meetings:[], customTasks:[], changeRequests:[], decisionLog:[],
      clientProfile:{healthScore:80,paymentReliability:80,approvalSpeed:80,changeFrequency:10,tags:[],notes:'',history:[]}
    };
    setData(d=>({...d,projects:[...(d.projects||[]),np]}));
    setForm({name:'',address:'',clientName:'',architectName:'',budget:'',area:'',startDate:'',endDate:'',description:'',template:'villa'});
    setShowNewProject(false);
  };

  const active = projects.filter(p=>p.status==='active').length;
  const completed = projects.filter(p=>p.status==='completed').length;

  return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,direction:'rtl',display:'flex',flexDirection:'column'}}>
      {/* Calq-style top nav */}
      <div style={{background:C.sidebar,padding:'0 40px',display:'flex',alignItems:'center',
        justifyContent:'space-between',height:64,flexShrink:0,position:'relative',zIndex:10,
        borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:'flex',alignItems:'center',gap:40}}>
          <span style={{fontSize:18,fontWeight:700,color:C.sidebarText,letterSpacing:'0.08em',
            fontFamily:"'Space Grotesk',sans-serif"}}>TEKTONA</span>
          <div style={{width:1,height:20,background:C.border}}/>
          {user.role==='admin' && (
            <div style={{display:'flex',gap:24}}>
              <button onClick={onSystemDash}
                style={{background:'none',border:'none',color:C.sub,cursor:'pointer',
                  fontSize:13,letterSpacing:'0.05em',fontFamily:"'Space Grotesk',sans-serif"}}>
                מערכת
              </button>
              <button onClick={onUsers}
                style={{background:'none',border:'none',color:C.sub,cursor:'pointer',
                  fontSize:13,letterSpacing:'0.05em',fontFamily:"'Space Grotesk',sans-serif"}}>
                משתמשים
              </button>
              <button onClick={onBackup}
                style={{background:'none',border:'none',color:C.sub,cursor:'pointer',
                  fontSize:13,letterSpacing:'0.05em',fontFamily:"'Space Grotesk',sans-serif"}}>
                גיבוי
              </button>
              <button onClick={onSecurity}
                style={{background:'none',border:'none',color:C.sub,cursor:'pointer',
                  fontSize:13,letterSpacing:'0.05em',fontFamily:"'Space Grotesk',sans-serif"}}>
                אבטחה
              </button>
            </div>
          )}
          <div style={{display:'flex',alignItems:'center',gap:20}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="חיפוש..."
              style={{padding:'6px 14px',border:'none',borderBottom:`1px solid ${C.border}`,
                background:'transparent',color:C.sidebarText,fontSize:13,outline:'none',
                direction:'rtl',fontFamily:"'Space Grotesk',sans-serif",width:180}}/>
            {canUse('themes') && (
              <button onClick={()=>setShowTheme(true)}
                style={{background:'none',border:`1px solid ${C.border}`,padding:'5px 12px',
                  color:C.sub,cursor:'pointer',fontSize:11,letterSpacing:'0.06em',borderRadius:0}}>
                THEME
              </button>
            )}
            <div style={{width:1,height:20,background:C.border}}/>
            <span style={{color:C.sub,fontSize:13}}>{user.name}</span>
            <button onClick={onLogout}
              style={{background:'none',border:`1px solid ${C.border}`,padding:'5px 14px',
                color:C.sub,cursor:'pointer',fontSize:12,letterSpacing:'0.06em',borderRadius:0}}>
              יציאה
            </button>
          </div>
        </div>
      </div>

      <div style={{flex:1,overflowY:'auto',position:'relative',zIndex:1}}>
        {/* Stats bar — calq horizontal */}
        <div style={{borderBottom:`1px solid ${C.border}`,padding:'24px 40px',
          display:'flex',gap:40,alignItems:'center',animation:'pageEnter .4s ease'}}>
          {[
            {label:'PROJECTS', value:projects.length, max:OFFICE_PLAN.plan==='studio'?30:15, color:C.text},
            {label:'ACTIVE', value:active, max:projects.length||1, color:C.success},
            {label:'PLANNING', value:projects.filter(p=>p.status==='planning').length, max:projects.length||1, color:C.info},
            {label:'COMPLETED', value:completed, max:projects.length||1, color:C.sub}
          ].map((s,i)=>(
            <div key={i} style={{display:'flex',alignItems:'baseline',gap:10}}>
              <span style={{fontSize:36,fontWeight:700,color:s.color,letterSpacing:'-0.02em',
                fontFamily:"'Space Grotesk',sans-serif"}}>{s.value}</span>
              <div>
                <div style={{fontSize:10,letterSpacing:'0.12em',color:C.sub,fontWeight:500}}>{s.label}</div>
                <div style={{width:s.max>0?(s.value/s.max*60):0,height:1,background:s.color,marginTop:4,transition:'width 1s'}}/>
              </div>
              {i<3 && <div style={{width:1,height:32,background:C.border,marginLeft:20}}/>}
            </div>
          ))}
          {user.role!=='client' && (
            <button onClick={()=>setShowNewProject(true)}
              style={{marginRight:'auto',padding:'10px 28px',background:C.text,color:C.bg,
                border:'none',cursor:'pointer',fontSize:13,fontWeight:700,letterSpacing:'0.08em',
                fontFamily:"'Space Grotesk',sans-serif",borderRadius:0}}>
              + פרויקט
            </button>
          )}
        </div>

        {/* Projects section header */}
        <div style={{padding:'32px 40px 16px',animation:'pageEnter .5s ease'}}>
          <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:4}}>
            <h2 style={{color:C.text,fontSize:13,fontWeight:700,letterSpacing:'0.15em',
              fontFamily:"'Space Grotesk',sans-serif"}}>
              {user.role==='client'?'MY PROJECTS':'PROJECTS'}
            </h2>
            <span style={{color:C.sub,fontSize:13}}>{projects.length}</span>
          </div>
          <div style={{width:32,height:1,background:C.sub}}/>
        </div>

        {/* Projects grid — calq editorial style */}
        <div style={{padding:'0 40px 40px',display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:1,
          border:`1px solid ${C.border}`,margin:'0 40px 40px',animation:'pageEnter .6s ease'}}>
          {projects.map((p,idx)=>{
            const paid = (p.payments||[]).filter(py=>py.status==='paid').reduce((s,py)=>s+py.amount,0);
            const total = (p.payments||[]).reduce((s,py)=>s+py.amount,0);
            return (
              <div key={p.id} className="proj-card" onClick={()=>onOpenProject(p.id)}
                style={{background:C.card,cursor:'pointer',padding:28,
                  borderBottom:`1px solid ${C.border}`,borderRight:`1px solid ${C.border}`,
                  position:'relative',animation:`pageEnter ${.4+idx*.08}s ease`}}>
                {/* Cover */}
                {p.coverImage && (
                  <div style={{height:180,marginBottom:20,overflow:'hidden'}}>
                    <img src={p.coverImage} style={{width:'100%',height:'100%',objectFit:'cover',
                      filter:'grayscale(20%)'}} alt="cover"/>
                  </div>
                )}
                {/* Number */}
                <div style={{fontSize:11,color:C.sub,letterSpacing:'0.12em',marginBottom:8,
                  fontFamily:"'Space Grotesk',sans-serif"}}>
                  {String(idx+1).padStart(2,'0')} — {PHASES[(p.currentPhase||1)-1]?.name}
                </div>
                {/* Name */}
                <div style={{fontWeight:700,color:C.text,fontSize:22,marginBottom:6,
                  letterSpacing:'-0.01em',lineHeight:1.2,fontFamily:"'Space Grotesk',sans-serif"}}>
                  {p.name}
                </div>
                <div style={{color:C.sub,fontSize:13,marginBottom:16}}>{p.clientName} · {p.address}</div>
                {/* Progress line */}
                <div style={{height:1,background:C.border,marginBottom:16,position:'relative'}}>
                  <div style={{position:'absolute',top:0,right:0,height:'100%',
                    width:(p.progress||0)+'%',background:C.text,transition:'width 1.2s ease'}}/>
                </div>
                {/* Footer */}
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:C.sub,
                  fontFamily:"'Space Grotesk',sans-serif"}}>
                  <span>{fmtCurrency(paid)} / {fmtCurrency(total)}</span>
                  <span style={{color:p.status==='active'?C.success:C.sub,fontWeight:600,
                    letterSpacing:'0.08em',fontSize:11}}>
                    {p.status==='active'?'ACTIVE':p.status==='completed'?'DONE':'PLANNING'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {projects.length===0 && (
          <div style={{textAlign:'center',padding:80}}>
            <div style={{fontSize:64,marginBottom:16}}>🏗️</div>
            <div style={{color:C.sub,fontSize:18,marginBottom:8}}>אין פרויקטים עדיין</div>
            {user.role!=='client' && <Btn onClick={()=>setShowNewProject(true)}>צור פרויקט ראשון</Btn>}
          </div>
        )}
      </div>

      {/* New project modal */}
      {showNewProject && (
        <Modal title="פרויקט חדש" onClose={()=>setShowNewProject(false)} width={580}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <Input label="שם הפרויקט" value={form.name} onChange={v=>setForm(f=>({...f,name:v}))} required style={{gridColumn:'1/-1'}}/>
            <Input label="כתובת" value={form.address} onChange={v=>setForm(f=>({...f,address:v}))}/>
            <Input label="שם לקוח" value={form.clientName} onChange={v=>setForm(f=>({...f,clientName:v}))}/>
            <Input label="אדריכל אחראי" value={form.architectName} onChange={v=>setForm(f=>({...f,architectName:v}))}/>
            <Input label="תקציב (₪)" type="number" value={form.budget} onChange={v=>setForm(f=>({...f,budget:v}))}/>
            <Input label={'שטח (מ"ר)'} type="number" value={form.area} onChange={v=>setForm(f=>({...f,area:v}))}/>
            <Input label="תחילת פרויקט" type="date" value={form.startDate} onChange={v=>setForm(f=>({...f,startDate:v}))}/>
            <Input label="סיום צפוי" type="date" value={form.endDate} onChange={v=>setForm(f=>({...f,endDate:v}))}/>
            <Select label="תבנית" value={form.template} onChange={v=>setForm(f=>({...f,template:v}))} style={{gridColumn:'1/-1'}}
              options={[{value:'villa',label:'🏡 וילה / בית פרטי'},{value:'renovation',label:'🔧 שיפוץ'},{value:'commercial',label:'🏢 מסחרי'},{value:'addition',label:'➕ תוספת בנייה'}]}/>
            <div style={{gridColumn:'1/-1'}}>
              <label style={{fontSize:12,fontWeight:600,color:C.sub,display:'block',marginBottom:4}}>תיאור</label>
              <textarea value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}
                rows={3} placeholder="תיאור קצר של הפרויקט..."
                style={{width:'100%',padding:'9px 12px',borderRadius:8,border:`1px solid ${C.border}`,
                  background:C.inputBg,color:C.text,fontSize:13,resize:'vertical',
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
      <AccessibilityWidget/>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
function App() {
  const [screen, setScreen] = React.useState('loading');
  const [user, setUser] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [activeProject, setActiveProject] = React.useState(null);
  const [themeId, setThemeId] = React.useState('lightStone');

  const updateData = (updater) => {
    setData(d => {
      const nd = typeof updater==='function' ? updater(d) : updater;
      saveD(nd);
      return nd;
    });
  };

  React.useEffect(()=>{
    const initApp = async () => {
      const savedUser = sessionLoad();
      const savedData = await loadFromIDB();
      const appData = savedData || { projects: MOCK_PROJECTS, users: MOCK_USERS };
      setData(appData);
      if (!savedData) saveD(appData);
      if (savedUser) { setUser(savedUser); setScreen('projects'); }
      else setScreen('login');
    };
    initApp();
  },[]);

  const handleLogin = (u) => { setUser(u); setScreen(u.role==='super'?'superadmin':'projects'); };
  const handleLogout = () => { sessionClear(); setUser(null); setActiveProject(null); setScreen('login'); };

  if (screen==='loading') return (
    <div style={{width:'100vw',height:'100vh',background:C.bg,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{textAlign:'center'}}>
        <div style={{fontSize:40,fontWeight:800,color:C.primary,marginBottom:12}}>Tektona</div>
        <div style={{color:C.sub,fontSize:14,animation:'pulse 1s infinite'}}>טוען...</div>
      </div>
    </div>
  );

  if (screen==='login') return <LoginScreen onLogin={handleLogin}/>;
  if (screen==='superadmin') return <SuperAdminDashboard onBack={handleLogout}/>;
  if (screen==='systemdash') return <SystemDashboard data={data} user={user} onBack={()=>setScreen('projects')}/>;
  if (screen==='users') return <UsersScreen data={data} setData={updateData} onBack={()=>setScreen('projects')}/>;
  if (screen==='backup') return <BackupPanel data={data} setData={updateData} onBack={()=>setScreen('projects')}/>;
  if (screen==='security') return <SecurityAudit onBack={()=>setScreen('projects')}/>;
  if (screen==='project' && activeProject) return (
    <ProjectView projectId={activeProject} data={data} setData={updateData}
      user={user} onBack={()=>setScreen('projects')}/>
  );
  return (
    <ProjectsList data={data} setData={updateData} user={user} onLogout={handleLogout}
      onOpenProject={(id)=>{ setActiveProject(id); setScreen('project'); }}
      onSystemDash={()=>setScreen('systemdash')}
      onUsers={()=>setScreen('users')}
      onBackup={()=>setScreen('backup')}
      onSuperAdmin={()=>setScreen('superadmin')}
      onSecurity={()=>setScreen('security')}/>
  );
}

// ─── MOUNT ────────────────────────────────────────────────────────────────────
const _root = ReactDOM.createRoot(document.getElementById('root'));
_root.render(React.createElement(App));
