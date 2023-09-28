const controllers = {};

controllers.name = 'Matias';
controllers.apellido = 'Galetto';

console.log(controllers);

controllers.use = (req, res) => {
  res.send('La conexion desde el router utilizando controller es correcta')
};

module.exports = controllers