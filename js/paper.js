document.querySelectorAll('.prose table').forEach((table) => {
  if (table.closest('figure.highlight')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'table-scroll';
  wrapper.tabIndex = 0;
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', '文章表格，可横向滚动');
  table.before(wrapper);
  wrapper.append(table);
});
