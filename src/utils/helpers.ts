export function restaurantLink(name: string, id: string) {
  try {
    return `/restaurant/${formatLink(name.toLowerCase())}-${id}`;
  } catch (error) {
    return '';
  }
}

function formatLink(string: string) {
  return string.replace(/ /g, '-');
}

export function getRestaurantId(string: string) {
  const splittedLink = string.split('-');
  return splittedLink[splittedLink.length - 1];
}
