# General information


Base URL: 
    
    https://api.tutti.ch/v10/

Required headers:

    X-Tutti-Source: web
    X-Tutti-Hash: 9d7c4bc7-6d1e-4c55-9c60-2bd51b72c4f4 (or any other UUID)
    
Image generation:

    https://c.tutti.ch/<type>/<image_name>
    
Where type is one of the following

    big: 1024x768
    images: 640x480
    thumbs: 121x90

# Endpoints

## Ads list

    description: Search for active ads
    path: /list.json
    paramters:
        o: Integer, page number
        
### Example
    
curl:

    curl 'https://api.tutti.ch/v10/list.json' -H 'X-Tutti-Hash: 9d7c4bc7-6d1e-4c55-9c60-2bd51b72c4f4' -H 'X-Tutti-Source: web' --compressed


Response:

    {
    "search_total": 1188364,
    "epoch_time": "1492701470",
    "nextpagetoken": "15091322,1492701262,61",
    "gallery_items": [
        {
            "id": "14093401",
            "user_alias": "mariella",
            "public_account_id": "2582385068609250214",
            "subject": "Hogan",
            "body": "scarponcini donna colore nero  nr 37 - nuovi mai calzati!",
            "price": " 80.-",
            "category_info": {
                "id": "6650",
                "name": "Scarpe da donna"
            },
            "language": "it",
            "phone_hash": "f010dbd09b202acd79eeeeeb4c28540bfdf4ddd5",
            "image_names": [
                "1405623655.jpg",
                "1422670293.jpg",
                "1414146974.jpg",
                "1443084601.jpg"
            ],
            "thumb_name": "1405623655.jpg",
            "location_info": {
                "region_id": 18,
                "region_name": "Ticino",
                "plz": "6952"
            },
            "type": "s",
            "company_ad": false,
            "epoch_time": 1492626861,
            "highlight": true,
            "parameters": [
                {
                    "id": "price",
                    "value": "80.-",
                    "label": "Prezzo CHF"
                },
                {
                    "id": "paymethod_sheek",
                    "value": "1",
                    "label": ""
                },
                {
                    "id": "zipcode",
                    "value": "6952",
                    "label": "CAP"
                },
                {
                    "id": "type",
                    "value": "Offerte",
                    "label": "Tipo"
                }
            ]
        },
        {
            "id": "14852193",
            "user_alias": "Jack",
            "public_account_id": "488065407771878168",
            "subject": "PS3 (38 Games) + Wii Set",
            "body": "Verkaufe PS3 160GB mit ganz viel Zubehör: \n- 1x Konsole (auch Blue Ray Player)\n- 1x Controller\n- 1x Kabel, um Controller aufzuladen\n- 1x Stereo-AV-Kabel\n- Folgende Games:\n- UNCHARTED DRAKE'S FORTUNE\n- UNCHARTED 2 - AMONG THIEVES\n- UNCHARTED 3 - DRAKE'S DECEPTION\n- RESISTANCE 2\n- BRINK - 100% UNCUT\n- CRYSIS 2\n- CRYSIS 3\n- ASSASSIN'S CREED 2\n- ASSASSIN CREED BROTHERHOOD\n- ASSASSIN CREED REVELATIONS\n- ASSASSIN CREED 3\n- ASSASSIN CREED BLACK FLAG\n- BATTLEFIELD - BAD COMPANY\n- BATTLEFIELD - BAD COMPANY 2\n- CALL OF DUTY - BLACK OPS\n- CALL OF DUTY - BLACK OPS 2\n- CALL OF DUTY - WORLD AT WAR\n- CALL OF DUTY - MODERN WAREFARE 2\n- STAR WARS - THE FORCE UNLEASHED 2\n- THE JACK AND DAXTER TRILOGY\n- BEYOND TWO SOULS\n- SPLINTER CELL TRILOGY\n- ARMY OF TWO\n- DEUS EX HUMAN REVOLUTION\n- REMEMBER ME\n- HITMAN ABSOLUTION (PROFESSIONAL EDITION)\n- MASS EFFECT 2\n- MASS EFFECT 3\n- 007 BLOOD STONE\n- HAZE\n- FUSE\n- DISHONORED (DIE MAKSE DES ZORNS 100% UNCUT)\n- MEDAL OF HONOR LIMITED EDITION\n- MEDAL OF HONOR - WARFIGHTER\n- RATCHET & CLANK - QFORCE\n- RATCHET & CLANK - ALL 4 ONE\n- RATCHET & CLANK - TOOLS OF DESTRUCTION\n- RATCHET & CLANK - A CRACK IN TIME\n\nHinzu kommt noch:\n1x Nintendo Wii-Konsole (Grundgerät)\n2x Wii-Fernbedienung und Nunchuk Controller\n2x Game Cube Controller\n1x Wii-Sensorleiste\n1x Netzteil\n1x Stereo-AV-Kabel\n1x Wii Fit Board\n\nTop Zustand. Versand, Abholung oder vorbeibringen möglich. Bei Versand kommen Portokosten dazu.",
            "price": " 250.-",
            "category_info": {
                "id": "5030",
                "name": "Componenti e accessori"
            },
            "language": "de",
            "image_names": [
                "6111694321.jpg",
                "6109906342.jpg",
                "6193663985.jpg",
                "6102187304.jpg",
                "6199311483.jpg"
            ],
            "thumb_name": "6111694321.jpg",
            "location_info": {
                "region_id": 23,
                "region_name": "Zurigo",
                "plz": "8902"
            },
            "type": "s",
            "company_ad": false,
            "epoch_time": 1492676977,
            "highlight": true,
            "parameters": [
                {
                    "id": "price",
                    "value": "250.-",
                    "label": "Prezzo CHF"
                },
                {
                    "id": "paymethod_sheek",
                    "value": "1",
                    "label": ""
                },
                {
                    "id": "zipcode",
                    "value": "8902",
                    "label": "CAP"
                },
                {
                    "id": "type",
                    "value": "Offerte",
                    "label": "Tipo"
                }
            ]
        },
        {
            "id": "15064042",
            "user_alias": "Humbelwood ",
            "public_account_id": "3895430116158613394",
            "subject": "Hochbeet im Palettenrahmen-Stil : Sondermass 120/47 cm",
            "body": "Wunderschönes Hochbeet L120xB47xH60 cm bestehend aus einem gekürzten SBB Palettenrahmen mit Zwischenboden und Fleece- Einlage mit 35 cm Fülltiefe. Als Unterlage dient eine ebenfalls gekürzte original Epal Europalette.\n\nAuch in doppelter Höhe (440CHF) auf 2 Rahmen erhältlich. Oder direkt mit Erde und/oder Bepflanzung.\nSchweizweite Lieferung für 0,90CHF/KM\n\nDieses Hochbeet wurde in mühevoller Handarbeit angefertigt, mehrfach geschliffen, flambiert und farblos lasiert um diesen einzigartigen Look zu erreichen.\n\nWeitere infos finde sie unter Facebook/Humbelwood\n\nBesuchen sie uns im Humbelwood - Showroom in Pfäffikon / ZH und erleben sie faszinierende Eindrücke diverser Ausstellungsstücke.\n\nGern baue ich ihnen ihr Wunschmöbel.\nAnfragen gerne per Mail.",
            "price": " 290.-",
            "category_info": {
                "id": "3130",
                "name": "Per il giardino"
            },
            "language": "de",
            "image_names": [
                "7409421736.jpg",
                "7400898417.jpg"
            ],
            "thumb_name": "7409421736.jpg",
            "location_info": {
                "region_id": 23,
                "region_name": "Zurigo",
                "plz": "8330"
            },
            "type": "s",
            "company_ad": false,
            "epoch_time": 1492672954,
            "highlight": true,
            "parameters": [
                {
                    "id": "price",
                    "value": "290.-",
                    "label": "Prezzo CHF"
                },
                {
                    "id": "paymethod_sheek",
                    "value": "1",
                    "label": ""
                },
                {
                    "id": "zipcode",
                    "value": "8330",
                    "label": "CAP"
                },
                {
                    "id": "type",
                    "value": "Offerte",
                    "label": "Tipo"
                }
            ]
        }
    ],
    "items": [
        {
            "id": "15091322",
            "user_alias": "Remo Lungo",
            "public_account_id": "2294799075974325280",
            "subject": "Handschuh Vollleder von Pow gr.L",
            "body": "verkaufe einen wenig gebrauchten vollleder hanschuh von pow ist mir leider zu gross \npreis inkl porto",
            "price": " 60.-",
            "category_info": {
                "id": "4080",
                "name": "Sport invernali"
            },
            "language": "de",
            "phone_hash": "39b9d27564d195d87e03c298113d23b14a87228c",
            "image_names": [
                "7663722811.jpg",
                "7650252131.jpg",
                "7690901330.jpg"
            ],
            "thumb_name": "7663722811.jpg",
            "location_info": {
                "region_id": 8,
                "region_name": "Grigioni",
                "area": "Prettigovia-Davos",
                "plz": "7260"
            },
            "type": "s",
            "company_ad": false,
            "epoch_time": 1492701262,
            "highlight": false,
            "parameters": [
                {
                    "id": "price",
                    "value": "60.-",
                    "label": "Prezzo CHF"
                },
                {
                    "id": "paymethod_sheek",
                    "value": "1",
                    "label": ""
                },
                {
                    "id": "zipcode",
                    "value": "7260",
                    "label": "CAP"
                },
                {
                    "id": "area",
                    "value": "Prettigovia-Davos",
                    "label": "Distretto"
                },
                {
                    "id": "type",
                    "value": "Offerte",
                    "label": "Tipo"
                }
            ]
        }
    ]
}
        
## Ad details

    description: View an ad
    path: /item/view.json
    parameters:
        item_id: Integer

### Example
    
curl:

    curl 'https://api.tutti.ch/v10/item/view.json?item_id=15051223' -H 'X-Tutti-Hash: 9d7c4bc7-6d1e-4c55-9c60-2bd51b72c4f4' -H 'X-Tutti-Source: web' --compressed


Response:

    {
    "id": "15051223",
    "user_alias": "Joerg Bund",
    "public_account_id": "4811719700303291907",
    "subject": "Canon EOS 70D mit Objektivsatz und Blitz 430 E",
    "body": "Verkaufe meine komplette Canon Ausrüstung. Alles im top Zustand. \nCanon EOS 70D (ca. 12.500 Auslösungen, Canon garantiert 150.000)\nCanon EFS 18  135 mm mit Sonnenblende\nCanon EFS 17  55 mm mit Sonnenblende\nCanon EFS 10  22 mm mit Sonnenblende\nCanon IS 70  300 mm\nCanon IS 35 mm mit Sonnenblende\nOriginal Canon Ersatzakku\n\nKomplettpreis:  1990,- CHF",
    "price": " 1'990.-",
    "category_info": {
        "id": "5100",
        "name": "Macchine fotografiche"
    },
    "language": "de",
    "phone_hash": "a18b5e327e2d25faed4d77c0eac9654368eec073",
    "image_names": [
        "7469596494.jpg"
    ],
    "thumb_name": "7469596494.jpg",
    "location_info": {
        "region_id": 3,
        "region_name": "Basilea",
        "plz": "4125"
    },
    "type": "s",
    "company_ad": false,
    "epoch_time": 1492680229,
    "highlight": true,
    "parameters": [
        {
            "id": "price",
            "value": "1'990.-",
            "label": "Prezzo CHF"
        },
        {
            "id": "zipcode",
            "value": "4125",
            "label": "CAP"
        },
        {
            "id": "type",
            "value": "Offerte",
            "label": "Tipo"
        }
    ]
}

