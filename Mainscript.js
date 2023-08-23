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
import { BCPRINTA } from "./PrintDivs.js"
import { BCPRINTB } from "./PrintDivs.js"
import { MCQFNAV02 } from "./NavDivs.js"
import { MCDFNAV01A } from "./NavDivs.js"
import { MCDFNAV01B } from "./NavDivs.js"
import { MCDFNAV02A } from "./NavDivs.js"
import { MCDFNAV02B } from "./NavDivs.js"
import { MCDFNAV03A } from "./NavDivs.js"
import { MCDFNAV03B } from "./NavDivs.js"
import { MCDFNAV04A } from "./NavDivs.js"
import { MCDFNAV04B } from "./NavDivs.js"
import { MCDFNAV05A } from "./NavDivs.js"
import { MCDFNAV05B } from "./NavDivs.js"
import { MCDFNAV06A } from "./NavDivs.js"
import { MCDFNAV06B } from "./NavDivs.js"
import { MCDFNAV07A } from "./NavDivs.js"
import { MCDFNAV07B } from "./NavDivs.js"
import { MCPRINTA } from "./PrintDivs.js"
import { MCPRINTB } from "./PrintDivs.js"
import { DCDFNAV01A } from "./NavDivs.js"
import { DCDFNAV02A } from "./NavDivs.js"
import { DCDFNAV03A } from "./NavDivs.js"
import { DCDFNAV04A } from "./NavDivs.js"
import { DCDFNAV05A } from "./NavDivs.js"
import { DCDFNAV06A } from "./NavDivs.js"
import { DCPRINTA } from "./PrintDivs.js"


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
                                        NAVF.innerHTML = BCPRINTA
                                    }
                                    else {
                                        NAVF.innerHTML = BCPRINTB
                                    }
                                    let PFNAME01 = document.getElementById("PFname01")
                                    PFNAME01.innerHTML = FNAME01D
                                    let PCSNAME01 = document.getElementById("PCsname01")
                                    PCSNAME01.innerHTML = CSNAME01D
                                    let PBSNAME01 = document.getElementById("PBsname01")
                                    PBSNAME01.innerHTML = BSNAME01D
                                    let PDOB01 = document.getElementById("PDob01")
                                    PDOB01.innerHTML = DOB01D
                                    let PPOB01 = document.getElementById("PPob01")
                                    PPOB01.innerHTML = POB01D
                                    let PCOB01 = document.getElementById("PCob01")
                                    PCOB01.innerHTML = COB01D
                                    let PFNAME03 = document.getElementById("PFname03")
                                    PFNAME03.innerHTML = FNAME03D
                                    let PCSNAME03 = document.getElementById("PCsname03")
                                    PCSNAME03.innerHTML = CSNAME03D
                                    let PBSNAME03 = document.getElementById("PBsname03")
                                    PBSNAME03.innerHTML = BSNAME03D
                                    let PFNAME04 = document.getElementById("PFname04")
                                    PFNAME04.innerHTML = FNAME01D
                                    let PCSNAME04 = document.getElementById("PCsname04")
                                    PCSNAME04.innerHTML = CSNAME04D
                                    let PBSNAME04 = document.getElementById("PBsname04")
                                    PBSNAME04.innerHTML = BSNAME04D
                                    let PRELI = document.getElementById("PReli")
                                    PRELI.innerHTML = RELID
                                    let PRELA = document.getElementById("PRela")
                                    PRELA.innerHTML = RELAD
                                    let PPADD01 = document.getElementById("PPadd01")
                                    PPADD01.innerHTML = PADD01D
                                    let PFNAME05 = document.getElementById("PFname05")
                                    PFNAME05.innerHTML = FNAME05D
                                    let PCSNAME05 = document.getElementById("PCsname05")
                                    PCSNAME05.innerHTML = CSNAME05D
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    MCBTN.onclick = function () {
        NAVF.innerHTML = MCQFNAV02
        let NAV02BTN = document.getElementById("nav02btn")
        NAV02BTN.onclick = function () {
            let FORME = document.getElementsByName("forme")
            var FORMED
            if (FORME[0].checked) {
                FORMED = true
                NAVF.innerHTML = MCDFNAV01A
            }
            else {
                FORMED = false
                NAVF.innerHTML = MCDFNAV01B
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
                    NAVF.innerHTML = MCDFNAV02A
                }
                else {
                    NAVF.innerHTML = MCDFNAV02B
                }
                let DF02BTN = document.getElementById("df02btn1")
                DF02BTN.onclick = function () {
                    let FNAME02 = document.getElementById("Fname02")
                    var FNAME02D = FNAME02.value
                    let CSNAME02 = document.getElementById("Csname02")
                    var CSNAME02D = CSNAME02.value
                    let BSNAME02 = document.getElementById("Bsname02")
                    var BSNAME02D = BSNAME02.value
                    let DOB02 = document.getElementById("Dob02")
                    var DOB02D = DOB02.value
                    let POB02 = document.getElementById("Pob02")
                    var POB02D = POB02.value
                    let COB02 = document.getElementById("Cob02")
                    var COB02D = COB02.value
                    if (FORMED == true) {
                        NAVF.innerHTML = MCDFNAV03A
                    }
                    else {
                        NAVF.innerHTML = MCDFNAV03B
                    }
                    let DF03BTN = document.getElementById("df03btn1")
                    DF03BTN.onclick = function () {
                        let DOM01 = document.getElementById("Dom01")
                        var DOM01D = DOM01.value
                        let POM01 = document.getElementById("Pom01")
                        var POM01D = POM01.value
                        let COM01 = document.getElementById("Com01")
                        var COM01D = COM01.value
                        if (FORMED == true) {
                            NAVF.innerHTML = MCDFNAV04A
                        }
                        else {
                            NAVF.innerHTML = MCDFNAV04B
                        }
                        let DF04BTN = document.getElementById("df04btn1")
                        DF04BTN.onclick = function () {
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
                                NAVF.innerHTML = MCDFNAV05A
                            }
                            else {
                                NAVF.innerHTML = MCDFNAV05B
                            }
                            let DF05BTN = document.getElementById("df05btn1")
                            DF05BTN.onclick = function () {
                                var RELAD
                                if (FORMED == true) {
                                    NAVF.innerHTML = MCDFNAV06A
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
                                    NAVF.innerHTML = MCDFNAV06B
                                }
                                let DF06BTN = document.getElementById("df06btn1")
                                DF06BTN.onclick = function () {
                                    let PADD01 = document.getElementById("Padd01")
                                    var PADD01D = PADD01.value
                                    var FNAME05D
                                    var CSNAME05D
                                    if (FORMED == true) {
                                        NAVF.innerHTML = MCDFNAV07A
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
                                        let SFNAME02 = document.getElementById("SFname02")
                                        SFNAME02.innerHTML = FNAME02D
                                        let SCSNAME02 = document.getElementById("SCsname02")
                                        SCSNAME02.innerHTML = CSNAME02D
                                        let SBSNAME02 = document.getElementById("SBsname02")
                                        SBSNAME02.innerHTML = BSNAME02D
                                        let SDOB02 = document.getElementById("SDob02")
                                        SDOB02.innerHTML = DOB02D
                                        let SPOB02 = document.getElementById("SPob02")
                                        SPOB02.innerHTML = POB02D
                                        let SCOB02 = document.getElementById("SCob02")
                                        SCOB02.innerHTML = COB02D
                                        let SDOM01 = document.getElementById("SDom01")
                                        SDOM01.innerHTML = DOM01D
                                        let SPOM01 = document.getElementById("SPom01")
                                        SPOM01.innerHTML = POM01D
                                        let SCOM01 = document.getElementById("SCom01")
                                        SCOM01.innerHTML = COM01D
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
                                        NAVF.innerHTML = MCDFNAV07B
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
                                        let SFNAME02 = document.getElementById("SFname02")
                                        SFNAME02.innerHTML = FNAME02D
                                        let SCSNAME02 = document.getElementById("SCsname02")
                                        SCSNAME02.innerHTML = CSNAME02D
                                        let SBSNAME02 = document.getElementById("SBsname02")
                                        SBSNAME02.innerHTML = BSNAME02D
                                        let SDOB02 = document.getElementById("SDob02")
                                        SDOB02.innerHTML = DOB02D
                                        let SPOB02 = document.getElementById("SPob02")
                                        SPOB02.innerHTML = POB02D
                                        let SCOB02 = document.getElementById("SCob02")
                                        SCOB02.innerHTML = COB02D
                                        let SDOM01 = document.getElementById("SDom01")
                                        SDOM01.innerHTML = DOM01D
                                        let SPOM01 = document.getElementById("SPom01")
                                        SPOM01.innerHTML = POM01D
                                        let SCOM01 = document.getElementById("SCom01")
                                        SCOM01.innerHTML = COM01D
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
                                    let DF07BTN = document.getElementById("df07btn1")
                                        DF07BTN.onclick = function () {
                                        if (FORMED == true) {
                                        NAVF.innerHTML = MCPRINTA
                                        }
                                        else {
                                        NAVF.innerHTML = MCPRINTB    
                                        }
                                        let PFNAME01 = document.getElementById("PFname01")
                                        PFNAME01.innerHTML = FNAME01D
                                        let PCSNAME01 = document.getElementById("PCsname01")
                                        PCSNAME01.innerHTML = CSNAME01D
                                        let PBSNAME01 = document.getElementById("PBsname01")
                                        PBSNAME01.innerHTML = BSNAME01D
                                        let PDOB01 = document.getElementById("PDob01")
                                        PDOB01.innerHTML = DOB01D
                                        let PPOB01 = document.getElementById("PPob01")
                                        PPOB01.innerHTML = POB01D
                                        let PCOB01 = document.getElementById("PCob01")
                                        PCOB01.innerHTML = COB01D
                                        let PFNAME02 = document.getElementById("PFname02")
                                        PFNAME02.innerHTML = FNAME02D
                                        let PCSNAME02 = document.getElementById("PCsname02")
                                        PCSNAME02.innerHTML = CSNAME02D
                                        let PBSNAME02 = document.getElementById("PBsname02")
                                        PBSNAME02.innerHTML = BSNAME02D
                                        let PDOB02 = document.getElementById("PDob02")
                                        PDOB02.innerHTML = DOB02D
                                        let PPOB02 = document.getElementById("PPob02")
                                        PPOB02.innerHTML = POB02D
                                        let PCOB02 = document.getElementById("PCob02")
                                        PCOB02.innerHTML = COB02D
                                        let PDOM01 = document.getElementById("PDom01")
                                        PDOM01.innerHTML = DOM01D
                                        let PPOM01 = document.getElementById("PPom01")
                                        PPOM01.innerHTML = POM01D
                                        let PCOM01 = document.getElementById("PCom01")
                                        PCOM01.innerHTML = COM01D
                                        let PRELI = document.getElementById("PReli")
                                        PRELI.innerHTML = RELID
                                        let PRELA = document.getElementById("PRela")
                                        PRELA.innerHTML = RELAD
                                        let PPADD01 = document.getElementById("PPadd01")
                                        PPADD01.innerHTML = PADD01D
                                        let PFNAME05 = document.getElementById("PFname05")
                                        PFNAME05.innerHTML = FNAME05D
                                        let PCSNAME05 = document.getElementById("PCsname05")
                                        PCSNAME05.innerHTML = CSNAME05D    
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    DCBTN.onclick = function () {
        NAVF.innerHTML = DCDFNAV01A
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
            NAVF.innerHTML = DCDFNAV02A
            let DF02BTN = document.getElementById("df02btn1")
            DF02BTN.onclick = function () {
                let DOD01 = document.getElementById("Dod01")
                var DOD01D = DOD01.value
                let POD01 = document.getElementById("Pod01")
                var POD01D = POD01.value
                let COD01 = document.getElementById("Cod01")
                var COD01D = COD01.value
                NAVF.innerHTML = DCDFNAV03A
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
                    NAVF.innerHTML = DCDFNAV04A
                    let DF04BTN = document.getElementById("df04btn1")
                    DF04BTN.onclick = function () {
                        let RELA = document.getElementsByName("relation")
                        var RELAD
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
                        NAVF.innerHTML = DCDFNAV05A
                        let DF05BTN = document.getElementById("df05btn1")
                        DF05BTN.onclick = function () {
                            let PADD01 = document.getElementById("Padd01")
                            var PADD01D = PADD01.value
                            var FNAME05D
                            var CSNAME05D
                            let FNAME05 = document.getElementById("Fname05")
                            FNAME05D = FNAME05.value
                            let CSNAME05 = document.getElementById("Csname05")
                            CSNAME05D = CSNAME05.value
                            NAVF.innerHTML = DCDFNAV06A
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
                            let SDOD01 = document.getElementById("SDod01")
                            SDOD01.innerHTML = DOD01D
                            let SPOD01 = document.getElementById("SPod01")
                            SPOD01.innerHTML = POD01D
                            let SCOD01 = document.getElementById("SCod01")
                            SCOD01.innerHTML = COD01D
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
                            let DF06BTN = document.getElementById("df06btn1")
                                DF06BTN.onclick = function () {
                                NAVF.innerHTML = DCPRINTA
                                let PFNAME01 = document.getElementById("PFname01")
                                PFNAME01.innerHTML = FNAME01D
                                let PCSNAME01 = document.getElementById("PCsname01")
                                PCSNAME01.innerHTML = CSNAME01D
                                let PBSNAME01 = document.getElementById("PBsname01")
                                PBSNAME01.innerHTML = BSNAME01D
                                let PDOB01 = document.getElementById("PDob01")
                                PDOB01.innerHTML = DOB01D
                                let PPOB01 = document.getElementById("PPob01")
                                PPOB01.innerHTML = POB01D
                                let PCOB01 = document.getElementById("PCob01")
                                PCOB01.innerHTML = COB01D
                                let PDOD01 = document.getElementById("PDod01")
                                PDOD01.innerHTML = DOD01D
                                let PPOD01 = document.getElementById("PPod01")
                                PPOD01.innerHTML = POD01D
                                let PCOD01 = document.getElementById("PCod01")
                                PCOD01.innerHTML = COD01D
                                let PRELI = document.getElementById("PReli")
                                PRELI.innerHTML = RELID
                                let PRELA = document.getElementById("PRela")
                                PRELA.innerHTML = RELAD
                                let PPADD01 = document.getElementById("PPadd01")
                                PPADD01.innerHTML = PADD01D
                                let PFNAME05 = document.getElementById("PFname05")
                                PFNAME05.innerHTML = FNAME05D
                                let PCSNAME05 = document.getElementById("PCsname05")
                                PCSNAME05.innerHTML = CSNAME05D    
                            }
                        }
                    }
                }
            }
        }
    }
}
