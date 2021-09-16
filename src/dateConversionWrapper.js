import { utcToZonedTime, format } from 'date-fns-tz';

const fixedLocalDate = (date, timeZone) => utcToZonedTime(date, timeZone)

export default function dateConversionWrapper(unix, dateFormat, timeZone) {
  return format(fixedLocalDate(unix * 1000, timeZone), dateFormat)
}