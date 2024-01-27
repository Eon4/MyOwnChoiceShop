import express from 'express'
import CountryController from '../controllers/country.controller.js'

const CountryRouter = express.Router()
const controller = new CountryController

CountryRouter.get('/country', (req, res) => {
    controller.list(req, res)
})
CountryRouter.get('/country/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
CountryRouter.post('/country', (req, res) => {
    controller.create(req, res)
})
CountryRouter.put('/country/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
CountryRouter.delete('/country/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export { CountryRouter };