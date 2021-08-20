/*Все блоки нужно искать в CALC*/

/*var today = new Date();
function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
today= formatDate(today)
var xhr = new XMLHttpRequest()

xhr.open(
  'GET',
  `https://nationalbank.kz/rss/get_rates.cfm?fdate=${today}`,
  true
)
xhr.send()

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    console.log('result', xhr.responseText.parseFromString(text,"text/xml"))
  } else {
    console.log('err', xhr.responseText)
  }
}*/

const startDate = document.querySelectorAll('input[type="date"]')[0];
const finishDate = document.querySelectorAll('input[type="date"]')[1];
startDate.min = formatDateMin(new Date());
startDate.value = formatDateMin(new Date());
finishDate.value = formatDateValue(new Date());



function formatDateMin(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = '20' + date.getYear() % 100;
  

  return  yy + '-' + mm + '-' + dd;
}
function formatDateValue(date) {

  var dd = date.getDate() + 1;
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = '20' + date.getYear() % 100;
  

  return  yy + '-' + mm + '-' + dd;
}

const country = ["Абхазия",
"Австралия",
"Австрия",
"Азербайджан",
"Албания",
"Алжиh",
"Ангола",
"Андорра",
"Антигуа и Барбуда",
"Аргентина",
"Армения",
"Афганистан",
"Багамские Острова",
"Бангладеш",
"Барбадос",
"Бахрейн",
"Белиз",
"Белоруссия",
"Бельгия",
"Бенин",
"Болгария",
"Боливия",
"Босния и Герцеговина",
"Ботсвана",
"Бразилия",
"Бруней",
"Буркина-Фасо",
"Бурунди",
"Бутан",
"Вануату",
"Ватикан ",
"Великобритания ",
"Венгрия ",
"Венесуэла ",
"Восточный Тимор ",
"Вьетнам ",
"Габон ",
"Гаити ",
"Гайана ",
"Гамбия ",
"Гана ",
"Гватемала ",
"Гвинея ",
"Гвинея-Бисау ",
"Германия ",
"Гондурас ",
"Государство ",
"Гренада ",
"Греция ",
"Грузия ",
"Дания ",
"Джибути ",
"Доминика ",
"Доминиканская Республика ",
"Конго ",
"Египет ",
"Замбия ",
"Зимбабве ",
"Израиль ",
"Индия ",
"Индонезия ",
"Иордания ",
"Ирак ",
"Иран ",
"Ирландия ",
"Исландия ",
"Испания ",
"Италия ",
"Йемен ",
"Кабо-Верде ",
"Казахстан ",
"Камбоджа ",
"Камерун ",
"Канада ",
"Катар ",
"Кения ",
"Кипр ",
"Киргизия ",
"Кирибати ",
"Китай ",
"КНДР ",
"Колумбия ",
"Коморские Острова ",
"Коста-Рика ",
"Кот-д'Ивуар ",
"Куба ",
"Кувейт ",
"Лаос ",
"Латвия ",
"Лесото ",
"Либерия ",
"Ливан ",
"Ливия ",
"Литва ",
"Лихтенштейн ",
"Люксембург ",
"Маврикий ",
"Мавритания ",
"Мадагаскар ",
"Малави ",
"Малайзия ",
"Мали ",
"Мальдивские Острова ",
"Мальта ",
"Марокко ",
"Маршалловы Острова ",
"Мексика ",
"Мозамбик ",
"Молдавия ",
"Монако ",
"Монголия ",
"Мьянма ",
"Намибия ",
"Науру ",
"Непал ",
"Нигер ",
"Нигерия ",
"Нидерланды ",
"Никарагуа ",
"Новая Зеландия ",
"Норвегия ",
"ОАЭ ",
"Оман ",
"Пакистан ",
"Палау ",
"Панама ",
"Папуа - Новая Гвинея ",
"Парагвай ",
"Перу ",
"Польша ",
"Португалия ",
"Республика Конго ",
"Республика Корея ",
"Россия ",
"Руанда ",
"Румыния ",
"Сальвадор ",
"Самоа ",
"Сан-Марино ",
"Сан-Томе и Принсипи ",
"Саудовская Аравия ",
"Северная Македония ",
"Сейшельские Острова ",
"Сенегал ",
"Сент-Винсент и Гренадины ",
"Сент-Китс и Невис ",
"Сент-Люсия ",
"Сербия ",
"Сингапур ",
"Сирия ",
"Словакия ",
"Словения ",
"Соломоновы Острова ",
"Сомали ",
"Судан ",
"Суринам ",
"США ",
"Сьерра-Леоне ",
"Таджикистан ",
"Таиланд ",
"Танзания ",
"Того ",
"Тонга ",
"Тринидад и Тобаго ",
"Тувалу ",
"Тунис ",
"Туркмения ",
"Турция ",
"Уганда ",
"Узбекистан ",
"Украина ",
"Уругвай ",
"Федеративные Штаты Микронезии",
"Фиджи ",
"Филиппины ",
"Финляндия ",
"Франция ",
"Хорватия ",
"ЦАР ",
"Чад ",
"Черногория ",
"Чехия ",
"Чили ",
"Швейцария ",
"Швеция ",
"Шри-Ланка ",
"Эквадор ",
"Экваториальная Гвинея ",
"Эритрея ",
"Эсватини ",
"Эстония ",
"Эфиопия ",
"ЮАР ",
"Южная ",
"Южный ",
"Ямайка ",
"Япония "]
const CALC = document.querySelector('#calcBlock');

var countryArr = document.querySelector('#country');
country.forEach(element => {
    var option = document.createElement('option');
    option.value = element;
    option.textContent = element;
    countryArr.append(option);
})

const countries = {
    //Европа
    Europe: [
        'Австрия',           'Бельгия',
        'Болгария',          'Великобритания',
        'Венгрия',           'Германия',
        'Греция',            'Дания',
        'Ирландия',          'Испания',
        'Италия',            'Кипр',
        'Латвия',            'Литва',
        'Люксембург',        'Мальта',
        'Нидерланды',        'Польша',
        'Португалия',        'Румыния',
        'Словакия',          'Словения',
        'Финляндия',         'Франция',
        'Хорватия',          'Чехия',
        'Швеция',            'Эстония'
    ],         
    //Тайланд
    Tailand: ["Таиланд"],
    //Америка, Страны Латинской Америки, Австралия, Канада, Япония, Китай.
    group3: [
           "Антигуа и Барбуда",
           "Аргентина",
           "Боливия",
           "Бразилия",
           "Венесуэла",
           "Гватемала",
           "Доминиканская Республика",
           "Колумбия",
           "Коста-Рика",
           "Куба",
           "Мексика",
           "Парагвай",
           "Перу",
           "Уругвай",
           "Чили",
           "Эквадор",
           "Австралия",
           "США",
           "Канада",
           "Япония", 
           "Китай"
    ]
}


const MultyTravel = document.querySelector('#MultiTravel');
const MultyTravelCheck = document.querySelector('#MultiTravelChecked');
const MultyTravelBlockTime = document.querySelector('#noMultyTravel');
const MultyTravelBlock = document.querySelector('#MultyTravelBlock');

const arrInput = CALC.querySelectorAll('input');

var arrCheckedSum = document.querySelectorAll('.priceCheckedJS');
var arrChecked2 = document.getElementsByName('price');

var sportType = document.querySelector('#typeSport');
var sportBonus = document.querySelector('#sportBonus');
var subprogram = document.querySelector('#subprogram');


//Основной объект на котором работает вся программа
var objMainData = {
    MultiTravel: false,   //Тариф Multy Travel
    Exception: undefined,  //Исключения (Если их нет то стоит undefined)  

    timeTravel: 0,

    price: 0
}


/*Work*/

arrInput.forEach(element => {
    element.addEventListener('change', CalcTravel)
});
document.querySelectorAll('select').forEach(element => {
    element.addEventListener('change', CalcTravel)
});

MultyTravelBlock.addEventListener('click', CalcTravel)


CalcTravel();
function CalcTravel() {
    if (!MultyTravelCheck.checked) {
        MultyTravelBlockTime.classList.remove('noVisible');
        MultyTravelBlock.classList.add('noVisible'); 
        objMainData.MultiTravel = false;
    } else {
        MultyTravelBlockTime.classList.add('noVisible');
        MultyTravelBlock.classList.remove('noVisible'); 
        objMainData.MultiTravel = true;
    }
    objMainData.Exception = undefined;
    arrCheckedSum.forEach(item => {
        item.style.display = 'block';
    })
    if (travelCountryExceptions(countryArr.value, countries.Europe)) {
        objMainData.Exception = 'Europe';
        arrCheckedSum[0].style.display = 'none'
        arrCheckedSum[1].style.display = 'none'   
        
        MultyTravelBlock.querySelectorAll('label')[6].style.display = 'block';
        MultyTravelBlock.querySelectorAll('label')[7].style.display = 'block';
        MultyTravelBlock.querySelectorAll('label')[8].style.display = 'block';
        MultyTravelBlock.querySelectorAll('label')[9].style.display = 'block';

        countryEurop();
    }
    if (objMainData.Exception === undefined) {
        if (travelCountryExceptions(countryArr.value, countries.Tailand)) {
            objMainData.Exception = 'Tailand';
            arrCheckedSum[0].style.display = 'none'
            arrCheckedSum[1].style.display = 'none'
            arrCheckedSum[2].style.display = 'none'
            arrCheckedSum[3].style.display = 'none'
            arrCheckedSum[4].style.display = 'none'
            arrCheckedSum[5].querySelector('input').checked = true;

            MultyTravelBlock.querySelectorAll('label')[6].style.display = 'none';
            MultyTravelBlock.querySelectorAll('label')[7].style.display = 'none';
            MultyTravelBlock.querySelectorAll('label')[8].style.display = 'none';
            MultyTravelBlock.querySelectorAll('label')[9].style.display = 'none';

            counrtyTailand()
        }
    }
    if (objMainData.Exception === undefined) {
        if (travelCountryExceptions(countryArr.value, countries.group3)) {
            objMainData.Exception = 'group3';

            MultyTravelBlock.querySelectorAll('label')[6].style.display = 'none';
            MultyTravelBlock.querySelectorAll('label')[7].style.display = 'none';
            MultyTravelBlock.querySelectorAll('label')[8].style.display = 'none';
            MultyTravelBlock.querySelectorAll('label')[9].style.display = 'none';
        }
    }
    if (objMainData.Exception === undefined) {
        

        MultyTravelBlock.querySelectorAll('label')[6].style.display = 'none';
        MultyTravelBlock.querySelectorAll('label')[7].style.display = 'none';
        MultyTravelBlock.querySelectorAll('label')[8].style.display = 'none';
        MultyTravelBlock.querySelectorAll('label')[9].style.display = 'none';
        countryEarch();
    }

    if (subprogram.querySelector('select').value == "Спорт") {
        sportType.classList.remove('noVisible');
        if (sportType.querySelector('select').value == "Комплексное страхование (независимо от категории спорта)") {
            sportBonus.classList.add('noVisible');
        } else {
            sportBonus.classList.remove('noVisible');
        }
    } else {
        sportType.classList.add('noVisible');
        sportBonus.classList.add('noVisible');
    }
    returnPrice();
}

/*
Проверит есть ли страна в списке исключений. Нужно передать: 
    1. Странна которую нужно проверить
    2. Масив исключений

Возвращает true/false
*/
function travelCountryExceptions(country, arrCountryExceptions) {       
    var a = false;                                                
    for (let key in arrCountryExceptions) {
      console.log(key)
        if (arrCountryExceptions[key] == country) {
            a = true;
            return a;
        }
    }        
    console.log(a)
    return a;
}

function countryEurop () {

    if (objMainData.MultiTravel) {
        var time = MultyTravelBlock.querySelectorAll('input');
        switch (true) {
            case time[0].checked:
                objMainData.price = 15;
                break;
            case time[1].checked:
                objMainData.price = 30;
                break;
            case time[2].checked:
                objMainData.price = 45;
                break;
            case time[3].checked:
                objMainData.price = 80;
                break;
            case time[4].checked:
                objMainData.price = 90;
                break;
            case time[5].checked:
                objMainData.price = 180;
                break;
            case time[6].checked:
                objMainData.price = 270;
                break;
            case time[7].checked:
                objMainData.price = 360;
                break;
            case time[8].checked:
                objMainData.price = 450;
                break;

        
            default:
                break;
        }
    } else {
      var date = document.querySelectorAll('input[type="date"]');
      var start = new Date(date[0].value);
      var finish= new Date(date[1].value);

      time = (finish.getTime() - start.getTime())/1000/60/60/24;
      if (time >= 1 && time <=14) {
          objMainData.price = time * 1;
      }

      if (time >= 15 && time <=60) {
        objMainData.price = time * 0.9;
      }

      if (time >= 61 && time <=180) {
        objMainData.price = time * 0.8
      }

      if (time >= 181 && time <=365) {
        objMainData.price = time * 0.7
      }
    }
    returnPrice();
}

function countryEarch () {

  if (objMainData.MultiTravel) {
      var time = MultyTravelBlock.querySelectorAll('input');
        if (arrCheckedSum[0].checked) {
          switch (true) {
            case time[0].checked:
                objMainData.price = 15;
                break;
            case time[1].checked:
                objMainData.price = 30;
                break;
            case time[2].checked:
                objMainData.price = 45;
                break;
            case time[3].checked:
                objMainData.price = 80;
                break;
            case time[4].checked:
                objMainData.price = 90;
                break;
  
        
            default:
                break;
        }
        } else {
          switch (true) {
            case time[0].checked:
                objMainData.price = 20;
                break;
            case time[1].checked:
                objMainData.price = 45;
                break;
            case time[2].checked:
                objMainData.price = 60;
                break;
            case time[3].checked:
                objMainData.price = 90;
                break;
            case time[4].checked:
                objMainData.price = 100;
                break;
  
        
            default:
                break;
          }
        }
      }
   else {
    var date = document.querySelectorAll('input[type="date"]');
    var start = new Date(date[0].value);
    var finish= new Date(date[1].value);

    time = (finish.getTime() - start.getTime())/1000/60/60/24;

    if (document.getElementsByName('price')[0].checked) {
      if (time >= 1 && time <=14) {
        objMainData.price = time * 0.75;
      }

      if (time >= 15 && time <=60) {
        objMainData.price = time * 0.75;
      }

      if (time >= 61 && time <=180) {
        objMainData.price = time * 0.65;
      }

      if (time >= 181 && time <=365) {
        objMainData.price = time * 0.6;
      }
    }
    else {
      if (time >= 1 && time <=14) {
        objMainData.price = time * 1;
        }
      
        if (time >= 15 && time <=60) {
          objMainData.price = time * 0.95;
        }
      
        if (time >= 61 && time <=180) {
          objMainData.price = time * 0.9;
        }
      
        if (time >= 181 && time <=365) {
          objMainData.price = time * 0.85;
        }
    }
  }
  returnPrice();
}

function counrtyTailand() {
      if (objMainData.MultiTravel) {
        var time = MultyTravelBlock.querySelectorAll('input');
        switch (true) {
            case time[0].checked:
                objMainData.price = 35;
                break;
            case time[1].checked:
                objMainData.price = 60;
                break;
            case time[2].checked:
                objMainData.price = 75;
                break;
            case time[3].checked:
                objMainData.price = 110;
                break;
            case time[4].checked:
                objMainData.price = 130;
                break;
        
        
            default:
                break;
        }
    } else {
      var date = document.querySelectorAll('input[type="date"]');
      var start = new Date(date[0].value);
      var finish= new Date(date[1].value);
    
      time = (finish.getTime() - start.getTime())/1000/60/60/24;
      if (time >= 1 && time <=14) {
          objMainData.price = time * 1.2;
      }
    
      if (time >= 15 && time <=60) {
        objMainData.price = time * 1.15;
      }
    
      if (time >= 61 && time <=180) {
        objMainData.price = time * 1.1;
      }
    
      if (time >= 181 && time <=365) {
        objMainData.price = time * 1.05;
      }
    }
}

function countryGroup() {
  if (objMainData.MultiTravel) {
    var time = MultyTravelBlock.querySelectorAll('input');
      if (document.getElementsByName('price')[0].checked) {
        switch (true) {
          case time[0].checked:
              objMainData.price = 10;
              break;
          case time[1].checked:
              objMainData.price = 20;
              break;
          case time[2].checked:
              objMainData.price = 35;
              break;
          case time[3].checked:
              objMainData.price = 75;
              break;
          case time[4].checked:
              objMainData.price = 80;
              break;

      
          default:
              break;
      }
    }
      if (document.getElementsByName('price')[2].checked) {
        switch (true) {
          case time[0].checked:
              objMainData.price = 15;
              break;
          case time[1].checked:
              objMainData.price = 30;
              break;
          case time[2].checked:
              objMainData.price = 45;
              break;
          case time[3].checked:
              objMainData.price = 80;
              break;
          case time[4].checked:
              objMainData.price = 90;
              break;

      
          default:
              break;
      }
      } else {
        switch (true) {
          case time[0].checked:
              objMainData.price = 20;
              break;
          case time[1].checked:
              objMainData.price = 45;
              break;
          case time[2].checked:
              objMainData.price = 60;
              break;
          case time[3].checked:
              objMainData.price = 90;
              break;
          case time[4].checked:
              objMainData.price = 100;
              break;

      
          default:
              break;
        }
      }
    }
  else {
  var date = document.querySelectorAll('input[type="date"]');
  var start = new Date(date[0].value);
  var finish= new Date(date[1].value);

  time = (finish.getTime() - start.getTime())/1000/60/60/24;

  if (document.getElementsByName('price')[0].checked) {
    if (time >= 1 && time <=14) {
      objMainData.price = time * 1;
      }
    
      if (time >= 15 && time <=60) {
        objMainData.price = time * 0.95;
      }
    
      if (time >= 61 && time <=180) {
        objMainData.price = time * 0.9;
      }
    
      if (time >= 181 && time <=365) {
        objMainData.price = time * 0.85;
      }
  }
  
  else {
    if (time >= 1 && time <=14) {
      objMainData.price = time * 1;
  }

  if (time >= 15 && time <=60) {
    objMainData.price = time * 0.95;
  }

  if (time >= 61 && time <=180) {
    objMainData.price = time * 0.9;
  }

  if (time >= 181 && time <=365) {
    objMainData.price = time * 0.85;
  }
  }
  }
  
    returnPrice();
}

function plusTurist() {
  var piarent = document.querySelectorAll('.turistItem');
  var a = document.createElement('div');
  a.classList.add('turistItem');
  a.classList.add('insurance-calculator-person');
  a.innerHTML = `
  <select  onchange="CalcTravel()" name="years">
                          <option value="1,8">От 0 до 3 лет</option>
                          <option value="1">От 3 до 65 лет</option>
                          <option value="3" selected="selected">От 65 до 75 лет</option>
                          <option value="6">старше 75 лет</option>
                        </select>
                        <input oninput="CalcTravel()" type="number" name="person_count[1]" min="1"  value="1">
                        <div class="insurance-calculator-person-remove" onclick="this.parentNode.remove(); CalcTravel()">×</div>
  `;
  piarent[piarent.length-1].after(a);
  CalcTravel();
}

function returnPrice() {
  if (objMainData.price != undefined && objMainData.price != 0) {
    document.querySelector('#mainPrice').classList.remove('noVisible');
    if (document.getElementsByName('activeTur')[0].checked) {
      objMainData.price = objMainData.price * 1.8;
    }
    if (subprogram.querySelector('select').value == 'Спорт') {
      if (document.getElementsByName('sportType')[0].value == "Комплексное страхование (независимо от категории спорта)") {
        objMainData.price = objMainData.price * 9;
      }
  
      if (document.getElementsByName('sportType')[0].value == "Зимние виды спорта (кроме горных лыж)") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 1.5;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 2.6;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 4.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Горнолыжный спорт") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 2;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 4.20;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 7;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Подводное плавание, прыжки в воду") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 1.8;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 3.4;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 5.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Авто(мото)гонки") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 2.8;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 5.4;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 9;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Велосипед") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 2;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 3.6;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 6;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Альпинизм, горный туризм, сплав") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 2.5;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 5;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 8.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Легкая, тяжелая атлетика, гимнастика") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 1.6;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 2.3;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 3.9;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value =="Единоборства") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 2.4;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 4;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 6.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Дельтапланеризм, парапланеризм, парашютный спорт") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 3;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 5;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 8.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Конный спорт") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 2;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 3;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Плавание, парусный спорт") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 1.3;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 2;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 3.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
      if (document.getElementsByName('sportType')[0].value == "Другое") {
        if (document.getElementsByName('Children')[0].checked) {
          objMainData.price = objMainData.price * 1.2;
        }
        if (document.getElementsByName('ProSport')[0].checked) {
          objMainData.price = objMainData.price * 1.5;
        }
        if (document.getElementsByName('VerySport')[0].checked) {
          objMainData.price = objMainData.price * 2.5;
        }
        if (document.getElementsByName('InvalidSport')[0].checked) {
          objMainData.price = objMainData.price * 0.5;
        }
      }
  
    }
    if (subprogram.querySelector('select').value == 'Студенты') {
      objMainData.price = objMainData.price * 0.8;
    }
    var timedPrice = objMainData.price;
    objMainData.price = 0;
    var turist;
    document.querySelectorAll('.turistItem').forEach((item, id, arr) => {
      objMainData.price = objMainData.price + (item.querySelector('select').value * timedPrice * item.querySelector('input[type="number"]').value);
      turist = turist + item.querySelector('input[type="number"]').value;
    })

    if (turist >=10 && turist <= 25) {
      objMainData.price = objMainData.price * 0.9;
    }
    if (turist >=26 && turist <= 50) {
      objMainData.price = objMainData.price * 0.85;
    }
    if (turist >=51 && turist <= 100) {
      objMainData.price = objMainData.price * 0.8;
    }
    document.querySelector('#mainPrice').innerHTML = `<span>Итого:</span> <span  class="green"> ${objMainData.price.toFixed(2)} KZT</span>`
  } else {
    document.querySelector('#mainPrice').classList.add('noVisible');
  }
}