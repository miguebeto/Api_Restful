module.exports= {
    port: process.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop'
}