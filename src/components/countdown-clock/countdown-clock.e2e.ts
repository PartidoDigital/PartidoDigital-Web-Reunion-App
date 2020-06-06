import { newE2EPage } from '@stencil/core/testing';

describe('countdown-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<countdown-clock></countdown-clock>');

    const element = await page.find('countdown-clock');
    expect(element).toHaveClass('hydrated');
  });
});
