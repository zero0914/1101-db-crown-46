const Category_46 = require('../models/Category_46');

exports.getCategories = async (req, res) => {
    try{
        return await Category_46.fetchAll();
    } catch(err){
        console.log('getCategories',err)
    }
}