class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f'({self.x}, {self.y})'

    def draw(self):
        print(f"Point {self}")
    
    #Comparison Magic Methods
    def __eq__(self, others):
        return self.x == others.x and self.y == others.y
    
    # def __gt__(self, others):
    #     return self.x > others.x and self.y > others.y

    def __lt__(self, other):
        return self.x < other.x and self.y < other.y
    
    #Arithmetic Magic Methods
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
    
#Creating Custom Magic Methods

class TagCloud:
    def __init__(self):
        self.__tags = {}
        
    def add(self, tag):
        self.__tags[tag.lower()] = self.__tags.get(tag.lower(), 0) + 1
        
    def __getitem__(self, tag):
        return self.__tags.get(tag.lower(), 0)
        
    def __setitem__(self, tag, count):
        self.__tags[tag.lower()] = count
        
    def __len__(self):
        return len(self.__tags)
    
    def __iter__(self):
        return iter(self.__tags)

cloud = TagCloud()
cloud.add("python")
cloud.add("python")
cloud.add("python")
cloud['java']
print(cloud.__dict__)
print(cloud._TagCloud__tags)


class Product:
    def __init__(self, price):
        self.price = price
        
    @property
    def price(self):
        return self.__price

    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError('Price cannot be negative(-)')
        self.__price = value

product = Product(-50)


class Animal:
    def __init__(self):
        print('Animal Constructor')
        self.age = 1
    
    def eat(self):
        print('eat')

class Mammals(Animal):
    def __init__(self):
        super().__init__()
        print('Mammals Constructor')
        self.weight = 2
    
    def walk(self):
        print('walk')

class Fish(Animal):
    def swim(self):
        print('swim')


class Bird(Animal):
    def fly(self):
        print('fly')


m = Mammals()
m.eat()


class Employee:
    def greet(self):
        print('Employee Greet')
        
class Person:
    def greet(self):
        print('Person Greet')
        
class Manager(Employee, Person):
    pass


from abc import ABC, abstractmethod

class InvalidOperationError(Exception):
    pass

class Stream(ABC):
    def __init__(self):
        self.opened = False

    @abstractmethod
    def read(self):
        pass
    
    def open(self):
        if self.opened:
            raise InvalidOperationError('Stream is already opened')
        self.opened = True
        
    def close(self):
        if not self.opened:
            raise InvalidOperationError('Stream is already closed')
        self.opened = False
        
        
class FileStream(Stream):
    def read(self):
        print('Reading data from a file...')

class NetworkStream(Stream):
    def read(self):
        print('Reading data from a network...')
        
class MemoryStream(Stream):
    def read(self):
        print('Reading data from memory...')
        
        
stream = NetworkStream()
stream.open()
stream.read()