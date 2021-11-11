const accountsModel = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.budget && !req.body.name) {
    res.status(400).json({ message: "name and budget are required" })
  } else if (typeof req.body.name !== "string") {
    res.status(400).json({ message: "name of account must be a string" })
  } else if (typeof req.body.budget !== "number") {
    res.status(400).json({ message: "budget of account must be a number" })
  } else if (req.body.budget < 0 || req.body.budget > 999999) {
    res.status(400).json({ message: "budget of account is too large or too small" })
  }
  else {
    next()
  }

}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id;
  accountsModel
    .getById(id)
    .then((account) => {
      if (account) {
        req.user = account;
        next();
      } else {
        res.status(404).json({ message: "account not found" });
      }
    })
    .catch(() => {
      res.status(500).json({ message: "error" });
    })
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  accountsModel
    .getAll
    .then((account) => {
      if (account.name === req.body.name) {
        res.status(400).json({ message: "that name is taken" });
      } else {
        next()
      }
    })
    .catch(() => {
      res.status(500).json({ message: "error" });
    })
}
