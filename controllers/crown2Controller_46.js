const serviceCrown2Controller_46 = require('./serviceCrown2Controller_46');

exports.getCategories = async (req, res) => {
    try{
        let results = await serviceCrown2Controller_46.getCategories();
        console.log('results', JSON.stringify(results));
        res.render('crown2_46', { 
        data: results,
        title: 'crown2_46',
        name: 'Nihao', 
        id: '208417146'
        });
    } catch(err){
        console.log('crown2Controller getCategories', err)
    }
}
