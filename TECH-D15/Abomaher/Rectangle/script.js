function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.calculateArea = function () {
        return this.width * this.height;
    };

    this.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };

    this.displayInfo = function () {
        return `Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
    };
}

document.getElementById("rectangleForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);
    const rectangle = new Rectangle(width, height);

    document.getElementById("rectangleInfo").textContent = rectangle.displayInfo();
});
