const Restaurant = require("../model/Restaurants");

const findAll = async(res) => {
    let allRestauranst = await Restaurant.find({})
    return res.json(allRestauranst)
}

exports.getAll = (req,res) => {
    findAll(res)
}


exports.getRestaurantById = async(req,res) => {
    let id = req.params.id;
    let restauranstById = await Restaurant.find({restId:id})
    return res.json(restauranstById)
}


exports.addRestaurant = async(req,res) => {
    let restData = new Restaurant(req.body);
    restData.save(restData).then((rest) => {
        res.json({message:"Rest Added",rest})
    });
}
