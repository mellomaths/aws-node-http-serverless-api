"use strict";

module.exports.handle = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        ok: true,
        message: "Success",
        input: event,
      },
      null,
      2
    ),
  };
};
