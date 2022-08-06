'use strict';

const dayjs = require('dayjs')
require('dayjs/locale/es')

module.exports.layer = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: dayjs().locale('es').format('DD/MM/YYYY'),
      },
      null,
      2
    ),
  };
};
