// this is the main file that will run the application
const path = require('path');
const inquirer = require('inquirer');
const mysql = require('mysql');
const { response } = require('express');

// this is the connection to the database
const questions = [
    {   type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Enemies',
            'View MyList',
            'Add to MyList',
            'Remove from MyList',
            'Exit'
        ]
    }
]
// these are the questions that will be asked to the user
run()
function run() {
    inquirer.prompt(questions).then(answers => {
        switch(answers.action) {
            case 'View All Enemies':
                viewAllEnemies();
                break;
            case 'View MyList':
                viewMyList();
                break;
            case 'Add to MyList':
                addToMyList();
                break;
            case 'Remove from MyList':
                removeFromMyList();
                break;
            case 'Exit':
                connection.end();
                break;
        }
    })
}
// this is the switch case that will run the function based on the user's answer
const viewAllEnemies = () => {
    const sql = `SELECT * FROM enemies`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        console.table(response);
        run();
    }
    )
    console.table(result);
    run();
}
// this is the function that will display all the enemies in the database
const viewMyList = () => {
    const sql = `SELECT * FROM mylist`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        console.table(response);
        run();
    }
    )
}
// this is how to add an enemy to the user's list
const addToMyList = () => {
    const sql = `SELECT * FROM enemies`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        console.table(response);
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the enemy you would like to add to your list?'
            }
        ]).then(answers => {
            const sql = `INSERT INTO mylist (id) VALUES (?)`;
            db.query(sql, answers.id, (err, response) => {
                if(err) throw err;
                console.log('Enemy added to your list!');
                run();
            })
        })
    })
}
// this is how to remove an enemy from the user's list
const removeFromMyList = () => {
    const sql = `SELECT * FROM mylist`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        console.table(response);
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the enemy you would like to remove from your list?'
            }
        ]).then(answers => {
            const sql = `DELETE FROM mylist WHERE id = ?`;
            db.query(sql, answers.id, (err, response) => {
                if(err) throw err;
                console.log('Enemy removed from your list!');
                run();
            })
        })
    })
    const exit = () => {
        console.log('Goodbye!');
        process.exit();
    };


    const db = mysql.createConnection(
        {
          host: 'localhost',
          user: 'root',
          password: 'Starwars0819',
          database: 'department_db'
        },
        console.log(`Connected to the database_db database.`)
      );

}
