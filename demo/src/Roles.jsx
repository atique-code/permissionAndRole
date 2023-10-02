export  const Rols = {
    "roles": [
        {
            "name" : "Super Admin",
            "description": "Super Admin description",
            "permissions": {
                "User": {
                    "create" : false,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Indivisual": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Settings": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Products": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Orders": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Inventory": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Store": {
                    "create" : true,
                    "update" : false,
                    "delete": true,
                    "read": true
                },
                "Ledger": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Auditing": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "Marketing": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                }

            }
        },
        ///second Object///
        {
            "name" : "Store/Warehouse AdminS",
            "description": "store/warehouse description",
            "permissions": {
                "user": {

                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "indivisual": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "settings": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "products": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "orders": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "inventory": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "store": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "ledger": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "auditing": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "marketing": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                }

            }
        },

        //third Object//
        {
            "name" : "Staff",
            "description": " staff description",
            "permissions": {

                "user": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "indivisual": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "settings": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "products": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "orders": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "inventory": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "store": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "ledger": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "auditing": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                },
                "marketing": {
                    "create" : true,
                    "update" : true,
                    "delete": true,
                    "read": true
                }

            }
        }
    ]
}