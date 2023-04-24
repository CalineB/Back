const errors = {
  error404(request, response) {
    response.status(404).render('error', { status: 404, message: 'Not Found' });
  },
};

module.exports = errors;
