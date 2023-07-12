const formatCategory = (category: string) => {
  const formatted = category.replace('mens', "men's");
  return (formatted.charAt(0).toUpperCase() + formatted.slice(1)).split('-').join(' ');
};

export default {
  formatCategory
};
