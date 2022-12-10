import { getDatabase, ref,  onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const l_div = document.getElementById('r-leads');

var cont = '';

const db = getDatabase();
const lref = ref(db, "reservations/");

onValue(lref,(leads) => {
    cont = '';
    console.log(leads.val());
    var temp;
    leads.forEach((element) => {
        temp = `
        <div class="" style="display: flex; flex-direction:row; vertical-align: text-bottom; margin-bottom: 15px;">
        <h2 style="margin-right: 50px; font-size: 20px; vertical-align: text-bottom;">${element.val().r_name}</h2>
        <h2 style="margin-right: 50px; font-size: 20px; vertical-align: text-bottom;">${element.val().r_phone}</h2>
        <h2 style="margin-right: 50px; font-size: 20px; vertical-align: text-bottom;">${element.val().r_day}</h2>
        <h2 style="margin-right: 50px; font-size: 20px; vertical-align: text-bottom;">${element.val().r_time}</h2>
        <h2 style="margin-right: 50px; font-size: 20px; vertical-align: text-bottom;">${element.val().r_ppl}</h2>
    </div>
        `;

        cont += temp;
    });

    l_div.innerHTML = cont;
})