"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoinSymbol = void 0;
function getCoinSymbol(coinType) {
    var _a;
    return (_a = {
        0: 'BTC',
        2: 'LTC',
        3: 'DOGE',
        4: 'RDD',
        5: 'DASH',
        6: 'PPC',
        7: 'NMC',
        8: 'FTC',
        9: 'XCP',
        10: 'BLK',
        11: 'NSR',
        12: 'NBT',
        13: 'MZC',
        14: 'VIA',
        15: 'XCH',
        16: 'RBY',
        17: 'GRS',
        18: 'DGC',
        19: 'CCN',
        20: 'DGB',
        22: 'MONA',
        23: 'CLAM',
        24: 'XPM',
        25: 'NEOS',
        26: 'JBS',
        27: 'ZRC',
        28: 'VTC',
        29: 'NXT',
        30: 'BURST',
        31: 'MUE',
        32: 'ZOOM',
        33: 'VASH',
        34: 'CDN',
        35: 'SDC',
        36: 'PKB',
        37: 'PND',
        38: 'START',
        39: 'MOIN',
        40: 'EXP',
        41: 'EMC2',
        42: 'DCR',
        43: 'XEM',
        44: 'PART',
        45: 'ARG',
        48: 'SHR',
        49: 'GCR',
        50: 'NVC',
        51: 'AC',
        52: 'BTCD',
        53: 'DOPE',
        54: 'TPC',
        55: 'AIB',
        56: 'EDRC',
        57: 'SYS',
        58: 'SLR',
        59: 'SMLY',
        60: 'ETH',
        61: 'ETC',
        62: 'PSB',
        63: 'LDCN',
        65: 'XBC',
        66: 'IOP',
        67: 'NXS',
        68: 'INSN',
        69: 'OK',
        70: 'BRIT',
        71: 'CMP',
        72: 'CRW',
        73: 'BELA',
        74: 'ICX',
        75: 'FJC',
        76: 'MIX',
        77: 'XVG',
        78: 'EFL',
        79: 'CLUB',
        80: 'RICHX',
        81: 'POT',
        82: 'QRK',
        83: 'TRC',
        84: 'GRC',
        85: 'AUR',
        86: 'IXC',
        87: 'NLG',
        88: 'BITB',
        89: 'BTA',
        90: 'XMY',
        91: 'BSD',
        92: 'UNO',
        93: 'MTR',
        94: 'GB',
        95: 'SHM',
        96: 'CRX',
        97: 'BIQ',
        98: 'EVO',
        99: 'STO',
        100: 'BIGUP',
        101: 'GAME',
        102: 'DLC',
        103: 'ZYD',
        104: 'DBIC',
        105: 'STRAT',
        106: 'SH',
        107: 'MARS',
        108: 'UBQ',
        109: 'PTC',
        110: 'NRO',
        111: 'ARK',
        112: 'USC',
        113: 'THC',
        114: 'LINX',
        115: 'ECN',
        116: 'DNR',
        117: 'PINK',
        118: 'ATOM',
        119: 'PIVX',
        120: 'FLASH',
        121: 'ZEN',
        122: 'PUT',
        123: 'ZNY',
        124: 'UNIFY',
        125: 'XST',
        126: 'BRK',
        127: 'VC',
        128: 'XMR',
        129: 'VOX',
        130: 'NAV',
        131: 'FCT',
        132: 'EC',
        133: 'ZEC',
        134: 'LSK',
        135: 'STEEM',
        136: 'XZC',
        137: 'RBTC',
        139: 'RPT',
        140: 'LBC',
        141: 'KMD',
        142: 'BSQ',
        143: 'RIC',
        144: 'XRP',
        145: 'BCH',
        146: 'NEBL',
        147: 'ZCL',
        148: 'XLM',
        149: 'NLC2',
        150: 'WHL',
        151: 'ERC',
        152: 'DMD',
        153: 'BTM',
        154: 'BIO',
        155: 'XWCC',
        156: 'BTG',
        157: 'BTC2X',
        158: 'SSN',
        159: 'TOA',
        160: 'BTX',
        161: 'ACC',
        162: 'BCO',
        163: 'ELLA',
        164: 'PIRL',
        165: 'XNO',
        166: 'VIVO',
        167: 'FRST',
        168: 'HNC',
        169: 'BUZZ',
        170: 'MBRS',
        171: 'HC',
        172: 'HTML',
        173: 'ODN',
        174: 'ONX',
        175: 'RVN',
        176: 'GBX',
        177: 'BTCZ',
        178: 'POA',
        179: 'NYC',
        180: 'MXT',
        181: 'WC',
        182: 'MNX',
        183: 'BTCP',
        184: 'MUSIC',
        185: 'BCA',
        186: 'CRAVE',
        187: 'STAK',
        188: 'WBTC',
        189: 'LCH',
        190: 'EXCL',
        192: 'LCC',
        193: 'XFE',
        194: 'EOS',
        195: 'TRX',
        196: 'KOBO',
        197: 'HUSH',
        198: 'BAN',
        199: 'ETF',
        200: 'OMNI',
        201: 'BIFI',
        202: 'UFO',
        203: 'CNMC',
        204: 'BCN',
        205: 'RIN',
        206: 'ATP',
        207: 'EVT',
        208: 'ATN',
        209: 'BIS',
        210: 'NEET',
        211: 'BOPO',
        212: 'OOT',
        213: 'ALIAS',
        214: 'MONK',
        215: 'BOXY',
        216: 'FLO',
        217: 'MEC',
        218: 'BTDX',
        219: 'XAX',
        220: 'ANON',
        221: 'LTZ',
        222: 'BITG',
        223: 'ICP',
        224: 'SMART',
        225: 'XUEZ',
        226: 'HLM',
        227: 'WEB',
        228: 'ACM',
        229: 'NOS',
        230: 'BITC',
        231: 'HTH',
        232: 'TZC',
        233: 'VAR',
        234: 'IOV',
        235: 'FIO',
        236: 'BSV',
        237: 'DXN',
        238: 'QRL',
        239: 'PCX',
        240: 'LOKI',
        242: 'NIM',
        243: 'SOV',
        244: 'JCT',
        245: 'SLP',
        246: 'EWT',
        247: 'UC',
        248: 'EXOS',
        249: 'ECA',
        250: 'SOOM',
        251: 'XRD',
        252: 'FREE',
        253: 'NPW',
        254: 'BST',
        256: 'NANO',
        257: 'BTCC',
        259: 'ZEST',
        260: 'ABT',
        261: 'PION',
        262: 'DT3',
        263: 'ZBUX',
        264: 'KPL',
        265: 'TPAY',
        266: 'ZILLA',
        267: 'ANK',
        268: 'BCC',
        269: 'HPB',
        270: 'ONE',
        271: 'SBC',
        272: 'IPC',
        273: 'DMTC',
        274: 'OGC',
        275: 'SHIT',
        276: 'ANDES',
        277: 'AREPA',
        278: 'BOLI',
        279: 'RIL',
        280: 'HTR',
        281: 'FCTID',
        282: 'BRAVO',
        283: 'ALGO',
        284: 'BZX',
        285: 'GXX',
        286: 'HEAT',
        287: 'XDN',
        288: 'FSN',
        289: 'CPC',
        290: 'BOLD',
        291: 'IOST',
        292: 'TKEY',
        293: 'USE',
        294: 'BCZ',
        295: 'IOC',
        296: 'ASF',
        297: 'MASS',
        298: 'FAIR',
        299: 'NUKO',
        300: 'GNX',
        301: 'DIVI',
        302: 'CMT',
        303: 'EUNO',
        304: 'IOTX',
        305: 'ONION',
        306: '8BIT',
        307: 'ATC',
        308: 'BTS',
        309: 'CKB',
        310: 'UGAS',
        311: 'ADS',
        312: 'ARA',
        313: 'ZIL',
        314: 'MOAC',
        315: 'SWTC',
        316: 'VNSC',
        317: 'PLUG',
        318: 'MAN',
        319: 'ECC',
        320: 'RPD',
        321: 'RAP',
        322: 'GARD',
        323: 'ZER',
        324: 'EBST',
        325: 'SHARD',
        326: 'MRX',
        327: 'CMM',
        328: 'BLOCK',
        329: 'AUDAX',
        330: 'LUNA',
        331: 'ZPM',
        332: 'KUVA',
        333: 'MEM',
        334: 'CS',
        335: 'SWIFT',
        336: 'FIX',
        337: 'CPC',
        338: 'VGO',
        339: 'DVT',
        340: 'N8V',
        341: 'MTNS',
        342: 'BLAST',
        343: 'DCT',
        344: 'AUX',
        345: 'USDP',
        346: 'HTDF',
        347: 'YEC',
        348: 'QLC',
        349: 'TEA',
        350: 'ARW',
        351: 'MDM',
        352: 'CYB',
        353: 'LTO',
        354: 'DOT',
        355: 'AEON',
        356: 'RES',
        357: 'AYA',
        358: 'DAPS',
        359: 'CSC',
        360: 'VSYS',
        361: 'NOLLAR',
        362: 'XNOS',
        363: 'CPU',
        364: 'LAMB',
        365: 'VCT',
        366: 'CZR',
        367: 'ABBC',
        368: 'HET',
        369: 'XAS',
        370: 'VDL',
        371: 'MED',
        372: 'ZVC',
        373: 'VESTX',
        374: 'DBT',
        375: 'SEOS',
        376: 'MXW',
        377: 'ZNZ',
        378: 'XCX',
        379: 'SOX',
        380: 'NYZO',
        381: 'ULC',
        382: 'RYO',
        383: 'KAL',
        384: 'XSN',
        385: 'DOGEC',
        386: 'BMV',
        387: 'QBC',
        388: 'IMG',
        389: 'QOS',
        390: 'PKT',
        391: 'LHD',
        392: 'CENNZ',
        393: 'HSN',
        394: 'CRO',
        395: 'UMBRU',
        396: 'EVER',
        397: 'NEAR',
        398: 'XPC',
        399: 'ZOC',
        400: 'NIX',
        401: 'UC',
        402: 'GALI',
        403: 'OLT',
        404: 'XBI',
        405: 'DONU',
        406: 'EARTHS',
        407: 'HDD',
        408: 'SUGAR',
        409: 'AILE',
        410: 'TENT',
        411: 'TAN',
        412: 'AIN',
        413: 'MSR',
        414: 'SUMO',
        415: 'ETN',
        416: 'BYTZ',
        417: 'WOW',
        418: 'XTNC',
        419: 'LTHN',
        420: 'NODE',
        421: 'AGM',
        422: 'CCX',
        423: 'TNET',
        424: 'TELOS',
        425: 'AION',
        426: 'BC',
        427: 'KTV',
        428: 'ZCR',
        429: 'ERG',
        430: 'PESO',
        431: 'BTC2',
        432: 'XRPHD',
        433: 'WE',
        434: 'KSM',
        435: 'PCN',
        436: 'NCH',
        437: 'ICU',
        438: 'LN',
        439: 'DTP',
        440: 'BTCR',
        441: 'AERGO',
        442: 'XTH',
        443: 'LV',
        444: 'PHR',
        445: 'VITAE',
        446: 'COCOS',
        447: 'DIN',
        448: 'SPL',
        449: 'YCE',
        450: 'XLR',
        451: 'KTS',
        452: 'DGLD',
        453: 'XNS',
        454: 'EM',
        455: 'SHN',
        456: 'SEELE',
        457: 'AE',
        458: 'ODX',
        459: 'KAVA',
        460: 'GLEEC',
        461: 'FIL',
        462: 'RUTA',
        463: 'CSDT',
        464: 'ETI',
        465: 'ZSLP',
        466: 'ERE',
        467: 'DX',
        468: 'CPS',
        469: 'BTH',
        470: 'MESG',
        471: 'FIMK',
        472: 'AR',
        473: 'OGO',
        474: 'ROSE',
        475: 'BARE',
        476: 'GLEEC',
        477: 'CLR',
        478: 'RNG',
        479: 'OLO',
        480: 'PEXA',
        481: 'MOON',
        482: 'OCEAN',
        483: 'BNT',
        484: 'AMO',
        485: 'FCH',
        486: 'LAT',
        487: 'COIN',
        488: 'VEO',
        489: 'CCA',
        490: 'GFN',
        491: 'BIP',
        492: 'KPG',
        493: 'FIN',
        494: 'BAND',
        495: 'DROP',
        496: 'BHT',
        497: 'LYRA',
        498: 'CS',
        499: 'RUPX',
        500: 'THETA',
        501: 'SOL',
        502: 'THT',
        503: 'CFX',
        504: 'KUMA',
        505: 'HASH',
        506: 'CSPR',
        507: 'EARTH',
        508: 'EGLD',
        509: 'CHI',
        510: 'KOTO',
        511: 'OTC',
        512: 'XRD',
        513: 'SEELEN',
        514: 'AETH',
        515: 'DNA',
        516: 'VEE',
        517: 'SIERRA',
        518: 'LET',
        519: 'BSC',
        520: 'BTCV',
        521: 'ABA',
        522: 'SCC',
        523: 'EDG',
        524: 'AMS',
        525: 'GOSS',
        526: 'BU',
        527: 'GRAM',
        528: 'YAP',
        529: 'SCRT',
        530: 'NOVO',
        531: 'GHOST',
        532: 'HST',
        533: 'PRJ',
        534: 'YOU',
        535: 'XHV',
        536: 'BYND',
        537: 'JOYS',
        538: 'VAL',
        539: 'FLOW',
        540: 'SMESH',
        541: 'SCDO',
        542: 'IQS',
        543: 'BIND',
        544: 'COINEVO',
        545: 'SCRIBE',
        546: 'HYN',
        547: 'BHP',
        548: 'BBC',
        549: 'MKF',
        550: 'XDC',
        551: 'STR',
        552: 'SUM',
        553: 'HBC',
        555: 'BCS',
        556: 'KTS',
        557: 'LKR',
        558: 'TAO',
        559: 'XWC',
        560: 'DEAL',
        561: 'NTY',
        562: 'TOP',
        564: 'AG',
        565: 'CICO',
        566: 'IRIS',
        567: 'NCG',
        568: 'LRG',
        569: 'SERO',
        570: 'BDX',
        571: 'CCXX',
        572: 'SLS',
        573: 'SRM',
        575: 'VIVT',
        576: 'BPS',
        577: 'NKN',
        578: 'ICL',
        579: 'BONO',
        580: 'PLC',
        581: 'DUN',
        582: 'DMCH',
        583: 'CTC',
        584: 'KELP',
        585: 'GBCR',
        586: 'XDAG',
        587: 'PRV',
        588: 'SCAP',
        589: 'TFUEL',
        590: 'GTM',
        591: 'RNL',
        592: 'GRIN',
        593: 'MWC',
        594: 'DOCK',
        595: 'POLYX',
        596: 'DIVER',
        597: 'XEP',
        598: 'APN',
        599: 'TFC',
        600: 'UTE',
        601: 'MTC',
        602: 'NC',
        603: 'XINY',
        604: 'DYN',
        605: 'BUFS',
        606: 'STOS',
        607: 'TON',
        608: 'TAFT',
        609: 'HYDRA',
        610: 'NOR',
        613: 'WCN',
        614: 'OPT',
        615: 'PSWAP',
        616: 'VAL',
        617: 'XOR',
        618: 'SSP',
        619: 'DEI',
        621: 'ZERO',
        622: 'ALPHA',
        623: 'BDECO',
        624: 'NOBL',
        625: 'EAST',
        626: 'KDA',
        627: 'SOUL',
        628: 'LORE',
        629: 'FNR',
        630: 'NEXUS',
        631: 'QTZ',
        632: 'XMA',
        633: 'CALL',
        634: 'VAL',
        635: 'POKT',
        636: 'EMIT',
        637: 'APTOS',
        638: 'ADON',
        639: 'BTSG',
        640: 'LFC',
        641: 'KCS',
        642: 'KCC',
        643: 'AZERO',
        644: 'TREE',
        645: 'LX',
        646: 'XLN',
        647: 'CIC',
        648: 'ZRB',
        650: 'UCO',
        651: 'SFX',
        652: 'SFT',
        653: 'WSFX',
        654: 'USDG',
        655: 'WMP',
        659: 'KOIN',
        660: 'PIRATE',
        663: 'SFRX',
        666: 'ACT',
        667: 'PRKL',
        668: 'SSC',
        669: 'GC',
        670: 'PLGR',
        671: 'MPLGR',
        672: 'KNOX',
        673: 'ZED',
        674: 'CNDL',
        675: 'WLKR',
        676: 'WLKRR',
        677: 'YUNGE',
        678: 'Voken',
        679: 'APL',
        680: 'Evrynet',
        681: 'NENG',
        682: 'CHTA',
        685: 'OAS',
        686: 'KAR',
        688: 'CET',
        690: 'KLV',
        694: 'VTBC',
        698: 'VEIL',
        699: 'GTB',
        700: 'XDAI',
        701: 'COM',
        702: 'CCC',
        707: 'MCOIN',
        711: 'CHC',
        712: 'SERF',
        713: 'XTL',
        714: 'BNB',
        715: 'SIN',
        716: 'DLN',
        717: 'BONTE',
        718: 'PEER',
        725: 'MCX',
        730: 'HEALIOS',
        731: 'BMK',
        734: 'DENTX',
        737: 'ATOP',
        747: 'CFG',
        750: 'XPRT',
        757: 'HONEY',
        768: 'BALLZ',
        770: 'COSA',
        771: 'BR',
        775: 'PLSR',
        776: 'KEY',
        777: 'BTW',
        780: 'PLCUC',
        781: 'PLCUX',
        782: 'PLCU',
        784: 'SUI',
        786: 'UIDD',
        787: 'ACA',
        788: 'BNC',
        789: 'TAU',
        799: 'PDEX',
        800: 'BEET',
        801: 'DST',
        804: 'ZKS',
        808: 'QVT',
        809: 'SDN',
        810: 'ASTR',
        813: 'MEER',
        818: 'VET',
        819: 'REEF',
        820: 'CLO',
        822: 'BDB',
        827: 'ACE',
        828: 'CCN',
        831: 'CRUZ',
        832: 'SAPP',
        833: '777',
        834: 'KYAN',
        835: 'AZR',
        836: 'CFL',
        837: 'DASHD',
        838: 'TRTT',
        839: 'UCR',
        840: 'PNY',
        841: 'BECN',
        842: 'MONK',
        843: 'SAGA',
        844: 'SUV',
        845: 'ESK',
        846: 'OWO',
        847: 'PEPS',
        848: 'BIR',
        849: 'MOBIC',
        850: 'FLS',
        852: 'DSM',
        853: 'PRCY',
        858: 'HVH',
        866: 'MOB',
        868: 'IF',
        877: 'NAM',
        880: 'LUM',
        883: 'ZBC',
        886: 'ADF',
        888: 'NEO',
        889: 'TOMO',
        890: 'XSEL',
        896: 'LKSC',
        898: 'AS',
        899: 'XEC',
        900: 'LMO',
        901: 'NXT',
        904: 'HNT',
        907: 'FIS',
        909: 'SGE',
        911: 'GERT',
        916: 'META',
        917: 'FRA',
        919: 'CCD',
        921: 'AVN',
        925: 'DIP',
        928: 'GHM',
        931: 'RUNE',
        945: 'UNLOCK',
        955: 'LTP',
        960: 'VKAX',
        966: 'MATIC',
        968: 'UNW',
        970: 'TWINS',
        977: 'TLOS',
        981: 'TAFECO',
        985: 'AU',
        987: 'VCG',
        988: 'XAZAB',
        989: 'AIOZ',
        990: 'CORE',
        991: 'PEC',
        992: 'UNT',
        993: 'XRB',
        994: 'QUAI',
        995: 'CAPS',
        996: 'OKT',
        997: 'SUM',
        998: 'LBTC',
        999: 'BCD',
        1000: 'BTN',
        1001: 'TT',
        1002: 'BKT',
        1003: 'NODL',
        1004: 'PCOIN',
        1005: 'TAO',
        1006: 'HSK',
        1007: 'FTM',
        1008: 'RPG',
        1010: 'HT',
        1011: 'ELV',
        1013: 'BIC',
        1020: 'EVC',
        1022: 'XRD',
        1023: 'ONE',
        1024: 'ONT',
        1025: 'CZZ',
        1026: 'KEX',
        1027: 'MCM',
        1032: 'BTCR',
        1042: 'MFID',
        1111: 'BBC',
        1120: 'RISE',
        1122: 'CMT',
        1128: 'ETSC',
        1129: 'DFI',
        1130: 'DFI',
        1137: '$DAG',
        1145: 'CDY',
        1155: 'EFI',
        1170: 'HOO',
        1234: 'ALPH',
        1284: 'GLMR',
        1285: 'MOVR',
        1298: 'WPC',
        1308: 'WEI',
        1337: 'DFC',
        1397: 'HYC',
        1410: 'TENTSLP',
        1510: 'XSC',
        1512: 'AAC',
        1533: 'BEAM',
        1555: 'APC',
        1616: 'ELF',
        1618: 'AUDL',
        1620: 'ATH',
        1627: 'LUME',
        1642: 'NEW',
        1657: 'BTA',
        1668: 'NEOX',
        1669: 'MEWC',
        1688: 'BCX',
        1729: 'XTZ',
        1776: 'LBTC',
        1777: 'BBP',
        1784: 'JPYS',
        1789: 'VEGA',
        1815: 'ADA',
        1818: 'CUBE',
        1856: 'TES',
        1888: 'ZTX',
        1899: 'XEC',
        1901: 'CLC',
        1919: 'VIPS',
        1926: 'CITY',
        1955: 'XX',
        1977: 'XMX',
        1984: 'TRTL',
        1985: 'SLRT',
        1986: 'QTH',
        1987: 'EGEM',
        1988: 'MIRA',
        1989: 'HODL',
        1990: 'PHL',
        1991: 'SC',
        1996: 'MYT',
        1997: 'POLIS',
        1998: 'XMCC',
        1999: 'COLX',
        2000: 'GIN',
        2001: 'MNP',
        2002: 'MLN',
        2017: 'KIN',
        2018: 'EOSC',
        2019: 'GBT',
        2020: 'PKC',
        2021: 'SKT',
        2022: 'XHT',
        2048: 'MCASH',
        2049: 'TRUE',
        2086: 'KILT',
        2109: 'SAMA',
        2112: 'IoTE',
        2137: 'XRG',
        2182: 'CHZ',
        2221: 'ASK',
        2301: 'QTUM',
        2302: 'ETP',
        2303: 'GXC',
        2304: 'CRP',
        2305: 'ELA',
        2338: 'SNOW',
        2365: 'XIN',
        2570: 'AOA',
        2718: 'NAS',
        2894: 'REOSC',
        2941: 'BND',
        3003: 'LUX',
        3030: 'HBAR',
        3077: 'COS',
        3276: 'CCC',
        3333: 'SXP',
        3377: 'ROI',
        3381: 'DYN',
        3383: 'SEQ',
        3552: 'DEO',
        3564: 'DST',
        3601: 'CY',
        4040: 'FC8',
        4096: 'YEE',
        4218: 'IOTA',
        4219: 'SMR',
        4242: 'AXE',
        4343: 'XYM',
        4444: 'C4E',
        4919: 'XVM',
        5006: 'SBC',
        5248: 'FIC',
        5353: 'HNS',
        5404: 'ISK',
        5467: 'ALTME',
        5555: 'FUND',
        5757: 'STX',
        5895: 'VOW',
        5920: 'SLU',
        6060: 'GO',
        6174: 'MOI',
        6599: 'RSC',
        6666: 'BPA',
        6688: 'SAFE',
        6779: 'COTI',
        6969: 'ROGER',
        7091: 'TOPL',
        7331: 'KLY',
        7341: 'SHFT',
        7777: 'BTV',
        8000: 'SKY',
        8192: 'PAC',
        8217: 'KLAY',
        8339: 'BTQ',
        8444: 'XCH',
        8680: 'PLMNT',
        8888: 'SBTC',
        8964: 'NULS',
        8997: 'BBC',
        8998: 'JGC',
        8999: 'BTP',
        9000: 'AVAX',
        9001: 'ARB1',
        9002: 'BOBA',
        9003: 'LOOP',
        9004: 'STRK',
        9005: 'AVAXC',
        9006: 'BSC',
        9797: 'NRG',
        9888: 'BTF',
        9999: 'GOD',
        10000: 'FO',
        10226: 'RTM',
        10291: 'XRC',
        10605: 'XPI',
        11111: 'ESS',
        12345: 'IPOS',
        12586: 'MINA',
        13107: 'BTY',
        13108: 'YCC',
        14001: 'WAX',
        15845: 'SDGO',
        16181: 'XTX',
        16754: 'ARDR',
        18000: 'MTR',
        19165: 'SAFE',
        19167: 'FLUX',
        19169: 'RITO',
        20036: 'XND',
        21004: 'C4EI',
        21888: 'PCT',
        22504: 'PWR',
        25252: 'BELL',
        25718: 'CHX',
        29223: 'NEXA',
        31102: 'ESN',
        33416: 'TEO',
        33878: 'BTCS',
        34952: 'BTT',
        37992: 'FXTC',
        39321: 'AMA',
        42069: 'FACT',
        43028: 'AXIV',
        49262: 'EVE',
        49344: 'STASH',
        52752: 'CELO',
        61616: 'TH',
        65536: 'KETH',
        69420: 'GRLC',
        70007: 'GWL',
        77777: 'ZYN',
        88888: 'RYO',
        99999: 'WICC',
        100500: 'HOME',
        101010: 'STC',
        105105: 'STRAX',
        111111: 'KAS',
        161803: 'APTA',
        200625: 'AKA',
        200665: 'GENOM',
        246529: 'ATS',
        261131: 'ZAMA',
        314159: 'PI',
        333332: 'VALUE',
        333333: '3333',
        424242: 'X42',
        534352: 'SCR',
        666666: 'VITE',
        888888: 'SEA',
        1048576: 'AMAX',
        1171337: 'ILT',
        1313114: 'ETHO',
        1313500: 'XERO',
        1712144: 'LAX',
        3924011: 'EPK',
        4741444: 'HYD',
        5249353: 'BCO',
        5249354: 'BHD',
        5264462: 'PTN',
        5655640: 'VLX',
        5718350: 'WAN',
        5741564: 'WAVES',
        5741565: 'WEST',
        6382179: 'ABC',
        6517357: 'CRM',
        7562605: 'SEM',
        7567736: 'ION',
        7777777: 'FCT',
        7825266: 'WGR',
        7825267: 'OBSR',
        8163271: 'AFS',
        15118976: 'XDS',
        61717561: 'AQUA',
        88888888: 'HATCH',
        91927009: 'kUSD',
        99999996: 'GENS',
        99999997: 'EQ',
        99999998: 'FLUID',
        99999999: 'QKC',
        608589380: 'FVDC'
    }[coinType]) !== null && _a !== void 0 ? _a : '';
}
exports.getCoinSymbol = getCoinSymbol;
