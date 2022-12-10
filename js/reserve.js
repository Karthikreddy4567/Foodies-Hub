import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const name = document.getElementById('r-name');
const phone = document.getElementById('r-phone');
const day = document.getElementById('r-day');
const time = document.getElementById('r-time');
const ppl = document.getElementById('r-ppl');
const add_btn = document.getElementById('form-submit');

var rname,rphone,rday,rtime,rppl,rid,rRef;

const db = getDatabase();
rid = new Date();
rRef = ref(db,"reservations/"+rid);

//Math.floor(100000 + Math.random() * 900000);

add_btn.addEventListener('click',(e) => {
    e.preventDefault();

         
        
        rname = name.value;
        rphone = phone.value;
        rday = day.value;
        rtime = time.value;
        rppl = ppl.value;

        console.log(rname,rphone,rday,rtime,rppl);

        
        update(rRef, {
            r_name : rname,
            r_phone: rphone,
            r_day: rday,
            r_time: rtime,
            r_ppl: rppl
        });


    })



    
