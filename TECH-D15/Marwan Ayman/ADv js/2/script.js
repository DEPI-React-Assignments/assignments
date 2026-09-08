var obj = {

    getSetGen: function () {

    for (var prop in this) {

    if (typeof this[prop] !== "function") {

        var propName =
            prop.charAt(0).toUpperCase() + prop.slice(1);

        var getterName = "get" + propName;
        var setterName = "set" + propName;

        this[getterName] = makeGetter(prop);
        this[setterName] = makeSetter(prop);
        }
    }
 }
};


function makeGetter(propertyName) {

    return function () {
        return this[propertyName];
    };

}


function makeSetter(propertyName) {

    return function (value) {
        this[propertyName] = value;
    };

}


var user = {
    name: "Ali",
    age: 10,
    Id: 123
};


obj.getSetGen.call(user);


console.log(user.getName());
console.log(user.getAge());
console.log(user.getId());


user.setName("Ahmed");
user.setAge(25); 


console.log(user.getName());
console.log(user.getAge());