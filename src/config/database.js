// Configs para funcionamento do sequelize
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'devburguer',
  define: {
    timestamps: true, // created_at and updated_at
    underscored: true,
    // as tabelas serão criadas nesse padrão de nomenclatura: users_product
    underscoredAll: true,
  },
};
