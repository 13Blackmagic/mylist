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
