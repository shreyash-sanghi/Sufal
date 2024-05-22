export function getFormattedDate(dateString) {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const monthIndex = date.getMonth();
  
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    return {
      day: day.toString().padStart(2, '0'),
      month: monthNames[monthIndex]
    };
  }
  