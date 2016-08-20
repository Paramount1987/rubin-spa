var content = {
   main: `<div class="nav-wrap">
                        <nav>
                            <ul class="nav-list">
                                <li>
                                    <a href="#" class="nav-link" data-link="history">
                                        <i class="ball-lg"></i>
                                        <svg height="65" width="190">
                                            <defs>
                                                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                                    <stop offset="40%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                                    <stop offset="41%" style="stop-color:rgb(134,79,84);stop-opacity:1" />
                                                    <stop offset="100%" style="stop-color:rgb(134,79,84);stop-opacity:1" />
                                                </linearGradient>
                                            </defs>
                                            <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                                ИСТОРИЯ</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link" data-link="cups">
                                        <i class="cup-lg"></i>
                                        <svg height="65" width="290">
                                            <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                                достижения</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link js-nav-link-sup">
                                        <i class="logo-lg"></i>
                                        <svg height="65" width="330">
                                            <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                                рубин сегодня</text>
                                        </svg>
                                    </a>
                                    <ul class="nav-list-sup">
                                        <li>
                                            <a href="#1" class="nav-link">
                                                <svg height="65" width="345">
                                                    <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                                        новый логотип</text>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link" data-link="team" data-type="director">
                                                <svg height="65" width="210">
                                                    <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                                        команда</text>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#3" class="nav-link" data-link="calendar">
                                                <svg height="65" width="410">
                                                    <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                                        календарь встреч</text>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div class="nav-backdrop backdrop"><i class="i-close js-nav-close"></i></div>
                    </div>`,
   team: `<div class="content-top">
            <div class="content-title">
            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
            <h1>
            <svg height="105" width="300">
            <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
            </linearGradient>
            </defs>
            <text fill="url(#grad2)" font-family="pf_din_text_comp_proregular" x="2" y="80">
            команда</text>
            </svg>
            </h1>
            </div>
            <div class="content-nav">
            <a href="#" class="link-main" data-link="main"></a>
            <a href="#" class="link-back" data-link="main"></a>
            </div>
            </div>
            <div class="content-body">
               <!-- Nav tabs -->
            <ul class="nav nav-tabs">
            <li>
            <a href="#director" data-toggle="tab">
            <svg height="65" width="230">
            <defs>
            <linearGradient id="gradT" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
            <stop offset="40%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
            <stop offset="41%" style="stop-color:rgb(134,79,84);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(134,79,84);stop-opacity:1" />
            </linearGradient>
            </defs>
            <text fill="url(#gradT)" font-family="pf_din_text_comp_proregular" x="2" y="50">
            руководство</text>
            </svg>
            </a>
            </li>
            <li>
            <a href="#coach" data-toggle="tab">
            <svg height="65" width="330">
            <text fill="url(#gradT)" font-family="pf_din_text_comp_proregular" x="2" y="50">
            тренерский состав</text>
         </svg>
         </a>
         </li>
         <li>
         <a href="#player" data-toggle="tab">
            <svg height="65" width="130">
            <text fill="url(#gradT)" font-family="pf_din_text_comp_proregular" x="2" y="50">
            игроки</text>
            </svg>
            </a>
            </li>
            </ul>

               <!-- Tab panes -->
            <div class="tab-content tab-content--opacity">
            <div class="tab-pane fade" id="director">
            <div class="tab-pane__slider">
            <div class="owl-carousel--directors"></div>
            </div>
            </div>
            <div class="tab-pane fade" id="coach">
            <div class="tab-pane__slider">
            <div class="owl-carousel owl-carousel--coach"></div>
            </div>
            </div>
            <div class="tab-pane fade" id="player">
            <div class="tab-pane__slider">
            <div class="owl-carousel owl-carousel--players"></div>
            </div>
            </div>
            </div>
         </div>`,
   calendar: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="610">
                                    <defs>
                                        <linearGradient id="gradC" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        календарь встреч</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="main"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                              <div class="owl-carousel owl-carousel--calendar">
                              </div>
                        </div>
                        <div class="calendar-wrap">
                            <div class="calendar-date">
                                <svg height="60" width="225">
                                    <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="50">
                                        2016-2017</text>
                                </svg>
                            </div>
                            <ul class="list-calendar">
                                <li>
                                    <div class="calendar-link">
                                        <svg height="40" width="80">
                                            <defs>
                                                <linearGradient id="gradGray" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" style="stop-color:rgb(170,170,170);stop-opacity:1" />
                                                    <stop offset="45%" style="stop-color:rgb(170,170,170);stop-opacity:1" />
                                                    <stop offset="46%" style="stop-color:rgb(68,68,54);stop-opacity:1" />
                                                    <stop offset="70%" style="stop-color:rgb(68,68,54);stop-opacity:1" />
                                                    <stop offset="100%" style="stop-color:rgb(68,68,54);stop-opacity:1" />
                                                </linearGradient>
                                            </defs>
                                            <text fill="url(#gradGray)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                январь</text>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div class="calendar-link">
                                        <svg height="40" width="90">
                                            <text fill="url(#gradGray)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                февраль</text>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="6">
                                        <svg height="40" width="55">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                март</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="7">
                                        <svg height="40" width="75">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                апрель</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="8">
                                        <svg height="40" width="45">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                май</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <div class="calendar-link">
                                        <svg height="40" width="60">
                                            <text fill="url(#gradGray)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                июнь</text>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="0">
                                        <svg height="40" width="60">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                июль</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="1">
                                        <svg height="40" width="70">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                август</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="2">
                                        <svg height="40" width="95">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                сентябрь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="3">
                                        <svg height="40" width="85">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                октябрь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="4">
                                        <svg height="40" width="75">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                ноябрь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link js-calendar-link" data-index="5">
                                        <svg height="40" width="90">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                декабрь</text>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>`,
   director: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="430">
                                    <defs>
                                        <linearGradient id="gradD" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradD)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        руководство</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="team" data-type="director"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--directorsSingle"></div>
                                </div>
                    </div>`,
   coach: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="640">
                                    <defs>
                                        <linearGradient id="gradC" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        тренерский состав</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="team" data-type="coach" data-item="0"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--coachSingle"></div>
                                </div>
                    </div>`,
   player: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="310">
                                    <defs>
                                        <linearGradient id="gradP" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradP)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        команда</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="team" data-type="player" data-item="0"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--playerSingle"></div>
                                </div>
                    </div>`,
   cups: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="420">
                                    <defs>
                                        <linearGradient id="gradCups" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradCups)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        Достижения</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="main"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--cups"></div>
                                    <div class="cups-dot">
                                        <a href="#" class="cup-dot cup-dot--1 active" data-index="1"></a>
                                        <a href="#" class="cup-dot cup-dot--2" data-index="2"></a>
                                        <a href="#" class="cup-dot cup-dot--3" data-index="3"></a>
                                        <a href="#" class="cup-dot cup-dot--4" data-index="4"></a>
                                    </div>
                                </div>
                    </div>`,
   "cup": `                    <div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="420">
                                    <defs>
                                        <linearGradient id="gradCups" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradCups)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        Достижения</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="cups"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--cupSingle">
                                    </div>
                                    <div class="cups-dot">
                                        <a href="#" class="cup-dot cup-dot--1" data-index="1"></a>
                                        <a href="#" class="cup-dot cup-dot--2" data-index="2"></a>
                                        <a href="#" class="cup-dot cup-dot--3" data-index="3"></a>
                                        <a href="#" class="cup-dot cup-dot--4" data-index="4"></a>
                                    </div>
                                </div>
                    </div>`,
   "history": `                    <div class="content-top">
                        <a href="#" class="gallery-link js-gallery-link" data-link="glory" data-history-item="0">
                                <svg height="85" width="130">
                                    <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="40">
                                        галерея</text>
                                    <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        славы</text>
                                </svg>
                        </a>
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="680">
                                    <defs>
                                        <linearGradient id="gradC" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        История ФК «РУБИН»</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="main"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--h">
                              <div class="owl-carousel owl-carousel--history"></div>
                            <div class="history-dots">
                                <div class="history-dots-pos"></div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1936-1957</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1958-1965</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1966-1971</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1972-1977</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1978-1991</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1992-1995</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1996-2002</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            2003-2005</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            2006-2009</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            2010-2012</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>`,
    historyItem: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="350">
                                    <defs>
                                        <linearGradient id="gradC" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradC)" class="period-date" font-family="pf_din_text_comp_proregular" x="2" y="80">1972-1977</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="history" data-item="0"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--h">
                              <div class="owl-carousel owl-carousel--historyItem"></div>
                            <div class="history-dots">
                                <div class="history-dots-pos"></div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1936-1957</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1958-1965</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1966-1971</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1972-1977</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1978-1991</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1992-1995</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            1996-2002</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            2003-2005</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            2006-2009</text>
                                    </svg>
                                </div>
                                <div class="history-dot">
                                    <svg height="40" width="110">
                                        <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                            2010-2012</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="video-modal">
                            <video id="videoClip">
                              <source src="" type="video/mp4" id="video-src">
                                    Your browser does not support the video tag.
                            </video>
                        </div> 
                    </div>`,
   glory: `                    <div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="500">
                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#grad)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        галерея славы</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="history" data-history-item="0"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                            <div class="owl-carousel owl-carousel--glory"></div>
                        </div>
                    </div>`,
   gloryItem: `<div class="content-top">
                        <div class="content-title">
                            <img src="img/images/logo-sm.png" class="logo-sm"  alt=""/>
                            <h1>
                                <svg height="105" width="500">
                                    <defs>
                                        <linearGradient id="gradD" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="45%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
                                            <stop offset="46%" style="stop-color:rgb(201,156,162);stop-opacity:1" />
                                            <stop offset="70%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:rgb(136,75,84);stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <text fill="url(#gradD)" font-family="pf_din_text_comp_proregular" x="2" y="80">
                                        галерея славы</text>
                                </svg>
                            </h1>
                        </div>
                        <div class="content-nav">
                            <a href="#" class="link-main" data-link="main"></a>
                            <a href="#" class="link-back" data-link="glory" data-item="0"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--glorySingle"></div>
                                </div>
                    </div>`
}

module.exports.data = content;