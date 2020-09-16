import { format } from 'path';
import { getConnection, getRepository } from "typeorm";

import { Model } from "../entities/Model"
import express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    return res.render("listings/index");
});
router.get('/:id', async (req, res) => {
    console.log(req.params);
    const _id = req.params.id;
    let modelRepo = getConnection("pgListing").getRepository(Model);
    const model = await modelRepo.findOne(_id)
    const listing = { id: _id, name: `test ${_id}` }
    console.log(model);
    return res.render("listings/detail", { listing: model });
});
module.exports = router