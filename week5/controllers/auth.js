const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const mysql = require('mysql');

// Creating a connection to the database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// Handling user registration
exports.register = async (req, res) => {
    console.log(req.body);
    const { name, email, password, passwordConfirm } = req.body;

    // Checking if the email is already in use
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, result) => {
        if (error) {
            console.log(error);
        }

        if (result.length > 0) {
            return res.render('register', {
                message: 'This email is already in use..'
            });
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Password does not match..'
            });
        }
         // Hashing the password before storing it in the database
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        // Inserting user data into the database
        db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                return res.render('register', {
                    message: 'User registered'
                });
            }
        });
    });
};

// Implementing the login logic
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

         // Checking if email and password are provided
        if (!email || !password) {
            return res.render('login', {
                message: 'Please provide both email and password.'
            });
        }
         // Querying the database for the user with the provided email
        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, result) => {
            if (error) {
                console.log(error);
            }

            if (result.length === 0 || !(await bcrypt.compare(password, result[0].password))) {
                return res.render('login', {
                    message: 'Email or password is incorrect.'
                });
            } else {

              // Creating a JWT token and setting it as a cookie
              const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            // Set the JWT cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                expires: new Date(Date.now() + 1 * 3600000), // 1 hour
            });
                // Passing the user information to the profile view
                res.render('profile', { user: result[0] });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

// When Logging out user to be redirected to the log in page
exports.logout = (req, res) => {
    res.redirect('/login');
};

exports.logout = (req, res) => {
  // Clear the JWT cookie
  res.clearCookie('jwt');
  // Redirect to the login page
  res.redirect('/login');
};

exports.isLoggedIn = async (req, res, next) => {

  if (req.path === '/' || req.path === '/home') {
    return next();
}
  try {
    if (req.cookies && req.cookies.jwt) {
      const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
      console.log('Decoded JWT:', decoded);
      // Check if req.cookies is defined before accessing its properties
      if (req.cookies && req.cookies.jwt) {
          // Verify the token with the JWT_SECRET
          const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
          
          // Check if the user associated with the token exists in the database
          db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (error, results) => {
              if (error) {
                  console.error(error);
                  return res.redirect('/login');
              }

              const user = results[0];
              if (user) {
                  // Attach user information to the request object
                  req.user = user;
                  return next();
              } else {
                  // Redirect to the login page or appropriate error page
                  return res.redirect('/login');
              }
          });
      } else {
          // Redirect to the login page or appropriate error page
          return res.redirect('/login');
      }}
  } catch (error) {
      // Handle the error (e.g., logging, redirecting to an error page)
      console.error(error);
      return res.redirect('/login');
  }
};