const path = require('path');
const inquirer = require('inquirer');
const mysql = require('mysql');
const { response } = require('express');

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

const viewMyList = () => {
    const sql = `SELECT * FROM mylist`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        console.table(response);
        run();
    }
    )
}

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
}