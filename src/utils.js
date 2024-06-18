import dayjs from 'dayjs';

const DateTimeFormats = {
  DATETIME: 'DD/MM/YY HH:mm',
  DATE: 'YYYY-MM-DD',
  MONTHDAY: 'MMM DD',
  TIME: 'HH:mm',
};

const getFormattedDate = (date, format) => date ? dayjs(date).format(format) : '';

const minTwoDigits = (n) => (n.toString().length < 2 ? '0' : '') + n;

const getDatesDiff = (start, end) => start && end ? dayjs(end).diff(dayjs(start)) : '';

const parseMinutes = (minutes) => {
  const days = Math.floor(minutes / (24 * 60));
  minutes %= (24 * 60);
  const hours = Math.floor(minutes / 60);
  minutes %= 60;
  return `${minTwoDigits(days)}D ${minTwoDigits(hours)}H ${minTwoDigits(minutes)}M`;
};

const getDatesDiffFormatted = (start, end) => {
  if (start && end) {
    const daysDiff = dayjs(end).diff(dayjs(start), 'm');
    if (daysDiff < 60) {
      return `${daysDiff}M`;
    } else if (daysDiff >= 60 && daysDiff < 1440) {
      const hours = Math.floor(daysDiff / 60);
      const minutes = daysDiff % 60;
      return `${minTwoDigits(hours)}H ${minTwoDigits(minutes)}M`;
    } else if (daysDiff >= 1440) {
      return parseMinutes(daysDiff);
    }
  } else {
    return '';
  }
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export {DateTimeFormats, getFormattedDate, getDatesDiff, getDatesDiffFormatted, capitalizeFirstLetter};
