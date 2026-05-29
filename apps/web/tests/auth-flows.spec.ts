import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

const routes = {
  signUp: '/sign-up',
  signIn: '/sign-in',
  dashboard: /dashboard/,
};

const locators = {
  name: 'Name',
  email: 'Email',
  password: 'Password',
  signUpButton: 'Sign up',
  signInButton: 'Sign in',
};

test('Sign up flow', async ({ page }) => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password({ length: 8 });

  await page.goto(routes.signUp);

  await page.getByPlaceholder(locators.name).fill(name);
  await page.getByPlaceholder(locators.email).fill(email);
  await page.getByPlaceholder(locators.password).fill(password);

  await page.getByRole('button', { name: locators.signUpButton }).click();

  await expect(page).toHaveURL(routes.dashboard, { timeout: 15000 });
});

test('Sign in flow', async ({ page }) => {
  const name = faker.person.fullName();
  const email = faker.internet.email();
  const password = faker.internet.password({ length: 8 });

  await page.goto(routes.signUp);

  await page.getByPlaceholder(locators.name).fill(name);
  await page.getByPlaceholder(locators.email).fill(email);
  await page.getByPlaceholder(locators.password).fill(password);

  await page.getByRole('button', { name: locators.signUpButton }).click();

  await expect(page).toHaveURL(routes.dashboard, { timeout: 15000 });

  await page.context().clearCookies();
  
  await page.goto(routes.signIn);

  await page.getByPlaceholder(locators.email).fill(email);
  await page.getByPlaceholder(locators.password).fill(password);

  await page.getByRole('button', { name: locators.signInButton }).click();

  await expect(page).toHaveURL(routes.dashboard, { timeout: 15000 });
});
