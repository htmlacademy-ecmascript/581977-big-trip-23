import dayjs from 'dayjs';

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;
const HOURS_PER_DAY = 24;

const DateTimeFormat = {
  DATETIME: 'DD/MM/YY HH:mm',
  DATE: 'YYYY-MM-DD',
  MONTHDAY: 'MMM DD',
  TIME: 'HH:mm',
};

const getFormattedDate = (date, format) => date ? dayjs(date).format(format) : '';

const formatNumberToMinTwoDigits = (number) => (number.toString().length < 2 ? '0' : '') + number;

const getDatesDiff = (start, end) => start && end ? dayjs(end).diff(dayjs(start)) : '';

const parseMinutes = (minutes) => {
  const days = Math.floor(minutes / (HOURS_PER_DAY * MINUTES_PER_HOUR));
  minutes %= (HOURS_PER_DAY * MINUTES_PER_HOUR);
  const hours = Math.floor(minutes / MINUTES_PER_HOUR);
  minutes %= MINUTES_PER_HOUR;
  return `${formatNumberToMinTwoDigits(days)}D ${formatNumberToMinTwoDigits(hours)}H ${formatNumberToMinTwoDigits(minutes)}M`;
};

const getDatesDiffFormatted = (start, end) => {
  if (start && end) {
    const daysDiff = dayjs(end).diff(dayjs(start), 'm');
    if (daysDiff < MINUTES_PER_HOUR) {
      return `${daysDiff}M`;
    } else if (daysDiff >= MINUTES_PER_HOUR && daysDiff < MINUTES_PER_DAY) {
      const hours = Math.floor(daysDiff / MINUTES_PER_HOUR);
      const minutes = daysDiff % MINUTES_PER_HOUR;
      return `${formatNumberToMinTwoDigits(hours)}H ${formatNumberToMinTwoDigits(minutes)}M`;
    } else if (daysDiff >= MINUTES_PER_DAY) {
      return parseMinutes(daysDiff);
    }
  } else {
    return '';
  }
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export {DateTimeFormat, getFormattedDate, getDatesDiff, getDatesDiffFormatted, capitalizeFirstLetter};
