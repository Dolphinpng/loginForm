const GoogleStrategy = require("passport-google-oauth20").Strategy
const GithubStrategy = require("passport-github2").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const passport = require("passport");



const GOOGLE_CLIENT_ID = "279889766628-ngulcgb85l2gs74soanolu1kbrofiigq.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "8d97aeeeda4d4ee58f50"
const GITHUB_CLIENT_SECRET ="aec38b3d81fa827fd11423b90d17f9620bc6bb29"


passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret:  GOOGLE_CLIENT_SECRET,
            callbackURL:"/auth/google/callback",
        },
        function(accessToken,refreshToke,profile,done) {
            done(null,profile)
        }
    )
)

passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

//   passport.use(
//     new FacebookStrategy(
//       {
//         clientID: FACEBOOK_APP_ID,
//         clientSecret: FACEBOOK_APP_SECRET,
//         callbackURL: "/auth/facebook/callback",
//       },
//       function (accessToken, refreshToken, profile, done) {
//         done(null, profile);
//       }
//     )
//   );
  
passport.serializeUser((user,done)=> {
    done(null,user)
})
passport.deserializeUser((user,done)=> {
    done(null,user)
})

