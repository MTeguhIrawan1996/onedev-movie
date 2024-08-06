import dayjs from '@/utils/lib/globalDayJs';

export const minutesToHours = (minutes: number) => {
  const duration = dayjs.duration(minutes, 'minutes');
  const hours = Math.floor(duration.asHours());
  const remainingMinutes = duration.minutes();
  return `${hours}h ${remainingMinutes}m`;
};
