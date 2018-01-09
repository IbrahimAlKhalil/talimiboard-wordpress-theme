var tamplate = {
    "lang": "en",
    "config": {
        "languageDropDown": "#languageDropDown",
        "globalNav": ".globalNav",
        "navMenus": ".navMenus"
    },

    "dictionary": {
        "next": "prev",
        "prev": "prev"
    },

    "tamplates": {
        "globalNav": {
            "innerHTML": {
                "innerHTML": [
                    {
                        "innerHTML": "<a href='/'>Homepage</a>"
                },
                    {
                        "innerHTML": "About"
                },
                    {
                        "innerHTML": "Contacts"
                },
                    {
                        "innerHTML": "Languages",
                        "id": "langdrop",
                        "class": "dropdown"
                }
            ]
            }
        },

        "navMenus": {
            "innerHTML": [{
                "innerHTML": "Information"
        }, {
                "innerHTML": "Download"
        }, {
                "innerHTML": "Others"
        }]
        },

        "languageDropDown": {
            "innerHTML": {
                "innerHTML": [
                    {
                        "lang": "ar",
                        "innerHTML": "عربى"
                },
                    {
                        "lang": "bn",
                        "innerHTML": "বাংলা"
                }
            ]
            }
        }
    }
}
