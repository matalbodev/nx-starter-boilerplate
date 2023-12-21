export const generatePaginationArray = (total: number, page: number) => {
  const arrayPagination = Array.from({ length: total }, (_, i) => i + 1);

  if (total < 8) {
    return arrayPagination;
  }

  if (page === 3) {
    return [
      ...arrayPagination.slice(0, 4),
      '...',
      ...arrayPagination.slice(-2),
    ];
  }

  if (arrayPagination.indexOf(page) === total - 3) {
    return [
      ...arrayPagination.slice(0, 2),
      '...',
      ...arrayPagination.slice(-4),
    ];
  }

  return page > 3 && arrayPagination.indexOf(page) < total - 3
    ? [
        ...arrayPagination.slice(0, 1),
        '...',
        ...arrayPagination.slice(page - 2, page + 1),
        '...',
        ...arrayPagination.slice(-1),
      ]
    : [...arrayPagination.slice(0, 3), '...', ...arrayPagination.slice(-3)];
};
