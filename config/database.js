if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://tymiller:vj123vj@ds157762.mlab.com:57762/vidjot-prod'
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  };
}
