'use strict';

class Shape {
    constructor(name, colour) {
        this._name = name;
        this._colour = colour;
    }

    get name() {
        return this._name;
    }

    get colour() {
        return this._colour;
    }

    getInfo() {
        return `Name: ${this._name}, Colour: ${this._colour}`;
    }
}

const shapeSelect = document.getElementById('shapeSelect');
const colorSelect = document.getElementById('colorSelect');
const createBtn = document.getElementById('createBtn');
const shapeGridContainer = document.getElementById('shapeGridContainer');
const storageFullMessage = document.getElementById('storageFullMessage');
const outputBox = document.getElementById('outputBox');
const shapesArray = [];
const maxShapes = 24;

function createShape() {
    if (shapesArray.length >= maxShapes) {
        storageFullMessage.style.display = 'block';
        return;
    }

    const shapeType = shapeSelect.value;
    const colour = colorSelect.value;
    const shape = new Shape(shapeType, colour);

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shapeType}`;
    shapeDiv.style.backgroundColor = colour;
    shapeDiv.title = shape.getInfo();
    shapeDiv.addEventListener('click', function() {
        outputBox.textContent = shape.getInfo();
    });

    const numShapes = shapesArray.length;
    const numRows = Math.floor(numShapes / 6);
    const row = numRows % 4; // Assuming 4 rows

    const leftOffset = (numShapes % 6) * 60; // 60px width + 10px margin
    const bottomOffset = row * 60; // 60px height + 10px margin

    shapeDiv.style.left = `${leftOffset}px`;
    shapeDiv.style.bottom = `${bottomOffset}px`;

    shapeGridContainer.appendChild(shapeDiv);
    shapesArray.push(shape);

    if (shapesArray.length >= maxShapes) {
        storageFullMessage.style.display = 'block';
    } else {
        storageFullMessage.style.display = 'none';
    }
}

createBtn.addEventListener('click', createShape);
