const errors = {
  error404(request, response) {
    response.status(404).json({ status: 'error', message: 'Not Found' });
  },
};

module.exports = errors;
