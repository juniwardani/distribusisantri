// script.js

// Data yang diberikan dalam format JSON
const data = [
    {
        "NAMA": "AZKA RAYYAN AGFA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "ANDI RIZKI DAFA RAMADHAN",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "SYAQILA SALSABILA SETIAWAN",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "ANDI AISYAH AYUDIA INARA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "MUHAMMAD FAHMI RAMADHAN",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "ARIANSYAH",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "SITI MAYSAROH",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "AKHMAD VIQRI SAPUTRA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ SOFYAN",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "MUHAMMAD TUBAGUS INDRA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ HAIDIR",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "MUHAMMAD FARIS RAMADHAN",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD FAJAR ALFANDI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "GUSTI ALI M AR RAYYAN",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "SYAILLA NUR RAMADHANI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ALLYSA HASYA AFIQAH",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "LINGGA DANISH AMINUDIN PURWANTO",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ZAKIA ANIQ MUFLIHAH",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD LUTFAN ABID",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ACHMAD SIDIQ ASSAM",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ANDRA HARIYADI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD KHAFID ALKHALIF",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ANANDITHA ASSYABIYA ISLAMI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD LUTH NAUSHADAZKA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD AMIN KUTBI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "M. ROYYAN KHIAR ABQORY",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD ZAUFAN ALL BAKRIE",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "M.AZKA APRILIO ADINATA PRASETYA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "DHAFITHA ZAYDA ALWI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD ROYYANDI",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "SITI ALYA HUMAIRO",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD AKBAR SAFARUDIN",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "GERRAD NAUVALAZKA",
        "PEMBIMBING AWAL": "JUNI WARDANI",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "PUTRI NUR ASSIFA.",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AMIRA SYIFA AZ ZAHRA",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD ZIKRIE.  ",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "JAUDAH.",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "KHAIRA LUBNA ALTHAFUNNISA",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD FIKRI.  ",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD DZAKI AFFANDI.",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "NADINE MIKAYLA SANDRIA.  ",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "INDRA MAULANA",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD AL FATIH.  ",
        "PEMBIMBING AWAL": "USTADZ BAHAUDIN",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "FAIZ HAZMI ANWARI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "AHMAD AZRIL RAZZAN RAHMATULLAH",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "AZKIA FILZIA PUTRI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "MAULIDA FEBRIANI PUTRI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "BARKATUL AULYA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "AHMAD GALIH PRIHANDOWO",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "NUR ATHIFAH",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "ALIFA FATHIYYA HAMZAH",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "DHAFIN ARYA ROSADI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "NUR 'AINA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "NUR ALIYA TABINA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M. DAFFA ARYA GHOSSAN",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "RAIHAN FERDIAN",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AGHNINA CARIESYA SIBARANI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "RUWAIDA FATIMAH RAHMADANI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AZIZAH NUR APRILIANI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "HIDAYATUL AZKIA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ZAFRAN YAPIQ",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "JIHAN MAULIDA AZKIA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ZIKRA AMALIA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "KA'AB AHMAD BUSTANI NUR",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "DARIN ADELLIA AZ-ZAHRA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "FAQIH GHANI KHAIRI",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "GUSTI ALIFIA KIRANA",
        "PEMBIMBING AWAL": "USTADZ SYARIF",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "M. DAFFA NURRAMDANI",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "GHAAZIYA LUBNAYYA",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "MUHAMMAD MUHAJIR ANSHORY",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ HUSSAINI",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "RAIHAN NURFAIZ",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ HUSSAINI",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "M. NOR RAHMAN",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "M.HUSEIN ALFANI",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ SOFYAN",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "SAID FAUZAN ROSIDI",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ SOFYAN",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "SELVIA KHAIRUN ASPIA",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID QURAN"
    },
    {
        "NAMA": "SAN ALI AHMAD",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ALYA IMANI",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "NABILA AFIQOH",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "ZULFA HUMAIRA",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD FAHMI RAMADHAN",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD RAFKA FAIZAR",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "⁠FATIH YASIR MUBAROK",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "FATIMAH AL KHAIROH",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "NUR EFMA WAHIDHA",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "FALYA ALIFA INDRAYANA",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "KAYLA NURIYA RAHMAN",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD AFDILLAH",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "AISYAH AFIFA A.",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "INDRA LESMANA",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "SIRHAN FIKRI ROSIDI",
        "PEMBIMBING AWAL": "USTADZ TAHMID",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "MUHAMMAD ROHIID AL ANIS",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "⁠MUHAMMAD ABISAR",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "⁠IQBAL MURISKI",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "KAYLA ATIIQAH SARI",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD HUD AR RAYYAN",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "⁠AISYAH RAIHANAH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M. ZAINI ALFAT",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "KHALISA PUTRI",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "WIRDA HALIMATUS SA'DIAH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M. IQRAM SYARIF",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "SYAFIRA ALFATHUNNISA",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ALTHAF BASYA MISYARAJA",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD IRSYAN GAZALI",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "NADHIFA AYU FAIQAH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "NADA NURANI ALIANSYAH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AISYAH AQILAH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ALIFA AZ-ZAHRA",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AHMAD NAZAMUDDIN",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ALESHA KAYLA NADHIFA",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AHMAD ZAIEN WAFA",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AYSHA RAMADANI",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD RAIHAN HAFIZH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "ALFARIZKY MELAN PRATAMA",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "ZAINAL ILMI",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD HAIKAL BAGUS",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "FAJRIANSYAH",
        "PEMBIMBING AWAL": "USTADZAH ANA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "WIRDA NUR HASANAH",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "NUR AISYAH HUMAIRA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "M. MAHASIN NOVAL",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD MIRZA ALIANDRA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M. KAHFI ARRAHMAN",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MAULANA MALIK IBRAHIM",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD ADELIO BRAMASTA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "FAQIH NAZRIL KHALIF",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "ABDU RAHDIKA NAHRY",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "AHMAD AL FATIH NUR ADABI",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD UMAR ZAFLAN",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "SYAHILA AZMI",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "NUR RAZIBVIA HANDAYANI",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M. RASYID RAIHAN",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "KHAIRUL SAPUTRA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M. SULTHAN MALIK",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "ARUNA GHAISAN",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "GT. DAFA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "QONITA HANIFA ALMAHIRA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "ALSYAH NUR ALMIRA",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "M. ZAYD RYS ALGHIFARI",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "ALIFAH RAHMANTI PUTRI",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "M. AL FATIH",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "IZZFAHIM ANAQI",
        "PEMBIMBING AWAL": "USTADZAH ASTRID",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "GUSTI KHALID RAHMAN SADI'",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "KUMALA AFIFA NAHDA RAFANDA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "NUR AULIA SAFITRI",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "RIZKY NUR AQILLA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "AYSHA NABILA PRANTAU",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "NAYSILLA NUR MAYDINI",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "ALMIRA ZHAPIRA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "KHUMAIRA PUTRI ASY'ARI      ",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "ALISHA NAILA MIZA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M.HAFIZH FATURRAHMAN",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "RAYA NOVITASARI",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "AKIFAH NAYLA NURHIJRAH",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD RAYHAN",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "ALIFA AZKA DINA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "SARAH AZMIRA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "MUHAMMAD AZKA RANENDRA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "FATIA AULIA ANNISA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "NATANIA AISYAH NUHA ZAHIRA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "AMALIA PUTRI",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "SITI FADILLAH",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "FAUZA NUR RIZKY",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "BILQIS KHAIRUNNISA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "MUHAMMAD NAUFAL FAEYZA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "MUHAMMAD ALZHAFRAN FARDILA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD ALFAT KHAIRY",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ABDILLAH ALGHIFARI IBERAHIM",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M. AQSAN MUSYAFA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUTIA NUR AZZAHRA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD AZHAR ALRISAM",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD AIDIL SYAFE'I",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "RAESHA YUMNA ADZKIA",
        "PEMBIMBING AWAL": "USTADZAH DIAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "M. ZAKY RAMADHAN",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "FATHIN AULIA",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "M. LUTHFI SAPUTRA",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "ALIFIA NAVISHA",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "SYARIFAH SHIDQIYA",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "M. ARKHAN R.",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "ALI RAYYAN RIZKY",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "AFFABIAN MUSYAFA AHMAD",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "AFIQAH NAILA",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "M. ARFAN",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "M. RIFDHIL ARHAMY",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "NUR MIFTAHUL JANNAH",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M. MAHDI YUSUF",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M. ABYAN ARJUNA PASURA",
        "PEMBIMBING AWAL": "USTADZAH DINDA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "ABDULLAH ARAFAT ATTA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "RISKA NUR BAINAH",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "MUHAMMAD ALFA RIZQI  ",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "⁠ARKAAN HARITH HAFI",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "ZAINA ALIFAH",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID I"
    },
    {
        "NAMA": "MUHAMMAD ALTHAF HAFIZY",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "FAHRIL RIZKY PRATAMA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "REYNA AURELIA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD ADEB AL GAZALI",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "NAFISA SHARIN NASYWA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "HAFIZAH NUR AULIA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD ARKHA AL FAIRUZT",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD ARIF FADIL",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "⁠MUHAMMAD TSAQIB HERSYA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "TRIYANA SAFITRI",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "RINDANG RIZKI ANANDA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "M. ALI ZABER",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "⁠RENDRA MAHARDIKA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "RAISA DINAR",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "AYANA MUKHBITA MARYAM",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "RAYYA STARLA ADZKADINA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "MUHAMMAD SAKHA AT THAHIR RAMADHAN",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "HAVA HARAIDAN SAFIRA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "AHMAD ZAINI DAHLAN",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "RUSNI ADAM",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "RAIHANA AINUN MARDIAH",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M.HAUFANHAZZA ABQORY",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M. AZKA PUTRA",
        "PEMBIMBING AWAL": "USTADZAH EVI",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "FEBRIYANI",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "M. ALMAN. B",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH DINDA",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "MUHAMMAD ARSHAD AL FATIH ASTADIWANGSA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "RAFFA MULYATAMA SARAGIH",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "ANDI ARSYILA HUMAIRA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "ALMAIRA NURFAUZIAH",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH EVI",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "RULITA AZZAHRA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH DIAH",
        "STATUS": "JILID II"
    },
    {
        "NAMA": "RAISYA NUR AQIFA NAYLA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "NAILA AZKADINA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "NUR AMELIA NAZIHA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "FAYZA ANNISA FITRIA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ SYARIF",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "AHMAD RAFFASYA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "NUR AFIFAH",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "M. FADILLAH RAMLAN",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "MUHAMMAD YUSUF",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID III"
    },
    {
        "NAMA": "KIOSI ALTAF",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "ZHAFIRA RASYIFA SALWA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "SASKIA ANASTASYA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD ZAIDAN RAHMAN",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "PUTRI NABILA AZZAHRA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "FAUZIAH",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "SITI AISYAH",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "MUHAMMAD YUSUF RACHMAN",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "HAFIDZAH AZZAHRA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ THOHIR",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "AHMAD AL FARIZQI",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "NAZIA ARSYIFA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZ BAHAUDIN",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "ELSA RAIDA RAHMAWATI",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "⁠KEYRA ANDITA BALQIS",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "ARSY PUTRA FIRMANSYAH",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "NADHIRA IMADINA ADIBA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "AISHA ARSYIFA",
        "PEMBIMBING AWAL": "USTADZAH NISA",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID VI"
    },
    {
        "NAMA": "",
        "PEMBIMBING AWAL": "",
        "PEMBIMBING BARU": "",
        "STATUS": ""
    },
    {
        "NAMA": "NAMA",
        "PEMBIMBING AWAL": "PEMBIMBING AWAL",
        "PEMBIMBING BARU": "PEMBIMBING BARU",
        "STATUS": "STATUS"
    },
    {
        "NAMA": "MUHAMMAD AL FATIH RAMADHAN",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ADELIA ZAHRATUSSHOFA",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "M. REZA EFANSYAH",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "MUHAMMAD HABIBIE",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZAH SANAH",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ANISA AZAHRA",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "JUNI WARDANI",
        "STATUS": "JILID IV"
    },
    {
        "NAMA": "ALMEERA NURUL RASYADA",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZAH NISA",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AHMAD KEMAL REIS LIZUIRABIH",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "M.AZKA RIDLONI.                  ",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZAH SHALATIYAH",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "AKHMAD HABIBIE",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "MUHAMMAD NABIL ASY ARI",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    },
    {
        "NAMA": "HAFI AHMAD SUBAKTI",
        "PEMBIMBING AWAL": "USTADZAH SHALATIYAH",
        "PEMBIMBING BARU": "USTADZ TAHMID",
        "STATUS": "JILID V"
    }
];

// Fungsi untuk memuat konten ke dalam elemen HTML
function loadContent() {
    // Mengubah data menjadi HTML
    const content = data.map(item => {
        // Cek jika item adalah "ANDI RIZKI DAFA RAMADHAN" untuk menambahkan kelas khusus
        const rowClass = item.NAMA === "NAMA" ? "special-row" : "";
        
        return `
            <tr class="${rowClass}">
                <td>${item.NAMA.trim()}</td>
                <td>${item["PEMBIMBING AWAL"].trim()}</td>
                <td>${item["PEMBIMBING BARU"].trim()}</td>
                <td>${item.STATUS.trim()}</td>
            </tr>
        `;
    }).join('');

    // Membuat tabel untuk menampilkan data
    const tableHTML = `
        <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: left;">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Pembimbing Awal</th>
                    <th>Pembimbing Baru</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                ${content}
            </tbody>
        </table>
    `;

    // Menyisipkan tabel ke dalam elemen dengan ID distribusiContent
    document.getElementById('distribusiContent').innerHTML = tableHTML;
}
