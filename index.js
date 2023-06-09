const inquirer = require ('inquirer');
const fs = require ('fs');
const { Circle, Triangle, Square } = require ('./lib/shapes.js');
const SVG = require ('./lib/generateSvg.js');


inquirer
    .prompt ([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 characters to be displayed in the logo',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or hex number for the text color in the logo',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose logo shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or hex number for the shape color',
        },
    ])

    .then ((data) => {
        console.log (data);

        let shape;
        if (data.shape.toLowerCase() === "circle") {
            shape = new Circle()
        }
        if (data.shape.toLowerCase() === "square") {
            shape = new Square()
        }
        if (data.shape.toLowerCase() === "triangle") {
            shape = new Triangle()
        }

        shape.setColor (data.shapeColor)
        
        const svg = new SVG()
        svg.setText (data.text, data.textColor)
        svg.setShape (shape)

        fs.writeFileSync("logo.svg", svg.render())
    })