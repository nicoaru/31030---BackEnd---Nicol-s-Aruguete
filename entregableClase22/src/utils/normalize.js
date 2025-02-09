const {normalize, schema, denormalize} = require('normalizr')

const author = new schema.Entity('authors', {}, {idAttribute: 'email'})

const mensaje = new schema.Entity('mensajes', {
    author: author
}, {idAttribute: '_id'})


const normalizeMensajes = (data) => {
    let allMessages = data.map(msg => {return {...msg._doc, _id: msg._id.toString()}})
    const _normalized = normalize(allMessages, [mensaje])
    return _normalized
}

const denormalizeMensajes = (data) => {
    const _denormalized = denormalize(data.result, [mensaje], data.entities)
    return _denormalized
}

module.exports = { normalizeMensajes, denormalizeMensajes, mensaje }