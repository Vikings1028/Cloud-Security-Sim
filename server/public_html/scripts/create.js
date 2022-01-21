/***************************************************************
 * 
 * Project     : PennyWise
 * 
 * File name   : create.js
 * 
 * Authors     : Diego Moscoso & Jacob Summerville
 * 
 * Description : This script contains JavaScript for create.html
 * 
 ***************************************************************/

/**********************************************************
 * Name     : addUser
 * Purpose  : This function adds a user to the database
 * 
 * @param   : None
 * @return  : None
 **********************************************************/
function createUser() {
    window.location.href = "home.html";
}

function createUser() {
    // grab everything from html page
    let f = $('#fNameInput').val().trim();
    let l = $('#fNameInput').val().trim();
    let u = $('#usernameInput').val().trim();
    let p = $('#passwordInput').val().trim();
    // create new user
    let user = { 
        fname    : f,
        lname    : l,
        username : u,
        password : p 
    };
    let user_str = JSON.stringify(user);
    // console.log(user);  // unomment when testing
    // add new user
    $.ajax({
        url: '/add/user/',
        data: { user: user_str },
        method:'POST',
        success: function() { 
            console.log('New user sent'); 
            alert('You may now login!');
            window.location.href = "index.html";
        },
        error: function() { 
            console.log('New user unsent'); 
        }
    });
}