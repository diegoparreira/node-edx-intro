"use strict";

const data = [
  {
    id: "C1",
    name: "CBD Oil",
    price: "420.00",
    info: "The best oil to relax.",
  },
  {
    id: "C2",
    name: "White Widow",
    price: "12.00",
    info: "Strain to relax and sleep better.",
  },
];

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return data;
  });

  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data);
    return data;
  });
};
