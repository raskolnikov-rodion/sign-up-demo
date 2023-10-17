const url = '/api/signup';

const SIGN_UP_HANDLERS = [
  {
    url,
    method: 'POST',
    res: function (req, res, callback) {
      setTimeout(() => {
        callback(null, { status: Math.random() > 0.5 ? 200 : 500 });
      }, 3000);
    },
  },
];

module.exports = SIGN_UP_HANDLERS;
