import Sequelize, { Model } from 'sequelize';

// criando a interface para persistir dados no banco
class User extends Model {
  // criando método estático. Não precisamos instanciar a classe User para acessar o método init
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

export default User;
