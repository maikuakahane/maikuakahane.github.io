// JavaScript source code
export var BCPRINTA = `
    <div class="printform" id="bcprint01">
        <h3>
            Dotazník k žádosti o zaslání matričního dokladu z ČR
            <br>
            Questionnaire for application to send a registry certificate from Czech Republic
        </h3>
        <h4> Označení požadovaného dokladu/Designation of requested certicfcate </h4>
        <b>Rodný list/birth certificace </b>
        <h4> Údaje o osobě, které se žádaný doklad týká/ Details of the person on the certificate </h4>
        <table class="datatable">
            <tr>
                <td class="textcell"> Současné příjmení/ Current surname </td>
                <td id="PCsname01" class="datacell">  </td>
            </tr>
            <tr>
                <td class="textcell"> Rodné příjmení/surname at birth </td>
                <td id="PBsname01" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Jméno/first and middle names </td>
                <td id="PFname01" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Datum narození/date of birth </td>
                <td id="PDob01" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Místo narození/place of birth </td>
                <td id="PPob01" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Stát narození/country of birth </td>
                <td id="PCob01" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Náboženství v době narození u osob, které se narodily do 31. 12. 1949/ religion at time of birth prior to 31.12.1949 </td>
                <td id="PReli" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Nynější bydliště/current address </td>
                <td id="PPadd01" class="datacell"> </td>
            </tr>
        </table>
        <h4> Údaje o rodičích osoby uvedené v bodu B/details of parents of person listed in point B </h4>
        <table class="datatable" class="datacell">
            <tr>
                <td class="textcell"> Současné příjmení jejich otce/ Current surname </td>
                <td id="PCsname04" class="datacell">  </td>
            </tr>
            <tr>
                <td class="textcell"> Rodné příjmení jejich otce/surname at birth </td>
                <td id="PBsname04" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Jméno jejich otce/ first and middle names </td>
                <td id="PFname04" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Současné příjmení jejich matky/ Current surname </td>
                <td id="PCsname03" class="datacell">  </td>
            </tr>
            <tr>
                <td class="textcell"> Rodné příjmení jejich matky/surname at birth </td>
                <td id="PBsname03" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Jméno jejich matky/ first and middle names </td>
                <td id="PFname03" class="datacell"> </td>
            </tr>
        </table>
    </div>
    <div class="printform" id="bcprint02">
        <h4> Údaje o osobě, která žádá o vystavení dokladu, není-li totožná s osobou v bodě B/details of the person requesting issue of the certificate if not the same as person listed in point B </h4>
        <table class="datatable">
            <tr>
                <td class="textcell"> Jméno/first and middle names </td>
                <td id="PFname05" class="datacell"> </td>
            </tr>
            <tr>
                <td class="textcell"> Současné příjmení/ Current surname </td>
                <td id="PCsname05" class="datacell">  </td>
            </tr>
            <tr>
                <td class="textcell"> Rodinný poměr k osobě, na jejíž jméno má být doklad vystaven nebo uvedení právního zájmu na vystavení dokladu/family relationship to the person whose certificate should be issued or statement of legal interest on issue of the certificate </td>
                <td id="PRela" class="datacell">  </td>
            </tr>
        </table>
        <table class="signtable1">
           <tr>
                <td class="setfield">V/In </td>
                <td class="fillfield"></td>
               <td class="setfield">dne/date</td>
                <td class="fillfield"></td>
                </table>
         <table class="signtable2">
                <td class="setfield">podpis žadatele/signature of applicant</td>
                <td class="fillfield"></td>
            </tr>
            </table>
            <table class="filler">
            <tr> 
                <td class="fillspacer"></td>
            </tr>
            </table>
            <table class="ppttable1">
            <tr>
                <td class="setfield">Totožnost žadatele ověřena podle dokladu</td>
                <td class="fillfield"></td>
            </tr>
            </table>
            <table class="ppttable2">
            <tr>
                <td class="setfield">vydaného dne</td>
                <td class="fillfield"></td>
                <td class="setfield">kým</td>
                <td class="fillfield"></td>
                <td class="setfield">platného do</td>
                <td class="fillfield"></td>
            </tr>
            </table>
            <table class="offtable">
            <tr>
                <td class="setfield">Jméno, příjmení, funkce a podpis konzulárního úředníka/matrikáře</td>
                <td class="fillfield"></td>
            </tr>
            <tr>
                <td class="setfield">Razítko zastupitelského/matričního úřadu ČR</td>
                <td class="fillfield"></td>
            </tr>
        </table>
    </div> `


export var BCPRINTB = `
    <div class="printform" id="bcprint01">
        <h3>
            Dotazník k žádosti o zaslání matričního dokladu z ČR
            <br>
            Questionnaire for application to send a registry certificate from Czech Republic
        </h3>
        <h4> Označení požadovaného dokladu/Designation of requested certicfcate </h4>
        <b>Rodný list/birth certificace </b>
        <h4> Údaje o osobě, které se žádaný doklad týká/ Details of the person on the certificate </h4>
        <table>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname01">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení/surname at birth </td>
                <td id="PBsname01"> </td>
            </tr>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname01"> </td>
            </tr>
            <tr>
                <td> Datum narození/date of birth </td>
                <td id="PDob01"> </td>
            </tr>
            <tr>
                <td> Místo narození/place of birth </td>
                <td id="PPob01"> </td>
            </tr>
            <tr>
                <td> Stát narození/country of birth </td>
                <td id="PCob01"> </td>
            </tr>
            <tr>
                <td> Náboženství v době narození u osob, které se narodily do 31. 12. 1949/ religion at time of birth prior to 31.12.1949 </td>
                <td id="PReli"> </td>
            </tr>
        </table>
        <h4> Údaje o rodičích osoby uvedené v bodu B/details of parents of person listed in point B </h4>
        <table>
            <tr>
                <td> Současné příjmení jejich otce/ Current surname </td>
                <td id="PCsname04">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení jejich otce/surname at birth </td>
                <td id="PBsname04"> </td>
            </tr>
            <tr>
                <td> Jméno jejich otce/ first and middle names </td>
                <td id="PFname04"> </td>
            </tr>
            <tr>
                <td> Současné příjmení jejich matky/ Current surname </td>
                <td id="PCsname03">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení jejich matky/surname at birth </td>
                <td id="PBsname03"> </td>
            </tr>
            <tr>
                <td> Jméno jejich matky/ first and middle names </td>
                <td id="PFname03"> </td>
            </tr>
        </table>
    </div>
    <div class="printform" id="bcqprint02">
        <h4> Údaje o osobě, která žádá o vystavení dokladu, není-li totožná s osobou v bodě B/details of the person requesting issue of the certificate if not the same as person listed in point B </h4>
        <table>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname05"> </td>
            </tr>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname05">  </td>
            </tr>
            <tr>
                <td> Rodinný poměr k osobě, na jejíž jméno má být doklad vystaven nebo uvedení právního zájmu na vystavení dokladu/family relationship to the person whose certificate should be issued or statement of legal interest on issue of the certificate </td>
                <td id="PRela">  </td>
            </tr>
            <tr>
                <td> Nynější bydliště/current address </td>
                <td id="PPadd01"> </td>
            </tr>
        </table>
        <br>
        V/In (.......................)dne/date (.............................) podpis žadatele/signature of applicant (...........................)
        <br>
        -------------------------------------------------------------------------------------------------------------------------------------------
        <br>
        Totožnost žadatele ověřena podle dokladu .....................................................................
        <br> vydaného dne ......./......./.......   kým ..................... platného do ......./......./.......
        <br>
        Totožnost žadatele ověřil:
        <br>
        ....................................................................................
        <br>
        jméno, příjmení, funkce a podpis konzulárního úředníka
        <br>
        ....................................................................................
        <br>
        razítko zastupitelského úřadu ČR
    </div> `


export var MCPRINTA = `
    <div class="printform" id="mcprint01">
        <h3>
            Dotazník k žádosti o zaslání matričního dokladu z ČR
            <br>
            Questionnaire for application to send a registry certificate from Czech Republic
        </h3>
        <h4> A. Označení požadovaného dokladu/Designation of requested certicfcate </h4>
        <b>Oddací list/marriage certificace </b>
        <h4> B. Údaje o osobě, které se žádaný doklad týká/ Details of the person on the certificate </h4>
        <table>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname01">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení/surname at birth </td>
                <td id="PBsname01"> </td>
            </tr>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname01"> </td>
            </tr>
            <tr>
                <td> Datum narození/date of birth </td>
                <td id="PDob01"> </td>
            </tr>
            <tr>
                <td> Místo narození/place of birth </td>
                <td id="PPob01"> </td>
            </tr>
            <tr>
                <td> Stát narození/country of birth </td>
                <td id="PCob01"> </td>
            </tr>
            <tr>
                <td> Nynější bydliště/current address </td>
                <td id="PPadd01"> </td>
            </tr>
        </table>
        <h4> C. Údaje o manželovi/manželce osoby uvedené v bodu B/ Details of spouse of person listed in point B</h4>
        <table>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname02">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení/surname at birth </td>
                <td id="PBsname02"> </td>
            </tr>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname02"> </td>
            </tr>
            <tr>
                <td> Datum narození/date of birth </td>
                <td id="PDob02"> </td>
            </tr>
            <tr>
                <td> Místo narození/place of birth </td>
                <td id="PPob02"> </td>
            </tr>
            <tr>
                <td> Stát narození/country of birth </td>
                <td id="PCob02"> </td>
            </tr>
        </table>
        <h4> Údaje o manželství uzavřené mezi osobami v bodech B a C/Details of marriage betweens persons listed in point B and C </h4>
        <table>
            <tr>
                <td> Datum uzavření manželství /date of marriage </td>
                <td id="PDom01"> </td>
            </tr>
            <tr>
                <td> Místo uzavření manželství/place of marriage </td>
                <td id="PPom01"> </td>
            </tr>
            <tr>
                <td> Stát uzavření manželství/country of marriage </td>
                <td id="PCom01"> </td>
            <tr>
                <td> Náboženství v době uzavření manželství u osob, které se uzavřeli manželství do 31. 12. 1949/ religion at time of marriage prior to 31.12.1949 </td>
                <td id="PReli"> </td>
            </tr>
        </table>
    </div>
    <div class="printform" id="mcprint02">
        <h4> Údaje o osobě, která žádá o vystavení dokladu, není-li totožná s osobou v bodě B/details of the person requesting issue of the certificate if not the same as person listed in point B </h4>
        <table>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname05"> </td>
            </tr>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname05">  </td>
            </tr>
            <tr>
                <td> Rodinný poměr k osobě, na jejíž jméno má být doklad vystaven nebo uvedení právního zájmu na vystavení dokladu/family relationship to the person whose certificate should be issued or statement of legal interest on issue of the certificate </td>
                <td id="PRela">  </td>
            </tr>
        </table>
        <br>
        V/In (.......................)dne/date (.............................) podpis žadatele/signature of applicant (...........................)
        <br>
        -------------------------------------------------------------------------------------------------------------------------------------------
        <br>
        Totožnost žadatele ověřena podle dokladu .....................................................................
        <br> vydaného dne ......./......./.......   kým ..................... platného do ......./......./.......
        <br>
        Totožnost žadatele ověřil:
        <br>
        ....................................................................................
        <br>
        jméno, příjmení, funkce a podpis konzulárního úředníka
        <br>
        ....................................................................................
        <br>
        razítko zastupitelského úřadu ČR
    </div> `

export var MCPRINTB = `
    <div class="printform" id="mcprint01">
        <h3>
            Dotazník k žádosti o zaslání matričního dokladu z ČR
            <br>
            Questionnaire for application to send a registry certificate from Czech Republic
        </h3>
        <h4> A. Označení požadovaného dokladu/Designation of requested certicfcate </h4>
        <b>Oddací list/marriage certificace </b>
        <h4> B. Údaje o osobě, které se žádaný doklad týká/ Details of the person on the certificate </h4>
        <table>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname01">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení/surname at birth </td>
                <td id="PBsname01"> </td>
            </tr>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname01"> </td>
            </tr>
            <tr>
                <td> Datum narození/date of birth </td>
                <td id="PDob01"> </td>
            </tr>
            <tr>
                <td> Místo narození/place of birth </td>
                <td id="PPob01"> </td>
            </tr>
            <tr>
                <td> Stát narození/country of birth </td>
                <td id="PCob01"> </td>
            </tr>
        </table>
        <h4> C. Údaje o manželovi/manželce osoby uvedené v bodu B/ Details of spouse of person listed in point B</h4>
        <table>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname02">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení/surname at birth </td>
                <td id="PBsname02"> </td>
            </tr>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname02"> </td>
            </tr>
            <tr>
                <td> Datum narození/date of birth </td>
                <td id="PDob02"> </td>
            </tr>
            <tr>
                <td> Místo narození/place of birth </td>
                <td id="PPob02"> </td>
            </tr>
            <tr>
                <td> Stát narození/country of birth </td>
                <td id="PCob02"> </td>
            </tr>
        </table>
        <h4> Údaje o manželství uzavřené mezi osobami v bodech B a C/Details of marriage betweens persons listed in point B and C </h4>
        <table>
            <tr>
                <td> Datum uzavření manželství /date of marriage </td>
                <td id="PDom01"> </td>
            </tr>
            <tr>
                <td> Místo uzavření manželství/place of marriage </td>
                <td id="PPom01"> </td>
            </tr>
            <tr>
                <td> Stát uzavření manželství/country of marriage </td>
                <td id="PCom01"> </td>
            <tr>
                <td> Náboženství v době uzavření manželství u osob, které se uzavřeli manželství do 31. 12. 1949/ religion at time of marriage prior to 31.12.1949 </td>
                <td id="PReli"> </td>
            </tr>
        </table>
    </div>
    <div class="printform" id="mcprint02">
        <h4> Údaje o osobě, která žádá o vystavení dokladu, není-li totožná s osobou v bodě B/details of the person requesting issue of the certificate if not the same as person listed in point B </h4>
        <table>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname05"> </td>
            </tr>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname05">  </td>
            </tr>
            <tr>
                <td> Rodinný poměr k osobě, na jejíž jméno má být doklad vystaven nebo uvedení právního zájmu na vystavení dokladu/family relationship to the person whose certificate should be issued or statement of legal interest on issue of the certificate </td>
                <td id="PRela">  </td>
            </tr>
            <tr>
                <td> Nynější bydliště/current address </td>
                <td id="PPadd01"> </td>
            </tr>
        </table>
        <br>
        V/In (.......................)dne/date (.............................) podpis žadatele/signature of applicant (...........................)
        <br>
        -------------------------------------------------------------------------------------------------------------------------------------------
        <br>
        Totožnost žadatele ověřena podle dokladu .....................................................................
        <br> vydaného dne ......./......./.......   kým ..................... platného do ......./......./.......
        <br>
        Totožnost žadatele ověřil:
        <br>
        ....................................................................................
        <br>
        jméno, příjmení, funkce a podpis konzulárního úředníka
        <br>
        ....................................................................................
        <br>
        razítko zastupitelského úřadu ČR
    </div> `

export var DCPRINTA = `
    <div class="printform" id="dcprint01">
        <h3>
            Dotazník k žádosti o zaslání matričního dokladu z ČR
            <br>
            Questionnaire for application to send a registry certificate from Czech Republic
        </h3>
        <h4> A. Označení požadovaného dokladu/Designation of requested certicfcate </h4>
        <b>Úmrtní list/death certificace </b>
        <h4> B. Údaje o osobě, které se žádaný doklad týká/ Details of the person on the certificate </h4>
        <table>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname01">  </td>
            </tr>
            <tr>
                <td> Rodné příjmení/surname at birth </td>
                <td id="PBsname01"> </td>
            </tr>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname01"> </td>
            </tr>
            <tr>
                <td> Datum narození/date of birth </td>
                <td id="PDob01"> </td>
            </tr>
            <tr>
                <td> Místo narození/place of birth </td>
                <td id="PPob01"> </td>
            </tr>
            <tr>
                <td> Stát narození/country of birth </td>
                <td id="PCob01"> </td>
            </tr>
            <tr>
                <td> Datum úmrtí /date of death </td>
                <td id="PDod01"> </td>
            </tr>
            <tr>
                <td> Místo úmrtí/place of death </td>
                <td id="PPod01"> </td>
            </tr>
            <tr>
                <td> Stát úmrtí/country of death </td>
                <td id="PCod01"> </td>
            <tr>
                <td> Náboženství v době úmrtí u osob, které zemřeli do 31. 12. 1949/ religion at time of death prior to 31.12.1949 </td>
                <td id="PReli"> </td>
            </tr>
        </table>
    </div>
    <div class="printform" id="dcprint02">
        <h4> Údaje o osobě, která žádá o vystavení dokladu, není-li totožná s osobou v bodě B/details of the person requesting issue of the certificate if not the same as person listed in point B </h4>
        <table>
            <tr>
                <td> Jméno/first and middle names </td>
                <td id="PFname05"> </td>
            </tr>
            <tr>
                <td> Současné příjmení/ Current surname </td>
                <td id="PCsname05">  </td>
            </tr>
            <tr>
                <td> Rodinný poměr k osobě, na jejíž jméno má být doklad vystaven nebo uvedení právního zájmu na vystavení dokladu/family relationship to the person whose certificate should be issued or statement of legal interest on issue of the certificate </td>
                <td id="PRela">  </td>
            </tr>
            <tr>
                <td> Nynější bydliště/current address </td>
                <td id="PPadd01"> </td>
            </tr>
        </table>
        <br>
        V/In (.......................)dne/date (.............................) podpis žadatele/signature of applicant (...........................)
        <br>
        -------------------------------------------------------------------------------------------------------------------------------------------
        <br>
        Totožnost žadatele ověřena podle dokladu .....................................................................
        <br> vydaného dne ......./......./.......   kým ..................... platného do ......./......./.......
        <br>
        Totožnost žadatele ověřil:
        <br>
        ....................................................................................
        <br>
        jméno, příjmení, funkce a podpis konzulárního úředníka
        <br>
        ....................................................................................
        <br>
        razítko zastupitelského úřadu ČR
    </div> `
