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
print(cloud.__tags)