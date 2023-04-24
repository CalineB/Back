const mainController = {
  getHomePage(_, response) {
    response.render('home');
  },
};

module.exports = mainController;
