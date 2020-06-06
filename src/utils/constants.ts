export const Time = {
  SECOND: 1000,
  get MINUTE() { 
    return this.SECOND * 60;
  },
  get HOUR() { 
    return this.MINUTE * 60;
  },
  get DAY() { 
    return this.HOUR * 24; 
  },
  miliToSec(time: number) {
    return time / 1000;
  }
}

export enum Months {
  Enero = 0,
  Febrero,
  Marzo,
  Abril,
  Mayo,
  Junio,
  Julio,
  Agosto,
  Septiembre,
  Octubre,
  Noviembre,
  Diciembre
}

export enum Days {
  Lunes = 0,
  Martes,
  Miércoles,
  Jueves,
  Viernes,
  Sábado,
  Domingo
}

export enum ReunionTypes {
  recurrent = "recurrent",
  date = "date",
  off = "off"
}