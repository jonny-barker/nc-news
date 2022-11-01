export function convertDate (dbDate) {

  const dateSplit = dbDate.slice(0, 10).split('-')
  const date = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
  
  return date;
}


