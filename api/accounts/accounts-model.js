const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  db('accounts'); // resolves to an array of acounts
}

const getById = id => {
  // DO YOUR MAGIC
  db('accounts').where({ id: id }) // resolves to an array containing accounts that match the where
}

const create = account => {
  // DO YOUR MAGIC
  db('accounts').insert(account);

}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  db('accounts').where({ id: id }).update(account); // returns a number of records updated
}

const deleteById = id => {
  // DO YOUR MAGIC
  db('accounts').where({ id: id }).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}


// db('foo-table') // returns a promise that resolves to an **array** with all records in the table
// db('foo-table').where({ role: 'Student', active: true }) // resolves to an **array** of all records that satisfy the where
// db('foo-table').where('name', 'Mary') // is an alternative for when there is just one where condition
// db('foo-table').where('id', 7).first() // will resolve to the **record** we want (if the id is unique for a table) or undefined
// db('foo-table').insert({ bar: 'baz' }) // resolves to an **array** containing the **ids of the records** inserted into the table
// db('foo-table').where('id', id).update({ bar: 'new bar' }) // resolves to the **number of records** affected by the update
// db('foo-table').where('id', id).delete() // resolves to the **number of records** affected by the delete
// ```
