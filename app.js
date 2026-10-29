import {questions,start,followUps} from './questions.js';
const $=id=>document.getElementById(id);
const asked=new Set();
const welcome='Hi, I’m Miguel. I’m 15, and I help my mum at the market in Bicol. I like science, basketball and fixing bikes. What would you like to know?';
function message(role,text){
 const article=document.createElement('article');article.className='message '+role;
 const small=document.createElement('small');small.textContent=role==='user'?'You':'Miguel';
 const p=document.createElement('p');p.textContent=text;article.append(small,p);$('messages').append(article);return article;
}
function choices(ids){$('prompts').replaceChildren(...ids.map(id=>{
 const button=document.createElement('button');button.textContent=questions[id].question;
 button.addEventListener('click',()=>ask(id));return button;
}));}
function ask(id){
 if(asked.has(id)||!questions[id])return;
 asked.add(id);const item=questions[id];message('user',item.question);
 const reply=message('assistant',item.answer);const next=followUps(id,asked);choices(next);
 if(!next.length){const end=document.createElement('p');end.className='interview-end';end.textContent='Thank you for listening. You’ve explored all my questions. You can restart the conversation whenever you like.';$('prompts').append(end);}
 reply.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
function reset(){asked.clear();$('messages').replaceChildren();message('assistant',welcome);choices(start);}
$('reset').addEventListener('click',reset);reset();
