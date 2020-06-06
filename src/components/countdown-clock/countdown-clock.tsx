import { Component, ComponentInterface, State, Prop, h, Method, Element } from '@stencil/core';
import { Time, ReunionTypes } from '../../utils/constants';
import * as timeUtils from '../../utils/timeUtils';

@Component({
  tag: 'countdown-clock',
  styleUrl: 'countdown-clock.scss'
})
export class CountdownClock implements ComponentInterface {
  @Prop() reunionDate: string;
  @Prop() reunionType: ReunionTypes = ReunionTypes.off;
  @Prop() reunionDuration: number = Time.HOUR / 60;
  @Prop() reunionLink: string = "https://meet.jit.si/PartidoDigital";

  @Element() el: HTMLElement;

  private actualReunionDate: Date;
  private reunionDateText: string;
  private interval: any;
  private stopTimerFlag: boolean = false;
  private reunionDurationText: string;
  private showReunionInstructions = () => {
    if(this.reunionLink.indexOf("jit.si") > 0) {
      // Show Jitsi instructions
    }
  }

  @State() days: string = "-";
  @State() hours: string = "-";
  @State() minutes: string = "-";
  @State() seconds: string = "-";

  // Called from the slotted element when successfull
  @Method()
  goToLink() {
    document.location.href = this.reunionLink;
  }

  // Called from anywhere to stop the timer
  @Method()
  stopTimer() {
    this.stopTimerFlag = true;
  }

  componentWillLoad() {
    this.actualReunionDate = timeUtils.whenNextMeeting(this.reunionType, new Date(this.reunionDate));
    this.reunionDateText = timeUtils.dateToText(this.actualReunionDate);
    this.showReunionInstructions();
    // Preparing countdown
    if(this.reunionType !== ReunionTypes.off && this.actualReunionDate !== null) {
      this.reunionDurationText = timeUtils.durationToText(this.reunionDuration);
      this.interval = setInterval(() => {
          var now = new Date().getTime(),
              distance = this.actualReunionDate.getTime() - now;
              this.days = timeUtils.twoDigits(Math.floor(distance / (Time.DAY)));
              this.hours = timeUtils.twoDigits(Math.floor((distance % (Time.DAY)) / (Time.HOUR)));
              this.minutes = timeUtils.twoDigits(Math.floor((distance % (Time.HOUR)) / (Time.MINUTE)));
              this.seconds = timeUtils.twoDigits(Math.floor((distance % (Time.MINUTE)) / Time.SECOND));
          if (distance <= 0 || this.stopTimerFlag === true) {
              clearInterval(this.interval);
              //this.el.querySelector(".slot")[0].style.display =  'block';
          }
      }, Time.SECOND);
    }
  }

  render() {
    return (
      <div class="countdown-clock">
        <h1>{this.days}:{this.hours}:{this.minutes}:{this.seconds}</h1>
        <p><i>{this.reunionDateText}</i></p>
        <p>Duración: {this.reunionDurationText}</p>
        <div class="slot">
          <slot></slot>
        </div>
      </div>
    );
  }
}
