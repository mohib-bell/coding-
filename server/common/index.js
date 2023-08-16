const getPagination = (page, size) => {
  const limit = size ? +size : 6;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (details, page, limit) => {
  const { count: totalItems, rows: data } = details;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, data, totalPages, currentPage };
};

module.exports = { getPagingData, getPagination };
