const passportLocal = require('passport-local');
const LocalStrategy = passportLocal.Strategy;
const User = require('../src/models/user');

module.exports = (password) => {
    passport.serializeUser((user,done) => done(null,user.id))

    passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)))

    passport.use('local-signup', new LocalStrategy({
    	usernameField : 'email',
    	passwordField : 'password',
    	passReqToCallback : true
    }, (req, email, password, done) => {
    	User.findOne({
    		'local.email' : email
    	}, function (err, user) {
    		if(err) 
    			return done(err);
    		if(user){
    			return done(null, false, req.flash('signupMessage','That email is already taken. '));
    		}else{
    			var newUser = new User();

    			newUser.local.email = email;
    			newUser.local.password = newUser.generateHash(password);

    			newUser.save(err => {
    				if(err)
    					throw err;
    				return done(null, newUser)
    			})
    		}
    	})
    }))

    passport.use('local-login', new LocalStrategy({
    	usernameField : 'email',
    	password : 'password',
    	passReqToCallback : true //Allow to pass back the entire to the callback
    },
    function (req, email, password, done) {
    	User.findOne({
    		'local.email' : email
    	}, (err, user) => {
    		//If any errors
    		if(err)
    			return done(err)
    		//If no user is found 
    		if(!user)
    			return done(null, false, req.flash('LoginMessage', 'No user found')) 
    		//If user found but the password is wrong
    		if(!user.validatePassword(password))
    			return done(null, false, req.flash('LoginMessage', 'Oops! Wrong password.'))
  		//If all is well
  		return done(null, user);
    	})
    }

    ))
}
