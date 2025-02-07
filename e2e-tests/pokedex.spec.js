const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')
    ).toBeVisible()
  })

  test('navigate from the main page to the page of ivysaur Pokemon', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await page.click('text="ivysaur"')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('previous')).toBeVisible()
    await expect(page.getByText('home')).toBeVisible()
    await expect(page.getByText('next')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
    await expect(page.url()).toBe('http://127.0.0.1:8080/pokemon/ivysaur')
  })
})
