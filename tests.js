// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when called with the argument "Jane" passed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when called with the argument "Alex"', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when called with the argument "Pat"', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should expect sayHello() to return "Hello, World!', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should expect sayHello(true) to return "Hello, World!', function() {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should expect sayHello(false) to return "Hello, World!', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should expect sayHello(null) to return "Hello, World!', function() {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it('should expect sayHello(5) to return "Hello, World!', function() {
        expect(sayHello(5)).toBe('Hello, World!');
    });
    it('should expect sayHello(2.3) to return "Hello, World!"', function() {
        expect(sayHello(2.3)).toBe('Hello, World!')
    });
    it('should expect sayHello([]) to return "Hello, World!', function() {
        expect(sayHello([])).toBe('Hello, World!');
    });
    it('should expect sayHello("5") to return "Hello, World!"', function() {
        expect(sayHello("5")).toBe('Hello, World!');
    });
});


describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean value', function() {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when 5 is passed', function() {
        expect(isFive(5)).toBe(true)
    });
    it('should return false when "5" is passed', function() {
        expect(isFive("5")).toBe(false)
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    ('should return a boolean value', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with "2"', function() {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when executed with -4', function() {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when executed with 3', function() {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when executed with banana', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when executed with 8', function() {
        expect(isEven('8')).toBe(true);
    });
    it('should return false when called with infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when called with a', function() {
        expect(isVowel('a')).toBe(true)
    });
    it('should return true when called with A', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when executed with y', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when called with 4', function() {
        expect(isVowel('4')).toBe(false);
    });
    it('should return false when executed with true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when executed with "banana"', function() {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when executed without an argument', function() {
        expect(isVowel()).toBe(false);
    });
});


describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when called with 2, 3', function() {
        expect(add(2,3)).toBe(5)
    });
    it('should return -12 when called with -3,9', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when called with "5", 6', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when called with "-4", "10"', function() {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when called with "banana" and "split"', function() {
        expect(add("banana", "split")).toBe('NaN');
    });
    it('should return NaN when called with 2, "apples"', function() {
        expect(add(2, "apples")).toBe('NaN');
    });
    it('should return NaN when called with no argument', function() {
        expect(add()).toBe('NaN');
    });
});