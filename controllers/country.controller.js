import CountryModel from '../models/country.model.js'
import ProductModel from '../models/product.model.js'

CountryModel.hasMany(ProductModel)
ProductModel.belongsTo(CountryModel)


class CountryController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'country')


        const result = await CountryModel.findAll({
            attributes: attr,
            limit: limit
        })
        res.json(result)
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await CountryModel.findOne({
        attributes: ['id', 'country'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { country } = req.body;
    if(country) {
        const model = await CountryModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { country } = req.body;
    if(id && country) {
        const model = await CountryModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'Country updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await CountryModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}

}

export default CountryController