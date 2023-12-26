db.products.insertMany([
    {
        name:"SmartPhone",
        category:"Electronics",
        price:850,
        quantity:10,
        rating:[4,5,4,3,5]
    },
    {
        name:"Laptop",
        category:"Electronics",
        price:1000,
        quantity:5,
        rating:[5,5,4,5,4]
    },
    {
        name:"Headphones",
        category:"Electronics",
        price:100,
        quantity:20,
        rating:[4,3,4,4,5]
    },
    {
        name:"Shirt",
        category:"Clothing",
        price:190,
        quantity:50,
        rating:[5,4,5,4,3]
    },
    {
        name:"Running Shoes",
        category:"Footwear",
        price:80,
        quantity:15,
        rating:[4,4,3,5,5]
    },
    {
        name:"Watch",
        category:"Accessories",
        price:200,
        quantity:8,
        rating:[5,5,5,4,4]
    },
    {
        name:"Camera",
        category:"Electronics",
        price:800,
        quantity:3,
        rating:[4,4,3,5,5]
    },
    {
        name:"BookShelf",
        category:"Furniture",
        price:150,
        quantity:10,
        rating:[4,4,5,5,3]
    },
    {
        name:"Gaming Console",
        category:"Electronics",
        price:400,
        quantity:6,
        rating:[5,5,4,4,3]
    }
])

//////////
db.customers.insertMany([
    {
        name:"John Doe",
        email:"johndoe@example.com",
        address:"123, Main Street"
    },
    {
        name:"Jane Samith",
        email:"janesamith@example.com",
        address:"456, Main Street"
    },
    ,{
        name:"Mike Johnson",
        email:"mikejohnson@example.com",
        address:"789, Main Street"
    }
])

///orders
db.order.insertMany([
    {
        customerId:"",
        products:[
            { productId:ObjectId("product_id"),quantity:2},
            { productId:ObjectId("product_id"),quantity:1}
        ],
        totalAmount:1000
    },
    {
        customerId:"",
        products:[
            { productId:ObjectId("product_id"),quantity:3},
            { productId:ObjectId("product_id"),quantity:2}
        ],
        totalAmount:210
    },
    {
        customerId:"",
        products:[
            { productId:ObjectId("product_id"),quantity:1},
            { productId:ObjectId("product_id"),quantity:1}
        ],
        totalAmount:200
    },
    {
        customerId:"",
        products:[
            { productId:ObjectId("product_id"),quantity:1}
        ],
        totalAmount:280
    },
    {
        customerId:"",
        products:[
            { productId:ObjectId("product_id"),quantity:4},
        ],
        totalAmount:200
    }
])