const router = require('express').Router();
const accountsModel = require('./accounts-model');
const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware')

router.get('/', (req, res) => {
  // DO YOUR MAGIC
  accountsModel
    .getAll()
    .then((accounts) => {
      return res.status(200).json(accounts)
    })
    .catch(() => {
      res.status(500).json({ message: "server error" })
    })
})

router.get('/:id', checkAccountId, async (req, res) => {
  // DO YOUR MAGIC
  try {
    const foundAction = await accountsModel.getById(req.params.id)
    res.status(200).json(foundAction)
  } catch {
    res.status(500).json({ message: "The account could not be retrieved" })
  }
})

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res) => {
  // DO YOUR MAGIC
  accountsModel
    .create(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(() => {
      res.status(500).json({ message: "There was an error while saving the account to the database" })
    })

})

router.put('/:id', checkAccountId, (req, res) => {
  // DO YOUR MAGIC
  accountsModel
    .updateById(req.params.id, req.body)
    .then((updatedAccount) => {
      res.status(200).json(updatedAccount);
    })
    .catch(() => {
      res.status(500).json({ message: "There was an error while updating the account" })
    })
});

router.delete('/:id', checkAccountId, async (req, res) => {
  // DO YOUR MAGIC
  try {
    const accountToBeRemoved = await accountsModel.deleteById(req.params.id)
    res.status(200).json(accountToBeRemoved)
  } catch {
    res.status(500).json({ message: "The account could not be removed" })
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
