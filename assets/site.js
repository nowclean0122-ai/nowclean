const T=document.querySelector('.top');document.querySelector('.burger')?.addEventListener('click',()=>T.classList.toggle('open'));addEventListener('scroll',()=>T.classList.toggle('scrolled',scrollY>10),{passive:true});
// 첫 화면 자동 슬라이드
(()=>{const s=[...document.querySelectorAll('.hero .sl')],d=[...document.querySelectorAll('.dots b')];if(s.length<2)return;let i=0,t;const hh=document.querySelector('.hero .hh'),hp=document.querySelector('.hero .hp');const go=n=>{s[i].classList.remove('on');d[i]?.classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');d[i]?.classList.add('on');if(hh&&s[i].dataset.h){hh.style.opacity=0;hp.style.opacity=0;setTimeout(()=>{hh.innerHTML=s[i].dataset.h;hp.textContent=s[i].dataset.p;hh.style.opacity=1;hp.style.opacity=1},350)}};const run=()=>{clearInterval(t);t=setInterval(()=>go(i+1),5500)};d.forEach((b,k)=>b.onclick=()=>{go(k);run()});document.querySelector('.hero .arr.p')?.addEventListener('click',()=>{go(i-1);run()});document.querySelector('.hero .arr.n')?.addEventListener('click',()=>{go(i+1);run()});run()})();
(()=>{const st=[...document.querySelectorAll('.steps div')];if(!st.length)return;let k=0;setInterval(()=>{st.forEach(x=>x.classList.remove('act'));st[k%st.length].classList.add('act');k++},1800)})();
const MD=document.getElementById('md');const openM=h=>{MD.querySelector('.mc').innerHTML=h;MD.classList.add('on')};MD?.addEventListener('click',e=>{if(e.target===MD||e.target.classList.contains('mx'))MD.classList.remove('on')});
document.querySelectorAll('[data-modal]').forEach(el=>el.addEventListener('click',()=>{const t=document.getElementById(el.dataset.modal);if(t)openM(t.innerHTML)}));
window.copyNum=b=>{navigator.clipboard.writeText('010-3674-5156');b.textContent='복사됐어요'};const mobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);if(!mobile){document.querySelectorAll('a[href^="tel:"],a[href^="sms:"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openM('<div class="num"><h3>상담 전화·문자</h3><b>010-3674-5156</b><p>휴대폰으로 전화나 문자 주세요. 작업 중이라 못 받으면 문자 남겨주시면 순서대로 연락드려요.</p><button class="btn n" onclick="copyNum(this)">번호 복사</button> <a class="btn l" href="contact.html">문의 남기기</a></div>')}))}
// 스크롤하면 나타나기 + 숫자 올라가기
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in-view');const n=e.target.querySelector('[data-n]');if(n&&!n.done){n.done=1;const to=+n.dataset.n,dec=n.dataset.n.includes('.');let k=0;const st=setInterval(()=>{k++;n.textContent=dec?(to*k/40).toFixed(1):Math.round(to*k/40);if(k>=40)clearInterval(st)},25)}io.unobserve(e.target)}),{threshold:.15});document.querySelectorAll('.rv').forEach(x=>io.observe(x));
// 전후 비교 슬라이더
document.querySelectorAll('.ba').forEach(ba=>{const af=ba.querySelector('.af'),bar=ba.querySelector('.bar');setInterval(()=>{const t=Date.now()/1700;const p=50+40*Math.sin(t);af.style.clipPath=`inset(0 0 0 ${p}%)`;bar.style.left=p+'%'},33)});
document.querySelectorAll('.ba-list button').forEach(b=>b.addEventListener('click',()=>{const ba=document.querySelector('.ba');ba.querySelector('.bf').src=b.dataset.b;ba.querySelector('.af').src=b.dataset.a;document.querySelectorAll('.ba-list button').forEach(x=>x.classList.remove('on'));b.classList.add('on')}));
(()=>{const a=[...document.querySelectorAll('.about .ap')];if(a.length<2)return;let i=0;setInterval(()=>{a[i].classList.remove('on');i=(i+1)%a.length;a[i].classList.add('on')},4200)})();
document.addEventListener('click',ev=>{const im=ev.target.closest('.mg img');if(!im)return;const b=document.createElement('div');b.className='lb';b.style.display='flex';b.innerHTML='<img src="'+im.src+'">';b.onclick=()=>b.remove();document.body.appendChild(b)});
// 흐르는 띠: 내용 두 번 이어 붙이기
document.querySelectorAll('.marq .track').forEach(t=>{t.innerHTML+=t.innerHTML});
// 후기 자동 넘김
document.querySelectorAll('.rcar').forEach(c=>{const tr=c.querySelector('.rt'),n=tr.children.length,nav=c.nextElementSibling;let i=0;const per=()=>innerWidth<560?1:innerWidth<900?2:3;const pages=()=>Math.max(1,n-per()+1);const go=k=>{i=(k+pages())%pages();tr.style.transform=`translateX(-${i*100/per()}%)`;if(nav)nav.innerHTML=[...Array(pages())].map((_,j)=>`<b class="${j===i?'on':''}"></b>`).join('');nav&&[...nav.children].forEach((b,j)=>b.onclick=()=>go(j))};go(0);setInterval(()=>go(i+1),4500);addEventListener('resize',()=>go(0))});
document.querySelectorAll('.gal a').forEach(a=>a.addEventListener('click',ev=>{ev.preventDefault();const b=document.createElement('div');b.className='lb';b.style.display='flex';b.innerHTML='<img src="'+a.getAttribute('href')+'">';b.onclick=()=>b.remove();document.body.appendChild(b)}));
document.querySelectorAll('.filter button').forEach(bt=>bt.addEventListener('click',()=>{document.querySelectorAll('.filter button').forEach(x=>x.classList.remove('on'));bt.classList.add('on');const k=bt.dataset.k;document.querySelectorAll('[data-kind]').forEach(c=>c.style.display=(k==='all'||c.dataset.kind===k)?'':'none')}));
// 문의 → 손님 메일 앱에 받는 사람·제목·내용이 채워진 채로 열림(외부 전송 도구 없음). 메일 앱이 없으면 Gmail·문자·복사로
const f=document.querySelector('form.q');if(f){f.addEventListener('submit',ev=>{ev.preventDefault();const o=Object.fromEntries(new FormData(f).entries());
 const TO='nowclean0122@gmail.com',sub=`[나우클린 홈페이지 문의] ${o.type} · ${o.name}`;
 const txt=`[홈페이지 문의]
이름: ${o.name}
연락처: ${o.phone}
청소 종류: ${o.type}
희망 날짜: ${o.date||'-'}
지역·단지: ${o.area||'-'}
평형: ${o.size||'-'}
내용: ${o.msg||'-'}`;
 const mail='mailto:'+TO+'?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent(txt);
 const gm='https://mail.google.com/mail/?view=cm&fs=1&to='+TO+'&su='+encodeURIComponent(sub)+'&body='+encodeURIComponent(txt);
 const sms='sms:01036745156'+(/iPhone|iPad/.test(navigator.userAgent)?'&':'?')+'body='+encodeURIComponent(txt);
 const ok=document.querySelector('.ok');ok.innerHTML='<b>메일 앱이 열렸어요 — [보내기]만 누르면 접수돼요.</b><br>안 열렸거나 메일 앱이 없으면 아래 중 편한 걸로 보내 주세요.'+
  '<div class="okb"><a class="btn o" href="'+mail+'">메일 앱으로 보내기</a><a class="btn o" target="_blank" rel="noopener" href="'+gm+'">Gmail로 보내기</a><a class="btn o" href="'+sms+'">문자로 보내기</a><button type="button" class="btn o cp">내용 복사</button></div>';
 ok.style.display='block';ok.querySelector('.cp').onclick=e=>{navigator.clipboard.writeText(TO+'
'+sub+'

'+txt).then(()=>e.target.textContent='복사됨 ✓')};
 location.href=mail})}