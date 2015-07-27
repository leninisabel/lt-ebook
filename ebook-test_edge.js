/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif']='<link type=\"text/css\" rel=\"stylesheet\" href=\"http://fast.fonts.com/cssapi/5fe7b77e-95f4-4a5b-acf8-cd3eb7bc2789.css\"/>    <script type=\"text/javascript\">        try {            Typekit.load();        } catch(e) {        }    </script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'page8-bg2',
                display: 'none',
                type: 'image',
                rect: ['-429px', '60px','1649px','645px','auto', 'auto'],
                clip: ['rect(1.00390625px 1649px 645px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"page8-bg2.jpg",'0px','0px'],
                transform: [[],[],[],['1.024','1.024']]
            },
            {
                id: 'page8-bg',
                display: 'none',
                type: 'image',
                rect: ['-430px', '60px','1649px','645px','auto', 'auto'],
                clip: ['rect(0.515625px 1649px 645px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"page8-bg.jpg",'0px','0px'],
                transform: [[],[],[],['1.024','1.024']]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['43px', '72px','307px','45px','auto', 'auto'],
                text: "Summary",
                align: "left",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 38, "rgba(126,192,66,1.00)", "700", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['43px', '123px','590px','114px','auto', 'auto'],
                text: "As businesses strive to make their offices greener, IT service providers are in a favorable position to help their clients make wise decisions about IT purchases and how their IT systems are managed and monitored. By learning about the energy-saving methods available, IT professionals will become an even more valuable advisor to their clients’ teams. As an added benefit, when companies take steps to save energy, they can boost their bottom line while making Earth a better place to live.<br>",
                align: "left",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text5Copy',
                type: 'text',
                rect: ['43px', '235px','206px','19px','auto', 'auto'],
                text: "About LabTech Software",
                align: "left",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 16, "rgba(126,192,66,1.00)", "900", "none", "normal"]
            },
            {
                id: 'Text5Copy2',
                type: 'text',
                rect: ['43px', '259px','502px','206px','auto', 'auto'],
                text: "LabTech Software is the brainchild of a managed service provider (MSP) that struggled with the usual challenges and inefficiencies of a reactive IT <br>maintenance and support model. LabTech—its flagship solution—was born <br>of the urgent need to eliminate technician inefficiencies and the desire to <br>provide preventive and proactive service. Developed with cutting-edge, <br>agent technology, LabTech is the only remote monitoring and <br>management (RMM) platform created by system administrators for <br>system administrators to automate your IT services and eliminate <br>inefficiencies. For more information, please visit labtechsoftware.com <br>or call 877.522.8323.",
                align: "left",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 13, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text5Copy3',
                type: 'text',
                rect: ['43px', '459px','527px','206px','auto', 'auto'],
                text: "1 “Green IT Insights and Opportunities. Section 4: The Role of IT Vendors and Solution Providers,” CompTIA, April 2011.<br><br>2 “Global Green IT Services Market is Projected to Reach US$5.01 Billion by 2015, According to New Report by Global Industry <br>Analysts, Inc.,” June 1, 2010, http://www.prweb.com/releases/Green_IT_services/green_IT_market/prweb4060534.htm<br><br>3 “Green IT Insights and Opportunities, Section 1: Green Market Overview,” CompTIA, April 2011.<br><br>4 “Green IT Insights and Opportunities, Section 3: Green Practices and Market Drivers,” CompTIA, April 2011.<br><br>5 Burt, Jeffrey, “Green IT Service Market to Grow $4.8 Billion in 2013: Forrester,” eWeek, March 2, 2009,<br>http://www.eweek.com/c/a/Green-IT/Green-IT-Service-Market-to-Grow-to-48-Billion-in-2013-Forrester-587606/.<br><br>6 “Green IT Insights and Opportunities, Section 2: Green Technologies Overview,” CompTIA, April 2011.<br><br>7 “Cloud Computing to Reduce Global Data Center Energy Expenditures by 38% in 2020,” Pike Research, Dec. 6, 2010,<br>http://www.pikeresearch.com/newsroom/cloud-computing-to-reduce-global-data-center-energy-expenditures-by-38-in-2020.<br><br>8 “Green IT Insights and Opportunities, Section 2: Green Technologies Overview,” CompTIA, April 2011.<br><br>9 “Energy Savings from Energy Star-Qualified Servers,” U.S. EPA Energy Star, August 2010.<br><br>10 “Green IT: Why Mid-size Companies Are Investing Now,” Info-Tech Research Group, 2009.<br><br>11 “Printing Proficiency. A Multifunction Printer (MFP) Fleet Can Save Money, Increase Space and Contribute to Energy Efficiency,” TechRepublic, January 2009.<br><br>12 “Green IT Insights and Opportunities, Section 3: Green Practices and Market Drivers,” CompTIA, April 2011.",
                align: "left",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 7, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text5Copy4',
                type: 'text',
                rect: ['603px', '617px','219px','206px','auto', 'auto'],
                text: "13 “Microsoft, Accenture and WSP Environment &amp; Energy Study Shows Significant Energy and Carbon Emissions Reduction Potential From Cloud Computing,” Microsoft, Nov. 04, 2010, http://www.microsoft.com/en-us/news/press/2010/`nov10/11-04cloudbenefitspr.aspx.<br><br>14 Samson, Ted, “Study: Going green does pay for itself,” InfoWorld, February 29, 2012, http://www.infoworld.com/t/green-it/study-goinggreen-does-pay-itself-187595?page=0,0,.",
                align: "left",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 7, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'lt-logo-summary',
                type: 'image',
                rect: ['842px', '563px','155px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lt-logo-summary.png",'0px','0px']
            },
            {
                id: 'under_lt_logo',
                type: 'text',
                rect: ['833px', '631px','172px','206px','auto', 'auto'],
                text: "4110 George Road, Suite 200<br>Tampa, Florida 33634<br>877.522.8323<br>labtechsoftware.com",
                align: "center",
                font: ['\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif', 12, "rgba(255,255,255,1.00)", "500", "none", "normal"]
            },
            {
                id: 'page7-bg',
                type: 'image',
                rect: ['-137px', '-5px','1116px','780px','auto', 'auto'],
                clip: ['rect(338.65625px 1116px 346.77099609375px 0px)'],
                borderRadius: ["0px 0px", "0px 0px", "0px 0px", "0px 0px"],
                fill: ["rgba(0,0,0,0)",im+"page7-bg.jpg",'0px','0px']
            },
            {
                id: 'page7-copy',
                type: 'image',
                rect: ['505px', '72px','420px','288px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-copy.png",'0px','0px']
            },
            {
                id: 'page7-cta',
                display: 'none',
                type: 'image',
                rect: ['567px', '380px','378px','298px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page7-cta.png",'0px','0px']
            },
            {
                id: 'page6-bg',
                display: 'none',
                type: 'image',
                rect: ['-73px', '-139px','1025px','897px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page6-bg.jpg",'0px','0px']
            },
            {
                id: 'page6-copy',
                display: 'block',
                type: 'image',
                rect: ['17px', '62px','941px','370px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page6-copy.png",'0px','0px']
            },
            {
                id: 'page6-cta',
                type: 'image',
                rect: ['667px', '352px','269px','298px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page6-cta.png",'0px','0px']
            },
            {
                id: 'page5-garbagecan',
                type: 'image',
                rect: ['491px', '287px','403px','387px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-garbagecan.jpg",'0px','0px']
            },
            {
                id: 'page5-copy2',
                type: 'image',
                rect: ['510px', '79px','356px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-copy2.png",'0px','0px']
            },
            {
                id: 'page5-copy',
                type: 'image',
                rect: ['20px', '74px','442px','582px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page5-copy.png",'0px','0px']
            },
            {
                id: 'page4-batteries',
                type: 'image',
                rect: ['478px', '329px','449px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page4-batteries.png",'0px','0px']
            },
            {
                id: 'page4-copy',
                type: 'image',
                rect: ['6px', '89px','481px','568px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page4-copy.png",'0px','0px']
            },
            {
                id: 'page4-copy2',
                type: 'image',
                rect: ['492px', '66px','425px','288px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page4-copy2.png",'0px','0px']
            },
            {
                id: 'pg3-background',
                type: 'image',
                rect: ['-359px', '-16px','1024px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pg3-background.jpg",'0px','0px'],
                transform: [[],[],[],['0.80588','0.80588']]
            },
            {
                id: 'Group',
                type: 'group',
                rect: ['52px', '481','408','248','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['0px', '2px','389px','195px','auto', 'auto'],
                    fill: ["rgba(255,255,255,0.8118)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'page3-copy',
                    type: 'image',
                    rect: ['-30px', '-21px','473px','291px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"page3-copy.png",'0px','0px'],
                    transform: [[],[],[],['0.85299','0.85299']]
                }]
            },
            {
                id: 'page3-maincopy2',
                type: 'image',
                rect: ['419px', '42px','524px','653px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page3-maincopy.png",'0px','0px'],
                transform: [[],[],[],['0.94','0.94']]
            },
            {
                id: 'pg2-background',
                type: 'image',
                rect: ['112px', '125px','800px','516px','auto', 'auto'],
                clip: ['rect(3.90625px 800px 516px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"pg2-background.jpg",'0px','0px'],
                transform: [[],[],[],['1.28','1.28']]
            },
            {
                id: 'page2-copy',
                type: 'image',
                rect: ['444px', '57px','555px','646px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"page2-copy.png",'0px','0px'],
                transform: [[],[],[],['0.94997','0.94997']]
            },
            {
                id: 'Group2',
                display: 'none',
                type: 'group',
                rect: ['-8', '674','1032','39','auto', 'auto'],
                c: [
                {
                    id: 'bottom-bar2',
                    type: 'image',
                    rect: ['-41px', '-2px','1024px','42px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bottom-bar.png",'0px','0px'],
                    transform: [[],[],[],['0.92','0.92']]
                },
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['935px', '0px','97px','39px','auto', 'auto'],
                    fill: ["rgba(71,170,66,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'cover',
                type: 'image',
                rect: ['0', '58px','1024px','653px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover.jpg",'0px','0px']
            },
            {
                id: 'cover-hand',
                type: 'image',
                rect: ['-1px', '55px','574px','486px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-hand.png",'0px','0px']
            },
            {
                id: 'cover-title',
                type: 'image',
                rect: ['530px', '53px','519px','339px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cover-title.png",'0px','0px'],
                transform: [[],[],[],['0.92767','0.92767']]
            },
            {
                id: 'lt-logo-cover',
                type: 'image',
                rect: ['812px', '612px','172px','67px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lt-logo-cover.png",'0px','0px']
            },
            {
                id: 'btn-intro',
                type: 'rect',
                rect: ['-3px', '58','auto','auto','auto', 'auto'],
                cursor: ['pointer'],
                transform: [[],[],[],['0.95949']]
            },
            {
                id: 'sidebar-ch5',
                display: 'none',
                type: 'image',
                rect: ['927px', '0px','97px','712px','auto', 'auto'],
                clip: ['rect(57.27734375px 97px 712px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"sidebar-ch5.jpg",'0px','0px']
            },
            {
                id: 'sidebar-ch4',
                display: 'none',
                type: 'image',
                rect: ['927px', '0px','97px','712px','auto', 'auto'],
                clip: ['rect(57.220703125px 97px 712px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"sidebar-ch4.jpg",'0px','0px']
            },
            {
                id: 'sidebar-ch3',
                display: 'none',
                type: 'image',
                rect: ['927px', '0px','97px','712px','auto', 'auto'],
                clip: ['rect(57.361328125px 97px 712px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"sidebar-ch3.jpg",'0px','0px']
            },
            {
                id: 'sidebar-ch2',
                display: 'none',
                type: 'image',
                rect: ['927px', '0px','97px','712px','auto', 'auto'],
                clip: ['rect(57.1513671875px 97px 712px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"sidebar-ch2.jpg",'0px','0px']
            },
            {
                id: 'sidebar-ch1',
                display: 'none',
                type: 'image',
                rect: ['917px', '-74px','117px','860px','auto', 'auto'],
                clip: ['rect(68.59976959228516px 117px 860px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"sidebar-ch1.jpg",'0px','0px'],
                transform: [[],[],[],['0.82791','0.82791']]
            },
            {
                id: 'btn-ch1',
                type: 'rect',
                rect: ['927px', '184px','97px','75px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch2',
                type: 'rect',
                rect: ['927px', '272px','97px','75px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch3',
                type: 'rect',
                rect: ['927px', '357px','97px','75px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch4',
                type: 'rect',
                rect: ['927px', '446px','97px','75px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-ch5',
                type: 'rect',
                rect: ['927px', '531px','97px','75px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'arrow-nav',
                display: 'none',
                type: 'image',
                rect: ['933px', '368px','83px','95px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0.32884272181891,
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],[],[],['0.71735','0.71735']]
            },
            {
                id: 'arrow-nav-prev',
                display: 'none',
                type: 'image',
                rect: ['8px', '370px','83px','95px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 0.33,
                fill: ["rgba(0,0,0,0)",im+"arrow-nav.png",'0px','0px'],
                transform: [[],['180'],[],['0.71735','0.71735']]
            },
            {
                id: 'menu3',
                type: 'rect',
                rect: ['-1', '-180','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'menu3',
                symbolName: 'menu',
                autoPlay: {

                }
            },
            {
                id: 'btn-intro',
                symbolName: 'btn-intro',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_sidebar-ch1}": [
                ["style", "top", '-74px'],
                ["transform", "scaleY", '0.82791'],
                ["style", "clip", [68.59976959228516,117,860,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.82791'],
                ["style", "opacity", '0'],
                ["style", "left", '917px'],
                ["style", "display", 'none']
            ],
            "${_Text5Copy2}": [
                ["style", "line-height", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '43px'],
                ["style", "width", '502px'],
                ["style", "top", '259px'],
                ["style", "height", '196px'],
                ["style", "font-size", '13px'],
                ["style", "opacity", '0.000000']
            ],
            "${_page3-maincopy2}": [
                ["style", "top", '662px'],
                ["transform", "scaleY", '0.94'],
                ["transform", "scaleX", '0.94'],
                ["style", "opacity", '0'],
                ["style", "left", '419px']
            ],
            "${_btn-ch4}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '446px'],
                ["style", "height", '75px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_lt-logo-summary}": [
                ["style", "top", '563px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '842px']
            ],
            "${_page6-cta}": [
                ["style", "top", '352px'],
                ["transform", "scaleY", '0.21'],
                ["style", "height", '298px'],
                ["transform", "scaleX", '0.21'],
                ["style", "opacity", '0'],
                ["style", "left", '667px'],
                ["style", "width", '269px']
            ],
            "${_arrow-nav}": [
                ["style", "top", '368px'],
                ["transform", "scaleY", '0.71735'],
                ["transform", "scaleX", '0.71735'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.32884299755096436'],
                ["style", "left", '933px'],
                ["style", "cursor", 'pointer']
            ],
            "${_page4-copy}": [
                ["style", "top", '89px'],
                ["style", "height", '568px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '6px'],
                ["style", "width", '481px']
            ],
            "${_page7-copy}": [
                ["style", "top", '72px'],
                ["style", "height", '288px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '505px'],
                ["style", "width", '420px']
            ],
            "${_page8-bg}": [
                ["transform", "scaleX", '1.024'],
                ["style", "opacity", '1'],
                ["style", "left", '-430px'],
                ["style", "width", '1649px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1.024'],
                ["style", "display", 'none'],
                ["style", "clip", [0.515625,1649,645,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '645px']
            ],
            "${_Group2}": [
                ["style", "display", 'none']
            ],
            "${_page6-bg}": [
                ["style", "top", '-139px'],
                ["style", "display", 'none'],
                ["style", "height", '897px'],
                ["style", "opacity", '0'],
                ["style", "left", '-73px'],
                ["style", "width", '1025px']
            ],
            "${_bottom-bar2}": [
                ["style", "top", '-2px'],
                ["transform", "scaleX", '0.92'],
                ["transform", "scaleY", '0.92'],
                ["style", "left", '-41px']
            ],
            "${_page7-cta}": [
                ["style", "top", '380px'],
                ["style", "display", 'none'],
                ["style", "height", '298px'],
                ["style", "left", '937px'],
                ["style", "width", '378px']
            ],
            "${_btn-ch5}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '531px'],
                ["style", "height", '75px'],
                ["style", "left", '927px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '97px']
            ],
            "${_page5-garbagecan}": [
                ["style", "top", '287px'],
                ["style", "height", '387px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '491px'],
                ["style", "width", '403px']
            ],
            "${_btn-ch3}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '357px'],
                ["style", "height", '75px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_lt-logo-cover}": [
                ["style", "top", '612px'],
                ["style", "height", '67px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '812px'],
                ["style", "width", '172px']
            ],
            "${_arrow-nav-prev}": [
                ["style", "top", '370px'],
                ["style", "left", '8px'],
                ["transform", "scaleY", '0.71735'],
                ["transform", "rotateZ", '180deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '0.33'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0.71735']
            ],
            "${_cover}": [
                ["style", "top", '58px'],
                ["style", "height", '653px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1024px']
            ],
            "${_cover-hand}": [
                ["style", "top", '55px'],
                ["style", "opacity", '0'],
                ["style", "left", '-561px']
            ],
            "${_Text5Copy4}": [
                ["style", "line-height", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '603px'],
                ["style", "width", '219px'],
                ["style", "top", '617px'],
                ["style", "height", '74px'],
                ["style", "font-size", '7px'],
                ["style", "opacity", '0.000000']
            ],
            "${_btn-ch2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '272px'],
                ["style", "height", '75px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_page3-copy}": [
                ["style", "top", '-21px'],
                ["transform", "scaleX", '0.85299'],
                ["transform", "scaleY", '0.85299'],
                ["style", "left", '-30px']
            ],
            "${_Text5Copy3}": [
                ["style", "line-height", '9px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '43px'],
                ["style", "width", '527px'],
                ["style", "top", '459px'],
                ["style", "height", '243px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '7px']
            ],
            "${_page6-copy}": [
                ["style", "top", '-168px'],
                ["style", "display", 'block'],
                ["style", "height", '370px'],
                ["style", "opacity", '0'],
                ["style", "left", '17px'],
                ["style", "width", '941px']
            ],
            "${_sidebar-ch2}": [
                ["style", "top", '0px'],
                ["style", "clip", [57.1513671875,97,712,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "height", '712px'],
                ["style", "opacity", '1'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_page8-bg2}": [
                ["style", "top", '60px'],
                ["transform", "scaleX", '1.024'],
                ["transform", "scaleY", '1.024'],
                ["style", "clip", [1.00390625,1649,645,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "height", '645px'],
                ["style", "left", '-429px'],
                ["style", "width", '1649px']
            ],
            "${_Text4}": [
                ["style", "top", '72px'],
                ["style", "opacity", '0.000000'],
                ["color", "color", 'rgba(126,192,66,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "height", '45px'],
                ["style", "font-family", '\'Avenir LT W01 65 Medium\', arial, helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '38px']
            ],
            "${_page5-copy}": [
                ["style", "top", '284px'],
                ["style", "height", '582px'],
                ["style", "opacity", '0'],
                ["style", "left", '20px'],
                ["style", "width", '442px']
            ],
            "${_pg2-background}": [
                ["style", "top", '125px'],
                ["transform", "scaleY", '1.28'],
                ["transform", "scaleX", '1.28'],
                ["style", "opacity", '1'],
                ["style", "left", '112px'],
                ["style", "clip", [3.90625,800,516,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_sidebar-ch3}": [
                ["style", "top", '0px'],
                ["style", "clip", [57.361328125,97,712,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "height", '712px'],
                ["style", "opacity", '1'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_btn-ch1}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '184px'],
                ["style", "height", '75px'],
                ["style", "left", '927px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '97px']
            ],
            "${_page4-copy2}": [
                ["style", "top", '66px'],
                ["style", "height", '288px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '492px'],
                ["style", "width", '425px']
            ],
            "${_sidebar-ch5}": [
                ["style", "top", '0px'],
                ["style", "clip", [57.27734375,97,712,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "height", '712px'],
                ["style", "opacity", '1'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_page7-bg}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "left", '-137px'],
                ["style", "width", '1116px'],
                ["style", "top", '-5px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '780px'],
                ["style", "clip", [335.38037109375,1116,344.14599609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_pg3-background}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.80588'],
                ["transform", "scaleX", '0.80588'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-359px']
            ],
            "${_Group}": [
                ["style", "left", '52px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text5}": [
                ["style", "line-height", '17px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '43px'],
                ["style", "font-size", '13px'],
                ["style", "top", '123px'],
                ["style", "height", '114px'],
                ["style", "width", '590px'],
                ["style", "opacity", '0.000000']
            ],
            "${_page4-batteries}": [
                ["style", "top", '669px'],
                ["style", "height", '346px'],
                ["style", "opacity", '0'],
                ["style", "left", '478px'],
                ["style", "width", '449px']
            ],
            "${_page2-copy}": [
                ["style", "top", '43px'],
                ["transform", "scaleY", '0.94997'],
                ["transform", "scaleX", '0.94997'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '444px']
            ],
            "${_Text5Copy}": [
                ["style", "line-height", '17px'],
                ["color", "color", 'rgba(126,192,66,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '43px'],
                ["style", "width", '206px'],
                ["style", "top", '235px'],
                ["style", "height", '19px'],
                ["style", "font-size", '16px'],
                ["style", "opacity", '0.000000']
            ],
            "${_btn-intro}": [
                ["transform", "scaleX", '0.95949'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-3px']
            ],
            "${_cover-title}": [
                ["style", "top", '53px'],
                ["transform", "scaleY", '0.92767'],
                ["transform", "scaleX", '0.92767'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '530px']
            ],
            "${_page5-copy2}": [
                ["style", "top", '-81px'],
                ["style", "height", '227px'],
                ["style", "opacity", '0'],
                ["style", "left", '510px'],
                ["style", "width", '356px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "left", '935px'],
                ["color", "background-color", 'rgba(71,170,66,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '712px'],
                ["style", "overflow", 'hidden']
            ],
            "${_under_lt_logo}": [
                ["style", "line-height", '16px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '833px'],
                ["style", "width", '172px'],
                ["style", "top", '631px'],
                ["style", "text-align", 'center'],
                ["style", "height", '64px'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '12px']
            ],
            "${_sidebar-ch4}": [
                ["style", "top", '0px'],
                ["style", "clip", [57.220703125,97,712,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "height", '712px'],
                ["style", "opacity", '1'],
                ["style", "left", '927px'],
                ["style", "width", '97px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '2px'],
                ["style", "left", '0px'],
                ["style", "height", '195px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30250,
            autoPlay: true,
            labels: {
                "startMenu": 0,
                "endMenu": 1000,
                "cover": 1402,
                "page2": 2000,
                "btn-intro": 2250,
                "page2end": 2421,
                "page3": 3250,
                "btn-ch1": 3351,
                "page3end": 6304,
                "page4": 8500,
                "btn-ch2": 8592,
                "page4end": 10750,
                "page5": 12846,
                "btn-ch3": 12915,
                "page5end": 16250,
                "page6": 17608,
                "btn-ch4": 17663,
                "page6end": 20173,
                "page7": 21000,
                "btn-ch5": 21110,
                "page7end": 23464,
                "page8": 24750,
                "btn-ch6": 26108,
                "page8end": 30250
            },
            timeline: [
                { id: "eid414", tween: [ "style", "${_cover-hand}", "left", '-1px', { fromValue: '-561px'}], position: 0, duration: 799 },
                { id: "eid429", tween: [ "style", "${_cover-hand}", "left", '-1041px', { fromValue: '-1px'}], position: 1402, duration: 598 },
                { id: "eid484", tween: [ "style", "${_page5-copy2}", "opacity", '1', { fromValue: '0'}], position: 13704, duration: 865 },
                { id: "eid491", tween: [ "style", "${_page5-copy2}", "opacity", '0', { fromValue: '1'}], position: 16865, duration: 385 },
                { id: "eid589", tween: [ "style", "${_under_lt_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 29500, duration: 750 },
                { id: "eid477", tween: [ "style", "${_page5-copy}", "opacity", '1', { fromValue: '0'}], position: 12846, duration: 858 },
                { id: "eid493", tween: [ "style", "${_page5-copy}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 358 },
                { id: "eid433", tween: [ "style", "${_page2-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 421 },
                { id: "eid448", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0.000000'}], position: 5654, duration: 651 },
                { id: "eid454", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '1'}], position: 7833, duration: 667 },
                { id: "eid546", tween: [ "style", "${_sidebar-ch4}", "opacity", '0', { fromValue: '1'}], position: 21000, duration: 110 },
                { id: "eid521", tween: [ "style", "${_sidebar-ch3}", "opacity", '0', { fromValue: '1'}], position: 17608, duration: 223 },
                { id: "eid570", tween: [ "style", "${_page8-bg}", "display", 'block', { fromValue: 'none'}], position: 24750, duration: 0 },
                { id: "eid538", tween: [ "style", "${_page7-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 21531, duration: 437 },
                { id: "eid556", tween: [ "style", "${_page7-copy}", "opacity", '0', { fromValue: '1'}], position: 23946, duration: 385 },
                { id: "eid518", tween: [ "style", "${_page6-cta}", "opacity", '1', { fromValue: '0'}], position: 19579, duration: 594 },
                { id: "eid530", tween: [ "style", "${_page6-cta}", "opacity", '0', { fromValue: '1'}], position: 20692, duration: 308 },
                { id: "eid486", tween: [ "style", "${_page5-garbagecan}", "opacity", '1', { fromValue: '0.000000'}], position: 15192, duration: 1058 },
                { id: "eid489", tween: [ "style", "${_page5-garbagecan}", "opacity", '0', { fromValue: '1'}], position: 16500, duration: 365 },
                { id: "eid418", tween: [ "style", "${_cover-title}", "opacity", '1', { fromValue: '0.000000'}], position: 903, duration: 499 },
                { id: "eid496", tween: [ "style", "${_page6-bg}", "display", 'block', { fromValue: 'none'}], position: 17608, duration: 0 },
                { id: "eid586", tween: [ "style", "${_Text5Copy4}", "height", '74px', { fromValue: '74px'}], position: 29250, duration: 0 },
                { id: "eid525", tween: [ "style", "${_page6-copy}", "display", 'none', { fromValue: 'block'}], position: 20692, duration: 0 },
                { id: "eid438", tween: [ "style", "${_pg2-background}", "opacity", '0', { fromValue: '1'}], position: 2915, duration: 335 },
                { id: "eid444", tween: [ "style", "${_page3-maincopy2}", "top", '40px', { fromValue: '662px'}], position: 3250, duration: 1128 },
                { id: "eid585", tween: [ "style", "${_Text5Copy4}", "opacity", '1', { fromValue: '0.000000'}], position: 28500, duration: 750 },
                { id: "eid529", tween: [ "style", "${_page6-cta}", "left", '1044px', { fromValue: '667px'}], position: 20692, duration: 308 },
                { id: "eid543", tween: [ "style", "${_page7-cta}", "left", '567px', { fromValue: '937px'}], position: 23000, duration: 464 },
                { id: "eid559", tween: [ "style", "${_page7-cta}", "left", '1038px', { fromValue: '567px'}], position: 24331, duration: 419 },
                { id: "eid416", tween: [ "style", "${_cover-hand}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 799 },
                { id: "eid75", tween: [ "style", "${_arrow-nav-prev}", "display", 'block', { fromValue: 'none'}], position: 2421, duration: 0 },
                { id: "eid567", tween: [ "style", "${_page8-bg}", "opacity", '0.000000', { fromValue: '1'}], position: 25000, duration: 897 },
                { id: "eid569", tween: [ "style", "${_page8-bg}", "opacity", '1', { fromValue: '0.000000'}], position: 25897, duration: 897 },
                { id: "eid571", tween: [ "style", "${_page8-bg2}", "display", 'block', { fromValue: 'none'}], position: 24750, duration: 0 },
                { id: "eid446", tween: [ "style", "${_pg3-background}", "opacity", '1', { fromValue: '0.000000'}], position: 4378, duration: 1027 },
                { id: "eid452", tween: [ "style", "${_pg3-background}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 750 },
                { id: "eid321", tween: [ "style", "${_arrow-nav}", "display", 'block', { fromValue: 'none'}], position: 1402, duration: 0 },
                { id: "eid562", tween: [ "style", "${_sidebar-ch5}", "opacity", '0', { fromValue: '1'}], position: 24750, duration: 250 },
                { id: "eid551", tween: [ "style", "${_sidebar-ch1}", "opacity", '1', { fromValue: '0'}], position: 3656, duration: 429 },
                { id: "eid552", tween: [ "style", "${_sidebar-ch1}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0 },
                { id: "eid465", tween: [ "style", "${_sidebar-ch1}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 414 },
                { id: "eid509", tween: [ "style", "${_page6-copy}", "opacity", '1', { fromValue: '0'}], position: 18500, duration: 643 },
                { id: "eid582", tween: [ "style", "${_Text5Copy3}", "opacity", '1', { fromValue: '0.000000'}], position: 27958, duration: 750 },
                { id: "eid461", tween: [ "style", "${_page4-copy}", "opacity", '1', { fromValue: '0.000000'}], position: 9250, duration: 750 },
                { id: "eid469", tween: [ "style", "${_page4-copy}", "opacity", '0', { fromValue: '1'}], position: 11660, duration: 590 },
                { id: "eid599", tween: [ "style", "${_lt-logo-cover}", "left", '-218px', { fromValue: '812px'}], position: 1402, duration: 598 },
                { id: "eid596", tween: [ "style", "${_lt-logo-cover}", "opacity", '1', { fromValue: '0.000000'}], position: 1122, duration: 280 },
                { id: "eid593", tween: [ "style", "${_Group2}", "display", 'block', { fromValue: 'none'}], position: 1458, duration: 0 },
                { id: "eid594", tween: [ "style", "${_Group2}", "display", 'none', { fromValue: 'block'}], position: 24750, duration: 0 },
                { id: "eid592", tween: [ "style", "${_lt-logo-summary}", "opacity", '1', { fromValue: '0.000000'}], position: 29000, duration: 750 },
                { id: "eid590", tween: [ "style", "${_under_lt_logo}", "height", '64px', { fromValue: '64px'}], position: 30250, duration: 0 },
                { id: "eid428", tween: [ "style", "${_cover-title}", "left", '-510px', { fromValue: '530px'}], position: 1402, duration: 598 },
                { id: "eid443", tween: [ "style", "${_page3-maincopy2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 1128 },
                { id: "eid450", tween: [ "style", "${_page3-maincopy2}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750 },
                { id: "eid519", tween: [ "style", "${_sidebar-ch3}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutBounce" },
                { id: "eid455", tween: [ "style", "${_sidebar-ch1}", "display", 'block', { fromValue: 'none'}], position: 3656, duration: 0 },
                { id: "eid560", tween: [ "style", "${_sidebar-ch1}", "display", 'none', { fromValue: 'block'}], position: 8914, duration: 0 },
                { id: "eid566", tween: [ "style", "${_arrow-nav}", "opacity", '0', { fromValue: '0.32884299755096436'}], position: 24836, duration: 243 },
                { id: "eid517", tween: [ "transform", "${_page6-cta}", "scaleY", '1', { fromValue: '0.21'}], position: 19579, duration: 594, easing: "easeOutBounce" },
                { id: "eid500", tween: [ "style", "${_sidebar-ch2}", "opacity", '0.01', { fromValue: '1'}], position: 13000, duration: 256 },
                { id: "eid510", tween: [ "style", "${_page6-copy}", "top", '62px', { fromValue: '-168px'}], position: 18500, duration: 643 },
                { id: "eid522", tween: [ "style", "${_sidebar-ch4}", "display", 'block', { fromValue: 'none'}], position: 17608, duration: 0 },
                { id: "eid575", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0.000000'}], position: 26750, duration: 741 },
                { id: "eid498", tween: [ "style", "${_page6-bg}", "opacity", '1', { fromValue: '0'}], position: 17608, duration: 892 },
                { id: "eid524", tween: [ "style", "${_page6-bg}", "opacity", '0', { fromValue: '1'}], position: 20344, duration: 348 },
                { id: "eid547", tween: [ "style", "${_page7-cta}", "display", 'block', { fromValue: 'none'}], position: 23000, duration: 0 },
                { id: "eid579", tween: [ "style", "${_Text5Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 27958, duration: 750 },
                { id: "eid483", tween: [ "style", "${_page5-copy2}", "top", '79px', { fromValue: '-81px'}], position: 13704, duration: 865 },
                { id: "eid580", tween: [ "style", "${_Text5Copy2}", "height", '196px', { fromValue: '196px'}], position: 28708, duration: 0 },
                { id: "eid430", tween: [ "style", "${_cover}", "left", '-1040px', { fromValue: '0px'}], position: 1402, duration: 598 },
                { id: "eid431", tween: [ "style", "${_cover}", "left", '-1040px', { fromValue: '-1040px'}], position: 2000, duration: 0 },
                { id: "eid463", tween: [ "style", "${_page4-copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 750 },
                { id: "eid471", tween: [ "style", "${_page4-copy2}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 596 },
                { id: "eid487", tween: [ "style", "${_sidebar-ch2}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid516", tween: [ "transform", "${_page6-cta}", "scaleX", '1', { fromValue: '0.21'}], position: 19579, duration: 594, easing: "easeOutBounce" },
                { id: "eid544", tween: [ "style", "${_sidebar-ch5}", "display", 'block', { fromValue: 'none'}], position: 21000, duration: 0 },
                { id: "eid436", tween: [ "style", "${_page2-copy}", "top", '717px', { fromValue: '43px'}], position: 2595, duration: 320 },
                { id: "eid458", tween: [ "style", "${_page4-batteries}", "top", '329px', { fromValue: '669px'}], position: 8500, duration: 750 },
                { id: "eid476", tween: [ "style", "${_page5-copy}", "top", '74px', { fromValue: '284px'}], position: 12846, duration: 858 },
                { id: "eid535", tween: [ "style", "${_page7-bg}", "clip", [-0.4111329913139343,1116,778.703125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [335.38037109375,1116,344.14599609375,0]}], position: 21000, duration: 531 },
                { id: "eid573", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 26108, duration: 754 },
                { id: "eid459", tween: [ "style", "${_page4-batteries}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 750 },
                { id: "eid467", tween: [ "style", "${_page4-batteries}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 660 },
                { id: "eid587", tween: [ "style", "${_Text5Copy3}", "height", '243px', { fromValue: '243px'}], position: 28708, duration: 0 },
                { id: "eid577", tween: [ "style", "${_Text5Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 27399, duration: 647 },
                { id: "eid550", tween: [ "style", "${_arrow-nav}", "left", '838px', { fromValue: '933px'}], position: 3656, duration: 258 },
                { id: "eid536", tween: [ "style", "${_page7-bg}", "opacity", '1', { fromValue: '0'}], position: 21000, duration: 531 },
                { id: "eid554", tween: [ "style", "${_page7-bg}", "opacity", '0', { fromValue: '1'}], position: 23590, duration: 356 },
                { id: "eid304", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_btn-intro}', [] ], ""], position: 4280 }            ]
        }
    }
},
"page4cloud": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'page4-cloud',
                    rect: ['-117px', '-47px', '861px', '491px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.7281', '0.7281']],
                    fill: ['rgba(0,0,0,0)', 'images/page4-cloud.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_page4-cloud}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '0.7281'],
                ["transform", "scaleX", '0.7281'],
                ["style", "opacity", '0'],
                ["style", "left", '-117px']
            ],
            "${symbolSelector}": [
                ["style", "height", '357px'],
                ["style", "width", '627px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 24340,
            autoPlay: true,
            labels: {
                "reStart": 23026
            },
            timeline: [
                { id: "eid130", tween: [ "style", "${_page4-cloud}", "opacity", '1', { fromValue: '0'}], position: 22369, duration: 657 },
                { id: "eid129", tween: [ "style", "${_page4-cloud}", "top", '-67px', { fromValue: '-77px'}], position: 22369, duration: 657 },
                { id: "eid141", tween: [ "style", "${_page4-cloud}", "top", '-77px', { fromValue: '-67px'}], position: 23026, duration: 657 },
                { id: "eid142", tween: [ "style", "${_page4-cloud}", "top", '-67px', { fromValue: '-77px'}], position: 23683, duration: 657 }            ]
        }
    }
},
"walker1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '299px', '69px', 'auto', 'auto'],
                    id: 'page7-walker1',
                    type: 'image',
                    clip: ['rect(0px 50.0078125px 69px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/page7-walker1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_page7-walker1}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "clip", [0,50.0078125,69,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '69px'],
                ["style", "width", '299px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 41460,
            autoPlay: true,
            timeline: [
                { id: "eid221", tween: [ "style", "${_page7-walker1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 38750, duration: 0 },
                { id: "eid222", tween: [ "style", "${_page7-walker1}", "background-position", [-50,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 39000, duration: 0 },
                { id: "eid223", tween: [ "style", "${_page7-walker1}", "background-position", [-100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-50,0]}], position: 39250, duration: 0 },
                { id: "eid224", tween: [ "style", "${_page7-walker1}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 39500, duration: 0 },
                { id: "eid230", tween: [ "style", "${_page7-walker1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 39750, duration: 0 },
                { id: "eid231", tween: [ "style", "${_page7-walker1}", "background-position", [-50,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 40000, duration: 0 },
                { id: "eid232", tween: [ "style", "${_page7-walker1}", "background-position", [-100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-50,0]}], position: 40250, duration: 0 },
                { id: "eid233", tween: [ "style", "${_page7-walker1}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 40500, duration: 0 },
                { id: "eid234", tween: [ "style", "${_page7-walker1}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-150,0]}], position: 40710, duration: 0 },
                { id: "eid235", tween: [ "style", "${_page7-walker1}", "background-position", [-50,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 40960, duration: 0 },
                { id: "eid236", tween: [ "style", "${_page7-walker1}", "background-position", [-100,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-50,0]}], position: 41210, duration: 0 },
                { id: "eid237", tween: [ "style", "${_page7-walker1}", "background-position", [-150,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-100,0]}], position: 41460, duration: 0 },
                { id: "eid229", tween: [ "style", "${_page7-walker1}", "left", '170px', { fromValue: '0px'}], position: 39000, duration: 2460 }            ]
        }
    }
},
"btn-intro": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '135px', '92px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(40,40,40,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(40,40,40,0.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '135px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"menu": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['0px', '0px', '1025', '238', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['1px', '0px', '1024px', '238px', 'auto', 'auto'],
                        id: 'RectangleCopy',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(0,0,0,0.65)']
                    },
                    {
                        rect: ['93px', '129px', '358px', '162px', 'auto', 'auto'],
                        transform: [[], [], [], ['0.18559', '0.18559']],
                        id: 'arrow-download-pdf',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-pdf.png', '0px', '0px']
                    },
                    {
                        rect: ['820px', '195px', '148px', '30px', 'auto', 'auto'],
                        id: 'arrow-download-windows2',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-windows.png', '0px', '0px']
                    },
                    {
                        rect: ['618px', '195px', '95px', '30px', 'auto', 'auto'],
                        id: 'arrow-download-ios2',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-ios.png', '0px', '0px']
                    },
                    {
                        rect: ['382px', '195px', '142px', '30px', 'auto', 'auto'],
                        id: 'arrow-download-android2',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-download-android.png', '0px', '0px']
                    },
                    {
                        rect: ['199px', '190px', '2px', '40px', 'auto', 'auto'],
                        id: 'Rectangle6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        rect: ['342px', '190px', '2px', '40px', 'auto', 'auto'],
                        id: 'Rectangle6Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        rect: ['570px', '190px', '2px', '40px', 'auto', 'auto'],
                        id: 'Rectangle6Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        rect: ['765px', '190px', '2px', '40px', 'auto', 'auto'],
                        id: 'Rectangle6Copy3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1)']
                    },
                    {
                        rect: ['1px', '-41px', '400px', '259px', 'auto', 'auto'],
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-1.jpg', '0px', '0px']
                    },
                    {
                        rect: ['212px', '-41px', '400px', '259px', 'auto', 'auto'],
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        id: 'thumb-1Copy',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/thumb-intro.jpg', '0px', '0px']
                    },
                    {
                        rect: ['421px', '-41px', '400px', '259px', 'auto', 'auto'],
                        id: 'thumb-1Copy2',
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch1.jpg', '0px', '0px']
                    },
                    {
                        rect: ['629px', '-41px', '400px', '259px', 'auto', 'auto'],
                        id: 'thumb-1Copy3',
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch2.jpg', '0px', '0px']
                    },
                    {
                        rect: ['916px', '-41px', '400px', '259px', 'auto', 'auto'],
                        id: 'thumb-1Copy7',
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch3.jpg', '0px', '0px']
                    },
                    {
                        rect: ['1127px', '-41px', '400px', '259px', 'auto', 'auto'],
                        id: 'thumb-1Copy6',
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch4.jpg', '0px', '0px']
                    },
                    {
                        rect: ['1336px', '-41px', '400px', '259px', 'auto', 'auto'],
                        id: 'thumb-1Copy5',
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumb-ch5.jpg', '0px', '0px']
                    },
                    {
                        rect: ['1544px', '-41px', '400px', '259px', 'auto', 'auto'],
                        id: 'thumb-1Copy4',
                        transform: [[], [], [], ['0.39857', '0.39857']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumb-conclusion.jpg', '0px', '0px']
                    },
                    {
                        rect: ['956px', '43px', '83px', '95px', 'auto', 'auto'],
                        transform: [[], [], [], ['0.42105', '0.42105']],
                        type: 'image',
                        id: 'arrow-nav3',
                        display: 'block',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-nav.png', '0px', '0px']
                    },
                    {
                        rect: ['-14px', '43px', '83px', '95px', 'auto', 'auto'],
                        transform: [[], ['180'], [], ['0.42105', '0.42105']],
                        id: 'arrow-nav3Copy',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow-nav.png', '0px', '0px']
                    },
                    {
                        rect: ['-223px', '92px', '643px', '235px', 'auto', 'auto'],
                        id: 'thumbnails',
                        transform: [[], [], [], ['0.14', '0.14']],
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/thumbnails.png', '0px', '0px']
                    },
                    {
                        rect: ['121px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        type: 'rect',
                        id: 'Rectangle4Copy7',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['332px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        type: 'rect',
                        id: 'Rectangle4Copy6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['542px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        type: 'rect',
                        id: 'Rectangle4Copy8',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['749px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'block',
                        type: 'rect',
                        id: 'Rectangle4Copy9',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['118px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'none',
                        type: 'rect',
                        id: 'Rectangle5',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['328px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'none',
                        type: 'rect',
                        id: 'Rectangle5Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['538px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'none',
                        type: 'rect',
                        id: 'Rectangle5Copy2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    },
                    {
                        rect: ['745px', '37px', '159px', '103px', 'auto', 'auto'],
                        display: 'none',
                        type: 'rect',
                        id: 'Rectangle5Copy3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(255,255,255,0)']
                    }]
                },
                {
                    rect: ['43px', '366px', '113px', '45px', 'auto', 'auto'],
                    display: 'none',
                    type: 'rect',
                    id: 'btn-thumbnailsCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['43px', '186px', '113px', '45px', 'auto', 'auto'],
                    display: 'block',
                    type: 'rect',
                    id: 'btn-thumbnails',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arrow-download-ios2}": [
                ["style", "top", '195px'],
                ["style", "height", '30px'],
                ["style", "left", '618px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '95px']
            ],
            "${_btn-thumbnailsCopy}": [
                ["style", "top", '366px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "display", 'none'],
                ["style", "left", '43px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '45px']
            ],
            "${_Rectangle6Copy}": [
                ["style", "top", '190px'],
                ["style", "left", '342px'],
                ["style", "height", '40px']
            ],
            "${_arrow-download-pdf}": [
                ["style", "top", '129px'],
                ["transform", "scaleY", '0.18559'],
                ["style", "height", '162px'],
                ["transform", "scaleX", '0.18559'],
                ["style", "left", '93px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '358px']
            ],
            "${_thumb-1Copy2}": [
                ["transform", "scaleX", '0.39857'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '421px'],
                ["style", "top", '-41px']
            ],
            "${_thumb-1Copy4}": [
                ["style", "top", '-41px'],
                ["style", "left", '1544px'],
                ["transform", "scaleY", '0.39857'],
                ["transform", "scaleX", '0.39857']
            ],
            "${_arrow-nav3}": [
                ["style", "top", '43px'],
                ["transform", "scaleY", '0.42105'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.42105'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '956px']
            ],
            "${_btn-thumbnails}": [
                ["style", "top", '186px'],
                ["style", "height", '45px'],
                ["style", "display", 'block'],
                ["style", "left", '43px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ],
            "${_Group2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_Rectangle4Copy8}": [
                ["style", "display", 'block'],
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '542px']
            ],
            "${_arrow-download-windows2}": [
                ["style", "top", '195px'],
                ["style", "height", '30px'],
                ["style", "left", '820px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '148px']
            ],
            "${_arrow-download-android2}": [
                ["style", "top", '195px'],
                ["style", "height", '30px'],
                ["style", "left", '382px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '142px']
            ],
            "${_thumb-1Copy3}": [
                ["transform", "scaleX", '0.39857'],
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '629px']
            ],
            "${_Rectangle5Copy3}": [
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '745px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle4Copy7}": [
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Rectangle5Copy2}": [
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '538px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '238px'],
                ["style", "width", '1025px']
            ],
            "${_arrow-nav3Copy}": [
                ["style", "top", '43px'],
                ["transform", "scaleY", '0.42105'],
                ["transform", "rotateZ", '180deg'],
                ["transform", "scaleX", '0.42105'],
                ["style", "left", '-14px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '328px'],
                ["style", "display", 'none']
            ],
            "${_thumb-1Copy}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '212px'],
                ["style", "cursor", 'pointer']
            ],
            "${_thumbnails}": [
                ["transform", "scaleX", '0.14'],
                ["style", "top", '92px'],
                ["transform", "scaleY", '0.14'],
                ["style", "left", '-223px']
            ],
            "${_Rectangle6Copy3}": [
                ["style", "top", '190px'],
                ["style", "left", '765px'],
                ["style", "height", '40px']
            ],
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,0,0,0.65)'],
                ["style", "height", '238px'],
                ["style", "left", '1px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '190px'],
                ["style", "left", '199px'],
                ["style", "height", '40px']
            ],
            "${_thumb-1Copy7}": [
                ["style", "top", '-41px'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '916px'],
                ["transform", "scaleY", '0.39857']
            ],
            "${_Rectangle6Copy2}": [
                ["style", "top", '190px'],
                ["style", "left", '570px'],
                ["style", "height", '40px']
            ],
            "${_Rectangle4Copy6}": [
                ["style", "display", 'block'],
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '332px']
            ],
            "${_Rectangle4Copy9}": [
                ["style", "display", 'block'],
                ["style", "top", '37px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '749px']
            ],
            "${_Rectangle5}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '37px']
            ],
            "${_thumb-1Copy5}": [
                ["transform", "scaleX", '0.39857'],
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '1336px']
            ],
            "${_thumb-1}": [
                ["style", "top", '-41px'],
                ["transform", "scaleY", '0.39857'],
                ["transform", "scaleX", '0.39857'],
                ["style", "left", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_thumb-1Copy6}": [
                ["transform", "scaleX", '0.39857'],
                ["transform", "scaleY", '0.39857'],
                ["style", "left", '1127px'],
                ["style", "top", '-41px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2008,
            autoPlay: false,
            labels: {
                "startMEnu": 0,
                "endMenu": 378,
                "next1": 577,
                "next2": 1283
            },
            timeline: [
                { id: "eid345", tween: [ "style", "${_thumb-1Copy7}", "left", '-3px', { fromValue: '916px'}], position: 569, duration: 681 },
                { id: "eid397", tween: [ "style", "${_thumb-1Copy7}", "left", '-923px', { fromValue: '-3px'}], position: 1283, duration: 725 },
                { id: "eid342", tween: [ "style", "${_thumb-1Copy4}", "left", '625px', { fromValue: '1544px'}], position: 569, duration: 681 },
                { id: "eid394", tween: [ "style", "${_thumb-1Copy4}", "left", '-295px', { fromValue: '625px'}], position: 1283, duration: 725 },
                { id: "eid380", tween: [ "style", "${_Rectangle5Copy}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid314", tween: [ "style", "${_Group2}", "top", '180px', { fromValue: '0px'}], position: 0, duration: 378 },
                { id: "eid333", tween: [ "style", "${_thumb-1}", "left", '-919px', { fromValue: '1px'}], position: 569, duration: 681 },
                { id: "eid330", tween: [ "style", "${_thumb-1Copy2}", "left", '-499px', { fromValue: '421px'}], position: 569, duration: 681 },
                { id: "eid379", tween: [ "style", "${_Rectangle5Copy2}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid313", tween: [ "style", "${_btn-thumbnails}", "top", '366px', { fromValue: '186px'}], position: 0, duration: 378 },
                { id: "eid344", tween: [ "style", "${_thumb-1Copy5}", "left", '417px', { fromValue: '1336px'}], position: 569, duration: 681 },
                { id: "eid396", tween: [ "style", "${_thumb-1Copy5}", "left", '-503px', { fromValue: '417px'}], position: 1283, duration: 725 },
                { id: "eid332", tween: [ "style", "${_thumb-1Copy3}", "left", '-291px', { fromValue: '629px'}], position: 569, duration: 681 },
                { id: "eid401", tween: [ "style", "${_thumb-1Copy3}", "left", '-292px', { fromValue: '-291px'}], position: 1250, duration: 758 },
                { id: "eid348", tween: [ "style", "${_btn-thumbnailsCopy}", "display", 'block', { fromValue: 'none'}], position: 383, duration: 0 },
                { id: "eid376", tween: [ "style", "${_Rectangle4Copy6}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 },
                { id: "eid331", tween: [ "style", "${_thumb-1Copy}", "left", '-708px', { fromValue: '212px'}], position: 569, duration: 681 },
                { id: "eid374", tween: [ "style", "${_Rectangle4Copy9}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 },
                { id: "eid343", tween: [ "style", "${_thumb-1Copy6}", "left", '208px', { fromValue: '1127px'}], position: 569, duration: 681 },
                { id: "eid395", tween: [ "style", "${_thumb-1Copy6}", "left", '-712px', { fromValue: '208px'}], position: 1283, duration: 725 },
                { id: "eid377", tween: [ "style", "${_Rectangle4Copy7}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 },
                { id: "eid378", tween: [ "style", "${_Rectangle5Copy3}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid404", tween: [ "style", "${_arrow-nav3}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
                { id: "eid381", tween: [ "style", "${_Rectangle5}", "display", 'block', { fromValue: 'none'}], position: 1161, duration: 0 },
                { id: "eid319", tween: [ "style", "${_btn-thumbnails}", "display", 'none', { fromValue: 'block'}], position: 378, duration: 0 },
                { id: "eid375", tween: [ "style", "${_Rectangle4Copy8}", "display", 'none', { fromValue: 'block'}], position: 531, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-74354979");
