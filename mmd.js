let shahrha = document.querySelector("#selectcities");
let ostanha = document.querySelector("#ostanha");
let ostanMaghsad = document.querySelector("#ostanmaghsad");
let shahrMaghsad = document.querySelector("#shahrmaghsad");
let name1 = document.querySelector("#name1");
let phoneNumber = document.querySelector("#phoneNumber")
let email = document.querySelector("#email");
let truename = document.querySelector("#truename");
let truenumber = document.querySelector("#truenumber");
let truegmail = document.querySelector("#truegmail");
let Confirmation = document.querySelector("#Confirmation");
let Accuracy = document.querySelector("#Accuracy")


let golestan = [" گرگان"," بندرگز"," بندرترکمن"," گز"," مراوه تپه","آق قلا","علی آباد","گنبد","مینودشت","فاضل آباد","کردکو","گالیکش","گلوگاه","اینچه برون","آزادشهر","رامیان","کلاله","گمیشان"];
let tehran = ["تهران","ری","دماوند","فیروزکوه","اسلامشهر","پرند","ورامین","ملارد","رباط کریم","پاکدشت","شهریار","قرچک","بهارستان","پیشوا","قدس","شمیرانات"];
let gilan = [ "آستارا" , "آستانه اشرفیه", "املش" , "بندر انزلی" , "سیاهکل" , "ماسال" , "رضوانشهر" , "لاهیجان" ,  "رودبار" , "رودسر" , "شفت" , "صومعه سرا"  , "طوالش" , "فومن" , "لاهیجان" , "لنگرود"]
let mazandaran = ["ساری", "آمل", "بابل", "بابلسر", "بهشهر", "تنکابن", "جویبار", "چالوس", "رامسر", "قائم‌شهر", "نکا", "نور", "نوشهر", "فریدون‌کنار", "کلاردشت", "محمودآباد", "میاندورود", "گلوگاه", "عباس‌آباد"]


ostanha.addEventListener("change",function(){

    if(ostanha.value === ""){
        shahrha.innerHTML = ""
    }
    
    if(ostanha.value === "golestan"){
        shahrha.innerHTML = "";
        for(let i = 0 ; i<golestan.length ; i++){
        let shahrgolestan = document.createElement("option")
        shahrgolestan.innerHTML = golestan[i];
        shahrgolestan.value = golestan[i]
        shahrha.append(shahrgolestan)
        }
    }

  else if(ostanha.value === "mazandaran"){
    shahrha.innerHTML = ""
    for(let i = 0 ; i<mazandaran.length ; i++){
        let shahrmazanadaran = document.createElement("option");
        shahrmazanadaran.innerHTML = mazandaran[i];
        shahrmazanadaran.value = mazandaran[i];
        shahrha.append(shahrmazanadaran)

    }
  }

  else if(ostanha.value === "gilan"){
    shahrha.innerHTML = ""
    for(let i = 0 ; i<gilan.length ; i++){
        let shahrgilan = document.createElement("option")
        shahrgilan.innerHTML = gilan[i];
        shahrgilan.value = gilan[i];
        shahrha.append(shahrgilan)
    }
  }

else{
    shahrha.innerHTML = ""
    for(let i = 0 ; i<tehran.length ; i++){
        let shahrtehran = document.createElement("option")
        shahrtehran.innerHTML = tehran[i];
        shahrtehran.value = tehran[i];
        shahrha.append(shahrtehran)
    }
}
});




ostanMaghsad.addEventListener("change",function(){
    if(ostanMaghsad.value === "tehran"){
        shahrMaghsad.innerHTML = "";
        for(let i = 0 ; i<tehran.length ; i++){
            let newtehran = document.createElement("option")
            newtehran.innerHTML = tehran[i];
            newtehran.value = tehran[i]
            shahrMaghsad.append(newtehran)
        }
    }

    else if(ostanMaghsad.value === "mazandaran"){
        shahrMaghsad.innerHTML = "";
        for(let i = 0 ; i<mazandaran.length ; i++){
            let newmazandaran = document.createElement("option")
            newmazandaran.innerHTML = mazandaran[i];
            newmazandaran.value = mazandaran[i]
            shahrMaghsad.append(newmazandaran)
        }
    }

    else if(ostanMaghsad.value === "gilan"){
        shahrMaghsad.innerHTML = "";
        for(let i = 0 ; i<gilan.length ; i++){
            let newgilan = document.createElement("option")
            newgilan.innerHTML = gilan[i];
            newgilan.value = gilan[i];
            shahrMaghsad.append(newgilan);
        }
    }

    else if(ostanMaghsad.value === "golestan"){
        shahrMaghsad.innerHTML = "";
        for(let i = 0 ; i<golestan.length ; i++){
            let newgolestan = document.createElement("option")
            newgolestan.innerHTML = golestan[i];
            newgolestan.value = golestan[i];
            shahrMaghsad.append(newgolestan);
        }
    }
});

name1.addEventListener("keyup",function(){
    if(name1.value.trim() === ""){
        truename.classList.remove("green")
        truename.classList.remove("hidden")
    }
    else if (name1.value.trim().length<3) {
        truename.classList.remove("green")
        truename.classList.remove("hidden")
        truename.innerHTML = "نام شما باید بیشتر از 3 کاراکتر باشد"
    }
    else {
        truename.classList.remove("hidden")
        truename.classList.add("green")
        truename.innerHTML = "نام شما با موفقیت ثبت شد"
    }
})


phoneNumber.addEventListener("keyup",function(){
    let number = phoneNumber.value.trim();
    if(number === ""){
        truenumber.classList.remove("hidden");
        truenumber.classList.remove("green");
        truenumber.innerHTML = "پر کردن این فیلد الزامی است";
    }

    else if (number.length<11){
        truenumber.classList.remove("green");
        truenumber.classList.remove("hidden")
        truenumber.innerHTML = "همچین شماره تلفنی یافت نشد"
    }

    else{
        truenumber.classList.remove("hidden");
        truenumber.classList.add("green");
        truenumber.innerHTML = "َشماره تلفن شما با موفقیت ثبت شد";
    }
})


email.addEventListener("keyup",function(){
    let gmail = email.value.trim();
    if(gmail === ""){
        truegmail.classList.remove("hidden");
        truegmail.classList.remove("green")
        truegmail.innerHTML = "پر کردن این فیلد الزامی است";
    }
    else if (!email.value.includes("@gmail.com")){
        truegmail.classList.remove("hidden");
        truegmail.classList.remove("green");
        truegmail.innerHTML = "لطفا ایمیل خود را به درستی وارد کنید";
    }

    else{
        truegmail.classList.remove("hidden");
        truegmail.classList.add("green");
        truegmail.innerHTML = "ایمیل شما با موفقیت ثبت شد"
    }
});

Confirmation.addEventListener("click",function(){
    if(shahrMaghsad.value === ""){
    Accuracy.classList.remove("hidden");
    }

    else{
        Accuracy.classList.add("hidden");
    }
})
