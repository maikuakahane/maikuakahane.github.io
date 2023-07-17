// JavaScript source code
import { BCQFNAV02 } from "./NavDivs.js"
import { BCDFNAV01A } from "./NavDivs.js"
import { BCDFNAV01B } from "./NavDivs.js"
import { BCDFNAV02A } from "./NavDivs.js"
import { BCDFNAV02B } from "./NavDivs.js"



window.onload = function () {
    let BCBTN = document.getElementById("bcbtn_en")
    let MCBTN = document.getElementById("mcbtn_en")
    let DCBTN = document.getElementById("dcbtn_en")
    var NAVF = document.getElementById("CCqfnav01")

    BCBTN.onclick = function () {
        NAVF.innerHTML = BCQFNAV02
        let NAV02BTN = document.getElementById("nav02btn")
        NAV02BTN.onclick = function () {
            let FORME = document.getElementsByName("forme")
            var FORMED
            if (FORME[0].checked) {
                FORMED = true
                NAVF.innerHTML = BCDFNAV01A
            }
            else {
                FORMED = false
                NAVF.innerHTML = BCDFNAV01B
            }
            let NAV03BTN = document.getElementById("df01btn1")
            NAV03BTN.onclick = function () {
                let FNAME01 = document.getElementById("Fname01")
                var FNAME01D = FNAME01.value
                let CSNAME01 = document.getElementById("Csname01")
                var CSNAME01D = CSNAME01.value
                let BSNAME01 = document.getElementById("Bsname01")
                var BSNAME01D = BSNAME01.value
                let DOB01 = document.getElementById("Dob01")
                var DOB01D = DOB01.value
                let POB01 = document.getElementById("Pob01")
                var POB01D = POB01.value
                let COB01 = document.getElementById("Cob01")
                var COB01D = COB01.value
                if (FORMED == true) {
                    NAVF.innerHTML = BCDFNAV02A
                }
                else {
                    NAVF.innerHTML = BCDFNAV02B
                }
                let NAV04BTN = document.getElementById("df02btn1")
                NAV04BTN.onclick = function () {
                    let FNAME03 = document.getElementById("Fname03")
                    var FNAME03D = FNAME03.value
                    let CSNAME03 = document.getElementById("Csname03")
                    var CSNAME03D = CSNAME03.value
                    let BSNAME03 = document.getElementById("Bsname03")
                    var BSNAME03D = BSNAME03.value
                    let FNAME04 = document.getElementById("Fname04")
                    var FNAME04D = FNAME04.value 
                    let CSNAME04 = document.getElementById("Csname04")
                    var CSNAME04D = CSNAME04.value
                    let BSNAME04 = document.getElementById("Bsname04")
                    var BSNAME04D = BSNAME04.value 
                }
            }
        }
    }
}