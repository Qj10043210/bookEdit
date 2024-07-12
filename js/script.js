import booklists from "./bookList.js";



// console.log(booklists[0].subject)
// document.getElementById("dd").innerHTML=booklists[0].subject;

const start = 0;
if (start==0){
allWorking();}
function allWorking(){
let menu_checkbox = document.getElementById("menu_checkbox");
var allClass = document.querySelectorAll("*")
var indexLength = booklists.length;
var indexLengthTen = 1;
var EditBox = document.getElementById("EditBox");
var EditBoxes = document.getElementsByClassName("EditBoxes")
var EditBoxAdd = document.getElementById("EditBoxAdd")

var blackScreen = document.getElementById("blackScreen");
var sectionBox = document.getElementById("sectionBox");
var selectSectionBox = document.getElementById("selectSectionBox");
var screenMaker = document.getElementById("sectionBoxScreen");
var EditArea = document.getElementById("EditArea");
var EditAreas = document.querySelectorAll("#EditArea > div")
var moving = document.getElementById("moving");
var movingLeft = document.getElementById("left");
var movingRight = document.getElementById("right");
//▽▽▽▽▽HOME BUTTON WOKRING!!▽▽▽▽▽▽//
var homeButton = document.getElementById("homeButton");
var homeButtonChecked = document.getElementById("homeButtonClicking").value;
homeButton.addEventListener("click", homeButtonClickEvent);

function homeButtonClickEvent() {
    if (homeButtonChecked == "off") {
        homeButtonChecked = "on"
        blackScreen.classList.remove("off")
        blackScreen.classList.add("on")
        EditArea.classList.add("viewable")
        measuringIndex();
        makingIndex();

        makingScreens()
        var selectSection = document.querySelectorAll("#selectSectionBox > span");
        var selectDivOne = document.querySelectorAll("#sectionBox > div")
        var selectScreen = document.querySelectorAll("#sectionBox > div > .boonum")
        var selectScreenBox = document.getElementById("sectionBoxScreen")
        var selectScreenValue = document.querySelectorAll("#sectionBoxScreen>div")
        selectSection[0].classList.add("viewable")
        selectDivOne[0].classList.add("viewable")
        sectionBox.classList.add("check")
        for (let ii = 0; ii < selectSection.length; ++ii) {

            selectSection[ii].onclick = function () {

                for (let jj = 0; jj < selectSection.length; ++jj) {
                    selectSection[jj].classList.remove("viewable")
                    selectDivOne[jj].classList.remove("viewable");
                }
                this.classList.add("viewable")
                selectDivOne[ii].classList.add("viewable")
            }
        }
        for (let io = 0; io < selectScreen.length; ++io) {
            selectScreen[io].onclick = function () {
                sectionBox.classList.remove("check")
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                selectScreenBox.classList.add("viewable")
                selectScreenValue[io].classList.add("viewable")
                moving.classList.add("viewable")
                if (io != 0) {
                    movingLeft.classList.add(`${io - 1}`);
                    movingRight.classList.add(`${io + 1}`);
                }
                else {
                    movingLeft.classList.add(`${0}`);
                    movingRight.classList.add(`${io + 1}`);
                }
            }

        }
        movingLeft.addEventListener("click", moving1left);
        movingRight.addEventListener("click", moving1right);
        function moving1left() {
            let moving_check = this.classList;
            let moving_check2 = parseInt(moving_check.value)

            if (moving_check2 != 0) {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                movingLeft.classList.add(`${moving_check2 - 1}`)
                movingRight.classList.add(`${moving_check2}`)
                selectScreenValue[`${moving_check2}`].classList.add("viewable");
            }

            else {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                movingLeft.classList.add(`0`)
                movingRight.classList.add(`${moving_check2 + 2}`)
                selectScreenValue[`${moving_check2 + 1}`].classList.add("viewable");
            }

        }
        function moving1right() {
            let moving_check = this.classList;
            let moving_check2 = parseInt(moving_check.value)
            if (moving_check2 != indexLength) {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                movingLeft.classList.add(`${moving_check2}`)
                movingRight.classList.add(`${moving_check2 + 1}`)
                selectScreenValue[`${moving_check2}`].classList.add("viewable");
            }

            else {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`)
                    movingRight.classList.remove(`${jj + 1}`);
                }
                movingLeft.classList.add(`${moving_check2 - 2}`)
                movingRight.classList.add(`${indexLength}`)
                selectScreenValue[`${indexLength - 1}`].classList.add("viewable");

            }
        }
        menu_checkbox.addEventListener("click", event)
        function event() {


            setTimeout(function () {
                if (menu_checkbox.checked) {
                    menu_checkbox.checked = false;
                    for (let jj = 0; jj < selectScreen.length; ++jj) {
                        // selectScreenValue[jj].classList.remove("viewable")
                        // movingLeft.classList.remove(`${jj}`);
                        // movingRight.classList.remove(`${jj}`);
                        // selectScreenBox.classList.remove("viewable")
                        // moving.classList.remove("viewable")
                        // EditBox.classList.remove("viewable")
                        allClass.forEach((elm) => {
                            elm.classList.remove("viewable")
                        })
                        EditArea.classList.add("viewable")
                        
                        sectionBox.classList.add("check")
                    }

                }
                else {

                }

            }, 1000)
        }
        
        




    console.log("run once")
    }
    else {
        homeButtonChecked = "off"
        blackScreen.classList.remove("on")
        blackScreen.classList.add("off")
        allClass.forEach((elm) => {
            elm.classList.remove("viewable")
        })

    }
}
for (let inum = 0; inum < 100; inum++) {
    EditAreas[inum].onclick = function () {
        console.log(inum + "inum")
        EditArea.classList.remove("viewable")
        moving.classList.remove("viewable")
        if (sectionBox.classList.contains("check") == true) {

            switch (inum) {
                case 0: //ADD home
                    console.log("Add")
                    EditBoxes[inum].classList.add("viewable")
                    EditBox.classList.add("viewable")
                    document.getElementById("EditBoxAddButton").onclick =
                        function () {
                            let EditBoxAddElementals = document.querySelectorAll("#EditBoxAdd > input");
                            console.log(EditBoxAddElementals.length)
                            let EditBoxAddElementalsLiss = {
                                subject: EditBoxAddElementals[0].value,
                                author: EditBoxAddElementals[1].value,
                                publisher: EditBoxAddElementals[2].value,
                                date: EditBoxAddElementals[3].value,
                                price: EditBoxAddElementals[4].value,
                                summary: EditBoxAddElementals[5].value,
                                photo: EditBoxAddElementals[6].value

                            }
                            booklists.push(EditBoxAddElementalsLiss)
                            indexLength = booklists.length;
                            alert("추가완료")
                            homeButtonChecked = "off"
                            homeButtonClickEvent()
                            
                        }
                    break;
                case 1:
                    console.log("Del");
                    EditBoxes[inum].classList.add("viewable")
                    EditBox.classList.add("viewable");
                    let deldatalist = document.getElementById("OurBookLists")
                    let dellist = "";
                    for(let idel = 0; idel < indexLength; idel++){
                        dellist += `<option value="${idel}">${booklists[idel].subject}</option>`

                    }
                    deldatalist.innerHTML = dellist;     
                    let checkKill = document.getElementById("OurBookLists");
                    checkKill.addEventListener("change", onChange)
                    function onChange() {
                        
                        let checkKillName = checkKill.value;
                        console.log(checkKillName)
                        let checkKillNameNum = parseInt(checkKillName)
                        booklists.splice(checkKillNameNum,1)
                        alert("삭제완료")
                        console.log(booklists)
                        
                    }
                    
            }

        }

        else {
            // (selectScreen[i].classList.contains("viewable") == true) 
            switch (i) {
                case 0: //ADD home

                    break;
                case 1: //delete home

                    break;
                case 2: //Edit home

                    break;
            }

        }
    }
}

//△△△△△HOME BUTTON WOKRING!!△△△△△//
//▽▽▽▽▽IndexPage▽▽▽▽▽▽//
function measuringIndex() {
    
    if (indexLength == 0) {
        indexLength++;

    }
    if (indexLength % 10 == 0) {
        indexLengthTen = (parseInt(indexLength / 10));
    }
    else {
        indexLengthTen = (parseInt(indexLength / 10) + 1);
    }


}
function makingIndex() {
    var TestSectionBox = "";
    var TestSectionBoxes = [];
    var TestIndexLength = 0;
    var TestSelectSectionBox = "";
    if (indexLength > 10) {
        TestIndexLength = indexLength;
        while (TestIndexLength > 10) {
            TestSectionBoxes.push(10);
            TestIndexLength -= 10;
            if (TestIndexLength > 10) {
                TestSectionBoxes.push(10)
            }
            else {
                TestSectionBoxes.push(TestIndexLength);
            }
        }

        for (let i = 0; i < TestSectionBoxes.length; ++i) {
            TestSectionBox += `<div class=sectionBoxes${i}>`
            if(TestSectionBoxes.length<=1){
            for (var indexSelectLength = 0; indexSelectLength < TestSectionBoxes[i]; ++indexSelectLength) {
                if (indexSelectLength !== 9) {
                    TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${i}${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;
                }
                else {
                    TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;
                }

            }}
            else{
                for (var indexSelectLength = 0; indexSelectLength < TestSectionBoxes[i]; ++indexSelectLength) {
                    if(i<1){
                    if (indexSelectLength !== 9) {
                        TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${i}${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;
                    }
                    else {
                        TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;
                    }
                    }
                    else{
                        if (indexSelectLength !== 9) {
                            TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${i}${indexSelectLength + 1} <span class=bookName>${booklists[((i) * 10) +indexSelectLength].subject}</span> </a><br>`;
                        }
                        else {
                            TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${indexSelectLength + 1} <span class=bookName>${booklists[((i) * 10) + indexSelectLength].subject}</span> </a><br>`;
                        }
                    }
                }
            }
            TestSectionBox += `</div>`
        }

    }
    else {
        TestSectionBox += `<div class=sectionBoxes${indexLengthTen}>`
        for (var indexSelectLength = 0; indexSelectLength < indexLength; ++indexSelectLength) {
            TestSectionBox += `<a href="#none" class='boonum bookNum${indexSelectLength}'> No.${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;

        }
        TestSectionBox += `</div>`


    }
    for (let j = 0; j < indexLengthTen; ++j) {
        TestSelectSectionBox += `<span class="selectSection selectSections${j + 1}">${j + 1}  </span>`
    }
    sectionBox.innerHTML = TestSectionBox;
    selectSectionBox.innerHTML = TestSelectSectionBox;
}





//△△△△△IndexPage△△△△△//

//▽▽▽▽▽SCRENNPage▽▽▽▽▽▽//

function makingScreens() {
    var TestSectionBox2 = "";


    for (let i = 0; i < indexLength; i++) {
        TestSectionBox2 += `<div class=screenBoxes${i}>`
        TestSectionBox2 += `<div class="subject"><span>${booklists[i].subject}</span></div>`;



        TestSectionBox2 += `<div class="photo" style="background-image:url('./images/${booklists[i].photo}'),url('./images/noimage.gif');  background-repeat: no-repeat; background-position: center; background-size:contain;"></div>`



        TestSectionBox2 += `<div class="author"><span>${booklists[i].author}</span></div>
                <div class="publisher"><span>${booklists[i].publisher}</span></div>
                <div class="date"><span>${booklists[i].date}</span></div>
                <div class="price"><span>${booklists[i].price.toLocaleString()}</span></div>
                <div class="summary"><br><span>${booklists[i].summary}</span></div>
                `;
        TestSectionBox2 += `</div>`
    }

    screenMaker.innerHTML = TestSectionBox2;

}

//△△△△△SCRENNPage△△△△△//
}