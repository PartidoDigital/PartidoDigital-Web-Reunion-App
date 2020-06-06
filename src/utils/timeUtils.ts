import * as timeUtils from './timeUtils';
import { Days, Months, Time } from './constants';

export function calculateNextDay(day: string, date: Date, {hour, minutes}): Date {
  var x = Days[day];
  var now = new Date(date.getTime());
  now.setHours(hour, minutes, 0, 0);
  now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
  /* convert to UTC and then UTC-3  */
  //now.setTime(now.getTime() + now.getTimezoneOffset() * 60 * 1000 /* convert to UTC */);
  return now;
}

export function durationToText(minutes: number): string {
  var out: string = "";
  minutes = Time.miliToSec(minutes);
  if(minutes / 60 == 1) {
    out += "1 hora.";
  } else if(minutes / 60 < 1) {
      out += minutes + " minutos.";
  } else {
      if(Math.trunc(minutes / 60) > 1) {
          out += Math.trunc(minutes / 60) + " horas";
      } else {
          out += "1 hora";
      }
      if(minutes / 60 % 1 > 0) {
          out += Math.round(minutes / 60 % 1 * 60) + " minutos.";
      } else {
          out += ".";
      }
  }
  return out;
}

export function whenNextMeeting(reunionType: string, possibleDate: Date): Date {
  return possibleDate; // or null when no possibleDate found
}

export function dateToText(date: Date): string {
  return Days[date.getDay()] + " "
  + date.getDate() + " de " + Months[date.getMonth()] + ", " + date.getHours() + ":"+ ("0" + date.getMinutes()).slice(-2) +" hs.";
}

export function twoDigits(num: number): string {
  return ("0" + num).slice(-2);
}