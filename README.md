NODE API REST
=============

- [Endpoints](#endpoints)
	- [Meta](#meta)
	- [API overview](#api-overview)
	

##Endpoints
### Products endpoints
`GET /products` :

    Response : 
        `
        {  
           "products":[  
              {  
                 "_id":"5a56490fc6e3b72ad9fc94d3",
                 "name":"Producto 1",
                 "stock":10,
                 "warehouse":{  
                    "_id":"5a564942c6e3b72ad9fc94d8",
                    "name":"SP001",
                    "capacity":1000,
                    "country":"spain",
                    "__v":0,
                    "lastUpdate":1515604177462
                 },
                 "provider":"proveedor 1",
                 "__v":0,
                 "lastUpdate":1515604335789
              },
              {  
                 "_id":"5a564916c6e3b72ad9fc94d4",
                 "name":"Producto 2",
                 "stock":10,
                 "warehouse":{  
                    "_id":"5a564942c6e3b72ad9fc94d8",
                    "name":"SP001",
                    "capacity":1000,
                    "country":"spain",
                    "__v":0,
                    "lastUpdate":1515604177462
                 },
                 "provider":"proveedor 2",
                 "__v":0,
                 "lastUpdate":1515604384177
              },
              {  
                 "_id":"5a56491bc6e3b72ad9fc94d5",
                 "name":"Producto 3",
                 "stock":10,
                 "warehouse":{  
                    "_id":"5a564942c6e3b72ad9fc94d8",
                    "name":"SP001",
                    "capacity":1000,
                    "country":"spain",
                    "__v":0,
                    "lastUpdate":1515604177462
                 },
                 "provider":"proveedor 3",
                 "__v":0,
                 "lastUpdate":1515604390167
              },
              {  
                 "_id":"5a56491fc6e3b72ad9fc94d6",
                 "name":"Producto 4",
                 "stock":10,
                 "warehouse":{  
                    "_id":"5a564942c6e3b72ad9fc94d8",
                    "name":"SP001",
                    "capacity":1000,
                    "country":"spain",
                    "__v":0,
                    "lastUpdate":1515604177462
                 },
                 "provider":"proveedor 4",
                 "__v":0,
                 "lastUpdate":1515604395761
              }
           ]
        }
        `
    
`GET /products/:id` :

    Response:
    `
        {
            "product": {
                "_id": "5a56490fc6e3b72ad9fc94d3",
                "name": "Producto 1",
                "stock": 10,
                "warehouse": {
                    "_id": "5a564942c6e3b72ad9fc94d8",
                    "name": "SP001",
                    "capacity": 1000,
                    "country": "spain",
                    "__v": 0,
                    "lastUpdate": 1515604177462
                },
                "provider": "proveedor 1",
                "__v": 0,
                "lastUpdate": 1515604335789
            }
        }
    `
`POST /products`
    
    Request:
    `
    {
    	"name": "Producto 4",
    	"stock": 10,
    	"warehouse": "5a563bed1dae9c1986512129",
    	"provider": "Proveedor 4"
    }
    `
    
    Response:
    `
    {
        "__v": 0,
        "name": "Producto 4",
        "stock": 10,
        "warehouse": "5a563bed1dae9c1986512129",
        "provider": "proveedor 4",
        "_id": "5a56491fc6e3b72ad9fc94d6",
        "lastUpdate": 1515604177439
    }
    `
`PATCH /products/:id`
    
    Request:
    `
    {
    	"name": "Producto 7",
    	"stock": 200,
    	"warehouse": "5a563bed1dae9c1986512129",
    	"provider": "Proveedor 2000"
    }
    `
    
    Response:
    `
    {
        "_id": "5a56491fc6e3b72ad9fc94d6",
        "name": "Producto 4",
        "stock": 10,
        "warehouse": "5a564942c6e3b72ad9fc94d8",
        "provider": "proveedor 4",
        "__v": 0,
        "lastUpdate": 1515604827268
    }
    `
`DELETE /products/:id`
    
    Response:
    `
    {
        "_id": "5a56490fc6e3b72ad9fc94d3",
        "name": "Producto 1",
        "stock": 10,
        "warehouse": "5a564942c6e3b72ad9fc94d8",
        "provider": "proveedor 1",
        "__v": 0,
        "lastUpdate": 1515604335789
    }
    `