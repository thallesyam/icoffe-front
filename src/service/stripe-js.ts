import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
  const stripeJs = await loadStripe(
    'pk_test_51N4SFBB5WGoj2Ixbx88ZdTFQnu2oAUTZ7DuGMhJkuTDilOOTmuD8KfHkZfpEqPHpPYHvJ7eAWNyGJTySECITGBcO00Sq3WmoFR'
  )

  return stripeJs
}
