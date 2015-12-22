var config = require('config');
var r = require('../db');

function loginCallbackHandler (objectMapper, type) {
    return function (accessToken, refreshToken, profile, done) {
        if (accessToken !== null) {
            r
                .table('users')
                .getAll(profile.username, { index: 'login' })
                .filter({ type: type })
                .run(r.conn)
                .then(function (cursor) {
                    return cursor.toArray()
                        .then(function (users) {
                            if (users.length > 0) {
                                return done(null, users[0]);
                            }
                            return r.table('users')
                                .insert(objectMapper(profile))
                                .run(r.conn)
                                .then(function (response) {
                                    return r.table('users')
                                        .get(response.generated_keys[0])
                                        .run(r.conn);
                                })
                                .then(function (newUser) {
                                    done(null, newUser);
                                });
                        });
                })
                .catch(function (err) {
                    console.log('Error Getting User', err);
                });
        }
    };
};
//var callbackURL = 'http://' + config.get('url') + ':' + config.get('ports').http + '/auth/login/callback';


module.exports = function(passport) {
    //passport.serializeUser(function (user, done) {
    //    return done(null, user.id);
    //});
    //
    //passport.deserializeUser(function (id, done) {
    //    r
    //        .table('users')
    //        .get(id)
    //        .run(r.conn)
    //        .then(function (user) {
    //            done(null, user);
    //        });
    //});

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is
//   serialized and deserialized.
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    passport.use(new GoogleStrategy({
            clientID: config.get('google').clientID,
            clientSecret: config.get('google').clientSecret,
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        //loginCallbackHandler
        function (accesstoken, refreshtoken, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {
                console.info('profile: ', profile)
                // to keep the example simple, the user's google profile is returned to
                // represent the logged-in user.  in a typical application, you would want
                // to associate the google account with a user record in your database,
                // and return that user instead.
                return done(null, profile);
            });
        }
    ));
};