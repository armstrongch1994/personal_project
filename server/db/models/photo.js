const Sequelize = require('sequelize')
const db = require('../db')

const Photo = db.define('photo', {
  imageUrl: {
    type: Sequelize.STRING
  },
  caption: {
    type: Sequelize.STRING
  }
})

module.exports = Photo
