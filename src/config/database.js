module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'pgsa',
    database: 'empiredb',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}