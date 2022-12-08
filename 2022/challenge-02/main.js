function countHours(year, holidays) {
  const days_compensate= holidays.map(date).filter(isWorkDay);
  return days_compensate.length * 2;

  function isWorkDay(date){
    const day= date.getDay();
    return day > 0 && day < 6;
  }
  function date(d){
    const [ month, day ]= d.split("/");
    return new Date(`${year}-${month}-${day}T00:00:00`);
  }
}
