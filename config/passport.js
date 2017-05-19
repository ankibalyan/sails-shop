var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var GOOGLE_STRATEGY_CONFIG = {
    clientID: process.env.GOOGLE_CLIENT_ID || 'your google client id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your google client secret',
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'callback url'
  };

// This just stores the username is an encrypted browser cookie
passport.serializeUser(function(cust, done) {
  done(null, cust.email);
});

passport.deserializeUser(function(email, done) {
  Customer.findOne({ email: email }, function (err, cust) {
    done(err, cust);
  })
});

const oAuthCallback = function(token, tokenSecret, profile, done) {
  const email = profile.emails ? profile.emails[0].value : undefined;

  if (!email) {
    return done({ error: 'NO_EMAIL', message: 'can not get email' });
  }

  Customer.findOne({ email: profile.emails[0].value }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (user) {
      console.log('user already exist');
      return done(null, user);
    }

    const data = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      provider: profile.provider,
      providerId: profile.id,
      email: email,
      password: Math.random().toString(36).substring(2),
      active: true
    };

    Customer.create(data).meta({fetch: true}).exec(function customerCreated(err, user) {
      if (err) {
        console.log('error on new user', {err});
        return done(err);
      }
      console.log('new user created', user);
      return done(null, user, {
        message: 'logged in successfully'
      });
    });
  });
}

passport.use(new GoogleStrategy(GOOGLE_STRATEGY_CONFIG, oAuthCallback));
