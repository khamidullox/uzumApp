let data = {
  otabek: [
    {
      uid: "КВА-1",
      plan: {
        limit: 126,
        smena: 42953000,
        ucell: 20,
      },
      user: {
        adm1: "ADHAMOVA DILNAVOZ AKMALJON QIZI ",
        adm2: "KARIMOVA ANNA ALEKSANDROVNA",
      },
    },
    {
      uid: "КУВ-1",
      plan: {
        limit: 154,
        smena: 56419877,
        ucell: 40,
      },
      user: {
        mng: "RUSTAMOV DOSTONJON RAVSHANJON O`G`LI ",
        adm1: "XAMIDOVA NIGINABONU SHUHRATJON QIZI ",
        adm2: "KARIMOVA ANNA ALEKSANDROVNA",
      },
    },
    {
      uid: "МРГ-1",
      plan: {
        limit: 400,
        smena: 91844853,
        ucell: 0.1,
      },
      user: {
        adm1: "SATTOROVA NAZIRA NURMAT QIZI ",
        adm2: "YUSIBEKOV ELYOR MAVLONBEK O'G'LI ",
        adm3: "G'IYOSOV DILNURBEK ULUG'BEK O'G'LI ",
        adm4: "RAXIMDJANOV DMITRIY ALEKSEYEVICH",
        mfu: "CHORIYEV JALOLIDDIN JAXONGIR O'G'LI ",
      },
    },
    {
      uid: "МРГ-2",
      plan: {
        limit: 201,
        smena: 44277903,
        ucell: 40,
      },
      user: {
        adm1: "XALIMJONOV HAYOTTULLO XADIYATULLO O'G'LI ",
        adm2: "EGAMBERDIYEV ELYORBEK ERKINJON O'G'LI ",
        adm3: "KAMOLOV ABBOSXON AZIMJON O'G'LI ",
      },
    },
    {
      uid: "ТЛК-1",
      plan: {
        limit: 180,
        smena: 38427475,
        ucell: 20,
      },
      user: {
        adm1: "TO'XTANAZAROV MURODIL MAXSUDJON O'G'LI ",
        adm2: "ARIPOVA SAYYORAXON ABDIKOXOROVNA",
      },
    },
    {
      uid: "ФЕР-10",
      plan: {
        limit: 130,
        smena: 31169204,
        ucell: 40,
      },
      user: {
        adm1: "ABDURASULOVA ELINA BAXTIYORJONOVNA",
        adm2: "SHATS YURIY ALEKSANDROVICH",
      },
    },
    {
      uid: "ФЕР-13",
      plan: {
        limit: 132,
        smena: 31298257,
        ucell: 40,
      },
      user: {
        adm1: "TOJIDDINOV ABDURASHID DILSHOD O'G'LI ",
        adm2: "DAVRONOV NUMUHAMMAD RAMOJON O’G’LI ",
      },
    },
    {
      uid: "ФЕР-14",
      plan: {
        limit: 134,
        smena: 31699000,
        ucell: 20,
      },
      user: {
        adm1: "AZIMOV ILHOMJON RAVSHANJON O’GLI ",
        adm2: "SHOKIRJONOV ISLOMBEK",
      },
    },
    {
      uid: "ФЕР-15",
      plan: {
        limit: 130,
        smena: 18213342,
        ucell: 40,
      },
      user: {
        adm1: "TOIROVA ZIYODAXON QAHRAMON QIZI ",
        adm2: "DAVLETSHIN ALEKSANDR SALAVATOVICH",
      },
    },
    {
      uid: "ФЕР-4",
      plan: {
        limit: 150,
        smena: 46376535,
        ucell: 40,
      },
      user: {
        adm1: "SHUKUROVA SUG‘DIYONA SULTONBEK QIZI ",
        adm2: "PIGASOVA VIKTORIYA OLEGOVNA",
        adm3: "BELOV DMITRIY YUREVICH",
      },
    },
    {
      uid: "ФЕР-5",
      plan: {
        limit: 190,
        smena: 37079850,
        ucell: 40,
      },
      user: {
        adm1: "DJEMILOV SEYRAN ENVEROVICH",
        adm2: "SODIQOV ABROR BOXODIROVICH",
      },
    },
    {
      uid: "ФЕР-6",
      plan: {
        limit: 140,
        smena: 24264736,
        ucell: 40,
      },
      user: {
        adm1: "ISROILOV TOLIBJON RASULJON O'G'LI ",
        adm2: "ASADBEK", // В оригинальном списке указано только имя
      },
    },
    {
      uid: "ФЕР-7",
      plan: {
        limit: 120,
        smena: 29694359,
        ucell: 40,
      },
      user: {
        adm1: "SODIQOV ASHRAF BAXODIROVICH",
        adm2: "НОВЫЙ СОТРУДНИК", // В оригинальном списке указано так
      },
    },
    {
      uid: "ФЕР-8",
      plan: {
        limit: 151,
        smena: 43563588,
        ucell: 40,
      },
      user: {
        adm1: "MAXMUDOV LAZIZ ELYOROVICH",
        adm2: "AHMADJONOV BAXROMJON BEGMARDON O'G'LI ",
        adm3: "SALIYEVA SAMIRA ALISHEROVNA",
      },
    },
    {
      uid: "ЯМГ-1",
      plan: {
        limit: 173,
        smena: 19810000,
        ucell: 20,
      },
      user: {
        adm1: "NABIYEV AXADJON ALIDJONOVICH",
        adm2: "HALIMJONOV HAMIDULLO XADIYATULLO O'G'LI ",
      },
    },
  ],
};
let dataOld = {
  otabek: [
    {
      uid: "КВА-1",
      plan: {
        limit: 119,
        smena: 31919335,
        ucell: 20,
      },
      user: { adm1: " ADHAMOVA DILNAVOZ AKMALJON QIZI 0", adm2: " " },
    },
    {
      uid: "КУВ-1",
      plan: {
        limit: 187,
        smena: 41562504,
        ucell: 40,
      },
      user: {
        mng: " RUSTAMOV DOSTONJON RAVSHANJON O`G`LI 0",
        adm1: " DJEMILOV SEYRAN ENVEROVICH 0",
        adm2: " XAMIDOVA NIGINABONU SHUHRATJON QIZI 0",
        adm3: " NAZIRIDINOV DOSTON FARXODOVICH 0",
      },
    },
    {
      uid: "МРГ-1",
      plan: {
        limit: 400,
        smena: 92594016,
        ucell: 50,
      },
      user: {
        adm1: " SATTOROVA NAZIRA NURMAT QIZI 0",
        adm2: " YUSIBEKOV ELYOR MAVLONBEK O'G'LI 0",
        adm3: " G'IYOSOV DILNURBEK ULUG'BEK O'G'LI 0",
        adm4: " RAXIMDJANOV DMITRIY ALEKSEYEVICH 0",
        mfu: " CHORIYEV JALOLIDDIN JAXONGIR O'G'LI 0",
      },
    },
    {
      uid: "МРГ-2",
      plan: {
        limit: 229,
        smena: 53190092,
        ucell: 40,
      },
      user: {
        adm1: " XALIMJONOV HAYOTTULLO XADIYATULLO O'G'LI 0",
        adm2: " EGAMBERDIYEV ELYORBEK ERKINJON O'G'LI 0",
        adm3: " KAMOLOV ABBOSXON AZIMJON O'G'LI 0",
      },
    },
    {
      uid: "ТЛК-1",
      plan: {
        limit: 169,
        smena: 17489981,
        ucell: 20,
      },
      user: {
        adm1: " TO'XTANAZAROV MURODIL MAXSUDJON O'G'LI 0",
        adm2: " ARIPOVA SAYYORAXON ABDIKOXOROVNA 0",
      },
    },
    {
      uid: "ФЕР-10",
      plan: {
        limit: 109,
        smena: 29895573,
        ucell: 40,
      },
      user: {
        adm1: " DAVLETSHIN ALEKSANDR SALAVATOVICH 0",
        adm2: " SHATS YURIY ALEKSANDROVICH 0",
      },
    },
    {
      uid: "ФЕР-13",
      plan: {
        limit: 164,
        smena: 17489981,
        ucell: 29,
      },
      user: {
        adm1: " TOJIDDINOV ABDURASHID DILSHOD O'G'LI 0",
        adm2: " NURMUHAMMAD 0",
      },
    },
    {
      uid: "ФЕР-14",
      plan: {
        limit: 189,
        smena: 28443247,
        ucell: 20,
      },
      user: {
        adm1: " ALIYEVA AZIZABONU ADXAMJON QIZI 0",
        adm2: " SHOKIRJONOV ISLOMBEK 0",
      },
    },
    {
      uid: "ФЕР-15",
      plan: {
        limit: 112,
        smena: 24907147,
        ucell: 40,
      },
      user: {
        adm1: " TOIROVA ZIYODAXON QAHRAMON QIZI 0",
        adm2: " ABDURASULOVA ELINA BAXTIYORJONOVNA 0",
      },
    },
    {
      uid: "ФЕР-4",
      plan: {
        limit: 179,
        smena: 38442982,
        ucell: 40,
      },
      user: {
        adm1: " SHUKUROVA SUG‘DIYONA SULTONBEK QIZI 0",
        adm2: " PIGASOVA VIKTORIYA OLEGOVNA 0",
        adm3: " BELOV DMITRIY YUREVICH 0",
      },
    },
    {
      uid: "ФЕР-5",
      plan: {
        limit: 252,
        smena: 32765851,
        ucell: 50,
      },
      user: {
        adm1: " ISROILOV TOLIBJON RASULJON O'G'LI 0",
        adm2: " SODIQOV ABROR BOXODIROVICH 0",
        mfu: " ABDURAXIMOV AZIZBEK SHERZOD O'G'LI 0",
      },
    },
    {
      uid: "ФЕР-6",
      plan: {
        limit: 121,
        smena: 17489981,
        ucell: 50,
      },
      user: {
        adm1: " OXONJONOV BILOL MALIK ABDUMALIK O`G`LI 0",
        adm2: " SUPIEVA DILSHODA TOXIROVNA 0",
      },
    },
    {
      uid: "ФЕР-7",
      plan: {
        limit: 118,
        smena: 17489981,
        ucell: 40,
      },
      user: {
        adm1: " SODIQOV ASHRAF BAXODIROVICH 0",
        adm2: " AZIMOV ILHOMJON RAVSHANJON O’GLI 0",
      },
    },
    {
      uid: "ФЕР-8",
      plan: {
        limit: 161,
        smena: 17489981,
        ucell: 50,
      },
      user: {
        adm1: " MAXMUDOV LAZIZ ELYOROVICH 0",
        adm2: " AHMADJONOV BAXROMJON BEGMARDON O'G'LI 0",
        adm3: " SALIYEVA SAMIRA ALISHEROVNA 0",
      },
    },
    {
      uid: "ЯМГ-1",
      plan: {
        limit: 169,
        smena: 17489981,
        ucell: 20,
      },
      user: {
        adm1: " NABIYEV AXADJON ALIDJONOVICH 0",
        adm2: " HALIMJONOV HAMIDULLO XADIYATULLO O'G'LI 0",
      },
    },
  ],
};
export default data;
