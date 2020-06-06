import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class="app-home flex items-center justify-center text-center flex-col h-screen">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <img src="https://recursos.partidodigital.org.uy/assets/img/logo_vertical_naranja.svg" class="pb-4" alt="Partido Digital" />
            <countdown-clock reunion-link="https:google.com" reunion-type="recurrent" reunion-date="Mon Jun 27 2020 20:00:00 GMT-0300">
              <h4 class="text-primary">Success!</h4>
            </countdown-clock>
          </div>
        </div>
      </div>
    );
  }
}
