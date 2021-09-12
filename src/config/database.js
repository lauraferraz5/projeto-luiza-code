module.exports = {
  dialect: "postgres",
  host: "ec2-3-218-149-60.compute-1.amazonaws.com",
  port: 5432,
  // database: "projetoLuizaCode3",
  database: "dc6scnn8k031v7",
  username: "mtgzqvmvpmhjxk",
  password: "ec1776f2703b70831b97ef6a02a5b456e037dac12981ab75673824eca2364b93",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
};
