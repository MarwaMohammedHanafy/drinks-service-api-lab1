const teaService = require('../services/tea_service');
const gettea = async (req, res) => {
const teaName = req.query.teaName;
const tea = teaService.gettea(teaName);
res.json(tea).status(200);
};
module.exports = {
gettea,
};