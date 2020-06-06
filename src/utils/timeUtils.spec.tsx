import * as timeUtils from './timeUtils';
import { Days } from './constants';

describe('timeUtils', () => {

  it('calculateNextDay', () => {
    expect(typeof timeUtils.calculateNextDay).toEqual("function")
    console.log(timeUtils.calculateNextDay(
      Days[Days.Martes], 
      new Date("Jun 10 2020 20:30:00 GMT-0300"), 
      { hour: 20, minutes: 30}
    ));
  })

})