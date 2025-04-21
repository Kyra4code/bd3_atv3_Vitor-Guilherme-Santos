const database = "bd3_atv3";

use(database);


// // db["bd3_atv3_produtos"].find().sort({"valor":-1}).limit(1);

// // db["bd3_atv3_produtos"].find().sort({"valor":1}).limit(1);

// // db["bd3_atv3_produtos"].find({"valor":{$gt:900}});

// // db["bd3_atv3_produtos"].find({"categoria":"Livros"});

// // db["bd3_atv3_produtos"].find({$or: [
// //     {categoria:"Livros"},
// //     {categoria:"Brinquedos"}
// // ]});


// db["bd3_atv3_produtos"].find({
//     categoria: {$nin: ["Livros", "Brinquedos"]}
// })

// db["bd3_atv3_produtos"].find().sort({"valor":1});

// db["bd3_atv3_produtos"].find().sort({"valor":-1});

// db["bd3_atv3_produtos"].find({
//     categoria: "Livros"
// // }).sort({"valor":1})

// db["bd3_atv3_produtos"].find({
//     categoria: {$nin: ["Livros"]}
// }).sort({"valor":-1});