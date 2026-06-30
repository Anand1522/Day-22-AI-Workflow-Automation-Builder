/* ===========================
   AI Workflow Automation Builder
=========================== */

const template = document.getElementById("template");
const runBtn = document.getElementById("runBtn");

const progressBar = document.getElementById("progressBar");
const logs = document.getElementById("logs");
const output = document.getElementById("output");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

/* --------------------------
Workflow Templates
-------------------------- */

const workflows = {

"📧 Email → Summarize → Slack":{

trigger:"📧 Email Received",

ai:"🤖 Summarize",

action:"💬 Slack",

result:`✅ Workflow Completed

Email Summary

Customer wants a refund because the payment failed.

Slack Notification

Message sent successfully.

Confidence : 98%

Execution Time : 2.1 sec`

},

"📄 PDF → Extract Text → Google Docs":{

trigger:"📄 PDF Upload",

ai:"🤖 Extract Text",

action:"📑 Google Docs",

result:`✅ Workflow Completed

Invoice Number : INV-2026

Customer : John Smith

Amount : ₹24,500

Google Document Created Successfully.

Confidence : 99%

Execution Time : 2.8 sec`

},

"📄 Resume → Analyze → HR System":{

trigger:"📄 Resume Upload",

ai:"🤖 Analyze Resume",

action:"👨‍💼 HR System",

result:`✅ Workflow Completed

Candidate : Rahul Sharma

Skills

✔ Python

✔ SQL

✔ Machine Learning

Score : 91%

Recommendation

Interview Candidate`

},

"🖼 Image → Generate Caption → Email":{

trigger:"🖼 Image Upload",

ai:"🤖 Generate Caption",

action:"📧 Email",

result:`✅ Workflow Completed

Caption

"Beautiful sunset over the mountains."

Hashtags

#nature

#travel

#photography

Email Draft Ready.`

}

};

/* --------------------------
Update Workflow
-------------------------- */

function updateWorkflow(){

const flow = workflows[template.value];

step1.textContent = flow.trigger;
step2.textContent = flow.ai;
step3.textContent = flow.action;

}

updateWorkflow();

template.addEventListener("change",updateWorkflow);

/* --------------------------
Typing Effect
-------------------------- */

function typeWriter(text){

output.textContent="";

let i=0;

const typing=setInterval(()=>{

output.textContent+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},18);

}

/* --------------------------
Run Workflow
-------------------------- */

runBtn.addEventListener("click",()=>{

updateWorkflow();

progressBar.style.width="0%";

logs.textContent="";

output.textContent="";

step1.classList.remove("active");
step2.classList.remove("active");
step3.classList.remove("active");

const flow = workflows[template.value];

const messages=[

"✓ Trigger detected",

"🤖 AI engine started",

"🧠 Processing request",

"⚡ Executing action",

"✅ Workflow completed"

];

let progress=0;

let index=0;

const nodes=[step1,step2,step3];

const timer=setInterval(()=>{

progress+=20;

progressBar.style.width=progress+"%";

if(index<nodes.length){

nodes[index].classList.add("active");

}

if(index<messages.length){

logs.textContent+=messages[index]+"\n";

logs.scrollTop=logs.scrollHeight;

}

index++;

if(progress>=100){

clearInterval(timer);

setTimeout(()=>{

typeWriter(flow.result);

},500);

}

},700);

});