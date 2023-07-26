// JavaScript source code
import { BCQFNAV02 } from "./NavDivs.js"
import { BCDFNAV01A } from "./NavDivs.js"
import { BCDFNAV01B } from "./NavDivs.js"
import { BCDFNAV02A } from "./NavDivs.js"
import { BCDFNAV02B } from "./NavDivs.js"
import { BCDFNAV03A } from "./NavDivs.js"
import { BCDFNAV03B } from "./NavDivs.js"
import { BCDFNAV04A } from "./NavDivs.js"
import { BCDFNAV04B } from "./NavDivs.js"
import { BCDFNAV05A } from "./NavDivs.js"
import { BCDFNAV05B } from "./NavDivs.js"
import { BCDFNAV06A } from "./NavDivs.js"
import { BCDFNAV06B } from "./NavDivs.js"
import { BCDPRINTA } from "./PrintDivs.js"
import { BCDPRINTB } from "./PrintDivs.js"

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
            let DF01BTN = document.getElementById("df01btn1")
            DF01BTN.onclick = function () {
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
                let DF02BTN = document.getElementById("df02btn1")
                DF02BTN.onclick = function () {
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
                    if (FORMED == true) {
                        NAVF.innerHTML = BCDFNAV03A
                    }
                    else {
                        NAVF.innerHTML = BCDFNAV03B
                    }
                    let DF03BTN = document.getElementById("df03btn1")
                    DF03BTN.onclick = function () {
                        let RELI = document.getElementsByName("religion")
                        var RELID
                        if (RELI[0].checked) {
                            RELID = "Neuvádí se - narození po 31.12.1945 / Not applicable - born after 31.12.1945"
                        }
                        else if (RELI[1].checked) {
                            RELID = "Katolické / Catholic"
                        }
                        else if (RELI[2].checked) {
                            RELID = "Evangelické / Protestant"
                        }
                        else if (REL[3].checked) {
                            RELID = "Židovské / Jewish"
                        }
                        if (FORMED == true) {
                            NAVF.innerHTML = BCDFNAV04A
                        }
                        else {
                            NAVF.innerHTML = BCDFNAV04B
                        }
                        let DF04BTN = document.getElementById("df04btn1")
                        DF04BTN.onclick = function () {
                            var RELAD
                            if (FORMED == true) {
                                NAVF.innerHTML = BCDFNAV05A
                                RELAD = "N/A" 
                            }
                            else {
                                let RELA = document.getElementsByName("relation")
                                if (RELA[0].checked) {
                                    RELAD = "Dítě / Child"
                                }
                                else if (RELA[1].checked) {
                                    RELAD = "Rodič / Parent"
                                }
                                else if (RELA[2].checked) {
                                    RELAD = "Vnouče / Grandchild"
                                }
                                else if (RELA[3].checked) {
                                    RELAD = "Praodič / Grandparent"
                                }
                                else if (RELA[4].checked) {
                                    RELAD = "Potomek v přímé linii / Descenant in direct line"
                                }
                                else if (RELA[5].checked) {
                                    RELAD = "Manžel/ka / Spouse"
                                }
                                else if (RELA[6].checked) {
                                    RELAD = "Sourozenec / Sibling"
                                }
                                else if (RELA[7].checked) {
                                    RELAD = "Zplnomocněný zástupce / Authorized person"
                                }
                                NAVF.innerHTML = BCDFNAV05B
                            }
                            let DF05BTN = document.getElementById("df05btn1")
                            DF05BTN.onclick = function () {
                                let PADD01 = document.getElementById("Padd01")
                                var PADD01D = PADD01.value
                                var FNAME05D
                                var CSNAME05D
                            if (FORMED == true) {
                                NAVF.innerHTML = BCDFNAV06A
                                FNAME05D = FNAME01D
                                CSNAME05D = CSNAME01D
                                let SFNAME01 = document.getElementById("SFname01")
                                SFNAME01.innerHTML = FNAME01D
                                let SCSNAME01 = document.getElementById("SCsname01")
                                SCSNAME01.innerHTML = CSNAME01D
                                let SBSNAME01 = document.getElementById("SBsname01")
                                SBSNAME01.innerHTML = BSNAME01D
                                let SDOB01 = document.getElementById("SDob01")
                                SDOB01.innerHTML = DOB01D
                                let SPOB01 = document.getElementById("SPob01")
                                SPOB01.innerHTML = POB01D
                                let SCOB01 = document.getElementById("SCob01")
                                SCOB01.innerHTML = COB01D
                                let SFNAME03 = document.getElementById("SFname03")
                                SFNAME03.innerHTML = FNAME03D
                                let SCSNAME03 = document.getElementById("SCsname03")
                                SCSNAME03.innerHTML = CSNAME03D
                                let SBSNAME03 = document.getElementById("SBsname03")
                                SBSNAME03.innerHTML = BSNAME03D
                                let SFNAME04 = document.getElementById("SFname04")
                                SFNAME04.innerHTML = FNAME01D
                                let SCSNAME04 = document.getElementById("SCsname04")
                                SCSNAME04.innerHTML = CSNAME04D
                                let SBSNAME04 = document.getElementById("SBsname04")
                                SBSNAME04.innerHTML = BSNAME04D
                                let SRELI = document.getElementById("SReli")
                                SRELI.innerHTML = RELID
                                let SRELA = document.getElementById("SRela")
                                SRELA.innerHTML = RELAD
                                let SPADD01 = document.getElementById("SPadd01")
                                SPADD01.innerHTML = PADD01D
                                let SFNAME05 = document.getElementById("SFname05")
                                SFNAME05.innerHTML = FNAME05D
                                let SCSNAME05 = document.getElementById("SCsname05")
                                SCSNAME05.innerHTML = CSNAME05D
                            }
                            else {
                                let FNAME05 = document.getElementById("Fname05")
                                FNAME05D = FNAME05.value
                                let CSNAME05 = document.getElementById("Csname05")
                                CSNAME05D = CSNAME05.value
                                NAVF.innerHTML = BCDFNAV06B
                                let SFNAME01 = document.getElementById("SFname01")
                                SFNAME01.innerHTML = FNAME01D
                                let SCSNAME01 = document.getElementById("SCsname01")
                                SCSNAME01.innerHTML = CSNAME01D
                                let SBSNAME01 = document.getElementById("SBsname01")
                                SBSNAME01.innerHTML = BSNAME01D
                                let SDOB01 = document.getElementById("SDob01")
                                SDOB01.innerHTML = DOB01D
                                let SPOB01 = document.getElementById("SPob01")
                                SPOB01.innerHTML = POB01D
                                let SCOB01 = document.getElementById("SCob01")
                                SCOB01.innerHTML = COB01D
                                let SFNAME03 = document.getElementById("SFname03")
                                SFNAME03.innerHTML = FNAME03D
                                let SCSNAME03 = document.getElementById("SCsname03")
                                SCSNAME03.innerHTML = CSNAME03D
                                let SBSNAME03 = document.getElementById("SBsname03")
                                SBSNAME03.innerHTML = BSNAME03D
                                let SFNAME04 = document.getElementById("SFname04")
                                SFNAME04.innerHTML = FNAME01D
                                let SCSNAME04 = document.getElementById("SCsname04")
                                SCSNAME04.innerHTML = CSNAME04D
                                let SBSNAME04 = document.getElementById("SBsname04")
                                SBSNAME04.innerHTML = BSNAME04D
                                let SRELI = document.getElementById("SReli")
                                SRELI.innerHTML = RELID
                                let SRELA = document.getElementById("SRela")
                                SRELA.innerHTML = RELAD
                                let SPADD01 = document.getElementById("SPadd01")
                                SPADD01.innerHTML = PADD01D
                                let SFNAME05 = document.getElementById("SFname05")
                                SFNAME05.innerHTML = FNAME05D
                                let SCSNAME05 = document.getElementById("SCsname05")
                                SCSNAME05.innerHTML = CSNAME05D
                            }
                                let DF06BTN = document.getElementById("df06btn1")
                                DF06BTN.onclick = function () {
                                    if (FORMED == true) {
                                        NAVF.innerHTML = BCDPRINTA
                                    }
                                    else {
                                        NAVF.innerHTML = BCDPRINTB
                                    }
                                }
                            }
                         
                        }
                    }
                }
            }
        }
    }
}
