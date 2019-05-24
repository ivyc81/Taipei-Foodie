function parseSvg(){
  const obj = {};
  const arr = oldSVG.all.split('</text>');
  // console.log(arr)

  for(let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i].split(/<|>/);
    const coor = arr[i][1].split(' ');
    const [y, ycoord] = coor[1].split('=');
    const [x, xcoord] = coor[2].split('=');
    const name = arr[i][4];

    nameList[name]?
    obj[nameList[name]] = {y: eval(ycoord), x: eval(xcoord), name:nameList[name], chineseName: name} : console.log('@@@name@@@',name);
  }
  debugger;
  // console.log(nameList)
  // console.log(obj)
  // debugger;
  return obj;
}

export const stations = {
  "Ximen": {
    "y": "637.11798",
    "x": "433.18942",
    "name": "Ximen",
    "chineseName": "西門"
  },
  "Beimen": {
    "y": "550.8833",
    "x": "410.22095",
    "name": "Beimen",
    "chineseName": "北門"
  },
  "Xiaonanmen": {
    "y": "749.21527",
    "x": "369.95615",
    "name": "Xiaonanmen",
    "chineseName": "小南門"
  },
  "Chiang Kai-Shek Memorial Hall": {
    "y": "775.84534",
    "x": "451.32596",
    "name": "Chiang Kai-Shek Memorial Hall",
    "chineseName": "中正紀念堂"
  },
  "Guting": {
    "y": "808.16486",
    "x": "536.74695",
    "name": "Guting",
    "chineseName": "古亭"
  },
  "Dongmen": {
    "y": "736.8255",
    "x": "600.24542",
    "name": "Dongmen",
    "chineseName": "東門"
  },
  "National Taiwan University Hospital": {
    "y": "705.44763",
    "x": "547.79901",
    "name": "National Taiwan University Hospital",
    "chineseName": "台大醫院"
  },
  "Daan": {
    "y": "736.00128",
    "x": "763.86212",
    "name": "Daan",
    "chineseName": "大安"
  },
  "Zhongshan": {
    "y": "541.14478",
    "x": "547.97675",
    "name": "Zhongshan",
    "chineseName": "中山"
  },
  "Shuanglian": {
    "y": "505.39972",
    "x": "549.09277",
    "name": "Shuanglian",
    "chineseName": "雙連"
  },
  "Minquan West Road": {
    "y": "436.69766",
    "x": "549.69098",
    "name": "Minquan West Road",
    "chineseName": "民權西路"
  },
  "Zhongshan Elementary School": {
    "y": "460.03207",
    "x": "649.84418",
    "name": "Zhongshan Elementary School",
    "chineseName": "中山國小"
  },
  "Xingtian Temple": {
    "y": "505.16479",
    "x": "654.07062",
    "name": "Xingtian Temple",
    "chineseName": "行天宮"
  },
  "Songjiang Nanjing": {
    "y": "541.08911",
    "x": "653.99438",
    "name": "Songjiang Nanjing",
    "chineseName": "松江南京"
  },
  "Taipei Main": {
    "y": "671.07532",
    "x": "461.79898",
    "name": "Taipei Main",
    "chineseName": "台北車站"
  },
  "Zhongxiao Xinsheng": {
    "y": "637.1424",
    "x": "651.51514",
    "name": "Zhongxiao Xinsheng",
    "chineseName": "忠孝新生"
  },
  "Shandao Temple": {
    "y": "637.06818",
    "x": "562.62433",
    "name": "Shandao Temple",
    "chineseName": "善導寺"
  },
  "Zhongxiao Fuxing": {
    "y": "636.77814",
    "x": "760.10809",
    "name": "Zhongxiao Fuxing",
    "chineseName": "忠孝復興"
  },
  "Nanjing Fuxing": {
    "y": "541.06415",
    "x": "763.4458",
    "name": "Nanjing Fuxing",
    "chineseName": "南京復興"
  },
  "Daqiaotou": {
    "y": "471.31891",
    "x": "437.06668",
    "name": "Daqiaotou",
    "chineseName": "大橋頭"
  },
  "Gongguan": {
    "y": "876.20984",
    "x": "665.88202",
    "name": "Gongguan",
    "chineseName": "公館"
  },
  "Taipower Building": {
    "y": "840.13782",
    "x": "637.88348",
    "name": "Taipower Building",
    "chineseName": "台電大樓"
  },
  "Jingmei": {
    "y": "950.12885",
    "x": "673.94354",
    "name": "Jingmei",
    "chineseName": "景美"
  },
  "Wanlong": {
    "y": "910.18872",
    "x": "673.67352",
    "name": "Wanlong",
    "chineseName": "萬隆"
  },
  "Qizhang": {
    "y": "1029.9038",
    "x": "673.83557",
    "name": "Qizhang",
    "chineseName": "七張"
  },
  "Xiaobitan": {
    "y": "1030.1108",
    "x": "551.67468",
    "name": "Xiaobitan",
    "chineseName": "小碧潭"
  },
  "Xindian": {
    "y": "1110.1738",
    "x": "678.84503",
    "name": "Xindian",
    "chineseName": "新店"
  },
  "Xindian District Office": {
    "y": "1068.4447",
    "x": "673.94354",
    "name": "Xindian District Office",
    "chineseName": "新店區公所"
  },
  "Dapinglin": {
    "y": "990.13782",
    "x": "673.97955",
    "name": "Dapinglin",
    "chineseName": "大坪林"
  },
  "Yongan Market": {
    "y": "900.16486",
    "x": "413.50873",
    "name": "Yongan Market",
    "chineseName": "永安市場"
  },
  "Dingxi": {
    "y": "855.05682",
    "x": "494.64236",
    "name": "Dingxi",
    "chineseName": "頂溪"
  },
  "Nanshijiao": {
    "y": "990.11078",
    "x": "343.09006",
    "name": "Nanshijiao",
    "chineseName": "南勢角"
  },
  "Jingan": {
    "y": "945.16486",
    "x": "404.91272",
    "name": "Jingan",
    "chineseName": "景安"
  },
  "Yuanshan": {
    "y": "405.95996",
    "x": "551.93604",
    "name": "Yuanshan",
    "chineseName": "圓山"
  },
  "Jiantan": {
    "y": "363.1741",
    "x": "551.82806",
    "name": "Jiantan",
    "chineseName": "劍潭"
  },
  "Qilian": {
    "y": "140.11081",
    "x": "547.49506",
    "name": "Qilian",
    "chineseName": "唭哩岸"
  },
  "Shipai": {
    "y": "180.11981",
    "x": "551.86401",
    "name": "Shipai",
    "chineseName": "石牌"
  },
  "Mingde": {
    "y": "225.10181",
    "x": "550.19501",
    "name": "Mingde",
    "chineseName": "明德"
  },
  "Zhishan": {
    "y": "270.16483",
    "x": "550.66296",
    "name": "Zhishan",
    "chineseName": "芝山"
  },
  "Shilin": {
    "y": "315.14682",
    "x": "550.68097",
    "name": "Shilin",
    "chineseName": "士林"
  },
  "Qiyan": {
    "y": "100.11081",
    "x": "516.71997",
    "name": "Qiyan",
    "chineseName": "奇岩"
  },
  "Guandu": {
    "y": "90.15582",
    "x": "236.24303",
    "name": "Guandu",
    "chineseName": "關渡"
  },
  "Zhongyi": {
    "y": "90.14765",
    "x": "301.68402",
    "name": "Zhongyi",
    "chineseName": "忠義"
  },
  "Fuzinggang": {
    "y": "90.11081",
    "x": "358.3382",
    "name": "Fuzinggang",
    "chineseName": "復興崗"
  },
  "Beitou": {
    "y": "95.1018",
    "x": "456.77402",
    "name": "Beitou",
    "chineseName": "北投"
  },
  "Zhuwei": {
    "y": "90.12882",
    "x": "172.21501",
    "name": "Zhuwei",
    "chineseName": "竹圍"
  },
  "Xinbeitou": {
    "y": "40.1558",
    "x": "422.68402",
    "name": "Xinbeitou",
    "chineseName": "新北投"
  },
  "Danshui": {
    "y": "90.11699",
    "x": "41.612019",
    "name": "Danshui",
    "chineseName": "淡水"
  },
  "Hongshulin": {
    "y": "90.13556",
    "x": "97.61203",
    "name": "Hongshulin",
    "chineseName": "紅樹林"
  },
  "Sanchong Elementary School": {
    "y": "410.05682",
    "x": "403.44998",
    "name": "Sanchong Elementary School",
    "chineseName": "三重國小"
  },
  "Sanhe Junior High School": {
    "y": "365.11081",
    "x": "358.49182",
    "name": "Sanhe Junior High School",
    "chineseName": "三和國中"
  },
  "St. Ignatius High School": {
    "y": "320.12881",
    "x": "314.29517",
    "name": "St. Ignatius High School",
    "chineseName": "徐匯中學"
  },
  "Sanmin Senior High School": {
    "y": "275.11084",
    "x": "268.49182",
    "name": "Sanmin Senior High School",
    "chineseName": "三民高中"
  },
  "Luzhou": {
    "y": "230.11981",
    "x": "224.07402",
    "name": "Luzhou",
    "chineseName": "蘆洲"
  },
  "Taipei Bridge": {
    "y": "495.16479",
    "x": "326.33112",
    "name": "Taipei Bridge",
    "chineseName": "台北橋"
  },
  "Cailiao": {
    "y": "535.16113",
    "x": "304.35358",
    "name": "Cailiao",
    "chineseName": "菜寮"
  },
  "Sanchong": {
    "y": "575.36279",
    "x": "264.65634",
    "name": "Sanchong",
    "chineseName": "三重"
  },
  "Xianse Temple": {
    "y": "615.13782",
    "x": "207.18687",
    "name": "Xianse Temple",
    "chineseName": "先嗇宮"
  },
  "Touqianzhuang": {
    "y": "655.11084",
    "x": "166.55107",
    "name": "Touqianzhuang",
    "chineseName": "頭前庄"
  },
  "Xinzhuang": {
    "y": "695.14679",
    "x": "144.5864",
    "name": "Xinzhuang",
    "chineseName": "新莊"
  },
  "Fu Jen University": {
    "y": "735.11981",
    "x": "104.49707",
    "name": "Fu Jen University",
    "chineseName": "輔大"
  },
  "Danfeng": {
    "y": "774.63385",
    "x": "64.24645",
    "name": "Danfeng",
    "chineseName": "丹鳳"
  },
  "Huilong": {
    "y": "815.13782",
    "x": "24.370008",
    "name": "Huilong",
    "chineseName": "迴龍"
  },
  "Longshan Temple": {
    "y": "670.13782",
    "x": "300.67969",
    "name": "Longshan Temple",
    "chineseName": "龍山寺"
  },
  "Jiangzicui": {
    "y": "699.99969",
    "x": "270.69897",
    "name": "Jiangzicui",
    "chineseName": "江子翠"
  },
  "Xinpu": {
    "y": "730.17999",
    "x": "258.45038",
    "name": "Xinpu",
    "chineseName": "新埔"
  },
  "Banciao": {
    "y": "760.11981",
    "x": "228.29649",
    "name": "Banciao",
    "chineseName": "板橋"
  },
  "Fuzhong": {
    "y": "790.17383",
    "x": "199.54424",
    "name": "Fuzhong",
    "chineseName": "府中"
  },
  "Haishan": {
    "y": "850.16486",
    "x": "139.67754",
    "name": "Haishan",
    "chineseName": "海山"
  },
  "Far Eastern Hospital": {
    "y": "820.20081",
    "x": "132.34241",
    "name": "Far Eastern Hospital",
    "chineseName": "亞東醫院"
  },
  "Tucheng": {
    "y": "880.10181",
    "x": "108.30154",
    "name": "Tucheng",
    "chineseName": "土城"
  },
  "Yongning": {
    "y": "910.17944",
    "x": "78.990013",
    "name": "Yongning",
    "chineseName": "永寧"
  },
  "Nanjing Sanmin": {
    "y": "541.01184",
    "x": "953.54907",
    "name": "Nanjing Sanmin",
    "chineseName": "南京三民"
  },
  "Songshan": {
    "y": "541.11987",
    "x": "1052.386",
    "name": "Songshan",
    "chineseName": "松山"
  },
  "Taipei Arena": {
    "y": "540.88586",
    "x": "849.16205",
    "name": "Taipei Arena",
    "chineseName": "台北小巨蛋"
  },
  "Xinyi Anhe": {
    "y": "735.99225",
    "x": "819.28705",
    "name": "Xinyi Anhe",
    "chineseName": "信義安和"
  },
  "Taipei 101/World Trade Center": {
    "y": "735.07428",
    "x": "914.83228",
    "name": "Taipei 101/World Trade Center",
    "chineseName": "台北101/世貿"
  },
  "Xiangshan": {
    "y": "736.02576",
    "x": "1047.2061",
    "name": "Xiangshan",
    "chineseName": "象山"
  },
  "Zhongxiao Dunhua": {
    "y": "673.41614",
    "x": "803.80103",
    "name": "Zhongxiao Dunhua",
    "chineseName": "忠孝敦化"
  },
  "Taipei City Hall": {
    "y": "673.44312",
    "x": "937.69305",
    "name": "Taipei City Hall",
    "chineseName": "市政府"
  },
  "Houshanpi": {
    "y": "673.36212",
    "x": "1037.7379",
    "name": "Houshanpi",
    "chineseName": "後山埤"
  },
  "Sun Yat-Sen Memorial Hall": {
    "y": "636.77814",
    "x": "854.47705",
    "name": "Sun Yat-Sen Memorial Hall",
    "chineseName": "國父紀念館"
  },
  "Yongchun": {
    "y": "636.83209",
    "x": "996.70203",
    "name": "Yongchun",
    "chineseName": "永春"
  },
  "Kunyang": {
    "y": "636.82928",
    "x": "1101.135",
    "name": "Kunyang",
    "chineseName": "昆陽"
  },
  "Nangang": {
    "y": "673.40375",
    "x": "1151.432",
    "name": "Nangang",
    "chineseName": "南港"
  },
  "Taipei Nangang Exhibition": {
    "y": "655.1828",
    "x": "1233.6052",
    "name": "Taipei Nangang Exhibition",
    "chineseName": "南港展覽館"
  },
  "Liuzhanli": {
    "y": "865.07483",
    "x": "763.75177",
    "name": "Liuzhanli",
    "chineseName": "六張犁"
  },
  "Technology Building": {
    "y": "810.11084",
    "x": "764.00378",
    "name": "Technology Building",
    "chineseName": "科技大樓"
  },
  "Xinhai": {
    "y": "970.89465",
    "x": "836.70203",
    "name": "Xinhai",
    "chineseName": "辛亥"
  },
  "Linguang": {
    "y": "955.0838",
    "x": "746.90002",
    "name": "Linguang",
    "chineseName": "麟光"
  },
  "Wanfang Community": {
    "y": "970.89465",
    "x": "978.60303",
    "name": "Wanfang Community",
    "chineseName": "萬芳社區"
  },
  "Taipei Zoo": {
    "y": "970.83777",
    "x": "1148.071",
    "name": "Taipei Zoo",
    "chineseName": "動物園"
  },
  "Muzha": {
    "y": "970.89111",
    "x": "1076.702",
    "name": "Muzha",
    "chineseName": "木柵"
  },
  "Wanfang Hospital": {
    "y": "970.89465",
    "x": "898.46808",
    "name": "Wanfang Hospital",
    "chineseName": "萬芳醫院"
  },
  "Zhongshan Junior High School": {
    "y": "490.11084",
    "x": "762.79779",
    "name": "Zhongshan Junior High School",
    "chineseName": "中山國中"
  },
  "Songshan Airport": {
    "y": "425.10181",
    "x": "763.96777",
    "name": "Songshan Airport",
    "chineseName": "松山機場"
  },
  "Gangqian": {
    "y": "361.91635",
    "x": "1006.657",
    "name": "Gangqian",
    "chineseName": "港墘"
  },
  "Xihu": {
    "y": "361.86685",
    "x": "931.80811",
    "name": "Xihu",
    "chineseName": "西湖"
  },
  "Jiannang Rd.": {
    "y": "361.88544",
    "x": "847.63904",
    "name": "Jiannang Rd.",
    "chineseName": "劍南路"
  },
  "Dazhi": {
    "y": "361.93887",
    "x": "781.73804",
    "name": "Dazhi",
    "chineseName": "大直"
  },
  "Neihu": {
    "y": "361.86685",
    "x": "1156.358",
    "name": "Neihu",
    "chineseName": "內湖"
  },
  "Dahu Park": {
    "y": "415.09283",
    "x": "1233.9292",
    "name": "Dahu Park",
    "chineseName": "大湖公園"
  },
  "Wende": {
    "y": "361.90286",
    "x": "1081.72",
    "name": "Wende",
    "chineseName": "文德"
  },
  "Donghu": {
    "y": "535.10181",
    "x": "1233.9652",
    "name": "Donghu",
    "chineseName": "東湖"
  },
  "Nangang Software park": {
    "y": "595.11084",
    "x": "1233.6052",
    "name": "Nangang Software park",
    "chineseName": "南港軟體園區"
  },
  "Huzhou": {
    "y": "475.11981",
    "x": "1233.6952",
    "name": "Huzhou",
    "chineseName": "葫洲"
  },
  "Daan Park": {
    "y": "775.79132",
    "x": "640.01575",
    "name": "Daan Park",
    "chineseName": "大安森林公園"
  },
  "Dingpu": {
    "y": "945.13782",
    "x": "44.622826",
    "name": "Dingpu",
    "chineseName": "頂埔"
  }
};



const oldSVG = {

  all :


 `<text y="637.11798" x="433.18942" fill="#bbb"><tspan y="637.11798" x="433.18942" text-align="start" line-height="125%">西門</tspan>
  </text>
  <text y="550.8833" x="410.22095" fill="#bbb"><tspan y="550.8833" x="410.22095" text-align="start" line-height="125%">北門</tspan>
  </text>
  <text y="749.21527" x="369.95615" fill="#bbb"><tspan y="749.21527" x="369.95615" text-align="start" line-height="125%">小南門</tspan>
  </text>
  <text y="775.84534" x="451.32596" fill="#bbb"><tspan y="775.84534" x="451.32596" text-align="start" line-height="125%">中正紀念堂</tspan>
  </text>
  <text y="808.16486" x="536.74695" fill="#bbb"><tspan y="808.16486" x="536.74695" text-align="start" line-height="125%">古亭</tspan>
  </text>
  <text y="736.8255" x="600.24542" fill="#bbb"><tspan y="736.8255" x="600.24542" text-align="start" line-height="125%">東門</tspan>
  </text>
  <text y="705.44763" x="547.79901" fill="#bbb"><tspan y="705.44763" x="547.79901" text-align="start" line-height="125%">台大醫院</tspan>
  </text>
  <text y="736.00128" x="763.86212" fill="#bbb"><tspan y="736.00128" x="763.86212" text-align="start" line-height="125%">大安</tspan>
  </text>
  <text y="541.14478" x="547.97675" fill="#bbb"><tspan y="541.14478" x="547.97675" text-align="start" line-height="125%">中山</tspan>
  </text>
  <text y="505.39972" x="549.09277" fill="#bbb"><tspan y="505.39972" x="549.09277" text-align="start" line-height="125%">雙連</tspan>
  </text>
  <text y="436.69766" x="549.69098" fill="#bbb"><tspan y="436.69766" x="549.69098" text-align="start" line-height="125%">民權西路</tspan>
  </text>
  <text y="460.03207" x="649.84418" fill="#bbb"><tspan y="460.03207" x="649.84418" text-align="start" line-height="125%">中山國小</tspan>
  </text>
  <text y="505.16479" x="654.07062" fill="#bbb"><tspan y="505.16479" x="654.07062" text-align="start" line-height="125%">行天宮</tspan>
  </text>
  <text y="541.08911" x="653.99438" fill="#bbb"><tspan y="541.08911" x="653.99438" text-align="start" line-height="125%">松江南京</tspan>
  </text>
  <text y="671.07532" x="461.79898" fill="#bbb"><tspan y="671.07532" x="461.79898" text-align="start" line-height="125%">台北車站</tspan>
  </text>
  <text y="637.1424" x="651.51514" fill="#bbb"><tspan y="637.1424" x="651.51514" text-align="start" line-height="125%">忠孝新生</tspan>
  </text>
  <text y="637.06818" x="562.62433" fill="#bbb"><tspan y="637.06818" x="562.62433" text-align="start" line-height="125%">善導寺</tspan>
  </text>
  <text y="636.77814" x="760.10809" fill="#bbb"><tspan y="636.77814" x="760.10809" text-align="start" line-height="125%">忠孝復興</tspan>
  </text>
  <text y="541.06415" x="763.4458" fill="#bbb"><tspan y="541.06415" x="763.4458" text-align="start" line-height="125%">南京復興</tspan>
  </text>
  <text y="471.31891" x="437.06668" fill="#bbb"><tspan y="471.31891" x="437.06668" text-align="start" line-height="125%">大橋頭</tspan>
  </text>
  <text y="876.20984" x="665.88202" fill="#bbb"><tspan y="876.20984" x="665.88202" text-align="start" line-height="125%">公館</tspan>
  </text>
  <text y="840.13782" x="637.88348" fill="#bbb"><tspan y="840.13782" x="637.88348" text-align="start" line-height="125%">台電大樓</tspan>
  </text>
  <text y="950.12885" x="673.94354" fill="#bbb"><tspan y="950.12885" x="673.94354" text-align="start" line-height="125%">景美</tspan>
  </text>
  <text y="910.18872" x="673.67352" fill="#bbb"><tspan y="910.18872" x="673.67352" text-align="start" line-height="125%">萬隆</tspan>
  </text>
  <text y="1029.9038" x="673.83557" fill="#bbb"><tspan y="1029.9038" x="673.83557" text-align="start" line-height="125%">七張</tspan>
  </text>
  <text y="1030.1108" x="551.67468" fill="#bbb"><tspan y="1030.1108" x="551.67468" text-align="start" line-height="125%">小碧潭</tspan>
  </text>
  <text y="1110.1738" x="678.84503" fill="#bbb"><tspan y="1110.1738" x="678.84503" text-align="start" line-height="125%">新店</tspan>
  </text>
  <text y="1068.4447" x="673.94354" fill="#bbb"><tspan y="1068.4447" x="673.94354" text-align="start" line-height="125%">新店區公所</tspan>
  </text>
  <text y="990.13782" x="673.97955" fill="#bbb"><tspan y="990.13782" x="673.97955" text-align="start" line-height="125%">大坪林</tspan>
  </text>
  <text y="900.16486" x="413.50873" fill="#bbb"><tspan y="900.16486" x="413.50873" text-align="start" line-height="125%">永安市場</tspan>
  </text>
  <text y="855.05682" x="494.64236" fill="#bbb"><tspan y="855.05682" x="494.64236" text-align="start" line-height="125%">頂溪</tspan>
  </text>
  <text y="990.11078" x="343.09006" fill="#bbb"><tspan y="990.11078" x="343.09006" text-align="start" line-height="125%">南勢角</tspan>
  </text>
  <text y="945.16486" x="404.91272" fill="#bbb"><tspan y="945.16486" x="404.91272" text-align="start" line-height="125%">景安</tspan>
  </text>
  <text y="405.95996" x="551.93604" fill="#bbb"><tspan y="405.95996" x="551.93604" text-align="start" line-height="125%">圓山</tspan>
  </text>
  <text y="363.1741" x="551.82806" fill="#bbb"><tspan y="363.1741" x="551.82806" text-align="start" line-height="125%">劍潭</tspan>
  </text>
  <text y="140.11081" x="547.49506" fill="#bbb"><tspan y="140.11081" x="547.49506" text-align="start" line-height="125%">唭哩岸</tspan>
  </text>
  <text y="180.11981" x="551.86401" fill="#bbb"><tspan y="180.11981" x="551.86401" text-align="start" line-height="125%">石牌</tspan>
  </text>
  <text y="225.10181" x="550.19501" fill="#bbb"><tspan y="225.10181" x="550.19501" text-align="start" line-height="125%">明德</tspan>
  </text>
  <text y="270.16483" x="550.66296" fill="#bbb"><tspan y="270.16483" x="550.66296" text-align="start" line-height="125%">芝山</tspan>
  </text>
  <text y="315.14682" x="550.68097" fill="#bbb"><tspan y="315.14682" x="550.68097" text-align="start" line-height="125%">士林</tspan>
  </text>
  <text y="100.11081" x="516.71997" fill="#bbb"><tspan y="100.11081" x="516.71997" text-align="start" line-height="125%">奇岩</tspan>
  </text>
  <text y="90.15582" x="236.24303" fill="#bbb"><tspan y="90.15582" x="236.24303" text-align="start" line-height="125%">關渡</tspan>
  </text>
  <text y="90.14765" x="301.68402" fill="#bbb"><tspan y="90.14765" x="301.68402" text-align="start" line-height="125%">忠義</tspan>
  </text>
  <text y="90.11081" x="358.3382" fill="#bbb"><tspan y="90.11081" x="358.3382" text-align="start" line-height="125%">復興崗</tspan>
  </text>
  <text y="95.1018" x="456.77402" fill="#bbb"><tspan y="95.1018" x="456.77402" text-align="start" line-height="125%">北投</tspan>
  </text>
  <text y="90.12882" x="172.21501" fill="#bbb"><tspan y="90.12882" x="172.21501" text-align="start" line-height="125%">竹圍</tspan>
  </text>
  <text y="40.1558" x="422.68402" fill="#bbb"><tspan y="40.1558" x="422.68402" text-align="start" line-height="125%">新北投</tspan>
  </text>
  <text y="90.11699" x="41.612019" fill="#bbb"><tspan y="90.11699" x="41.612019" text-align="start" line-height="125%">淡水</tspan>
  </text>
  <text y="90.13556" x="97.61203" fill="#bbb"><tspan y="90.13556" x="97.61203" text-align="start" line-height="125%">紅樹林</tspan>
  </text>
  <text y="410.05682" x="403.44998" fill="#bbb"><tspan y="410.05682" x="403.44998" text-align="start" line-height="125%">三重國小</tspan>
  </text>
  <text y="365.11081" x="358.49182" fill="#bbb"><tspan y="365.11081" x="358.49182" text-align="start" line-height="125%">三和國中</tspan>
  </text>
  <text y="320.12881" x="314.29517" fill="#bbb"><tspan y="320.12881" x="314.29517" text-align="start" line-height="125%">徐匯中學</tspan>
  </text>
  <text y="275.11084" x="268.49182" fill="#bbb"><tspan y="275.11084" x="268.49182" text-align="start" line-height="125%">三民高中</tspan>
  </text>
  <text y="230.11981" x="224.07402" fill="#bbb"><tspan y="230.11981" x="224.07402" text-align="start" line-height="125%">蘆洲</tspan>
  </text>
  <text y="495.16479" x="326.33112" fill="#bbb"><tspan y="495.16479" x="326.33112" text-align="start" line-height="125%">台北橋</tspan>
  </text>
  <text y="535.16113" x="304.35358" fill="#bbb"><tspan y="535.16113" x="304.35358" text-align="start" line-height="125%">菜寮</tspan>
  </text>
  <text y="575.36279" x="264.65634" fill="#bbb"><tspan y="575.36279" x="264.65634" text-align="start" line-height="125%">三重</tspan>
  </text>
  <text y="615.13782" x="207.18687" fill="#bbb"><tspan y="615.13782" x="207.18687" text-align="start" line-height="125%">先嗇宮</tspan>
  </text>
  <text y="655.11084" x="166.55107" fill="#bbb"><tspan y="655.11084" x="166.55107" text-align="start" line-height="125%">頭前庄</tspan>
  </text>
  <text y="695.14679" x="144.5864" fill="#bbb"><tspan y="695.14679" x="144.5864" text-align="start" line-height="125%">新莊</tspan>
  </text>
  <text y="735.11981" x="104.49707" fill="#bbb"><tspan y="735.11981" x="104.49707" text-align="start" line-height="125%">輔大</tspan>
  </text>
  <text y="774.63385" x="64.24645" fill="#bbb"><tspan y="774.63385" x="64.24645" text-align="start" line-height="125%">丹鳳</tspan>
  </text>
  <text y="815.13782" x="24.370008" fill="#bbb"><tspan y="815.13782" x="24.370008" text-align="start" line-height="125%">迴龍</tspan>
  </text>
  <text y="670.13782" x="300.67969" fill="#bbb"><tspan y="670.13782" x="300.67969" text-align="start" line-height="125%">龍山寺</tspan>
  </text>
  <text y="699.99969" x="270.69897" fill="#bbb"><tspan y="699.99969" x="270.69897" text-align="start" line-height="125%">江子翠</tspan>
  </text>
  <text y="730.17999" x="258.45038" fill="#bbb"><tspan y="730.17999" x="258.45038" text-align="start" line-height="125%">新埔</tspan>
  </text>
  <text y="760.11981" x="228.29649" fill="#bbb"><tspan y="760.11981" x="228.29649" text-align="start" line-height="125%">板橋</tspan>
  </text>
  <text y="790.17383" x="199.54424" fill="#bbb"><tspan y="790.17383" x="199.54424" text-align="start" line-height="125%">府中</tspan>
  </text>
  <text y="850.16486" x="139.67754" fill="#bbb"><tspan y="850.16486" x="139.67754" text-align="start" line-height="125%">海山</tspan>
  </text>
  <text y="820.20081" x="132.34241" fill="#bbb"><tspan y="820.20081" x="132.34241" text-align="start" line-height="125%">亞東醫院</tspan>
  </text>
  <text y="880.10181" x="108.30154" fill="#bbb"><tspan y="880.10181" x="108.30154" text-align="start" line-height="125%">土城</tspan>
  </text>
  <text y="910.17944" x="78.990013" fill="#bbb"><tspan y="910.17944" x="78.990013" text-align="start" line-height="125%">永寧</tspan>
  </text>
  <text y="541.01184" x="953.54907" fill="#bbb"><tspan y="541.01184" x="953.54907" text-align="start" line-height="125%">南京三民</tspan>
  </text>
  <text y="541.11987" x="1052.386" fill="#bbb"><tspan y="541.11987" x="1052.386" text-align="start" line-height="125%">松山</tspan>
  </text>
  <text y="540.88586" x="849.16205" fill="#bbb"><tspan y="540.88586" x="849.16205" text-align="start" line-height="125%">台北小巨蛋</tspan>
  </text>
  <text y="735.99225" x="819.28705" fill="#bbb"><tspan y="735.99225" x="819.28705" text-align="start" line-height="125%">信義安和</tspan>
  </text>
  <text y="735.07428" x="914.83228" fill="#bbb"><tspan y="735.07428" x="914.83228" text-align="start" line-height="125%">台北101/世貿</tspan>
  </text>
  <text y="736.02576" x="1047.2061" fill="#bbb"><tspan y="736.02576" x="1047.2061" text-align="start" line-height="125%">象山</tspan>
  </text>
  <text y="673.41614" x="803.80103" fill="#bbb"><tspan y="673.41614" x="803.80103" text-align="start" line-height="125%">忠孝敦化</tspan>
  </text>
  <text y="673.44312" x="937.69305" fill="#bbb"><tspan y="673.44312" x="937.69305" text-align="start" line-height="125%">市政府</tspan>
  </text>
  <text y="673.36212" x="1037.7379" fill="#bbb"><tspan y="673.36212" x="1037.7379" text-align="start" line-height="125%">後山埤</tspan>
  </text>
  <text y="636.77814" x="854.47705" fill="#bbb"><tspan y="636.77814" x="854.47705" text-align="start" line-height="125%">國父紀念館</tspan>
  </text>
  <text y="636.83209" x="996.70203" fill="#bbb"><tspan y="636.83209" x="996.70203" text-align="start" line-height="125%">永春</tspan>
  </text>
  <text y="636.82928" x="1101.135" fill="#bbb"><tspan y="636.82928" x="1101.135" text-align="start" line-height="125%">昆陽</tspan>
  </text>
  <text y="673.40375" x="1151.432" fill="#bbb"><tspan y="673.40375" x="1151.432" text-align="start" line-height="125%">南港</tspan>
  </text>
  <text y="655.1828" x="1233.6052" fill="#bbb"><tspan y="655.1828" x="1233.6052" text-align="start" line-height="125%">南港展覽館</tspan>
  </text>
  <text y="865.07483" x="763.75177" fill="#bbb"><tspan y="865.07483" x="763.75177" text-align="start" line-height="125%">六張犁</tspan>
  </text>
  <text y="810.11084" x="764.00378" fill="#bbb"><tspan y="810.11084" x="764.00378" text-align="start" line-height="125%">科技大樓</tspan>
  </text>
  <text y="970.89465" x="836.70203" fill="#bbb"><tspan y="970.89465" x="836.70203" text-align="start" line-height="125%">辛亥</tspan>
  </text>
  <text y="955.0838" x="746.90002" fill="#bbb"><tspan y="955.0838" x="746.90002" text-align="start" line-height="125%">麟光</tspan>
  </text>
  <text y="970.89465" x="978.60303" fill="#bbb"><tspan y="970.89465" x="978.60303" text-align="start" line-height="125%">萬芳社區</tspan>
  </text>
  <text y="970.83777" x="1148.071" fill="#bbb"><tspan y="970.83777" x="1148.071" text-align="start" line-height="125%">動物園</tspan>
  </text>
  <text y="970.89111" x="1076.702" fill="#bbb"><tspan y="970.89111" x="1076.702" text-align="start" line-height="125%">木柵</tspan>
  </text>
  <text y="970.89465" x="898.46808" fill="#bbb"><tspan y="970.89465" x="898.46808" text-align="start" line-height="125%">萬芳醫院</tspan>
  </text>
  <text y="490.11084" x="762.79779" fill="#bbb"><tspan y="490.11084" x="762.79779" text-align="start" line-height="125%">中山國中</tspan>
  </text>
  <text y="425.10181" x="763.96777" fill="#bbb"><tspan y="425.10181" x="763.96777" text-align="start" line-height="125%">松山機場</tspan>
  </text>
  <text y="361.91635" x="1006.657" fill="#bbb"><tspan y="361.91635" x="1006.657" text-align="start" line-height="125%">港墘</tspan>
  </text>
  <text y="361.86685" x="931.80811" fill="#bbb"><tspan y="361.86685" x="931.80811" text-align="start" line-height="125%">西湖</tspan>
  </text>
  <text y="361.88544" x="847.63904" fill="#bbb"><tspan y="361.88544" x="847.63904" text-align="start" line-height="125%">劍南路</tspan>
  </text>
  <text y="361.93887" x="781.73804" fill="#bbb"><tspan y="361.93887" x="781.73804" text-align="start" line-height="125%">大直</tspan>
  </text>
  <text y="361.86685" x="1156.358" fill="#bbb"><tspan y="361.86685" x="1156.358" text-align="start" line-height="125%">內湖</tspan>
  </text>
  <text y="415.09283" x="1233.9292" fill="#bbb"><tspan y="415.09283" x="1233.9292" text-align="start" line-height="125%">大湖公園</tspan>
  </text>
  <text y="361.90286" x="1081.72" fill="#bbb"><tspan y="361.90286" x="1081.72" text-align="start" line-height="125%">文德</tspan>
  </text>
  <text y="535.10181" x="1233.9652" fill="#bbb"><tspan y="535.10181" x="1233.9652" text-align="start" line-height="125%">東湖</tspan>
  </text>
  <text y="595.11084" x="1233.6052" fill="#bbb"><tspan y="595.11084" x="1233.6052" text-align="start" line-height="125%">南港軟體園區</tspan>
  </text>
  <text y="475.11981" x="1233.6952" fill="#bbb"><tspan y="475.11981" x="1233.6952" text-align="start" line-height="125%">葫洲</tspan>
  </text>
  <text x="640.01575" y="775.79132" fill="#bbb"><tspan x="640.01575" y="775.79132" text-align="start" line-height="125%">大安森林公園</tspan>
  </text>
  <text x="44.622826" y="945.13782" fill="#bbb"><tspan x="44.622826" y="945.13782" text-align="start" line-height="125%">頂埔</tspan>
  </text>`

};

const nameList ={
  小南門: "Xiaonanmen",
  古亭: "Guting",
  台電大樓: "Taipower Building",
  公館: "Gongguan",
  萬隆: "Wanlong",
  七張: "Qizhang",
  三和國中: "Sanhe Junior High School",
  三民高中: "Sanmin Senior High School",
  三重: "Sanchong",
  三重國小: "Sanchong Elementary School",
  中山: "Zhongshan",
  中山國中: "Zhongshan Junior High School",
  中山國小: "Zhongshan Elementary School",
  中正紀念堂: "Chiang Kai-Shek Memorial Hall",
  丹鳳: "Danfeng",
  亞東醫院: "Far Eastern Hospital",
  信義安和: "Xinyi Anhe",
  先嗇宮: "Xianse Temple",
  內湖: "Neihu",
  六張犁: "Liuzhanli",
  劍南路: "Jiannang Rd.",
  劍潭: "Jiantan",
  動物園: "Taipei Zoo",
  北投: "Beitou",
  北門: "Beimen",
  南京三民: "Nanjing Sanmin",
  南京復興: "Nanjing Fuxing",
  南京東路: "Nanjing E. Rd.",
  南勢角: "Nanshijiao",
  南港: "Nangang",
  南港展覽館: "Taipei Nangang Exhibition",
  南港軟體園區: "Nangang Software park",
  "台北101/世貿": "Taipei 101/World Trade Center",
  台北小巨蛋: "Taipei Arena",
  台北橋: "Taipei Bridge",
  台北車站: "Taipei Main",
  台大醫院: "National Taiwan University Hospital",
  唭哩岸: "Qilian",
  善導寺: "Shandao Temple",
  國父紀念館: "Sun Yat-Sen Memorial Hall",
  圓山: "Yuanshan",
  土城: "Tucheng",
  士林: "Shilin",
  大坪林: "Dapinglin",
  大安: "Daan",
  大安森林公園: "Daan Park",
  大橋頭: "Daqiaotou",
  大湖公園: "Dahu Park",
  大直: "Dazhi",
  奇岩: "Qiyan",
  小碧潭: "Xiaobitan",
  市政府: "Taipei City Hall",
  府中: "Fuzhong",
  後山埤: "Houshanpi",
  徐匯中學: "St. Ignatius High School",
  復興崗: "Fuzinggang",
  忠孝復興: "Zhongxiao Fuxing",
  忠孝敦化: "Zhongxiao Dunhua",
  忠孝新生: "Zhongxiao Xinsheng",
  忠義: "Zhongyi",
  文德: "Wende",
  新北投: "Xinbeitou",
  新埔: "Xinpu",
  新店: "Xindian",
  新店區公所: "Xindian District Office",
  新莊: "Xinzhuang",
  新莊線: "XinzhuangLine",
  昆陽: "Kunyang",
  明德: "Mingde",
  景安: "Jingan",
  景美: "Jingmei",
  木柵: "Muzha",
  東湖: "Donghu",
  東門: "Dongmen",
  松山: "Songshan",
  松山機場: "Songshan Airport",
  松江南京: "Songjiang Nanjing",
  板橋: "Banciao",
  民權西路: "Minquan West Road",
  永安市場: "Yongan Market",
  永寧: "Yongning",
  永春: "Yongchun",
  江子翠: "Jiangzicui",
  海山: "Haishan",
  淡水: "Danshui",
  港墘: "Gangqian",
  石牌: "Shipai",
  科技大樓: "Technology Building",
  竹圍: "Zhuwei",
  紅樹林: "Hongshulin",
  芝山: "Zhishan",
  菜寮: "Cailiao",
  萬芳社區: "Wanfang Community",
  萬芳醫院: "Wanfang Hospital",
  葫洲: "Huzhou",
  蘆洲: "Luzhou",
  行天宮: "Xingtian Temple",
  西湖: "Xihu",
  西門: "Ximen",
  象山: "Xiangshan",
  貓空纜車: "Maokong Gondola",
  輔大: "Fu Jen University",
  辛亥: "Xinhai",
  迴龍: "Huilong",
  關渡: "Guandu",
  雙連: "Shuanglian",
  頂埔: "Dingpu",
  頂溪: "Dingxi",
  頭前庄: "Touqianzhuang",
  麟光: "Linguang",
  龍山寺: "Longshan Temple",
}
