Stripe.setPublishableKey('pk_test_IgMKjMVGbJAbEtOTP5pocPPe');

var $form = $('#checkout-form');
$form.submit(function(e) {
  $form.find('button').prop('disabled', true);

  Stripe.card.createToken({
    name: $('#cart-name').val(),
    number: $('#card-number').val(),
    cvc: $('#card-cvc').val(),
    exp_month: $('#card-expiry-month').val(),
    exp_year: $('#card-expiry-year').val()
  }, stripeResponseHandler);

  return false;
});

function stripeResponseHandler(status, response) {
  console.log(response);
  if (response.error) {
    console.log($('#payment-errors-block'));
    $('#payment-errors').text(response.error.message);
    $('#payment-errors').removeClass('invisible');
    $form.find('button').prop('disabled', false);
  } else {
    var token = response.id;

    $form.append($('<input type="hidden" name="stripeToken" />').val(token));

    $form.get(0).submit();
  }
}
