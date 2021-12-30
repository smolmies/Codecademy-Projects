const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers(){
      return this.appetizers;
    },
    set appetizers(appetizerIn){
      this.appetizers = appetizerIn;
    },
    get mains(){
      return this.mains;
    },
    set mains(mainIn){
      this.mains = mainIn;
    },
    get desserts(){
       return this.desserts;
    },
    set desserts(dessertIn){
        this.desserts = dessertIn;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
          name: dishName,
          price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Good evening. Today your dinner will be: ${appetizer.name} to start, ${main.name} as the main meal and ${dessert.name} for dessert! The total price will be ${totalPrice} dollars.`;
    }
  };
  
  menu.addDishToCourse('desserts', 'Creme Brulee', 4.50);
  menu.addDishToCourse('desserts', 'Bread Pudding', 6.50);
  menu.addDishToCourse('desserts', 'Icecream cake', 5.00);
  
  menu.addDishToCourse('mains', 'Beef Wellington', 10.50);
  menu.addDishToCourse('mains', 'Steak and fries', 10.50);
  menu.addDishToCourse('mains', 'Lasagne and salad', 10.50);
  
  menu.addDishToCourse('appetizers', 'Leek Soup', 3.50);
  menu.addDishToCourse('appetizers', 'Garlic bread', 3.50);
  menu.addDishToCourse('appetizers', 'Assortiment of Tapas', 5.00);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);