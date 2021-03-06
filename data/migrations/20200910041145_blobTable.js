
exports.up = async function(knex) {
  await knex.schema.createTable("blobs", (table) => {
      table.increments()
      table.text("name").notNullable()
      table.binary("picture")
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("blobs")
}
