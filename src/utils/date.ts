const months = [
  { long: 'January', short: 'Jan' },
  { long: 'February', short: 'Feb' },
  { long: 'March', short: 'Mar' },
  { long: 'April', short: 'Apr' },
  { long: 'May', short: 'May' },
  { long: 'June', short: 'Jun' },
  { long: 'July', short: 'Jul' },
  { long: 'August', short: 'Aug' },
  { long: 'September', short: 'Sep' },
  { long: 'October', short: 'Oct' },
  { long: 'November', short: 'Nov' },
  { long: 'December', short: 'Dec' },
];

export function getMonthNameByIndex(
  index: number,
): { long: string; short: string } | null {
  if (index >= 0 && index <= 11) {
    return months[index];
  } else {
    return null;
  }
}

// export function checkIfTimeMatches(timestamp: string) {
// const currentHour = new Date().getUTCHours();
// const currentMinute = new Date().getUTCMinutes();
// const currentSeconds = new Date().getUTCSeconds();
// const timeToMatch_Hour = new Date(timestamp).getUTCHours();
// const timeToMatch_Minute = new Date(timestamp).getUTCMinutes();
// const timeToMatch_Second = new Date(timestamp).getSeconds();
//
//   return;
// }
