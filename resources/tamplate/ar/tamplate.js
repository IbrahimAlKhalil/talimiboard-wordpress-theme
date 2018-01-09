var tamplate = {
    "lang": "ar",
    "config": {
        "languageDropDown": "#languageDropDown",
        "globalNav": ".globalNav",
        "navMenus": ".navMenus"
    },

    "dictionary": {
        "next": "التالى",
        "prev": "سابق"
    },
    "tamplates": {
        "globalNav": {
            "innerHTML": {
                "innerHTML": [
                    {
                        "innerHTML": "<a href='/'>الصفحة الرئيسية</a>"
                },
                    {
                        "innerHTML": "معلومات عنا"
                },
                    {
                        "innerHTML": "اتصل"
                },
                    {
                        "innerHTML": "اللغات",
                        "id": "langdrop",
                        "class": "dropdown"
                }
            ]
            }
        },

        "navMenus": {
            "innerHTML": [{
                "innerHTML": "معلومات"
        }, {
                "innerHTML": "تحميل"
        }, {
                "innerHTML": "آخر"
        }]
        },

        "languageDropDown": {
            "innerHTML": {
                "innerHTML": [
                    {
                        "lang": "bn",
                        "innerHTML": "বাংলা"
                },
                    {
                        "lang": "en",
                        "innerHTML": "English"
                }
            ]
            }
        }
    }

}
