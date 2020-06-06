import { newSpecPage } from '@stencil/core/testing';
import { CountdownClock } from './countdown-clock';

xdescribe('countdown-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CountdownClock],
      html: `<countdown-clock></countdown-clock>`,
    });
    expect(page.root).toEqualHtml(`
      <countdown-clock>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </countdown-clock>
    `);
  });
});
