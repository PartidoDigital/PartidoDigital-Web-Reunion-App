import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root'
})
export class AppRoot {

  render() {
    return (
      <div class="container mx-auto">
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
