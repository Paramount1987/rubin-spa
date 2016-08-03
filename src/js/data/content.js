var content = {
   main: `<div class="nav-wrap">
                        <nav>
                            <ul class="nav-list">
                                <li>
                                    <a href="#" class="nav-link">
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
                                    <a href="#" class="nav-link">
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
                                            <a href="#" class="nav-link" data-link="team">
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
            <li class="active">
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
            <div class="tab-pane fade in active" id="director">
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
                                        2012-2013</text>
                                </svg>
                            </div>
                            <ul class="list-calendar">
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="80">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                январь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="90">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                февраль</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="55">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                март</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="75">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                апрель</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="45">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                май</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="60">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                июнь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="60">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                июль</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="70">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                август</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="95">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                сентябрь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="85">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                октябрь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
                                        <svg height="40" width="75">
                                            <text fill="url(#gradC)" font-family="pf_din_text_comp_proregular" x="2" y="30">
                                                ноябрь</text>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="calendar-link">
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
                            <a href="#" class="link-back" data-link="team"></a>
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
                            <a href="#" class="link-back" data-link="team"></a>
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
                            <a href="#" class="link-back" data-link="team"></a>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="tab-pane__slider tab-pane__slider--m">
                                    <div class="owl-carousel owl-carousel--playerSingle"></div>
                                </div>
                    </div>`
}


module.exports.data = content;