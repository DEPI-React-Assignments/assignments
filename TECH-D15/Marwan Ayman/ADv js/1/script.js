function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function () {
        return this.width * this.height;
    };

    this.perimeter = function () {
        return 2 * (this.width + this.height);
    };

    this.displayInfo = function () {
        console.log("Width: " + this.width);
        console.log("Height: " + this.height);
        console.log("Area: " + this.area());
        console.log("Perimeter: " + this.perimeter());
    };
}


var rectangle1 = new Rectangle(10, 6);

rectangle1.displayInfo();